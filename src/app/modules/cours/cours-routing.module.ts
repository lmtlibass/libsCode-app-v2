import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';
import { CoursComponent } from 'src/app/pages/cours/cours.component';

const routes: Routes = [
  {path: '', component: AllCoursComponent},
  {path: 'cours', component: CoursComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
