import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  timer :number
  constructor() { }

  ngOnInit(): void {
    const numbers = timer(3000);
    numbers.subscribe(x => {
      this.timer = x
      
    
    } );
  }

}
