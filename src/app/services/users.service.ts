import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myAppURL:string;
  private myApiURL:string;
  constructor( private _http:HttpClient ) {

    this.myAppURL= "http://localhost:50451";
    this.myApiURL = "/api/usuario";
   
  }


  registerUsers(user:Users): Observable<any>{

    return this._http.post(this.myAppURL + this.myApiURL, user);

  }

  ChangePassword(changePassword:any):Observable<any>{
      return this._http.put(this.myAppURL + this.myApiURL + '/changes-password', changePassword);

  }
}
