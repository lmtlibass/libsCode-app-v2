import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListeInscritEvent } from '../models/listeInscritEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

    //recuperer les évenements réscents
  eventsRecent(){
    return this.http.get(environment.api_url + 'evenementRe')
  }

  //recuperer tous les évènements
  getEvents(){
    return this.http.get(environment.api_url + 'evenements')
  }

  //recuperer un evenement
  show(id: number){
    return this.http.get(environment.api_url + 'evenement/' + id)
  }

  //recupérer les événements partagés par un utilisateur
  getEventByUser(id: number){
    return this.http.get(environment.api_url + 'evenementUser/' + id);
  }

  //enregistrer liste inscrit Event
  savelInscritEvent(listeInscritEvent: ListeInscritEvent){
    return this.http.post(environment.api_url + 'listeinscrits', listeInscritEvent)
  }

  //Ajouter un evenement
  saveEvents(data: any){
    return this.http.post(environment.api_url + 'evenements', data);
  }
  


}
