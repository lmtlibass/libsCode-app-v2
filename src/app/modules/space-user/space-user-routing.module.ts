import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesHomeComponent } from 'src/app/pages/spaces-home/spaces-home.component';

const routes: Routes = [
  {path:'', component: SpacesHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceUserRoutingModule { }
