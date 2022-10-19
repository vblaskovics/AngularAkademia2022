import { Thread } from "../thread/thread.model";
import { User } from "../user/user.model";
import { uuid } from "../util/uuid";

export class Message {
    id: string;
    sentAt: Date;
    isRead: boolean;
    author: User;
    text: string;
    thread: Thread;

    constructor(obj?:any) {
        this.id = obj?.id || uuid();
        this.sentAt = obj?.sentAt || new Date();
        this.isRead = obj?.isRead || false;
        this.author = obj?.author || null;
        this.text = obj?.text || null;
        this.thread = obj?.thread || null;
    }
}