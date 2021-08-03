import { AnswerQuestionnaireDetail } from "./answer-questionnaire-detail";

export class AnswerQuestionnaire{

    questionnairesId!: number;
    participantName!: string;
    answerQuestionnaireDetailList!: AnswerQuestionnaireDetail[];
    creationDate!:any;
    id:any;

    constructor(id = undefined){
        this.id= id;
    }

}