import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-admin-cours',
  templateUrl: './admin-cours.component.html',
  styleUrls: ['./admin-cours.component.css']
})
export class AdminCoursComponent implements OnInit {
  cours: any;
  module: any;

  constructor(
    private coursServie: CoursService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getCours();
    this.getModules();
  }

  getModules(){
    return this.coursServie.getModules().subscribe(
      (data)=>{
       this.module = data;
       console.log(this.module);
      }
    )
  }

  getCours(){
    return this.coursServie.getCoursNonValid().subscribe(
      (data)=>{
        this.cours = data;
        console.log(data);
        
      })
  } 

   //recuperer et enregoister dans le storage le cours choisi par l'utilisateur
   showCours(id : any){
    this.route.navigateByUrl('/lc-admin-cour',  { skipLocationChange: true })
    return localStorage.setItem('id_cours', id);
  }

}
