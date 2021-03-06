<template>
  <div class="todo" :class="{ 'finished': isFinish, 'willdo': isWillDo, 'doing': isDoing }">
    <button class="todo__content" @click="setDoing(item.id)">{{ item.content }}</button>
    <div class="flex">
      <button
        class="todo__status btn hover:btn-hover focus:btn-hover"
        v-if="!isFinish"
        @click="setStatus(item.id)"
        :class="item.status === DOING ? 'doing' : 'willdo'"
      >
        <span class="icon fas" :class="[isDoing ? ' fa-spinner fa-pulse' : 'fa-check']"></span>
      </button>
      <button class="btn hover:btn-hover focus:btn-hover todo__delete" @click="removeTodo(item.id)">
        <span class="icon fas fa-times"></span>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ITodo, TODO_STATUS } from "../../types";
interface IStatus {
  DOING: TODO_STATUS,
  FINISHED: TODO_STATUS,
  WILLDO: TODO_STATUS
}

export default defineComponent({
  name: "TodoItem",
  props: {
    item: { type: Object as PropType<ITodo>, required: true }
  },
  setup(props, { emit }) {
    // item 是否完成
    const status: IStatus = Object.freeze({
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO
    })
    const isFinish = computed(() => props.item.status === status.FINISHED)
    const isDoing = computed(() => props.item.status === status.DOING)
    const isWillDo = computed(() => props.item.status === status.WILLDO)
    const removeTodo = (id: number): void => {
      emit('removeTodo', id)
    }
    const setDoing = (id: number): void => {
      emit('setDoing', id)
    }
    const setStatus = (id: number): void => {
      emit('setStatus', id)
    }
    return {
      setStatus,
      setDoing,
      removeTodo,
      isFinish,
      isDoing,
      isWillDo,
      ...status
    }
  }
})
</script>
<style scoped>
.todo {
  @apply flex justify-between;
  padding: 0.5em;
  border-radius: 3px;
  transition: 200ms;
  color: var(--primary-color);
}
.todo__content {
  position: relative;
}
.todo__content::after {
  content: "";
  position: absolute;
  /* display: inline-block; */
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;

  background-color: var(--primary-color);

  transform: scaleX(0);
  transform-origin: center;
  transition: 250ms ease-out;
  will-change: transform;
}

.todo__content:focus::after,
.todo__content:hover::after {
  transform: scaleX(1);
}
.finished {
  color: lightgreen;
  /* background-color: lightgreen; */
}
.finished .todo__content::after {
  background-color: lightgreen;
}
.todo__delete,
.todo__status {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.2em;
  background: none;
  padding: 0;
  line-height: 1;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  overflow: hidden;
  font-size: 80%;
  will-change: transform;
  transition: transform 0.5s ease-in-out;
}

.todo__delete:hover,
.todo__delete:focus {
  transform: rotate(180deg);
}
</style>
