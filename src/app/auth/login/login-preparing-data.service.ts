import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
    providedIn:'root'
})
export class LoginPreparingDataService {
  private LoginForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.PreparingForm();
  }
  private PreparingForm(){

    this.LoginForm = this.fb.group({
        username:['',[Validators.email,Validators.required]],
        password:['',Validators.required]
    })
  }
  getForm():FormGroup{
    return this.LoginForm;
    }
}