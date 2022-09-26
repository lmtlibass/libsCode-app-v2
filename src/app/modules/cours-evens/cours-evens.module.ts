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
import { SpaceEvenementsComponent } from 'src/app/pages/space-evenements/space-evenements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpacesHomeComponent } from 'src/app/pages/spaces-home/spaces-home.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from 'src/app/pages/admin-home/admin-home.component';
import { AdminCoursComponent } from 'src/app/pages/admin-cours/admin-cours.component';
import { AdminCoudetailComponent } from 'src/app/pages/admin-coudetail/admin-coudetail.component';


@NgModule({
  declarations: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent, 
    Header2Component,
    SidebarComponent,
    SpaceAddCourComponent,
    SpaceNavComponent,
    SpaceEvenementsComponent,
    SpacesHomeComponent,
    AdminHomeComponent,
    AdminCoursComponent,
    AdminCoudetailComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    
  ],
  exports: [
    AllCoursComponent,
    CoursComponent,
    AddCoursComponent, 
    Header2Component,
    SidebarComponent,
    SpaceNavComponent,
    SpaceEvenementsComponent,
    HttpClientModule,
  ],
})
export class CoursEvensModule { }
