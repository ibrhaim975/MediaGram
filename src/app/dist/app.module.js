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
var forms_1 = require("@angular/forms");
var material_module_1 = require("src/app/material/material.module");
var angular_ng_autocomplete_1 = require("angular-ng-autocomplete");
var ngx_skeleton_loader_1 = require("ngx-skeleton-loader");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var environment_prod_1 = require("../environments/environment.prod");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_pagination_1 = require("ngx-pagination");
var http_1 = require("@angular/common/http");
var ngx_markdown_1 = require("ngx-markdown");
var nav_component_1 = require("./nav/nav.component");
var header_component_1 = require("./header/header.component");
var service_component_1 = require("./service/service.component");
var ngx_scroll_to_1 = require("@nicky-lenaers/ngx-scroll-to");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var footer_component_1 = require("./footer/footer.component");
var modal_component_1 = require("./modal/modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                header_component_1.HeaderComponent,
                service_component_1.ServiceComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                footer_component_1.FooterComponent,
                modal_component_1.ModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_prod_1.environment.firebase),
                database_1.AngularFireDatabaseModule, material_module_1.MaterialModule,
                ngx_scroll_to_1.ScrollToModule.forRoot(),
                auth_1.AngularFireAuthModule,
                auth_1.AngularFireAuthModule, animations_1.BrowserAnimationsModule, ngx_pagination_1.NgxPaginationModule, http_1.HttpClientModule, ngx_markdown_1.MarkdownModule.forRoot(),
                angular_ng_autocomplete_1.AutocompleteLibModule, ngx_skeleton_loader_1.NgxSkeletonLoaderModule, forms_2.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
