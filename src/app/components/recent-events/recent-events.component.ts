import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent implements OnInit {
  eventsRecent: any;

  constructor(
    private events: EventsService
  ) { }

  ngOnInit(): void {
  }

  eventsRecents(){
    this.events.eventsRecent().subscribe(
      (res)=>{
        this.eventsRecent = res;
      }
    )
  }

}
