import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { AuthModuleModule } from '../auth-module/auth-module.module';


@NgModule({
  declarations: [
    AllCoursComponent,
    CoursComponent,
  ],
  imports: [
    AuthModuleModule,
    CommonModule,
    CoursRoutingModule,
  ]
})
export class CoursModule { }
