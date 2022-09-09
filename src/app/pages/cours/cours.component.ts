import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cour : any;
  cour_id = localStorage.getItem("id_cours");
  constructor(
    private coursService: CoursService,
    
  ) { } 

  ngOnInit(): void {
    const id = Number(this.cour_id);
    this.showCours(id);
  }

  showCours(id: number){
    return this.coursService.showCours(id).subscribe(
      (res)=>{
        this.cour = res;
        console.log(this.cour);
        
      }
    )
  }

}
