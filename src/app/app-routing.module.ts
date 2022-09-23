import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/-user.guard';
import { AddCoursComponent } from './pages/add-cours/add-cours.component';
import { AllCoursComponent } from './pages/all-cours/all-cours.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { CoursComponent } from './pages/cours/cours.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: '', 
  component: HomeComponent,
  },
  {
    path: 'cgu', 
    component: CguComponent,
  },
  { 
    path: 'login',
    loadChildren: ()=>import('./modules/auth-module/auth-module.module')
    .then(m => m.AuthModuleModule),
   
  },
  {
    path: 'register',
    loadChildren: ()=>import('./modules/auth-module/auth-module.module')
    .then(m => m.AuthModuleModule)
  },
 
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
