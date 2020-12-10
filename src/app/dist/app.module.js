"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var material_module_1 = require("src/app/material/material.module");
var angular_ng_autocomplete_1 = require("angular-ng-autocomplete");
var ngx_skeleton_loader_1 = require("ngx-skeleton-loader");
var autocomplete_1 = require("@angular/material/autocomplete");
var app_component_1 = require("./app.component");
var environment_prod_1 = require("../environments/environment.prod");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_pagination_1 = require("ngx-pagination");
var http_1 = require("@angular/common/http");
var signup_component_1 = require("./signup/signup.component");
var login_component_1 = require("./login/login.component");
var header_component_1 = require("./header/header.component");
var help_component_1 = require("./help/help.component");
var categories_component_1 = require("./categories/categories.component");
var mainscreen_component_1 = require("./mainscreen/mainscreen.component");
var cater_component_1 = require("./cater/cater.component");
var subcat_component_1 = require("./subcat/subcat.component");
var sub_subcat_component_1 = require("./sub-subcat/sub-subcat.component");
var subject_component_1 = require("./subject/subject.component");
var ngx_markdown_1 = require("ngx-markdown");
var footer_component_1 = require("./footer/footer.component");
var search_component_1 = require("./search/search.component");
var loader_component_1 = require("./loader/loader.component");
var routers = [
    { path: '', redirectTo: 'Main', pathMatch: 'full' },
    { path: 'Main', component: mainscreen_component_1.MainscreenComponent },
    { path: 'Categories', component: cater_component_1.CaterComponent },
    { path: 'SUbCategories/:Id', component: subcat_component_1.SUBcatComponent },
    { path: 'Subjects/:Id', component: sub_subcat_component_1.SubSUBCATComponent },
    { path: 'Subject/:Id', component: subject_component_1.SubjectComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                header_component_1.HeaderComponent,
                help_component_1.HelpComponent,
                categories_component_1.CategoriesComponent,
                mainscreen_component_1.MainscreenComponent,
                cater_component_1.CaterComponent,
                subcat_component_1.SUBcatComponent,
                sub_subcat_component_1.SubSUBCATComponent,
                subject_component_1.SubjectComponent,
                footer_component_1.FooterComponent,
                search_component_1.SearchComponent,
                loader_component_1.LoaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_prod_1.environment.firebase),
                database_1.AngularFireDatabaseModule, material_module_1.MaterialModule,
                router_1.RouterModule.forRoot(routers), auth_1.AngularFireAuthModule,
                auth_1.AngularFireAuthModule, animations_1.BrowserAnimationsModule, ngx_pagination_1.NgxPaginationModule, http_1.HttpClientModule, ngx_markdown_1.MarkdownModule.forRoot(),
                angular_ng_autocomplete_1.AutocompleteLibModule, ngx_skeleton_loader_1.NgxSkeletonLoaderModule, autocomplete_1.MatAutocompleteModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
