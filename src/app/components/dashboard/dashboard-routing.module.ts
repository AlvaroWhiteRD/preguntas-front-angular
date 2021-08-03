import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesPasswordComponent } from './changes-password/changes-password.component';
import { PasoDosComponent } from './questionnaires/questionnaire-new/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './questionnaires/questionnaire-new/paso-uno/paso-uno.component';
import { QuestionnaireNewComponent } from './questionnaires/questionnaire-new/questionnaire-new.component';
import { QuestionnaireComponent } from './questionnaires/questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { AnswerDetailComponent } from './questionnaires/statistics/answer-detail/answer-detail.component';
import { StatisticsComponent } from './questionnaires/statistics/statistics.component';

const routes: Routes = [
  {path: '', component:QuestionnairesComponent},
  {path: 'cambiar-contrasena', component:ChangesPasswordComponent},
  {path: 'see-questionnaire/:id', component:QuestionnaireComponent},
  {path: 'estadisticas/:id', component:StatisticsComponent},
  {path: 'detalle-respuestas/:id', component:AnswerDetailComponent},
  {path: 'nuevo-cuestionario', component:QuestionnaireNewComponent, children:[
     {path: 'paso-uno', component:PasoUnoComponent},
     {path: 'paso-dos', component:PasoDosComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
