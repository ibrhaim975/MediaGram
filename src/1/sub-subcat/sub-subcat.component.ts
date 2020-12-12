import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { timer } from 'rxjs';


@Component({
  selector: 'app-sub-subcat',
  templateUrl: './sub-subcat.component.html',
  styleUrls: ['./sub-subcat.component.css'],
})
export class SubSUBCATComponent implements OnInit {

  caron: boolean
  reloaed: boolean = true
  cat = [];
  over = [];
  config: any;
  catt = [];
  idcatc
  titlecatc
  kaay=[]
  timer
  constructor(private router: Router, private db: AngularFireDatabase, private elm: ElementRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    const numbers = timer(250);
    numbers.subscribe(x => {
      
      this.timer = x
      
    
    })
    this.idcatc = sessionStorage.getItem('catkey')
    this.titlecatc = sessionStorage.getItem('subcatkey')
    const id = this.route.snapshot.params.Id;
    this.db.list('Categories/-LNjOcM_GHJUihMrSVMF').valueChanges().subscribe(d => {
      d.forEach(element => {
        this.catt.push(element)
      })

    })


    this.db.list('posts/' + id).valueChanges().subscribe(d => {
      this.cat = d
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.cat.length
      };
    })
 

    this.db.list('posts/' + id).snapshotChanges().subscribe(d => {
      d.map(EE => {
      
        this.kaay.push(EE.payload.key)

      })})

  }
  pageChanged(event) {
    this.config.currentPage = event;

  }

  settittle(title,Dec){
  sessionStorage.setItem('titlesub',title)  
  sessionStorage.setItem('decesub',Dec)  

  }
}