<template>
  <transition-group tag="div" name="list" mode="out-in" class="todolist">
    <todo-item
      v-for="item in list"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    ></todo-item>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUseTodo, useTodo } from "../../hooks/useTodo";
import { ITodo } from "../../types";
import TodoItem from './Item.vue'

export default defineComponent({
  name: "TodoList",
  props: {
    list: { type: Array as PropType<ITodo[]>, required: true }
  },
  setup(props) {
    // debugger
    const { removeTodo, setStatus, setTodoList, setDoing }: IUseTodo = useTodo()
    return { removeTodo, setStatus, setTodoList, setDoing }

  },
  components: {
    TodoItem
  }
})
</script>
<style scoped>
.todolist {
  /* width: 100%; */
  margin: 0 1rem;
  padding: 0 1rem;
}
.list-move,
.list-leave-active,
.list-enter-active {
  transition: 500ms cubic-bezier(0.87, -0.41, 0.19, 1.44);
}
.list-enter,
.list-leave-active {
  transform: translate(100%, 0);
  opacity: 0;
  will-change: transform, opacity;
}
</style>
