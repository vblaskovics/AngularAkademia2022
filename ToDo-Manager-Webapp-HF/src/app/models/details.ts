import { User } from "./user";

export interface Details {
    id?: number,
    title: string,
    status: string,
    details: string,
    creationDate: string,
    user?: User[],
    email: string
}