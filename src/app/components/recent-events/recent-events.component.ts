import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent implements OnInit {
  eventsRecent: any;
  color = '#';
  letters = "0123456789ABCDEF";

  constructor(
    private events: EventsService
  ) { }

  ngOnInit(): void {
    this.eventsRecents();
    this.getRandomColor();
  }

  eventsRecents(){
    this.events.eventsRecent().subscribe(
      (res)=>{
        this.eventsRecent = res;
      }
    )
  }
  //
  getRandomColor(){
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    console.log(this.color);
    
    return this.color;
  }


}
