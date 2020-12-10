import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaterComponent } from 'src/app/cater/cater.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css'],
  providers:[CaterComponent]
})
export class MainscreenComponent implements OnInit,OnDestroy {
  timer :number

  constructor(private cc : CaterComponent, private router: Router) { }
  ngOnDestroy(): void {
    sessionStorage.removeItem('CATT')
    location.reload();

  }

  ngOnInit(): void {
    const numbers = timer(2000);
    numbers.subscribe(x => {
      
      this.timer = x
      
    
    } );
    if(this.router.url.includes('/Main')){
      sessionStorage.setItem('CATT', 'true')

    }
    if(!window.location.hash) {
      window.location.hash='1';
      location.reload();
  }

}

}
