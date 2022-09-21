import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from 'src/app/pages/event/event.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { SpaceAddEventComponent } from 'src/app/pages/space-add-event/space-add-event.component';
import { SpaceEvenementsComponent } from 'src/app/pages/space-evenements/space-evenements.component';

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'event', component: EventComponent},
  {path: 'space-event', component: SpaceEvenementsComponent},
  {path: 'space-add-event', component: SpaceAddEventComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
