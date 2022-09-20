import { NgModule } from '@angular/core';
import { AuthModuleModule } from '../auth-module/auth-module.module';
import { CoursRoutingModule } from './cours-routing.module';
import { CoursEvensModule } from '../cours-evens/cours-evens.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CoursRoutingModule,
    AuthModuleModule,
    CoursEvensModule,
  ]
})
export class CoursModule { }
