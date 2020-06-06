import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityPreparingDataService } from './activity-preparing-data.service';
import { FormGroup } from '@angular/forms';

import { ScaleRotate } from 'src/app/shared/animations/scale-rotate-animation';
import { httpService } from './http.service';
import { activitiesAddeditDto } from './activities-add-edit.dto';

declare var $: any;
@Component({
  selector: 'app-activities-add-edit',
  templateUrl: './activities-add-edit.component.html',
  styleUrls: ['./activities-add-edit.component.css'],
  animations: [ScaleRotate]
})
export class ActivitiesAddEditComponent implements OnInit {
  model: FormGroup;
  isSubmited: boolean = false;
  isHover: boolean = false;
  dto: activitiesAddeditDto;
  @Input() categoryID: string = "";
  @Output() Savieditem = new EventEmitter<activitiesAddeditDto>();
  constructor(private _formData: ActivityPreparingDataService, private http: httpService) {

  }

  ngOnInit(): void {

    this.model = this._formData.getForm();
  }
  onSubmit() {
    if (this.model.valid) {

      this.dto = this.model.value;
      this.http.AddNewActivity(this.dto, this.categoryID).subscribe(result => {
        if (result._id) {
          this.isSubmited = false;
          this.model.reset();
          this.Savieditem.emit(result);
          $('#add-edit-activity').modal('hide')
        }
      })

    }
    else {
      this.isSubmited = true;
    }

    // $(".modal").on("hidden.bs.modal", () => {


    // });
  }

  toggleButtonOver() {
    this.isHover = true;
  }
  toggleButtonOut() {
    this.isHover = false;
  }
}


