import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() { }

  handle(token: any){
    this.setToken(token);
    console.log(this.isValid());
    
  }

  setToken(token: any){
    return localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  removeToken(token: any){
   return localStorage.removeItem('roken');
  }

  //verifier si le token est valide ou pas 
  isValid(){
    const token = this.getToken()

    if(token){
      const payload = this.payload(token);
      if(payload){
        return (payload.iss===`${environment.api_url}login`)?true:false
      }
     
    }
    return false
    
  }
  //recuperer les informations dans le token 
  payload(token: any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  //decoder le token 
  decode(payload : any){
    return JSON.parse(atob(payload));
  }

}
