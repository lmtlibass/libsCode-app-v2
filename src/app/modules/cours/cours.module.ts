import { NgModule } from '@angular/core';
import { AuthModuleModule } from '../auth-module/auth-module.module';
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
    AuthModuleModule,
    CoursEvensModule,
    CommonModule
  ]
})
export class CoursModule { }
