import { Component, OnInit, HostBinding, Input, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { ScaleRotate } from 'src/app/shared/animations/scale-rotate-animation';
import { hoverItem, listOfDivsInOut, removeListItem } from 'src/app/shared/animations/list-animation';
import { httpService } from './http.service';
import { activitiesListDto } from './activities-list.dto';
import { activitiesAddeditDto } from '../activities-add-edit/activities-add-edit.dto';
import { Changescategory } from '../changescategory';
import { CategoriesListComponent } from '../categories/categories-list/categories-list.component';

declare var $: any;

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
  animations: [ScaleRotate, hoverItem, listOfDivsInOut, removeListItem]
})
export class ActivitiesListComponent implements OnInit {
  isHover: boolean = false;
  isDeleteButtonHover: boolean = false;
  isListItemHover: boolean = false;
  currentCategoryID: string = "";
  dto: activitiesListDto[];
  changescategory: Changescategory;
  //categoriesView
  @ViewChild('categoriesView') categoriesView;
  constructor(private http: httpService) { }
  @HostBinding('@listOfDivsInOut')
  ngOnInit(): void {
    this.changescategory = new Changescategory();
  }


  IsActive(id): boolean {
    return this.dto.find(w => w._id == id).isActive =
      !this.dto.find(w => w._id == id).isActive;

  }



  IsDone(id): boolean {
    return this.dto.find(w => w._id == id).isDone = !this.dto.find(w => w._id == id).isDone;

  }

  DeleteItem(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this activity!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.http.DeleteActivity(this.currentCategoryID, id).subscribe(result => {
          Swal.fire({
            icon: 'success',
            title: 'Your activity has been deleted',
            showConfirmButton: false,
            timer: 1000

          }).then(()=>{
            this.dto = this.dto.filter(item => id != item._id);
            this.changescategory.categoryID = this.currentCategoryID
            this.changescategory.isAdd = false;
            this.categoriesView.updateCategoryActivityCount(this.changescategory)
          })
        })

      }
    });
  }



  getActivitiesByCategoryID(categoryID: string): void {
    this.currentCategoryID = categoryID;

    this.http.GetAllActivities(this.currentCategoryID).subscribe(result => {
      if (result)
        this.dto = result;
      else
        this.dto = [];
    })
  }
  toggleButtonOver() {
    this.isHover = true;
  }
  toggleButtonOut() {
    this.isHover = false;
  }
  toggleDeleteButtonOver(id) {
    this.dto.find(w => w._id == id).isDeleteButtonHover = true;

    //this.dto.isDeleteButtonHover = true;
  }
  toggleDeleteButtonOut(id) {
    this.dto.find(w => w._id == id).isDeleteButtonHover = false;
    //this.isDeleteButtonHover = false;
  }



  toggleListItemButtonOver(id) {
    this.dto.find(w => w._id == id).isListItemHover = true;
    //  this.isListItemHover = true;
  }
  toggleListItemButtonOut(id) {
    this.dto.find(w => w._id == id).isListItemHover = false;
    //this.isListItemHover = false;
  }
  AddEditItemToListAfterSave(model: activitiesAddeditDto) {

    let item: activitiesListDto = new activitiesListDto();
    item._id = model._id;
    item.title = model.title;
    item.description = model.description;
    item.isDone = model.isDone;
    item.isActive = model.isActive;

    let selectedItemIndex = this.dto.findIndex(w => w._id == model._id);
    if (selectedItemIndex != -1)
      this.dto[selectedItemIndex] = item;
    else {
      this.dto.push(item);
      this.changescategory.categoryID = this.currentCategoryID
      this.changescategory.isAdd = true;
      this.categoriesView.updateCategoryActivityCount(this.changescategory)
    }


  }
}
