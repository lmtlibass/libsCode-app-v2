import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(
    private http: HttpClient,
  ) { }

  //envoyer une demande pour devenir formateur 
  demande(demande : any){
    return this.http.post(environment.api_url + 'addemandes', demande);
  }

  //recevoir les demandes 
  getDemande(){
    return this.http.get(environment.api_url + 'demandes');
  }
}
