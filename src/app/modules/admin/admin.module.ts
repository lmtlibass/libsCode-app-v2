import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CoursEvensModule } from '../cours-evens/cours-evens.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoursEvensModule,
  ]
})
export class AdminModule { }
