import { Answers } from "./answers";

export class Questions {

    description:string;
    answerList: Answers[];
    hide?:boolean;

    constructor(description:string, answerList:Answers[]) {
    
       this.description = description;
       this.answerList = answerList; 
       this.hide = true;
    }
} 