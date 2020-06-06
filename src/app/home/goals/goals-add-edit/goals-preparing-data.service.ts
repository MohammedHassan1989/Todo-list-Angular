import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GoalsPreparingDataService {
  private Form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.PreparingForm();
  }
  private PreparingForm() {

    this.Form = this.fb.group({
      title: ['', [Validators.required]],
      properties: this.fb.array([]),
      isActive: [true],
      isDone: [false]
    })
  }
  createproperty(porpertyTitle,propertyType,propertyPosition): FormGroup {
    return this.fb.group({
       title: [porpertyTitle, [Validators.required]],
      propertyType: [propertyType, [Validators.required]],
      value: [''],
      position: [propertyPosition, [Validators.required]]
    });
  }
  getForm(): FormGroup {
    return this.Form;
  }

}