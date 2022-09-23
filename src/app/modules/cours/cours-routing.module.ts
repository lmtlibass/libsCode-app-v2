import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/-user.guard';
import { CreatorGuard } from 'src/app/guards/creator.guard';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';
import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { SpaceAddCourComponent } from 'src/app/pages/space-add-cour/space-add-cour.component';
import { SpaceCoursComponent } from 'src/app/pages/space-cours/space-cours.component';
import { SpacesHomeComponent } from 'src/app/pages/spaces-home/spaces-home.component';

const routes: Routes = [
  {
    path: 'cours', 
    component: AllCoursComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'cour', 
    component: CoursComponent,
    canActivate: [UserGuard],
  },
  // {path: 'add-cours', component: AddCoursComponent},
  {
    path: 'space-cours', 
    component: SpaceCoursComponent,
    canActivate: [CreatorGuard],
  },
  {
    path: 'space-cours-add', 
    component: SpaceAddCourComponent,
    canActivate: [CreatorGuard],
  },
  {
    path: 'space-home', 
    component: SpacesHomeComponent,
    canActivate: [CreatorGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
