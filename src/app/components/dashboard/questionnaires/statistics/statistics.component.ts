import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerQuestionnaire } from 'src/app/models/answer-questionnaire';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  questionnaireId:any;
  loading:boolean;
  questionnaireAnswerList:AnswerQuestionnaire[] = [];

  constructor(private _toastr:ToastrService,private _routerActivate:ActivatedRoute, private _answerQuestionnaireSerices:AnswerQuestionnaireService) { 
    this.questionnaireId = _routerActivate.snapshot.paramMap.get('id');
    this.loading = false;
  }

  ngOnInit(): void {
    this.GetQuestionnaireAnswer();
  }

  GetQuestionnaireAnswer():void{
    this.loading = true;
    this._answerQuestionnaireSerices.GetQuestionnaireAnswer(this.questionnaireId).subscribe(data=>{
      this.loading = false;
      this.questionnaireAnswerList = data;
      console.log(data);
      
    },error=>{
      this.loading = false;
      console.error(error);
      
    });
  }
  DeleteAnswerQuestionnaire(questionnaireId:number):void{
    this.loading = true;
    this._answerQuestionnaireSerices.DeleteAnswerQuestionnaire(questionnaireId).subscribe(data=>{
      this.loading = false;
      this._toastr.error("La respuesta al cuestionario fue eliminada exitosamente",  "Registro Eliminado");
      this.GetQuestionnaireAnswer();
    }, error=>{
      this.loading = false;
      this._toastr.error("Hubo un eror al eliminar la respuesta al cuestionario. "+error);
    });
  }

  
}
