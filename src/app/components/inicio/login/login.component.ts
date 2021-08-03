import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  loading:boolean = false;
  constructor(private fb:FormBuilder,private toastr: ToastrService, private route:Router,
              private _loginServices:LoginService) { 

    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  login():void{

    const LOGIN:Users = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
  
    this.loading =  true;

    this._loginServices.Login(LOGIN).subscribe(data=>{
      this.loading =  false;
      this._loginServices.SetLocalStorages(data.token);
      this.route.navigate(['/dashboard']);
    },error=>{
      console.error(error);
      
     this.toastr.error(error.error.message, 'Error De Credenciales');
     this.loading = false;
     this.loginForm.reset();
    });
   /* setTimeout(()=>{
    if(LOGIN.username == "Admin" && LOGIN.password==="admin123"){
        this.loginForm.reset();
        this.route.navigate(['/dashboard']);
    }else{
        this.toastr.error('Usuario o Contraseña no valido', 'Error');
        this.loginForm.reset();
    }
    this.loading =  false;
    }, 3000);  */

    
  }

}
