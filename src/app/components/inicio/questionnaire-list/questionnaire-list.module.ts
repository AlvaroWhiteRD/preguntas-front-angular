import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireListRoutingModule } from './questionnaire-list-routing.module';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { QuestionComponent } from './question/question.component';
import { AnswerQuestionnaireComponent } from './answer-questionnaire/answer-questionnaire.component';
//modulos
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EnterNameComponent,
    QuestionComponent,
    AnswerQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireListRoutingModule,
    SharedModule
  ]
})
export class QuestionnaireListModule { }
