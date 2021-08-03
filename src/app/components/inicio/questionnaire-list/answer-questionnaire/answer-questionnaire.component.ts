import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaires } from 'src/app/models/cuestionnaires';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-answer-questionnaire',
  templateUrl: './answer-questionnaire.component.html',
  styleUrls: ['./answer-questionnaire.component.css']
})
export class AnswerQuestionnaireComponent implements OnInit {

  questionnaire?:Questionnaires;
  answerUser:number[] = []

  constructor(private _answerQuestionnaireServices:AnswerQuestionnaireService,
         
              private _router:Router) { }

  ngOnInit(): void {
    if(this._answerQuestionnaireServices.questionnaireID == null){
        this._router.navigate(['/inicio'])
    }else{
      this.questionnaire = this._answerQuestionnaireServices.questionnaire;
      this.answerUser = this._answerQuestionnaireServices.answer;
    }
  }

}
