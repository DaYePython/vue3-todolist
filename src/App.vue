<template>
  <todo-input></todo-input>
  <todo-list :list="todoList"></todo-list>
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
#app {
  @apply container;
}
</style>