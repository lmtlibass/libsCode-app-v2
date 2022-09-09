import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
