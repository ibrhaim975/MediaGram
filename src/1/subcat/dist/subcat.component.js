"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SUBcatComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var cater_component_1 = require("src/app/cater/cater.component");
var SUBcatComponent = /** @class */ (function () {
    function SUBcatComponent(router, db, elm, route, ff) {
        this.router = router;
        this.db = db;
        this.elm = elm;
        this.route = route;
        this.ff = ff;
        this.reloaed = true;
        this.cat = [];
        this.over = [];
        this.catt = [];
        this.kay = [];
        this.IDcat = this.route.snapshot.params.Id;
    }
    SUBcatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(250);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        this.ff.setrefech(1);
        sessionStorage.setItem('catkey', this.route.snapshot.params.Id);
        var id = this.route.snapshot.params.Id;
        this.db.list('Categories/' + id).valueChanges().subscribe(function (d) {
            d.forEach(function (element) {
                _this.catt.push(element);
            });
        });
        this.db.list('SubCategories/' + id).valueChanges().subscribe(function (d) {
            _this.cat = d;
            _this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this.cat.length
            };
        });
        this.db.list('SubCategories/' + id).snapshotChanges().subscribe(function (d) {
            d.map(function (EE) {
                _this.kay.push(EE.payload.key);
            });
        });
    };
    SUBcatComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    SUBcatComponent.prototype.settit = function (title, key) {
        sessionStorage.setItem('subcatkey', title);
        sessionStorage.setItem('titlesubkey', key);
    };
    SUBcatComponent = __decorate([
        core_1.Component({
            selector: 'app-subcat',
            templateUrl: './subcat.component.html',
            styleUrls: ['./subcat.component.css'],
            providers: [cater_component_1.CaterComponent]
        })
    ], SUBcatComponent);
    return SUBcatComponent;
}());
exports.SUBcatComponent = SUBcatComponent;
