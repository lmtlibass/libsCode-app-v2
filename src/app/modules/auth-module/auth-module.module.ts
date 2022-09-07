import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { Header2Component } from 'src/app/components/header2/header2.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Header2Component
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    
  ]
})
export class AuthModuleModule { }
