import { ITodo } from './../types/index';

export interface IUseLocalStorage {
    getLocalList: () => ITodo[]
    setLocalList: (list: ITodo[]) => void
}

export function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(window.localStorage.getItem('todolist') || '[]')
    }
    function setLocalList(list: ITodo[]): void {
        window.localStorage.setItem('todolist', JSON.stringify(list || []))
    }
    return {
        getLocalList,
        setLocalList
    }
}