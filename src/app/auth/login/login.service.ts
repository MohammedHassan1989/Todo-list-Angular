import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/http/http.service';

@Injectable({providedIn: 'root'})
export class LoginService {
     constructor(private httpService:HttpService){}
Login(model): Observable<any>{

    return this.httpService.post('users/login',model)
    }
    
}