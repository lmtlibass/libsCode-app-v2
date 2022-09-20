import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursEvensModule } from '../cours-evens/cours-evens.module';
import { SpaceUserRoutingModule } from './space-user-routing.module';
import { SpacesHomeComponent } from 'src/app/pages/spaces-home/spaces-home.component';


@NgModule({
  declarations: [
    SpacesHomeComponent,
  ],
  imports: [
    CommonModule,
    SpaceUserRoutingModule,
    CoursEvensModule,
  ]
})
export class SpaceUserModule { }
