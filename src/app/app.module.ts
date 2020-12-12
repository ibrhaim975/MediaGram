import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { FormControl } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';



  


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,MaterialModule
    ,     ScrollToModule.forRoot()
,
    AngularFireAuthModule
    , AngularFireAuthModule, BrowserAnimationsModule ,NgxPaginationModule,HttpClientModule,    MarkdownModule.forRoot(),
    AutocompleteLibModule,NgxSkeletonLoaderModule,ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  exports: [RouterModule]

}
