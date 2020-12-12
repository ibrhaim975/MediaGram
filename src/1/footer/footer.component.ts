import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  timer :number

  constructor() { }

  ngOnInit(): void {

    const numbers = timer(3000);
    numbers.subscribe(x => {
      this.timer = x
      
    
    } );
  }

}
