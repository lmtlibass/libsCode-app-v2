import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursModule } from './modules/cours/cours.module';
import { AddCoursComponent } from './pages/add-cours/add-cours.component';
import { AllCoursComponent } from './pages/all-cours/all-cours.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { CoursComponent } from './pages/cours/cours.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'cgu', component: CguComponent},
  { 
    path: 'login',
    loadChildren: ()=>import('./modules/auth-module/auth-module.module')
    .then(m => m.AuthModuleModule)
  },
  {
    path: 'register',
    loadChildren: ()=>import('./modules/auth-module/auth-module.module')
    .then(m => m.AuthModuleModule)
  },
  {
    path: 'allcours',
    component: AllCoursComponent
  },
  {
    path: 'cour',
    component: CoursComponent
  },
  {
    path: 'addcours',
    component: AddCoursComponent
  },
  {
    path: 'events',
    loadChildren: ()=>import('./modules/evenement/evenement.module')
    .then(e => e.EvenementModule)
  },
  {
    path: 'event',
    loadChildren: ()=>import('./modules/evenement/evenement.module')
    .then(e => e.EvenementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
