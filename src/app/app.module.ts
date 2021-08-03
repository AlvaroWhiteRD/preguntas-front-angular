import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { AppRoutingModule } from './app-routing-module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/dashboard/nav-bar/nav-bar.component';
import { AddTokenInterceptor } from './helpers/add-token.interceptor';
import { QuestionnaireListComponent } from './components/inicio/questionnaire-list/questionnaire-list.component';
import { SharedModule } from './shared/shared.module';
import { QuestionnaireListModule } from './components/inicio/questionnaire-list/questionnaire-list.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavBarComponent,
    QuestionnaireListComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
