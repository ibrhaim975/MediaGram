"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CaterComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CaterComponent = /** @class */ (function () {
    function CaterComponent(router, db, elm, route) {
        this.router = router;
        this.db = db;
        this.elm = elm;
        this.route = route;
        this.reloaed = true;
        this.cat = [];
        this.over = [];
        this.refectime = 0;
        this.catt = [];
        this.CATID = this.route.snapshot.params.Id;
    }
    CaterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(2000);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        this.db.list('Categories/').valueChanges().subscribe(function (d) {
            _this.cat = d;
            _this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this.cat.length
            };
        });
        if (this.router.url.includes('/Categories')) {
        }
    };
    CaterComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    CaterComponent.prototype.setrefech = function (ee) {
        this.refectime = ee;
    };
    CaterComponent = __decorate([
        core_1.Component({
            selector: 'app-cater',
            templateUrl: './cater.component.html',
            styleUrls: ['./cater.component.css']
        })
    ], CaterComponent);
    return CaterComponent;
}());
exports.CaterComponent = CaterComponent;
