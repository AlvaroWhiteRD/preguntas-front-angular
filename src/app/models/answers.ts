export class Answers {
    id?: number;
    description:string;
    correctAnswer:boolean;

    constructor(description:string, correctAnswer:boolean, id?:number) {
       this.id = id;
       this.description = description;
       this.correctAnswer = correctAnswer; 
    }
} 