import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { timer } from 'rxjs';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  caron: boolean
  reloaed: boolean = true
  cat = [];
  over = [];
  config: any;
  catt = [];
  idcatc
  titlecatc
  kaay=[]
  titleSUB 
  keysSUB
  decc
  tap = true
  timer
  constructor(private router: Router, private db: AngularFireDatabase, private elm: ElementRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    const numbers = timer(250);
    numbers.subscribe(x => {
      
      this.timer = x
      
    
    })
    this.idcatc = sessionStorage.getItem('catkey')
    this.titlecatc = sessionStorage.getItem('subcatkey')
    console.log(sessionStorage.getItem('subcatkey'))
    const id = this.route.snapshot.params.Id;
    this.db.list('Categories/-LNjOcM_GHJUihMrSVMF' ).valueChanges().subscribe(d => {
      d.forEach(element => {
        this.catt.push(element)
      })

    })
this.titleSUB=  sessionStorage.getItem('titlesub')  
this.keysSUB= sessionStorage.getItem('titlesubkey')  
this.decc=sessionStorage.getItem('decesub')  


  }
}