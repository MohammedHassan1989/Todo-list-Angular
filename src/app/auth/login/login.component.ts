import { Component, OnInit } from '@angular/core';
import { LoginDto } from './login.Dto';
import { LoginPreparingDataService } from './login-preparing-data.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from 'src/app/shared/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  model: FormGroup;
dto:LoginDto;
isPostback: boolean = false;
errorMessage: string[] = [];
  constructor(private _formData:LoginPreparingDataService,
    private route:ActivatedRoute
    ,private http:LoginService
    , private router: Router,
    private auth: AuthService) {
      this.dto = new LoginDto();
   }

  ngOnInit(): void {
    //console.log(this.route.snapshot.data['loginResolver'])
    this.model=this._formData.getForm();
  }
  onSubmit(){
    
    this.isPostback = true;
    this.dto =this.model.value;
    
    if(this.dto.username && this.dto.password){

      this.http.Login(this.dto).subscribe(result => {
       
        if (result) {
        if(result.id){

          this.errorMessage = []
          this.isPostback = false;
          this.auth.setUserInfo(result)
         // localStorage.setItem('token',result.token)
     
          this.router.navigateByUrl('/home/activities')
        }
        else{
          console.log(result)
          result.forEach(element => {
            this.errorMessage.push(element)
          });
          
        }

        }
        else {
          result.forEach(element => {
            this.errorMessage.push(element)
          });
        
       }
      })

    }
    else{
      this.errorMessage.push( 'Please insert username and password.!')
    }
  }

}
