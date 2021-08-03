import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChangesPasswordComponent } from './changes-password/changes-password.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { NewQuestionComponent } from './questionnaires/questionnaire-new/paso-dos/new-question/new-question.component';
import { PasoUnoComponent } from './questionnaires/questionnaire-new/paso-uno/paso-uno.component';
import { PasoDosComponent } from './questionnaires/questionnaire-new/paso-dos/paso-dos.component';
import { StatisticsComponent } from './questionnaires/statistics/statistics.component';
import { AnswerDetailComponent } from './questionnaires/statistics/answer-detail/answer-detail.component';
import { QuestionnaireComponent } from './questionnaires/questionnaire/questionnaire.component';
import { QuestionnaireNewComponent } from './questionnaires/questionnaire-new/questionnaire-new.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChangesPasswordComponent,
    QuestionnairesComponent,
    QuestionnaireNewComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NewQuestionComponent,
    QuestionnaireComponent,
    StatisticsComponent,
    AnswerDetailComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
