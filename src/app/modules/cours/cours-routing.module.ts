import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';
import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { SpaceAddCourComponent } from 'src/app/pages/space-add-cour/space-add-cour.component';
import { SpaceCoursComponent } from 'src/app/pages/space-cours/space-cours.component';
import { SpacesHomeComponent } from 'src/app/pages/spaces-home/spaces-home.component';

const routes: Routes = [
  {path: 'cours', component: AllCoursComponent},
  {path: 'cour', component: CoursComponent},
  // {path: 'add-cours', component: AddCoursComponent},
  {path: 'space-cours', component: SpaceCoursComponent},
  {path: 'space-cours-add', component: SpaceAddCourComponent},
  {path: 'space-home', component: SpacesHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
