export interface ITodo {
    id: number
    content: string
    status: TODO_STATUS
}

export enum TODO_STATUS {
    FINISHED = "FINISHED",
    WILLDO = "WILLDO",
    DOING = "DOING",
}

export interface IState {
    list: ITodo[]
}