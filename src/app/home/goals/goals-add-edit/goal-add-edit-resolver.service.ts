import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { of } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class GoalAddEditResolverService implements Resolve<any>{
//retriving a data required for display before routing

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        // this.data.hasError = true;
        // this.data.Errors = []
        // this.data.Errors.push('any Error')

      //  console.log(route);
        return false;// of( this.data);
    }

}