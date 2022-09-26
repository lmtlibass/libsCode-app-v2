import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-admin-evenement',
  templateUrl: './admin-evenement.component.html',
  styleUrls: ['./admin-evenement.component.css']
})
export class AdminEvenementComponent implements OnInit {
  closeResult = '';
  events: any;
  event: any;

  constructor(
    private modalService: NgbModal,
    private evenetService: EventsService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.getEventsAdmin();
  }

  //recupérer les événements pas encore vlidés
  getEventsAdmin(){
    return this.evenetService.getEventsAdmin().subscribe(
      res=>{
        this.events = res;
      }
    )
  }

  
   //valider l'evenement
   validerEvenement() {
    const id_e = localStorage.getItem('id_event_admin')
    this.evenetService.show(Number(id_e)).subscribe(
      res => {
        this.event = res;
        this.event.etat = this.event.etat + 1;  
        this.evenetService.updateEvenement(this.event.id, this.event).subscribe(
          res => {
            console.log(res);
          });
          console.log(this.event.etat);
          this.toastr.info('Evenement Validé avec succés!');
          
          // this.evenement.etat = 1 ?alert('evenement valider') : alert('evenement non valider');
    });
    this.modalService.dismissAll();
  }


  //modale
  open(content: any, id: any) {
    localStorage.setItem('id_event_admin', id)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
