import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-nav',
  templateUrl: './space-nav.component.html',
  styleUrls: ['./space-nav.component.css']
})
export class SpaceNavComponent implements OnInit {
  user = {
    name: localStorage.getItem('name'),
  }
  constructor() { }

  ngOnInit(): void {
  }

}
