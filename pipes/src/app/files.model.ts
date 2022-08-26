export class Files{
    name: string;
    date?: any;
    size: number;
    extension: string;
    time?: Date;

    constructor(){
        this.name = '',
        this.date = 0,
        this.size = 0,
        this.extension = '',
        this.time = new Date()

    }
}