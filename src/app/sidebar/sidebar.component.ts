import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
