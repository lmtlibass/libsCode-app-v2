import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { EventComponent } from 'src/app//pages/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursEvensModule } from '../cours-evens/cours-evens.module';
import { SpaceAddEventComponent } from 'src/app/pages/space-add-event/space-add-event.component';
import { SpaceInscritEventComponent } from 'src/app/space-inscrit-event/space-inscrit-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    SpaceAddEventComponent,
    SpaceInscritEventComponent,
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoursEvensModule
  ]
})
export class EvenementModule { }
