import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/services/User.interface';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[SignupComponent]
})
export class LoginComponent implements OnInit {
  password: number;
  ngform
  email: string;
  errmessage: string;
  loged: boolean;
stat:boolean
  constructor(private auth: AuthService, private router: Router, applogin: AppComponent,private state : SignupComponent) { }
  ngOnInit(): void {
    if (localStorage.getItem('LoggedIn'))     this.router.navigate(['/Main']);
this.state.setstate(this.stat)

  }
  onSubmit(ngForm) {

    let data: User = ngForm.value
    this.auth.signin(data.email, data.password).then(res=>{
      if (res) {
        location.reload();
        this.auth.isloggedin = true
        localStorage.setItem('LoggedIn', 'true')

      }
    }
  ).catch(err=>{
      if(err){
        this.errmessage="المعلومات خاطئة"
      }
    })

    

    
  }

}

