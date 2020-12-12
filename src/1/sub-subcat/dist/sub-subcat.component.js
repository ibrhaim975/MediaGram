"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubSUBCATComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SubSUBCATComponent = /** @class */ (function () {
    function SubSUBCATComponent(router, db, elm, route) {
        this.router = router;
        this.db = db;
        this.elm = elm;
        this.route = route;
        this.reloaed = true;
        this.cat = [];
        this.over = [];
        this.catt = [];
        this.kaay = [];
    }
    SubSUBCATComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(250);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        this.idcatc = sessionStorage.getItem('catkey');
        this.titlecatc = sessionStorage.getItem('subcatkey');
        var id = this.route.snapshot.params.Id;
        this.db.list('Categories/-LNjOcM_GHJUihMrSVMF').valueChanges().subscribe(function (d) {
            d.forEach(function (element) {
                _this.catt.push(element);
            });
        });
        this.db.list('posts/' + id).valueChanges().subscribe(function (d) {
            _this.cat = d;
            _this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this.cat.length
            };
        });
        this.db.list('posts/' + id).snapshotChanges().subscribe(function (d) {
            d.map(function (EE) {
                _this.kaay.push(EE.payload.key);
            });
        });
    };
    SubSUBCATComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    SubSUBCATComponent.prototype.settittle = function (title, Dec) {
        sessionStorage.setItem('titlesub', title);
        sessionStorage.setItem('decesub', Dec);
    };
    SubSUBCATComponent = __decorate([
        core_1.Component({
            selector: 'app-sub-subcat',
            templateUrl: './sub-subcat.component.html',
            styleUrls: ['./sub-subcat.component.css']
        })
    ], SubSUBCATComponent);
    return SubSUBCATComponent;
}());
exports.SubSUBCATComponent = SubSUBCATComponent;
