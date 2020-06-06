import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignupPreparingDataService } from './signup-preparing-data.service';

import { httpService } from './signup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dto } from './Dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
  model: FormGroup;
  isPostback: boolean = false;
  errorMessage: string[] = [];
  _dto: dto
  @ViewChild('confirmPassword', { static: false }) _confirmPassword: ElementRef;

  constructor(private _formData: SignupPreparingDataService,
    private http: httpService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.model = this._formData.getForm();
    this._dto = new dto();
  }
  ngAfterViewInit() {
    // this.confirmPassword = this._confirmPassword.nativeElement;  

  }
  onSubmit() {

    this.isPostback = true;
    this._dto = this.model.value;
    if (this._dto.password != this._confirmPassword.nativeElement.value) {
      this.errorMessage.push( 'password does not equal confirm password')
    }
    else {

      this.http.signup(this._dto).subscribe(result => {
       
        if (!result) {
        
          this.errorMessage = []
          this.isPostback = false;
          
          this.router.navigateByUrl('/app/login')

        }
        else {
          result.forEach(element => {
            this.errorMessage.push(element)
          });
        
        }
      })

    }

  }
}
