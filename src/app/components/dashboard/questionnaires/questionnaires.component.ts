import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Questionnaires } from 'src/app/models/cuestionnaires';
import { LoginService } from 'src/app/services/login.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  username:any;
  questionnaireList:Questionnaires[] = [];
  loading:boolean;

  constructor(private _loginServices:LoginService,
              private _questionnaireServices:QuestionnairesService,
              private _toastr:ToastrService) {
       this.loading = false;         
    
   }

  ngOnInit(): void {
    this.GetUsername();
    this.GetQuestionnaireByUser()
  }

  GetUsername():void{

   this.username = this._loginServices.GetTokenDecoded().sub;
   
  }
  GetQuestionnaireByUser():void{
    this.loading = true;  
    this._questionnaireServices.GetQuestionnaireByUser()
          .subscribe(data=>{         
          this.questionnaireList = data;
          this.loading = false;    
          }, error=>{
            this._toastr.error("Ocurrio un error","Error: "+error)
            this.loading = false;  
          });
  }
  DeleteQuestionnaire(questionnaireID:number):void{
    if(confirm("Estas seguro que desea eliminar el cuestionario?")){
      this.loading = true;
      this._questionnaireServices.DeleteQuestionnaire(questionnaireID).subscribe(data=>{
        this.loading = false;
        this._toastr.success("El cuestionario fue eliminado con exito.", "Cuestionario Elimindo");
        this.GetQuestionnaireByUser();

      }, error=>{
        this.loading = false;
        this._toastr.error("Ocurrio un error","Error: "+error)
      })
    
    } 
  }

}
