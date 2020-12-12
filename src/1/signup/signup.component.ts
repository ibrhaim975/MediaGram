import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/User.interface';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  password: number;
  passwordConfrim: number;
  ngform
  email: string;
  errmessage: string;
  constructor(private auth: AuthService, private db: AngularFireDatabase,private router: Router) { }
  lognin = false
  ngOnInit(): void {
    console.log(this.lognin)
    if (localStorage.getItem('LoggedIn'))     this.router.navigate(['/Main']);

  }
  onSubmit(ngForm) {

    let data: User = ngForm.value
    this.auth.signup(data.email, data.password)
    .then(result => {this.db.list('User/').set(result.user.uid,{
      key :result.user.uid ,
      username : this.name,
      password : data.password,
      Email : data.email 
    }).then(()=>{
      location.reload()
      this.auth.isloggedin = true 
        localStorage.setItem('LoggedIn', 'true')
    })
    }
    
    )
    
      .catch(err => {
        this.errmessage = err.message
      }

      )
      this.auth.isloggedin = true

  }
  setstate(ss){
    this.lognin = ss
    
  }

}