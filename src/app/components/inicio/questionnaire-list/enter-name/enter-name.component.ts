import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent implements OnInit {
  participantName:string;
  constructor(private _answerQuestionnaireService:AnswerQuestionnaireService,
              private _router:Router) {
      this.participantName = '';          
               }

  ngOnInit(): void {
    if(this._answerQuestionnaireService == null){
      this._router.navigate(['/inicio']);
      return;
    }
  }

  ParticipantName():void{
    this._answerQuestionnaireService.participantName = this.participantName;
    this._router.navigate(['/inicio/preguntas']);
  }
}
