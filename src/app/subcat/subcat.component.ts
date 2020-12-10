import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { timer } from 'rxjs';
import { CaterComponent } from 'src/app/cater/cater.component';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css'],
  providers:[CaterComponent]

})
export class SUBcatComponent implements OnInit {

  caron: boolean
  reloaed: boolean = true
  cat = [];
  over = [];
  config: any;
  catt = [];
  key
  kay = []
  timer
  public IDcat = this.route.snapshot.params.Id
  constructor(private router: Router, private db: AngularFireDatabase, private elm: ElementRef, private route: ActivatedRoute,private ff : CaterComponent) { }

  ngOnInit(): void {
    const numbers = timer(250);
    numbers.subscribe(x => {
      
      this.timer = x
      
    
    })
    this.ff.setrefech(1)
    sessionStorage.setItem('catkey',this.route.snapshot.params.Id)
    const id = this.route.snapshot.params.Id;
    this.db.list('Categories/' + id).valueChanges().subscribe(d => {
      d.forEach(element => {
        this.catt.push(element)
      })

    })


    this.db.list('SubCategories/' + id).valueChanges().subscribe(d => {
      this.cat = d
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.cat.length
      };
    })
    this.db.list('SubCategories/' + id).snapshotChanges().subscribe(d => {
      d.map(EE => {
      
        this.kay.push(EE.payload.key)


   
      })


    })



  }
  pageChanged(event) {
    this.config.currentPage = event;

  }
  settit(title,key){
    sessionStorage.setItem('subcatkey',title)
    sessionStorage.setItem('titlesubkey',key)  

  }
}
