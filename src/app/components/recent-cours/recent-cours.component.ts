import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-recent-cours',
  templateUrl: './recent-cours.component.html',
  styleUrls: ['./recent-cours.component.css']
})
export class RecentCoursComponent implements OnInit {
  coursRe: any;
  module: any;
  // source= '';

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

}
