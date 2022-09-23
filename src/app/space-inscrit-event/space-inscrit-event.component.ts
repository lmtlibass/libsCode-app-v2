import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-space-inscrit-event',
  templateUrl: './space-inscrit-event.component.html',
  styleUrls: ['./space-inscrit-event.component.css']
})
export class SpaceInscritEventComponent implements OnInit {
  liste : any
  id_events = Number(localStorage.getItem('id_events'))
  public inscrit: any;
  public info = '';




  constructor(
    private eventService: EventsService
  ) { }

  ngOnInit(): void {
    this.getInscrits()
  }

  getInscrits(){
    return this.eventService.getInscrits(this.id_events).subscribe(
      (res)=>{
        res = this.inscrit
        this.inscrit = [] 
          ?this.info = 'P\'as encors d\'inscrit'
          :this.info = '';
        this.liste = res
      }
    )
  }


}
