import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:  any;

  constructor(
    private evenetService: EventsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  //récuperer tous les événements
  getEvents(){
    return this.evenetService.getEvents().subscribe(
      (res)=>{
        this.events = res
      }
    )
  }

  showEvent(id: any){
    this.router.navigateByUrl('/event');
    return localStorage.setItem('id_events', id)
  }

}
