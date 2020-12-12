"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var signup_component_1 = require("src/app/signup/signup.component");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, applogin, state) {
        this.auth = auth;
        this.router = router;
        this.state = state;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('LoggedIn'))
            this.router.navigate(['/Main']);
        this.state.setstate(this.stat);
    };
    LoginComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        var data = ngForm.value;
        this.auth.signin(data.email, data.password).then(function (res) {
            if (res) {
                location.reload();
                _this.auth.isloggedin = true;
                localStorage.setItem('LoggedIn', 'true');
            }
        })["catch"](function (err) {
            if (err) {
                _this.errmessage = "المعلومات خاطئة";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [signup_component_1.SignupComponent]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
