import { Component ,OnInit} from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database"; 
import { FormGroup, FormControl, FormArray, FormBuilder, FormsModule } from '@angular/forms'
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from "src/app/services/auth.service";
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  timer

item:any;
logoutt : boolean = false
  constructor(private db: AngularFireDatabase,private auth :AuthService) {

  }
  isUser : boolean=false;

  ngOnInit(): void {
    const numbers = timer(3000);
    numbers.subscribe(x => {
      this.timer = x
      
    
    } );
 this.auth.afathu.user.subscribe(userr=>{
if(userr) this.isUser= true
else this.isUser = false
})



  }
  logOutConfrim(record) {
    record.isdelete = record;
  
  }
  logOut() {
    this.auth.logout();
    this.auth.isloggedin = false
    this.isUser =this.auth.isloggedin
    localStorage.removeItem('LoggedIn');

  }

}