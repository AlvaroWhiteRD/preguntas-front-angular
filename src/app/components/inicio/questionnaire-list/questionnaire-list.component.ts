import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaires } from 'src/app/models/cuestionnaires';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css']
})
export class QuestionnaireListComponent implements OnInit {

  loading:boolean;
  questionnaireList:any[];

  constructor(private _questionnaireServices:QuestionnairesService
                      ,private _router:Router
                      , private _answerServices:AnswerQuestionnaireService) {
    this.loading =false;
    this.questionnaireList = [];
   }

  ngOnInit(): void {
    this.GetListQuestionnaires()
  }
  GetListQuestionnaires():void{
    this.loading = true;
    this._questionnaireServices.GetListQuestionnaires().subscribe(data=>{
      this.loading = false;
      this.questionnaireList = data;
      console.table(data);
      
    },error=>{
      console.error(error);
      this.loading = false;
    });
  }

  QuestionnaireID(questionnaireID:number):void{
    this._answerServices.questionnaireID = questionnaireID;
    this._router.navigate(['/inicio/ingresar-nombre']);
  }
}
