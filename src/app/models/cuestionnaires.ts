import { Questions } from "./questions";

export class Questionnaires {

    id?:number;
    name:string;
    description:string;
    creationDate?:Date;
    questionList: Questions[];


    constructor(name:string,description:string, questionList:Questions[],creationDate?:Date) {
       this.name = name;
       this.description = description;
       this.creationDate= creationDate;
       this.questionList = questionList; 
    }
} 