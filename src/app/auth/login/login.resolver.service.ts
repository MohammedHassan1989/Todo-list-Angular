import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginDto } from './login.Dto';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginResolverService implements Resolve<any>{
    //retriving a data required for display before routing
    data: LoginDto = new LoginDto();
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.data.hasError = true;
        this.data.Errors = []
        this.data.Errors.push('any Error')

        //  console.log(route);
        return of(this.data);
    }

}