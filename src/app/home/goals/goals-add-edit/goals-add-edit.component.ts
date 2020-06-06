import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoalsPreparingDataService } from './goals-preparing-data.service';
import { FormGroup, FormArray } from '@angular/forms';
import { ScaleRotate } from 'src/app/shared/animations/scale-rotate-animation';
import { ShowHide } from 'src/app/shared/animations/show-hide-animation';
import { AddRemoveListItem } from 'src/app/shared/animations/list-animation';

declare var $: any;
@Component({
  selector: 'app-goals-add-edit',
  templateUrl: './goals-add-edit.component.html',
  styleUrls: ['./goals-add-edit.component.css'],
  animations: [ScaleRotate,ShowHide,AddRemoveListItem]
})
export class GoalsAddEditComponent implements OnInit  {
  model: FormGroup;
  properties: FormArray;
  isSubmited: boolean = false;
  isHover: boolean = false;
  isShowProperty: boolean = false;
  @Output() onCreateNewItem = new EventEmitter();
  constructor(private _formData: GoalsPreparingDataService) { }

  ngOnInit(): void {
    this.model = this._formData.getForm();
  }

  onSubmit() {

    this.isSubmited = !this.isSubmited;
    console.log(this.model.value);
    this.isSubmited = false;
      this.model.reset();
    // $(".modal").on("hidden.bs.modal", () => {
    //   this.isSubmited = false;
    //   this.model.reset();

    // });
  }

  addProperty(porpertyTitle,propertyType,propertyPosition): void {

    this.properties = this.model.get('properties') as FormArray;
    this.properties.push(this._formData.createproperty(porpertyTitle,propertyType,propertyPosition));
    this.onCreateNewItem.emit(null)
  }
  get getProperty(): FormArray {
  
    return <FormArray>this.model.get('properties');
  }



//   @HostListener("window:scroll", ["$event"])
// onWindowScroll() {
// //In chrome and some browser scroll is given to body tag
// let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
// let max = document.documentElement.scrollHeight;
// // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//  if(pos == max )   {
//  //Do your action here
//  document.body.scrollHeight
//  }
// }

  toggleButtonOver() {
    this.isHover = true;
  }
  toggleButtonOut() {
    this.isHover = false;
  }

  toggleShowHideProperty() {
    this.isShowProperty = !this.isShowProperty;
  }

}
