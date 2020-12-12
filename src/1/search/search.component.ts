import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword = 'title';
  data = []
  idCat
  CAt = []
  SUBcat = []
  key = []
  keykey = []
  check: boolean
  decs = []
  sub = []
  titlesub=[]
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private db: AngularFireDatabase, private router: Router) { }


  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.db.list('Categories/').snapshotChanges().subscribe(d => {
      this.idCat = d
      d.map(ee => {
        this.data.push(ee.payload.val()['title'])
      })
      this.db.list('SubCategories/-LNjOcM_GHJUihMrSVMF').snapshotChanges().subscribe(c => {
        this.CAt = c
        c.map(e => {
          this.data.push(e.payload.val()['title'])
          this.key.push(e.payload.key)
          this.titlesub.push(e.payload.val()['title'])


        })
        for (let i = 0; i <= this.key.length; i++) {
          this.db.list('posts/' + this.key[i]).snapshotChanges().subscribe(cc => {

            cc.map(e => {
              this.data.push(e.payload.val()['title'])
              this.keykey.push(e.payload.key)
              this.SUBcat.push(e.payload.val()['title'])
              this.decs.push(e.payload.val()['desc'])
              this.sub.push(e.payload.val()['subCatId'])

            })
          })



        }
      })
    })


  }

  selectEvent(item) {
    this.CAt.map(e => {
      if (item == e.payload.val()['title']) {

        this.router.navigate(['/Subjects/' + e.payload.key
        ]);
        sessionStorage.setItem('subcatkey',e.payload.val()['title'])
        sessionStorage.setItem('titlesubkey', e.payload.key)  
        sessionStorage.setItem('catkey',e.payload.val()['catId'])

      }
    })
    this.idCat.map(e => {
      if (item == e.payload.val()['title']) {
        this.router.navigate(['/SUbCategories/' + e.payload.key
        ]);

      }
    })
    for (let i = 0; i <= this.SUBcat.length; i++) {
      if (item == this.SUBcat[i]) {
        const x = this.SUBcat.indexOf(item)
        sessionStorage.setItem('titlesub', this.SUBcat[x])
        sessionStorage.setItem('decesub', this.decs[x])
        sessionStorage.setItem('titlesubkey', this.sub[x])

        this.router.navigate(['/Subject/' + this.keykey[x]
        ]);
      }
    }


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.filter(option => option.toLowerCase().includes(filterValue));
  }
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }


}