import { Component, OnInit, OnChanges, HostBinding, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { ScaleRotate } from 'src/app/shared/animations/scale-rotate-animation';
import Swal from 'sweetalert2'
import { hoverItem, listOfDivsInOut, removeListItem } from 'src/app/shared/animations/list-animation';
import { CategoryListService } from './categories-list.service';
import { categories, AddNewCategory } from './dto';
import { HttpStatusCode } from 'src/app/shared/http/http-status.enum';
import { Changescategory } from '../../changescategory';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  animations: [ScaleRotate, hoverItem, listOfDivsInOut, removeListItem]
})
export class CategoriesListComponent implements OnInit {
  isListItemHover: boolean = false;
  dto: categories;
  canSeeCategories: boolean = true;
  @Output() categoryID = new EventEmitter<string>();
  constructor(private http: CategoryListService) { }
  @HostBinding('@listOfDivsInOut')
  ngOnInit(): void {

    this.dto = new categories();
    this.http.GetAll().subscribe(result => {
      this.canSeeCategories = true
      if (result) {
        this.dto.items = result.categories;
      }


    },
      error => {
        if (error == HttpStatusCode.UNAUTHORIZED) {
          this.canSeeCategories = false
        }
      })
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
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

        this.http.RemoveCategory(id).subscribe(removedCategory => {
          Swal.fire({
            icon: 'success',
            title: 'Your activity has been deleted',
            showConfirmButton: false,
            timer: 1000

          }).then(s => {
            this.dto.items = this.dto.items.filter(item => id != item.categoryid);
            this.dto.errorMessage = ''
          })

        },
          error => {
            if (error == HttpStatusCode.UNAUTHORIZED) {
              this.dto.errorMessage = 'You are not Authorized to delete category.!'
            }
          })

      }
    });
  }

  AddNewCategory(textValue) {
    if (!textValue) {
      this.dto.errorMessage = "Please insert category";
      return;
    }

    let newCategory: AddNewCategory = new AddNewCategory();
    newCategory.categoryName = textValue;

    this.http.AddNewCategory(newCategory).subscribe(newCat => {
      if (newCat.categoryid) {
        this.dto.items.push(newCat);
        this.dto.errorMessage = "";
      }
      else {
        this.dto.errorMessage = newCat;
      }

    },
      error => {
        if (error == HttpStatusCode.UNAUTHORIZED) {
          this.dto.errorMessage = "You are not Authorized to create new category.!";
        }
      })
    console.log(textValue)
  }

  updateCategoryActivityCount( changescategory:Changescategory ){
    if(changescategory.isAdd)
    this.dto.items.find(w => w.categoryid == changescategory.categoryID).activitiesCount+=1;
    else
    this.dto.items.find(w => w.categoryid == changescategory.categoryID).activitiesCount-=1;
  }

  selectedCategory(id): void {
    this.categoryID.emit(id);
  }
  toggleDeleteButtonOver(id) {
    this.dto.items.find(w => w.categoryid == id).isDeleteButtonHover = true;
  }
  toggleDeleteButtonOut(id) {
    this.dto.items.find(w => w.categoryid == id).isDeleteButtonHover = false;

  }
  toggleListItemButtonOver(id) {
    if (id != 0) {
      this.dto.items.find(w => w.categoryid == id).isListItemHover = true;

    }
    else {
      this.isListItemHover = true;
    }

  }
  toggleListItemButtonOut(id) {
    if (id != 0) {
      this.dto.items.find(w => w.categoryid == id).isListItemHover = false;

    }
    else {
      this.isListItemHover = false;
    }
  }
}
