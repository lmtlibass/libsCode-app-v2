import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursModule } from './modules/cours/cours.module';
import { EvenementModule } from './modules/evenement/evenement.module';
import { HomeComponent } from './pages/home/home.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentEventsComponent } from './components/recent-events/recent-events.component';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { RecentCoursComponent } from './components/recent-cours/recent-cours.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModuleModule } from './modules/auth-module/auth-module.module';
import { DemandeFComponent } from './pages/demande-f/demande-f.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CguComponent,
    HeaderComponent,
    CardsComponent,
    RecentEventsComponent,
    RecentCoursComponent,
    FooterComponent,
    DemandeFComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursModule,
    EvenementModule,
    NgbModule,
    IvyCarouselModule,
    HttpClientModule,
    AuthModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
