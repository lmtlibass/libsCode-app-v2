import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorGuard implements CanActivate {
  constructor( private router: Router, private toastr: ToastrService){
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const role = localStorage.getItem('role');
    if(role === 'createur' || role === 'admin'){
      
      return true;
    } 
    console.log(role);  
    this.toastr.error('Accés réfusé!!! Merci de consulter les CGU', 'Authentification Error', {
      timeOut: 3000,
    });
      this.router.navigate(['/login']);
    return true;
  }
  
}
