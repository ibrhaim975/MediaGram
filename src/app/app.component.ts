import { Component ,OnInit} from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database"; 
import { FormGroup, FormControl, FormArray, FormBuilder, FormsModule } from '@angular/forms'
import { AngularFireAuthModule } from "@angular/fire/auth";
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
  constructor(private db: AngularFireDatabase) {

  }
  isUser : boolean=false;

  ngOnInit(): void {


 
 
    
    const numbers = timer(3000);
    numbers.subscribe(x => {
      this.timer = x
      
    
    } );




  }
  logOutConfrim(record) {
    record.isdelete = record;
  
  }


}