import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(data: any){
    return this.http.post(environment.api_url + 'register', data);
  }

  login(data: any){
    return this.http.post(environment.api_url + 'login', data);
  }

  //changer role de l'utilisateur
  changeRoleUser(user_id: any){
    return this.http.get(environment.api_url + 'roleUser/' + user_id)
  }

  

}
