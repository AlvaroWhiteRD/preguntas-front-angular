import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerQuestionnaire } from '../models/answer-questionnaire';
import { Questionnaires } from '../models/cuestionnaires';

@Injectable({
  providedIn: 'root'
})
export class AnswerQuestionnaireService {
  
  participantName!:string;
  questionnaireID!: number;
  answer:number[] = [];
  questionnaire!:Questionnaires;
  myAppURL:string;
  myApiURL:string;

  constructor(private _http:HttpClient) { 
    this.myAppURL= "http://localhost:50451";
    this.myApiURL = "/api/AnswerQuestionnaires";
  }

  SavesAnswerQuestionnaire(answerQuestionnaire:AnswerQuestionnaire):Observable<any>{  
    return this._http.post(this.myAppURL + this.myApiURL, answerQuestionnaire);
  }

  GetQuestionnaireAnswer(questionnaireId:number):Observable<any>{
    return this._http.get(this.myAppURL + this.myApiURL +"/"+ questionnaireId);
  }
  DeleteAnswerQuestionnaire(answerQuestionnaireId:number):Observable<any>{
    return this._http.delete(this.myAppURL + this.myApiURL +"/"+answerQuestionnaireId);
  }
  GetQuestionnaireAndAnswerList(answerId:number):Observable<any>{
    return this._http.get(this.myAppURL + this.myApiURL +"/GetQuestionnaireByAnswerID/"+ answerId);
  }

}
