import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-space-evenements',
  templateUrl: './space-evenements.component.html',
  styleUrls: ['./space-evenements.component.css']
})
export class SpaceEvenementsComponent implements OnInit {
  events:  any;
  user_id = localStorage.getItem('user_id');
  public cour: any;
  public info = '';


  constructor(
    private evenetService: EventsService
  ) { }

  ngOnInit(): void {
    this.getEvents(Number(this.user_id));
  }
  //récuperer les événements partagés par un utilisateur
  getEvents(id: number){
    return this.evenetService.getEventByUser(id).subscribe(
      (res)=>{
        res = this.cour
        this.cour = [] 
          ?this.info = 'Vous n\'avez pas encour partagés d\'événement'
          :this.info = '';
        this.events = res
      }
    )
  }

  showEvent(id: any){
    return localStorage.setItem('id_events', id)
  }

}
