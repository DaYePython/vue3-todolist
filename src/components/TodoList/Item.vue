<template>
    <div>
        <input type="checkbox" :checked="isFinish" @click="setStatus(item.id)" />
        <span :class="isFinish ? 'finished' : ''">{{ item.content }}</span>
        <button @click="removeTodo(item.id)">删除</button>
        <button
            v-if="!isFinish"
            @click="setDoing(item.id)"
            :class="item.status === DOING ? 'doing' : 'willdo'"
        >{{ item.status === DOING ? "正在做" : "马上做" }}</button>
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
            ...status
        }
    }
})
</script>
<style scoped>
.finished {
    @apply line-through;
    @apply italic;
    @apply text-gray-400;
}
.doing {
    @apply bg-gray-300;
    @apply text-gray-100;
    @apply transition  delay-100;
}
.willdo {
    @apply bg-yellow-500;
    @apply text-white;
    @apply transition  delay-100;
}
</style>