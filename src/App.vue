<template>
  <div class="container">
    <todo-input></todo-input>
    <todo-list class="todolist" :list="todoList"></todo-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import TodoList from './components/TodoList/index.vue';
import TodoInput from './components/TodoInput/index.vue';
import { IUseTodo, useTodo } from './hooks/useTodo';
import { Store, useStore } from 'vuex';
import { ITodo } from './types';
export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    TodoInput
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo()
    const store: Store<any> = useStore()
    onMounted(() => {
      console.log(store.state.list, 'App mounted');
      // debugger
      setTodoList()
    })
    return {
      todoList: computed<ITodo[]>(() => store.state.list)
    }

  }
})
</script>

<style scoped>
.container {
  @apply rounded-2xl overflow-hidden;
  min-height: 50vh;
  width: max-content;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.todolist {
  flex: 1;
}
.todolist:last-child {
  margin-bottom: 3em;
}
</style>
