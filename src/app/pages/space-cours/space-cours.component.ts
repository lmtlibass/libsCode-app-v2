import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-cours',
  templateUrl: './space-cours.component.html',
  styleUrls: ['./space-cours.component.css']
})
export class SpaceCoursComponent implements OnInit {
  dd: string = 'hide-link';
  _dd: string = '_hide-link';

  constructor() { }

  ngOnInit(): void {
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
