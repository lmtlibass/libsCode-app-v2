import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-space-evenements',
  templateUrl: './space-evenements.component.html',
  styleUrls: ['./space-evenements.component.css']
})
export class SpaceEvenementsComponent implements OnInit {
  events:  any;
  
  constructor(
    private evenetService: EventsService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents(){
    return this.evenetService.getEvents().subscribe(
      (res)=>{
        this.events = res
      }
    )
  }

  showEvent(id: any){
    return localStorage.setItem('id_events', id)
  }

}
