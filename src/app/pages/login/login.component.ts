import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form = {
      email:null,
      password: null
    }

   

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public error = null;

  onLogin(){
    console.log(this.form);
    return this.auth.login(this.form).subscribe(
      data=>{
        this.handleResponse(data);
        this.toastr.success('Vous vous êtes connecté', 'Réussi🌤️');
        this.router.navigateByUrl('/')
      },
      error=>{
        this.handleError(error);
        this.toastr.error('Une erreur c\'est produit, Oups!');
      }
    );     
  }

  handleResponse(data: any){
    localStorage.setItem('role',data.user.roles[0].role);
    localStorage.setItem('user_id', data.user.id)
    localStorage.setItem('name', data.user.name)
  }
  
    handleError(error: any){
      
      this.error = error.error.message;
      console.log(this.error);
    }
}