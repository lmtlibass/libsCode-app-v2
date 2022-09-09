import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from 'src/app/pages/event/event.component';
import { EventsComponent } from 'src/app/pages/events/events.component';

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'event', component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
