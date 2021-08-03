import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/Operators';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private _router:Router, private _toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    const TOKEN = localStorage.getItem("token");
    //console.log("token interceptor + "+TOKEN);
    
   // if(TOKEN){
     const AUTHREQ = request.clone({
       headers:request.headers.set('Authorization', `Bearer ${TOKEN}`) 
      });
      //console.log("AUTHREQ + "+ );
      //return AUTHREQ;
      return next.handle(AUTHREQ).pipe(
        catchError((error:HttpErrorResponse) => {
            if(error.status === 401){
              this._toastr.error("La sesion a expirado. Inicie sesion nuevamente", "Sesion Expirada");
             this._router.navigate(['/inicio/login']);
            }
            return throwError(error);
        })
      );
    //}
    

    
  }
}
