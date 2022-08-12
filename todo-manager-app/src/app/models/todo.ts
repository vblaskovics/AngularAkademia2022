export interface Todo {
    id: number,
    title: string,
    progress: string,
    description: string,
    date: string,
    user_id: number,
    subTodoIds?: number,
}
