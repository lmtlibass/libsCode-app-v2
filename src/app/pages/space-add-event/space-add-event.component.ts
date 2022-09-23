import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-space-add-event',
  templateUrl: './space-add-event.component.html',
  styleUrls: ['./space-add-event.component.css']
})
export class SpaceAddEventComponent implements OnInit {

  id = localStorage.getItem('user_id');
  public formEvents = {
    titre_evenement		: '',
    description: '',
    date_evenement: '',
    etat: 0,
    user_id: Number(this.id),
  }
  constructor(
    private toastr: ToastrService,
    private eventService: EventsService
  ) { }

  ngOnInit(): void {
  }

  addEvent(){
    console.log(this.formEvents);
    
    return this.eventService.saveEvents(this.formEvents).subscribe(
      data=> {
        console.log(data);
        this.toastr.info('Votre Requête sera traité', 'Réussi🤭 ');
        this.formEvents.titre_evenement = '';
        this.formEvents.description = '';
        this.formEvents.date_evenement= '';
      },
      error=>{
        console.log(error);
        this.toastr.error('Une erreur c\'est produit rééssayez plus tard','Oups!');
      }
    )
  }

}
