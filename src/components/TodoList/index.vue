<template>
    <div>
        <h3>Todo-List</h3>
        <todo-item
            v-for="item in list"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        ></todo-item>
    </div>
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
</style>