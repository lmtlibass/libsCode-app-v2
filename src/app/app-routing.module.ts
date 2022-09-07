import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CguComponent } from './pages/cgu/cgu.component';
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
    loadChildren: ()=>import('./modules/cours/cours.module')
    .then(m => m.CoursModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
