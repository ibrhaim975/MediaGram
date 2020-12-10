"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var cater_component_1 = require("src/app/cater/cater.component");
var forms_1 = require("@angular/forms");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(elementRef, db, auth, catt, router) {
        this.elementRef = elementRef;
        this.db = db;
        this.auth = auth;
        this.catt = catt;
        this.router = router;
        this.logoutt = false;
        this.model = false;
        this.cattt = [];
        this.keycat = [];
        this.keysubcat = [];
        this.myControl = new forms_1.FormControl();
        this.isUser = false;
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var element = document.querySelector('.pos');
        if (sessionStorage.getItem('CATT')) {
            element.classList.add('navbar');
            element.classList.remove('color', 'shadow-lg');
        }
        if (sessionStorage.getItem('CATT')) {
            this.catter = true;
        }
        else {
            this.catter = false;
        }
        if (!localStorage.getItem('LoggedIn'))
            this.isUser = false;
        else
            this.isUser = true;
        this.auth.afathu.user.subscribe(function (userr) {
            _this.db.list('User/').snapshotChanges().subscribe(function (username) {
                username.map(function (usm) {
                    if (usm.payload.val()['key'] == userr.uid)
                        _this.usernamen = usm.payload.val()['username'];
                });
            });
        });
    };
    HeaderComponent.prototype.logOut = function () {
        this.auth.logout();
        this.auth.isloggedin = false;
        this.isUser = this.auth.isloggedin;
        localStorage.removeItem('LoggedIn');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            providers: [cater_component_1.CaterComponent]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
