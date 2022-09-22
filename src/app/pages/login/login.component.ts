import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  public error = null;

  onLogin(){
    console.log(this.form);
    return this.auth.login(this.form).subscribe(
      data=>console.log(data)
      
      );
      
      
      
    }
  
    handleError(error: any){
      
      this.error = error.error.error;
      console.log(this.error);
    }
}