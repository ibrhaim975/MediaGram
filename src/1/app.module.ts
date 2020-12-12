import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AuthService as AuthGuard } from 'src/app/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { CaterComponent } from './cater/cater.component';
import { SUBcatComponent } from './subcat/subcat.component';
import { SubSUBCATComponent } from './sub-subcat/sub-subcat.component';
import { SubjectComponent } from './subject/subject.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormControl } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';


const routers:Routes =[
  { path: '', redirectTo: 'Main', pathMatch: 'full' },
  { path: 'Main', component: MainscreenComponent },
  { path: 'Categories', component: CaterComponent },
  { path: 'SUbCategories/:Id', component: SUBcatComponent },
  { path: 'Subjects/:Id', component: SubSUBCATComponent },
  { path: 'Subject/:Id', component: SubjectComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HelpComponent,
    CategoriesComponent,
    MainscreenComponent,
    CaterComponent,
    SUBcatComponent,
    SubSUBCATComponent,
    SubjectComponent,
    FooterComponent,
    SearchComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,MaterialModule,
    RouterModule.forRoot(routers), AngularFireAuthModule
    , AngularFireAuthModule, BrowserAnimationsModule ,NgxPaginationModule,HttpClientModule,    MarkdownModule.forRoot(),
    AutocompleteLibModule,NgxSkeletonLoaderModule,MatAutocompleteModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  exports: [RouterModule]

}
