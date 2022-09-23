import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/-user.guard';
import { CreatorGuard } from 'src/app/guards/creator.guard';
import { EventComponent } from 'src/app/pages/event/event.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { SpaceAddEventComponent } from 'src/app/pages/space-add-event/space-add-event.component';
import { SpaceEvenementsComponent } from 'src/app/pages/space-evenements/space-evenements.component';

const routes: Routes = [
  {
    path: 'events', 
    component: EventsComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'event', 
    component: EventComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'space-event', 
    component: SpaceEvenementsComponent,
    canActivate: [CreatorGuard]
  },
  {
    path: 'space-add-event', 
    component: SpaceAddEventComponent,
    canActivate: [CreatorGuard],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
