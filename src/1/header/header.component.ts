import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'src/app/services/User.interface';
import { Search } from 'src/app/services/SerachMoad';
import { CaterComponent } from 'src/app/cater/cater.component';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CaterComponent]

})
export class HeaderComponent implements OnInit, OnDestroy {

  logoutt: boolean = false
  data: User
  usernamen
  catter: boolean
  model = false
  cattt = []
  Searchh: Search
  keycat = []
  keysubcat = []
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  timer
  constructor(private elementRef: ElementRef, private db: AngularFireDatabase, private auth: AuthService, private catt: CaterComponent, private router: Router) {
  }
  isUser: boolean = false;
  ngOnDestroy() {
  }
  ngOnInit(): void {
  
    let element = document.querySelector('.pos');

    if (sessionStorage.getItem('CATT')) {
      element.classList.add('navbar')
      element.classList.remove('color','shadow-lg')

    }

    if (sessionStorage.getItem('CATT')) { this.catter = true } else { this.catter = false }

    if (!localStorage.getItem('LoggedIn')) this.isUser = false
    else this.isUser = true


    this.auth.afathu.user.subscribe(userr => {

      this.db.list('User/').snapshotChanges().subscribe(username => {

        username.map(usm => {
          if (usm.payload.val()['key'] == userr.uid)
            this.usernamen = usm.payload.val()['username']

        })
      })
    })
  
  }
 

  logOut() {
    this.auth.logout();
    this.auth.isloggedin = false
    this.isUser = this.auth.isloggedin
    localStorage.removeItem('LoggedIn');

  }


}

