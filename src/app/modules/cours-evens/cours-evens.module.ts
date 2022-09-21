import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursComponent } from 'src/app/pages/all-cours/all-cours.component';

import { CoursComponent } from 'src/app/pages/cours/cours.component';
import { AddCoursComponent } from 'src/app/pages/add-cours/add-cours.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { Header2Component } from 'src/app/components/header2/header2.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { SpaceAddCourComponent } from 'src/app/pages/space-add-cour/space-add-cour.component';
import { SpaceNavComponent } from 'src/app/components/space-nav/space-nav.component';


@NgModule({
  declarations: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent, 
    Header2Component,
    SidebarComponent,
    SpaceAddCourComponent,
    SpaceNavComponent,
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
    SidebarComponent,
    SpaceNavComponent

  ],
})
export class CoursEvensModule { }
