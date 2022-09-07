import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';

const routes: Routes = [
  {path: '', component: AllCoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
