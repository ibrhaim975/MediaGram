"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubjectComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(router, db, elm, route) {
        this.router = router;
        this.db = db;
        this.elm = elm;
        this.route = route;
        this.reloaed = true;
        this.cat = [];
        this.over = [];
        this.catt = [];
        this.kaay = [];
        this.tap = true;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbers = rxjs_1.timer(250);
        numbers.subscribe(function (x) {
            _this.timer = x;
        });
        this.idcatc = sessionStorage.getItem('catkey');
        this.titlecatc = sessionStorage.getItem('subcatkey');
        console.log(sessionStorage.getItem('subcatkey'));
        var id = this.route.snapshot.params.Id;
        this.db.list('Categories/-LNjOcM_GHJUihMrSVMF').valueChanges().subscribe(function (d) {
            d.forEach(function (element) {
                _this.catt.push(element);
            });
        });
        this.titleSUB = sessionStorage.getItem('titlesub');
        this.keysSUB = sessionStorage.getItem('titlesubkey');
        this.decc = sessionStorage.getItem('decesub');
    };
    SubjectComponent = __decorate([
        core_1.Component({
            selector: 'app-subject',
            templateUrl: './subject.component.html',
            styleUrls: ['./subject.component.css']
        })
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
