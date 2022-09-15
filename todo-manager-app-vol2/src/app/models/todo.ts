export interface Todo {
    id: number;
    title: string;
    progress: "open" | "in progress" | "done";
    description: string;
    date: string;
    user_id: number;
    subTodoIds?: Array<Number>;
}
