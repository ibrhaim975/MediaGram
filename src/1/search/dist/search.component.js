"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(db, router) {
        this.db = db;
        this.router = router;
        this.keyword = 'title';
        this.data = [];
        this.CAt = [];
        this.SUBcat = [];
        this.key = [];
        this.keykey = [];
        this.decs = [];
        this.sub = [];
        this.titlesub = [];
        this.myControl = new forms_1.FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (value) { return _this._filter(value); }));
        this.db.list('Categories/').snapshotChanges().subscribe(function (d) {
            _this.idCat = d;
            d.map(function (ee) {
                _this.data.push(ee.payload.val()['title']);
            });
            _this.db.list('SubCategories/-LNjOcM_GHJUihMrSVMF').snapshotChanges().subscribe(function (c) {
                _this.CAt = c;
                c.map(function (e) {
                    _this.data.push(e.payload.val()['title']);
                    _this.key.push(e.payload.key);
                    _this.titlesub.push(e.payload.val()['title']);
                });
                for (var i = 0; i <= _this.key.length; i++) {
                    _this.db.list('posts/' + _this.key[i]).snapshotChanges().subscribe(function (cc) {
                        cc.map(function (e) {
                            _this.data.push(e.payload.val()['title']);
                            _this.keykey.push(e.payload.key);
                            _this.SUBcat.push(e.payload.val()['title']);
                            _this.decs.push(e.payload.val()['desc']);
                            _this.sub.push(e.payload.val()['subCatId']);
                        });
                    });
                }
            });
        });
    };
    SearchComponent.prototype.selectEvent = function (item) {
        var _this = this;
        this.CAt.map(function (e) {
            if (item == e.payload.val()['title']) {
                _this.router.navigate(['/Subjects/' + e.payload.key
                ]);
                sessionStorage.setItem('subcatkey', e.payload.val()['title']);
                sessionStorage.setItem('titlesubkey', e.payload.key);
                sessionStorage.setItem('catkey', e.payload.val()['catId']);
            }
        });
        this.idCat.map(function (e) {
            if (item == e.payload.val()['title']) {
                _this.router.navigate(['/SUbCategories/' + e.payload.key
                ]);
            }
        });
        for (var i = 0; i <= this.SUBcat.length; i++) {
            if (item == this.SUBcat[i]) {
                var x = this.SUBcat.indexOf(item);
                sessionStorage.setItem('titlesub', this.SUBcat[x]);
                sessionStorage.setItem('decesub', this.decs[x]);
                sessionStorage.setItem('titlesubkey', this.sub[x]);
                this.router.navigate(['/Subject/' + this.keykey[x]
                ]);
            }
        }
    };
    SearchComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.data.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    SearchComponent.prototype.onChangeSearch = function (val) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    SearchComponent.prototype.onFocused = function (e) {
        // do something when input is focused
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
