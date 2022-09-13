import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { AuthModuleModule } from '../auth-module/auth-module.module';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';

@NgModule({
  declarations: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent,  
  ],
  imports: [
    AuthModuleModule,
    CommonModule,
    CoursRoutingModule,
  ]
})
export class CoursModule { }
