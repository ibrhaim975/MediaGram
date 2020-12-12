"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(db, auth) {
        this.db = db;
        this.auth = auth;
        this.logoutt = false;
        this.isUser = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(3000);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        this.auth.afathu.user.subscribe(function (userr) {
            if (userr)
                _this.isUser = true;
            else
                _this.isUser = false;
        });
    };
    AppComponent.prototype.logOutConfrim = function (record) {
        record.isdelete = record;
    };
    AppComponent.prototype.logOut = function () {
        this.auth.logout();
        this.auth.isloggedin = false;
        this.isUser = this.auth.isloggedin;
        localStorage.removeItem('LoggedIn');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
