"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var card_1 = require("@angular/material/card");
var autocomplete_1 = require("@angular/material/autocomplete");
var input_1 = require("@angular/material/input");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var Matrial = [
    button_1.MatButtonModule,
    toolbar_1.MatToolbarModule, autocomplete_1.MatAutocompleteModule, form_field_1.MatFormFieldModule, icon_1.MatIconModule, menu_1.MatMenuModule, card_1.MatCardModule, input_1.MatInputModule,
    progress_spinner_1.MatProgressSpinnerModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                Matrial
            ],
            exports: [Matrial]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
