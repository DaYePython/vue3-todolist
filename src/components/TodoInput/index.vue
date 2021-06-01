<template>
    <div>
        <input v-model="todoValue" v-on:keyup.enter="setTodoValue" type="text" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo, IUseTodo } from "../../hooks/useTodo";

export default defineComponent({
    name: "TodoInput",
    setup() {
        const { setTodo }: IUseTodo = useTodo()
        let todoValue = ref<string>('');
        const setTodoValue = (e: KeyboardEvent): void => {
            if (todoValue.value.trim().length !== 0) {
                console.log(todoValue.value.trim().length);
                setTodo(todoValue.value)
                todoValue.value = ''
            }
        }

        return {
            todoValue,
            setTodoValue
        }

    }
})
</script>
<style scoped>
</style>