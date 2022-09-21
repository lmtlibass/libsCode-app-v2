import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    FormsModule,
    
  ],
  //ces composants de ce modules sont exporté afin d'être réutilisable dans d'autres components
  exports: [
  
  ],
})
export class AuthModuleModule { }
