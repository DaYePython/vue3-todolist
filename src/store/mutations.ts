import { IState, ITodo, TODO_STATUS } from './../types/index';
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from './actionTypes';
export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        // debugger
        // watch 不能监听到数组原生操作
        // state.list.unshift(todo)
        state.list = [todo, ...state.list]
        console.log(state.list)
    },
    [SET_TODO_LIST](state: IState, list: ITodo[]): void {
        // debugger
        state.list = list
    },
    [REMOVE_TODO](state: IState, id: number): void {
        // debugger
        state.list = state.list.filter(item => item.id !== id)
    },
    [SET_STATUS](state: IState, id: number): void {
        // debugger
        const list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                let itemStatus = item.status
                switch (itemStatus) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO
                        break
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED
                        break
                    default:
                        break
                }
            }
            return item
        })
        state.list = list
    },
    [SET_DOING](state: IState, id: number): void {
        // debugger
        // 只能有一件事情willdo
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                // 两种状态互相切换
                item.status =
                    item.status === TODO_STATUS.WILLDO
                        ? TODO_STATUS.DOING
                        : TODO_STATUS.WILLDO
            } else {
                //  item.id !== id
                if (item.status === TODO_STATUS.DOING) {
                    item.status = TODO_STATUS.WILLDO
                }

            }
            return item
        })
    }
}