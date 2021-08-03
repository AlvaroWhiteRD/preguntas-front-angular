import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private myAppURL:string;
  private myApiURL:string;

  constructor( private _http:HttpClient ) { 
    this.myAppURL= "http://localhost:50451";
    this.myApiURL = "/api/Login";
  }

  Login(user:Users):Observable<any>{
    return this._http.post(this.myAppURL + this.myApiURL, user);
  }

  SetLocalStorages(data:any):void{
    localStorage.setItem('token',data);
  }

  /*GetLocalStorages(){
    return localStorage.getItem('username');
  }*/

  RemoveLocalStorage():void{
    localStorage.removeItem('token');
  }

  GetTokenDecoded():any{

    let token:any = localStorage.getItem('token');
    const helper = new JwtHelperService();
 
    const decodedToken = helper.decodeToken(token);
    return decodedToken;

  //const expirationDate = helper.getTokenExpirationDate(myRawToken);
  //const isExpired = helper.isTokenExpired(myRawToken);
  }
  GetToken():string{
    return localStorage.getItem('token')!;
  }

}
