import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public error: any = [];
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.form);
    return this.auth.signup(this.form).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Vous vous êtes inscrit', 'Réussi🌤️');
        this.router.navigateByUrl('/')
      },
      error=>{
        this.handleError(error);
        this.toastr.error('Une erreur c\'est produit, Oups!');
      }
    );
    
  }

  handleError(error: any){
    this.error = error.error.errors;
    
  }

}
