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

    //recuperer les évenements réscents validés
  eventsRecent(){
    return this.http.get(environment.api_url + 'evenementRe')
  }

  //recuperer tous les évènements qui ont été validés par l'admine
  getEvents(){
    return this.http.get(environment.api_url + 'evenements')
  }

  //récupérer les événements pas encore validé
  getEventsAdmin(){
    return this.http.get(environment.api_url + 'evenementAdmin');
  }

  //recuperer un evenement
  show(id: number){
    return this.http.get(environment.api_url + 'evenement/' + id)
  }

  //recupérer les événements partagés par un utilisateur
  getEventByUser(id: number){
    return this.http.get(environment.api_url + 'evenementUser/' + id);
  }
  //Ajouter un evenement
  saveEvents(data: any){
    return this.http.post(environment.api_url + 'evenements', data);
  }
  //mise à jour evenement
  updateEvenement( id: number, data: any){
    return this.http.put(environment.api_url + 'evenement/' + id, data);
  }

    

  //enregistrer liste inscrit Event
  savelInscritEvent(listeInscritEvent: ListeInscritEvent){
    return this.http.post(environment.api_url + 'listeinscrits', listeInscritEvent);
  }

  //recuperer liste des inscrit
  getInscrits(event_id: number){
    return this.http.get(environment.api_url + 'liste/' + event_id);
  }



  
  


}
