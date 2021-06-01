import { SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from './../store/actionTypes';
import { SET_TODO } from '../store/actionTypes';
import { Store, useStore } from 'vuex';
import { ITodo, TODO_STATUS } from '../types/index';
import { useLocalStorage, IUseLocalStorage } from './useLocalStorage';
import { watch } from '@vue/runtime-core';
export interface IUseTodo {
    setTodo: (value: string) => void
    setTodoList: () => void
    removeTodo: (id: number) => void
    setStatus: (id: number) => void
    setDoing: (id: number) => void
}

export function useTodo(): IUseTodo {
    const store: Store<any> = useStore()
    const { setLocalList, getLocalList }: IUseLocalStorage = useLocalStorage()
    // 监听 store.state.list 实现 tolist 与 localstorage 同步
    // note: watch 只能监听到了引用的改变， 对于原生数组操作无效(引用的地址没有改变)
    watch(() => store.state.list, (todoList: ITodo[]) => {
        setLocalList(todoList)
    })

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        console.log(todo);
        store.dispatch(SET_TODO, todo)

        setLocalList(store.state.list)
    }
    // LocalStorage -> vuex store
    function setTodoList(): void {
        const list = getLocalList()
        // debugger
        store.dispatch(SET_TODO_LIST, list)
    }
    function removeTodo(id: number) {
        // debugger
        store.dispatch(REMOVE_TODO, id)
        // vuex->localstorage
        // setLocalList(store.state.list)
    }
    function setStatus(id: number) {
        // debugger
        store.dispatch(SET_STATUS, id)
        // setLocalList(store.state.list)
    }
    function setDoing(id: number) {
        // debugger
        store.dispatch(SET_DOING, id)
        // 使用watch 注释
        // setLocalList(store.state.list)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing,
    }
}