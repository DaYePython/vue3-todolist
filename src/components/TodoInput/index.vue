<template>
  <form class="form w-full flex" @submit.prevent="setTodoValue">
    <input
      class="input form__input text-md w-full"
      v-model="todoValue"
      @keyup.enter="setTodoValue"
      type="text"
      placeholder="回车可快速添加"
    />
    <button type="submit" class="btn hover:btn-hover focus:btn-hover form__btn text-sm">
      <span class="fas fa-plus"></span>
    </button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo, IUseTodo } from "../../hooks/useTodo";

export default defineComponent({
  name: "TodoInput",
  setup() {
    const { setTodo }: IUseTodo = useTodo()
    let todoValue = ref<string>('');
    const setTodoValue = (): void => {
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
.form {
  padding: 1.5rem 1rem 0 1rem;
}
.form .form__input {
  /* flex: 1; */
  font-size: 14px;
  border-radius: 2em;
  background: none;
  border: #e3e3e3 1px solid;
  padding: 0.75em 1.5em;
  margin: 0 0.5em;
  transition: border 250ms ease-out;
}

.form .form__input:focus {
  border: var(--primary-color) 1px solid;

  outline: none;
}
</style>
