import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursModule } from './modules/cours/cours.module';
import { EvenementModule } from './modules/evenement/evenement.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { Header2Component } from './components/header2/header2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CguComponent,
    HeaderComponent,
    CardsComponent,
    Header2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursModule,
    EvenementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
