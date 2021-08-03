import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  loading:boolean;
  constructor(private fb:FormBuilder, private _userServices:UsersService,
                        private router:Router, private toastr:ToastrService) { 

    this.loading = false;
    this.registerForm = this.fb.group({
      username:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:['']
    }, 
    {validator: this.checkPassword}
    );

  }

  ngOnInit(): void {
  }
  registerUsers():void{
    console.log(this.registerForm);

    const USER:Users = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    this.loading = true;
     this._userServices.registerUsers(USER).subscribe( data=>{
      console.log(data);
      this.toastr.success('El usuario ' + USER.username + ' fue registrado con exito!', 'Usuario Registrado');
      this.router.navigate(['/inicio/login']);
      this.loading = true;
     }, error=>{
         this.loading = false;
        
         console.log(error);
         
         this.toastr.error(error.error.message, 'Error De Registro');
         this.registerForm.reset(); 
     }
     );
    
  }
  checkPassword(group:FormGroup){
    const PASSWORD = group.controls.password.value;
    const CONFIRMPASSWORD = group.controls.confirmPassword.value;

    return PASSWORD === CONFIRMPASSWORD ? null : {notSame:true};

  }

}
