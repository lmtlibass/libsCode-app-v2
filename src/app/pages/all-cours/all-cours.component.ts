import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-cours',
  templateUrl: './all-cours.component.html',
  styleUrls: ['./all-cours.component.css']
})
export class AllCoursComponent implements OnInit {
  modules: any;
  cours: any;
  coursByModule: any;
  filter  = "hide-card" 
  all     = "show-card"
  constructor(
    private coursService: CoursService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getModule();
    this.getCours();
  }

  getModule(){
    return this.coursService.getModules().subscribe(
      (res)=>{
        this.modules = res;
      }
    )
  }

  getCours(){
    return this.coursService.getCours().subscribe(
      (data)=>{
        this.cours = data;
        console.log(data);
      })
  }

  //filtrer les cours par module
  filterCoursByModule(moduleId: number){
    return this.coursService.getCoursByModule(moduleId).subscribe(
      (res)=>{
        this.coursByModule = res;
        this.filter = "show-card";
        this.all    = "hide-card";
      }
    )
  }
  //afficher tous les cours
  showAll(){
    this.filter  = "hide-card";
    this.all     = "show-card";
  }

  //recuperer et enregoister dans le storage le cours choisi par l'utilisateur
  showCours(id : any){
    this.route.navigateByUrl('/cour',  { skipLocationChange: true })
    return localStorage.setItem(('id_cours'), id);
  }
}
