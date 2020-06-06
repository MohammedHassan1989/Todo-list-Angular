import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';
import { activitiesAddeditDto } from './activities-add-edit.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class httpService {
    constructor(private httpService: HttpService) { }
    AddNewActivity(model: activitiesAddeditDto, categoryID: string): Observable<any> {
        return this.httpService.post('activities/' + categoryID, model)
    }
}