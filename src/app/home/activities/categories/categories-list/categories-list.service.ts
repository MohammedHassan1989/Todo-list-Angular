import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';
import { Observable } from 'rxjs';
import { AddNewCategory } from './dto';


@Injectable({providedIn: 'root'})
export class CategoryListService {
    constructor(private httpService:HttpService){}
    GetAll(): Observable<any>{
    
        return this.httpService.get('categories')
        }

        AddNewCategory(model:AddNewCategory): Observable<any>{
            return this.httpService.post('categories',model)
        }
        RemoveCategory(categoryID:string): Observable<any>{
            return this.httpService.delete('categories/'+categoryID)
        }
        

    
}