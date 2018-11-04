(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-data/list-data.component */ "./src/app/list-data/list-data.component.ts");
/* harmony import */ var _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-data/upload-data.component */ "./src/app/upload-data/upload-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'home', component: _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_2__["ListDataComponent"] },
    { path: 'upload', component: _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_3__["UploadDataComponent"] },
    { path: '', component: _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_2__["ListDataComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"fill-remaining-space\">Angular CSV</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <span class=\"button-row\">\r\n      <button mat-icon-button [routerLink]=\"['/home']\">\r\n          <mat-icon>home</mat-icon>\r\n          <span>Home</span>\r\n        </button>\r\n        <button mat-icon-button [routerLink]=\"['/upload']\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n          <span>Upload CSV</span>\r\n        </button>\r\n      </span>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.button-row button {\n  margin-right: 4.5em; }\n\n.button-row span {\n  margin-left: 0.5em; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFBlcnNvbmFsXFxCYWx0byBXb3JrXFxHaXRodWIgV29ya1xcY3N2LW5vZGVcXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtzREFDa0Q7RUFDbEQsZUFBYyxFQUNqQjs7QUFFRDtFQUVFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b25cclxue1xyXG4gIG1hcmdpbi1yaWdodDogNC41ZW07ICBcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-csv';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-data/list-data.component */ "./src/app/list-data/list-data.component.ts");
/* harmony import */ var _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload-data/upload-data.component */ "./src/app/upload-data/upload-data.component.ts");
/* harmony import */ var _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./record-details/record-details.component */ "./src/app/record-details/record-details.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/confirm-delete/confirm-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_7__["ListDataComponent"],
                _upload_data_upload_data_component__WEBPACK_IMPORTED_MODULE_8__["UploadDataComponent"],
                _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_9__["RecordDetailsComponent"],
                _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDeleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]
            ],
            entryComponents: [
                _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_9__["RecordDetailsComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.baseUrl = 'https://node-csv.herokuapp.com/api/';
    }
    AppService.prototype.getRecords = function () {
        return this.http.get(this.baseUrl + 'data');
    };
    AppService.prototype.deleteRecord = function (recordId) {
        return this.http.delete(this.baseUrl + 'data/' + recordId);
    };
    AppService.prototype.uploadFile = function (file) {
        var form = new FormData();
        form.append('file', file, file.name);
        return this.http.post(this.baseUrl + 'upload', form);
    };
    AppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/confirm-delete/confirm-delete.component.html":
/*!**************************************************************!*\
  !*** ./src/app/confirm-delete/confirm-delete.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  confirm-delete works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/confirm-delete/confirm-delete.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/confirm-delete/confirm-delete.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGVsZXRlL2NvbmZpcm0tZGVsZXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/confirm-delete/confirm-delete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-delete/confirm-delete.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function() { return ConfirmDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmDeleteComponent = /** @class */ (function () {
    function ConfirmDeleteComponent() {
    }
    ConfirmDeleteComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-delete',
            template: __webpack_require__(/*! ./confirm-delete.component.html */ "./src/app/confirm-delete/confirm-delete.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete.component.scss */ "./src/app/confirm-delete/confirm-delete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}());



/***/ }),

/***/ "./src/app/list-data/list-data.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-data/list-data.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<mat-table matSort class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\">\r\n  \r\n  <ng-container matColumnDef=\"releaseDate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Release Year</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let record\">{{record['Release Year']}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"title\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n      <mat-cell class=\"description-cell\"\r\n                *matCellDef=\"let record\">{{record.Title}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"origin\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Origin/Ethnicity</mat-header-cell>\r\n      <mat-cell class=\"duration-cell\"\r\n                *matCellDef=\"let record\">{{record['Origin/Ethnicity']}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"director\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Director</mat-header-cell>\r\n    <mat-cell class=\"duration-cell\"\r\n              *matCellDef=\"let record\">{{record.Director}}</mat-cell>\r\n</ng-container>\r\n<ng-container matColumnDef=\"genre\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header>Genre</mat-header-cell>\r\n  <mat-cell class=\"duration-cell\"\r\n            *matCellDef=\"let record\">{{record.Genre}}</mat-cell>\r\n</ng-container>\r\n<ng-container matColumnDef=\"action\">\r\n  <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\r\n  <mat-cell class=\"duration-cell\"*matCellDef=\"let record\">\r\n      <div class=\"example-button-row\">\r\n      <button mat-icon-button (click)=\"viewRecord(record._id)\" color=\"primary\">\r\n        <mat-icon aria-label=\"View Record\">remove_red_eye</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"editRecord(record._id)\" color=\"accent\">\r\n        <mat-icon aria-label=\"Edit Record\">create</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"deleteRecord(record._id)\" color=\"danger\">\r\n        <mat-icon aria-label=\"Delete Record\">delete_forever</mat-icon>\r\n      </button>\r\n    </div>\r\n  </mat-cell>\r\n</ng-container>\r\n  \r\n<mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true;\"></mat-header-row> \r\n  \r\n<mat-row style=\"justify-content: center;\" *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n  \r\n</mat-table>\r\n<mat-paginator [length]=\"dataSource?.length\"\r\n              [pageSize]=\"10\"\r\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list-data/list-data.component.scss":
/*!****************************************************!*\
  !*** ./src/app/list-data/list-data.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-left: 1.5em;\n  margin-right: 1.5em; }\n\n.description-cell {\n  text-align: left;\n  margin: 10px auto; }\n\n.duration-cell {\n  text-align: center; }\n\n.duration-cell mat-icon {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 20px; }\n\n.lessons-table {\n  margin-top: 10px; }\n\n.mat-header-cell {\n  font-weight: bold;\n  font-size: medium; }\n\n.mat-cell {\n  font-size: 15px; }\n\n.spinner-container mat-spinner {\n  margin: 130px auto 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1kYXRhL0M6XFxQZXJzb25hbFxcQmFsdG8gV29ya1xcR2l0aHViIFdvcmtcXGNzdi1ub2RlXFxmcm9udGVuZC9zcmNcXGFwcFxcbGlzdC1kYXRhXFxsaXN0LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9saXN0LWRhdGEvbGlzdC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uZHVyYXRpb24tY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kdXJhdGlvbi1jZWxsIG1hdC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5sZXNzb25zLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0byAwIGF1dG87XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/list-data/list-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-data/list-data.component.ts ***!
  \**************************************************/
/*! exports provided: ListDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataComponent", function() { return ListDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../record-details/record-details.component */ "./src/app/record-details/record-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListDataComponent = /** @class */ (function () {
    function ListDataComponent(appService, dialog) {
        this.appService = appService;
        this.dialog = dialog;
        this.records = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.records);
        this.displayedColumns = ["releaseDate", "title", "origin", "director", "genre", "action"];
    }
    ListDataComponent.prototype.ngOnInit = function () {
        this.GetRecords();
    };
    ListDataComponent.prototype.GetRecords = function () {
        var _this = this;
        this.appService.getRecords()
            .subscribe(function (data) {
            _this.records = data.data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.records);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ListDataComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
    };
    ListDataComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListDataComponent.prototype.viewRecord = function (recordId) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        var record = this.records.filter(function (x) { return x._id == recordId; })[0];
        if (record) {
            dialogConfig.data = record;
            this.dialog.open(_record_details_record_details_component__WEBPACK_IMPORTED_MODULE_3__["RecordDetailsComponent"], dialogConfig);
        }
    };
    ListDataComponent.prototype.deleteRecord = function (recordId) {
        var _this = this;
        var record = this.records.filter(function (x) { return x._id == recordId; })[0];
        if (record) {
            this.appService.deleteRecord(recordId).subscribe(function () {
                _this.records = _this.records.filter(function (x) { return x._id != recordId; });
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.records);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListDataComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListDataComponent.prototype, "paginator", void 0);
    ListDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-data',
            template: __webpack_require__(/*! ./list-data.component.html */ "./src/app/list-data/list-data.component.html"),
            styles: [__webpack_require__(/*! ./list-data.component.scss */ "./src/app/list-data/list-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListDataComponent);
    return ListDataComponent;
}());



/***/ }),

/***/ "./src/app/record-details/record-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/record-details/record-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{record.name}}</h2>\r\n\r\n\r\n<mat-dialog-content >\r\n  <form class=\"full-width\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input [readonly]=\"isReadOnly\" matInput placeholder=\"Title\" [(ngModel)]=\"record.Title\" name=\"title\">\r\n    </mat-form-field>\r\n\r\n    <div>\r\n      <div class=\"half-width\">\r\n          <mat-form-field >\r\n              <input [readonly]=\"isReadOnly\" matInput placeholder=\"Release Year\" [(ngModel)]=\"record['Release Year']\" name=\"releaseyear\">\r\n            </mat-form-field>\r\n      </div>\r\n      <div class=\"half-width\">\r\n          <mat-form-field >\r\n              <input [readonly]=\"isReadOnly\" matInput placeholder=\"Origin\" [(ngModel)]=\"record['Origin/Ethnicity']\" name=\"origin\">\r\n            </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"half-width\">\r\n            <mat-form-field >\r\n                <input [readonly]=\"isReadOnly\" matInput placeholder=\"Director\" [(ngModel)]=\"record.Director\" name=\"director\">\r\n              </mat-form-field>\r\n        </div>\r\n        <div class=\"half-width\">\r\n            <mat-form-field >\r\n                <input [readonly]=\"isReadOnly\" matInput placeholder=\"Genre\" [(ngModel)]=\"record.Genre\" name=\"genre\">\r\n              </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input [readonly]=\"isReadOnly\" matInput placeholder=\"Cast\" [(ngModel)]=\"record.Cast\" name=\"cast\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n        <input [readonly]=\"isReadOnly\" matInput placeholder=\"Wiki\" [(ngModel)]=\"record['Wiki Page']\" name=\"wiki\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"full-width\">\r\n          <textarea [readonly]=\"isReadOnly\" matInput placeholder=\"Plot\" [(ngModel)]=\"record.Plot\" name=\"plot\"></textarea>\r\n        </mat-form-field>\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n\r\n  <button class=\"mat-raised-button mat-accent\" (click)=\"close()\">\r\n    Close\r\n  </button>\r\n\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\" *ngIf=\"!isReadOnly\">\r\n    Save\r\n  </button>\r\n\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/record-details/record-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/record-details/record-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.half-width {\n  display: inline-block;\n  width: 50%;\n  white-space: normal; }\n\n.mat-dialog-content {\n  display: block;\n  margin: 0 -24px;\n  padding: 0 24px;\n  overflow: auto;\n  max-height: 800px; }\n\n.mat-form-field {\n  display: inline-block;\n  text-align: left;\n  width: 94%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JkLWRldGFpbHMvQzpcXFBlcnNvbmFsXFxCYWx0byBXb3JrXFxHaXRodWIgV29ya1xcY3N2LW5vZGVcXGZyb250ZW5kL3NyY1xcYXBwXFxyZWNvcmQtZGV0YWlsc1xccmVjb3JkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxzQkFBcUI7RUFBRSxXQUFVO0VBQUUsb0JBQW1CLEVBQ3ZEOztBQUVEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZWNvcmQtZGV0YWlscy9yZWNvcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhhbGYtd2lkdGgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTAlOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBcclxuICB9XHJcblxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgLTI0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA5NCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/record-details/record-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/record-details/record-details.component.ts ***!
  \************************************************************/
/*! exports provided: RecordDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordDetailsComponent", function() { return RecordDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RecordDetailsComponent = /** @class */ (function () {
    function RecordDetailsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.record = data;
        this.isReadOnly = true;
        // this.form = fb.group({
        //   Title: [record["Title"]],
        //   ReleaseYear: [record["Release Year"]],
        //   Origin:[record["Origin/Ethnicity"]],
        //   Director:[record["Director"]],
        //   Cast: [record["Cast"]],
        //   Genre:[record["Genre"]],
        //   Wiki: [record["Wiki Page"]],
        //   Plot:[record["Plot"]] 
        // });
    }
    RecordDetailsComponent.prototype.ngOnInit = function () {
    };
    RecordDetailsComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    RecordDetailsComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    RecordDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-details',
            template: __webpack_require__(/*! ./record-details.component.html */ "./src/app/record-details/record-details.component.html"),
            styles: [__webpack_require__(/*! ./record-details.component.scss */ "./src/app/record-details/record-details.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], RecordDetailsComponent);
    return RecordDetailsComponent;
}());



/***/ }),

/***/ "./src/app/upload-data/upload-data.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-data/upload-data.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-card class=\"test-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Upload CSV File</mat-card-title>\r\n          <mat-card-subtitle>Upload a CSV file here to update the database</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"full-width\">\r\n            <label class=\"fileName\">{{selectedFile?.name}}</label>\r\n          </div>\r\n            <div class=\"full-width upload-btn-wrapper\">\r\n                <button mat-raised-button color=\"primary\">Select a File</button>\r\n                <input placeholder=\"upload\" name=\"uploadFile\"\r\n                type=\"file\" #fileInput (change)=\"selectAFile()\" > \r\n            </div>\r\n\r\n            <div class=\"full-width\">\r\n                <label [ngClass]=\"(uploadStatus)? 'success':'failure'\" *ngIf=\"uploadStatusMessage?.length\">{{uploadStatusMessage}}</label>\r\n            </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <div class=\"button-row\">\r\n              <button mat-icon-button (click) = \"cancelUpload()\">\r\n                  <mat-icon>close</mat-icon>\r\n                  <span>Cancel</span>\r\n                </button>\r\n                <button mat-icon-button (click) = \"uploadFile()\">\r\n                  <mat-icon>cloud_upload</mat-icon>\r\n                  <span>Upload CSV</span>\r\n                </button>\r\n          </div>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/upload-data/upload-data.component.scss":
/*!********************************************************!*\
  !*** ./src/app/upload-data/upload-data.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-card {\n  max-width: 400px;\n  top: 30px;\n  display: inline-block; }\n\n.container {\n  text-align: center; }\n\n.button-row button {\n  margin-right: 50px; }\n\n.success {\n  color: green;\n  font-weight: bold; }\n\n.failure {\n  color: red;\n  font-weight: bold; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block; }\n\n.btn {\n  border: 2px solid gray;\n  color: gray;\n  background-color: white;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n.fileName {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWRhdGEvQzpcXFBlcnNvbmFsXFxCYWx0byBXb3JrXFxHaXRodWIgV29ya1xcY3N2LW5vZGVcXGZyb250ZW5kL3NyY1xcYXBwXFx1cGxvYWQtZGF0YVxcdXBsb2FkLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsVUFBUTtFQUNSLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUVBLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUNOLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWRhdGEvdXBsb2FkLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB0b3A6MzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1yb3cgYnV0dG9uLFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3VjY2Vzc3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZmFpbHVyZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC5maWxlTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/upload-data/upload-data.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-data/upload-data.component.ts ***!
  \******************************************************/
/*! exports provided: UploadDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataComponent", function() { return UploadDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadDataComponent = /** @class */ (function () {
    function UploadDataComponent(appService) {
        this.appService = appService;
    }
    UploadDataComponent.prototype.ngOnInit = function () {
        this.uploadStatusMessage = "";
    };
    UploadDataComponent.prototype.selectAFile = function () {
        this.uploadStatusMessage = "";
        var fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files.length)
            this.selectedFile = fileBrowser.files[0];
    };
    UploadDataComponent.prototype.cancelUpload = function () {
        this.selectedFile = {};
        this.uploadStatusMessage = "";
    };
    UploadDataComponent.prototype.uploadFile = function () {
        var _this = this;
        this.uploadRequest = this.appService.uploadFile(this.selectAFile).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.uploadComplete(event);
            }
        }, function (err) {
            _this.uploadFailed(err);
        });
    };
    UploadDataComponent.prototype.uploadComplete = function (event) {
        this.uploadStatus = true;
        this.uploadStatusMessage = "Upload Completed Succesfully..!!";
    };
    UploadDataComponent.prototype.uploadFailed = function (err) {
        this.uploadStatus = false;
        if (err.error && err.error.message)
            this.uploadStatusMessage = "Upload operation failed, " + err.error.message;
        else
            this.uploadStatusMessage = "Upload operation failed, Please contact Support";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], UploadDataComponent.prototype, "fileInput", void 0);
    UploadDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-data',
            template: __webpack_require__(/*! ./upload-data.component.html */ "./src/app/upload-data/upload-data.component.html"),
            styles: [__webpack_require__(/*! ./upload-data.component.scss */ "./src/app/upload-data/upload-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], UploadDataComponent);
    return UploadDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Personal\Balto Work\Github Work\csv-node\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map