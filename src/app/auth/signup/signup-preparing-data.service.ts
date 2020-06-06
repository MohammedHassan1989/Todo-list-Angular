import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
    providedIn:'root'
})
export class SignupPreparingDataService {
  private Form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.PreparingForm();
  }
  private PreparingForm(){

    this.Form = this.fb.group({
      username:['',[Validators.email,Validators.required]],
        password:['',Validators.required]
    })
  }
  getForm():FormGroup{
    return this.Form;
    }
}