import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-changes-password',
  templateUrl: './changes-password.component.html',
  styleUrls: ['./changes-password.component.css']
})
export class ChangesPasswordComponent implements OnInit {

  changePasswordForm:FormGroup;
 
  loading:boolean;

  constructor(private fb:FormBuilder, private _userServices:UsersService, private _toastr:ToastrService,
                          private _router:Router) {
    this.loading = false;

    this.changePasswordForm = fb.group({
      backPassword: ['', Validators.required],
      newPassword:['',[Validators.required, Validators.minLength(4)]],
      confirmPassword:['']
    },
    {validator:this.checkPassword});

   }

  ngOnInit(): void {
  }

  checkPassword(group:FormGroup): any{
    const BACK_PASSWORD = group.controls.newPassword.value;
    const CONFIRM_PASSWORD = group.controls.confirmPassword.value;

    return BACK_PASSWORD === CONFIRM_PASSWORD ? null : { notSame:true };
  }

  ChangesPassword(){
    
    const CHANGEPASSWORD={
      NewPassword: this.changePasswordForm.value.newPassword,
      BackPassword: this.changePasswordForm.value.backPassword,
    }
    
    console.log(CHANGEPASSWORD);
    this.loading = true;
    this._userServices.ChangePassword(CHANGEPASSWORD).subscribe(data=>{
      this._toastr.success(data.message, 'Cambio De Contraseña');
      this._router.navigate(['/dashboard']);
    }, error=>{      
      this.loading = false;
      this.changePasswordForm.reset();
      this._toastr.error(error.error.message, 'Error: Cambio De Contraseña');
    });
    
  }
}
