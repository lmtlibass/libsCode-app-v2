import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  dropdown: string = 'hide-link';
  _dropdown: string = '_hide-link';
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

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

   //logout
   logout(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.toastr.show('Deconnexion réussie');
    this.router.navigateByUrl('/');
  }
}
