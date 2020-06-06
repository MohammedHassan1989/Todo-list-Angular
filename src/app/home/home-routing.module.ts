import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivitiesAddEditComponent } from './activities/activities-add-edit/activities-add-edit.component';
import { ActivitiesListResolverService } from './activities/activities-list/activities-resolver.service';
import { ActivitiesAddEditResolverService } from './activities/activities-add-edit/activities-add-edit-resolver.service';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { GoalsAddEditComponent } from './goals/goals-add-edit/goals-add-edit.component';
import { GoalListResolverService } from './goals/goals-list/goal-list-resolver.service';
import { GoalAddEditResolverService } from './goals/goals-add-edit/goal-add-edit-resolver.service';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [

  {
   
    path: 'activities', component:HomeComponent,
    children:[
      { path: '', redirectTo: 'activity-list', pathMatch: 'full' },
      {
        path: 'activity-list', component: ActivitiesListComponent,
        resolve: { activities: ActivitiesListResolverService },
        data: {animation: 'activityPage'}
      },
      {
        path: 'activity-add-edit', component: ActivitiesAddEditComponent,
        resolve: { activity: ActivitiesAddEditResolverService }
      },
      {
        path: 'goal-list', component: GoalsListComponent,
        resolve: { goals: GoalListResolverService },
        data: {animation: 'goalPage'}
      },
      {
        path: 'goal-add-edit',
        component: GoalsAddEditComponent, resolve: { goal: GoalAddEditResolverService }
      },
      { path: 'reports', component: ReportsComponent,
      data: {animation: 'reportsPage'} },
    
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
