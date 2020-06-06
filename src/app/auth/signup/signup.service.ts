import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/shared/http/http.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class httpService {
    constructor(private httpClient: HttpClient, private httpService:HttpService) { }
    
signup(model): Observable<any>{

return this.httpService.post('users/signup',model)
}

}