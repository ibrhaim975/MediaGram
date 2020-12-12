"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, db, router) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.lognin = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        console.log(this.lognin);
        if (localStorage.getItem('LoggedIn'))
            this.router.navigate(['/Main']);
    };
    SignupComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        var data = ngForm.value;
        this.auth.signup(data.email, data.password)
            .then(function (result) {
            _this.db.list('User/').set(result.user.uid, {
                key: result.user.uid,
                username: _this.name,
                password: data.password,
                Email: data.email
            }).then(function () {
                location.reload();
                _this.auth.isloggedin = true;
                localStorage.setItem('LoggedIn', 'true');
            });
        })["catch"](function (err) {
            _this.errmessage = err.message;
        });
        this.auth.isloggedin = true;
    };
    SignupComponent.prototype.setstate = function (ss) {
        this.lognin = ss;
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
