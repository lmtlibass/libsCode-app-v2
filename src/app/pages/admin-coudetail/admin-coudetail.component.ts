import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-admin-coudetail',
  templateUrl: './admin-coudetail.component.html',
  styleUrls: ['./admin-coudetail.component.css']
})
export class AdminCoudetailComponent implements OnInit {
  cour : any;
  cour_id = localStorage.getItem("id_cours");

  constructor(
    private coursService: CoursService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = Number(this.cour_id);
    this.showCours(id);
  }
  showCours(id: number){
    return this.coursService.showCoursNonvalide(id).subscribe(
      (res)=>{
        this.cour = res;
        console.log(this.cour);
      }
    )
  }

  
    //modifier statut du cours
    changestatus(id: any){
      return this.coursService.showCours(id).subscribe(
        (res)=> {
          this.cour = res;
          this.cour.statut = this.cour.statut + 1;
  
          this.coursService.changeStatus(id, this.cour).subscribe(
            (res)=>{
              console.log(res);
            });
            this.toastr.success('Valisation réussi!', 'Valider Cours')
          console.log(this.cour);
        });
    }

}
