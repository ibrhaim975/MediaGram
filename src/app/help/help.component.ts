import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  Name: string
  Email: String
  messagetype:string 
  message : string
  mesageee= 'اضغظ للاختيار'
  subbb : boolean = false
  tap = false ;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.subbb = true
   var c= this.db.list('Reports/').query.ref.push({});
    var k = c.key;
    this.db.list('Reports/').set(k, {
      Name: this.Name,
      Email: this.Email,
      messagetype : this.messagetype,
      message:this.message,
      time : Date.now()

    })
  }
}
