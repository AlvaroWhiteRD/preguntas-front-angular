import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Answers } from 'src/app/models/answers';
import { Questions } from 'src/app/models/questions';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestionForm:FormGroup;
  //question:Questions;  
  correctAnswer:number;
//comunicacion hijo al padre
  @Output() SendQuestion = new EventEmitter<Questions>();

  constructor(private _fb:FormBuilder, private _toastr:ToastrService) { 

    this.correctAnswer = 0;

    this.newQuestionForm = this._fb.group({
      title:['', Validators.required],
      answers: this._fb.array([])
    });
  }

  ngOnInit(): void {
    this.AddAnswerForDefault();
  }

  //devuelve formarray de respuestas
  get GetAnwers():FormArray{
      return this.newQuestionForm.get("answers") as FormArray;
  }

  //agregar respuestas al array
  AddAnswersArray():void{
    this.GetAnwers.push( this._fb.group({
      description:['', Validators.required],
      correctAnswer: 0
    }));
  }

  //agregamos dos repuestas por defecto al cargar el formulario
  AddAnswerForDefault():void{
    this.AddAnswersArray();
    this.AddAnswersArray();
  }
  //eliminamos la respuesta seleccionada
  RemoveAnswer(index:number):void{
    if (this.GetAnwers.length === 2){
        this._toastr.error('Debe de haber al menos dos respuestas', 'Error! ');        
    } else{
      this.GetAnwers.removeAt(index);
    }
  }
  //validamos el radio button
  SetAnswerValidRadioButton(index:number):void{
    this.correctAnswer = index;
  }

  //agregamos nueva pregunta/
  AddAnwersArray():void{
    //obtenemos el titulo de la pregunta
    const TITLE_QUESTION = this.newQuestionForm.get('title')?.value;
    //obtenemos el array de las respuestas
    const ANSWERS_LIST = this.newQuestionForm.get('answers')?.value;
    //creamos un array de respuestas
    const ANSWERS_ARRAY:Answers[] = [];

    //recorremos el array de respuesta para
    ANSWERS_LIST.forEach((element:Answers, index:any) => {
     
      const answer:Answers = new Answers( element.description, false);
//qcorrect
      if (index === this.correctAnswer) {
        answer.correctAnswer = true;
      }
      //llenamos el array ANSWERS_ARRAY
      ANSWERS_ARRAY.push(answer);
    });//fin forEach
    //creamos el objeto de preguntas
    const QUESTION:Questions = new Questions(TITLE_QUESTION, ANSWERS_ARRAY);
    
    //pasamos la data al componente padre.
    this.SendQuestion.emit(QUESTION);
    //reseteamos el formulario y el array
    this.reset();
    

  }
  //reseteamos el formulario y array
  reset():void{
    //this.correctAnswer = 0;
    this.newQuestionForm.reset();
    this.GetAnwers.clear();
    this.AddAnswerForDefault();
  }
}
