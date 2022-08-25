export class Files{
    name: string;
    date: Date;
    size: number;
    extension: string;
    time: Date

    constructor(){
        this.name = '',
        this.date = new Date(),
        this.size = 0,
        this.extension = '',
        this.time = new Date()

    }
}