import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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

  

}
