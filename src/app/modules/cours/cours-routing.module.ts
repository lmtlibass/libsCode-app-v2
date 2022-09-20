import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';
import { CoursComponent } from 'src/app/pages/cours/cours.component';

const routes: Routes = [
  {path: 'cours', component: AllCoursComponent},
  {path: 'cour', component: CoursComponent},
  {path: 'add-cours', component: AddCoursComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
