import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerQuestionnaireDetail } from 'src/app/models/answer-questionnaire-detail';
import { Questionnaires } from 'src/app/models/cuestionnaires';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {

  questionnaire!:Questionnaires;
  answerDetail:AnswerQuestionnaireDetail[] = [];
  answerId:any;

  loading:boolean = false;


  constructor(private _activateRoute:ActivatedRoute, private _answerQuestionnaireServices:AnswerQuestionnaireService) {
    this.answerId = _activateRoute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.GetQuestionnaireAndAnswerList();
  }

  GetQuestionnaireAndAnswerList():void{
    this.loading = true;
    this._answerQuestionnaireServices.GetQuestionnaireAndAnswerList(this.answerId).subscribe(data=>{
     this.loading = false;
      this.questionnaire = data.questionnaire;
      this.answerDetail = data.answer;
      console.log(data);
      
    },error=>{
      this.loading = false;
    });
  }
}
