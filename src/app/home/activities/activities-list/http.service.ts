import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class httpService {
    constructor(private httpService: HttpService) { }

    GetAllActivities(categoryID: string): Observable<any> {
        return this.httpService.get('activities/' + categoryID);
    }
    DeleteActivity(categoryID: string ,activityID:string): Observable<any> {
        return this.httpService.delete('activities/' + categoryID+'/'+activityID);
    }
}