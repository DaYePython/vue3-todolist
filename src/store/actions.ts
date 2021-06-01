import { Commit } from 'vuex';
import { ITodo, IState } from './../types/index';
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from './actionTypes';

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    [SET_TODO](ctx: ICtx, todo: ITodo): void {
        let { commit, state } = ctx
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({ commit }: ICtx, list: ITodo[]): void {
        commit(SET_TODO_LIST, list)
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id)
    },
    [SET_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_STATUS, id)

    },
    [SET_DOING]({ commit }: ICtx, id: number): void {
        commit(SET_DOING, id)

    }
}