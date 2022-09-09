import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
