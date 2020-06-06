import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivitiesAddEditComponent } from './activities/activities-add-edit/activities-add-edit.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { GoalsAddEditComponent } from './goals/goals-add-edit/goals-add-edit.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriesListComponent } from './activities/categories/categories-list/categories-list.component';
import { CategoriesAddComponent } from './activities/categories/categories-add/categories-add.component';


@NgModule({
  declarations: [ActivitiesListComponent, 
    ActivitiesAddEditComponent,
     GoalsListComponent, 
     GoalsAddEditComponent, ReportsComponent, CategoriesListComponent, CategoriesAddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
    //BrowserAnimationsModule
  ]
})
export class HomeModule { }
