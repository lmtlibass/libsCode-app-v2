import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';

import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { Header2Component } from 'src/app/components/header2/header2.component';


@NgModule({
  declarations: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent, 
    Header2Component,
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
  ],
  exports: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent, 
    Header2Component,

  ],
})
export class CoursEvensModule { }
