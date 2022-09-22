import { NgModule } from '@angular/core';
import { CoursRoutingModule } from './cours-routing.module';
import { CoursEvensModule } from '../cours-evens/cours-evens.module';
import { SpaceCoursComponent } from 'src/app/pages/space-cours/space-cours.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SpaceCoursComponent,
  ],
  imports: [
    CoursRoutingModule,
    CoursEvensModule,
    CommonModule
  ]
})
export class CoursModule { }
