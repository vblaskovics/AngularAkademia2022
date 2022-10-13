export class Player {
    [key:string]: any;
    id?:number ;
    name: string;
    shirtNumber: number;
    team: string;
    age: number;
    wage: number;
    endOfContract: Date ;

    constructor(){
        this.id = 0;
        this.name = '';
        this.shirtNumber = 0;
        this.team = '';
        this.age = 0;
        this.wage = 0;
        this.endOfContract = new Date();
    }
}