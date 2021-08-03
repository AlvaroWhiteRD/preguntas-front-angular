import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questionnaires } from '../models/cuestionnaires';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {

 private myAppURL:string;
 private myApiURL:string;

 titleQuestionnaire:string;
 descriptionQuestionnaire:string;

 constructor( private _http:HttpClient ) {

   this.myAppURL= "http://localhost:50451";
   this.myApiURL = "/api/Questionnaire";

   this.titleQuestionnaire = "";
   this.descriptionQuestionnaire = "";
  
 }

 SavesQuestionnaires(questionnaire:Questionnaires):Observable<any>{
   return this._http.post(this.myAppURL + this.myApiURL, questionnaire);
 }

 GetQuestionnaireByUser():Observable<any>{
   return this._http.get(this.myAppURL + this.myApiURL + "/GetQuestionnaireByUser");
 }

 DeleteQuestionnaire(questionnaireID:number):Observable<any>{
  return this._http.delete(this.myAppURL + this.myApiURL + "/" + questionnaireID);
 }

 GetQuestionnaires(questionnaireID:number):Observable<any>{
    return this._http.get(this.myAppURL + this.myApiURL+ "/" + questionnaireID);
 }

 GetListQuestionnaires():Observable<any>{
    return this._http.get(this.myAppURL + this.myApiURL+ '/GetListQuestionnaires');
 }

}
