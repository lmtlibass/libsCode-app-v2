import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { EventComponent } from 'src/app//pages/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EvenementModule { }
