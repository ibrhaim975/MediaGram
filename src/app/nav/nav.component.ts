import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {




satate:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onWindowScroll() {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-shrink');
    } else {
      element.classList.remove('navbar-shrink');
    }
  }


}
