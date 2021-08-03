import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerQuestionnaireComponent } from './answer-questionnaire/answer-questionnaire.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  
  { path: 'ingresar-nombre', component: EnterNameComponent },
  { path: 'preguntas', component: QuestionComponent },
  { path: 'respuestas-del-cuestionario', component: AnswerQuestionnaireComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireListRoutingModule { } 
