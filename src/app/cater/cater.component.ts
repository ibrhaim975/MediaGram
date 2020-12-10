import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { timer } from 'rxjs';
@Component({
  selector: 'app-cater',
  templateUrl: './cater.component.html',
  styleUrls: ['./cater.component.css']
})
export class CaterComponent implements OnInit {
caron :boolean
reloaed :boolean = true
cat = [];
over=[];
config: any;
refectime =0
catt=[]
protected CATID = this.route.snapshot.params.Id;
timer
constructor(private router: Router,private db: AngularFireDatabase , private elm : ElementRef,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const numbers = timer(2000);
    numbers.subscribe(x => {
      
      this.timer = x
      
    
    })

 this.db.list('Categories/').valueChanges().subscribe(d => {
      this.cat = d
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.cat.length
      };

    })

 
 
    if( this.router.url.includes('/Categories')) {

    }


  }
  pageChanged(event) {
    this.config.currentPage = event;

  }
  setrefech ( ee){
    this.refectime =ee
  }
}


