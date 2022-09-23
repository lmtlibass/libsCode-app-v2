import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-space-cours',
  templateUrl: './space-cours.component.html',
  styleUrls: ['./space-cours.component.css']
})
export class SpaceCoursComponent implements OnInit {
  dd: string = 'hide-link';
  _dd: string = '_hide-link';
  coursRe: any;
  module: any;

  id_user = localStorage.getItem('user_id');
  constructor(
    private coursService: CoursService
  ) { }

  //information user
  public cour: any
  public info = ''

  ngOnInit(): void {
    this.getCours(Number(this.id_user));
    this.getModules();
  }

  getModules(){
    return this.coursService.getModules().subscribe(
      (data)=>{
          this.module = data;
          console.log(this.module);
      }
    )
  }

  //récuperer les cours partager par un utilisateur
  getCours(id: number){
    return this.coursService.getCourqByUser(id).subscribe(
      (data)=>{
        data = this.cour
        this.cour = [] 
          ?this.info = 'Vous n\'avez pas encour de cours partagés'
          :this.info = '';
        this.coursRe = data;
        console.log(data);
        
      })
  }

  toggle(){
    this.dd === 'hide-link'?
    this.dd = 'show-link':
    this.dd = 'hide-link'
  }
  _toggle(){
    this._dd === '_hide-link'?
    this._dd = '_show-link':
    this._dd = '_hide-link'
  }

}
