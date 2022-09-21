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

  constructor(
    private coursService: CoursService
  ) { }

  ngOnInit(): void {
    this.getCoursRecent();
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

  getCoursRecent(){
    return this.coursService.getRecentsCours().subscribe(
      (data)=>{
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
