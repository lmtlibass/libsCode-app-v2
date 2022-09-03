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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentEventsComponent } from './components/recent-events/recent-events.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


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
    RecentEventsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursModule,
    EvenementModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
