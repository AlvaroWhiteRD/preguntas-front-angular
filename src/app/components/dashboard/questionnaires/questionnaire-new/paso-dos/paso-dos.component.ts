import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questionnaires } from 'src/app/models/cuestionnaires';
import { Questions } from 'src/app/models/questions';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {

  questionsList:Questions[] = [];
  titleQuestionnaire:string;
  descriptionQuestionnaire:string;
  loading:boolean;

  constructor( private _questionnaireServices:QuestionnairesService, private _toastr:ToastrService, private _router:Router) { 
    
    this.titleQuestionnaire = this._questionnaireServices.titleQuestionnaire;
    this.descriptionQuestionnaire = this._questionnaireServices.descriptionQuestionnaire;

    this.loading = false;
  }

  ngOnInit(): void { }

  SavesQuestions(question:Questions):void{
    this.questionsList.push(question);
    
  }
  DeleteQuestion(index:number):void{
    this.questionsList.splice(index, 1);
  }

  SaveQuestionnaire():void{

    const QUESTIONNAIRE:Questionnaires= {
      name : this.titleQuestionnaire,
      description : this.descriptionQuestionnaire,
      questionList : this.questionsList
    }
    this.loading = true;
    this._questionnaireServices.SavesQuestionnaires(QUESTIONNAIRE).subscribe(data=>{
      this._toastr.success('Cuestionario registrado con exito',' Registro de cuestinario');
      this._router.navigate(['/dashboard']);
        this.loading = false;
    },error=>{
        this._toastr.error('No logramos registrar el cuestionario. intenta nuevamente','Error en registro de cuestinario');
        this._router.navigate(['/dashboard']);
        this.loading = false;
    });


  }
}
