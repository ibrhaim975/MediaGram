"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainscreenComponent = void 0;
var core_1 = require("@angular/core");
var cater_component_1 = require("src/app/cater/cater.component");
var rxjs_1 = require("rxjs");
var MainscreenComponent = /** @class */ (function () {
    function MainscreenComponent(cc, router) {
        this.cc = cc;
        this.router = router;
    }
    MainscreenComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('CATT');
        location.reload();
    };
    MainscreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(2000);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        if (this.router.url.includes('/Main')) {
            sessionStorage.setItem('CATT', 'true');
        }
        if (!window.location.hash) {
            window.location.hash = '1';
            location.reload();
        }
    };
    MainscreenComponent = __decorate([
        core_1.Component({
            selector: 'app-mainscreen',
            templateUrl: './mainscreen.component.html',
            styleUrls: ['./mainscreen.component.css'],
            providers: [cater_component_1.CaterComponent]
        })
    ], MainscreenComponent);
    return MainscreenComponent;
}());
exports.MainscreenComponent = MainscreenComponent;
