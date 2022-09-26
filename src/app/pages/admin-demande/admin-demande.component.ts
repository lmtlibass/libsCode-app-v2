import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DemandeService } from 'src/app/services/demande.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-demande',
  templateUrl: './admin-demande.component.html',
  styleUrls: ['./admin-demande.component.css']
})
export class AdminDemandeComponent implements OnInit {
  demande: any;
  closeResult = '';
  role: any


  constructor(
    private demandeService: DemandeService,
    private modalService: NgbModal,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this. getDemande();
  }


  //lister les demandes pour devenir formateur
  getDemande(){
    return this.demandeService.getDemande().subscribe(
      (res)=>{
        this.demande = res;
        console.log(this.demande);
        
      }
      
    )
  }

  //changer le role de l'utilisateur
  changeRoleUser(user_id: number){
    return this.auth.changeRoleUser(user_id).subscribe(
      (res)=>{
        this.role = res;
        this.role.role_id = 1
        console.log(this.role.role_id);
        
      }
      
    )
  }


  //modale
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
