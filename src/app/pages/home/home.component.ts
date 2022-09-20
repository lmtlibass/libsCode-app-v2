import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  acordeon1 = 'panel'; 
  acordeon2 = 'panel'; 
  acordeon3 = 'panel'; 
  acordeonImage = 'defaultimg'
  acordeonImageTwo = 'defaultimg'
  acordeonImageThree = 'defaultimg'
  closeResult = '';
  
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    
  }

  _acordeon(){
    this.acordeon1 == 'panel'?
    this.acordeon1 = 'panelvisible':this.acordeon1 = 'panel'

    this.acordeonImage == 'defaultimg'?
    this.acordeonImage = 'rotateimage':
    this.acordeonImage = 'defaultimg'
  }
  __acordeon(){
    this.acordeon2 == 'panel'?
    this.acordeon2 = 'panelvisible':this.acordeon2 = 'panel'

    this.acordeonImageTwo == 'defaultimg'?
    this.acordeonImageTwo = 'rotateimage':
    this.acordeonImageTwo = 'defaultimg'
  }
  ___acordeon(){
    this.acordeon3 == 'panel'?
    this.acordeon3 = 'panelvisible':this.acordeon3 = 'panel'

    this.acordeonImageThree == 'defaultimg'?
    this.acordeonImageThree = 'rotateimage':
    this.acordeonImageThree = 'defaultimg'
  }

  open(content: any) {
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


