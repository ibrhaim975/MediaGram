import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const Matrial =[
  MatButtonModule,
  MatToolbarModule,MatAutocompleteModule,MatFormFieldModule,MatIconModule,MatMenuModule,MatCardModule,MatInputModule
,MatProgressSpinnerModule
]
@NgModule({
  imports: [
    Matrial
  ]
 , exports: [Matrial]
})
export class MaterialModule { }
