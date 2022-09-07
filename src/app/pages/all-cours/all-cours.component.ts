import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-all-cours',
  templateUrl: './all-cours.component.html',
  styleUrls: ['./all-cours.component.css']
})
export class AllCoursComponent implements OnInit {
  modules: any;
  cours: any;
  constructor(
    private coursService: CoursService
  ) { }

  ngOnInit(): void {
    this.getModule();
    this.getCoursRecent();
  }

  getModule(){
    return this.coursService.getModules().subscribe(
      (res)=>{
        this.modules = res;
      }
    )
  }

  getCoursRecent(){
    return this.coursService.getCours().subscribe(
      (data)=>{
        this.cours = data;
        console.log(data);
      })
  }

}
