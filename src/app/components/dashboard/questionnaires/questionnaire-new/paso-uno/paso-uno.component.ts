import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {

  dataQuestionnaireForm:FormGroup;

  constructor( private fb:FormBuilder,private _router:Router, private _questionnaireServices:QuestionnairesService ) { 

    this.dataQuestionnaireForm = this.fb.group({
        title:['', Validators.required],
        description:['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  PasoUno():void{
    this._questionnaireServices.titleQuestionnaire = this.dataQuestionnaireForm.value.title;
    this._questionnaireServices.descriptionQuestionnaire = this.dataQuestionnaireForm.value.description
    this._router.navigate(['/dashboard/nuevo-cuestionario/paso-dos']);
  }

}
