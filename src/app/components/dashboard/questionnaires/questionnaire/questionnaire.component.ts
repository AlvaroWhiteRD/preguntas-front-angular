import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})


export class QuestionnaireComponent implements OnInit {

  questionnaireID:any;
  loading:boolean;
  questionnaire:any = {}

  constructor(private _questionnaireServices:QuestionnairesService,
            private _activatedRoute:ActivatedRoute) {
    this.loading = false;
              
    this.questionnaireID = this._activatedRoute.snapshot?.paramMap.get("id");
    this.GetQuestionnaires();
  }

  ngOnInit(): void {
  }

  GetQuestionnaires():void{
    this.loading = true;
    this._questionnaireServices.GetQuestionnaires(this.questionnaireID).subscribe(data=>{
      this.loading = false;
      this.questionnaire = data;
      console.log(data);
      
    });
  }
}
