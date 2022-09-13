import { Component, OnInit } from '@angular/core';
import { ListeInscritEvent } from 'src/app/models/listeInscritEvent';
import { EventsService } from 'src/app/services/events.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
  
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: any;
  inscriptEventsForm: FormGroup;
  id_e = Number(localStorage.getItem('id_events'));
  liste: ListeInscritEvent = {
    prenom: '',
    nom: '',
    email: '',
    attentes: '',
    evenement_id: 0,
    telephone: ''
  }

  constructor(
    private eventService: EventsService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.inscriptEventsForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      attentes: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]],
    });
  }

  ngOnInit(): void {
    const id = localStorage.getItem('id_events');
    this.getEvent(Number(id));
  }

  //récupérer l'événement
  getEvent(id: number){
    return this.eventService.show(id).subscribe(
      (res)=>{
        this.event = res;
        console.log(this.event);
        
      }
    )
  }


  storeData(){
     this.liste.prenom = this.inscriptEventsForm.value.prenom;
     this.liste.nom = this.inscriptEventsForm.value.nom;
     this.liste.email = this.inscriptEventsForm.value.email;
     this.liste.telephone = this.inscriptEventsForm.value.telephone;
     this.liste.attentes = this.inscriptEventsForm.value.attentes;
     this.liste.evenement_id = this.id_e;
     console.log(this.liste);
     this.inscrit();
     this.inscriptEventsForm.reset();
     
    
    //  this.toastr.success('Vous vous êtes inscrit à l\'évèneùent', 'Inscription réussi!')
    }

  //inscription save
  inscrit(){
    return this.eventService.savelInscritEvent(this.liste).subscribe(
      (data: any) => {
        console.log(data.id);
       
      });
  }

  //message d'alerte
 

}
