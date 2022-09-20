import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaces-home',
  templateUrl: './spaces-home.component.html',
  styleUrls: ['./spaces-home.component.css']
})
export class SpacesHomeComponent implements OnInit {
  dropdown: string = 'hide-link';
  _dropdown: string = '_hide-link';
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.dropdown === 'hide-link'?
    this.dropdown = 'show-link':
    this.dropdown = 'hide-link'
  }
  _toggle(){
    this._dropdown === '_hide-link'?
    this._dropdown = '_show-link':
    this._dropdown = '_hide-link'
  }

}
