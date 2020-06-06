import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
    providedIn:'root'
})
export class ActivityPreparingDataService {
  private Form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.PreparingForm();
  }
  private PreparingForm(){

    this.Form = this.fb.group({
        title:['',[Validators.required]],
        description:['',Validators.required],
        isActive:[true],
        isDone:[false]
    })
  }
  getForm():FormGroup{
    return this.Form;
    }
    resetForm():FormGroup{
       this.Form.reset();
       return this.Form;
      }
}