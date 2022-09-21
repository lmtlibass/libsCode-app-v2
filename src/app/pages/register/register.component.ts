import { Component, OnInit } from '@angular/core';
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
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.form);
    return this.auth.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
    
  }

  handleError(error: any){
    this.error = error.error.errors;
    
  }

}
