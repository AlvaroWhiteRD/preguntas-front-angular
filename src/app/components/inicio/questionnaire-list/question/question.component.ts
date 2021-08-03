import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuestionnaire } from 'src/app/models/answer-questionnaire';
import { AnswerQuestionnaireDetail } from 'src/app/models/answer-questionnaire-detail';
import { Questions } from 'src/app/models/questions';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionnaireID!:number;
  index:number;
  answerSelectedIndex:number;
  loading:boolean;
  answerConfirm:boolean;


  answerSelected:any;
  questionList:Questions[] = [];

  answerQuestionnaireDetailList:AnswerQuestionnaireDetail[] = [];


  constructor(private _answerQuestionnaireServices:AnswerQuestionnaireService,
              private _questionnaireServices:QuestionnairesService,
              private _router:Router) {
      this.loading = false; 
      this.answerConfirm = false;   
      this.index = 0;      
      this.answerSelectedIndex = 0;
               }

  ngOnInit(): void {
     
    this.questionnaireID=this._answerQuestionnaireServices.questionnaireID;
    if(this.questionnaireID == null){
      this._router.navigate(['/inicio']);
      return;
    }
    this.GetQuestionnaireByID();
    this._answerQuestionnaireServices.answer = [];
  }

  GetQuestionnaireByID():void{
    this.loading = true;
    this._questionnaireServices.GetQuestionnaires(this.questionnaireID).subscribe(data=>{
      this.questionList= data.questionList;
      this.loading = false;
      this._answerQuestionnaireServices.questionnaire = data;
      
    },error=>{
      this.loading = false;

    });
  }

  GetQuestion():string{
    return this.questionList[this.index]?.description
  }
  GetIndex():number{
    return this.index;
  }
  AnswerSelected(answer:any, answerSelectedIndex:number):void{
    this.answerSelected = answer;
    this.answerConfirm = true;
    this.answerSelectedIndex = answerSelectedIndex;
  }
  AddClassOption(answer:any):string{
    if(answer === this.answerSelected){
      return "active text-light";
    }else{
      return "";
    }
  }

  NextQuestion():void{
//este array guarda en memoria la rspuesta
    this._answerQuestionnaireServices.answer.push(this.answerSelectedIndex);

    //creamos objeto respuestadetalle /
    //este array guarda en la base de datos la respuesta seleccionada
    const ANSWER_DETAIL:AnswerQuestionnaireDetail = {
      answersId: this.answerSelectedIndex
    }

    //agregamos objetos al array.
    this.answerQuestionnaireDetailList.push(ANSWER_DETAIL);

    this.answerConfirm = false;
    this.index++;
    this.answerSelectedIndex = 0;

    if (this.index == this.questionList.length) {
     // this._router.navigate(['/inicio/respuestas-del-cuestionario']);
     this.SavesAnswerQuestionnaire();
    }
  }
  SavesAnswerQuestionnaire():void {
      const ANSWER_QUESTIONNAIRE:AnswerQuestionnaire={
        questionnairesId: this._answerQuestionnaireServices.questionnaireID,
        participantName:this._answerQuestionnaireServices.participantName,
        answerQuestionnaireDetailList: this.answerQuestionnaireDetailList,
        creationDate: undefined,
        id: undefined
      }
      
      this.loading = true;
      
      this._answerQuestionnaireServices.SavesAnswerQuestionnaire(ANSWER_QUESTIONNAIRE).subscribe(data=>{
        this.loading = false;
        this._router.navigate(['/inicio/respuestas-del-cuestionario']);
      }, error=>{
        this.loading = false;
        console.log(error);
        
      });
  }


}
