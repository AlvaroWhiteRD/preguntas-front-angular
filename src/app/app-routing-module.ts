import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesPasswordComponent } from './components/dashboard/changes-password/changes-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PasoDosComponent } from './components/dashboard/questionnaires/questionnaire-new/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './components/dashboard/questionnaires/questionnaire-new/paso-uno/paso-uno.component';
import { QuestionnaireNewComponent } from './components/dashboard/questionnaires/questionnaire-new/questionnaire-new.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaires/questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { AnswerDetailComponent } from './components/dashboard/questionnaires/statistics/answer-detail/answer-detail.component';
import { StatisticsComponent } from './components/dashboard/questionnaires/statistics/statistics.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { AnswerQuestionnaireComponent } from './components/inicio/questionnaire-list/answer-questionnaire/answer-questionnaire.component';
import { EnterNameComponent } from './components/inicio/questionnaire-list/enter-name/enter-name.component';
import { QuestionComponent } from './components/inicio/questionnaire-list/question/question.component';
import { QuestionnaireListComponent } from './components/inicio/questionnaire-list/questionnaire-list.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { AuthGuard } from './helpers/auth.guard';


const ROUTES: Routes = [
 { path: '', redirectTo: '/inicio', pathMatch:'full' },
 {path:'inicio', component:InicioComponent, children:[
     { path: '', component: BienvenidaComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'login', component: LoginComponent },
     { path: 'lista-cuestionarios', component: QuestionnaireListComponent, loadChildren: 
        () => import('./components/inicio/questionnaire-list/questionnaire-list.module')
                                        .then(x=>x.QuestionnaireListModule)},

 ]},
 { path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], loadChildren:
   () => import('./components/dashboard/dashboard.module')
           .then(x=>x.DashboardModule)     
},//


 { path: '**', redirectTo: '/inicio', pathMatch:'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})



export class AppRoutingModule { }
