import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  user = {
    name: localStorage.getItem('name'),
  }
  constructor() { }

  ngOnInit(): void {
  }

}
