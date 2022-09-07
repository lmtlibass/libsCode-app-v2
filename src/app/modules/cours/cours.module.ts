import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursComponent } from '../../pages/all-cours/all-cours.component';

import { CoursRoutingModule } from './cours-routing.module';


@NgModule({
  declarations: [
    AllCoursComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
