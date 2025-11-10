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

/***/ "./src/app/add-device-dialog/add-device-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/add-device-dialog/add-device-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n }\n  \n  #cancel{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 5px;\n }\n  \n  .close.mat-button {\n  top: 0;\n  right: 0;\n  padding: 10px;\n  line-height: 16px;\n  min-width: auto;\n  color:#E66F00!important;\n \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWRldmljZS1kaWFsb2cvYWRkLWRldmljZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7Q0FDL0I7O0VBQ0E7SUFDRyxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGdCQUFnQjtDQUNuQjs7RUFDQTtFQUNDLE1BQU07RUFDTixRQUFRO0VBQ1IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCOztBQUV6QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXZpY2UtZGlhbG9nL2FkZC1kZXZpY2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gICNTYXZlLWRldmljZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiNFNjZGMDAhaW1wb3J0YW50O1xuIH1cbiAjY2FuY2Vse1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6I0U2NkYwMCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiB9XG4gLmNsb3NlLm1hdC1idXR0b24ge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBjb2xvcjojRTY2RjAwIWltcG9ydGFudDtcbiBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-device-dialog/add-device-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/add-device-dialog/add-device-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"close\" mat-button (click)=\"onNoClick()\">X</button>\n<h1 mat-dialog-title id=\"addDevDialoge\">Add Device</h1>\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"inventoryDataForm\">\n  <div class=\"example-container\">\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Device Name</mat-label>\n      <input matInput formControlName=\"deviceName\" value=\"{{getDeviceName()}}\" readonly>\n     </mat-form-field>\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Enter Dev Asset No.</mat-label>\n      <input matInput formControlName=\"deviceAssetNo\" maxlength=\"20\" placeholder=\"Ex. XY123456\" >\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Model No</mat-label>\n      <input matInput formControlName=\"updatedBy\" maxlength=\"20\" placeholder=\"name....\" >\n    </mat-form-field>\n\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Enter Loc in WH </mat-label>\n      <input matInput formControlName=\"location\" maxlength=\"20\" placeholder=\"A-Block GF\">\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Warrenty Till</mat-label>\n      <input matInput formControlName=\"warrantyTillDate\" maxlength=\"20\" placeholder=\"Ex. 20-02-2022\" type=\"date\">\n    </mat-form-field>\n    \n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Last Service</mat-label>\n      <input matInput formControlName=\"lastServiceDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Next Service</mat-label>\n      <input matInput formControlName=\"nextServiceDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n    </mat-form-field>\n    \n    <mat-form-field hintLabel=\"Max 20 characters\" appearance=\"fill\">\n      <mat-label>Updated By</mat-label>\n      <input matInput formControlName=\"deviceModelNo\" maxlength=\"20\" placeholder=\"Ex. XY123456\" >\n    </mat-form-field>\n    <br>\n  <button mat-raised-button type=\"submit\" id=\"Save-device\" color=\"#ff7a01\">Save-Device</button>\n</div>\n</form>\n\n  "

/***/ }),

/***/ "./src/app/add-device-dialog/add-device-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-device-dialog/add-device-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: AddDeviceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceDialogComponent", function() { return AddDeviceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var AddDeviceDialogComponent = /** @class */ (function () {
    function AddDeviceDialogComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.siteId = localStorage.getItem('siteId');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.inventoryDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            deviceAssetNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            deviceModelNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            warrantyTillDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nextServiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lastServiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            updatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    AddDeviceDialogComponent.prototype.ngOnInit = function () {
        console.log("#################### I am in ngOnInit fuction: ", this.data);
        this.getDeviceName();
        if (this.data !== null) {
            this.inventoryDataForm.setValue({
                deviceId: this.data.id ? this.data.id : "",
                deviceName: this.data.deviceName ? this.data.deviceName : "",
                deviceAssetNo: this.data.assetNo ? this.data.assetNo : "",
                deviceModelNo: this.data.modelno ? this.data.modelno : "",
                location: this.data.location ? this.data.location : "",
                warrantyTillDate: this.data.warrenty ? this.data.warrenty : "",
                nextServiceDate: this.data.next_service ? this.data.next_service : "",
                lastServiceDate: this.data.last_service ? this.data.last_service : "",
                updatedBy: this.data.updatedBy ? this.data.updatedBy : "",
            });
        }
    };
    AddDeviceDialogComponent.prototype.getDeviceName = function () {
        return localStorage.getItem('devName');
    };
    AddDeviceDialogComponent.prototype.onSubmit = function () {
        var row_id = localStorage.getItem('row_id');
        console.log("row id in add device fuction", row_id);
        var data = { "id": this.inventoryDataForm.value.deviceId, "row_id": row_id, "deviceName": this.inventoryDataForm.value.deviceName, "assetNo": this.inventoryDataForm.value.deviceAssetNo, "updated_by": this.inventoryDataForm.value.updatedBy, "modelNo": this.inventoryDataForm.value.deviceModelNo, "location": this.inventoryDataForm.value.location, "warrenty": this.inventoryDataForm.value.warrantyTillDate, "last_service": this.inventoryDataForm.value.lastServiceDate, "next_service": this.inventoryDataForm.value.nextServiceDate };
        console.log("This is a site id:", data);
        console.log("function called", this.inventoryDataForm.value);
        this.dataService.saveInventoryData(data).subscribe(function (response) {
            console.log("response : ", response);
        });
        this.dataService.success('Device saved successfully !');
        this.dialogRef.close();
    };
    AddDeviceDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDeviceDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device-dialog',
            template: __webpack_require__(/*! ./add-device-dialog.component.html */ "./src/app/add-device-dialog/add-device-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-device-dialog.component.css */ "./src/app/add-device-dialog/add-device-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AddDeviceDialogComponent);
    return AddDeviceDialogComponent;
}());



/***/ }),

/***/ "./src/app/add-devtype-dialog/add-devtype-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/add-devtype-dialog/add-devtype-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n }\n  \n  #cancel{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 5px;\n }\n  \n  .close.mat-button {\n   top: 0;\n   right: 0;\n   padding: 10px;\n   line-height: 16px;\n   min-width: auto;\n   color:#E66F00!important;\n  \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWRldnR5cGUtZGlhbG9nL2FkZC1kZXZ0eXBlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLDRCQUE0QjtDQUMvQjs7RUFDQTtJQUNHLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0NBQ25COztFQUVBO0dBQ0UsTUFBTTtHQUNOLFFBQVE7R0FDUixhQUFhO0dBQ2IsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZix1QkFBdUI7O0NBRXpCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWRldnR5cGUtZGlhbG9nL2FkZC1kZXZ0eXBlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgI1NhdmUtZGV2aWNle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6I0U2NkYwMCFpbXBvcnRhbnQ7XG4gfVxuICNjYW5jZWx7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDojRTY2RjAwIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuIH1cblxuIC5jbG9zZS5tYXQtYnV0dG9uIHtcbiAgIHRvcDogMDtcbiAgIHJpZ2h0OiAwO1xuICAgcGFkZGluZzogMTBweDtcbiAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgbWluLXdpZHRoOiBhdXRvO1xuICAgY29sb3I6I0U2NkYwMCFpbXBvcnRhbnQ7XG4gIFxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/add-devtype-dialog/add-devtype-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/add-devtype-dialog/add-devtype-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"close\" mat-button (click)=\"onNoClick()\">X</button>\n<h1 mat-dialog-title id=\"addDevDialoge\">Add Device Type</h1>\n<form (ngSubmit)=\"onSubmitDevType()\" [formGroup]=\"devTypeDataForm\">\n  <div class=\"example-container\">\n    <mat-form-field hintLabel=\"Max 35 characters\" appearance=\"fill\">\n      <mat-label>Enter Device Name</mat-label>\n      <input matInput formControlName=\"deviceName\" maxlength=\"35\" placeholder=\"Ex. Fire  Extinguisher\">\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Max 35 characters\" appearance=\"fill\">\n      <mat-label>Enter Device Category</mat-label>\n      <input matInput formControlName=\"category\" maxlength=\"35\" placeholder=\"Ex. Fire Equipment\">\n    </mat-form-field>\n</div>\n<br>\n<button mat-raised-button type=\"submit\" id=\"Save-device\" color=\"#ff7a01\" >Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/add-devtype-dialog/add-devtype-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/add-devtype-dialog/add-devtype-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: AddDevtypeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevtypeDialogComponent", function() { return AddDevtypeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var AddDevtypeDialogComponent = /** @class */ (function () {
    function AddDevtypeDialogComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.siteId = localStorage.getItem('siteId');
        this.devTypeDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    AddDevtypeDialogComponent.prototype.ngOnInit = function () {
        if (this.data !== null) {
            this.devTypeDataForm.setValue({
                deviceName: this.data.deviceName,
                category: this.data.category,
            });
        }
    };
    AddDevtypeDialogComponent.prototype.onSubmitDevType = function () {
        var data = { "siteId": this.siteId, "deviceName": ['deviceName'], "category": ['category'], };
        console.log("This is a site id:", data);
        this.dataService.fireDeviceTypeAdd(this.devTypeDataForm.value).subscribe(function (response) {
            console.log("response : ", response);
        });
        this.dataService.success('Device type saved successfully !');
        this.dialogRef.close();
    };
    AddDevtypeDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDevtypeDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-devtype-dialog',
            template: __webpack_require__(/*! ./add-devtype-dialog.component.html */ "./src/app/add-devtype-dialog/add-devtype-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-devtype-dialog.component.css */ "./src/app/add-devtype-dialog/add-devtype-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AddDevtypeDialogComponent);
    return AddDevtypeDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_trakcer{\n   \n   margin-top: 10px;\n   margin-left:10px;\n   margin-right: 5px;\n   font-size: 18px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n   flex: 1;\n   display: flex;\n   align-items: center;\n   overflow: hidden;\n   word-wrap: break-word;\n   min-height: inherit;\n   padding: 10px;\n}\n\n.container-fluid {\n   background: black;\n}\n\nhr {\n    width: 95%;\n    height: 1px;\n    margin-left: 10px;\n    margin-top: 0px;\n    background-color:#666;\n    \n   }\n\n.mat-option.mat-selected:not(.mat-option-disabled) {\n      color: #fff !important;\n  }\n\n/* Snapshot row start */\n\n.circle-title2{\n    margin-bottom: 15px;\n    text-align: center;\n    \n    \n     }\n\n.circle-title-heading{\n      position:relative; \n      height: 80px; \n      width: 80px;\n      margin: 0 auto -40px;\n      border-radius: 100%;\n      transition: all ease-in-out .3s;\n      background:#ff7a01;\n      color: #fff;\n    }\n\n.circle-title-heading .fa{\n       line-height: 80px;\n    }\n\n.circle-title-heading .fa.icon{\n      font-size: 4em;\n      padding-top: 8px;\n   }\n\n.box{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n    \n   }\n\n.box2{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n      height: 140px;\n      margin-bottom: 50px;\n   }\n\n.box:hover{\n      border-color: #4C4B4B;\n      background-color: #4C4B4B;\n   }\n\n.box-heading{\n        text-transform: uppercase;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n   }\n\n.text-faded{\n      color:rgba(255,255,255,0.7);\n   }\n\n.box-number{\n      padding:5px 0 15px;\n      font-size: 26px;\n      font-weight: 700;\n      line-height: 1;\n   }\n\n.footer{\n      display: block;\n      padding: 5px;\n      color:rgba(255,255,255,0.5);\n      transition: all ease-in-out .3s;\n   }\n\n.footer:hover{\n      text-decoration: none;\n      color:rgba(255,255,255,0.5);\n      background-color: rgba(0,0,0,0.2);\n   }\n\n#img-ctn{\n      padding-top: 14px;\n   }\n\n/* Snapshot row end */\n\n.mat-option.mat-selected:not(.mat-option-disabled) {\n   color: #fff !important;\n  \n}\n\n/* status and energy power status row Starts */\n\n.panel-heading{\n   position: relative;\n \n   background-color: #ff7a01;\n   \n   border: 1px;\n   border-radius: 3px;\n   text-align: left;\n   padding: 5px;\n   font-size: 16px;\n}\n\n.hover-effect{\n   border-color: #4C4B4B;\n      background-color: #4C4B4B;\n}\n\n.status-panel-body{\n       \n       width:100%;\n       background-color:black;\n       position:relative;\n       border-radius:3px; \n       border:1px solid #ff7a01;  \n       padding: 10px;\n       }\n\n.chartBorder{\n         width: 100%;\n\n     \n     }\n\n/* status and energy power status row End */\n\n/* Customer detail table start */\n\n.panel-body{\n      width:100%;\n      border:1px solid #ff7a01;\n      padding: 5px;  \n}\n\nmat-form-field{\n   \n   font-size: 14px;\n   width: 100%;\n}\n\ntable {\n   width: 100%;\n   text-align:left;\n   border-spacing: 0;\n   border-collapse: collapse;\n }\n\n.mat-header-cell{\n   background-color: black;\n   padding: 8px;\n   font-size: 13px;\n}\n\n.mat-cell {\n   font-size: 12px;\n   border-right: 1px solid #222;\n}\n\n.headerRow{\n   background: red;\n   padding: 8px;\n   text-align: center;\n   font-size: 16px;\n}\n\n.mat-paginator{\n   background: #000000;\n}\n\nth {\n   background-color: #000000;\n   padding: 8px;\n   text-align: center;\n}\n\ntd{\n      \n   padding:8px;\n}\n\ntr:nth-child(odd){\n   background-color: #666;\n}\n\ntr:nth-child(even){\n   background-color: #222222;\n}\n\n/* Customer detail table end */\n\n/* Energy status graph start */\n\n.heading-panel{\n   background:#ff7a01;\n   padding:5px;\n   text-align: left;\n   font-size: 16px;\n   border-radius: 3px;\n   margin-top: 12px;\n   }\n\n.chart-body{\n   background-color: #222222;\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n}\n\n/* Energy status graph end */\n\n.chngpwd-body{\n   width:100%;\n   border:1px solid #ff7a01;\n   padding-top: 15px;\n   margin-top: 55px;\n   \n}\n\n.card-header{\n   color: black;\n   text-align: left;\n   font-size: 18px;\n}\n\n.oldp{\n   margin-top: 10px;\n}\n\n.chpwd{\n   text-align: left;\n}\n\n.btn-primary {\n   background: #E66F00;\n   color: #ffffff;\n}\n\n.btn{\n   border: #E66F00;\n    \n}\n\n.chngpwd{\n   margin-top: 125px;\n}\n\n.charheader2{\n   margin: 5px;\n   border-top: 1px solid orangered;\n   background: orangered;\n   padding: 5px;\n   border-radius: 5px;\n\n}\n\nbody {\n  font-family: 'Covered By Your Grace', cursive;\n  line-height: 1.25;\n  \n}\n\n.ng-tns-c13-2 :focus {\n   color: #ff7a01;\n}\n\n@media screen and (max-width: 960px) {\n  .mat-table {\n    border: 0;\n    vertical-align: middle\n  }\n\n  .mat-table caption {\n    font-size: 1em;\n  }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n  }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height:30px;\n    margin-bottom: 4%;\n    padding: 13px;\n  }\n  \n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    \n    font-size: .85em;\n  }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0;\n  }\n    .mat-table .mat-cell:first-child {\n    margin-top: 4%;\n  } \n}\n\n#breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n\n*  breadcrump */\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n\n.btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n/** Default button **/\n\n.btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n\n/* The responsive part */\n\n.btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;    \n  }\n\n.btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n\n.mat-input-element {\n   caret-color: #E66F00 !important;\n  }\n\n.mat-input-element ng-reflect-placeholder {\n   color: #E66F00 !important;\n  }\n\n/* === For phones =================================== */\n\n@media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n\n/* === For tablets ================================== */\n\n@media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n      .hide{\n         display: none;\n      }\n  }\n\n/* === For desktops ================================== */\n\n@media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n\n#page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n   \n}\n\n/* Style inputs, select elements and textareas */\n\ninput[type=text], select, textarea{\n   width: 100%;\n   padding: 12px;\n   border: 1px solid #ccc;\n   border-radius: 4px;\n   box-sizing: border-box;\n   resize: vertical;\n }\n\n/* Style the label to display next to the inputs */\n\nlabel {\n   padding: 12px 12px 12px 0;\n   display: inline-block;\n }\n\n/* Style the submit button */\n\ninput[type=submit] {\n   background-color: #4CAF50;\n   color: white;\n   padding: 12px 20px;\n   border: none;\n   border-radius: 4px;\n   cursor: pointer;\n   float: right;\n }\n\n/* Style the container */\n\n.container-color {\n   border-radius: 5px;\n   background-color: #f2f2f2;\n   padding: 20px;\n }\n\n/* Floating column for labels: 25% width */\n\n.col-25 {\n   float: left;\n   width: 25%;\n   margin-top: 6px;\n }\n\n/* Floating column for inputs: 75% width */\n\n.col-75 {\n   float: left;\n   width: 75%;\n   margin-top: 6px;\n }\n\n/* Clear floats after the columns */\n\n.row:after {\n   content: \"\";\n   display: table;\n   clear: both;\n }\n\n.example1{\n    float: right;\n\n }\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 600px) {\n   .col-25, .col-75, input[type=submit] {\n     width: 100%;\n     margin-top: 0;\n   }\n }\n\n/*gauge css*/\n\n.highcharts-figure .chart-container {\n\twidth: 300px;\n\theight: 200px;\n\tfloat: left;\n}\n\n.highcharts-figure, .highcharts-data-table table {\n\twidth: 600px;\n\tmargin: 0 auto;\n}\n\n.highcharts-data-table table {\n    font-family: Verdana, sans-serif;\n    border-collapse: collapse;\n    border: 1px solid #EBEBEB;\n    margin: 10px auto;\n    text-align: center;\n    width: 100%;\n    max-width: 500px;\n}\n\n.highcharts-data-table caption {\n    padding: 1em 0;\n    font-size: 1.2em;\n    color: #555;\n}\n\n.highcharts-data-table th {\n\tfont-weight: 600;\n    padding: 0.5em;\n}\n\n.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {\n    padding: 0.5em;\n}\n\n.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {\n    background: #f8f8f8;\n}\n\n.highcharts-data-table tr:hover {\n    background: #f1f7ff;\n}\n\n@media (max-width: 600px) {\n\t.highcharts-figure, .highcharts-data-table table {\n\t\twidth: 100%;\n\t}\n\t.highcharts-figure .chart-container {\n\t\twidth: 300px;\n\t\tfloat: none;\n\t\tmargin: 0 auto;\n\t}\n\n}\n\n.panel-heading{\n   position: relative;\n \n   background-color: #ff7a01;\n   \n   border: 1px;\n   border-radius: 3px;\n   text-align: left;\n   padding: 5px;\n   font-size: 16px;\n}\n\n.chart-body3{\n   background-color: #222222;\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n   height: auto;\n   width: auto;\n   color: #ffffff;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixlQUFlO0FBQ2xCOztBQUVBO0dBQ0csT0FBTztHQUNQLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsYUFBYTtBQUNoQjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7O0dBRXRCOztBQUVBO01BQ0csc0JBQXNCO0VBQzFCOztBQUVBLHVCQUF1Qjs7QUFFdkI7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCOzs7S0FHakI7O0FBQ0Q7TUFDRSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsV0FBVztJQUNiOztBQUNBO09BQ0csaUJBQWlCO0lBQ3BCOztBQUNBO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtHQUNuQjs7QUFDQztNQUNFLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGtCQUFrQjs7R0FFckI7O0FBRUE7TUFDRyxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQjtHQUN0Qjs7QUFDQTtNQUNHLHFCQUFxQjtNQUNyQix5QkFBeUI7R0FDNUI7O0FBQ0E7UUFDSyx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixtQkFBbUI7R0FDeEI7O0FBQ0E7TUFDRywyQkFBMkI7R0FDOUI7O0FBQ0E7TUFDRyxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO0dBQ2pCOztBQUNBO01BQ0csY0FBYztNQUNkLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsK0JBQStCO0dBQ2xDOztBQUNBO01BQ0cscUJBQXFCO01BQ3JCLDJCQUEyQjtNQUMzQixpQ0FBaUM7R0FDcEM7O0FBQ0E7TUFDRyxpQkFBaUI7R0FDcEI7O0FBRUgscUJBQXFCOztBQUNyQjtHQUNHLHNCQUFzQjs7QUFFekI7O0FBR0EsOENBQThDOztBQUM5QztHQUNHLGtCQUFrQjs7R0FFbEIseUJBQXlCOztHQUV6QixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFDQTtHQUNHLHFCQUFxQjtNQUNsQix5QkFBeUI7QUFDL0I7O0FBQ0E7O09BRU8sVUFBVTtPQUNWLHNCQUFzQjtPQUN0QixpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLHdCQUF3QjtPQUN4QixhQUFhO09BQ2I7O0FBRUo7U0FDTSxXQUFXOzs7S0FHZjs7QUFHTCwyQ0FBMkM7O0FBRzNDLGdDQUFnQzs7QUFHaEM7TUFDTSxVQUFVO01BQ1Ysd0JBQXdCO01BQ3hCLFlBQVk7QUFDbEI7O0FBQ0E7O0dBRUcsZUFBZTtHQUNmLFdBQVc7QUFDZDs7QUFDQTtHQUNHLFdBQVc7R0FDWCxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLHlCQUF5QjtDQUMzQjs7QUFDQTtHQUNFLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7R0FDZiw0QkFBNEI7QUFDL0I7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCOztBQUNDO0dBQ0UsbUJBQW1CO0FBQ3RCOztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWixrQkFBa0I7QUFDckI7O0FBQ0E7O0dBRUcsV0FBVztBQUNkOztBQUNBO0dBQ0csc0JBQXNCO0FBQ3pCOztBQUNBO0dBQ0cseUJBQXlCO0FBQzVCOztBQUNBLDhCQUE4Qjs7QUFFOUIsOEJBQThCOztBQUM5QjtHQUNHLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCOztBQUVIO0dBQ0cseUJBQXlCO0dBQ3pCLHdCQUF3QjtHQUN4QixhQUFhO0dBQ2Isa0JBQWtCO0FBQ3JCOztBQUlBLDRCQUE0Qjs7QUFJNUI7R0FDRyxVQUFVO0dBQ1Ysd0JBQXdCO0dBQ3hCLGlCQUFpQjtHQUNqQixnQkFBZ0I7O0FBRW5COztBQUdBO0dBQ0csWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixlQUFlO0FBQ2xCOztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLGNBQWM7QUFDakI7O0FBQ0E7R0FDRyxlQUFlOztBQUVsQjs7QUFDQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFHQTtHQUNHLFdBQVc7R0FDWCwrQkFBK0I7R0FDL0IscUJBQXFCO0dBQ3JCLFlBQVk7R0FDWixrQkFBa0I7O0FBRXJCOztBQU1BO0VBQ0UsNkNBQTZDO0VBQzdDLGlCQUFpQjs7QUFFbkI7O0FBR0E7R0FDRyxjQUFjO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Q7RUFDRjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1COztJQUVuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtJQUNFO0lBQ0EsY0FBYztFQUNoQjtBQUNGOztBQUVBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixTQUFTO0dBQ1QsV0FBVztHQUNYLG1CQUFtQjtBQUN0Qjs7QUFHQTs7O0lBR0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDRSwrQkFBK0I7RUFDakM7O0FBR0Esd0JBQXdCOztBQUV4QjtNQUNJLGlDQUFpQztNQUNqQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtHQUNDLCtCQUErQjtFQUNoQzs7QUFFQTtHQUNDLHlCQUF5QjtFQUMxQjs7QUFDQSx1REFBdUQ7O0FBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxlQUFlO01BQ25CO0VBQ0o7O0FBRUEsdURBQXVEOztBQUN2RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO01BQ0E7U0FDRyxhQUFhO01BQ2hCO0VBQ0o7O0FBRUEsd0RBQXdEOztBQUN4RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO0VBQ0o7O0FBQ0E7R0FDQyxXQUFXO0dBQ1gsOEJBQThCO0dBQzlCLG1CQUFtQjs7QUFFdEI7O0FBRUEsZ0RBQWdEOztBQUNoRDtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIsZ0JBQWdCO0NBQ2xCOztBQUVBLGtEQUFrRDs7QUFDbEQ7R0FDRSx5QkFBeUI7R0FDekIscUJBQXFCO0NBQ3ZCOztBQUVBLDRCQUE0Qjs7QUFDNUI7R0FDRSx5QkFBeUI7R0FDekIsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixZQUFZO0NBQ2Q7O0FBRUEsd0JBQXdCOztBQUN4QjtHQUNFLGtCQUFrQjtHQUNsQix5QkFBeUI7R0FDekIsYUFBYTtDQUNmOztBQUVBLDBDQUEwQzs7QUFDMUM7R0FDRSxXQUFXO0dBQ1gsVUFBVTtHQUNWLGVBQWU7Q0FDakI7O0FBRUEsMENBQTBDOztBQUMxQztHQUNFLFdBQVc7R0FDWCxVQUFVO0dBQ1YsZUFBZTtDQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0dBQ0UsV0FBVztHQUNYLGNBQWM7R0FDZCxXQUFXO0NBQ2I7O0FBQ0E7SUFDRyxZQUFZOztDQUVmOztBQUNBLCtJQUErSTs7QUFDL0k7R0FDRTtLQUNFLFdBQVc7S0FDWCxhQUFhO0dBQ2Y7Q0FDRjs7QUFHQSxZQUFZOztBQUNaO0NBQ0EsWUFBWTtDQUNaLGFBQWE7Q0FDYixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osY0FBYztBQUNmOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBQ0E7Q0FDQyxnQkFBZ0I7SUFDYixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7Q0FDZjs7QUFFRDs7QUFDQTtHQUNHLGtCQUFrQjs7R0FFbEIseUJBQXlCOztHQUV6QixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFFQTtHQUNHLHlCQUF5QjtHQUN6Qix3QkFBd0I7R0FDeEIsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osV0FBVztHQUNYLGNBQWM7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZF90cmFrY2Vye1xuICAgXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5tYXQtY2VsbCwgbWF0LWZvb3Rlci1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xuICAgZmxleDogMTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5ociB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjY2O1xuICAgIFxuICAgfVxuICAgXG4gICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiBTbmFwc2hvdCByb3cgc3RhcnQgKi9cblxuICAuY2lyY2xlLXRpdGxlMntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgICAgfVxuICAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZ3tcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcbiAgICAgIGhlaWdodDogODBweDsgXG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIC00MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XG4gICAgICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9IFxuICAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmF7XG4gICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgfVxuICAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmEuaWNvbntcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgIH1cbiAgICAuYm94e1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBcbiAgIH1cblxuICAgLmJveDJ7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICB9XG4gICAuYm94OmhvdmVye1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0QjtcbiAgIH1cbiAgIC5ib3gtaGVhZGluZ3tcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICB9XG4gICAudGV4dC1mYWRlZHtcbiAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgIH1cbiAgIC5ib3gtbnVtYmVye1xuICAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgfVxuICAgLmZvb3RlcntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgIH1cbiAgIC5mb290ZXI6aG92ZXJ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gICB9XG4gICAjaW1nLWN0bntcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgfVxuICAgXG4vKiBTbmFwc2hvdCByb3cgZW5kICovXG4ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBcbn1cblxuXG4vKiBzdGF0dXMgYW5kIGVuZXJneSBwb3dlciBzdGF0dXMgcm93IFN0YXJ0cyAqL1xuLnBhbmVsLWhlYWRpbmd7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuICAgXG4gICBib3JkZXI6IDFweDtcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiA1cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG59XG4uaG92ZXItZWZmZWN0e1xuICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0Qjtcbn1cbi5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICAgICBcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgfSAgXG5cbiAgIC5jaGFydEJvcmRlcntcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgIFxuICAgICB9XG4gICAgIFxuICAgIFxuLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBFbmQgKi9cblxuXG4vKiBDdXN0b21lciBkZXRhaWwgdGFibGUgc3RhcnQgKi9cblxuXG4ucGFuZWwtYm9keXtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBwYWRkaW5nOiA1cHg7ICBcbn0gIFxubWF0LWZvcm0tZmllbGR7XG4gICBcbiAgIGZvbnQtc2l6ZTogMTRweDtcbiAgIHdpZHRoOiAxMDAlO1xufVxudGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOmxlZnQ7XG4gICBib3JkZXItc3BhY2luZzogMDtcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gfVxuIC5tYXQtaGVhZGVyLWNlbGx7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIHBhZGRpbmc6IDhweDtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG5cbi5oZWFkZXJSb3d7XG4gICBiYWNrZ3JvdW5kOiByZWQ7XG4gICBwYWRkaW5nOiA4cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LXNpemU6IDE2cHg7XG59XG4gLm1hdC1wYWdpbmF0b3J7XG4gICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG50aCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgcGFkZGluZzogOHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGR7XG4gICAgICBcbiAgIHBhZGRpbmc6OHB4O1xufSBcbnRyOm50aC1jaGlsZChvZGQpe1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cbnRyOm50aC1jaGlsZChldmVuKXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG4vKiBDdXN0b21lciBkZXRhaWwgdGFibGUgZW5kICovXG5cbi8qIEVuZXJneSBzdGF0dXMgZ3JhcGggc3RhcnQgKi9cbi5oZWFkaW5nLXBhbmVse1xuICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgcGFkZGluZzo1cHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIH1cblxuLmNoYXJ0LWJvZHl7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgcGFkZGluZzogMTBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiAgXG5cblxuLyogRW5lcmd5IHN0YXR1cyBncmFwaCBlbmQgKi9cblxuXG5cbi5jaG5ncHdkLWJvZHl7XG4gICB3aWR0aDoxMDAlO1xuICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICBtYXJnaW4tdG9wOiA1NXB4O1xuICAgXG59XG5cblxuLmNhcmQtaGVhZGVye1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5vbGRwe1xuICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jaHB3ZHtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYnRuLXByaW1hcnkge1xuICAgYmFja2dyb3VuZDogI0U2NkYwMDtcbiAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bntcbiAgIGJvcmRlcjogI0U2NkYwMDtcbiAgICBcbn1cbi5jaG5ncHdke1xuICAgbWFyZ2luLXRvcDogMTI1cHg7XG59XG5cblxuLmNoYXJoZWFkZXIye1xuICAgbWFyZ2luOiA1cHg7XG4gICBib3JkZXItdG9wOiAxcHggc29saWQgb3JhbmdlcmVkO1xuICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xuICAgcGFkZGluZzogNXB4O1xuICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cblxuXG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIFxufVxuXG5cbi5uZy10bnMtYzEzLTIgOmZvY3VzIHtcbiAgIGNvbG9yOiAjZmY3YTAxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICB9XG5cbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgcGFkZGluZzogMTNweDtcbiAgfVxuICBcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBcbiAgICBmb250LXNpemU6IC44NWVtO1xuICB9XG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gIH0gXG59XG5cbiNicmVhZGNydW1ie1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgei1pbmRleDogOTk5O1xuICAgdG9wOiA1MHB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xufVxuXG5cbiogIGJyZWFkY3J1bXAgKi9cblxuLmJ0bi1icmVhZGNydW1iIC5idG46bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgfVxuICBcbiAgLmJ0bi1icmVhZGNydW1iIC5idG4ge1xuICAgIHBhZGRpbmc6NnB4IDEycHggNnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggNnB4IDZweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggMThweCA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiogRGVmYXVsdCBidXR0b24gKiovXG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuLmJ0bi1kZWZhdWx0Om5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMzMDMwMzA7XG4gIH1cbiAgXG4gIFxuICAvKiBUaGUgcmVzcG9uc2l2ZSBwYXJ0ICovXG4gIFxuICAuYnRuLWJyZWFkY3J1bWIgPiAqID4gZGl2IHtcbiAgICAgIC8qIFdpdGggbGVzczogLnRleHQtb3ZlcmZsb3coKTsgKi9cbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICAgIFxuICB9XG4gIFxuICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1jaGlsZChuKzIpIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICBjYXJldC1jb2xvcjogI0U2NkYwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IG5nLXJlZmxlY3QtcGxhY2Vob2xkZXIge1xuICAgY29sb3I6ICNFNjZGMDAgIWltcG9ydGFudDtcbiAgfVxuICAvKiA9PT0gRm9yIHBob25lcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rMikge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgIH1cbiAgfVxuICBcbiAgLyogPT09IEZvciB0YWJsZXRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis0KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH0gXG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5oaWRle1xuICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfVxuICBcbiAgLyogPT09IEZvciBkZXNrdG9wcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis2KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH0gXG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcbiAgICAgIH1cbiAgfVxuICAjcGFnZS13cmFwcGVyIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZzogMTMwcHggMjVweCAxMzBweCAyNXB4O1xuICAgYmFja2dyb3VuZDogIzBGMEYwRjtcbiAgIFxufVxuXG4vKiBTdHlsZSBpbnB1dHMsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhe1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nOiAxMnB4O1xuICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICByZXNpemU6IHZlcnRpY2FsO1xuIH1cbiBcbiAvKiBTdHlsZSB0aGUgbGFiZWwgdG8gZGlzcGxheSBuZXh0IHRvIHRoZSBpbnB1dHMgKi9cbiBsYWJlbCB7XG4gICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuIH1cbiBcbiAvKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgYm9yZGVyOiBub25lO1xuICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgZmxvYXQ6IHJpZ2h0O1xuIH1cbiBcbiAvKiBTdHlsZSB0aGUgY29udGFpbmVyICovXG4gLmNvbnRhaW5lci1jb2xvciB7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgcGFkZGluZzogMjBweDtcbiB9XG4gXG4gLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xuIC5jb2wtMjUge1xuICAgZmxvYXQ6IGxlZnQ7XG4gICB3aWR0aDogMjUlO1xuICAgbWFyZ2luLXRvcDogNnB4O1xuIH1cbiBcbiAvKiBGbG9hdGluZyBjb2x1bW4gZm9yIGlucHV0czogNzUlIHdpZHRoICovXG4gLmNvbC03NSB7XG4gICBmbG9hdDogbGVmdDtcbiAgIHdpZHRoOiA3NSU7XG4gICBtYXJnaW4tdG9wOiA2cHg7XG4gfVxuIFxuIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuIC5yb3c6YWZ0ZXIge1xuICAgY29udGVudDogXCJcIjtcbiAgIGRpc3BsYXk6IHRhYmxlO1xuICAgY2xlYXI6IGJvdGg7XG4gfVxuIC5leGFtcGxlMXtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiB9XG4gLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgIC5jb2wtMjUsIC5jb2wtNzUsIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW4tdG9wOiAwO1xuICAgfVxuIH1cblxuXG4gLypnYXVnZSBjc3MqL1xuIC5oaWdoY2hhcnRzLWZpZ3VyZSAuY2hhcnQtY29udGFpbmVyIHtcblx0d2lkdGg6IDMwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHRmbG9hdDogbGVmdDtcbn1cblxuLmhpZ2hjaGFydHMtZmlndXJlLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRhYmxlIHtcblx0d2lkdGg6IDYwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRkLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aGVhZCB0ciwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmN2ZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblx0LmhpZ2hjaGFydHMtZmlndXJlLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRhYmxlIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQuaGlnaGNoYXJ0cy1maWd1cmUgLmNoYXJ0LWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDMwMHB4O1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cbn1cbi5wYW5lbC1oZWFkaW5ne1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTtcbiAgIFxuICAgYm9yZGVyOiAxcHg7XG4gICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgcGFkZGluZzogNXB4O1xuICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2hhcnQtYm9keTN7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgcGFkZGluZzogMTBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xuICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <h1>This is admin page</h1>\n  <!-- <div class=\"row\">\n  <div class=\"col-sm-3\">\n  <div class=\"panel-heading\">\n      <i class=\"fa fa-bar-chart-o\"></i> Customer Details\n  </div>\n  <div class=\"chart-body3\">\n  <ngx-gauge [type]=\"gaugeType\"\n  [value] = \"gaugeValue\"\n  [label]=\"gaugeLabel\"\n  [append]=\"gaugeAppendText\"\n  [thick]=\"gaugeThickness\"\n  [thresholds]=\"gaugeThresholds\"\n  [backgroundColor]=\"gaugeColor\"\n  >\n  </ngx-gauge>\n  </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"panel-heading\">\n          <i class=\"fa fa-bar-chart-o\"></i> Customer Details\n      </div>\n      <div class=\"chart-body3\">\n      <ngx-gauge [type]=\"gaugeType\"\n      [value] = \"gaugeValue\"\n      [label]=\"gaugeLabel\"\n      [append]=\"gaugeAppendText\"\n      [thick]=\"gaugeThickness\"\n      [thresholds]=\"gaugeThresholds\"\n      [backgroundColor]=\"gaugeColor\"\n      >\n      </ngx-gauge>\n      </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n          <div class=\"panel-heading\">\n              <i class=\"fa fa-bar-chart-o\"></i> Customer Details\n          </div>\n          <div class=\"chart-body3\">\n          <ngx-gauge [type]=\"gaugeType\"\n          [value] = \"gaugeValue\"\n          [label]=\"gaugeLabel\"\n          [append]=\"gaugeAppendText\"\n          [thick]=\"gaugeThickness\"\n          [thresholds]=\"gaugeThresholds\"\n          [backgroundColor]=\"gaugeColor\"\n          >\n          </ngx-gauge>\n          </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-bar-chart-o\"></i> Customer Details\n              </div>\n              <div class=\"chart-body3\">\n              <ngx-gauge [type]=\"gaugeType\"\n              [value] = \"gaugeValue\"\n              [label]=\"gaugeLabel\"\n              [append]=\"gaugeAppendText\"\n              [thick]=\"gaugeThickness\"\n              [thresholds]=\"gaugeThresholds\"\n              [backgroundColor]=\"gaugeColor\"\n              >\n              </ngx-gauge>\n              </div>\n                </div>\n\n  </div> -->\n    <!-- <div class=\"row\">\n            <div class=\"col-sm-12 \">\n                <div class=\"panel-heading\">\n                  <i class=\"fa fa-bar-chart-o\"></i>Customer Details\n                </div>\n              <div class=\"chart-body\">\n                  <div class=\"col-md-4\">\n                      <mat-form-field >\n                          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                      </mat-form-field>\n                  </div>\n                    <div class=\"mat-elevation-z8\">\n                            <mat-table [dataSource]=\"dataSource\" matSort>\n\n\n                                <ng-container matColumnDef=\"id\" class=\"hidden\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header > Site ID </mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\" data-label=\"id\" > {{row.id}} </mat-cell>\n                                  </ng-container>\n\n                                  <ng-container matColumnDef=\"userId\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\" data-label=\"progress\" > {{row.userId}} </mat-cell>\n                                  </ng-container>\n\n                                  <ng-container matColumnDef=\"title\">\n                                      <mat-header-cell *matHeaderCellDef mat-sort-header > Action</mat-header-cell>\n                                      <mat-cell *matCellDef=\"let row\" data-label=\"progress\" >\n                                        <button mat-ripple mat-raised-button color=\"primary\" style=\"margin-right: 16px;\" (click)=\"edit(row.id)\"> Edit</button>\n                                        <button mat-ripple mat-raised-button color=\"warn\" style=\"margin-right: 0px;\">Delete</button>\n                                      </mat-cell>\n                                    </ng-container>\n\n\n\n\n                                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                    <mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" >\n                                    </mat-row>\n                            </mat-table>\n\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>  -->\n\n  <br>\n  <br>\n<!-- <div class=\"row\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"userData\" class=\"form-inline\">\n        <div class=\"example-form\">\n            <select class=\"custom-select\" (change)=\"changeCountry($event)\" formControlName=\"countryName\">\n                <option value=\"\">Choose your country</option>\n                <option *ngFor=\"let country of Country\" [ngValue]=\"country\">{{country}}</option>\n            </select>\n            <select class=\"custom-select\" (change)=\"changeState($event)\" formControlName=\"stateName\">\n                <option value=\"\">Choose your state</option>\n                <option *ngFor=\"let state of State\" [ngValue]=\"state\">{{state}}</option>\n            </select>\n            <select class=\"custom-select\" (change)=\"changeCity($event)\" formControlName=\"cityName\">\n                <option value=\"\">Choose your city</option>\n                <option *ngFor=\"let city of City\" [ngValue]=\"city\">{{city}}</option>\n            </select>\n        </div>\n        <button mat-ripple mat-raised-button type=\"submit\" >Submit</button><br>\n    </form>\n</div> -->\n\n<!-- <div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block':'none'\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal Heading</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hide()\">&times;</button>\n        </div>\n\n        <div class=\"modal-body\">\n          Modal body..\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n        <div class=\"container-color\">\n        <form [formGroup]=\"data\" >\n          <div class=\"row \">\n            <div class=\"col-25\">\n              <label for=\"fname\">First Name</label>\n            </div>\n            <div class=\"col-75\">\n              <input type=\"text\" id=\"fname\"  formControlName=\"firstName\" placeholder=\"Your name..\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-25\">\n              <label for=\"lname\">Last Name</label>\n            </div>\n            <div class=\"col-75\">\n              <input type=\"text\" id=\"lname\"  formControlName=\"lastName\" placeholder=\"Your last name..\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-25\">\n              <label for=\"country\">Country</label>\n            </div>\n            <div class=\"col-75\">\n              <select id=\"country\" name=\"country\" formControlName=\"options\">\n                <option value=\"\" disabled>select options</option>\n                <option *ngFor=\"let opt of option\" [value]=\"opt\">{{opt}}</option>\n\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-25\">\n              <label for=\"subject\">Subject</label>\n            </div>\n            <div class=\"col-75\">\n              <textarea id=\"subject\" formControlName=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n            </div>\n          </div>\n          <div class=\"row\">\n            <input type=\"submit\" value=\"Submit\" style=\"margin-right: 16px;\"  (click)=\"onClick()\" >\n            <input style=\"margin-right: 0px;\"   type=\"submit\" value=\"Cancel\" (click)=\"onCancel()\" >\n          </div>\n        </form>\n    </div> -->\n<!--\n\n<form  [formGroup]=\"form\" autocomplete=\"off\">\n        <ng-container formArrayName=\"albums\">\n          <mat-table [dataSource]=\"albums.controls\"> -->\n\n             - Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n\n             <!-- <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> Id </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.get('id').value}}. </mat-cell>\n            </ng-container> -->\n\n            <!-- User Column -->\n            <!-- <ng-container matColumnDef=\"userId\">\n              <mat-header-cell *matHeaderCellDef> User </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [formGroup]=\"element\">{{element.get('userId').value}}\n\n              </mat-cell>\n            </ng-container>  -->\n\n            <!-- Title Column -->\n            <!-- <ng-container matColumnDef=\"title\">\n              <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n              <mat-cell *matCellDef=\"let element;\" [formGroup]=\"element\">\n                <mat-form-field floatLabel=\"never\">\n                  <input matInput placeholder=\"Title\" formControlName=\"title\" required>\n                </mat-form-field>\n              </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n        </ng-container>\n        <button type=\"button\" (click)=\"submit()\">Submit</button>\n      </form>   -->\n\n\n<!--\n\n      <div class=\"row\">\n          <div class=\"col-sm-12 \">\n              <div class=\"panel-heading\">\n                <i class=\"fa fa-bar-chart-o\"></i>Customer Details\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field>\n                    <input matInput [max] =\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\" [formControl]=\"date\" [value]=\"date.value\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"chart-body\">\n                <div class=\"col-md-4\">\n                    <mat-form-field >\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                    </mat-form-field>\n                </div>\n                  <div class=\"mat-elevation-z8\">\n                          <mat-table [dataSource]=\"dataSource\" matSort>\n\n\n                              <ng-container matColumnDef=\"custId\" class=\"hidden\">\n                                  <mat-header-cell *matHeaderCellDef mat-sort-header > Site ID </mat-header-cell>\n                                  <mat-cell *matCellDef=\"let row\" data-label=\"id\" > {{row.custId}} </mat-cell>\n                                </ng-container>\n\n                                <ng-container matColumnDef=\"custUserName\">\n                                  <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                                  <mat-cell *matCellDef=\"let row\" data-label=\"progress\" > {{row.custUserName}} </mat-cell>\n                                </ng-container>\n\n                                <ng-container matColumnDef=\"custEmail\">\n                                  <mat-header-cell *matHeaderCellDef mat-sort-header> Site Type </mat-header-cell>\n                                  <mat-cell *matCellDef=\"let row\" data-label=\"progress\" ><mat-slide-toggle\n                                      class=\"example-margin\"\n                                      [color]=\"color\"\n                                      [checked]=\"row.custEmail\"\n                                      [disabled]=\"disabled\"\n                                      (change)=\"onChange($event,row.custId,date.value)\">\n\n                                  </mat-slide-toggle> <span *ngIf=\"checked == true\">True</span> <span *ngIf=\"checked == false\"></span></mat-cell>\n                                </ng-container>\n\n                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                  <mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" >\n                                  </mat-row>\n                          </mat-table>\n\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n              </div>\n          </div>\n      </div>\n  </div>  -->\n\n\n  <!-- <div class=\"row mt-3\">\n      <div class=\" col-lg-3\">\n          <div class=\"panel-heading\">\n              <i class=\"fa fa-bar-chart-o\"></i> Admin\n          </div>\n          <div class=\"status-panel-body\" >\n              <highcharts-chart\n                  [Highcharts]=\"pieChart\"\n                  [constructorType]=\"chartConstructor\"\n                  [options]=\"lineChartOptions\"\n                  [callbackFunction]=\"chartCallback\"\n\n                  [(update)]=\"updateFlag\"\n                  [oneToOne]=\"oneToOneFlag\"\n\n                  style=\"width: 100%; height: 100%; display: block;\">\n              </highcharts-chart>\n          </div>\n      </div>\n         <div class=\"col-lg-3\">\n\n                  <div class=\"panel-heading\">\n                      <i class=\"fa fa-bar-chart-o\"></i> Customer\n                  </div>\n                  <div class=\"status-panel-body\" >\n                      <highcharts-chart\n                          [Highcharts]=\"pieChart\"\n                          [constructorType]=\"chartConstructor\"\n                          [options]=\"pieChartOptions\"\n                          [callbackFunction]=\"chartCallback\"\n\n                          [(update)]=\"updateFlag\"\n                          [oneToOne]=\"oneToOneFlag\"\n\n                          style=\"width: 100%; height: 100%; display: block;\">\n                      </highcharts-chart>\n                  </div>\n              </div>\n              <div class=\"col-lg-3\">\n\n                  <div class=\"panel-heading\">\n                      <i class=\"fa fa-bar-chart-o\"></i> Site Manager\n                  </div>\n                  <div class=\"status-panel-body\" >\n                      <highcharts-chart\n                          [Highcharts]=\"pieChart\"\n                          [constructorType]=\"chartConstructor\"\n                          [options]=\"pieChartOptions\"\n                          [callbackFunction]=\"chartCallback\"\n\n                          [(update)]=\"updateFlag\"\n                          [oneToOne]=\"oneToOneFlag\"\n\n                          style=\"width: 100%; height: 100%; display: block;\">\n                      </highcharts-chart>\n                  </div>\n              </div>\n\n              <div class=\"col-lg-3\">\n\n                  <div class=\"panel-heading\">\n                      <i class=\"fa fa-bar-chart-o\"></i> Site Enginner\n                  </div>\n                  <div class=\"status-panel-body\" >\n                      <highcharts-chart\n                          [Highcharts]=\"pieChart\"\n                          [constructorType]=\"chartConstructor\"\n                          [options]=\"pieChartOptions\"\n                          [callbackFunction]=\"chartCallback\"\n\n                          [(update)]=\"updateFlag\"\n                          [oneToOne]=\"oneToOneFlag\"\n\n                          style=\"width: 100%; height: 100%; display: block;\">\n                      </highcharts-chart>\n                  </div>\n              </div>\n  </div>\n<div class=\"row mt-3\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> Site Enginner\n        </div>\n        <div class=\"chart-body\">\n\n            <highcharts-chart\n                [Highcharts]=\"Highcharts\"\n                [constructorType]=\"chartConstructor\"\n                [options]=\"lineChartOptions\"\n                [callbackFunction]=\"chartCallback\"\n                [(update)]=\"updateFlag\"\n                [oneToOne]=\"oneToOneFlag\"\n\n                style=\"width: 100%; height: 100%; display: block;\"\n            ></highcharts-chart>\n    </div>\n    </div>\n</div>\n<div class=\"row mt-3\">\n    <div class=\"col-sm-12 \">\n        <div class=\"heading-panel\">\n\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <i class=\"fa fa-bar-chart-o\"></i>Total <mat-form-field style=\"max-width: 34%; font-size: 16px\">\n                    <mat-select [(value)]=\"selected_graph\" #energyValue (selectionChange)=\"columnGraphFilterChanged($event)\">\n                        <mat-option *ngFor=\"let graphType of graphTypes\" [value]=\"graphType.value\">\n                            {{graphType.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div *ngIf=\"showIntervalOptions; then thenTemplate else elseTemplate\"></div>\n                <ng-template #thenTemplate>\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-select [(value)]=\"selected_task\" (selectionChange)=\"columnGraphFilterChanged()\">\n                                <mat-option  *ngFor=\"let interval of intervals\" [value]=\"interval.value\">\n                                    {{interval.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </ng-template>\n                <ng-template #elseTemplate><div class=\"col-md-2\"></div></ng-template>\n\n\n                <div class=\"col-md-3\">\n                    <mat-form-field>\n                        <input matInput [max] =\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\" [formControl]=\"date\" [value]=\"date.value\" (dateChange)=\"columnGraphFilterChanged()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"chart-body\">\n\n                <highcharts-chart\n                    [Highcharts]=\"Highcharts\"\n                    [constructorType]=\"chartConstructor\"\n                    [options]=\"barChartOptions\"\n                    [callbackFunction]=\"chartCallback\"\n\n                    [(update)]=\"updateFlag\"\n                    [oneToOne]=\"oneToOneFlag\"\n\n                    style=\"width: 100%; height: 100%; display: block;\"\n                ></highcharts-chart>\n            <div class=\"row\">\n                <div class=\"col-8\"></div>\n                <div class=\"col-4\"><button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\" style=\"float: right;\" (click)=\"changeGraphStacking()\">\n                    <span class =\"ng-scope\">Change Graph</span>\n                </button>\n            </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var AdminComponent = /** @class */ (function () {
    // SolidGaugeChart=SolidGaugeChart;
    function AdminComponent(UserService, dataService, fb, album) {
        this.UserService = UserService;
        this.dataService = dataService;
        this.fb = fb;
        this.album = album;
        this.show = false;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.displayedColumns = ['id', 'userId', 'title'];
        this.showModal = false;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.gaugeType = "full";
        this.gaugeValue = 39;
        this.gaugeLabel = "speed";
        this.gaugeAppendText = "km/h";
        this.gaugeThickness = 20;
        this.gaugeColor = "#ffff";
        this.gaugeThresholds = {
            '0': { color: 'green' },
            '40': { color: 'orange' },
            '75': { color: 'red' }
        };
        this.d = { "id": 1 };
        // displayedColumns = ['custUserName','custEmail',];
        this.Country = ["india", "usa", "russia"];
        this.State = ["haryana", "punjab"];
        this.City = ["faridabad", "amritsar"];
        this.option = ["option1", "option2", "option3"];
        this.userData = this.fb.group({
            countryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stateName: [(''), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cityName: [(''), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getCustomers()
        this.form = this.fb.group({
            albums: this.fb.array([])
        });
        this.data = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            options: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        //movie service
        this.album.getAllAsFormArray(this.d).subscribe(function (albums) {
            _this.form.setControl('albums', albums);
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ELEMENT_DATA);
    };
    Object.defineProperty(AdminComponent.prototype, "albums", {
        get: function () {
            return this.form.get('albums');
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.submit = function () {
        var data = { "data": this.form.value };
        this.dataService.data(data).subscribe(function (response) {
            var result = response["result"];
            console.log("submit data result: ", result);
        });
        console.log("data is:- ", this.form.value);
    };
    // On user change I clear the title of that album 
    AdminComponent.prototype.onUserChange = function (event, album) {
        var title = album.get('title');
        title.setValue(null);
        title.markAsUntouched();
        // Notice the ngIf at the title cell definition. The user with id 3 can't set the title of the albums
    };
    AdminComponent.prototype.onClick = function () {
        console.log("dataa :> ", this.data.value);
        this.data.reset();
    };
    AdminComponent.prototype.onChange = function (ob, id, date) {
        console.log("toggle changed");
        console.log(ob.checked);
        console.log(id);
        console.log(Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(date, 'yyyy/MM/dd', 'en'));
    };
    AdminComponent.prototype.edit = function (row) {
        console.log("edited data :- ", row);
        this.showModal = true;
    };
    AdminComponent.prototype.hide = function () {
        this.showModal = false;
    };
    AdminComponent.prototype.columnGraphFilterChanged = function () {
    };
    AdminComponent.prototype.getCustomers = function () {
        var _this = this;
        this.UserService.getAllCustomers().subscribe(function (response) {
            console.log('response', response);
            var customer = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data = response['data'][i];
                console.log("data", data);
                var customer_details = data['customer'];
                var customer_id = customer_details['id'];
                var customer_username = customer_details['username'];
                var customer_email = customer_details['email'];
                var customer_contact = customer_details['Contact_number'];
                customer.push({
                    'custId': customer_id,
                    'custUserName': customer_username,
                    'custEmail': customer_email,
                    'custContact': customer_contact
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](customer);
            console.log(_this.dataSource);
            console.log('This is site data source' + ": " + _this.dataSource);
        });
    };
    AdminComponent.prototype.getAlarmGraph = function () {
        var _this = this;
        var data1 = { 'site_id': this.siteId };
        this.UserService.getCustAlarmGraphData(data1).subscribe(function (response) {
            _this.lineChartOptions = {
                colorCount: '4',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                chart: {
                    type: "spline",
                    backgroundColor: "#222222",
                    overflow: 'scroll'
                },
                title: {
                    style: {
                        color: 'white',
                    },
                    text: 'Snapshot Monthly Trend'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['months']
                },
                yAxis: {
                    title: {
                        style: { color: 'white', },
                        text: "Value"
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    }
                },
                tooltip: {
                    valueSuffix: ""
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: {
                    name: 'Energy Consumed',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                },
            };
        });
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]])
    ], AdminComponent);
    return AdminComponent;
}());

var ELEMENT_DATA = [
    { id: 1,
        userId: 'Hydrogen',
        title: '' },
    { id: 2,
        userId: 'helium',
        title: '' }
];


/***/ }),

/***/ "./src/app/alarm/alarm.component.css":
/*!*******************************************!*\
  !*** ./src/app/alarm/alarm.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container-ng-tns-c15-6-ng-trigger-ng-trigger-dialogContainer-ng-star-inserted{\n    margin-top: 150px;\n      display: block;\n      padding: 110px;\n      margin-left: 666px;\n      border-radius: 4px;\n      box-sizing: border-box;\n      overflow: auto;\n      outline: 0;\n      width: 100%;\n      height: 100%;\n      min-height: inherit;\n      max-height: inherit;\n  }\n   \n  .mat-row:nth-child(even) {\n    background: #CCC;\n    }\n   \n  .mat-row:nth-child(odd) {\n    background: red;\n    }\n   \n  @media screen and (max-width: 960px) {\n     .mat-table {\n       border: 0;\n       vertical-align: middle\n     }\n   \n     .mat-table caption {\n       font-size: 1em;\n     }\n     \n     .mat-table .mat-row {\n       border-bottom: 5px solid #ddd;\n       display: inline;\n     }\n     /*\n     .mat-table .mat-row:nth-child(even) {background: #CCC}\n     .mat-table .mat-row:nth-child(odd) {background: #FFF}\n     */\n     .mat-table .mat-cell {\n       border-bottom: 1px solid #ddd;\n       display: block;\n       font-size: 1em;\n       text-align: right;\n       font-weight: bold;\n       height:30px;\n       margin-bottom: 4%;\n       padding: 13px;\n     }\n     .mat-table .mat-cell:before {\n       content: attr(data-label);\n       float: left;\n       text-transform: uppercase;\n       font-weight: normal;\n       \n       font-size: .85em;\n     }\n     .mat-table .mat-cell:last-child {\n       border-bottom: 0;\n     }\n       .mat-table .mat-cell:first-child {\n       margin-top: 4%;\n     }\n    .mat-header-row {\n       display: none;\n     }\n  \n   }\n   \n  .panel-heading{\n    position: relative;\n  \n    background-color: #ff7a01;\n    \n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n   \n  .hover-effect{\n    border-color: #4C4B4B;\n       background-color: #4C4B4B;\n }\n   \n  .status-panel-body{\n        \n        width:100%;\n        background-color:black;\n        position:relative;\n        border-radius:3px; \n        border:1px solid #ff7a01;  \n        padding: 20px;\n        }\n   \n  .chartBorder{\n          width: 100%;\n \n      \n      }\n   \n  .panel-body{\n       width:100%;\n       border:1px solid #ff7a01;\n       padding: 5px;  \n }\n   \n  .chart-body{\n    background-color: #222222;\n    border:1px solid #ff7a01;\n    padding: 10px;\n    position: relative;\n }\n   \n  .chartBorder{\n    width: 100%;\n\n\n}\n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxhcm0vYWxhcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtNQUNmLGNBQWM7TUFDZCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLFVBQVU7TUFDVixXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixtQkFBbUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEI7O0VBQ0Y7SUFDRSxlQUFlO0lBQ2Y7O0VBRUQ7S0FDRTtPQUNFLFNBQVM7T0FDVDtLQUNGOztLQUVBO09BQ0UsY0FBYztLQUNoQjs7S0FFQTtPQUNFLDZCQUE2QjtPQUM3QixlQUFlO0tBQ2pCO0tBQ0E7OztNQUdDO0tBQ0Q7T0FDRSw2QkFBNkI7T0FDN0IsY0FBYztPQUNkLGNBQWM7T0FDZCxpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLFdBQVc7T0FDWCxpQkFBaUI7T0FDakIsYUFBYTtLQUNmO0tBQ0E7T0FDRSx5QkFBeUI7T0FDekIsV0FBVztPQUNYLHlCQUF5QjtPQUN6QixtQkFBbUI7O09BRW5CLGdCQUFnQjtLQUNsQjtLQUNBO09BQ0UsZ0JBQWdCO0tBQ2xCO09BQ0U7T0FDQSxjQUFjO0tBQ2hCO0lBQ0Q7T0FDRyxhQUFhO0tBQ2Y7O0dBRUY7O0VBQ0E7SUFDQyxrQkFBa0I7O0lBRWxCLHlCQUF5Qjs7SUFFekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7O0VBQ0E7SUFDRyxxQkFBcUI7T0FDbEIseUJBQXlCO0NBQy9COztFQUNBOztRQUVPLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiOztFQUVKO1VBQ00sV0FBVzs7O01BR2Y7O0VBR0w7T0FDTSxVQUFVO09BQ1Ysd0JBQXdCO09BQ3hCLFlBQVk7Q0FDbEI7O0VBQ0E7SUFDRyx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0VBQ0E7SUFDRyxXQUFXOzs7QUFHZiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtL2FsYXJtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250YWluZXItbmctdG5zLWMxNS02LW5nLXRyaWdnZXItbmctdHJpZ2dlci1kaWFsb2dDb250YWluZXItbmctc3Rhci1pbnNlcnRlZHtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMTEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNjY2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgfVxuICAgXG4gIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICB9XG4gIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgfSAgXG4gIFxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgLm1hdC10YWJsZSB7XG4gICAgICAgYm9yZGVyOiAwO1xuICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgfVxuICAgXG4gICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XG4gICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgIH1cbiAgICAgXG4gICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgfVxuICAgICAvKlxuICAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cbiAgICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAgKi9cbiAgICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgIH1cbiAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICBcbiAgICAgICBmb250LXNpemU6IC44NWVtO1xuICAgICB9XG4gICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgIH1cbiAgICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgIH1cbiAgICAubWF0LWhlYWRlci1yb3cge1xuICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbiAgXG4gICB9XG4gICAucGFuZWwtaGVhZGluZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gICAgXG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG4gLmhvdmVyLWVmZmVjdHtcbiAgICBib3JkZXItY29sb3I6ICM0QzRCNEI7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0QjtcbiB9XG4gLnN0YXR1cy1wYW5lbC1ib2R5e1xuICAgICAgICBcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6M3B4OyBcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxOyAgXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH0gIFxuIFxuICAgIC5jaGFydEJvcmRlcntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiBcbiAgICAgIFxuICAgICAgfVxuICAgICAgIFxuIFxuIC5wYW5lbC1ib2R5e1xuICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgIHBhZGRpbmc6IDVweDsgIFxuIH0gXG4gLmNoYXJ0LWJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gfVxuIC5jaGFydEJvcmRlcntcbiAgICB3aWR0aDogMTAwJTtcblxuXG59XG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/alarm/alarm.component.html":
/*!********************************************!*\
  !*** ./src/app/alarm/alarm.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-sm-6\">\n  <div class=\"panel-heading\">\n          <i class=\"fa fa-bar-chart-o\"></i>Alarms\n      </div>\n      <div class=\"chart-body\">\n        <div class=\"example-header\" fxLayout=\"row\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </div>\n\n            <div class=\"example-container mat-elevation-z8\">\n\n              <mat-table [dataSource]=\"dataSource\" matSort>\n\n                \n                <ng-container matColumnDef=\"custname\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Site ID\"> abc </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"totalproperty\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Total Property </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Site Name\" > A </mat-cell>\n                </ng-container>\n\n              \n                <ng-container matColumnDef=\"sensorbypass\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Sensor Bypaas </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Site Type\" > 10 </mat-cell>\n                </ng-container>\n\n                 \n                  <ng-container matColumnDef=\"powertheft\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Power Theft </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Site Type\" > 10 </mat-cell>\n                </ng-container>\n                \n                <ng-container matColumnDef=\"internetdown\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Internet Down </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Site Type\" > 10 </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                </mat-row>\n              </mat-table>\n\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n          </div>\n\n          \n        </div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/alarm/alarm.component.ts":
/*!******************************************!*\
  !*** ./src/app/alarm/alarm.component.ts ***!
  \******************************************/
/*! exports provided: AlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmComponent", function() { return AlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AlarmComponent = /** @class */ (function () {
    function AlarmComponent() {
    }
    AlarmComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AlarmComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['custname', 'totalproperty', 'sensorbypass', 'powertheft', 'internetdown'];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AlarmComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AlarmComponent.prototype, "sort", void 0);
    AlarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alarm',
            template: __webpack_require__(/*! ./alarm.component.html */ "./src/app/alarm/alarm.component.html"),
            styles: [__webpack_require__(/*! ./alarm.component.css */ "./src/app/alarm/alarm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlarmComponent);
    return AlarmComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _wh_metering_wh_metering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wh-metering/wh-metering.component */ "./src/app/wh-metering/wh-metering.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/warehouse/warehouse.component.ts");
/* harmony import */ var _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-dashboard/customer-dashboard.component */ "./src/app/customer-dashboard/customer-dashboard.component.ts");
/* harmony import */ var _coming_dash_coming_dash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coming-dash/coming-dash.component */ "./src/app/coming-dash/coming-dash.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./super-admin/super-admin.component */ "./src/app/super-admin/super-admin.component.ts");
/* harmony import */ var _baseline_baseline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./baseline/baseline.component */ "./src/app/baseline/baseline.component.ts");
/* harmony import */ var _fire_pump_alarm_fire_pump_alarm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fire-pump-alarm/fire-pump-alarm.component */ "./src/app/fire-pump-alarm/fire-pump-alarm.component.ts");
/* harmony import */ var _fems_fems_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fems/fems.component */ "./src/app/fems/fems.component.ts");
/* harmony import */ var _load_graph_load_graph_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./load-graph/load-graph.component */ "./src/app/load-graph/load-graph.component.ts");



// import { TestComponent } from './test/test.component';












var routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'superadmin', component: _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__["SuperAdminComponent"] },
    { path: 'comingsoon', component: _coming_dash_coming_dash_component__WEBPACK_IMPORTED_MODULE_5__["ComingDashComponent"] },
    { path: 'customer', component: _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDashboardComponent"] },
    { path: 'warehouse', component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseComponent"] },
    { path: 'whmetering', component: _wh_metering_wh_metering_component__WEBPACK_IMPORTED_MODULE_2__["WhMeteringComponent"] },
    { path: 'baseline', component: _baseline_baseline_component__WEBPACK_IMPORTED_MODULE_11__["BaselineComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: 'firePumpAlarm', component: _fire_pump_alarm_fire_pump_alarm_component__WEBPACK_IMPORTED_MODULE_12__["FirePumpAlarmComponent"] },
    { path: 'fems', component: _fems_fems_component__WEBPACK_IMPORTED_MODULE_13__["FemsComponent"] },
    { path: 'load_graph', component: _load_graph_load_graph_component__WEBPACK_IMPORTED_MODULE_14__["LoadGraphComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"body_wrapper\">\n\n  <div style=\"text-align:center\">\n\n    <div class=\"content_area\">\n      <div class=\"main_content\">\n\n        <router-outlet></router-outlet>\n\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movie-rater-web';
        this.adminDashboard = '';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/modalService */ "./src/app/services/modalService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog-over/dialog-over.component */ "./src/app/dialog-over/dialog-over.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./super-admin/super-admin.component */ "./src/app/super-admin/super-admin.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _coming_dash_coming_dash_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./coming-dash/coming-dash.component */ "./src/app/coming-dash/coming-dash.component.ts");
/* harmony import */ var _output_graph_output_graph_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./output-graph/output-graph.component */ "./src/app/output-graph/output-graph.component.ts");
/* harmony import */ var _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./customer-dashboard/customer-dashboard.component */ "./src/app/customer-dashboard/customer-dashboard.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/warehouse/warehouse.component.ts");
/* harmony import */ var _wh_metering_wh_metering_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./wh-metering/wh-metering.component */ "./src/app/wh-metering/wh-metering.component.ts");
/* harmony import */ var _baseline_baseline_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./baseline/baseline.component */ "./src/app/baseline/baseline.component.ts");
/* harmony import */ var _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dialog-switchdash/dialog-switchdash.component */ "./src/app/dialog-switchdash/dialog-switchdash.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _alarm_alarm_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./alarm/alarm.component */ "./src/app/alarm/alarm.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _fire_pump_alarm_fire_pump_alarm_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./fire-pump-alarm/fire-pump-alarm.component */ "./src/app/fire-pump-alarm/fire-pump-alarm.component.ts");
/* harmony import */ var _fems_fems_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./fems/fems.component */ "./src/app/fems/fems.component.ts");
/* harmony import */ var _add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./add-device-dialog/add-device-dialog.component */ "./src/app/add-device-dialog/add-device-dialog.component.ts");
/* harmony import */ var _fems_dialog_fems_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./fems-dialog/fems-dialog.component */ "./src/app/fems-dialog/fems-dialog.component.ts");
/* harmony import */ var _add_devtype_dialog_add_devtype_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./add-devtype-dialog/add-devtype-dialog.component */ "./src/app/add-devtype-dialog/add-devtype-dialog.component.ts");
/* harmony import */ var _lights_watt_data_lights_watt_data_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./lights-watt-data/lights-watt-data.component */ "./src/app/lights-watt-data/lights-watt-data.component.ts");
/* harmony import */ var _fanswattdata_fanswattdata_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./fanswattdata/fanswattdata.component */ "./src/app/fanswattdata/fanswattdata.component.ts");
/* harmony import */ var _device_details_fems_device_details_fems_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./device-details-fems/device-details-fems.component */ "./src/app/device-details-fems/device-details-fems.component.ts");
/* harmony import */ var _expired_device_details_fems_expired_device_details_fems_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./expired-device-details-fems/expired-device-details-fems.component */ "./src/app/expired-device-details-fems/expired-device-details-fems.component.ts");
/* harmony import */ var _avg_data_avg_data_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./avg-data/avg-data.component */ "./src/app/avg-data/avg-data.component.ts");
/* harmony import */ var _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./excelsheet/excelsheet.component */ "./src/app/excelsheet/excelsheet.component.ts");
/* harmony import */ var _load_graph_load_graph_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./load-graph/load-graph.component */ "./src/app/load-graph/load-graph.component.ts");
/* harmony import */ var _pf_table_pf_table_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pf-table/pf-table.component */ "./src/app/pf-table/pf-table.component.ts");
/* harmony import */ var _load_data_table_load_data_table_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./load-data-table/load-data-table.component */ "./src/app/load-data-table/load-data-table.component.ts");
/* harmony import */ var _custom_date_range_picker_custom_date_range_picker_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./custom-date-range-picker/custom-date-range-picker.component */ "./src/app/custom-date-range-picker/custom-date-range-picker.component.ts");
/* harmony import */ var _dg_fuel_excel_export_dg_fuel_excel_export_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dg-fuel-excel-export/dg-fuel-excel-export.component */ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.ts");
/* harmony import */ var _submetering_submetering_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./submetering/submetering.component */ "./src/app/submetering/submetering.component.ts");



























/* chart library */
//import Highchart in angular





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_16__["DialogOverComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_21__["SuperAdminComponent"],
                _coming_dash_coming_dash_component__WEBPACK_IMPORTED_MODULE_28__["ComingDashComponent"],
                _output_graph_output_graph_component__WEBPACK_IMPORTED_MODULE_29__["OutputGraphComponent"],
                _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["CustomerDashboardComponent"],
                _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_31__["WarehouseComponent"],
                _wh_metering_wh_metering_component__WEBPACK_IMPORTED_MODULE_32__["WhMeteringComponent"],
                _baseline_baseline_component__WEBPACK_IMPORTED_MODULE_33__["BaselineComponent"],
                _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_34__["DialogSwitchdashComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"],
                _alarm_alarm_component__WEBPACK_IMPORTED_MODULE_36__["AlarmComponent"],
                _fire_pump_alarm_fire_pump_alarm_component__WEBPACK_IMPORTED_MODULE_38__["FirePumpAlarmComponent"],
                _fems_fems_component__WEBPACK_IMPORTED_MODULE_39__["FemsComponent"],
                _add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_40__["AddDeviceDialogComponent"],
                _fems_dialog_fems_dialog_component__WEBPACK_IMPORTED_MODULE_41__["FemsDialogComponent"],
                _add_devtype_dialog_add_devtype_dialog_component__WEBPACK_IMPORTED_MODULE_42__["AddDevtypeDialogComponent"],
                _lights_watt_data_lights_watt_data_component__WEBPACK_IMPORTED_MODULE_43__["LightsWattDataComponent"],
                _fanswattdata_fanswattdata_component__WEBPACK_IMPORTED_MODULE_44__["FanswattdataComponent"],
                _device_details_fems_device_details_fems_component__WEBPACK_IMPORTED_MODULE_45__["DeviceDetailsFemsComponent"],
                _expired_device_details_fems_expired_device_details_fems_component__WEBPACK_IMPORTED_MODULE_46__["ExpiredDeviceDetailsFemsComponent"],
                _avg_data_avg_data_component__WEBPACK_IMPORTED_MODULE_47__["AvgDataComponent"],
                _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_48__["ExcelsheetComponent"],
                _load_graph_load_graph_component__WEBPACK_IMPORTED_MODULE_49__["LoadGraphComponent"],
                _pf_table_pf_table_component__WEBPACK_IMPORTED_MODULE_50__["PfTableComponent"],
                _load_data_table_load_data_table_component__WEBPACK_IMPORTED_MODULE_51__["LoadDataTableComponent"],
                _custom_date_range_picker_custom_date_range_picker_component__WEBPACK_IMPORTED_MODULE_52__["CustomDateRangePickerComponent"],
                _dg_fuel_excel_export_dg_fuel_excel_export_component__WEBPACK_IMPORTED_MODULE_53__["DgFuelExcelExportComponent"],
                _submetering_submetering_component__WEBPACK_IMPORTED_MODULE_54__["SubmeteringComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_27__["HighchartsChartModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            ],
            exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
            ],
            entryComponents: [
                _dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_16__["DialogOverComponent"],
                _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_34__["DialogSwitchdashComponent"],
                _fems_dialog_fems_dialog_component__WEBPACK_IMPORTED_MODULE_41__["FemsDialogComponent"],
                _add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_40__["AddDeviceDialogComponent"],
                _add_devtype_dialog_add_devtype_dialog_component__WEBPACK_IMPORTED_MODULE_42__["AddDevtypeDialogComponent"],
                _lights_watt_data_lights_watt_data_component__WEBPACK_IMPORTED_MODULE_43__["LightsWattDataComponent"],
                _fanswattdata_fanswattdata_component__WEBPACK_IMPORTED_MODULE_44__["FanswattdataComponent"],
                _device_details_fems_device_details_fems_component__WEBPACK_IMPORTED_MODULE_45__["DeviceDetailsFemsComponent"],
                _expired_device_details_fems_expired_device_details_fems_component__WEBPACK_IMPORTED_MODULE_46__["ExpiredDeviceDetailsFemsComponent"],
                _avg_data_avg_data_component__WEBPACK_IMPORTED_MODULE_47__["AvgDataComponent"],
                _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_48__["ExcelsheetComponent"],
                _pf_table_pf_table_component__WEBPACK_IMPORTED_MODULE_50__["PfTableComponent"],
                _load_data_table_load_data_table_component__WEBPACK_IMPORTED_MODULE_51__["LoadDataTableComponent"],
                _custom_date_range_picker_custom_date_range_picker_component__WEBPACK_IMPORTED_MODULE_52__["CustomDateRangePickerComponent"],
                _dg_fuel_excel_export_dg_fuel_excel_export_component__WEBPACK_IMPORTED_MODULE_53__["DgFuelExcelExportComponent"]
            ],
            providers: [
                _services_global_service__WEBPACK_IMPORTED_MODULE_14__["GlobalService"],
                _services_modalService__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avg-data/avg-data.component.css":
/*!*************************************************!*\
  !*** ./src/app/avg-data/avg-data.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 15%;\n    font-size: 18px;\n }\n  \n  .mat-raised-button {\n  box-sizing: border-box;\n  position: relative;\n  background: #ea8c17d9;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: 0;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n   margin: 0px; \n   margin-left: 159px;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n  border-radius: 4px;\n  overflow: visible;\n  transform: translate3d(0,0,0)\n}\n  \n  .close{\n  top: 0;\n  right: 0;\n  padding: 10px;\n  line-height: 16px;\n  min-width: auto;\n  color:#E66F00!important;\n \n}\n  \n  .mat-form-field-infix {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 180px;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZnLWRhdGEvYXZnLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0VBQ0M7RUFDQSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtHQUNqQixXQUFXO0dBQ1gsa0JBQWtCO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakI7QUFDRjs7RUFDQztFQUNDLE1BQU07RUFDTixRQUFRO0VBQ1IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCOztBQUV6Qjs7RUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F2Zy1kYXRhL2F2Zy1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIFxuICAjU2F2ZS1kZXZpY2V7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDojRTY2RjAwIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VhOGMxN2Q5O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLWxlZnQ6IDE1OXB4O1xuICBtaW4td2lkdGg6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApXG59ICBcbiAuY2xvc2V7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IGF1dG87XG4gIGNvbG9yOiNFNjZGMDAhaW1wb3J0YW50O1xuIFxufVxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/avg-data/avg-data.component.html":
/*!**************************************************!*\
  !*** ./src/app/avg-data/avg-data.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"close\"  (click)=\"onNoClick()\">X</button>\n<h1 mat-dialog-title id=\"addDevDialoge\">Avg Data</h1>\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"avgDataForm\">\n  <div class=\"example-container\">\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Start Date</mat-label>\n      <input matInput formControlName=\"startDate\" min=\"2022-11-21\" placeholder=\"Ex. 20-02-2022\" type=\"date\">\n    </mat-form-field> \n    <mat-form-field  appearance=\"fill\">\n      <mat-label>End Date</mat-label>\n      <input matInput formControlName=\"endDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n    </mat-form-field>\n    \n    <br>\n  <button mat-raised-button type=\"submit\" id=\"Save-device\" >Submit</button>\n  <br>\n  <br>\n  <mat-form-field  appearance=\"fill\">\n    <mat-label>Total Value</mat-label>\n    <input matInput formControlName=\"totalvalue\" [(ngModel)]=\"totalDatavalue\" readonly>\n  </mat-form-field>\n  <mat-form-field  appearance=\"fill\">\n    <mat-label>Avg Value</mat-label>\n    <input matInput formControlName=\"avgvalue\" [(ngModel)]=\"avgDatavalue\" readonly>\n  </mat-form-field>\n  <mat-form-field  appearance=\"fill\">\n    <mat-label>No. of Days</mat-label>\n    <input matInput formControlName=\"noOfDays\" [(ngModel)]=\"noofDays\" readonly>\n  </mat-form-field>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/avg-data/avg-data.component.ts":
/*!************************************************!*\
  !*** ./src/app/avg-data/avg-data.component.ts ***!
  \************************************************/
/*! exports provided: AvgDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgDataComponent", function() { return AvgDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var AvgDataComponent = /** @class */ (function () {
    function AvgDataComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.siteId = localStorage.getItem('siteId');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.avgDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            avgvalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            totalvalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    AvgDataComponent.prototype.ngOnInit = function () {
        console.log("#################### I am in ngOnInit fuction: ", this.data);
        if (this.data !== null) {
            this.avgDataForm.setValue({
                startDate: this.data.from_date ? this.data.from_date : "",
                endDate: this.data.till_date ? this.data.till_date : "",
                avgvalue: this.data.avgValue ? this.data.avgValue : "",
                energyConsumed: this.data.energyConsumed ? this.data.energyConsumed : ""
            });
        }
    };
    AvgDataComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = { "siteId": this.siteId, "from_date": this.avgDataForm.value.startDate, "till_date": this.avgDataForm.value.endDate, };
        console.log("function called", this.avgDataForm.value);
        this.dataService.avgDataValue(data).subscribe(function (response) {
            console.log("response : ", response);
            _this.avgDatavalue = response['value'];
            _this.totalDatavalue = response['energyConsumed'];
            _this.noofDays = response['totalDays'];
        });
    };
    AvgDataComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AvgDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avg-data',
            template: __webpack_require__(/*! ./avg-data.component.html */ "./src/app/avg-data/avg-data.component.html"),
            styles: [__webpack_require__(/*! ./avg-data.component.css */ "./src/app/avg-data/avg-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AvgDataComponent);
    return AvgDataComponent;
}());



/***/ }),

/***/ "./src/app/baseline/baseline.component.css":
/*!*************************************************!*\
  !*** ./src/app/baseline/baseline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* Energy status graph start */\n .heading-panel{\n    background:#ff7a01;\n    padding:5px;\n    text-align: left;\n    font-size: 16px;\n    border-radius: 3px;\n    margin-top: 12px;\n    }\n .chart-body{\n    border:1px solid #ff7a01;\n    padding: 10px;\n    position: relative;\n }\n /* Energy status graph end */\n .chngpwd-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding-top: 15px;\n    margin-top: 55px;\n    \n }\n .card-header{\n    color: black;\n    text-align: left;\n    font-size: 18px;\n }\n .oldp{\n    margin-top: 10px;\n }\n .chpwd{\n    text-align: left;\n }\n .btn-primary {\n    background: #E66F00;\n    color: #ffffff;\n }\n .btn{\n    border: #E66F00;\n     \n }\n .chngpwd{\n    margin-top: 125px;\n }\n .charheader2{\n    margin: 5px;\n    border-top: 1px solid orangered;\n    background: orangered;\n    padding: 5px;\n    border-radius: 5px;\n \n }\n .panel-heading{\n   position: relative;\n   background-color: #ff7a01;\n   border: 1px;\n   border-radius: 3px;\n   text-align: left;\n   padding: 5px;\n   font-size: 16px;\n}\n .mat-raised-button {\n   background-color: chocolate!important;\n   \n}\n .mat-icon-material-icons-mat-icon-no-color{\n   color: cornsilk;\n}\n .md-raised.md-primary.md-button.md-link-ripple{\n   background: #E66F00; \n   color: #ffffff;\n}\n /* Breadcrumbs from http://bootsnipp.com/snippets/featured/triangle-breadcrumbs-arrows */\n #breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n *  breadcrump */\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n .btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n .btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n .btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n .btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n /** Default button **/\n .btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n /* The responsive part */\n .btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;    \n  }\n .btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n /* === For phones =================================== */\n @media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n /* === For tablets ================================== */\n @media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n  }\n /* === For desktops ================================== */\n @media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n #page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n   \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZWxpbmUvYmFzZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyw4QkFBOEI7Q0FDOUI7SUFDRyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtDQUVIO0lBQ0csd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7Q0FJQSw0QkFBNEI7Q0FJNUI7SUFDRyxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0NBRW5CO0NBR0E7SUFDRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7Q0FDQTtJQUNHLGdCQUFnQjtDQUNuQjtDQUNBO0lBQ0csZ0JBQWdCO0NBQ25CO0NBQ0E7SUFDRyxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjtDQUNBO0lBQ0csZUFBZTs7Q0FFbEI7Q0FDQTtJQUNHLGlCQUFpQjtDQUNwQjtDQUdBO0lBQ0csV0FBVztJQUNYLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjs7Q0FFckI7Q0FDQTtHQUNFLGtCQUFrQjtHQUNsQix5QkFBeUI7R0FDekIsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsWUFBWTtHQUNaLGVBQWU7QUFDbEI7Q0FDQTtHQUNHLHFDQUFxQzs7QUFFeEM7Q0FDQTtHQUNHLGVBQWU7QUFDbEI7Q0FDQTtHQUNHLG1CQUFtQjtHQUNuQixjQUFjO0FBQ2pCO0NBR0Esd0ZBQXdGO0NBRXhGO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixTQUFTO0dBQ1QsV0FBVztHQUNYLG1CQUFtQjtBQUN0QjtDQUdBOzs7SUFHSSxZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0VBQ2I7Q0FDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7RUFDWjtDQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7Q0FDQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0NBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtDQUVBLHFCQUFxQjtDQUNyQjtJQUNFLCtCQUErQjtFQUNqQztDQUdBLHdCQUF3QjtDQUV4QjtNQUNJLGlDQUFpQztNQUNqQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjtDQUVBO0lBQ0UsWUFBWTtFQUNkO0NBRUEsdURBQXVEO0NBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxlQUFlO01BQ25CO0VBQ0o7Q0FFQSx1REFBdUQ7Q0FDdkQ7TUFDSTtVQUNJLGFBQWE7TUFDakI7TUFDQTtVQUNJLGdCQUFnQjtNQUNwQjtFQUNKO0NBRUEsd0RBQXdEO0NBQ3hEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjtDQUNBO0dBQ0MsV0FBVztHQUNYLDhCQUE4QjtHQUM5QixtQkFBbUI7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvYmFzZWxpbmUvYmFzZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIHN0YXJ0ICovXG4gLmhlYWRpbmctcGFuZWx7XG4gICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiBcbiAuY2hhcnQtYm9keXtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gfVxuICAgXG4gXG4gXG4gLyogRW5lcmd5IHN0YXR1cyBncmFwaCBlbmQgKi9cbiBcbiBcbiBcbiAuY2huZ3B3ZC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDU1cHg7XG4gICAgXG4gfVxuIFxuIFxuIC5jYXJkLWhlYWRlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gfVxuIC5vbGRwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gfVxuIC5jaHB3ZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuIH1cbiAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICNFNjZGMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gfVxuIC5idG57XG4gICAgYm9yZGVyOiAjRTY2RjAwO1xuICAgICBcbiB9XG4gLmNobmdwd2R7XG4gICAgbWFyZ2luLXRvcDogMTI1cHg7XG4gfVxuIFxuIFxuIC5jaGFyaGVhZGVyMntcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgb3JhbmdlcmVkO1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIFxuIH1cbiAucGFuZWwtaGVhZGluZ3tcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gICBib3JkZXI6IDFweDtcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiA1cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlIWltcG9ydGFudDtcbiAgIFxufVxuLm1hdC1pY29uLW1hdGVyaWFsLWljb25zLW1hdC1pY29uLW5vLWNvbG9ye1xuICAgY29sb3I6IGNvcm5zaWxrO1xufVxuLm1kLXJhaXNlZC5tZC1wcmltYXJ5Lm1kLWJ1dHRvbi5tZC1saW5rLXJpcHBsZXtcbiAgIGJhY2tncm91bmQ6ICNFNjZGMDA7IFxuICAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLyogQnJlYWRjcnVtYnMgZnJvbSBodHRwOi8vYm9vdHNuaXBwLmNvbS9zbmlwcGV0cy9mZWF0dXJlZC90cmlhbmdsZS1icmVhZGNydW1icy1hcnJvd3MgKi9cblxuI2JyZWFkY3J1bWJ7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB6LWluZGV4OiA5OTk7XG4gICB0b3A6IDUwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG59XG5cblxuKiAgYnJlYWRjcnVtcCAqL1xuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMzMDMwMzA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbGVmdDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICB9XG4gIFxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0biB7XG4gICAgcGFkZGluZzo2cHggMTJweCA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nOjZweCA2cHggNnB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nOjZweCAxOHB4IDZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qKiBEZWZhdWx0IGJ1dHRvbiAqKi9cbiAgLmJ0bi1icmVhZGNydW1iIC5idG4uYnRuLWRlZmF1bHQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgfVxuICBcbiAgXG4gIC8qIFRoZSByZXNwb25zaXZlIHBhcnQgKi9cbiAgXG4gIC5idG4tYnJlYWRjcnVtYiA+ICogPiBkaXYge1xuICAgICAgLyogV2l0aCBsZXNzOiAudGV4dC1vdmVyZmxvdygpOyAqL1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICAgXG4gIH1cbiAgXG4gIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWNoaWxkKG4rMikge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBcbiAgLyogPT09IEZvciBwaG9uZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzIpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfSBcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIC8qID09PSBGb3IgdGFibGV0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNCkge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIC8qID09PSBGb3IgZGVza3RvcHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNikge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICB9XG4gIH1cbiAgI3BhZ2Utd3JhcHBlciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDEzMHB4IDI1cHggMTMwcHggMjVweDtcbiAgIGJhY2tncm91bmQ6ICMwRjBGMEY7XG4gICBcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/baseline/baseline.component.html":
/*!**************************************************!*\
  !*** ./src/app/baseline/baseline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" >\n    <div id=\"bc2\" style=\"left: 1% !important\" class=\"btn-group btn-breadcrumb\">\n          <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n          <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\"><div >Customer detail</div></a>\n        <a (click)=\"sitePage()\" *ngIf=\"saving_site_dash\" class=\"btn btn-default\">Site Details</a>\n       <button *ngIf=\"baseline_dash\" class=\"btn btn-default\">Baseline</button>\n\n                                            \n    </div>\n</div>\n\n<div class=\"container-fluid\">\n  <br>\n  <br>\n  <br>\n  <br>\n    <!--chart start-->\n    <div class=\"row\">\n        <div class=\"col-sm-12 \">\n            <div class=\"heading-panel\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <i class=\"fa fa-bar-chart-o\"></i> Baseline Breakup History \n                    </div>\n                </div>\n            </div>\n            <div class=\"chart-body\">\n                <highcharts-chart\n                    [Highcharts]=\"Highcharts\"\n                    [constructorType]=\"chartConstructor\"\n                    [options]=\"barChartOptions\"\n                    [callbackFunction]=\"chartCallback\"\n            \n                    [(update)]=\"updateFlag\"\n                    [oneToOne]=\"oneToOneFlag\"\n            \n                    style=\"width: 100%; height: 100%; display: block;\"\n                ></highcharts-chart>\n                <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\"><button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\" style=\"float: right;\" (click)=\"changeGraphStacking()\">\n                            <span class =\"ng-scope\">Change Graph</span>\n                        </button>\n                    </div>\n                    </div>\n            </div>\n        </div>\n    </div>\n    <br>\n    <br>\n</div>\n    <div class=\"row\" *ngIf=\"custBaseline\">\n        <div class=\"col-sm-12 \">\n            <div class=\"row\"></div>\n                <div class=\"panel-heading\">\n                    <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <i class=\"fa fa-bar-chart-o\"></i> Set Baseline\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <input matInput [max] =\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker2\" [formControl]=\"date\" [value]=\"date.value\" (dateChange)=\"baselineData()\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker2></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n        \n                    </div>\n                    <div class=\"chart-body\">\n                        <div class=\"example-header\" fxLayout=\"row\">                   \n                            </div> \n\n                            <div class=\"example-container mat-elevation-z8\">\n\n                            <mat-table [dataSource]=\"dataSource\" matSort>\n\n                                <!-- ID Column -->\n                                <ng-container matColumnDef=\"serialNo\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 10%;\"> Serial Number </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\" data-label=\"id\" style=\"max-width: 10%;\"> {{row.serialNo}} </mat-cell>\n                                </ng-container>\n\n                                <!-- Site Name Column -->\n                                <ng-container matColumnDef=\"AisleGroup\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 15%;\"> Aisle Group </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\" data-label=\"progress\" style=\"max-width: 15%;\"> {{row.AisleGroup}} </mat-cell>\n                                </ng-container>\n\n                                <!-- Site Type -->\n                                <ng-container matColumnDef=\"TotalLights\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 10%;\">Total Lights </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\" data-label=\"progress\" style=\"max-width: 10%;\"> {{row.TotalLights}} </mat-cell>\n                                </ng-container>\n                                <!-- Color Column -->\n\n                                <ng-container matColumnDef=\"ExpectedConsump\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> Expected Consumption </mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"color\"> {{row.ExpectedConsump}} </mat-cell>\n                                </ng-container> \n                                <ng-container matColumnDef=\"CurrentConsump\">\n                                <mat-header-cell *matHeaderCellDef>Actual Consumption </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\">\n                                    <mat-form-field floatLabel=\"name\">\n                                    <input matInput placeholder=\"Actual Consumption\" [value]=\"row.CurrentConsump\" [(ngModel)]=\"row.CurrentConsump\">\n                                    </mat-form-field>\n                                </mat-cell>\n                                </ng-container>\n\n                                <ng-container matColumnDef=\"actions\">\n                                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\">\n                                        <button mat-raised-button color=\"#ff7a01\" (click)=\"saveBaselineData(row)\">Set Baseline </button>\n                                    </mat-cell>\n                                </ng-container>\n                                \n                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" >\n                                </mat-row>\n                            </mat-table>\n                            <mat-paginator [pageSizeOptions]=\"[2, 4, 5, 50, 100]\" ></mat-paginator>              \n                            </div>\n                        </div>\n                        </div>\n    </div><br>\n    <br>\n    <br>\n    <br>\n    <br>\n              "

/***/ }),

/***/ "./src/app/baseline/baseline.component.ts":
/*!************************************************!*\
  !*** ./src/app/baseline/baseline.component.ts ***!
  \************************************************/
/*! exports provided: BaselineComponent, DialogBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineComponent", function() { return BaselineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBox", function() { return DialogBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog-switchdash/dialog-switchdash.component */ "./src/app/dialog-switchdash/dialog-switchdash.component.ts");











var BaselineComponent = /** @class */ (function () {
    function BaselineComponent(UserService, DataService, dialog) {
        this.UserService = UserService;
        this.DataService = DataService;
        this.dialog = dialog;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.updateFlag = false;
        this.selected_graph = '0';
        this.selected_task = '0';
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.siteId = localStorage.getItem('siteId');
        this.obj = JSON.parse(localStorage.getItem("account"));
        this.usertype = this.obj['UserType'];
        this.site_dash = false;
        this.customer_home = false;
        this.customer_name = false;
        this.baseline_dash = false;
        this.Admindata = false;
        this.saving_site_dash = false;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.showBaseline = true;
        this.showDialog = false;
        this.whichGraph = 1;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.custBaseline = false;
        this.displayedColumns = ['serialNo', 'AisleGroup', 'TotalLights', 'ExpectedConsump', 'CurrentConsump', 'actions'];
    }
    BaselineComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('baseline component');
        // this.getConsumptionData();
        this.baselineData();
        this.getBaselineHistory();
        // i
        if (this.user_type == '1') {
            this.customer_home = false;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = true;
            this.saving_site_dash = true;
            this.baseline_dash = true;
            this.custBaseline = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
            this.baseline_dash = true;
            this.custBaseline = false;
        }
        else {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
            this.baseline_dash = false;
            this.custBaseline = false;
        }
        this.DataService.currentMessage.subscribe(function (response) { return _this.dashboardType = response; });
        console.log("Dashboard type in baseline typescript file", this.dashboardType);
    };
    BaselineComponent.prototype.saveConsumption = function (row) {
        console.log(row);
        console.log('function clicked ');
    };
    BaselineComponent.prototype.save = function (row) {
        console.log("save clicked");
        console.log('consumption :', row);
    };
    BaselineComponent.prototype.openSiteDashboard = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        this.dialog.open(_dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_10__["DialogSwitchdashComponent"], dialogConfig);
    };
    //Here is function for daily consumption data.
    BaselineComponent.prototype.getConsumptionData = function () {
        var _this = this;
        var todayDate = new Date();
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        var fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        console.log("From Date is : " + fromDate);
        console.log("From Date is : " + tillDate);
        var data1 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
        this.UserService.energySavingMonthlyData(data1).subscribe(function (response) {
            var seriesData = [];
            var seriesData1 = [];
            var seriesData2 = [];
            for (var k = 0; k < response['Data'].length; k++) {
                var consumption = void 0;
                consumption = { "name": response['Data'][k]['leg'], 'y': response['Data'][k]['consumption'] };
                var dataSaving = { "name": response['Data'][k]['leg'], 'y': response['Data'][k]['energySaved'] };
                var dataBaseline = { "name": response['Data'][k]['leg'], 'type': 'spline', 'y': response['Data'][k]['baseline'] };
                var data = [{ "data": [consumption, dataSaving, dataBaseline] }];
                seriesData2.push(data);
            }
            console.log("graph data", _this.barChartOptions);
        });
    };
    BaselineComponent.prototype.columnGraphFilterChanged = function () {
        var _this = this;
        var mode = this.selected_task;
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        var graphType = this.selected_graph;
        var todayDate = new Date();
        var fromDate;
        var categories = [];
        var series = [];
        var selectedYear = this.date.value.getFullYear();
        var selectedMonth = this.date.value.getMonth();
        var selectedMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.date.value, 'yyyy/MM', 'en');
        var currentMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy/MM', 'en');
        if (selectedMonthYear == currentMonthYear) {
            // if the daily filter is for current month only
            // then show the last 30 days data
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        }
        else {
            // if the current month is not same as the selected month
            // then show the data for that complete month
            fromDate = selectedMonthYear + "/01";
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(fromDate, 'yyyy/MM/dd', 'en');
            var day = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            tillDate = selectedMonthYear + "/" + day;
        }
        /**
         *  Call the API on the basis of Graph Type
         */
        if (graphType == '0') {
            // Energy Consumption Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
                this.DataService.getGraphData(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.updateFlag = true;
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                    // this.updateFlag = true;
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                var data = { 'site_id': this.siteId, 'date': tillDate };
                this.DataService.getSiteHourlyConsumptionData(data).subscribe(function (response) {
                    categories = response['Hours'];
                    series = response['Data'];
                    _this.updateFlag = true;
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                }, function (error) { });
            }
        }
        else {
            // Percentage Run Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
                this.DataService.getDailyPowerSrcDistData(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                    _this.barChartOptions.yAxis.tittle = "abc";
                    _this.updateFlag = true;
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                var data = { 'site_id': this.siteId, 'date': tillDate };
                this.DataService.getHourlyPowerSrcDistData(data).subscribe(function (response) {
                    categories = response['Hours'];
                    series = response['Data'];
                    _this.updateFlag = true;
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                    // this.updateFlag = true;
                }, function (error) { });
            }
        }
    };
    BaselineComponent.prototype.baselineData = function () {
        var _this = this;
        var data = { 'site_id': this.siteId, 'date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en') };
        this.DataService.fetchBaselineData(data).subscribe(function (response) {
            var baselinedata = [];
            for (var i = 0; i < response['data'].length; i++) {
                var data_1 = response['data'][i];
                baselinedata.push({
                    'serialNo': i + 1,
                    'AisleGroup': data_1['aisle_name'],
                    'TotalLights': data_1['total_lights'],
                    'ExpectedConsump': data_1['expected_consumption'],
                    'CurrentConsump': data_1['current_consumption']
                });
            }
            console.log("baseline data is here...", baselinedata);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](baselinedata);
            _this.dataSource.paginator = _this.paginator; //mandeep
            _this.dataSource.sort = _this.sort;
        });
    };
    BaselineComponent.prototype.getBaselineHistory = function () {
        var _this = this;
        var data = { 'site_id': this.siteId, "userType": this.usertype };
        console.log('Here usertype is', data);
        this.UserService.getBaselineHistory(data).subscribe(function (response) {
            console.log('This is data of baseline history', response);
            _this.barChartOptions = {
                colorCount: '12',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                credits: {
                    enabled: false,
                },
                chart: {
                    backgroundColor: '#222222',
                    type: 'column'
                },
                title: {
                    text: _this.graphTitle,
                    style: {
                        color: 'white',
                    },
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['Dates']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        style: { color: 'white', },
                        text: 'Number of units (kWh)'
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    },
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: response["Data"]
            };
        });
        console.log("baseline history bar chart data", this.barChartOptions);
    };
    BaselineComponent.prototype.saveBaselineData = function (row) {
        var data = { "siteId": this.siteId, "legId": row['AisleGroup'], "baselineValue": row["CurrentConsump"], "date": Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en') };
        console.log("saving baseline data", row);
        this.DataService.saveBaselineData(data).subscribe(function (response) {
            console.log("baseline saved successfully");
        });
        this.DataService.success('Baseline saved successfully !');
    };
    BaselineComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        localStorage.removeItem('whouser');
        localStorage.removeItem('wh_metering');
        localStorage.removeItem('energy_saving');
        location.reload();
    };
    BaselineComponent.prototype.customerPage = function () {
        localStorage.removeItem('whouser');
        localStorage.removeItem('wh_metering');
        localStorage.removeItem('energy_saving');
        location.reload();
    };
    BaselineComponent.prototype.sitePage = function () {
        localStorage.removeItem('baseline');
        localStorage.setItem('energy_saving', 'true');
        this.DataService.changeMessage("energy_saving");
        localStorage.setItem('siteId', this.siteId);
    };
    BaselineComponent.prototype.changeGraphStacking = function () {
        this.whichGraph ^= 0x1;
        if (this.whichGraph == 0) {
            this.barChartOptions.plotOptions.column.stacking = '';
            this.updateFlag = true;
            console.log('Inside normal stacking false');
        }
        else {
            this.barChartOptions.plotOptions.column.stacking = 'normal';
            this.updateFlag = true;
            console.log('Inside normal stacking True');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BaselineComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BaselineComponent.prototype, "sort", void 0);
    BaselineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-baseline',
            template: __webpack_require__(/*! ./baseline.component.html */ "./src/app/baseline/baseline.component.html"),
            styles: [__webpack_require__(/*! ./baseline.component.css */ "./src/app/baseline/baseline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], BaselineComponent);
    return BaselineComponent;
}());

var ELEMENT_DATA = [
    { serialNo: '1', AisleGroup: 'aisle 1', TotalLights: '60', wattage1Light: '20W', ExpectedConsump: '288(KWH)', CurrentConsump: '230' },
    { serialNo: '2', AisleGroup: 'aisle 2', TotalLights: '60', wattage1Light: '20W', ExpectedConsump: '288(KWH)', CurrentConsump: '230' },
    { serialNo: '3', AisleGroup: 'aisle 3', TotalLights: '60', wattage1Light: '20W', ExpectedConsump: '288(KWH)', CurrentConsump: '230' },
    { serialNo: '4', AisleGroup: 'aisle 4', TotalLights: '60', wattage1Light: '20W', ExpectedConsump: '288(KWH)', CurrentConsump: '230' },
    { serialNo: '5', AisleGroup: 'aisle 5', TotalLights: '60', wattage1Light: '20W', ExpectedConsump: '288(KWH)', CurrentConsump: '230' }
];
var DialogBox = /** @class */ (function () {
    function DialogBox() {
    }
    return DialogBox;
}());



/***/ }),

/***/ "./src/app/coming-dash/coming-dash.component.css":
/*!*******************************************************!*\
  !*** ./src/app/coming-dash/coming-dash.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgimg {\n    background-image: url('/assets/image/coming_soon.png');\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    color: white;\n    font-family: \"Courier New\", Courier, monospace;\n    font-size: 25px;\n  }\n  h5{\n      color: #E66F00;\n  }\n  footer {\n    position: absolute;\n    bottom: 0;\n    right: 180px;\n  }\n  .example-card {\n    max-width: 400px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nLWRhc2gvY29taW5nLWRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNEQUFzRDtJQUN0RCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxlQUFlO0VBQ2pCO0VBQ0E7TUFDSSxjQUFjO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29taW5nLWRhc2gvY29taW5nLWRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlL2NvbWluZ19zb29uLnBuZycpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgaDV7XG4gICAgICBjb2xvcjogI0U2NkYwMDtcbiAgfVxuICBmb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDE4MHB4O1xuICB9XG4gIC5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/coming-dash/coming-dash.component.html":
/*!********************************************************!*\
  !*** ./src/app/coming-dash/coming-dash.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h5>Warehouse Dashboard</h5>\n</header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Mat Card Title</mat-card-title>\n          </mat-card-header>\n          \n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n              bred for hunting.\n            </p>\n          </mat-card-content>\n          <mat-card-footer>Date</mat-card-footer>\n        </mat-card>\n    </div>\n  </div>\n</div>\n\n<footer>\n    <a href=\"http://www.aviconn.in/\" style= \"color: #E66F00\">www.aviconn.in</a>\n</footer>"

/***/ }),

/***/ "./src/app/coming-dash/coming-dash.component.ts":
/*!******************************************************!*\
  !*** ./src/app/coming-dash/coming-dash.component.ts ***!
  \******************************************************/
/*! exports provided: ComingDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingDashComponent", function() { return ComingDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComingDashComponent = /** @class */ (function () {
    function ComingDashComponent() {
    }
    ComingDashComponent.prototype.ngOnInit = function () {
    };
    ComingDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-dash',
            template: __webpack_require__(/*! ./coming-dash.component.html */ "./src/app/coming-dash/coming-dash.component.html"),
            styles: [__webpack_require__(/*! ./coming-dash.component.css */ "./src/app/coming-dash/coming-dash.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComingDashComponent);
    return ComingDashComponent;
}());



/***/ }),

/***/ "./src/app/custom-date-range-picker/custom-date-range-picker.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/custom-date-range-picker/custom-date-range-picker.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 7%;\n    font-size: 12px;\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    padding: 5px 19px;\n }\n  \n  .abc{\n  color:white\n }\n  \n  p {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n  \n  form button {\n  position: relative;\n  width: 71px;\n  margin-top: 3px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWRhdGUtcmFuZ2UtcGlja2VyL2N1c3RvbS1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7RUFDQTtFQUNDO0NBQ0Q7O0VBQ0E7RUFDQyxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLGtEQUFrRDtBQUNwRCIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1kYXRlLXJhbmdlLXBpY2tlci9jdXN0b20tZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gICNTYXZlLWRldmljZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiNFNjZGMDAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDE5cHg7XG4gfVxuIC5hYmN7XG4gIGNvbG9yOndoaXRlXG4gfVxuIHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbn1cblxuZm9ybSBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-date-range-picker/custom-date-range-picker.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/custom-date-range-picker/custom-date-range-picker.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">  \n  <h1 mat-dialog-title style=\"color: rgb(247, 148, 1);\">Select Custom Range</h1>\n  <hr style=\"border: 1px solid rgb(247, 148, 1);;\">\n  <form  (ngSubmit)= \"onSubmit()\" [formGroup]=\"customDateRange\">\n    <div class=\"abc\" mat-dialog-content>\n      <mat-form-field appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\" >Start Date</mat-label>\n        <input matInput formControlName=\"startDate\" min=\"2022-11-21\" placeholder=\"Ex. 20-02-2022\" type=\"date\">\n      </mat-form-field> \n    </div>\n\n    <div class=\"abc\" mat-dialog-content>\n      <mat-form-field  appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\">End Date</mat-label>\n        <input matInput formControlName=\"endDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n      </mat-form-field>\n    </div>\n  \n    <div mat-dialog-actions>\n      <button id=\"Save-device\"  type=\"Submit\">Submit</button>\n      <button  id=\"Save-device\"  (click)=\"onNoClick()\">Cancel</button>\n      \n    </div>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/custom-date-range-picker/custom-date-range-picker.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/custom-date-range-picker/custom-date-range-picker.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomDateRangePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateRangePickerComponent", function() { return CustomDateRangePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var CustomDateRangePickerComponent = /** @class */ (function () {
    function CustomDateRangePickerComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.siteId = localStorage.getItem('siteId');
        this.customDateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    CustomDateRangePickerComponent.prototype.ngOnInit = function () {
    };
    CustomDateRangePickerComponent.prototype.onSubmit = function () {
        var reqData = [{ "from_date": this.customDateRange.value.startDate, "end_date": this.customDateRange.value.endDate }];
        this.dialogRef.close(reqData);
    };
    CustomDateRangePickerComponent.prototype.onNoClick = function () {
        this.dialogRef.close([]);
    };
    CustomDateRangePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-date-range-picker',
            template: __webpack_require__(/*! ./custom-date-range-picker.component.html */ "./src/app/custom-date-range-picker/custom-date-range-picker.component.html"),
            styles: [__webpack_require__(/*! ./custom-date-range-picker.component.css */ "./src/app/custom-date-range-picker/custom-date-range-picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], CustomDateRangePickerComponent);
    return CustomDateRangePickerComponent;
}());



/***/ }),

/***/ "./src/app/customer-dashboard/customer-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customer-dashboard/customer-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_trakcer{\n\n   margin-top: 10px;\n   margin-left:10px;\n   margin-right: 5px;\n   font-size: 18px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n   flex: 1;\n   display: flex;\n   align-items: center;\n   overflow: hidden;\n   word-wrap: break-word;\n   min-height: inherit;\n   padding:4px !important;\n   justify-content: center;\n   /* padding: 10px; */\n}\n\n/* mat-header-cell, mat-cell {\n   justify-content: center;\n } */\n\n.mat-table[_ngcontent-c10] .mat-cell[_ngcontent-c10]:first-child {\n   margin-top: 0%;\n}\n\n.container-fluid {\n   background: black;\n}\n\nhr {\n    width: 95%;\n    height: 1px;\n    margin-left: 10px;\n    margin-top: 0px;\n    background-color:#666;\n\n   }\n\n.mat-option.mat-selected:not(.mat-option-disabled) {\n      color: #fff !important;\n  }\n\n/* Snapshot row start */\n\n.circle-title2{\n    margin-bottom: 15px;\n    text-align: center;\n\n\n     }\n\n.circle-title-heading{\n      position:relative;\n      height: 80px;\n      width: 80px;\n      margin: 0 auto -40px;\n      border-radius: 100%;\n      transition: all ease-in-out .3s;\n      background:#ff7a01;\n      color: #fff;\n    }\n\n.circle-title-heading .fa{\n       line-height: 80px;\n    }\n\n.circle-title-heading .fa.icon{\n      font-size: 4em;\n      padding-top: 8px;\n   }\n\n.box{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n\n   }\n\n.box2{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n      height: 140px;\n      margin-bottom: 50px;\n   }\n\n.box:hover{\n      border-color: #4C4B4B;\n      background-color: #4C4B4B;\n   }\n\n.box-heading{\n        text-transform: uppercase;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n   }\n\n.text-faded{\n      color:rgba(255,255,255,0.7);\n   }\n\n.box-number{\n      padding:5px 0 15px;\n      font-size: 26px;\n      font-weight: 700;\n      line-height: 1;\n   }\n\n.footer{\n      display: block;\n      padding: 5px;\n      color:rgba(255,255,255,0.5);\n      transition: all ease-in-out .3s;\n   }\n\n.footer:hover{\n      text-decoration: none;\n      color:rgba(255,255,255,0.5);\n      background-color: rgba(0,0,0,0.2);\n   }\n\n#img-ctn{\n      padding-top: 14px;\n   }\n\n/* Snapshot row end */\n\n/* status and energy power status row Starts */\n\n.panel-heading{\n   position: relative;\n\n   background-color: #ff7a01;\n\n   border: 1px;\n   border-radius: 3px;\n   text-align: left;\n   padding: 5px;\n   font-size: 16px;\n}\n\n.hover-effect{\n   border-color: #4C4B4B;\n      background-color: #4C4B4B;\n}\n\n.status-panel-body{\n\n       width:100%;\n       background-color:black;\n       position:relative;\n       border-radius:3px;\n       border:1px solid #ff7a01;\n       padding: 10px;\n       }\n\n.chartBorder{\n         width: 100%;\n\n\n     }\n\n/* status and energy power status row End */\n\n/* Customer detail table start */\n\n.panel-body{\n      width:100%;\n      border:1px solid #ff7a01;\n      padding: 5px;\n}\n\nmat-form-field{\n\n   font-size: 11px;\n   width: 100%;\n}\n\ntable {\n   width: 100%;\n   text-align:left;\n   border-spacing: 0;\n   border-collapse: collapse;\n }\n\n.mat-header-cell{\n   background-color: black;\n   padding: 8px;\n   font-size: 15px;\n}\n\n.mat-cell {\n   font-size: 12px;\n   border-right: 1px solid #222;\n}\n\n.headerRow{\n   background: red;\n   padding: 8px;\n   text-align: center;\n   font-size: 16px;\n}\n\n.mat-paginator{\n   background: #000000;\n}\n\nth {\n   background-color: #000000;\n   padding: 8px;\n   text-align: center;\n}\n\ntd{\n\n   padding:8px;\n}\n\n.mat-row:nth-child(even){\n   background-color: #696969;\n}\n\n.mat-row:nth-child(odd){\n   background-color: #3F3F3F;\n}\n\n.mat-table .mat-cell:last-child{\n   border-bottom: 0;\n}\n\n/*.mat-table .mat-cell:first-child{\n  margin-top: 2%;\n}*/\n\n.mat-header-row{\n   display: flex;\n}\n\n/* Customer detail table end */\n\n/* Energy status graph start */\n\n.heading-panel{\n   background:#ff7a01;\n   padding:5px;\n   text-align: left;\n   font-size: 16px;\n   border-radius: 3px;\n   margin-top: 12px;\n   }\n\n.chart-body{\n   background-color: #222222;\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n}\n\n.chart-body2{\nbackground-color: #222;\nborder: 1px solid #ff7a01;\npadding: 10px;\nposition: relative;\nheight: 277px;\n\n}\n\n.chart-body3{\n   background-color: #222222;\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n   height: 220px;\n /*  width: 325px;\n*/}\n\n/* Energy status graph end */\n\n.chngpwd-body{\n   width:100%;\n   border:1px solid #ff7a01;\n   padding-top: 15px;\n   margin-top: 55px;\n\n}\n\n.card-header{\n   color: black;\n   text-align: left;\n   font-size: 18px;\n}\n\n.oldp{\n   margin-top: 10px;\n}\n\n.chpwd{\n   text-align: left;\n}\n\n.btn-primary {\n   background: #E66F00;\n   color: #ffffff;\n}\n\n.btn{\n   border: #E66F00;\n\n}\n\n.chngpwd{\n   margin-top: 125px;\n}\n\n.charheader2{\n   margin: 5px;\n   border-top: 1px solid orangered;\n   background: orangered;\n   padding: 5px;\n   border-radius: 5px;\n\n}\n\n.highchartdemo{\n   height: 800px;\n   width: 200px;\n}\n\nbody {\n  font-family: 'Covered By Your Grace', cursive;\n  line-height: 1.25;\n\n}\n\n.ng-tns-c13-2 :focus {\n   color: #ff7a01;\n}\n\n@media screen and (max-width: 960px) {\n  .mat-table {\n    border: 0;\n    vertical-align: middle\n  }\n\n  .mat-table caption {\n    font-size: 1em;\n  }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n  }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height:30px;\n    margin-bottom: 4%;\n    padding: 13px;\n  }\n\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n\n    font-size: .85em;\n  }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0;\n  }\n    .mat-table .mat-cell:first-child {\n    margin-top: 4%;\n  }\n}\n\n#breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n\n*  breadcrump *\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n\n.btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n/** Default button **/\n\n.btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n\n/* The responsive part */\n\n.btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n\n.btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n\n.mat-input-element {\n   caret-color: #E66F00 !important;\n  }\n\n.mat-input-element ng-reflect-placeholder {\n   color: #E66F00 !important;\n  }\n\n/* === For phones =================================== */\n\n@media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n\n/* === For tablets ================================== */\n\n@media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n      .hide{\n         display: none;\n      }\n  }\n\n/* === For desktops ================================== */\n\n@media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n\n#page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n\n}\n\n.close {\n   float: right;\n   font-size: 1.5rem;\n   font-weight: 700;\n   line-height: 1;\n   color: white;\n   text-shadow: 0 1px 0 #fff;\n}\n\n/* Customer details css start  */\n\n.panel-body ul.all-details{\n   font-weight: bold;\n   display: table;\n   width: 100%;\n   text-align: left;\n}\n\n.panel-body ul.all-details li{\n display: table-cell;\n width: 50%;\n\n\n}\n\n.panel-body ul.all-details li {\n   max-width: 100px;\n   word-wrap: break-word;\n}\n\n.panel-body.details{\n   min-height: 277px;\n   background: #222222;\n   margin: 0;\n   padding: 0;\n }\n\ndl, ol, p, ul {\n   margin-top: 0;\n   margin-bottom: 0.6rem;\n}\n\ndl[_ngcontent-c10], ol[_ngcontent-c10], ul[_ngcontent-c10] {\n   margin-top: 1px;\n   margin-bottom: 0;\n}\n\n/* Customer details css end  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZGFzaGJvYXJkL2N1c3RvbWVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxPQUFPO0dBQ1AsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixzQkFBc0I7R0FDdEIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtBQUN0Qjs7QUFDQTs7SUFFSTs7QUFDSjtHQUNHLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCOztHQUV0Qjs7QUFFQTtNQUNHLHNCQUFzQjtFQUMxQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0tBR2pCOztBQUNEO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQiwrQkFBK0I7TUFDL0Isa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjs7QUFDQTtPQUNHLGlCQUFpQjtJQUNwQjs7QUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7R0FDbkI7O0FBQ0M7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixrQkFBa0I7O0dBRXJCOztBQUVBO01BQ0csaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUI7R0FDdEI7O0FBQ0E7TUFDRyxxQkFBcUI7TUFDckIseUJBQXlCO0dBQzVCOztBQUNBO1FBQ0sseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsbUJBQW1CO0dBQ3hCOztBQUNBO01BQ0csMkJBQTJCO0dBQzlCOztBQUNBO01BQ0csa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztHQUNqQjs7QUFDQTtNQUNHLGNBQWM7TUFDZCxZQUFZO01BQ1osMkJBQTJCO01BQzNCLCtCQUErQjtHQUNsQzs7QUFDQTtNQUNHLHFCQUFxQjtNQUNyQiwyQkFBMkI7TUFDM0IsaUNBQWlDO0dBQ3BDOztBQUNBO01BQ0csaUJBQWlCO0dBQ3BCOztBQUVILHFCQUFxQjs7QUFJckIsOENBQThDOztBQUM5QztHQUNHLGtCQUFrQjs7R0FFbEIseUJBQXlCOztHQUV6QixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFDQTtHQUNHLHFCQUFxQjtNQUNsQix5QkFBeUI7QUFDL0I7O0FBQ0E7O09BRU8sVUFBVTtPQUNWLHNCQUFzQjtPQUN0QixpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLHdCQUF3QjtPQUN4QixhQUFhO09BQ2I7O0FBRUo7U0FDTSxXQUFXOzs7S0FHZjs7QUFHTCwyQ0FBMkM7O0FBRzNDLGdDQUFnQzs7QUFHaEM7TUFDTSxVQUFVO01BQ1Ysd0JBQXdCO01BQ3hCLFlBQVk7QUFDbEI7O0FBQ0E7O0dBRUcsZUFBZTtHQUNmLFdBQVc7QUFDZDs7QUFDQTtHQUNHLFdBQVc7R0FDWCxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLHlCQUF5QjtDQUMzQjs7QUFDQTtHQUNFLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7R0FDZiw0QkFBNEI7QUFDL0I7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCOztBQUNDO0dBQ0UsbUJBQW1CO0FBQ3RCOztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWixrQkFBa0I7QUFDckI7O0FBQ0E7O0dBRUcsV0FBVztBQUNkOztBQUNBO0dBQ0cseUJBQXlCO0FBQzVCOztBQUNBO0dBQ0cseUJBQXlCO0FBQzVCOztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUNBOztFQUVFOztBQUNGO0dBQ0csYUFBYTtBQUNoQjs7QUFDQSw4QkFBOEI7O0FBRTlCLDhCQUE4Qjs7QUFDOUI7R0FDRyxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQjs7QUFFSDtHQUNHLHlCQUF5QjtHQUN6Qix3QkFBd0I7R0FDeEIsYUFBYTtHQUNiLGtCQUFrQjtBQUNyQjs7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixhQUFhOztBQUViOztBQUNBO0dBQ0cseUJBQXlCO0dBQ3pCLHdCQUF3QjtHQUN4QixhQUFhO0dBQ2Isa0JBQWtCO0dBQ2xCLGFBQWE7Q0FDZjtDQUNBLENBQUM7O0FBSUYsNEJBQTRCOztBQUk1QjtHQUNHLFVBQVU7R0FDVix3QkFBd0I7R0FDeEIsaUJBQWlCO0dBQ2pCLGdCQUFnQjs7QUFFbkI7O0FBR0E7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGVBQWU7QUFDbEI7O0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsY0FBYztBQUNqQjs7QUFDQTtHQUNHLGVBQWU7O0FBRWxCOztBQUNBO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUdBO0dBQ0csV0FBVztHQUNYLCtCQUErQjtHQUMvQixxQkFBcUI7R0FDckIsWUFBWTtHQUNaLGtCQUFrQjs7QUFFckI7O0FBQ0E7R0FDRyxhQUFhO0dBQ2IsWUFBWTtBQUNmOztBQU1BO0VBQ0UsNkNBQTZDO0VBQzdDLGlCQUFpQjs7QUFFbkI7O0FBR0E7R0FDRyxjQUFjO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Q7RUFDRjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1COztJQUVuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtJQUNFO0lBQ0EsY0FBYztFQUNoQjtBQUNGOztBQUVBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixTQUFTO0dBQ1QsV0FBVztHQUNYLG1CQUFtQjtBQUN0Qjs7QUFHQTs7O0lBR0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDRSwrQkFBK0I7RUFDakM7O0FBR0Esd0JBQXdCOztBQUV4QjtNQUNJLGlDQUFpQztNQUNqQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtHQUNDLCtCQUErQjtFQUNoQzs7QUFFQTtHQUNDLHlCQUF5QjtFQUMxQjs7QUFDQSx1REFBdUQ7O0FBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxlQUFlO01BQ25CO0VBQ0o7O0FBRUEsdURBQXVEOztBQUN2RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO01BQ0E7U0FDRyxhQUFhO01BQ2hCO0VBQ0o7O0FBRUEsd0RBQXdEOztBQUN4RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO0VBQ0o7O0FBQ0E7R0FDQyxXQUFXO0dBQ1gsOEJBQThCO0dBQzlCLG1CQUFtQjs7QUFFdEI7O0FBQ0E7R0FDRyxZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsWUFBWTtHQUNaLHlCQUF5QjtBQUM1Qjs7QUFDQSxnQ0FBZ0M7O0FBQ2hDO0dBQ0csaUJBQWlCO0dBQ2pCLGNBQWM7R0FDZCxXQUFXO0dBQ1gsZ0JBQWdCO0FBQ25COztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7OztBQUdYOztBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLHFCQUFxQjtBQUN4Qjs7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixtQkFBbUI7R0FDbkIsU0FBUztHQUNULFVBQVU7Q0FDWjs7QUFDQTtHQUNFLGFBQWE7R0FDYixxQkFBcUI7QUFDeEI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsZ0JBQWdCO0FBQ25COztBQUNDLDhCQUE4QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWRhc2hib2FyZC9jdXN0b21lci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmRfdHJha2NlcntcblxuICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxubWF0LWNlbGwsIG1hdC1mb290ZXItY2VsbCwgbWF0LWhlYWRlci1jZWxsIHtcbiAgIGZsZXg6IDE7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgcGFkZGluZzo0cHggIWltcG9ydGFudDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi8qIG1hdC1oZWFkZXItY2VsbCwgbWF0LWNlbGwge1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gfSAqL1xuLm1hdC10YWJsZVtfbmdjb250ZW50LWMxMF0gLm1hdC1jZWxsW19uZ2NvbnRlbnQtYzEwXTpmaXJzdC1jaGlsZCB7XG4gICBtYXJnaW4tdG9wOiAwJTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaHIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzY2NjtcblxuICAgfVxuXG4gICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogU25hcHNob3Qgcm93IHN0YXJ0ICovXG5cbiAgLmNpcmNsZS10aXRsZTJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxuICAgICB9XG4gICAgLmNpcmNsZS10aXRsZS1oZWFkaW5ne1xuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIC00MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XG4gICAgICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYXtcbiAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICB9XG4gICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYS5pY29ue1xuICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgfVxuICAgIC5ib3h7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICB9XG5cbiAgIC5ib3gye1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgfVxuICAgLmJveDpob3ZlcntcbiAgICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG4gICB9XG4gICAuYm94LWhlYWRpbmd7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgfVxuICAgLnRleHQtZmFkZWR7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gICB9XG4gICAuYm94LW51bWJlcntcbiAgICAgIHBhZGRpbmc6NXB4IDAgMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgIH1cbiAgIC5mb290ZXJ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XG4gICB9XG4gICAuZm9vdGVyOmhvdmVye1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICAgfVxuICAgI2ltZy1jdG57XG4gICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgIH1cblxuLyogU25hcHNob3Qgcm93IGVuZCAqL1xuXG5cblxuLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBTdGFydHMgKi9cbi5wYW5lbC1oZWFkaW5ne1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuXG4gICBib3JkZXI6IDFweDtcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiA1cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG59XG4uaG92ZXItZWZmZWN0e1xuICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0Qjtcbn1cbi5zdGF0dXMtcGFuZWwtYm9keXtcblxuICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICB9XG5cbiAgIC5jaGFydEJvcmRlcntcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG5cbiAgICAgfVxuXG5cbi8qIHN0YXR1cyBhbmQgZW5lcmd5IHBvd2VyIHN0YXR1cyByb3cgRW5kICovXG5cblxuLyogQ3VzdG9tZXIgZGV0YWlsIHRhYmxlIHN0YXJ0ICovXG5cblxuLnBhbmVsLWJvZHl7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgcGFkZGluZzogNXB4O1xufVxubWF0LWZvcm0tZmllbGR7XG5cbiAgIGZvbnQtc2l6ZTogMTFweDtcbiAgIHdpZHRoOiAxMDAlO1xufVxudGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOmxlZnQ7XG4gICBib3JkZXItc3BhY2luZzogMDtcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gfVxuIC5tYXQtaGVhZGVyLWNlbGx7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIHBhZGRpbmc6IDhweDtcbiAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG5cbi5oZWFkZXJSb3d7XG4gICBiYWNrZ3JvdW5kOiByZWQ7XG4gICBwYWRkaW5nOiA4cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LXNpemU6IDE2cHg7XG59XG4gLm1hdC1wYWdpbmF0b3J7XG4gICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG50aCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgcGFkZGluZzogOHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGR7XG5cbiAgIHBhZGRpbmc6OHB4O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTtcbn1cbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0YzRjtcbn1cbi5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGR7XG4gICBib3JkZXItYm90dG9tOiAwO1xufVxuLyoubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZHtcbiAgbWFyZ2luLXRvcDogMiU7XG59Ki9cbi5tYXQtaGVhZGVyLXJvd3tcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG4vKiBDdXN0b21lciBkZXRhaWwgdGFibGUgZW5kICovXG5cbi8qIEVuZXJneSBzdGF0dXMgZ3JhcGggc3RhcnQgKi9cbi5oZWFkaW5nLXBhbmVse1xuICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgcGFkZGluZzo1cHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIH1cblxuLmNoYXJ0LWJvZHl7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgcGFkZGluZzogMTBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGFydC1ib2R5MntcbmJhY2tncm91bmQtY29sb3I6ICMyMjI7XG5ib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xucGFkZGluZzogMTBweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmhlaWdodDogMjc3cHg7XG5cbn1cbi5jaGFydC1ib2R5M3tcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgaGVpZ2h0OiAyMjBweDtcbiAvKiAgd2lkdGg6IDMyNXB4O1xuKi99XG5cblxuXG4vKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIGVuZCAqL1xuXG5cblxuLmNobmdwd2QtYm9keXtcbiAgIHdpZHRoOjEwMCU7XG4gICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICBwYWRkaW5nLXRvcDogMTVweDtcbiAgIG1hcmdpbi10b3A6IDU1cHg7XG5cbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gICBjb2xvcjogYmxhY2s7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgZm9udC1zaXplOiAxOHB4O1xufVxuLm9sZHB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNocHdke1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5idG4tcHJpbWFyeSB7XG4gICBiYWNrZ3JvdW5kOiAjRTY2RjAwO1xuICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRue1xuICAgYm9yZGVyOiAjRTY2RjAwO1xuXG59XG4uY2huZ3B3ZHtcbiAgIG1hcmdpbi10b3A6IDEyNXB4O1xufVxuXG5cbi5jaGFyaGVhZGVyMntcbiAgIG1hcmdpbjogNXB4O1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcbiAgIHBhZGRpbmc6IDVweDtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuLmhpZ2hjaGFydGRlbW97XG4gICBoZWlnaHQ6IDgwMHB4O1xuICAgd2lkdGg6IDIwMHB4O1xufVxuXG5cblxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuXG59XG5cblxuLm5nLXRucy1jMTMtMiA6Zm9jdXMge1xuICAgY29sb3I6ICNmZjdhMDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gIH1cblxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICB9XG5cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gIH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgfVxufVxuXG4jYnJlYWRjcnVtYntcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHotaW5kZXg6IDk5OTtcbiAgIHRvcDogNTBweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cblxuXG4qICBicmVhZGNydW1wICpcblxuLmJ0bi1icmVhZGNydW1iIC5idG46bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgfVxuXG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuIHtcbiAgICBwYWRkaW5nOjZweCAxMnB4IDZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmc6NnB4IDZweCA2cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmc6NnB4IDE4cHggNnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC8qKiBEZWZhdWx0IGJ1dHRvbiAqKi9cbiAgLmJ0bi1icmVhZGNydW1iIC5idG4uYnRuLWRlZmF1bHQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgfVxuXG5cbiAgLyogVGhlIHJlc3BvbnNpdmUgcGFydCAqL1xuXG4gIC5idG4tYnJlYWRjcnVtYiA+ICogPiBkaXYge1xuICAgICAgLyogV2l0aCBsZXNzOiAudGV4dC1vdmVyZmxvdygpOyAqL1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWNoaWxkKG4rMikge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICBjYXJldC1jb2xvcjogI0U2NkYwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IG5nLXJlZmxlY3QtcGxhY2Vob2xkZXIge1xuICAgY29sb3I6ICNFNjZGMDAgIWltcG9ydGFudDtcbiAgfVxuICAvKiA9PT0gRm9yIHBob25lcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rMikge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgfVxuICB9XG5cbiAgLyogPT09IEZvciB0YWJsZXRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis0KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH1cbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgICAgLmhpZGV7XG4gICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICB9XG5cbiAgLyogPT09IEZvciBkZXNrdG9wcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis2KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH1cbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICAgfVxuICB9XG4gICNwYWdlLXdyYXBwZXIge1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nOiAxMzBweCAyNXB4IDEzMHB4IDI1cHg7XG4gICBiYWNrZ3JvdW5kOiAjMEYwRjBGO1xuXG59XG4uY2xvc2Uge1xuICAgZmxvYXQ6IHJpZ2h0O1xuICAgZm9udC1zaXplOiAxLjVyZW07XG4gICBmb250LXdlaWdodDogNzAwO1xuICAgbGluZS1oZWlnaHQ6IDE7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xufVxuLyogQ3VzdG9tZXIgZGV0YWlscyBjc3Mgc3RhcnQgICovXG4ucGFuZWwtYm9keSB1bC5hbGwtZGV0YWlsc3tcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aDogMTAwJTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFuZWwtYm9keSB1bC5hbGwtZGV0YWlscyBsaXtcbiBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuIHdpZHRoOiA1MCU7XG5cblxufVxuLnBhbmVsLWJvZHkgdWwuYWxsLWRldGFpbHMgbGkge1xuICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5wYW5lbC1ib2R5LmRldGFpbHN7XG4gICBtaW4taGVpZ2h0OiAyNzdweDtcbiAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuIH1cbiBkbCwgb2wsIHAsIHVsIHtcbiAgIG1hcmdpbi10b3A6IDA7XG4gICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG5cbmRsW19uZ2NvbnRlbnQtYzEwXSwgb2xbX25nY29udGVudC1jMTBdLCB1bFtfbmdjb250ZW50LWMxMF0ge1xuICAgbWFyZ2luLXRvcDogMXB4O1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiAvKiBDdXN0b21lciBkZXRhaWxzIGNzcyBlbmQgICovIl19 */"

/***/ }),

/***/ "./src/app/customer-dashboard/customer-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customer-dashboard/customer-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" >\n  <div id=\"bc2\" style=\"left: 1% !important\" class=\"btn-group btn-breadcrumb\">\n    <a (click)=\"home()\" *ngIf=\"super_admin_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>  \n    <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n    <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\"><div >Customer Page</div></a>\n    <a (click)=\"sitePage()\" *ngIf=\"site_dash\" class=\"btn btn-default\">Site Page</a>\n </div>\n</div>\n<div  id=\"page-wrapper\" class=\"container-fluid\">\n <div *ngIf=\"!isShown\">\n     \n <div class=\"row\">\n     <div class=\"dashboard_trakcer\"> Customer Home </div>\n     <hr>\n             <!-- 1st snapshot start -->\n             <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                 <div class=\"circle-title2\">\n                     <div class=\"circle-title-heading\">\n                         <i class=\"fa fa-bell fa-fw fa-3x\"></i>\n                     </div>\n                     <div class=\"box\" style=\"cursor: pointer;\" (click)=\"alarmTable()\">\n                         <div class=\"box-heading text-faded\">Alarms</div>\n \n                         <div class=\"box-number text-faded\">{{Custalarms}}</div>\n                     </div>\n                 </div>\n             </div>\n \n \n             <!-- 1st snapshot end -->\n \n \n             <!-- 2nd snapshot start -->\n             <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                 <div class=\"circle-title2\">\n                     <div class=\"circle-title-heading\">\n                         <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n                     </div>\n                     <div class=\"box\">\n                         <div class=\"box-heading text-faded\">Energy Consumed</div>\n \n                         <div class=\"box-number text-faded\">{{CustenergyConsumed}} kWh\n                         </div>\n                        \n                     </div>\n                 </div>\n \n             </div>\n \n \n             <!-- 2nd snapshot end -->\n \n             <!-- 3rd snapshot start -->\n             <div *ngIf=\"!is_carbon_emission_visible\" class=\"col-lg-3 col-sm-6 col-xs-6\">\n                 <div class=\"circle-title2\">\n                     <div class=\"circle-title-heading\">\n                         <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                     </div>\n                     <div class=\"box\">\n                         <div class=\"box-heading text-faded\">Energy Saved</div>\n \n                         <div class=\"box-number text-faded\">{{CustsavedEnergy}} kWh\n                         </div>\n                     </div>\n                 </div>\n \n             </div>\n             <div *ngIf=\"is_carbon_emission_visible\" class=\"col-lg-3 col-sm-6 col-xs-6\">\n              <div class=\"circle-title2\">\n                  <div class=\"circle-title-heading\">\n                      <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                  </div>\n                  <div class=\"box\">\n                      <div class=\"box-heading text-faded\">Energy Saved/Carbon Emission Saved</div>\n                      <div class=\"box-heading text-faded\">\n                        <small>\n                            <span style=\"font-weight: 700\">Enery Saved :</span> {{CustsavedEnergy}} kWH<br>\n                            <span style=\"font-weight: 700\">Carbon Emission Saved :</span> {{CustcarbonSaved}} <br>\n                        </small>\n                    </div>\n                      \n                  </div>\n              </div>\n\n          </div>\n \n \n             <!-- 3rd snapshot end -->\n \n             <!-- 4th snapshot start -->\n             <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                 <div class=\"circle-title2\">\n                     <div class=\"circle-title-heading\">\n                         <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n                     </div>\n                     <div class=\"box\">\n                         <div class=\"box-heading text-faded\">% saved</div>\n \n                         <div class=\"box-number text-faded\">{{CustpercentageSaved}}</div>\n                     </div>\n                 </div>\n \n             </div>\n         </div>\n <div class=\"row mt-3\">\n     <div class=\" col-lg-5\">\n\n           <div class=\"panel-heading\">\n             <i class=\"fa fa-bar-chart-o\"></i> Customer Details\n         </div>\n           <div class=\"panel-body details\">\n            <ul class=\"all-details\">\n               <li>\n                   <p>Customer ID:</p>\n               </li>\n               <li>{{ customerDetails.id }}</li>\n           </ul>\n           <ul class=\"all-details\">\n             <li>\n                 <p>Username : </p>\n             </li>\n             <li> {{ customerDetails.username }}</li>\n         </ul>\n\n           <ul class=\"all-details\">\n               <li>\n                   <p>Customer Name:</p>\n               </li>\n               <li> {{ customerDetails.name }}</li>\n           </ul>\n           <ul class=\"all-details\">\n               <li>\n                   <p>Address:</p>\n               </li>\n               <li>  {{ customerDetails.address }} </li>\n           </ul>\n           <ul class=\"all-details\">\n               <li>\n                   <p>Total Property:</p>\n               </li>\n               <li>  {{ customerDetails.totalProperties }} </li>\n           </ul>\n           <ul class=\"all-details\">\n               <li>\n                   <p>Email Id :</p>\n               </li>\n               <li>{{ customerDetails.email }}</li>\n           </ul>\n           <ul class=\"all-details\">\n               <li>\n                   <p>Contact No. :</p>\n               </li>\n               <li> {{ customerDetails.contactNumber}}</li>\n           </ul>\n           </div>\n       <!-- </div> -->\n     </div>\n        <div class=\"col-lg-7\">\n \n                 <div class=\"panel-heading\">\n                     <i class=\"fa fa-bar-chart-o\"></i> Alarm Distribution\n                 </div>\n                 <div class=\"chart-body2\">\n                          <highcharts-chart\n                          [Highcharts]=\"Highcharts\"\n                          [constructorType]=\"chartConstructor\"\n                          [options]=\"lineChartOptions\"\n                          [callbackFunction]=\"chartCallback\"\n                          [(update)]=\"updateFlag\"\n                          [oneToOne]=\"oneToOneFlag\"\n                  \n                          style=\"width: 100%; height: 100%; display: block;\"\n                      ></highcharts-chart>\n              </div>\n             </div>               \n </div>\n <!-- </div> -->\n <div *ngIf=\"showAlarm\">\n <div class=\"row mt-4\">\n         <div class=\" col-lg-12 col-sm-6 \">\n                 <div class=\"panel-heading\">\n                         <i class=\"fa fa-bar-chart-o\"></i> Alarm Details\n                         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                 <span aria-hidden=\"true\" (click)=\"AlarmTableClose()\">&times;</span>\n                               </button>\n                     </div>\n                     <div class=\"chart-body\">\n                       <div class=\"example-header\" fxLayout=\"row\">\n                             <mat-form-field>\n                               <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                             </mat-form-field>\n                           </div>\n\n                           <div class=\"example-container mat-elevation-z8\">\n\n                             <mat-table [dataSource]=\"dataSource1\" matSort>\n\n                               <!-- ID Column -->\n                               <ng-container matColumnDef=\"siteid\">\n                                 <mat-header-cell *matHeaderCellDef mat-sort-header > Site ID </mat-header-cell>\n                                 <mat-cell *matCellDef=\"let row\" data-label=\"Site ID\"> {{row.siteid}} </mat-cell>\n                               </ng-container>\n\n                               <!-- Site Name Column -->\n                               <ng-container matColumnDef=\"site_name\">\n                                 <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                                 <mat-cell *matCellDef=\"let row\" data-label=\"Site Name\" > {{row.sitename}} </mat-cell>\n                               </ng-container>\n                               <!-- Site Type -->\n                               <ng-container matColumnDef=\"internet_down\">\n                                 <mat-header-cell *matHeaderCellDef mat-sort-header> Internet Down </mat-header-cell>\n                                 <mat-cell *matCellDef=\"let row\" data-label=\"Internet Down\" > {{row.internet_down}} </mat-cell>\n                               </ng-container>\n\n                               <!-- Site Type -->\n                               <ng-container matColumnDef=\"light_faulty\">\n                                     <mat-header-cell *matHeaderCellDef mat-sort-header> Light Damage</mat-header-cell>\n                                     <mat-cell *matCellDef=\"let row\" data-label=\"Light Damage\" > {{row.light_faulty}} </mat-cell>\n                                   </ng-container>\n\n                               <!-- Site Type -->\n                               <ng-container matColumnDef=\"high_consump\">\n                                     <mat-header-cell *matHeaderCellDef mat-sort-header > High Consumption </mat-header-cell>\n                                     <mat-cell *matCellDef=\"let row\" data-label=\"High Consumption\" > {{row.high_consump}}  </mat-cell>\n                                   </ng-container>\n                                   \n                                 <ng-container matColumnDef=\"totalalarms\">\n                                   <mat-header-cell *matHeaderCellDef mat-sort-header> Total Alarms </mat-header-cell>\n                                   <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Total Alarms\"> {{row.totalalarms}} </mat-cell>\n                                 </ng-container> \n                               <mat-header-row *matHeaderRowDef=\"displayedColumns1\"></mat-header-row>\n                               <mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns1;\" (click)=\"openSiteDashOnAlarmClick(row)\">\n                               </mat-row>\n                             </mat-table>\n                             <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" ></mat-paginator>\n                            \n                           </div>\n                         </div>\n                       </div>\n                     </div>\n </div>\n\n       <div class=\"row mt-4\">\n               <div class=\" col-lg-12 col-sm-6 \">\n                       <div class=\"panel-heading\">\n                               <i class=\"fa fa-bar-chart-o\"></i> Site Details\n                           </div>\n                           <div class=\"chart-body\">\n                             <div class=\"example-header\" fxLayout=\"row\">\n                                   <mat-form-field>\n                                     <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                                   </mat-form-field>\n                                 </div>\n\n                                 <div class=\"example-container mat-elevation-z8\">\n\n                                   <mat-table [dataSource]=\"dataSource\" matSort>\n\n                                     <!-- ID Column -->\n                                     <ng-container matColumnDef=\"siteid\">\n                                       <mat-header-cell *matHeaderCellDef mat-sort-header> Site ID </mat-header-cell>\n                                       <mat-cell *matCellDef=\"let row\" data-label=\"Site ID\"> {{row.siteid}} </mat-cell>\n                                     </ng-container>\n\n                                     <!-- Site Name Column -->\n                                     <ng-container matColumnDef=\"sitename\">\n                                       <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                                       <mat-cell *matCellDef=\"let row\" data-label=\"Site Name\"> {{row.sitename}} </mat-cell>\n                                     </ng-container>\n\n                                     <!-- Site Type -->\n                                     <ng-container matColumnDef=\"sitetype\">\n                                       <mat-header-cell *matHeaderCellDef mat-sort-header > Site Type </mat-header-cell>\n                                       <mat-cell *matCellDef=\"let row\" data-label=\"Site Type\" > {{row.sitetype}} </mat-cell>\n                                     </ng-container>\n                                       <!-- Color Column -->\n                                     <ng-container matColumnDef=\"siteaddr\">\n                                         <mat-header-cell *matHeaderCellDef mat-sort-header> Site Address </mat-header-cell>\n                                         <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Site Address\"> {{ row.siteaddr}} </mat-cell>\n                                       </ng-container> \n\n                                       <ng-container matColumnDef=\"sitemanager\">\n                                         <mat-header-cell *matHeaderCellDef mat-sort-header> Site Manager </mat-header-cell>\n                                         <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Site Manager\"> {{row.sitemanager}} </mat-cell>\n                                       </ng-container> \n\n                                     <!-- Site Manager Contact Number -->\n                                     <ng-container matColumnDef=\"contact\">\n                                       <mat-header-cell *matHeaderCellDef mat-sort-header> Site Manager Mob No</mat-header-cell>\n                                       <mat-cell *matCellDef=\"let row\" data-label=\"Site Manager Mob No\"> {{row.contact}} </mat-cell>\n                                     </ng-container>\n                                     <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                     <mat-row   style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"openSiteDashboard(row)\">\n                                     </mat-row>\n                                   </mat-table>\n                                   <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" ></mat-paginator>\n                  \n                                 </div>\n                               </div>\n                             </div>\n                           </div>      \n</div>\n</div>"

/***/ }),

/***/ "./src/app/customer-dashboard/customer-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customer-dashboard/customer-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardComponent", function() { return CustomerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);








var CustomerDashboardComponent = /** @class */ (function () {
    function CustomerDashboardComponent(dataService, userService, router) {
        this.dataService = dataService;
        this.userService = userService;
        this.router = router;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.site_dash = false;
        this.customer_home = false;
        this.super_admin_home = false;
        this.customer_name = false;
        this.isShown = false;
        this.is_carbon_emission_visible = false;
        this.customerDetails = new _models_user__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsModel"]();
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.displayedColumns = ['siteid', 'sitename', 'sitetype', 'siteaddr', 'sitemanager', 'contact'];
        this.displayedColumns1 = ['siteid', 'site_name', 'internet_down', 'light_faulty', 'high_consump', 'totalalarms'];
    }
    CustomerDashboardComponent.prototype.ngAfterViewInit = function () {
    };
    CustomerDashboardComponent.prototype.ngOnInit = function () {
        this.getCustomerDetails();
        this.getCustomerSiteLists();
        this.getAlarmGraph();
        this.getCustAllSiteSnapshot();
        //here is implementation of breadceumb...
        if (this.user_type == '1') {
            this.super_admin_home = true;
            this.customer_home = false;
            this.customer_name = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.super_admin_home = false;
            this.customer_home = true;
        }
    };
    CustomerDashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        this.dataSource1.filter = filterValue;
    };
    CustomerDashboardComponent.prototype.addbut = function () {
        window.alert("addbutton");
    };
    CustomerDashboardComponent.prototype.editbut = function () {
        window.alert("editbutton");
    };
    CustomerDashboardComponent.prototype.alarmTable = function () {
        this.showAlarm = true;
        this.getCustomerAlarms();
    };
    CustomerDashboardComponent.prototype.AlarmTableClose = function () {
        this.showAlarm = false;
    };
    CustomerDashboardComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        location.reload();
    };
    CustomerDashboardComponent.prototype.getAlarmGraph = function () {
        var _this = this;
        if (this.user_type == "1") {
            this.data1 = { "id": JSON.parse(localStorage.getItem("id")), };
        }
        else {
            this.data1 = { "id": this.user_id };
        }
        this.userService.getCustAlarmGraphData(this.data1).subscribe(function (response) {
            // highcharts = Highcharts;
            _this.lineChartOptions = {
                colorCount: '4',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                chart: {
                    type: "spline",
                    backgroundColor: "#222222",
                    overflow: 'scroll'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: ['Alarms Type']
                },
                yAxis: {
                    title: {
                        style: { color: 'white', },
                        text: "Value"
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    }
                },
                tooltip: {
                    valueSuffix: ""
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: response["Data"]
            };
            console.log("graph data", _this.lineChartOptions);
        });
    };
    CustomerDashboardComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        if (this.user_type == "1") {
            this.data1 = { "id": JSON.parse(localStorage.getItem("id")) };
        }
        else {
            this.data1 = { "id": this.user_id };
        }
        console.log("data in customer details:", this.data1);
        this.userService.getCustomerDetails(this.data1).subscribe(function (response) {
            var responseData = response['data'];
            var customerData = responseData['customer'];
            _this.customerDetails.id = customerData['id'];
            _this.customerDetails.username = customerData['username'];
            _this.customerDetails.email = customerData['email'];
            _this.customerDetails.contactNumber = customerData['Contact_number'];
            _this.customerDetails.name = customerData['first_name'] + " " + customerData['last_name'];
            _this.customerDetails.address = responseData['address'];
            _this.customerDetails.totalProperties = responseData['total_sites'];
        }, function (error) { });
    };
    CustomerDashboardComponent.prototype.getCustomerSiteLists = function () {
        var _this = this;
        if (this.user_type == "1") {
            this.data1 = { "id": JSON.parse(localStorage.getItem("id")) };
        }
        else {
            this.data1 = { "id": this.user_id };
        }
        console.log("data in site details########:", this.data1);
        this.dataService.getWarehouseList(this.data1).subscribe(function (response) {
            var sites = [];
            for (var i = 0; i <= response['site'].length - 1; i++) { /*users.push(createNewUser(i));*/
                //console.log(response['site'][i]);
                var data = response['site'][i];
                var is_pf_visible = data['is_pf_visible'];
                var is_carbon_emission_visible = data['is_carbon_emission_visible'];
                var is_load_graph_visible = data["is_loadGraph_visible"];
                var show_dg_mains_run_time = data['show_dg_mains_run_time'];
                var dg_fuel_system_installed = data["dg_fuel_system_installed"];
                var customer_visible_dg_fuel_data = data["customer_visible_dg_fuel_data"];
                var is_hourly_data_visible = data["is_hourly_data_visible_customer"];
                var smContact = void 0;
                var smName = void 0;
                var TypeOfSite = void 0;
                var site_type = data['site_type'];
                if (site_type == '1') {
                    TypeOfSite = 'WH METERING';
                }
                else if (site_type == '2') {
                    TypeOfSite = 'WH_ENERGY SAVING';
                }
                else if (site_type == '5') {
                    TypeOfSite = 'WH_SUBMETERING';
                }
                else if (site_type == '3') {
                    TypeOfSite = 'firealarm_monitoring_system';
                }
                else if (site_type == '4') {
                    TypeOfSite = 'firealarm_equipments_system';
                }
                if (data['site_manager_contact']) {
                    smContact = data['site_manager_contact'];
                }
                else {
                    smContact = "-";
                }
                if (data['site_manager']) {
                    smName = data['site_manager'];
                }
                else {
                    smName = "No Site Manager allocated";
                }
                sites.push({ "siteid": data['id'],
                    "sitename": data['site_name'],
                    'sitetype': TypeOfSite,
                    "contact": smContact,
                    "siteaddr": data['location'],
                    "sitemanager": smName,
                    "is_pf_visible": is_pf_visible,
                    "is_carbon_emission_visible": is_carbon_emission_visible,
                    "is_load_graph_visible": is_load_graph_visible,
                    "show_dg_mains_run_time": show_dg_mains_run_time,
                    "dg_fuel_system_installed": dg_fuel_system_installed,
                    "customer_visible_dg_fuel_data": customer_visible_dg_fuel_data,
                    "is_hourly_data_visible": is_hourly_data_visible
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](sites);
            console.log(_this.dataSource);
            console.log('This is site data source' + ": " + _this.dataSource);
            _this.dataSource.paginator = _this.paginator; //mandeep
            _this.dataSource.sort = _this.sort; //mandeep
        }, function (error) { });
    };
    //Here is define function for getting site snapshot(energy-saved, saved% etc)
    CustomerDashboardComponent.prototype.getCustAllSiteSnapshot = function () {
        var _this = this;
        if (this.user_type == "1") {
            this.data1 = { "id": JSON.parse(localStorage.getItem("id")), "user_type": this.user_type };
        }
        else {
            this.data1 = { "id": this.user_id, "user_type": this.user_type };
        }
        this.userService.getCustomerSnapshot(this.data1).subscribe(function (response) {
            console.log('Here is data for customer snapshot ', response);
            _this.Custalarms = response['alarms'];
            _this.CustenergyConsumed = response['energy_consumed'];
            _this.CustsavedEnergy = response['saved_energy'];
            _this.CustpercentageSaved = response['percentage_saved'];
            if ('carbon_saved' in response) {
                _this.is_carbon_emission_visible = true;
                _this.CustcarbonSaved = response['carbon_saved'];
            }
        });
    };
    CustomerDashboardComponent.prototype.openSiteDashboard = function (row) {
        var siteType = row.sitetype;
        var siteId = row.siteid;
        var siteName = row.sitename;
        var is_pf_visible = row.is_pf_visible;
        var is_carbon_emission_visible = row.is_carbon_emission_visible;
        var is_load_graph_visible = row.is_load_graph_visible;
        var dg_fuel_system_installed = row.dg_fuel_system_installed;
        console.log("carbon_emission_visible : ", is_carbon_emission_visible);
        localStorage.setItem("pf_visible", is_pf_visible);
        localStorage.setItem("carbon_emission_visible", is_carbon_emission_visible);
        localStorage.setItem("is_load_graph_visible", is_load_graph_visible);
        localStorage.setItem('current_customer', this.user_id);
        localStorage.setItem("show_dg_mains_run_time", row.show_dg_mains_run_time);
        localStorage.setItem("dg_fuel_system_installed", dg_fuel_system_installed);
        localStorage.setItem("customer_visible_dg_fuel_data", row.customer_visible_dg_fuel_data);
        localStorage.setItem("is_hourly_data_visible", row.is_hourly_data_visible);
        console.log("site type going to set is : ", siteType);
        console.log("dg/mains runtime value", row.show_dg_mains_run_time);
        if (siteType == "WH METERING") {
            this.dataService.changeMessage("wh_metering");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("wh_metering", 'true');
        }
        else if (siteType == "WH_ENERGY SAVING") {
            this.dataService.changeMessage("energy_saving");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("energy_saving", 'true');
        }
        else if (siteType == "WH_SUBMETERING") {
            this.dataService.changeMessage("submetering");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("submetering", 'true');
        }
        else if (siteType == "firealarm_monitoring_system") {
            this.dataService.changeMessage("firealarm_monitoring_system");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("firealarm_monitoring_system", 'true');
        }
        else if (siteType == "firealarm_equipments_system") {
            this.dataService.changeMessage("firealarm_equipments_system");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("firealarm_equipments_system", 'true');
        }
        else {
            // Asset Tracking
        }
    };
    CustomerDashboardComponent.prototype.openSiteDashOnAlarmClick = function (row) {
        console.log('%%%%%%%%%%%%%%%%%%%%', row);
        var siteType = row.sitetype;
        var siteId = row.siteid;
        var siteName = row.sitename;
        console.log("site type going to set is : ", siteType);
        if (siteType == "WH_Metering") {
            this.dataService.changeMessage("wh_metering");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("wh_metering", 'true');
        }
        else if (siteType == "WH_Energy_Saving") {
            this.dataService.changeMessage("energy_saving");
            localStorage.setItem('siteId', siteId);
            localStorage.setItem("sitename", siteName);
            localStorage.setItem("energy_saving", 'true');
        }
        else {
            // Asset Tracking
        }
    };
    CustomerDashboardComponent.prototype.getCustomerAlarms = function () {
        var _this = this;
        if (this.user_type == "1") {
            this.data1 = { "id": JSON.parse(localStorage.getItem("id")) };
        }
        else {
            this.data1 = { "id": this.user_id };
        }
        this.userService.getAlarmsOnCustomerPage(this.data1).subscribe(function (response) {
            console.log("response data of alarms $$$$$$$$: ", response["data"]);
            var data = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var res = response['data'][i];
                var site_id = res['site_id'];
                var site_name = res['site_name'];
                var total_alarm_count = res['total_alarm_count'];
                var alarms = res["alarms"];
                var site_type = res['site_type'];
                console.log("alarms ##### ", alarms);
                var internet_down = alarms["Internet_Gone"];
                if (internet_down == undefined) {
                    internet_down = '0';
                }
                else {
                    internet_down = alarms["Internet_Gone"];
                }
                var light_damaged = alarms["Light_Damaged"];
                if (light_damaged == undefined) {
                    light_damaged = '0';
                }
                else {
                    light_damaged = alarms["Light_Damaged"];
                }
                var high_consumption = alarms["High_Consumption"];
                if (high_consumption == undefined) {
                    high_consumption = '0';
                }
                else {
                    high_consumption = alarms["High_Consumption"];
                }
                data.push({
                    "siteid": site_id,
                    "sitename": site_name,
                    "internet_down": internet_down,
                    "light_faulty": light_damaged,
                    "high_consump": high_consumption,
                    "totalalarms": total_alarm_count,
                    "sitetype": site_type,
                });
            }
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            console.log(data);
            console.log('This is alarm data source' + ": " + data);
            _this.dataSource1.paginator = _this.paginator;
            _this.dataSource1.sort = _this.sort;
        }, function (error) { });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], CustomerDashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], CustomerDashboardComponent.prototype, "sort", void 0);
    CustomerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-customer-dashboard',
            template: __webpack_require__(/*! ./customer-dashboard.component.html */ "./src/app/customer-dashboard/customer-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./customer-dashboard.component.css */ "./src/app/customer-dashboard/customer-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerDashboardComponent);
    return CustomerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    color: white;\n}\n\n.container {\n    background: black;\n}\n\n.sidenav-container{\n    height: 100%;\n}\n\n.sidenav{\n    width: 200px;\n    background: #222222;\n}\n\n.sidenav .mat-toolbar{\n    background:#222222;\n    margin-top: 18px;\n}\n\n.mat-toolbar.mat-primary{\n    position: fixed;\n    top:0;\n    z-index: 1;\n}\n\n.mat-toolbar{\n    background: #222222;\n\n}\n\n.logo_dash{\n    background: white;\n    width: 100%;\n    \n}\n\n.header_container{\n   width: 100%;\n    \n}\n\n.header1{\n    float: left;\n    \n}\n\n.header2{\n    float: right;\n    \n}\n\n/*  breadcrump */\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n\n.btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n\n.btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n/** Default button **/\n\n.btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n\n/* The responsive part */\n\n.btn-breadcrumb > * > div {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;    \n  }\n\n.btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n\n/* === For phones =================================== */\n\n@media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n\n/* === For tablets ================================== */\n\n@media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n  }\n\n/* === For desktops ================================== */\n\n@media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n\n.footer.footer{\n    position:fixed;\n    bottom:0;\n    right:0;\n    left:0;\n    z-index:9999;\n    background:#222222;\n    padding: 10px;\n    \n  }\n\n.text-muted {\n    color: #E6E7E7!important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixLQUFLO0lBQ0wsVUFBVTtBQUNkOztBQUNBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXOztBQUVmOztBQUNBO0dBQ0csV0FBVzs7QUFFZDs7QUFDQTtJQUNJLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxZQUFZOztBQUVoQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDRSwrQkFBK0I7RUFDakM7O0FBR0Esd0JBQXdCOztBQUV4QjtNQUNJLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCO0VBQzNCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBLHVEQUF1RDs7QUFDdkQ7TUFDSTtVQUNJLGFBQWE7TUFDakI7TUFDQTtVQUNJLGVBQWU7TUFDbkI7RUFDSjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjs7QUFFQSx3REFBd0Q7O0FBQ3hEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7O0VBRWY7O0FBQ0E7SUFDRSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uc2lkZW5hdntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFye1xuICAgIGJhY2tncm91bmQ6IzIyMjIyMjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICB6LWluZGV4OiAxO1xufVxuLm1hdC10b29sYmFye1xuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG5cbn1cbi5sb2dvX2Rhc2h7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG4uaGVhZGVyX2NvbnRhaW5lcntcbiAgIHdpZHRoOiAxMDAlO1xuICAgIFxufVxuLmhlYWRlcjF7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgXG59XG4uaGVhZGVyMntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgXG59XG5cbi8qICBicmVhZGNydW1wICovXG5cbi5idG4tYnJlYWRjcnVtYiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgbGVmdDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgXG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuIHtcbiAgICBwYWRkaW5nOjZweCAxMnB4IDZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmc6NnB4IDZweCA2cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmc6NnB4IDE4cHggNnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLyoqIERlZmF1bHQgYnV0dG9uICoqL1xuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bi5idG4tZGVmYXVsdDpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICB9XG4gIFxuICBcbiAgLyogVGhlIHJlc3BvbnNpdmUgcGFydCAqL1xuICBcbiAgLmJ0bi1icmVhZGNydW1iID4gKiA+IGRpdiB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgICBcbiAgfVxuICBcbiAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtY2hpbGQobisyKSB7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gIFxuICAvKiA9PT0gRm9yIHBob25lcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rMikge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgIH1cbiAgfVxuICBcbiAgLyogPT09IEZvciB0YWJsZXRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis0KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH0gXG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgfVxuICBcbiAgLyogPT09IEZvciBkZXNrdG9wcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis2KSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH0gXG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcbiAgICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci5mb290ZXJ7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgYm90dG9tOjA7XG4gICAgcmlnaHQ6MDtcbiAgICBsZWZ0OjA7XG4gICAgei1pbmRleDo5OTk5O1xuICAgIGJhY2tncm91bmQ6IzIyMjIyMjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIFxuICB9XG4gIC50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogI0U2RTdFNyFpbXBvcnRhbnQ7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n        [opened]=\"!(isHandset$ | async)\">\n        <mat-toolbar>\n            <div class=\"logo_dash\">\n                <img src=\"assets/image/1.png\" width=\"80\"> <br>\n                <img src=\"assets/image/2.png\" width=\"80\">\n            </div>\n        </mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item href='dashboard'>Dashboard </a>\n            <a mat-list-item (click)=\"logOut()\">Logout </a>\n                                   \n            <div *ngIf=\"userType==1\">\n                      \n            </div>\n                      \n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <button type=\"button\" aria-label=\"Toggle Sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n                *ngIf=\"isHandset$ | async\">\n                <mat-icon aria-label=\"side nav toggle icon\">menu</mat-icon>\n            </button>\n            <div class=\"header_container\">\n                <div class=\"header2\" style=\"padding-right: 16%;\">{{UserName}} <i class=\"fas fa-user-edit\" [matMenuTriggerFor]=\"menu\"></i></div>\n                \n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item data-toggle=\"modal\" data-target=\"#resetPasswordModal\">\n                        <mat-icon>dialpad</mat-icon>\n                        <span>Change Password </span>\n                    </button>\n                    \n                </mat-menu>\n            </div>\n        </mat-toolbar>\n        <!-- Add content Here -->\n        <div [ngSwitch]=\"dashboardType\" style=\"padding-top: 0% !important;\">\n              <div *ngSwitchCase = \"'superadmin'\">\n                  <app-super-admin></app-super-admin>\n              </div>\n              <div *ngSwitchCase = \"'customer'\">\n                <app-customer-dashboard></app-customer-dashboard>\n              </div>\n              <div *ngSwitchCase = \"'whouser'\">\n                <app-warehouse></app-warehouse>\n              </div>\n              <div *ngSwitchCase = \"'energy_saving'\">\n                <app-warehouse></app-warehouse>\n              </div>\n              <div *ngSwitchCase = \"'wh_metering'\">\n                <app-wh-metering></app-wh-metering>\n              </div>\n              <div *ngSwitchCase = \"'baseline'\">\n                <app-baseline></app-baseline>\n              </div>\n              <div *ngSwitchCase = \"'admin'\">\n                <app-admin></app-admin>\n              </div>\n              <div *ngSwitchCase = \"'lightsData'\">\n                <app-lights-watt-data></app-lights-watt-data>\n              </div>\n              <div *ngSwitchCase=\"'firealarm_monitoring_system'\">\n                <app-fire-pump-alarm></app-fire-pump-alarm>\n              </div>\n              <div *ngSwitchCase=\"'firealarm_equipments_system'\">\n                <app-fems></app-fems>\n              </div>\n              <div *ngSwitchCase=\"'loadData'\">\n                <app-load-graph></app-load-graph>\n              </div>\n              <div *ngSwitchCase=\"'submetering'\">\n                <app-submetering></app-submetering>\n              </div>\n        </div>\n   </mat-sidenav-content>\n</mat-sidenav-container>\n<footer class=\"footer\">\n  <div style=\"font-size:15px\" class=\"pull-right\">\n      <i style=\"color:#ff7a01;margin-right:5px\" class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n      <a href=\"mailto:asem@aviconncorp.com?Subject=Aviconn SEM Enquiry\" class=\"text-muted pull-right\">asem@aviconncorp.com</a>\n  </div>\n</footer>\n<div class=\"modal fade\" id=\"resetPasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n   <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n          <div *ngIf=\"!isCollapsed\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Change Password</h5>\n        </div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"!isCollapsed\">\n        <form (ngSubmit)=\"onChangepwd()\" #addMountForm=\"ngForm\">\n          <div class=\"form-group\">\n              <label>Old Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"oldPass\" [(ngModel)]=\"changePasswordModel.oldpassword\">\n          </div>\n          <div class=\"form-group\">\n                <label>New Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"newPass\" [(ngModel)]=\"changePasswordModel.newpassword\">\n            </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button [disabled]=\"!addMountForm.form.valid\" type=\"submit\" class=\"btn btn-warning\" style=\"background-color: #ff7a01; color:white;\">Submit</button>\n          </div>\n        </form>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _models_changepassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/changepassword */ "./src/app/models/changepassword.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");












var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data, breakpointObserver, router, tokenService, global, user_service, dialog) {
        this.data = data;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.tokenService = tokenService;
        this.global = global;
        this.user_service = user_service;
        this.dialog = dialog;
        this.isSupperAdmin = true;
        this.title = 'Common Dashboard';
        this.Result = 0;
        this.isCollapsed = false;
        this.modalOpen = false;
        this.userActName = localStorage.getItem('account');
        this.token = localStorage.getItem('token');
        this.changePasswordModel = new _models_changepassword__WEBPACK_IMPORTED_MODULE_8__["changePassword"](this.token, '', '');
        this.superAdmin = false;
        this.admin = false;
        this.customerUser = false;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.userType = this.myObj["UserType"];
        this.user_id = this.myObj["id"];
        this.UserName = this.myObj["username"];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_10__;
        this.baselineVisibility = true;
        // Variables for Breadcrumb
        this.ifCustDashboard = false;
        this.ifSiteDashboard = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.siteId = localStorage.getItem('siteId');
        window.addEventListener('storage', function (event) {
            if (event.storageArea == localStorage) {
                var token = localStorage.getItem("token");
                if (token == undefined) {
                    _this.router.navigate(["/login"]);
                }
            }
        }, false);
        var myObj = JSON.parse(localStorage.getItem("account"));
        this.verifySession();
        if (myObj['UserType'] == 1) {
            this.data.changeMessage("superadmin");
            // this.baselineVisibility=true;
        }
        else if (myObj['UserType'] == 4 || myObj['UserType'] == 5) {
            this.data.changeMessage("customer");
            // this.baselineVisibility=true;
        }
        else if (myObj['UserType'] == 2) {
            this.data.changeMessage("fireAlarm");
        }
        else {
            // Handle Site manager view here
        }
        this.data.currentMessage.subscribe(function (response) { return _this.dashboardType = response; });
        if (this.dashboardType == 'customer' &&
            (myObj['UserType'] == 1 ||
                myObj['UserType'] == 2 ||
                myObj['UserType'] == 3)) {
            this.ifCustDashboard = true;
            this.baselineVisibility = true;
        }
        else if (this.dashboardType == 'wh_metering') {
            /**
            * If the dashboard type is WH Metering, WH Energy Saving or WH Asset Tracking
            */
            /**
            * If the user is admin or superadmin then set the customer dashboard also to true
            */
            if (myObj['UserType'] == 1 ||
                myObj['UserType'] == 2 ||
                myObj['UserType'] == 3) {
                this.ifCustDashboard = true;
            }
            else if (myObj['UserType'] == 4 || myObj['UserType'] == 5) {
                // If user is customer then
                // customer dashboard shall be visible
                this.ifCustDashboard = true;
                this.baselineVisibility = true;
            }
            else {
                // If user is site manager,
                // then customer dashboard shall not be visible
                this.ifCustDashboard = false;
            }
            // Site Dashboard is visible to all Superadmin, Admins,
            // Aviconn User, Customer, Site Manager
            this.ifSiteDashboard = true;
        }
        else if (this.dashboardType == 'energy_saving') {
            if (myObj['UserType'] == 1 ||
                myObj['UserType'] == 2 ||
                myObj['UserType'] == 3) {
                this.ifCustDashboard = true;
            }
            else {
                this.ifCustDashboard = false;
            }
            this.ifSiteDashboard = true;
        }
        console.log("Dashboard Type :" + this.dashboardType);
        this.customer = localStorage.getItem('customer');
        console.log("user login by", this.customer);
        // this account.username
        this.user_category = localStorage.getItem('user_category');
        console.log("user login by user caterory ", this.user_category);
        this.whouser = localStorage.getItem('whouser');
        console.log("User login by pta nhi", this.whouser);
        this.wh_metering = localStorage.getItem('wh_metering');
        console.log("dashboard type is WH_M", this.wh_metering);
        this.energy_saving = localStorage.getItem('energy_saving');
        console.log("Dashboard type is WH_S", this.energy_saving);
        this.firealarm_monitoring_system = localStorage.getItem('firealarm_monitoring_system');
        console.log("Dashboard type is WH_monitoring", this.firealarm_monitoring_system);
        this.firealarm_equipments_system = localStorage.getItem('firealarm_equipments_system');
        console.log("Dashboard type is WH_management", this.firealarm_equipments_system);
        this.warehouseName = localStorage.getItem('siteName');
        this.submetering = localStorage.getItem('submetering');
        console.log("dashboard type is wh_submetering");
        //Here is handling for baseline and jump dashboard
        if ((this.wh_metering == true) && (this.energy_saving == true)) {
            this.baselineVisibility = true;
        }
        if (localStorage.getItem('token') && localStorage.getItem('account')) {
            this.global.me = JSON.parse(localStorage.getItem('account'));
            this.getToken();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    DashboardComponent.prototype.verifySession = function () {
        var _this = this;
        this.infoToken = { "token": localStorage.getItem("token") };
        this.user_service.validateToken(this.infoToken).subscribe(function (response) {
            _this.sessionVerify = response['result'];
            if (_this.sessionVerify == 'true') {
                console.log(_this.sessionVerify + 'Session verified');
            }
            else {
                localStorage.clear();
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
            }
        });
    };
    DashboardComponent.prototype.dgFuelGraph = function () {
        this.data.changeMessage("loadData");
    };
    DashboardComponent.prototype.getToken = function () {
        var _this = this;
        this.tokenService.getToken().subscribe(function (response) {
            _this.infoToken = response;
            console.log('My-token', response);
        }, function (error) {
            console.log('error', error);
        });
    };
    DashboardComponent.prototype.baseline = function () {
        console.log("baseline html hit");
        this.data.changeMessage("baseline");
        localStorage.setItem('siteId', this.siteId);
        localStorage.setItem("baseline", 'true');
    };
    DashboardComponent.prototype.logOut = function () {
        console.log('system is going to logout');
        localStorage.clear();
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        console.log('system is successfully logout');
    };
    DashboardComponent.prototype.home = function () {
        this.ifSiteDashboard = false;
        this.ifCustDashboard = false;
        localStorage.removeItem('customer');
        localStorage.removeItem('whouser');
        localStorage.removeItem('wh_metering');
        localStorage.removeItem('energy_savinging');
        location.reload();
    };
    DashboardComponent.prototype.customerPage = function () {
        this.ifSiteDashboard = false;
        localStorage.removeItem('whouser');
        localStorage.removeItem('wh_metering');
        localStorage.removeItem('energy_savinging');
        location.reload();
    };
    DashboardComponent.prototype.Super_Admin_Home = function () {
        this.ifSiteDashboard = false;
        this.ifCustDashboard = false;
        localStorage.removeItem('customer');
        localStorage.removeItem('whouser');
        localStorage.removeItem('wh_metering');
        localStorage.removeItem('energy_savinging');
        location.reload();
        console.log("Super_Admin_Home Clicked at dashboard");
    };
    DashboardComponent.prototype.onChangepwd = function () {
        var _this = this;
        console.log("New Password :", this.changePasswordModel.newpassword);
        this.chngpwd = {
            'token': this.token,
            'old_password': btoa(this.changePasswordModel.oldpassword),
            'new_password': btoa(this.changePasswordModel.newpassword)
        };
        this.user_service.changePassword(this.chngpwd).subscribe(function (response) {
            //console.log("server_Res: ", data);
            if (response['result'] == '1')
                _this.data.success(response['msg']);
            else
                _this.data.warn(response['msg']);
        }, function (error) {
            console.log("Server Error: ", error);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"], _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/device-details-fems/device-details-fems.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/device-details-fems/device-details-fems.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n \n /* text-align: center; */\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\n/* .mat-row:nth-child(2){\n    background-color:#ff7c01da;\n } */\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n    /* width: 1675px; */\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLWRldGFpbHMtZmVtcy9kZXZpY2UtZGV0YWlscy1mZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBSUEsaUJBQWlCOztBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQSxjQUFjOztBQUNkO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLDZCQUE2Qjs7QUFDN0I7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBQ0E7O0NBRUMsZUFBZTtDQUNmLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osZUFBZTs7Q0FFZix3QkFBd0I7QUFDekI7O0FBQ0E7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBQ0E7SUFDRyx5QkFBeUI7Q0FDNUI7O0FBQ0Q7O0lBRUk7O0FBQ0o7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7SUFDSTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLDZCQUE2QjtNQUM3QixjQUFjO01BQ2QsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixtQkFBbUI7O01BRW5CLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO01BQ0U7TUFDQSxjQUFjO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UtZGV0YWlscy1mZW1zL2RldmljZS1kZXRhaWxzLWZlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDY3MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6I0U2RTdFNztcbiAgICBiYWNrZ3JvdW5kOiAjRTZFN0U3O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuLyogdGFibGUgU3RhcnRzICovXG4ucGFuZWwtaGVhZGluZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTtcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cblxuLmhvdmVyLWVmZmVjdHtcbiAgICBib3JkZXItY29sb3I6ICM0QzRCNEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0Qjtcbn1cbi5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgIHBhZGRpbmc6IDEwcHg7XG59ICBcbiBcbi5jaGFydEJvcmRlcntcbiAgICB3aWR0aDogMTAwJTtcblxufVxuICAgICBcbi8qIHRhYmxlIEVuZCAqLyBcbiNjYW5jZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTsgIFxufVxuXG5cbi8qIFNpdGUgRGVhdGlscyB0YWJsZSBzdGFydCAqL1xuLnBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZzogNXB4OyAgXG59ICBcbi5tYXQtZm9ybS1maWVsZHtcbiBcbiBmb250LXNpemU6IDE0cHg7XG4gd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdGFibGUge1xuIHdpZHRoOiAxMDAlO1xuIHRleHQtYWxpZ246bGVmdDtcbiBib3JkZXItc3BhY2luZzogMDtcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLm1hdC1oZWFkZXItY2VsbHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiBwYWRkaW5nOiA4cHg7XG4gZm9udC1zaXplOiAxNnB4O1xuIFxuIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xuIH1cbiAubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0YzRjNGO1xuIH1cbi8qIC5tYXQtcm93Om50aC1jaGlsZCgyKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjdjMDFkYTtcbiB9ICovXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbn1cblxubWF0LWNlbGwsIG1hdC1mb290ZXItY2VsbCwgbWF0LWhlYWRlci1jZWxsIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xufVxuLm1hdC1oZWFkZXItcm93IHtcbiAgICBtaW4taGVpZ2h0OiA3NnB4O1xuICAgIC8qIHdpZHRoOiAxNjc1cHg7ICovXG59XG4uaGVhZGVyUm93e1xuIGJhY2tncm91bmQ6IHJlZDtcbiBwYWRkaW5nOiA4cHg7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtcGFnaW5hdG9ye1xuIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIC5tYXQtdGFibGUge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICAgIH1cbiAgXG4gICAgLm1hdC10YWJsZSBjYXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6MzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgICAgcGFkZGluZzogMTNweDtcbiAgICB9XG4gIFxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gICAgICBmb250LXNpemU6IC44NWVtO1xuICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgfVxufVxuICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/device-details-fems/device-details-fems.component.html":
/*!************************************************************************!*\
  !*** ./src/app/device-details-fems/device-details-fems.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> Total Devices Warrenty Expired\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\" autocomplete=\"off\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"assetNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Asset No.</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Asset No.\" > {{row.assetNo}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"deviceName\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Device Name</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Device Name\" > {{row.deviceName}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"ModalNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Modal No.</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Modal No.\" > {{row.modelno}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"LocInWH\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Location in WH </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Location in WH\" > {{row.location}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"WarrentyTill\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Warranty Till</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Warranty Till\" > {{row.warrenty}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"LastService\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Last Service</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Last Service\" > {{row.last_service}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"NextService\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Next Service</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Next Service\" > {{row.next_service}} </mat-cell>\n                          </ng-container>\n\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"switchSiteDashboard(row)\">\n                          </mat-row> \n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" ></mat-paginator>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/device-details-fems/device-details-fems.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/device-details-fems/device-details-fems.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogData, DeviceDetailsFemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsFemsComponent", function() { return DeviceDetailsFemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var DeviceDetailsFemsComponent = /** @class */ (function () {
    function DeviceDetailsFemsComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.showExpiredDevices = false;
        this.displayedColumns = ['assetNo', 'deviceName', 'ModalNo', 'LocInWH', 'WarrentyTill', 'LastService', 'NextService'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
    }
    DeviceDetailsFemsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeviceDetailsFemsComponent.prototype.ngOnInit = function () {
        this.fireDeviceSnapshotApi();
        this.expiredDeviceslist();
    };
    DeviceDetailsFemsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DeviceDetailsFemsComponent.prototype.fireDeviceSnapshotApi = function () {
        var _this = this;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.dataService.fireDeviceSnapshotApi(data).subscribe(function (response) {
            console.log('response of snapshot', response);
            var inventoryData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var inventory = response['data'][i];
                inventoryData.push({ "deviceName": inventory['deviceName'],
                    "assetNo": inventory["assetNo"],
                    "modelno": inventory["modelsNo"],
                    "location": inventory["location"],
                    "warrenty": inventory["warrentDate"],
                    "last_service": inventory["last_serviceDate"],
                    "next_service": inventory["next_serviceDate"],
                    "id": inventory["id"]
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](inventoryData);
            _this.dataSource.paginator = _this.paginator.toArray()[0];
        });
    };
    DeviceDetailsFemsComponent.prototype.expiredDeviceslist = function () {
        var _this = this;
        this.showExpiredDevices = true;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.dataService.fireDeviceSnapshotApi(data).subscribe(function (response) {
            console.log('response of snapshot', response);
            var inventoryData = [];
            for (var i = 0; i <= response['list'].length - 1; i++) {
                var inventory = response['list'][i];
                inventoryData.push({ "deviceName": inventory['deviceName'],
                    "assetNo": inventory["assetNo"],
                    "modelno": inventory["modelsNo"],
                    "location": inventory["location"],
                    "warrenty": inventory["warrentDate"],
                    "last_service": inventory["last_serviceDate"],
                    "next_service": inventory["next_serviceDate"],
                    "id": inventory["id"]
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](inventoryData);
            _this.dataSource.paginator = _this.paginator.toArray()[0];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceDetailsFemsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceDetailsFemsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"])
    ], DeviceDetailsFemsComponent.prototype, "table", void 0);
    DeviceDetailsFemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-details-fems',
            template: __webpack_require__(/*! ./device-details-fems.component.html */ "./src/app/device-details-fems/device-details-fems.component.html"),
            styles: [__webpack_require__(/*! ./device-details-fems.component.css */ "./src/app/device-details-fems/device-details-fems.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            DialogData])
    ], DeviceDetailsFemsComponent);
    return DeviceDetailsFemsComponent;
}());



/***/ }),

/***/ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 7%;\n    font-size: 12px;\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    padding: 5px 19px;\n }\n  \n  .abc{\n  color:white\n }\n  \n  p {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n  \n  form button {\n  position: relative;\n  width: 71px;\n  margin-top: 3px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGctZnVlbC1leGNlbC1leHBvcnQvZGctZnVlbC1leGNlbC1leHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7O0VBQ0E7RUFDQztDQUNEOztFQUNBO0VBQ0MsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxrREFBa0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9kZy1mdWVsLWV4Y2VsLWV4cG9ydC9kZy1mdWVsLWV4Y2VsLWV4cG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgI1NhdmUtZGV2aWNle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6I0U2NkYwMCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTlweDtcbiB9XG4gLmFiY3tcbiAgY29sb3I6d2hpdGVcbiB9XG4gcCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC0xcmVtO1xufVxuXG5mb3JtIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcxcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">  \n  <h1 mat-dialog-title style=\"color: rgb(247, 148, 1);\">Export data Sheet</h1>\n  <hr style=\"border: 1px solid rgb(247, 148, 1);;\">\n  <form  (ngSubmit)= \"onSubmit()\" [formGroup]=\"excelDataForm\">\n    <div class=\"abc\" mat-dialog-content>\n      <!-- <p style=\"color: rgb(247, 148, 1)\">Select Start Date </p> -->\n      <mat-form-field appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\" >Start Date</mat-label>\n        <input matInput formControlName=\"startDate\" min=\"2022-11-21\" placeholder=\"Ex. 20-02-2022\" type=\"date\">\n      </mat-form-field> \n    </div>\n\n    <div class=\"abc\" mat-dialog-content>\n      <!-- <p style=\"color: rgb(247, 148, 1)\">Select End Date</p> -->\n      <mat-form-field  appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\">End Date</mat-label>\n        <input matInput formControlName=\"endDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n      </mat-form-field>\n    </div>\n  \n    <div mat-dialog-actions>\n      <button id=\"Save-device\"  type=\"Submit\">Submit</button>\n      <button  id=\"Save-device\"  (click)=\"onNoClick()\">Cancel</button>\n      \n    </div>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.ts ***!
  \************************************************************************/
/*! exports provided: DgFuelExcelExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgFuelExcelExportComponent", function() { return DgFuelExcelExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var DgFuelExcelExportComponent = /** @class */ (function () {
    function DgFuelExcelExportComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.siteId = localStorage.getItem('siteId');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.excelDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    DgFuelExcelExportComponent.prototype.ngOnInit = function () {
    };
    DgFuelExcelExportComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = { "site_id": this.siteId, "start_date": this.excelDataForm.value.startDate, "end_date": this.excelDataForm.value.endDate, };
        console.log("function called", this.excelDataForm.value);
        this.dataService.showLoader();
        this.dataService.dgFuelExcelExport(data).subscribe(function (response) {
            console.log("response : ", response);
            var date = new Date().getDate().toString() + '-' + new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString();
            console.log("date : ", date);
            var blob = response.body;
            var downloadURL = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = ("Report DG Fuel & Unit Trend_" + date + ".xlsx");
            link.click();
            _this.dialogRef.close();
            _this.dataService.hideLoader();
        });
    };
    DgFuelExcelExportComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DgFuelExcelExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dg-fuel-excel-export',
            template: __webpack_require__(/*! ./dg-fuel-excel-export.component.html */ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.html"),
            styles: [__webpack_require__(/*! ./dg-fuel-excel-export.component.css */ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], DgFuelExcelExportComponent);
    return DgFuelExcelExportComponent;
}());



/***/ }),

/***/ "./src/app/dialog-over/dialog-over.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dialog-over/dialog-over.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content{\n    position:  fixed;\n    top: 300px;\n    left: 50%;\n    width: 375px;\n    background: white;\n    margin-left: -187.5px;\n    text-align: center;\n    box-shadow: orange;\n    z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLW92ZXIvZGlhbG9nLW92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1vdmVyL2RpYWxvZy1vdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50e1xuICAgIHBvc2l0aW9uOiAgZml4ZWQ7XG4gICAgdG9wOiAzMDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDM3NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTg3LjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogb3JhbmdlO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialog-over/dialog-over.component.html":
/*!********************************************************!*\
  !*** ./src/app/dialog-over/dialog-over.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Login Error</h2> -->\n<p>{{loginerror}}</p>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/dialog-over/dialog-over.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialog-over/dialog-over.component.ts ***!
  \******************************************************/
/*! exports provided: DialogOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverComponent", function() { return DialogOverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var DialogOverComponent = /** @class */ (function () {
    function DialogOverComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loginerror = data;
    }
    DialogOverComponent.prototype.ngOnInit = function () {
    };
    DialogOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-over',
            template: __webpack_require__(/*! ./dialog-over.component.html */ "./src/app/dialog-over/dialog-over.component.html"),
            styles: [__webpack_require__(/*! ./dialog-over.component.css */ "./src/app/dialog-over/dialog-over.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverComponent);
    return DialogOverComponent;
}());



/***/ }),

/***/ "./src/app/dialog-switchdash/dialog-switchdash.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialog-switchdash/dialog-switchdash.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n}\n\n.mat-header-row {\n    min-height: 56px;\n    /* width: 1675px; */\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLXN3aXRjaGRhc2gvZGlhbG9nLXN3aXRjaGRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFJQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBLGNBQWM7O0FBQ2Q7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsNkJBQTZCOztBQUM3QjtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFDQTs7Q0FFQyxlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctc3dpdGNoZGFzaC9kaWFsb2ctc3dpdGNoZGFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNjcwcHg7XG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzojRTZFN0U3O1xuICAgIGJhY2tncm91bmQ6ICNFNkU3RTc7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuXG4vKiB0YWJsZSBTdGFydHMgKi9cbi5wYW5lbC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuXG4uaG92ZXItZWZmZWN0e1xuICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xufVxuLnN0YXR1cy1wYW5lbC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxOyAgXG4gICAgcGFkZGluZzogMTBweDtcbn0gIFxuIFxuLmNoYXJ0Qm9yZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4gICAgIFxuLyogdGFibGUgRW5kICovIFxuI2NhbmNlbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxOyAgXG59XG5cblxuLyogU2l0ZSBEZWF0aWxzIHRhYmxlIHN0YXJ0ICovXG4ucGFuZWwtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICBwYWRkaW5nOiA1cHg7ICBcbn0gIFxuLm1hdC1mb3JtLWZpZWxke1xuIFxuIGZvbnQtc2l6ZTogMTRweDtcbiB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gd2lkdGg6IDEwMCU7XG4gdGV4dC1hbGlnbjpsZWZ0O1xuIGJvcmRlci1zcGFjaW5nOiAwO1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4ubWF0LWhlYWRlci1jZWxse1xuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuIHBhZGRpbmc6IDhweDtcbiBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LWhlYWRlci1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgLyogd2lkdGg6IDE2NzVweDsgKi9cbn1cbi5oZWFkZXJSb3d7XG4gYmFja2dyb3VuZDogcmVkO1xuIHBhZGRpbmc6IDhweDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1wYWdpbmF0b3J7XG4gYmFja2dyb3VuZDogIzAwMDAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dialog-switchdash/dialog-switchdash.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialog-switchdash/dialog-switchdash.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> All Sites\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"siteid\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Site ID </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"id\" > {{row.siteid}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Name Column -->\n                          <ng-container matColumnDef=\"sitename\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"progress\" > {{row.sitename}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"sitetype\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Site Type </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"progress\" > {{row.sitetype}} </mat-cell>\n                          </ng-container>\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"switchSiteDashboard(row)\">\n                          </mat-row>\n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" ></mat-paginator>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button id=\"cancel\" mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dialog-switchdash/dialog-switchdash.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialog-switchdash/dialog-switchdash.component.ts ***!
  \******************************************************************/
/*! exports provided: DialogData, DialogSwitchdashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSwitchdashComponent", function() { return DialogSwitchdashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var DialogSwitchdashComponent = /** @class */ (function () {
    function DialogSwitchdashComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.displayedColumns = ['siteid', 'sitename', 'sitetype'];
        this.siteId = localStorage.getItem('siteId');
    }
    DialogSwitchdashComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogSwitchdashComponent.prototype.ngOnInit = function () {
        this.getCustomerSiteLists();
    };
    DialogSwitchdashComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DialogSwitchdashComponent.prototype.getCustomerSiteLists = function () {
        var _this = this;
        if (this.user_type == 1) {
            var current_customer = localStorage.getItem('id');
            console.log("current customer: ", current_customer);
            this.data = { 'customer_id': current_customer, 'site_id': this.siteId };
        }
        else {
            this.data = { 'customer_id': this.user_id, 'site_id': this.siteId };
        }
        console.log('site id in switch dashboard function', this.siteId);
        console.log("user_id", this.user_id);
        this.dataService.switchSiteDashboardApi(this.data).subscribe(function (response) {
            var sites = [];
            for (var i = 0; i <= response['data'].length - 1; i++) { /*users.push(createNewUser(i));*/
                //console.log(response['site'][i]);
                var data = response['data'][i];
                var TypeOfSite = void 0;
                var site_type = data['site_type'];
                if (site_type == '1') {
                    TypeOfSite = 'WH METERING';
                }
                else if (site_type == '2') {
                    TypeOfSite = 'WH_ENERGY SAVING';
                }
                sites.push({ "siteid": data['id'],
                    "sitename": data['site_name'],
                    'sitetype': TypeOfSite,
                });
            }
            //userData.push(users1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](sites);
            console.log(_this.dataSource);
            console.log('This is site data source' + ": " + _this.dataSource);
            _this.dataSource.paginator = _this.paginator; //mandeep
            _this.dataSource.sort = _this.sort; //mandeep
        }, function (error) { });
    };
    //Onclick function for switching a dashboard
    DialogSwitchdashComponent.prototype.switchSiteDashboard = function (row) {
        var siteType = row.sitetype;
        console.log("site type$$$$", siteType);
        var siteId = row.siteid;
        var siteName = row.sitename;
        localStorage.removeItem("energy_saving");
        localStorage.removeItem("siteId");
        localStorage.removeItem("sitename");
        localStorage.setItem('siteId', siteId);
        localStorage.setItem("sitename", siteName);
        if (localStorage.getItem("wh_metering")) {
            localStorage.removeItem("wh_metering");
        }
        if (siteType == "WH METERING") {
            localStorage.setItem("wh_metering", 'false');
            localStorage.removeItem("wh_metering");
            this.dataService.changeMessage("wh_metering");
            localStorage.setItem("wh_metering", 'true');
        }
        else if (siteType == "WH_ENERGY SAVING") {
            this.dataService.changeMessage("energy_saving");
            localStorage.setItem("energy_saving", 'true');
        }
        this.onNoClick();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], DialogSwitchdashComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DialogSwitchdashComponent.prototype, "sort", void 0);
    DialogSwitchdashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-switchdash',
            template: __webpack_require__(/*! ./dialog-switchdash.component.html */ "./src/app/dialog-switchdash/dialog-switchdash.component.html"),
            styles: [__webpack_require__(/*! ./dialog-switchdash.component.css */ "./src/app/dialog-switchdash/dialog-switchdash.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            DialogData])
    ], DialogSwitchdashComponent);
    return DialogSwitchdashComponent;
}());



/***/ }),

/***/ "./src/app/excelsheet/excelsheet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/excelsheet/excelsheet.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  #Save-device{\n    color: #ffffff;\n    background:#E66F00!important;\n    margin-left: 7%;\n    font-size: 12px;\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    padding: 5px 19px;\n }\n  \n  .abc{\n  color:white\n }\n  \n  p {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n  \n  form button {\n  position: relative;\n  width: 71px;\n  margin-top: 3px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjZWxzaGVldC9leGNlbHNoZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztFQUNBO0VBQ0M7Q0FDRDs7RUFDQTtFQUNDLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0Msa0RBQWtEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvZXhjZWxzaGVldC9leGNlbHNoZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIFxuICAjU2F2ZS1kZXZpY2V7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDojRTY2RjAwIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxOXB4O1xuIH1cbiAuYWJje1xuICBjb2xvcjp3aGl0ZVxuIH1cbiBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzFweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/excelsheet/excelsheet.component.html":
/*!******************************************************!*\
  !*** ./src/app/excelsheet/excelsheet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">  \n  <h1 mat-dialog-title style=\"color: rgb(247, 148, 1);\">Export data Sheet</h1>\n  <hr style=\"border: 1px solid rgb(247, 148, 1);;\">\n  <form  (ngSubmit)= \"onSubmit()\" [formGroup]=\"excelDataForm\">\n    <div class=\"abc\" mat-dialog-content>\n      <mat-form-field appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\" >Start Date</mat-label>\n        <input matInput formControlName=\"startDate\" min=\"2022-11-21\" placeholder=\"Ex. 20-02-2022\" type=\"date\">\n      </mat-form-field> \n    </div>\n\n    <div class=\"abc\" mat-dialog-content>\n      <mat-form-field  appearance=\"fill\">\n        <mat-label style=\"color: rgb(247, 148, 1)\">End Date</mat-label>\n        <input matInput formControlName=\"endDate\" maxlength=\"20\" placeholder=\"Ex. 20-01-2022\" type=\"date\">\n      </mat-form-field>\n    </div>\n  \n    <div mat-dialog-actions>\n      <button id=\"Save-device\"  type=\"Submit\">Submit</button>\n      <button  id=\"Save-device\"  (click)=\"onNoClick()\">Cancel</button>\n      \n    </div>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/excelsheet/excelsheet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/excelsheet/excelsheet.component.ts ***!
  \****************************************************/
/*! exports provided: ExcelsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelsheetComponent", function() { return ExcelsheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






var ExcelsheetComponent = /** @class */ (function () {
    function ExcelsheetComponent(dialog, dialogRef, data, dataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.siteId = localStorage.getItem('siteId');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.excelDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    ExcelsheetComponent.prototype.ngOnInit = function () {
        if (this.data !== null) {
            this.excelDataForm.setValue({
                startDate: this.data.from_date ? this.data.from_date : "",
                endDate: this.data.till_date ? this.data.till_date : "",
            });
        }
    };
    ExcelsheetComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = { "user_id": this.user_id, "user_type": this.user_type, "site_id": this.siteId, "from_date": this.excelDataForm.value.startDate, "end_date": this.excelDataForm.value.endDate, };
        console.log("function called", this.excelDataForm.value);
        this.dataService.showLoader();
        this.dataService.excelDataValue(data).subscribe(function (response) {
            console.log("response : ", response);
            var date = new Date().getDate().toString() + '-' + new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString();
            console.log("date : ", date);
            var blob = response.body;
            var downloadURL = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = ("energy_data" + date + ".csv");
            link.click();
            _this.dialogRef.close();
            _this.dataService.hideLoader();
        });
    };
    ExcelsheetComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExcelsheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excelsheet',
            template: __webpack_require__(/*! ./excelsheet.component.html */ "./src/app/excelsheet/excelsheet.component.html"),
            styles: [__webpack_require__(/*! ./excelsheet.component.css */ "./src/app/excelsheet/excelsheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ExcelsheetComponent);
    return ExcelsheetComponent;
}());



/***/ }),

/***/ "./src/app/expired-device-details-fems/expired-device-details-fems.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/expired-device-details-fems/expired-device-details-fems.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwaXJlZC1kZXZpY2UtZGV0YWlscy1mZW1zL2V4cGlyZWQtZGV2aWNlLWRldGFpbHMtZmVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUlBLGlCQUFpQjs7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQSw2QkFBNkI7O0FBQzdCO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUNBOztDQUVDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBQ0E7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBQ0E7SUFDRyx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtJQUNJO01BQ0UsU0FBUztNQUNUO0lBQ0Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztJQUNoQjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGFBQWE7SUFDZjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLG1CQUFtQjs7TUFFbkIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7TUFDRTtNQUNBLGNBQWM7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2V4cGlyZWQtZGV2aWNlLWRldGFpbHMtZmVtcy9leHBpcmVkLWRldmljZS1kZXRhaWxzLWZlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDY3MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6I0U2RTdFNztcbiAgICBiYWNrZ3JvdW5kOiAjRTZFN0U3O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuLyogdGFibGUgU3RhcnRzICovXG4ucGFuZWwtaGVhZGluZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTtcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cblxuLmhvdmVyLWVmZmVjdHtcbiAgICBib3JkZXItY29sb3I6ICM0QzRCNEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0Qjtcbn1cbi5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgIHBhZGRpbmc6IDEwcHg7XG59ICBcbiBcbi5jaGFydEJvcmRlcntcbiAgICB3aWR0aDogMTAwJTtcblxufVxuICAgICBcbi8qIHRhYmxlIEVuZCAqLyBcbiNjYW5jZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTsgIFxufVxuXG5cbi8qIFNpdGUgRGVhdGlscyB0YWJsZSBzdGFydCAqL1xuLnBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZzogNXB4OyAgXG59ICBcbi5tYXQtZm9ybS1maWVsZHtcbiBcbiBmb250LXNpemU6IDE0cHg7XG4gd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdGFibGUge1xuIHdpZHRoOiAxMDAlO1xuIHRleHQtYWxpZ246bGVmdDtcbiBib3JkZXItc3BhY2luZzogMDtcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLm1hdC1oZWFkZXItY2VsbHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiBwYWRkaW5nOiA4cHg7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gfVxuIC5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XG4gfVxubWF0LWNlbGw6bGFzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG59XG5cbm1hdC1jZWxsLCBtYXQtZm9vdGVyLWNlbGwsIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcbn1cbi5tYXQtaGVhZGVyLXJvdyB7XG4gICAgbWluLWhlaWdodDogNzZweDtcbn1cbi5oZWFkZXJSb3d7XG4gYmFja2dyb3VuZDogcmVkO1xuIHBhZGRpbmc6IDhweDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1wYWdpbmF0b3J7XG4gYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLm1hdC10YWJsZSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgICBwYWRkaW5nOiAxM3B4O1xuICAgIH1cbiAgXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICB9XG59XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/expired-device-details-fems/expired-device-details-fems.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/expired-device-details-fems/expired-device-details-fems.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> Total Devices Service Expired\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\" autocomplete=\"off\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"assetNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Asset No.</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Asset No.\" > {{row.assetNo}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"deviceName\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Device Name</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Device Name\" > {{row.deviceName}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"ModalNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Modal No.</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Modal No.\" > {{row.modelno}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"LocInWH\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Location in WH </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Location in WH\" > {{row.location}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"WarrentyTill\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Warranty Till</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Warranty Till\" > {{row.warrenty}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"LastService\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Last Service</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Last Service\" > {{row.last_service}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"NextService\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Next Service</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Next Service\" > {{row.next_service}} </mat-cell>\n                          </ng-container>\n\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"switchSiteDashboard(row)\">\n                          </mat-row> \n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" ></mat-paginator>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/expired-device-details-fems/expired-device-details-fems.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/expired-device-details-fems/expired-device-details-fems.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogData, ExpiredDeviceDetailsFemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredDeviceDetailsFemsComponent", function() { return ExpiredDeviceDetailsFemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var ExpiredDeviceDetailsFemsComponent = /** @class */ (function () {
    function ExpiredDeviceDetailsFemsComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.showExpiredDevices = false;
        this.displayedColumns = ['assetNo', 'deviceName', 'ModalNo', 'LocInWH', 'WarrentyTill', 'LastService', 'NextService'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
    }
    ExpiredDeviceDetailsFemsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExpiredDeviceDetailsFemsComponent.prototype.ngOnInit = function () {
        this.expiredDeviceslist();
    };
    ExpiredDeviceDetailsFemsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ExpiredDeviceDetailsFemsComponent.prototype.expiredDeviceslist = function () {
        var _this = this;
        this.showExpiredDevices = true;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.dataService.expiredDeviceslist(data).subscribe(function (response) {
            console.log('response of snapshot', response);
            var inventoryData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var inventory = response['data'][i];
                inventoryData.push({ "deviceName": inventory['deviceName'],
                    "assetNo": inventory["assetNo"],
                    "modelno": inventory["modelsNo"],
                    "location": inventory["location"],
                    "warrenty": inventory["warrentDate"],
                    "last_service": inventory["last_serviceDate"],
                    "next_service": inventory["next_serviceDate"],
                    "id": inventory["id"]
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](inventoryData);
            _this.dataSource.paginator = _this.paginator.toArray()[0];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpiredDeviceDetailsFemsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpiredDeviceDetailsFemsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"])
    ], ExpiredDeviceDetailsFemsComponent.prototype, "table", void 0);
    ExpiredDeviceDetailsFemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expired-device-details-fems',
            template: __webpack_require__(/*! ./expired-device-details-fems.component.html */ "./src/app/expired-device-details-fems/expired-device-details-fems.component.html"),
            styles: [__webpack_require__(/*! ./expired-device-details-fems.component.css */ "./src/app/expired-device-details-fems/expired-device-details-fems.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            DialogData])
    ], ExpiredDeviceDetailsFemsComponent);
    return ExpiredDeviceDetailsFemsComponent;
}());



/***/ }),

/***/ "./src/app/fanswattdata/fanswattdata.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fanswattdata/fanswattdata.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n \n /* text-align: center; */\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\n.mat-row:nth-child(2){\n    background-color:#ff7c01da;\n }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n    /* width: 1675px; */\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n        .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFuc3dhdHRkYXRhL2ZhbnN3YXR0ZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUlBLGlCQUFpQjs7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQSw2QkFBNkI7O0FBQzdCO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUNBOztDQUVDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGVBQWU7O0NBRWYsd0JBQXdCO0FBQ3pCOztBQUNBO0lBQ0kseUJBQXlCO0NBQzVCOztBQUNBO0lBQ0cseUJBQXlCO0NBQzVCOztBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUNEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0lBQ0k7TUFDRSxTQUFTO01BQ1Q7SUFDRjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7UUFDSTtNQUNGLDZCQUE2QjtNQUM3QixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsYUFBYTtJQUNmOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsbUJBQW1COztNQUVuQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtNQUNFO01BQ0EsY0FBYztJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmFuc3dhdHRkYXRhL2ZhbnN3YXR0ZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNjcwcHg7XG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzojRTZFN0U3O1xuICAgIGJhY2tncm91bmQ6ICNFNkU3RTc7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuXG4vKiB0YWJsZSBTdGFydHMgKi9cbi5wYW5lbC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuXG4uaG92ZXItZWZmZWN0e1xuICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xufVxuLnN0YXR1cy1wYW5lbC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxOyAgXG4gICAgcGFkZGluZzogMTBweDtcbn0gIFxuIFxuLmNoYXJ0Qm9yZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4gICAgIFxuLyogdGFibGUgRW5kICovIFxuI2NhbmNlbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxOyAgXG59XG5cblxuLyogU2l0ZSBEZWF0aWxzIHRhYmxlIHN0YXJ0ICovXG4ucGFuZWwtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICBwYWRkaW5nOiA1cHg7ICBcbn0gIFxuLm1hdC1mb3JtLWZpZWxke1xuIFxuIGZvbnQtc2l6ZTogMTRweDtcbiB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gd2lkdGg6IDEwMCU7XG4gdGV4dC1hbGlnbjpsZWZ0O1xuIGJvcmRlci1zcGFjaW5nOiAwO1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4ubWF0LWhlYWRlci1jZWxse1xuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuIHBhZGRpbmc6IDhweDtcbiBmb250LXNpemU6IDE2cHg7XG4gXG4gLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gfVxuIC5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XG4gfVxuLm1hdC1yb3c6bnRoLWNoaWxkKDIpe1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmN2MwMWRhO1xuIH1cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xufVxuXG5tYXQtY2VsbCwgbWF0LWZvb3Rlci1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG4ubWF0LWhlYWRlci1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XG4gICAgLyogd2lkdGg6IDE2NzVweDsgKi9cbn1cbi5oZWFkZXJSb3d7XG4gYmFja2dyb3VuZDogcmVkO1xuIHBhZGRpbmc6IDhweDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1wYWdpbmF0b3J7XG4gYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLm1hdC10YWJsZSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgICAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6MzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgICAgcGFkZGluZzogMTNweDtcbiAgICB9XG4gIFxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gICAgICBmb250LXNpemU6IC44NWVtO1xuICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgfVxufVxuICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/fanswattdata/fanswattdata.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fanswattdata/fanswattdata.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> All Fans Data\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"area\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Area Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Area Name\" > {{row.areaName}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Name Column -->\n                          <ng-container matColumnDef=\"totalfans\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Total Fans</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Total Fans\" > {{row.totalFans}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"Watt80\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >80 Watt Fans</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"80 Watt Lights\" > {{row.watt80}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"Watt100\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >100 Watt Fans</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"100 Watt Lights\" > {{row.watt100}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"totalWattLoad\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Total watt Load </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Total watt Load \" > {{row.totalWattFans}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"totalUnits\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Units(kwh) per day </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Units(kwh) per day\" > {{row.totalUnits}} </mat-cell>\n                          </ng-container>\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"switchSiteDashboard(row)\">\n                          </mat-row> \n                        </mat-table>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/fanswattdata/fanswattdata.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fanswattdata/fanswattdata.component.ts ***!
  \********************************************************/
/*! exports provided: FanswattdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FanswattdataComponent", function() { return FanswattdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-switchdash/dialog-switchdash.component */ "./src/app/dialog-switchdash/dialog-switchdash.component.ts");








var FanswattdataComponent = /** @class */ (function () {
    function FanswattdataComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.displayedColumns = ['area', 'totalfans', 'Watt80', 'Watt100', 'totalWattLoad', 'totalUnits'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.siteId = localStorage.getItem('siteId');
    }
    FanswattdataComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FanswattdataComponent.prototype.ngOnInit = function () {
        this.siteId = localStorage.getItem('siteId');
        this.fansData();
    };
    FanswattdataComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    FanswattdataComponent.prototype.fansData = function () {
        var _this = this;
        console.log('site id in switch dashboard function', this.siteId);
        this.dataService.fansData(this.data).subscribe(function (response) {
            var lightsData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data = response['data'][i];
                lightsData.push({ "areaName": data['areaName'],
                    "totalFans": data["totalFans"],
                    "watt80": data["80watt"],
                    "watt100": data["100watt"],
                    "totalWattFans": data["totalWattFans"],
                    "totalUnits": data["totalUnits"],
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](lightsData);
            _this.dataSource.sort = _this.sort.toArray()[0];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FanswattdataComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FanswattdataComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], FanswattdataComponent.prototype, "table", void 0);
    FanswattdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fanswattdata',
            template: __webpack_require__(/*! ./fanswattdata.component.html */ "./src/app/fanswattdata/fanswattdata.component.html"),
            styles: [__webpack_require__(/*! ./fanswattdata.component.css */ "./src/app/fanswattdata/fanswattdata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_6__["DialogData"]])
    ], FanswattdataComponent);
    return FanswattdataComponent;
}());



/***/ }),

/***/ "./src/app/fems-dialog/fems-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fems-dialog/fems-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlbXMtZGlhbG9nL2ZlbXMtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/fems-dialog/fems-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/fems-dialog/fems-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Do you want to Delete?</h1>\n<div mat-dialog-content>\n  <button mat-button type=\"yes\" cdkFocusInitial (click)=\"deleteRecord()\">Yes</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>No</button>\n</div>\n"

/***/ }),

/***/ "./src/app/fems-dialog/fems-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fems-dialog/fems-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: FemsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemsDialogComponent", function() { return FemsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





var FemsDialogComponent = /** @class */ (function () {
    // animal: string;
    // name: string;
    function FemsDialogComponent(dialog, dialogRef, data, DataService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.DataService = DataService;
    }
    FemsDialogComponent.prototype.ngOnInit = function () {
    };
    FemsDialogComponent.prototype.deleteRecord = function () {
        var _this = this;
        console.log("##################", this.data);
        this.DataService.deleteInventoryData(this.data).subscribe(function (response) {
            console.log("response : ", response);
            _this.dialogRef.close();
        });
    };
    FemsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FemsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fems-dialog',
            template: __webpack_require__(/*! ./fems-dialog.component.html */ "./src/app/fems-dialog/fems-dialog.component.html"),
            styles: [__webpack_require__(/*! ./fems-dialog.component.css */ "./src/app/fems-dialog/fems-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], FemsDialogComponent);
    return FemsDialogComponent;
}());



/***/ }),

/***/ "./src/app/fems/fems.component.css":
/*!*****************************************!*\
  !*** ./src/app/fems/fems.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dashboard_trakcer{\n\n   margin-top: 10px;\n   margin-left:10px;\n   margin-right: 5px;\n   font-size: 18px;\n}\n.mat-form-field {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  width: 100%;\n}\nmat-cell, mat-footer-cell, mat-header-cell {\n   flex: 1;\n   display: flex;\n   align-items: center;\n   overflow: hidden;\n   word-wrap: break-word;\n   min-height: inherit;\n   padding:4px !important;\n   text-align: center;\n}\n.mat-table[_ngcontent-c10] .mat-cell[_ngcontent-c10]:first-child {\n   margin-top: 0%;\n}\n.container-fluid {\n   background: black;\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center!important;\n}\nhr {\n    width: 95%;\n    height: 1px;\n    margin-left: 10px;\n    margin-top: 0px;\n    background-color:#666;\n\n   }\n.mat-option.mat-selected:not(.mat-option-disabled) {\n      color: #fff !important;\n  }\n.circle-title2{\n    margin-bottom: 15px;\n    text-align: center;\n\n\n     }\n.circle-title-heading{\n      position:relative;\n      height: 80px;\n      width: 80px;\n      margin: 0 auto -40px;\n      border-radius: 100%;\n      transition: all ease-in-out .3s;\n      background:#ff7a01;\n      color: #fff;\n    }\n.circle-title-heading .fa{\n       line-height: 80px;\n    }\n.circle-title-heading .fa.icon{\n      font-size: 4em;\n      padding-top: 8px;\n   }\n.box{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n\n   }\n.box2{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n      height: 140px;\n      margin-bottom: 50px;\n   }\n.box:hover{\n      border-color: #4C4B4B;\n      background-color: #4C4B4B;\n   }\n.box-heading{\n        text-transform: uppercase;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n   }\n.text-faded{\n      color:rgba(255,255,255,0.7);\n   }\n.box-number{\n      padding:5px 0 15px;\n      font-size: 26px;\n      font-weight: 700;\n      line-height: 1;\n   }\n.footer{\n      display: block;\n      padding: 5px;\n      color:rgba(255,255,255,0.5);\n      transition: all ease-in-out .3s;\n   }\n.footer:hover{\n      text-decoration: none;\n      color:rgba(255,255,255,0.5);\n      background-color: rgba(0,0,0,0.2);\n   }\n#img-ctn{\n      padding-top: 14px;\n   }\n/* Snapshot row end */\n#breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n*  breadcrump *\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n.btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n.btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n.btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n.btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n/** Default button **/\n.btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n/* The responsive part */\n.btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n.btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n.mat-input-element {\n   caret-color: #E66F00 !important;\n  }\n.mat-input-element ng-reflect-placeholder {\n   color: #E66F00 !important;\n  }\n/* === For phones =================================== */\n@media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n/* === For tablets ================================== */\n@media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n      .hide{\n         display: none;\n      }\n  }\n/* === For desktops ================================== */\n@media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n#page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n\n}\n.close {\n   float: right;\n   font-size: 1.5rem;\n   font-weight: 700;\n   line-height: 1;\n   color: white;\n   text-shadow: 0 1px 0 #fff;\n   /* opacity: .5; */\n}\n/* Customer details css start  */\n.panel-body ul.all-details{\n   font-weight: bold;\n   display: table;\n   width: 100%;\n   text-align: left;\n}\n.panel-body ul.all-details li{\n display: table-cell;\n width: 50%;\n\n\n}\n.panel-body ul.all-details li { /*changes-23/08/17*/\n   max-width: 100px;\n   word-wrap: break-word;\n}\n.panel-body.details{\n   min-height: 277px;\n   background: #222222;\n   margin: 0;\n   padding: 0;\n }\ndl, ol, p, ul {\n   margin-top: 0;\n   margin-bottom: 0.6rem;\n}\ndl[_ngcontent-c10], ol[_ngcontent-c10], ul[_ngcontent-c10] {\n   margin-top: 1px;\n   margin-bottom: 0;\n}\n/* Customer details css end  */\n/*Table css start*/\n.chngpwd-body{\n  width:100%;\n  border:1px solid #ff7a01;\n  padding-top: 15px;\n  margin-top: 55px;\n  \n}\n.card-header{\n  color: black;\n  text-align: left;\n  font-size: 18px;\n}\n.oldp{\n  margin-top: 10px;\n}\n.chpwd{\n  text-align: left;\n}\n.btn-primary {\n  background: #E66F00;\n  color: #ffffff;\n}\n.btn{\n  border: #E66F00;\n   \n}\n.chngpwd{\n  margin-top: 125px;\n}\n.charheader2{\n  margin: 5px;\n  border-top: 1px solid orangered;\n  background: orangered;\n  padding: 5px;\n  border-radius: 5px;\n\n}\n.panel-heading{\n position: relative;\n background-color: #ff7a01;\n border: 1px;\n border-radius: 3px;\n text-align: left;\n padding: 5px;\n font-size: 16px;\n}\n.mat-raised-button {\n background-color: chocolate!important;\n \n}\n.mat-icon-material-icons-mat-icon-no-color{\n color: cornsilk;\n}\n.md-raised.md-primary.md-button.md-link-ripple{\n background: #E66F00; \n color: #ffffff;\n\n}\n.heading-panel{\n  background:#ff7a01;\n  padding:5px;\n  text-align: left;\n  font-size: 16px;\n  border-radius: 3px;\n  margin-top: 12px;\n  }\n.chart-body{\n  border:1px solid #ff7a01;\n  padding: 10px;\n  position: relative;\n}\n.btn-primary {\n  background: #E66F00;\n  color: #ffffff;\n}\n.btn{\n  border: #E66F00;\n   \n}\n/*Table css End*/\ntable {\n  width: 100%;\n}\n#add-device{\n  color: white;\n  background:#b99073!important;\n  margin-left: 100px;\n\n}\n#add-device-Type{\n  color: white;\n  background:#b99073!important;\n  margin-left: 70px;\n}\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n  color: #E66F00;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVtcy9mZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztHQUVHLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGVBQWU7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0dBQ0csT0FBTztHQUNQLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsc0JBQXNCO0dBQ3RCLGtCQUFrQjtBQUNyQjtBQUNBO0dBQ0csY0FBYztBQUNqQjtBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjs7R0FFdEI7QUFFQTtNQUNHLHNCQUFzQjtFQUMxQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0tBR2pCO0FBQ0Q7TUFDRSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0FBQ0E7T0FDRyxpQkFBaUI7SUFDcEI7QUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7R0FDbkI7QUFDQztNQUNFLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGtCQUFrQjs7R0FFckI7QUFFQTtNQUNHLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO0dBQ3RCO0FBQ0E7TUFDRyxxQkFBcUI7TUFDckIseUJBQXlCO0dBQzVCO0FBQ0E7UUFDSyx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixtQkFBbUI7R0FDeEI7QUFDQTtNQUNHLDJCQUEyQjtHQUM5QjtBQUNBO01BQ0csa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztHQUNqQjtBQUNBO01BQ0csY0FBYztNQUNkLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsK0JBQStCO0dBQ2xDO0FBQ0E7TUFDRyxxQkFBcUI7TUFDckIsMkJBQTJCO01BQzNCLGlDQUFpQztHQUNwQztBQUNBO01BQ0csaUJBQWlCO0dBQ3BCO0FBRUgscUJBQXFCO0FBRXJCO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixTQUFTO0dBQ1QsV0FBVztHQUNYLG1CQUFtQjtBQUN0QjtBQUdBOzs7SUFHSSxZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFDQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNFLCtCQUErQjtFQUNqQztBQUdBLHdCQUF3QjtBQUV4QjtNQUNJLGlDQUFpQztNQUNqQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7R0FDQywrQkFBK0I7RUFDaEM7QUFFQTtHQUNDLHlCQUF5QjtFQUMxQjtBQUNBLHVEQUF1RDtBQUN2RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZUFBZTtNQUNuQjtFQUNKO0FBRUEsdURBQXVEO0FBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7TUFDQTtTQUNHLGFBQWE7TUFDaEI7RUFDSjtBQUVBLHdEQUF3RDtBQUN4RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO0VBQ0o7QUFDQTtHQUNDLFdBQVc7R0FDWCw4QkFBOEI7R0FDOUIsbUJBQW1COztBQUV0QjtBQUNBO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsY0FBYztHQUNkLFlBQVk7R0FDWix5QkFBeUI7R0FDekIsaUJBQWlCO0FBQ3BCO0FBQ0EsZ0NBQWdDO0FBQ2hDO0dBQ0csaUJBQWlCO0dBQ2pCLGNBQWM7R0FDZCxXQUFXO0dBQ1gsZ0JBQWdCO0FBQ25CO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTs7O0FBR1g7QUFDQSxnQ0FBZ0MsbUJBQW1CO0dBQ2hELGdCQUFnQjtHQUNoQixxQkFBcUI7QUFDeEI7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixtQkFBbUI7R0FDbkIsU0FBUztHQUNULFVBQVU7Q0FDWjtBQUNBO0dBQ0UsYUFBYTtHQUNiLHFCQUFxQjtBQUN4QjtBQUVBO0dBQ0csZUFBZTtHQUNmLGdCQUFnQjtBQUNuQjtBQUdDLDhCQUE4QjtBQUk5QixrQkFBa0I7QUFFbkI7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCO0FBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjs7QUFFcEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHFDQUFxQzs7QUFFdEM7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjOztBQUVmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtBQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUVBLGdCQUFnQjtBQUloQjtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZlbXMvZmVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGFzaGJvYXJkX3RyYWtjZXJ7XG5cbiAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICBmb250LXNpemU6IDE4cHg7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxsLCBtYXQtZm9vdGVyLWNlbGwsIG1hdC1oZWFkZXItY2VsbCB7XG4gICBmbGV4OiAxO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgIHBhZGRpbmc6NHB4ICFpbXBvcnRhbnQ7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0LXRhYmxlW19uZ2NvbnRlbnQtYzEwXSAubWF0LWNlbGxbX25nY29udGVudC1jMTBdOmZpcnN0LWNoaWxkIHtcbiAgIG1hcmdpbi10b3A6IDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjY2O1xuXG4gICB9XG5cbiAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2lyY2xlLXRpdGxlMntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG4gICAgIH1cbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmd7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gLTQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgICAgIGJhY2tncm91bmQ6I2ZmN2EwMTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmcgLmZhe1xuICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmcgLmZhLmljb257XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICB9XG4gICAgLmJveHtcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgIH1cblxuICAgLmJveDJ7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICB9XG4gICAuYm94OmhvdmVye1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0QjtcbiAgIH1cbiAgIC5ib3gtaGVhZGluZ3tcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICB9XG4gICAudGV4dC1mYWRlZHtcbiAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgIH1cbiAgIC5ib3gtbnVtYmVye1xuICAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgfVxuICAgLmZvb3RlcntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgIH1cbiAgIC5mb290ZXI6aG92ZXJ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gICB9XG4gICAjaW1nLWN0bntcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgfVxuXG4vKiBTbmFwc2hvdCByb3cgZW5kICovXG5cbiNicmVhZGNydW1ie1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgei1pbmRleDogOTk5O1xuICAgdG9wOiA1MHB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xufVxuXG5cbiogIGJyZWFkY3J1bXAgKlxuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMzMDMwMzA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbGVmdDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICB9XG5cbiAgLmJ0bi1icmVhZGNydW1iIC5idG4ge1xuICAgIHBhZGRpbmc6NnB4IDEycHggNnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggNnB4IDZweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggMThweCA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLyoqIERlZmF1bHQgYnV0dG9uICoqL1xuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bi5idG4tZGVmYXVsdDpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICB9XG5cblxuICAvKiBUaGUgcmVzcG9uc2l2ZSBwYXJ0ICovXG5cbiAgLmJ0bi1icmVhZGNydW1iID4gKiA+IGRpdiB7XG4gICAgICAvKiBXaXRoIGxlc3M6IC50ZXh0LW92ZXJmbG93KCk7ICovXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtY2hpbGQobisyKSB7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgIGNhcmV0LWNvbG9yOiAjRTY2RjAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQgbmctcmVmbGVjdC1wbGFjZWhvbGRlciB7XG4gICBjb2xvcjogI0U2NkYwMCAhaW1wb3J0YW50O1xuICB9XG4gIC8qID09PSBGb3IgcGhvbmVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbisyKSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH1cbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICB9XG4gIH1cblxuICAvKiA9PT0gRm9yIHRhYmxldHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzQpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfVxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICAuaGlkZXtcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gIH1cblxuICAvKiA9PT0gRm9yIGRlc2t0b3BzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzYpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfVxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICB9XG4gIH1cbiAgI3BhZ2Utd3JhcHBlciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDEzMHB4IDI1cHggMTMwcHggMjVweDtcbiAgIGJhY2tncm91bmQ6ICMwRjBGMEY7XG5cbn1cbi5jbG9zZSB7XG4gICBmbG9hdDogcmlnaHQ7XG4gICBmb250LXNpemU6IDEuNXJlbTtcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICBsaW5lLWhlaWdodDogMTtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XG4gICAvKiBvcGFjaXR5OiAuNTsgKi9cbn1cbi8qIEN1c3RvbWVyIGRldGFpbHMgY3NzIHN0YXJ0ICAqL1xuLnBhbmVsLWJvZHkgdWwuYWxsLWRldGFpbHN7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGRpc3BsYXk6IHRhYmxlO1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhbmVsLWJvZHkgdWwuYWxsLWRldGFpbHMgbGl7XG4gZGlzcGxheTogdGFibGUtY2VsbDtcbiB3aWR0aDogNTAlO1xuXG5cbn1cbi5wYW5lbC1ib2R5IHVsLmFsbC1kZXRhaWxzIGxpIHsgLypjaGFuZ2VzLTIzLzA4LzE3Ki9cbiAgIG1heC13aWR0aDogMTAwcHg7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucGFuZWwtYm9keS5kZXRhaWxze1xuICAgbWluLWhlaWdodDogMjc3cHg7XG4gICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiB9XG4gZGwsIG9sLCBwLCB1bCB7XG4gICBtYXJnaW4tdG9wOiAwO1xuICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuXG5kbFtfbmdjb250ZW50LWMxMF0sIG9sW19uZ2NvbnRlbnQtYzEwXSwgdWxbX25nY29udGVudC1jMTBdIHtcbiAgIG1hcmdpbi10b3A6IDFweDtcbiAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuIC8qIEN1c3RvbWVyIGRldGFpbHMgY3NzIGVuZCAgKi9cblxuXG5cbiAvKlRhYmxlIGNzcyBzdGFydCovXG5cbi5jaG5ncHdkLWJvZHl7XG4gIHdpZHRoOjEwMCU7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG4gIFxufVxuXG5cbi5jYXJkLWhlYWRlcntcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ub2xkcHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jaHB3ZHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNFNjZGMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bntcbiAgYm9yZGVyOiAjRTY2RjAwO1xuICAgXG59XG4uY2huZ3B3ZHtcbiAgbWFyZ2luLXRvcDogMTI1cHg7XG59XG5cblxuLmNoYXJoZWFkZXIye1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuLnBhbmVsLWhlYWRpbmd7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gYm9yZGVyOiAxcHg7XG4gYm9yZGVyLXJhZGl1czogM3B4O1xuIHRleHQtYWxpZ246IGxlZnQ7XG4gcGFkZGluZzogNXB4O1xuIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlIWltcG9ydGFudDtcbiBcbn1cbi5tYXQtaWNvbi1tYXRlcmlhbC1pY29ucy1tYXQtaWNvbi1uby1jb2xvcntcbiBjb2xvcjogY29ybnNpbGs7XG59XG4ubWQtcmFpc2VkLm1kLXByaW1hcnkubWQtYnV0dG9uLm1kLWxpbmstcmlwcGxle1xuIGJhY2tncm91bmQ6ICNFNjZGMDA7IFxuIGNvbG9yOiAjZmZmZmZmO1xuXG59XG4uaGVhZGluZy1wYW5lbHtcbiAgYmFja2dyb3VuZDojZmY3YTAxO1xuICBwYWRkaW5nOjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuLmNoYXJ0LWJvZHl7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIFxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogI0U2NkYwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRue1xuICBib3JkZXI6ICNFNjZGMDA7XG4gICBcbn1cblxuLypUYWJsZSBjc3MgRW5kKi9cblxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhZGQtZGV2aWNle1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6I2I5OTA3MyFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcblxufVxuI2FkZC1kZXZpY2UtVHlwZXtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiNiOTkwNzMhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLm1hdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI0U2NkYwMDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/fems/fems.component.html":
/*!******************************************!*\
  !*** ./src/app/fems/fems.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" >\n  <div id=\"bc2\" style=\"left: 1% !important\" class=\"btn-group btn-breadcrumb\">\n    <a (click)=\"home()\" *ngIf=\"super_admin_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>  \n    <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n    <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\"><div >Customer Page</div></a>\n    <a (click)=\"sitePage()\" *ngIf=\"site_dash\" class=\"btn btn-default\">Site Page</a>\n</div>\n</div>\n<div  id=\"page-wrapper\" class=\"container-fluid\">\n\n<div class=\"row\">\n<div class=\"dashboard_trakcer\"> Aviconn Fire Equipment Management System </div>\n<hr>\n        <!-- 1st snapshot start -->\n        <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n            <div class=\"circle-title2\">\n                <div class=\"circle-title-heading\">\n                    <i class=\"fa fa-bell fa-fw fa-3x\"></i>\n                </div>\n                <div class=\"box\" >\n                    <div class=\"box-heading text-faded\">Total Devices</div>\n\n                    <div class=\"box-number text-faded\"> {{totalDevices}}</div>\n                </div>\n            </div>\n        </div>\n\n\n  <!-- 1st snapshot end -->\n\n\n  <!-- 2nd snapshot start -->\n  <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n  <div class=\"circle-title2\">\n  <div class=\"circle-title-heading\">\n  <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n  </div>\n  <div class=\"box\" style=\"cursor: pointer;\" (click)=\"warrentyDeviceData()\">\n  <div class=\"box-heading text-faded\" > # Devices Warranty Expired</div>\n\n  <div class=\"box-number text-faded\">{{warrenty}}\n  </div>\n  </div>\n  </div>\n\n  </div>\n\n\n  <!-- 2nd snapshot end -->\n\n  <!-- 3rd snapshot start -->\n  <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n  <div class=\"circle-title2\">\n  <div class=\"circle-title-heading\">\n  <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n  </div>\n  <div class=\"box\" style=\"cursor: pointer;\" (click)=\"expiredDeviceData()\">\n  <div class=\"box-heading text-faded\"># Devices Service Expired</div>\n\n  <div class=\"box-number text-faded\">{{expiry}}\n  </div>\n\n  </div>\n  </div>\n\n  </div>\n\n\n  <!-- 3rd snapshot end -->\n\n  <!-- 4th snapshot start -->\n  <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n  <div class=\"circle-title2\">\n  <div class=\"circle-title-heading\">\n  <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n  </div>\n  <div class=\"box\">\n  <div class=\"box-heading text-faded\">Mail History</div>\n\n  <div class=\"box-number text-faded\">0</div>\n\n  </div>\n  </div>\n\n  </div>\n  </div>\n\n\n  <div class=\"row\" >\n    <div class=\"col-sm-12 \">\n    <div class=\"row\"></div>\n    <div class=\"panel-heading\">\n    <div class=\"row\">\n    <div class=\"col-md-9\">\n      <i class=\"fa fa-bar-chart-o\"></i> Device Type List\n    </div>\n    <div class=\"col-md-3\">\n        <button mat-raised-button id=\"add-device-Type\"(click)=\"addDevType()\">Add-Device-Type</button>\n    </div>\n    </div>\n  \n    </div>\n    <div class=\"chart-body\">\n      <div class=\"example-header\" fxLayout=\"row\">                  \n          </div> \n          <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"femsAddDevTypeDataSource\">\n          \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"serialNo\">\n                <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                <td mat-cell *matCellDef=\"let row; let i = index;\"> {{(i+1) + (mypaginator.pageIndex *mypaginator.pageSize)}} </td>\n              </ng-container>\n          \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"devName\">\n                <th mat-header-cell *matHeaderCellDef> Device Name </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.devName}} </td>\n              </ng-container>\n          \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"deviceCat\">\n                <th mat-header-cell *matHeaderCellDef>Device Category</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.deviceCat}} </td>\n              </ng-container>\n                   <!-- Symbol Column -->\n                   <ng-container matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\">\n                    </mat-cell>\n                </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns2; \"(click)=\"DeviceListTable(row)\" ></tr>\n            </table>\n          \n            <mat-paginator #mypaginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons >\n            </mat-paginator>\n         </div>\n      </div>\n      </div>\n    </div> \n\n   \n<br>\n\n  \n  <div *ngIf=\"showDevList\">\n  <div class=\"row\" >\n  <div class=\"col-sm-12 \">\n  <div class=\"row\"></div>\n  <div class=\"panel-heading\">\n  <div class=\"row\">\n  <div class=\"col-md-9\">\n    <i class=\"fa fa-bar-chart-o\"></i> Detailed Device info\n  </div>\n  <div class=\"col-md-3\">\n      <button mat-raised-button id=\"add-device\"  (click)=\"addDevice()\">Add-Device</button>\n  </div>\n  </div>\n\n  </div>\n  <div class=\"chart-body\">\n    <div class=\"example-header\" fxLayout=\"row\"> \n      <mat-form-field >\n        <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything here...\" autocomplete=\"off\">\n      </mat-form-field>\n    </div> \n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"femsDataSource\">\n        \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"serialNo\">\n              <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n              <td mat-cell *matCellDef=\"let row; let i = index;\"> {{(i+1) + (mypaginator.pageIndex *mypaginator.pageSize)}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"assetNo\">\n              <th mat-header-cell *matHeaderCellDef> Asset No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.assetNo}} </td>\n            </ng-container>\n        \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"deviceName\">\n              <th mat-header-cell *matHeaderCellDef> Device Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.deviceName}} </td>\n            </ng-container>\n        \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"updatedBy\">\n              <th mat-header-cell *matHeaderCellDef> Model No </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.updatedBy}} </td>\n            </ng-container>\n        \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"LocInWH\">\n              <th mat-header-cell *matHeaderCellDef> Location in WH </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n            </ng-container>\n               <!-- Symbol Column -->\n               <ng-container matColumnDef=\"WarrentyTill\">\n                <th mat-header-cell *matHeaderCellDef> Warranty Till </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.warrenty}} </td>\n              </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"LastService\">\n                  <th mat-header-cell *matHeaderCellDef> Last Service </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.last_service}} </td>\n                </ng-container>\n                  <!-- Symbol Column -->\n               <ng-container matColumnDef=\"NextService\">\n                <th mat-header-cell *matHeaderCellDef> Next Service </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.next_service}} </td>\n              </ng-container>\n              <ng-container matColumnDef=\"ModalNo\">\n                <th mat-header-cell *matHeaderCellDef> Updated By</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.modelno}} </td>\n              </ng-container>\n              \n                 <!-- Symbol Column -->\n                 <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\">\n                    \n                      <button mat-icon-button color=\"accent\" (click)=\"editData(row)\"><mat-icon>edit</mat-icon></button>\n                      <!-- <button mat-icon-button color=\"accent\" (click)=\"AddDevice()\">\n                        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n                        </button> -->\n                        <button mat-icon-button color=\"accent\" (click)=\"deleteData(row)\">\n                          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                          </button>\n                  </mat-cell>\n              </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        \n          <mat-paginator #mypaginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons >\n          </mat-paginator>\n       </div>\n        \n    </div>\n    </div>\n  </div>     \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/fems/fems.component.ts":
/*!****************************************!*\
  !*** ./src/app/fems/fems.component.ts ***!
  \****************************************/
/*! exports provided: FemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemsComponent", function() { return FemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _fems_dialog_fems_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fems-dialog/fems-dialog.component */ "./src/app/fems-dialog/fems-dialog.component.ts");
/* harmony import */ var _add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-device-dialog/add-device-dialog.component */ "./src/app/add-device-dialog/add-device-dialog.component.ts");
/* harmony import */ var _add_devtype_dialog_add_devtype_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-devtype-dialog/add-devtype-dialog.component */ "./src/app/add-devtype-dialog/add-devtype-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _device_details_fems_device_details_fems_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../device-details-fems/device-details-fems.component */ "./src/app/device-details-fems/device-details-fems.component.ts");
/* harmony import */ var _expired_device_details_fems_expired_device_details_fems_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../expired-device-details-fems/expired-device-details-fems.component */ "./src/app/expired-device-details-fems/expired-device-details-fems.component.ts");












var FemsComponent = /** @class */ (function () {
    function FemsComponent(dialog, router, DataService) {
        this.dialog = dialog;
        this.router = router;
        this.DataService = DataService;
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.displayedColumns = ['serialNo', 'assetNo', 'deviceName', 'updatedBy', 'LocInWH', 'WarrentyTill', 'LastService', 'NextService', 'ModalNo', 'actions'];
        this.displayedColumns2 = ['serialNo', 'devName', 'deviceCat', 'actions'];
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.site_dash = false;
        this.customer_home = false;
        this.super_admin_home = false;
        this.customer_name = false;
        this.isShown = false;
    }
    FemsComponent.prototype.applyFilter = function (filterValue) {
        this.femsDataSource.filter = filterValue.trim().toLowerCase();
    };
    FemsComponent.prototype.ngOnInit = function () {
        this.fetchfireDeviceTypeData();
        this.fireDeviceSnapshotApi();
    };
    FemsComponent.prototype.fireDeviceSnapshotApi = function () {
        var _this = this;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.DataService.fireDeviceSnapshotApi(data).subscribe(function (response) {
            console.log('response of snapshot', response);
            _this.totalDevices = response['totalDevices'];
            _this.warrenty = response['warrenty'];
            _this.expiry = response['expiredDevice'];
        });
    };
    /*Below is the api binding for device fetch device list data from database*/
    FemsComponent.prototype.fireDevicefetchdata = function (row) {
        var _this = this;
        console.log('%%%%%%%%%%%%%%%%%%%%', row);
        var row_id = row.row_id;
        this.devName = row.devName;
        if (this.devName == undefined) {
            this.devName = localStorage.getItem('devName');
        }
        else {
            localStorage.setItem('devName', this.devName);
        }
        console.log("Device Name going to set is : ", this.devName);
        localStorage.setItem('row_id', row_id);
        console.log("Row id going to set is : ", row_id);
        // let data1 = {"devName" :  localStorage.getItem("devName")}
        var data1 = { "row_id": row_id };
        console.log("Row id in data1 set is : ", data1);
        this.DataService.fireDevicefetchdata(data1).subscribe(function (response) {
            console.log("response of fireDevicefetchdata", response);
            var inventoryData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var inventory = response['data'][i];
                inventoryData.push({ "deviceName": inventory['deviceName'],
                    "assetNo": inventory["assetNo"],
                    "modelno": inventory["modelsNo"],
                    "location": inventory["location"],
                    "warrenty": inventory["warrentDate"],
                    "last_service": inventory["last_serviceDate"],
                    "next_service": inventory["next_serviceDate"],
                    "updatedBy": inventory["updatedby"],
                    "id": inventory["id"]
                });
            }
            _this.femsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](inventoryData);
            _this.femsDataSource.paginator = _this.paginator.toArray()[1];
        });
    };
    /*Below is the api binding for device fetch device type data from database*/
    FemsComponent.prototype.fetchfireDeviceTypeData = function () {
        var _this = this;
        var data3 = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.DataService.fetchfireDeviceTypeData(data3).subscribe(function (response) {
            console.log("response of fetchfireDeviceTypeData list", response);
            var deviceTypeData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var devTypeList = response['data'][i];
                deviceTypeData.push({ "devName": devTypeList['deviceName'],
                    "deviceCat": devTypeList["categories"],
                    "row_id": devTypeList["row_id"],
                });
            }
            _this.femsAddDevTypeDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](deviceTypeData);
            _this.femsAddDevTypeDataSource.paginator = _this.paginator.toArray()[0];
            _this.femsAddDevTypeDataSource.sort = _this.sort.toArray()[0];
        });
    };
    FemsComponent.prototype.addDevice = function () {
        var _this = this;
        console.log("Device saved successfully", this.devName);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        dialogConfig.data = { "deviceName": localStorage.getItem('devName') };
        var dialogRef = this.dialog.open(_add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDeviceDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("add device closed");
            _this.fireDevicefetchdata({ "row_id": localStorage.getItem("row_id") });
        });
    };
    FemsComponent.prototype.editData = function (row) {
        var _this = this;
        console.log("Device saved successfully");
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        dialogConfig.data = row;
        var dialogRef = this.dialog.open(_add_device_dialog_add_device_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDeviceDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("add device closed");
            _this.fireDevicefetchdata({ "row_id": localStorage.getItem("row_id") });
        });
    };
    FemsComponent.prototype.addDevType = function () {
        var _this = this;
        console.log("Device typed dialog box open successfully");
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        var dialogRef = this.dialog.open(_add_devtype_dialog_add_devtype_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddDevtypeDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("device type after closed");
            _this.fetchfireDeviceTypeData();
        });
    };
    FemsComponent.prototype.deleteData = function (row) {
        var _this = this;
        console.log("row data : ", row);
        var data = { "id": row.id };
        var dialogRef = this.dialog.open(_fems_dialog_fems_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FemsDialogComponent"], {
            width: "40%",
            data: data,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var devId = localStorage.getItem("row_id");
            _this.fireDevicefetchdata({ "row_id": devId });
        });
    };
    FemsComponent.prototype.baseline = function () {
        console.log("baseline html hit");
        this.DataService.changeMessage("fems");
        localStorage.setItem("fems-page", 'true');
    };
    FemsComponent.prototype.warrentyDeviceData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        this.dialog.open(_device_details_fems_device_details_fems_component__WEBPACK_IMPORTED_MODULE_9__["DeviceDetailsFemsComponent"], dialogConfig);
    };
    FemsComponent.prototype.expiredDeviceData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        this.dialog.open(_expired_device_details_fems_expired_device_details_fems_component__WEBPACK_IMPORTED_MODULE_10__["ExpiredDeviceDetailsFemsComponent"], dialogConfig);
    };
    FemsComponent.prototype.DeviceListTable = function (row) {
        this.showDevList = true;
        this.fireDevicefetchdata(row);
    };
    FemsComponent.prototype.DeviceListClose = function () {
        this.showDevList = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FemsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FemsComponent.prototype, "sort", void 0);
    FemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fems',
            template: __webpack_require__(/*! ./fems.component.html */ "./src/app/fems/fems.component.html"),
            styles: [__webpack_require__(/*! ./fems.component.css */ "./src/app/fems/fems.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]])
    ], FemsComponent);
    return FemsComponent;
}());



/***/ }),

/***/ "./src/app/fire-pump-alarm/fire-pump-alarm.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fire-pump-alarm/fire-pump-alarm.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row:hover .mat-cell .customer-table{\n   color: #0a0a09fd;\n   font-size: large;\n }\n \n \n .mat-row:hover .mat-cell{\n   color: #ff6600;\n   font-size: large;\n }\n \n \n /*------new end-----*/\n \n \n .dashboard_trakcer{\n    \n   margin-top: 10px;\n   margin-left:10px;\n   margin-right: 5px;\n   font-size: 18px;\n }\n \n \n hr {\n    width: 95%;\n    height: 1px;\n    margin-left: 10px;\n    margin-top: 0px;\n    background-color:#666;\n    \n   }\n \n \n .mat-option.mat-selected:not(.mat-option-disabled) {\n      color: #ffffff !important;\n  }\n \n \n /* Snapshot row start */\n \n \n #alarm{\n  padding-bottom: 78px; \n  padding-top: 32px;\n  font-size: 44px;\n }\n \n \n .circle-title2{\n    margin-bottom: 15px; \n    text-align: center;\n    \n    \n     }\n \n \n .circle-title-heading{\n      position:relative; \n      height: 80px; \n      width: 80px;\n      margin: 0 auto -40px;\n      border-radius: 100%;\n      transition: all ease-in-out .3s;\n      background:#ff7a01;\n      color: #fff;\n    }\n \n \n .circle-title-heading .fa{\n       line-height: 80px;\n    }\n \n \n .circle-title-heading .fa.icon{\n      font-size: 4em;\n      padding-top: 8px;\n   }\n \n \n .box{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n    \n   }\n \n \n .box2{\n      padding-top: 50px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n      border-radius: 5px;\n      height: 140px;\n      margin-bottom: 50px;\n   }\n \n \n .box:hover{\n      border-color: #4C4B4B;\n      background-color: #4C4B4B;\n   }\n \n \n .box-heading{\n        text-transform: uppercase;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        font-size: 18px;\n   }\n \n \n .text-faded{\n      color:rgba(255,255,255,0.7);\n   }\n \n \n .box-number{\n      padding:5px 0 15px;\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 2;\n     \n   }\n \n \n .footer{\n      display: block;\n      padding: 5px;\n      color:rgba(255,255,255,0.5);\n      transition: all ease-in-out .3s;\n   }\n \n \n .footer:hover{\n      text-decoration: none;\n      color:rgba(255,255,255,0.5);\n      background-color: rgba(0,0,0,0.2);\n   }\n \n \n #img-ctn{\n      padding-top: 14px;\n   }\n \n \n /* Snapshot row end */\n \n \n /* status and energy power status row Starts */\n \n \n .panel-heading{\n   position: relative;\n \n   background-color: #ff7a01;\n   \n   border: 1px;\n   border-radius: 3px;\n   text-align: left;\n   padding: 5px;\n   font-size: 16px;\n }\n \n \n .hover-effect{\n   border-color: #4C4B4B;\n      background-color: #4C4B4B;\n }\n \n \n .status-panel-body{\n       \n       width:100%;\n       background-color:black;\n       position:relative;\n       border-radius:3px; \n       border:1px solid #ff7a01;  \n       padding: 10px;\n       }\n \n \n .chartBorder{\n         width: 100%;\n \n     \n     }\n \n \n /* status and energy power status row End */\n \n \n /* Customer detail table start */\n \n \n .panel-body{\n      width:100%;\n      border:1px solid #ff7a01;\n      padding: 5px;  \n }\n \n \n mat-form-field{\n   \n   font-size: 14px;\n   width: 100%;\n }\n \n \n table {\n   width: 100%;\n   text-align:left;\n   border-spacing: 0;\n   border-collapse: collapse;\n }\n \n \n .mat-header-cell{\n   background-color: black;\n   padding: 8px;\n   font-size: 16px;\n }\n \n \n .mat-cell {\n   font-size: 12px;\n   border-right: 1px solid #222;\n   padding: 10px;\n }\n \n \n .headerRow{\n   background: red;\n   padding: 8px;\n   text-align: center;\n   font-size: 16px;\n }\n \n \n .mat-paginator{\n   background: #000000;\n }\n \n \n th {\n   background-color: #000000;\n   padding: 8px;\n   text-align: center;\n }\n \n \n td{    \n   padding:8px;\n }\n \n \n .mat-row:nth-child(even){\n   background-color: #696969;\n }\n \n \n .mat-row:nth-child(odd){\n   background-color: #3F3F3F;\n }\n \n \n .mat-table .mat-cell:last-child{\n   border-bottom: 0;\n }\n \n \n /* Customer detail table end */\n \n \n /* Energy status graph start */\n \n \n .heading-panel{\n   background:#ff7a01;\n   padding:5px;\n   text-align: left;\n   font-size: 16px;\n   border-radius: 3px;\n   margin-top: 12px;\n   }\n \n \n .chart-body{\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n }\n \n \n /* Energy status graph end */\n \n \n .chngpwd-body{\n   width:100%;\n   border:1px solid #ff7a01;\n   padding-top: 15px;\n   margin-top: 55px;\n   \n }\n \n \n .card-header{\n   color: black;\n   text-align: left;\n   font-size: 18px;\n }\n \n \n .oldp{\n   margin-top: 10px;\n }\n \n \n .chpwd{\n   text-align: left;\n }\n \n \n .btn-primary {\n   background: #E66F00;\n   color: #ffffff;\n }\n \n \n .btn{\n   border: #E66F00;\n  \n }\n \n \n .chngpwd{\n   margin-top: 125px;\n }\n \n \n .charheader2{\n   margin: 5px;\n   border-top: 1px solid orangered;\n   background: orangered;\n   padding: 5px;\n   border-radius: 5px;\n \n }\n \n \n /*  Shahid */\n \n \n #breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n }\n \n \n /* Shahid Start for Breadcrum */\n \n \n *  breadcrump *\n \n .btn-breadcrumb .btn:not(:last-child):after {\n     content: \" \";\n     display: block;\n     width: 0;\n     height: 0;\n     border-top: 17px solid transparent;\n     border-bottom: 17px solid transparent;\n     border-left: 10px solid #303030;\n     position: absolute;\n     top: 50%;\n     margin-top: -17px;\n     left: 100%;\n     z-index: 3;\n     color: #fff;\n   }\n \n \n .btn-breadcrumb .btn:not(:last-child):before {\n     content: \" \";\n     display: block;\n     width: 0;\n     height: 0;\n     border-top: 17px solid transparent;\n     border-bottom: 17px solid transparent;\n     border-left: 10px solid rgb(173, 173, 173);\n     position: absolute;\n     top: 50%;\n     margin-top: -17px;\n     margin-left: 1px;\n     left: 100%;\n     z-index: 3;\n   }\n \n \n .btn-breadcrumb .btn {\n     padding:6px 12px 6px 24px;\n     background: #303030;\n     color: #fff;\n   }\n \n \n .btn-breadcrumb .btn:first-child {\n     padding:6px 6px 6px 10px;\n     background: #303030;\n     color: #fff;\n   }\n \n \n .btn-breadcrumb .btn:last-child {\n     padding:6px 18px 6px 24px;\n     background: #303030;\n     color: #fff;\n   }\n \n \n /** Default button **/\n \n \n .btn-breadcrumb .btn.btn-default:not(:last-child):after {\n     border-left: 10px solid #303030;\n   }\n \n \n /* The responsive part */\n \n \n .btn-breadcrumb > * > div {\n       /* With less: .text-overflow(); */\n       white-space: nowrap;\n       overflow: hidden;\n       text-overflow: ellipsis;\n   }\n \n \n .btn-breadcrumb > *:nth-child(n+2) {\n     display:none;\n   }\n \n \n .mat-input-element {\n    caret-color: #E66F00 !important;\n   }\n \n \n .mat-input-element ng-reflect-placeholder {\n    color: #E66F00 !important;\n   }\n \n \n /* === For phones =================================== */\n \n \n @media (max-width: 767px) {\n       .btn-breadcrumb > *:nth-last-child(-n+2) {\n           display:block;\n       }\n       .btn-breadcrumb > * div {\n           max-width: 60px;\n       }\n   }\n \n \n /* === For tablets ================================== */\n \n \n @media (min-width: 768px) and (max-width:991px) {\n       .btn-breadcrumb > *:nth-last-child(-n+4) {\n           display:block;\n       }\n       .btn-breadcrumb > * div {\n           max-width: 100px;\n       }\n       .hide{\n          display: none;\n       }\n   }\n \n \n /* === For desktops ================================== */\n \n \n @media (min-width: 992px) {\n       .btn-breadcrumb > *:nth-last-child(-n+6) {\n           display:block;\n       }\n       .btn-breadcrumb > * div {\n           max-width: 170px;\n       }\n   }\n \n \n /* End for Breadcrum */\n \n \n #page-wrapper {\n   width: 100%;\n   padding: 110px 25px 110px 25px;\n   background: #0F0F0F;\n }\n \n \n @media (min-width: 992px) {\n  .col-lg-2 {\n   flex: 0 0 19.666667%;\n   max-width: 19.666667%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZS1wdW1wLWFsYXJtL2ZpcmUtcHVtcC1hbGFybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZ0JBQWdCO0dBQ2hCLGdCQUFnQjtDQUNsQjs7O0NBR0E7R0FDRSxjQUFjO0dBQ2QsZ0JBQWdCO0NBQ2xCOzs7Q0FFQSxxQkFBcUI7OztDQUVyQjs7R0FFRSxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixlQUFlO0NBQ2pCOzs7Q0FFQTtJQUNHLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7O0dBRXRCOzs7Q0FFQTtNQUNHLHlCQUF5QjtFQUM3Qjs7O0NBRUEsdUJBQXVCOzs7Q0FDeEI7RUFDQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7OztDQUNDO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0tBR2pCOzs7Q0FDRDtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osV0FBVztNQUNYLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsK0JBQStCO01BQy9CLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7OztDQUNBO09BQ0csaUJBQWlCO0lBQ3BCOzs7Q0FDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7R0FDbkI7OztDQUNDO01BQ0UsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIsa0JBQWtCOztHQUVyQjs7O0NBRUE7TUFDRyxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQjtHQUN0Qjs7O0NBQ0E7TUFDRyxxQkFBcUI7TUFDckIseUJBQXlCO0dBQzVCOzs7Q0FDQTtRQUNLLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0dBQ3BCOzs7Q0FDQTtNQUNHLDJCQUEyQjtHQUM5Qjs7O0NBQ0E7TUFDRyxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjOztHQUVqQjs7O0NBQ0E7TUFDRyxjQUFjO01BQ2QsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQiwrQkFBK0I7R0FDbEM7OztDQUNBO01BQ0cscUJBQXFCO01BQ3JCLDJCQUEyQjtNQUMzQixpQ0FBaUM7R0FDcEM7OztDQUNBO01BQ0csaUJBQWlCO0dBQ3BCOzs7Q0FFRixxQkFBcUI7OztDQUlyQiw4Q0FBOEM7OztDQUM5QztHQUNFLGtCQUFrQjs7R0FFbEIseUJBQXlCOztHQUV6QixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZUFBZTtDQUNqQjs7O0NBQ0E7R0FDRSxxQkFBcUI7TUFDbEIseUJBQXlCO0NBQzlCOzs7Q0FDQTs7T0FFTSxVQUFVO09BQ1Ysc0JBQXNCO09BQ3RCLGlCQUFpQjtPQUNqQixpQkFBaUI7T0FDakIsd0JBQXdCO09BQ3hCLGFBQWE7T0FDYjs7O0NBRUo7U0FDTSxXQUFXOzs7S0FHZjs7O0NBR0osMkNBQTJDOzs7Q0FHM0MsZ0NBQWdDOzs7Q0FHaEM7TUFDSyxVQUFVO01BQ1Ysd0JBQXdCO01BQ3hCLFlBQVk7Q0FDakI7OztDQUNBOztHQUVFLGVBQWU7R0FDZixXQUFXO0NBQ2I7OztDQUNBO0dBQ0UsV0FBVztHQUNYLGVBQWU7R0FDZixpQkFBaUI7R0FDakIseUJBQXlCO0NBQzNCOzs7Q0FDQTtHQUNFLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZUFBZTtDQUNqQjs7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsNEJBQTRCO0dBQzVCLGFBQWE7Q0FDZjs7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixlQUFlO0NBQ2pCOzs7Q0FDQTtHQUNFLG1CQUFtQjtDQUNyQjs7O0NBRUE7R0FDRSx5QkFBeUI7R0FDekIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjs7O0NBQ0E7R0FDRSxXQUFXO0NBQ2I7OztDQUVBO0dBQ0UseUJBQXlCO0NBQzNCOzs7Q0FDQTtHQUNFLHlCQUF5QjtDQUMzQjs7O0NBQ0E7R0FDRSxnQkFBZ0I7Q0FDbEI7OztDQUNBLDhCQUE4Qjs7O0NBRTlCLDhCQUE4Qjs7O0NBQzlCO0dBQ0Usa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEI7OztDQUVGO0dBQ0Usd0JBQXdCO0dBQ3hCLGFBQWE7R0FDYixrQkFBa0I7Q0FDcEI7OztDQUNBLDRCQUE0Qjs7O0NBQzVCO0dBQ0UsVUFBVTtHQUNWLHdCQUF3QjtHQUN4QixpQkFBaUI7R0FDakIsZ0JBQWdCOztDQUVsQjs7O0NBR0E7R0FDRSxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGVBQWU7Q0FDakI7OztDQUNBO0dBQ0UsZ0JBQWdCO0NBQ2xCOzs7Q0FDQTtHQUNFLGdCQUFnQjtDQUNsQjs7O0NBQ0E7R0FDRSxtQkFBbUI7R0FDbkIsY0FBYztDQUNoQjs7O0NBQ0E7R0FDRSxlQUFlOztDQUVqQjs7O0NBQ0E7R0FDRSxpQkFBaUI7Q0FDbkI7OztDQUdBO0dBQ0UsV0FBVztHQUNYLCtCQUErQjtHQUMvQixxQkFBcUI7R0FDckIsWUFBWTtHQUNaLGtCQUFrQjs7Q0FFcEI7OztDQUMrQyxZQUFZOzs7Q0FDM0Q7R0FDRSxlQUFlO0dBQ2YsWUFBWTtHQUNaLFNBQVM7R0FDVCxXQUFXO0dBQ1gsbUJBQW1CO0NBQ3JCOzs7Q0FLQSwrQkFBK0I7OztDQUUvQjs7O0tBR0ksWUFBWTtLQUNaLGNBQWM7S0FDZCxRQUFRO0tBQ1IsU0FBUztLQUNULGtDQUFrQztLQUNsQyxxQ0FBcUM7S0FDckMsK0JBQStCO0tBQy9CLGtCQUFrQjtLQUNsQixRQUFRO0tBQ1IsaUJBQWlCO0tBQ2pCLFVBQVU7S0FDVixVQUFVO0tBQ1YsV0FBVztHQUNiOzs7Q0FDQTtLQUNFLFlBQVk7S0FDWixjQUFjO0tBQ2QsUUFBUTtLQUNSLFNBQVM7S0FDVCxrQ0FBa0M7S0FDbEMscUNBQXFDO0tBQ3JDLDBDQUEwQztLQUMxQyxrQkFBa0I7S0FDbEIsUUFBUTtLQUNSLGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsVUFBVTtLQUNWLFVBQVU7R0FDWjs7O0NBRUE7S0FDRSx5QkFBeUI7S0FDekIsbUJBQW1CO0tBQ25CLFdBQVc7R0FDYjs7O0NBQ0E7S0FDRSx3QkFBd0I7S0FDeEIsbUJBQW1CO0tBQ25CLFdBQVc7R0FDYjs7O0NBQ0E7S0FDRSx5QkFBeUI7S0FDekIsbUJBQW1CO0tBQ25CLFdBQVc7R0FDYjs7O0NBRUEscUJBQXFCOzs7Q0FDckI7S0FDRSwrQkFBK0I7R0FDakM7OztDQUdBLHdCQUF3Qjs7O0NBRXhCO09BQ0ksaUNBQWlDO09BQ2pDLG1CQUFtQjtPQUNuQixnQkFBZ0I7T0FDaEIsdUJBQXVCO0dBQzNCOzs7Q0FFQTtLQUNFLFlBQVk7R0FDZDs7O0NBRUE7SUFDQywrQkFBK0I7R0FDaEM7OztDQUVBO0lBQ0MseUJBQXlCO0dBQzFCOzs7Q0FDQSx1REFBdUQ7OztDQUN2RDtPQUNJO1dBQ0ksYUFBYTtPQUNqQjtPQUNBO1dBQ0ksZUFBZTtPQUNuQjtHQUNKOzs7Q0FFQSx1REFBdUQ7OztDQUN2RDtPQUNJO1dBQ0ksYUFBYTtPQUNqQjtPQUNBO1dBQ0ksZ0JBQWdCO09BQ3BCO09BQ0E7VUFDRyxhQUFhO09BQ2hCO0dBQ0o7OztDQUVBLHdEQUF3RDs7O0NBQ3hEO09BQ0k7V0FDSSxhQUFhO09BQ2pCO09BQ0E7V0FDSSxnQkFBZ0I7T0FDcEI7R0FDSjs7O0NBRUYsc0JBQXNCOzs7Q0FTdEI7R0FDRSxXQUFXO0dBQ1gsOEJBQThCO0dBQzlCLG1CQUFtQjtDQUNyQjs7O0NBRUE7RUFDQztHQUNDLG9CQUFvQjtHQUNwQixxQkFBcUI7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZpcmUtcHVtcC1hbGFybS9maXJlLXB1bXAtYWxhcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcm93OmhvdmVyIC5tYXQtY2VsbCAuY3VzdG9tZXItdGFibGV7XG4gICBjb2xvcjogIzBhMGEwOWZkO1xuICAgZm9udC1zaXplOiBsYXJnZTtcbiB9XG4gXG4gXG4gLm1hdC1yb3c6aG92ZXIgLm1hdC1jZWxse1xuICAgY29sb3I6ICNmZjY2MDA7XG4gICBmb250LXNpemU6IGxhcmdlO1xuIH1cbiBcbiAvKi0tLS0tLW5ldyBlbmQtLS0tLSovXG4gXG4gLmRhc2hib2FyZF90cmFrY2Vye1xuICAgIFxuICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gXG4gaHIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzY2NjtcbiAgICBcbiAgIH1cbiAgIFxuICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLyogU25hcHNob3Qgcm93IHN0YXJ0ICovXG4gI2FsYXJte1xuICBwYWRkaW5nLWJvdHRvbTogNzhweDsgXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBmb250LXNpemU6IDQ0cHg7XG4gfVxuICAuY2lyY2xlLXRpdGxlMntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG4gICAgIH1cbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmd7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXG4gICAgICBoZWlnaHQ6IDgwcHg7IFxuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0byAtNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfSBcbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmcgLmZhe1xuICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmcgLmZhLmljb257XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICB9XG4gICAgLmJveHtcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG4gICB9XG4gXG4gICAuYm94MntcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgIH1cbiAgIC5ib3g6aG92ZXJ7XG4gICAgICBib3JkZXItY29sb3I6ICM0QzRCNEI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xuICAgfVxuICAgLmJveC1oZWFkaW5ne1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgfVxuICAgLnRleHQtZmFkZWR7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gICB9XG4gICAuYm94LW51bWJlcntcbiAgICAgIHBhZGRpbmc6NXB4IDAgMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgXG4gICB9XG4gICAuZm9vdGVye1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgfVxuICAgLmZvb3Rlcjpob3ZlcntcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgIH1cbiAgICNpbWctY3Rue1xuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICB9XG4gICBcbiAvKiBTbmFwc2hvdCByb3cgZW5kICovXG4gXG4gXG4gXG4gLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBTdGFydHMgKi9cbiAucGFuZWwtaGVhZGluZ3tcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gICBcbiAgIGJvcmRlcjogMXB4O1xuICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmc6IDVweDtcbiAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG4gLmhvdmVyLWVmZmVjdHtcbiAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG4gfVxuIC5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICAgICBcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgfSAgXG4gXG4gICAuY2hhcnRCb3JkZXJ7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiBcbiAgICAgXG4gICAgIH1cbiAgICAgXG4gICAgXG4gLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBFbmQgKi9cbiBcbiBcbiAvKiBDdXN0b21lciBkZXRhaWwgdGFibGUgc3RhcnQgKi9cbiBcbiBcbiAucGFuZWwtYm9keXtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBwYWRkaW5nOiA1cHg7ICBcbiB9ICBcbiBtYXQtZm9ybS1maWVsZHtcbiAgIFxuICAgZm9udC1zaXplOiAxNHB4O1xuICAgd2lkdGg6IDEwMCU7XG4gfVxuIHRhYmxlIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuIH1cbiAubWF0LWhlYWRlci1jZWxse1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBwYWRkaW5nOiA4cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG4gfVxuIFxuIC5tYXQtY2VsbCB7XG4gICBmb250LXNpemU6IDEycHg7XG4gICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xuICAgcGFkZGluZzogMTBweDtcbiB9XG4gXG4gLmhlYWRlclJvd3tcbiAgIGJhY2tncm91bmQ6IHJlZDtcbiAgIHBhZGRpbmc6IDhweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG4gLm1hdC1wYWdpbmF0b3J7XG4gICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuIH1cbiBcbiB0aCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgcGFkZGluZzogOHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiB0ZHsgICAgXG4gICBwYWRkaW5nOjhweDtcbiB9IFxuIFxuIC5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gfVxuIC5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0YzRjtcbiB9XG4gLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZHtcbiAgIGJvcmRlci1ib3R0b206IDA7XG4gfVxuIC8qIEN1c3RvbWVyIGRldGFpbCB0YWJsZSBlbmQgKi9cbiBcbiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIHN0YXJ0ICovXG4gLmhlYWRpbmctcGFuZWx7XG4gICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICBwYWRkaW5nOjVweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBmb250LXNpemU6IDE2cHg7XG4gICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgfVxuIFxuIC5jaGFydC1ib2R5e1xuICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgcGFkZGluZzogMTBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB9XG4gLyogRW5lcmd5IHN0YXR1cyBncmFwaCBlbmQgKi8gXG4gLmNobmdwd2QtYm9keXtcbiAgIHdpZHRoOjEwMCU7XG4gICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICBwYWRkaW5nLXRvcDogMTVweDtcbiAgIG1hcmdpbi10b3A6IDU1cHg7XG4gICBcbiB9XG4gXG4gXG4gLmNhcmQtaGVhZGVye1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gLm9sZHB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuIH1cbiAuY2hwd2R7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuIH1cbiAuYnRuLXByaW1hcnkge1xuICAgYmFja2dyb3VuZDogI0U2NkYwMDtcbiAgIGNvbG9yOiAjZmZmZmZmO1xuIH1cbiAuYnRue1xuICAgYm9yZGVyOiAjRTY2RjAwO1xuICBcbiB9XG4gLmNobmdwd2R7XG4gICBtYXJnaW4tdG9wOiAxMjVweDtcbiB9XG4gXG4gXG4gLmNoYXJoZWFkZXIye1xuICAgbWFyZ2luOiA1cHg7XG4gICBib3JkZXItdG9wOiAxcHggc29saWQgb3JhbmdlcmVkO1xuICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xuICAgcGFkZGluZzogNXB4O1xuICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIFxuIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICBTaGFoaWQgKi9cbiAjYnJlYWRjcnVtYntcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHotaW5kZXg6IDk5OTtcbiAgIHRvcDogNTBweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZDogIzIyMjIyMjtcbiB9XG4gXG4gXG4gXG4gXG4gLyogU2hhaGlkIFN0YXJ0IGZvciBCcmVhZGNydW0gKi9cbiBcbiAqICBicmVhZGNydW1wICpcbiBcbiAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgY29udGVudDogXCIgXCI7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogMDtcbiAgICAgaGVpZ2h0OiAwO1xuICAgICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDogNTAlO1xuICAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICAgbGVmdDogMTAwJTtcbiAgICAgei1pbmRleDogMztcbiAgICAgY29sb3I6ICNmZmY7XG4gICB9XG4gICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgd2lkdGg6IDA7XG4gICAgIGhlaWdodDogMDtcbiAgICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDogNTAlO1xuICAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgbGVmdDogMTAwJTtcbiAgICAgei1pbmRleDogMztcbiAgIH1cbiBcbiAgIC5idG4tYnJlYWRjcnVtYiAuYnRuIHtcbiAgICAgcGFkZGluZzo2cHggMTJweCA2cHggMjRweDtcbiAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgY29sb3I6ICNmZmY7XG4gICB9XG4gICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gICAgIHBhZGRpbmc6NnB4IDZweCA2cHggMTBweDtcbiAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgY29sb3I6ICNmZmY7XG4gICB9XG4gICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICAgcGFkZGluZzo2cHggMThweCA2cHggMjRweDtcbiAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgY29sb3I6ICNmZmY7XG4gICB9XG4gXG4gICAvKiogRGVmYXVsdCBidXR0b24gKiovXG4gICAuYnRuLWJyZWFkY3J1bWIgLmJ0bi5idG4tZGVmYXVsdDpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgIH1cbiBcbiBcbiAgIC8qIFRoZSByZXNwb25zaXZlIHBhcnQgKi9cbiBcbiAgIC5idG4tYnJlYWRjcnVtYiA+ICogPiBkaXYge1xuICAgICAgIC8qIFdpdGggbGVzczogLnRleHQtb3ZlcmZsb3coKTsgKi9cbiAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB9XG4gXG4gICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1jaGlsZChuKzIpIHtcbiAgICAgZGlzcGxheTpub25lO1xuICAgfVxuIFxuICAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogI0U2NkYwMCAhaW1wb3J0YW50O1xuICAgfVxuIFxuICAgLm1hdC1pbnB1dC1lbGVtZW50IG5nLXJlZmxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjRTY2RjAwICFpbXBvcnRhbnQ7XG4gICB9XG4gICAvKiA9PT0gRm9yIHBob25lcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbisyKSB7XG4gICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgfVxuICAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgIH1cbiAgIH1cbiBcbiAgIC8qID09PSBGb3IgdGFibGV0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis0KSB7XG4gICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgfVxuICAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICB9XG4gICAgICAgLmhpZGV7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICB9XG4gICB9XG4gXG4gICAvKiA9PT0gRm9yIGRlc2t0b3BzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNikge1xuICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgIH1cbiAgICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICAgfVxuICAgfVxuIFxuIC8qIEVuZCBmb3IgQnJlYWRjcnVtICovXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gI3BhZ2Utd3JhcHBlciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDExMHB4IDI1cHggMTEwcHggMjVweDtcbiAgIGJhY2tncm91bmQ6ICMwRjBGMEY7XG4gfVxuXG4gQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtbGctMiB7XG4gICBmbGV4OiAwIDAgMTkuNjY2NjY3JTtcbiAgIG1heC13aWR0aDogMTkuNjY2NjY3JTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/fire-pump-alarm/fire-pump-alarm.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fire-pump-alarm/fire-pump-alarm.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"page-wrapper\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"dashboard_trakcer\"> Aviconn Fire-System Configuration Status</div>\n    <hr>\n\n    <!-- 1st snapshot start -->\n   \n    <div class=\"col-lg-2 col-sm-6 col-xs-6\">\n      <div  class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">{{alarmData[0].aislename}}</div>\n          <div class=\"box-number text-faded\">\n              <span style=font-size:medium style=\"color: skyblue\" id=\"sparklineA\">Auto Mode :\n                 <span [ngStyle]=\"{  'color': alarmData[0].R_Voltage == 'ON' ? '#04ff00' : '#FFFFFF'}\">{{alarmData[0].R_Voltage}}</span>\n              </span>\n              <br>\n              <span style=font-size:medium  style=\"color: red\" id=\"sparklineA\">Manual Mode :\n                <span [ngStyle]=\"{  'color': alarmData[0].Y_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[0].Y_Voltage}}</span>\n\n              </span>\n              <br>\n              <span style=font-size:medium style=\"color: yellow\" id=\"sparklineA\">Off Mode : \n                <span [ngStyle]=\"{ 'color': alarmData[0].B_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[0].B_Voltage}}</span>\n              </span>\n              <br>\n              <span style=font-size:medium style=\"color: #FF5607\" id=\"sparklineA\">Motor Status : \n                <span [ngStyle]=\"{  'color': alarmData[0].motor_status == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[0].motor_status}}</span>\n\n              </span>\n              <br>\n              <span style=font-size:medium  id=\"sparklineA\">Last_checked  {{alarmData[0].current_date | date:'dd/MM/yy, h:mm:ss a'}}\n              </span>\n              <br>\n          </div>\n        </div>\n      </div>\n    </div>\n \n    <!-- 1st snapshot end -->\n\n\n    <!-- 2nd snapshot start -->\n     <div class=\"col-lg-2 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"assets/image/low.png\" width=\"45\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">{{alarmData[1].aislename}}</div>\n          <div class=\"box-number text-faded\">\n            <span style=font-size:medium style=\"color: skyblue\" id=\"sparklineA\">Auto Mode : \n              <span [ngStyle]=\"{ 'color': alarmData[1].R_Voltage == 'ON' ? '#04ff00' : '#FFFFFF'}\">{{alarmData[1].R_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium  style=\"color: red\" id=\"sparklineA\">Manual Mode : \n              <span [ngStyle]=\"{'color': alarmData[1].Y_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[1].Y_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: yellow\" id=\"sparklineA\">Off Mode : \n              <span [ngStyle]=\"{ 'color': alarmData[1].B_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[1].B_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: #FF5607\" id=\"sparklineA\">Motor Status : \n              <span [ngStyle]=\"{ 'color': alarmData[1].motor_status == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[1].motor_status}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium id=\"sparklineA\">Last_checked {{alarmData[1].current_date | date:'dd/MM/yy, h:mm:ss a'}}</span>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!-- 2nd snapshot end -->\n\n    <!-- 3rd snapshot start -->\n    <div class=\"col-lg-2 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <div class=\"circle-title-heading\">\n            <i class=\"fa fa-bolt fa-3x\"></i>\n          </div>\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">{{alarmData[2].aislename}}</div>\n          <div class=\"box-number text-faded\">\n            <span style=font-size:medium style=\"color: skyblue\" id=\"sparklineA\">Auto Mode : \n              <span [ngStyle]=\"{  'color': alarmData[2].R_Voltage == 'ON' ? '#04ff00' : '#FFFFFF'}\">{{alarmData[2].R_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: red\" id=\"sparklineA\">Manual Mode :  \n              <span [ngStyle]=\"{  'color': alarmData[2].Y_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[2].Y_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: yellow\" id=\"sparklineA\">Off Mode : \n              <span [ngStyle]=\"{  'color': alarmData[2].B_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[2].B_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: #FF5607\" id=\"sparklineA\">Motor Status : \n              <span [ngStyle]=\"{  'color': alarmData[2].motor_status == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[2].motor_status}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium id=\"sparklineA\">Last_checked  {{alarmData[2].current_date | date:'dd/MM/yy, h:mm:ss a'}}</span>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div> \n\n    <!-- 4'th snapshot start  -->\n     <div class=\"col-lg-2 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"assets/image/low.png\" width=\"50\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">{{alarmData[3].aislename}}</div>\n          <div class=\"box-number text-faded\">\n            <span style=font-size:medium style=\"color: skyblue\" id=\"sparklineA\">Auto Mode : \n              <span [ngStyle]=\"{  'color': alarmData[3].R_Voltage == 'ON' ? '#04ff00' : '#FFFFFF'}\">{{alarmData[3].R_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium  style=\"color: red\" id=\"sparklineA\">Manual Mode :  \n              <span [ngStyle]=\"{  'color': alarmData[3].Y_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[3].Y_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: yellow\" id=\"sparklineA\">Off Mode : \n              <span [ngStyle]=\"{  'color': alarmData[3].B_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[3].B_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: #FF5607\" id=\"sparklineA\">Motor Status : \n              <span [ngStyle]=\"{  'color': alarmData[3].motor_status == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[3].motor_status}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium id=\"sparklineA\">Last_checked  {{alarmData[3].current_date | date:'dd/MM/yy, h:mm:ss a'}}</span>\n            <br>\n          </div>\n\n        </div>\n      </div>\n    </div> \n\n\n    <!-- 5'th snapshot start  -->\n     <div class=\"col-lg-2 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <div class=\"circle-title-heading\">\n            <i class=\"fa fa-bolt fa-3x\"></i>\n          </div>\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">{{alarmData[4].aislename}}</div>\n          <div class=\"box-number text-faded\">\n            <span style=font-size:small style=\"color: skyblue\" id=\"sparklineA\">Auto Mode : \n              <span [ngStyle]=\"{  'color': alarmData[4].R_Voltage == 'ON' ? '#04ff00' : '#FFFFFF'}\">{{alarmData[4].R_Voltage}}</span>\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: red\" id=\"sparklineA\">Manual Mode : \n              <span [ngStyle]=\"{  'color': alarmData[4].Y_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[4].Y_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: yellow\" id=\"sparklineA\">Off Mode : \n              <span [ngStyle]=\"{  'color': alarmData[4].B_Voltage == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[4].B_Voltage}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium style=\"color: #FF5607\" id=\"sparklineA\">Motor Status : \n              <span [ngStyle]=\"{  'color': alarmData[4].motor_status == 'ON' ? '#ff0000' : '#FFFFFF'}\">{{alarmData[4].motor_status}}</span>\n\n            </span>\n            <br>\n            <span style=font-size:medium id=\"sparklineA\">Last_checked  {{alarmData[4].current_date | date:'dd/MM/yy, h:mm:ss a'}}</span>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div> \n\n  </div>\n\n  <div class=\"mt-5\">\n    <div class=\"row\">\n      <div class=\"col-lg- col-sm-12 col-xs-6\"> \n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <i class=\"fa fa-bar-chart-o\"></i> Email History \n            </div>\n          </div>\n        </div>\n        <div class=\"chart-body customer-table\">\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table [dataSource]=\"emailDataSource\" matSort>\n              <ng-container matColumnDef=\"serialno\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Serial No. </mat-header-cell> \n                <mat-cell *matCellDef=\"let row; let i = index;\" data-label=\"serialno\" > {{(i+1) + (mypaginator.pageIndex *mypaginator.pageSize)}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"sitename\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"sitename\" > {{row.sitename}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"devicename\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Device Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"sitename\" > {{row.devicename}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"emailFor\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Email For </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"emailFor\" > {{row.emailFor}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"emaildatetime\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Email DateTime </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"emaildatetime\" > {{row.emaildatetime | date:'dd-MM-yy, h:mm:ss a'}} </mat-cell>\n              </ng-container>\n              <mat-header-row *matHeaderRowDef=\"alarmsColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: alarmsColumns;\"></mat-row>\n            </mat-table> \n          <mat-paginator #mypaginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>      \n        </div>\n      </div>\n    </div>\n  </div>\n</div> \n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/fire-pump-alarm/fire-pump-alarm.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fire-pump-alarm/fire-pump-alarm.component.ts ***!
  \**************************************************************/
/*! exports provided: FirePumpAlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirePumpAlarmComponent", function() { return FirePumpAlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");









var FirePumpAlarmComponent = /** @class */ (function () {
    function FirePumpAlarmComponent(user, dataService) {
        this.user = user;
        this.dataService = dataService;
        this.alarmsColumns = ['serialno', 'sitename', 'devicename', 'emailFor', 'emaildatetime',];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.alarmData = [];
        this.site_dash = false;
        this.customer_home = false;
        this.super_admin_home = false;
        this.customer_name = false;
        this.Admindata = false;
        this.showIntervalOptions = false;
    }
    FirePumpAlarmComponent.prototype.ngOnInit = function () {
        this.getFireAlarmData(),
            this.getFireAlarmEmailHistory();
    };
    FirePumpAlarmComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].interval(5000).subscribe(function (response) { _this.getFireAlarmData(); });
    };
    FirePumpAlarmComponent.prototype.customerPage = function () {
        this.dataService.changeMessage("customer");
    };
    FirePumpAlarmComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        location.reload();
    };
    FirePumpAlarmComponent.prototype.getFireAlarmEmailHistory = function () {
        var _this = this;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        console.log("dataofsite", data);
        this.user.getEmailHistorySnapShotData(data).subscribe(function (response) {
            console.log("responseofemail: ", response);
            var emailData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data_1 = response['data'][i];
                var email_var = void 0;
                if (data_1['email_for'] == 1) {
                    email_var = 'Sent-for Manual Mode';
                }
                else if (data_1['email_for'] == 2) {
                    email_var = 'Sent-for Auto Mode';
                }
                else if (data_1['email_for'] == 3) {
                    email_var = 'PowerSource';
                }
                else if (data_1['email_for'] == 4) {
                    email_var = 'Sent-for OFF Mode';
                }
                else if (data_1['email_for'] == 5) {
                    email_var = 'Sent-for Motor On';
                }
                else {
                    email_var = 'Not define';
                }
                emailData.push({
                    "sitename": data_1["site"],
                    "devicename": data_1['device_name'],
                    "emailFor": email_var,
                    "emaildatetime": data_1["datetime"],
                });
            }
            _this.emailDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](emailData);
            _this.emailDataSource.paginator = _this.paginator.toArray()[0];
            _this.emailDataSource.sort = _this.sort.toArray()[0];
        });
    };
    FirePumpAlarmComponent.prototype.getFireAlarmData = function () {
        var _this = this;
        var data = { "site_id": parseInt(localStorage.getItem("siteId")) };
        this.user.getFireAlarmSnapShotData(data).subscribe(function (response) {
            // this.alarmData = response['data']
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var fire = response['data'][i];
                var aisleName = fire['aislename'];
                var auto = fire['R_Voltage'];
                var main = fire['Y_Voltage'];
                var off = fire['B_Voltage'];
                if (auto > 200 && main < 100 && off > 200) {
                    fire['R_Voltage'] = "ON";
                    fire['Y_Voltage'] = "OFF";
                    fire['B_Voltage'] = "OFF";
                }
                else if (auto < 100 && main > 200 && off > 200) {
                    fire['R_Voltage'] = "OFF";
                    fire['Y_Voltage'] = "ON";
                    fire['B_Voltage'] = "OFF";
                }
                else {
                    fire['R_Voltage'] = "OFF";
                    fire['Y_Voltage'] = "OFF";
                    fire['B_Voltage'] = "ON";
                }
                if (fire["motor_status"] == 0) {
                    fire["motor_status"] = "OFF";
                }
                else {
                    fire["motor_status"] = "ON";
                }
                _this.alarmData.push({ "aislename": fire['aislename'],
                    "R_Voltage": fire["R_Voltage"],
                    "Y_Voltage": fire["Y_Voltage"],
                    "B_Voltage": fire["B_Voltage"],
                    "motor_status": fire["motor_status"],
                    "current_date": fire["current_date"]
                });
            }
            console.log("response : ", response);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FirePumpAlarmComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FirePumpAlarmComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], FirePumpAlarmComponent.prototype, "table", void 0);
    FirePumpAlarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fire-pump-alarm',
            template: __webpack_require__(/*! ./fire-pump-alarm.component.html */ "./src/app/fire-pump-alarm/fire-pump-alarm.component.html"),
            styles: [__webpack_require__(/*! ./fire-pump-alarm.component.css */ "./src/app/fire-pump-alarm/fire-pump-alarm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], FirePumpAlarmComponent);
    return FirePumpAlarmComponent;
}());



/***/ }),

/***/ "./src/app/lights-watt-data/lights-watt-data.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/lights-watt-data/lights-watt-data.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n \n /* text-align: center; */\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\n.mat-row:nth-child(2){\n    background-color:#ff7c01da;\n }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n    /* width: 1675px; */\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    \n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      \n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHRzLXdhdHQtZGF0YS9saWdodHMtd2F0dC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBSUEsaUJBQWlCOztBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQSxjQUFjOztBQUNkO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLDZCQUE2Qjs7QUFDN0I7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBQ0E7O0NBRUMsZUFBZTtDQUNmLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osZUFBZTs7Q0FFZix3QkFBd0I7QUFDekI7O0FBQ0E7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBQ0E7SUFDRyx5QkFBeUI7Q0FDNUI7O0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBQ0Q7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsYUFBYTtJQUNmOztJQUVBOztNQUVFLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLG1CQUFtQjs7TUFFbkIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7TUFDRTtNQUNBLGNBQWM7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xpZ2h0cy13YXR0LWRhdGEvbGlnaHRzLXdhdHQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNjcwcHg7XG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzojRTZFN0U3O1xuICAgIGJhY2tncm91bmQ6ICNFNkU3RTc7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuXG4vKiB0YWJsZSBTdGFydHMgKi9cbi5wYW5lbC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuXG4uaG92ZXItZWZmZWN0e1xuICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xufVxuLnN0YXR1cy1wYW5lbC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxOyAgXG4gICAgcGFkZGluZzogMTBweDtcbn0gIFxuIFxuLmNoYXJ0Qm9yZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4gICAgIFxuLyogdGFibGUgRW5kICovIFxuI2NhbmNlbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxOyAgXG59XG5cblxuLyogU2l0ZSBEZWF0aWxzIHRhYmxlIHN0YXJ0ICovXG4ucGFuZWwtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICBwYWRkaW5nOiA1cHg7ICBcbn0gIFxuLm1hdC1mb3JtLWZpZWxke1xuIFxuIGZvbnQtc2l6ZTogMTRweDtcbiB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gd2lkdGg6IDEwMCU7XG4gdGV4dC1hbGlnbjpsZWZ0O1xuIGJvcmRlci1zcGFjaW5nOiAwO1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4ubWF0LWhlYWRlci1jZWxse1xuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuIHBhZGRpbmc6IDhweDtcbiBmb250LXNpemU6IDE2cHg7XG4gXG4gLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gfVxuIC5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XG4gfVxuLm1hdC1yb3c6bnRoLWNoaWxkKDIpe1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmN2MwMWRhO1xuIH1cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xufVxuXG5tYXQtY2VsbCwgbWF0LWZvb3Rlci1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG4ubWF0LWhlYWRlci1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XG4gICAgLyogd2lkdGg6IDE2NzVweDsgKi9cbn1cbi5oZWFkZXJSb3d7XG4gYmFja2dyb3VuZDogcmVkO1xuIHBhZGRpbmc6IDhweDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1wYWdpbmF0b3J7XG4gYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAubWF0LXRhYmxlIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICB9XG4gIFxuICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xuICAgICAgXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gICAgICBmb250LXNpemU6IC44NWVtO1xuICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgfVxufVxuICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lights-watt-data/lights-watt-data.component.html":
/*!******************************************************************!*\
  !*** ./src/app/lights-watt-data/lights-watt-data.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> All Lights Data\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"area\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Area Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Area Name\" > {{row.areaName}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Name Column -->\n                          <ng-container matColumnDef=\"totalLights\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Total Lights</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Total Lights\" > {{row.totalLights}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"Watt18\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >18 Watt Lights</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"18 Watt Lights\" > {{row.Watt18}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"Watt20\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >20 Watt Lights</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"20 Watt Lights\" > {{row.Watt20}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"Watt24\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >24 Watt Lights </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"24 Watt Lights\" > {{row.Watt24}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"Watt36\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >36 Watt Lights</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"36 Watt Lights\" > {{row.Watt36}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"Watt40\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >40 Watt Lights </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"40 Watt Lights\" > {{row.Watt40}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"totalWattLoad\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Total watt Load </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Total watt Load \" > {{row.totalWattLights}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"totalUnits\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Units(kwh) per day </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Units(kwh) per day\" > {{row.totalUnits}} </mat-cell>\n                          </ng-container>\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"switchSiteDashboard(row)\">\n                          </mat-row> \n                        </mat-table>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n  <!-- <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button> -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/lights-watt-data/lights-watt-data.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lights-watt-data/lights-watt-data.component.ts ***!
  \****************************************************************/
/*! exports provided: DialogData, LightsWattDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightsWattDataComponent", function() { return LightsWattDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");







var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var LightsWattDataComponent = /** @class */ (function () {
    function LightsWattDataComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.displayedColumns = ['area', 'totalLights', 'Watt18', 'Watt20', 'Watt24', 'Watt36', 'Watt40', 'totalWattLoad', 'totalUnits'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.siteId = localStorage.getItem('siteId');
    }
    LightsWattDataComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LightsWattDataComponent.prototype.ngOnInit = function () {
        this.siteId = localStorage.getItem('siteId');
        this.lightsData();
    };
    LightsWattDataComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    LightsWattDataComponent.prototype.lightsData = function () {
        var _this = this;
        console.log('site id in switch dashboard function', this.siteId);
        this.dataService.lightsData(this.data).subscribe(function (response) {
            var lightsData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data = response['data'][i];
                lightsData.push({ "areaName": data['areaName'],
                    "totalLights": data["totalLights"],
                    "Watt18": data["18Watt"],
                    "Watt20": data["20Watt"],
                    "Watt24": data["24Watt"],
                    "Watt36": data["36Watt"],
                    "Watt40": data["40Watt"],
                    "totalWattLights": data["totalWattLights"],
                    "totalUnits": data["totalUnits"],
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](lightsData);
            _this.dataSource.sort = _this.sort.toArray()[0];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LightsWattDataComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LightsWattDataComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], LightsWattDataComponent.prototype, "table", void 0);
    LightsWattDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lights-watt-data',
            template: __webpack_require__(/*! ./lights-watt-data.component.html */ "./src/app/lights-watt-data/lights-watt-data.component.html"),
            styles: [__webpack_require__(/*! ./lights-watt-data.component.css */ "./src/app/lights-watt-data/lights-watt-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            DialogData])
    ], LightsWattDataComponent);
    return LightsWattDataComponent;
}());



/***/ }),

/***/ "./src/app/load-data-table/load-data-table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/load-data-table/load-data-table.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n \n /* text-align: center; */\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1kYXRhLXRhYmxlL2xvYWQtZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUlBLGlCQUFpQjs7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQSw2QkFBNkI7O0FBQzdCO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUNBOztDQUVDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGVBQWU7O0NBRWYsd0JBQXdCO0FBQ3pCOztBQUNBO0lBQ0kseUJBQXlCO0NBQzVCOztBQUNBO0lBQ0cseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLDZCQUE2QjtNQUM3QixjQUFjO01BQ2QsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixtQkFBbUI7O01BRW5CLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO01BQ0U7TUFDQSxjQUFjO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2FkLWRhdGEtdGFibGUvbG9hZC1kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA2NzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiNFNkU3RTc7XG4gICAgYmFja2dyb3VuZDogI0U2RTdFNztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG5cbi8qIHRhYmxlIFN0YXJ0cyAqL1xuLnBhbmVsLWhlYWRpbmd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG5cbi5ob3Zlci1lZmZlY3R7XG4gICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG59XG4uc3RhdHVzLXBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4OyBcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7ICBcbiAgICBwYWRkaW5nOiAxMHB4O1xufSAgXG4gXG4uY2hhcnRCb3JkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbiAgICAgXG4vKiB0YWJsZSBFbmQgKi8gXG4jY2FuY2Vse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7ICBcbn1cblxuXG4vKiBTaXRlIERlYXRpbHMgdGFibGUgc3RhcnQgKi9cbi5wYW5lbC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgIHBhZGRpbmc6IDVweDsgIFxufSAgXG4ubWF0LWZvcm0tZmllbGR7XG4gXG4gZm9udC1zaXplOiAxNHB4O1xuIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYmxlIHtcbiB3aWR0aDogMTAwJTtcbiB0ZXh0LWFsaWduOmxlZnQ7XG4gYm9yZGVyLXNwYWNpbmc6IDA7XG4gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5tYXQtaGVhZGVyLWNlbGx7XG4gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gcGFkZGluZzogOHB4O1xuIGZvbnQtc2l6ZTogMTZweDtcbiBcbiAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTtcbiB9XG4gLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0YzRjtcbiB9XG5cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xufVxuXG5tYXQtY2VsbCwgbWF0LWZvb3Rlci1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG4ubWF0LWhlYWRlci1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XG59XG4uaGVhZGVyUm93e1xuIGJhY2tncm91bmQ6IHJlZDtcbiBwYWRkaW5nOiA4cHg7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtcGFnaW5hdG9ye1xuIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLm1hdC10YWJsZSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgICBwYWRkaW5nOiAxM3B4O1xuICAgIH1cbiAgXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICB9XG59XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/load-data-table/load-data-table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/load-data-table/load-data-table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> Month-Wise Load Data\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"power_source\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Power Source</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"power_source\" > {{row.power_source}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"month\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Month</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"month\" > {{row.month}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"max_load_time\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Max Load (Time)</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"max_load_time\" > {{row.max_load_created}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Name Column -->\n                          <ng-container matColumnDef=\"max_load_value\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Max Load (KW)</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"max_load_value\" > {{row.max_load}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"min_load_time\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Min Load (Time)</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"min_load_time\" > {{row.min_load_created}}</mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"min_load_value\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Min Load (KW)</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"min_load_value\"> {{row.min_load}} </mat-cell>\n                          </ng-container>\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                          </mat-row> \n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" ></mat-paginator>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='exportMonthlyLoadData()' id=\"cancel\"  mat-button >Export</button>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/load-data-table/load-data-table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/load-data-table/load-data-table.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogData, LoadDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDataTableComponent", function() { return LoadDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");







var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var LoadDataTableComponent = /** @class */ (function () {
    function LoadDataTableComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.displayedColumns = ['power_source', 'month', 'max_load_time', 'max_load_value', 'min_load_time', 'min_load_value'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.siteId = localStorage.getItem('siteId');
    }
    LoadDataTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    LoadDataTableComponent.prototype.ngOnInit = function () {
        this.monthly_min_max_load_data();
        this.siteId = localStorage.getItem('siteId');
    };
    LoadDataTableComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoadDataTableComponent.prototype.monthly_min_max_load_data = function () {
        var _this = this;
        var data = { 'id': this.siteId };
        this.dataService.monthly_min_max_load_data(data).subscribe(function (response) {
            console.log("res of load table : ", response);
            var loadData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data_1 = response['data'][i];
                loadData.push({
                    "power_source": data_1["power_source"],
                    "min_load": data_1["min_load"],
                    "max_load": data_1["max_load"],
                    "max_load_created": data_1["max_load_created"],
                    "min_load_created": data_1['min_load_created'],
                    "month": data_1["month"]
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](loadData);
            _this.dataSource.paginator = _this.paginator.toArray()[0];
            _this.dataSource.sort = _this.sort.toArray()[0];
        });
    };
    LoadDataTableComponent.prototype.exportMonthlyLoadData = function () {
        var data = { "site_id": this.siteId };
        this.dataService.exportMonthlyMinMaxData(data).subscribe(function (response) {
            console.log("response: ", response);
            var blob = response.body;
            var downloadURL = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = ("monthly_load_data" + ".csv");
            link.click();
        });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoadDataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoadDataTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], LoadDataTableComponent.prototype, "table", void 0);
    LoadDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-data-table',
            template: __webpack_require__(/*! ./load-data-table.component.html */ "./src/app/load-data-table/load-data-table.component.html"),
            styles: [__webpack_require__(/*! ./load-data-table.component.css */ "./src/app/load-data-table/load-data-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            DialogData])
    ], LoadDataTableComponent);
    return LoadDataTableComponent;
}());



/***/ }),

/***/ "./src/app/load-graph/load-graph.component.css":
/*!*****************************************************!*\
  !*** ./src/app/load-graph/load-graph.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-body{\n    border:1px solid #ff7a01;\n    padding: 10px;\n    position: relative;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1ncmFwaC9sb2FkLWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvYWQtZ3JhcGgvbG9hZC1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWJvZHl7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/load-graph/load-graph.component.html":
/*!******************************************************!*\
  !*** ./src/app/load-graph/load-graph.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\" *ngIf=\"chartLoading\">  \n  <div class=\"col-md-12 col-sm-12\">\n      <div class=\"panel-heading\">\n          <i class=\"fa fa-bar-chart-o\"></i> Trend Overview\n      </div>\n      <div class=\"chart-body\">\n       \n           <highcharts-chart #chart \n               [Highcharts]=\"Highcharts\"\n               [constructorType]=\"stockChart\"\n               [options]=\"lineChartOptions\"\n               [callbackFunction]=\"chartCallback\"\n               [(update)]=\"updateFlag\"\n               [oneToOne]=\"oneToOneFlag\"\n       \n               style=\"width: 100%; height: 100%; display: block;\"\n           ></highcharts-chart>\n   </div>\n  </div>               \n</div>\n"

/***/ }),

/***/ "./src/app/load-graph/load-graph.component.ts":
/*!****************************************************!*\
  !*** ./src/app/load-graph/load-graph.component.ts ***!
  \****************************************************/
/*! exports provided: LoadGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadGraphComponent", function() { return LoadGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var LoadGraphComponent = /** @class */ (function () {
    function LoadGraphComponent(dataService) {
        this.dataService = dataService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartLoading = false;
    }
    LoadGraphComponent.prototype.ngOnInit = function () {
        this.load_graph();
        console.log("############################");
    };
    LoadGraphComponent.prototype.randomInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    LoadGraphComponent.prototype.load_data_every_second = function () {
        var _this = this;
        console.log("load function called");
        this.dataService.load_graph_every_sec({}).subscribe(function (res) {
            for (var i = 0; i <= res['data'].length - 1; i++) {
                _this.chart.chart.series[0].addPoint(res['data'][i], true, false);
            }
        });
        // return response
    };
    LoadGraphComponent.prototype.load_graph = function () {
        var _this = this;
        var reqData = { "site_id": 35, "date": "2023/04/26" };
        this.dataService.dgFuelConsumptionData(reqData).subscribe(function (res) {
            var dataSeries = res["data"];
            console.log("api data: ", dataSeries);
            _this.chartLoading = true;
            _this.lineChartOptions = {
                chart: {
                    type: "spline",
                    scrollablePlotArea: {
                        minWidth: 300,
                        scrollPositionX: 1
                    },
                    zoomType: "x",
                },
                navigator: {
                    enabled: true
                },
                scrollbar: {
                    enabled: true
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%d %b %Y' //ex- 01 Jan 2016
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                    labels: {
                        rotation: -45,
                        format: '{value:%Y-%m-%d %H:%M}',
                    }
                },
                time: {
                    useUTC: false
                },
                title: {
                    text: 'Fuel Level Trend'
                },
                plotOptions: {
                    series: {
                        turboThreshold: 0,
                    }
                },
                series: [{
                        name: 'Fuel Consumption',
                        data: dataSeries,
                    },]
            };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoadGraphComponent.prototype, "chart", void 0);
    LoadGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-graph',
            template: __webpack_require__(/*! ./load-graph.component.html */ "./src/app/load-graph/load-graph.component.html"),
            styles: [__webpack_require__(/*! ./load-graph.component.css */ "./src/app/load-graph/load-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoadGraphComponent);
    return LoadGraphComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n    margin-bottom: 0;\n    padding: 0;\n}\n.bottomImg {\n    width: 100%;\n    height: 145px;\n}\n#input1 {\n    border: 1px solid rgba(0,0,0,.3);\n    border-radius: 4px;\n    padding-left: 10px;\n    color: #fff;\n    font-size: 16px;\n    background: rgba(0,0,0,.3);\n    text-shadow: 1px 1px 1px rgba(0,0,0,.3);\n    box-shadow: inset 0 -5px 45px rgba(100,100,100,.2),0 1px 1px rgba(255,255,255,.2);\n}\n.logo{\n    margin-top: 30px;\n    margin-bottom: 8px;\n}\n.bottom-text{\n    \ndisplay: inline;\n}\n.example-full-width{\n    width: 300px;\n    color: white;\n}\nform button{\n    position: relative;\n    width: 300px;\n    margin-top: 3px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n#fp{\n    position: relative;\n    margin-left: 180px;\n        \n}\n#fp{\n    color: #e66f00;\n    font-size: 14px;\n    \n}\n#avc{\n    color: #e66f00;\n    font-size: 14px;\n}\n#sup{\n    color: #e66f00;\n    font-size: 14px;\n}\n#esm{\n    color: #e66f00;\n    font-size: 18px;\n    margin-top: 25px;\n    margin-bottom: 20px;\n}\n/* When the input is focused underline color*/\n.mat-form-field-ripple {\n    background-color: white !important;\n}\n.mat-form-field-underline {\n    display: none;\n}\n/* When the input is not focused */\n.mat-form-field .placeholder {\n        color: #ffffff;\n    }\n/* When the input is focused */\n.mat-focused .placeholder{\n        color: white;\n    }\n.mat-raised-button{\n    background-color: #E66F00;\n    background-image: linear-gradient(rgb(236, 206, 73),#e0740f);\n    color: white;\n}\n.modal-content{\n    background:rgb(48, 47, 46);\n    text-align: left;\n    overflow: hidden;\n}\n.modal-header{\n    background:#E66F00;\n}\n.modal-title{\n    color: white;\n}\n.modal-dialog {\n    transform: translate(0,-50%);\n    top: 10%;\n    margin: 0 auto;\n}\nlabel{\n    color:white;\n    \n}\n/* Edited by chirag line133-134*/\n.footimg {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 145px;\n}\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n.ng-invalid:not(form)  {\n    border-left: 0px /* red */\n  }\n.mat-input-element {\n    caret-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsaUZBQWlGO0FBQ3JGO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLGtEQUFrRDtBQUN0RDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFRSw2Q0FBNkM7QUFDN0M7SUFDRSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQSxrQ0FBa0M7QUFDOUI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0EsOEJBQThCO0FBQzlCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0lBQ0kseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFHSSw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLGNBQWM7QUFDbEI7QUFHQTtJQUNJLFdBQVc7O0FBRWY7QUFDQSxnQ0FBZ0M7QUFDaEM7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtFQUM1QztBQUNGO0lBQ0ksZUFBZSxFQUFFLFFBQVE7RUFDM0I7QUFDQTtJQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmJvdHRvbUltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNDVweDtcbn1cblxuI2lucHV0MSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCA0NXB4IHJnYmEoMTAwLDEwMCwxMDAsLjIpLDAgMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYm90dG9tLXRleHR7XG4gICAgXG5kaXNwbGF5OiBpbmxpbmU7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gYnV0dG9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4jZnB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcbiAgICAgICAgXG59XG4jZnB7XG4gICAgY29sb3I6ICNlNjZmMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuI2F2Y3tcbiAgICBjb2xvcjogI2U2NmYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4jc3Vwe1xuICAgIGNvbG9yOiAjZTY2ZjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNlc217XG4gICAgY29sb3I6ICNlNjZmMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiAgXG4gIC8qIFdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgdW5kZXJsaW5lIGNvbG9yKi9cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFdoZW4gdGhlIGlucHV0IGlzIG5vdCBmb2N1c2VkICovXG4gICAgLm1hdC1mb3JtLWZpZWxkIC5wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAvKiBXaGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkICovXG4gICAgLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlcntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY2RjAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjM2LCAyMDYsIDczKSwjZTA3NDBmKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubW9kYWwtY29udGVudHtcbiAgICBiYWNrZ3JvdW5kOnJnYig0OCwgNDcsIDQ2KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9kYWwtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6I0U2NkYwMDtcbn1cbi5tb2RhbC10aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubW9kYWwtZGlhbG9nIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xuICAgIHRvcDogMTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbmxhYmVse1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxufVxuLyogRWRpdGVkIGJ5IGNoaXJhZyBsaW5lMTMzLTEzNCovXG4uZm9vdGltZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQ1cHg7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbiAgfVxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gICAgYm9yZGVyLWxlZnQ6IDBweCAvKiByZWQgKi9cbiAgfVxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <img width=\"100\" alt=\"Aviconn logo\" src=\"assets/image/1.png\"><br>\n  <img width=\"100\" alt=\"Aviconn logo-text\" src=\"assets/image/2.png\"><br>\n  <h5 id=\"esm\">Aviconn Smart Energy Management<br>( SEM )</h5>\n\n\n</div>\n<form (ngSubmit)=\"onLogin()\" [formGroup]=\"userLogin\">\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-full-width\" appearance=\"none\">\n      <input id=\"input1\" matInput class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" [(ngModel)]=\"userLoginModel.username\">\n      <mat-error *ngIf=\"userLogin.get('username').hasError('required')\">\n                Username is <strong>required</strong>\n              </mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"example-full-width\" appearance=\"none\">\n      <input id=\"input1\" matInput class=\"form-control\" placeholder=\"Password\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"userLoginModel.password\"> \n      <mat-error *ngIf=\"userLogin.get('password').hasError('required')\">\n        Password is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  \n  <a [routerLink]=\"\" id=\"fp\" data-toggle=\"modal\" data-target=\"#forgotpasswordModal\">Forgot Password ?</a><br>\n  <button mat-ripple mat-raised-button type=\"submit\" [disabled]=\"loading\">Login</button><br>\n  <p class=\"spinner\" style=\"margin-top: -400px;\n  margin-bottom: 1rem;\n  display: block;\n  z-index: 9999999999;\n  background: #1b1b1b;\n  position: relative;\n  height: 840px;\" *ngIf=\"loading\" layout-align=\"center center\">\n      <img src=\"https://sem.aviconn.in/assets/images/loader.gif\" style=\"max-width: 150px;margin-top: 160px;\">\n  </p>\n  <div style=\"display:inline-block;\">\n    <a href=\"http://www.aviconn.in/\" target=\"_blank\" style=\"float: left\" id=\"avc\">www.aviconn.in</a></div>\n  <div style=\"display:inline-block; margin-left: 152px;\">\n    <a href=\"mailto:sem@aviconn.in?Subject=Aviconn ESM Enquiry\" style=\"float:right\" id=\"sup\">Support</a></div>\n  <br>\n\n</form>\n\n<div class=\"footimg\">\n  <img class=\"bottomImg\" src=\"assets/image/bottom_img.png\">\n</div>\n<!-- <popup>Password Reset</popup> -->\n<div class=\"modal fade\" id=\"forgotpasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n          <div *ngIf=\"!isCollapsed\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Forgot Password</h5>\n        </div>\n        <div *ngIf=\"isCollapsed\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Reset Password</h5>\n            </div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"!isCollapsed\">\n        <form (ngSubmit)=\"onForgottpwd()\" #addMountForm=\"ngForm\">\n          <!-- user name input box -->\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">User Name:</label>\n            <input type=\"text\" #nameRef=\"ngModel\" maxlength=\"20\" minlength=\"4\" required class=\"form-control\"\n              id=\"recipient-name\" name=\"userid\" [(ngModel)]=\"forgotModel.Username\">\n            <div *ngIf=\"nameRef.errors && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger\">\n              <div [hidden]=\"!nameRef.errors.required\">\n                Please enter a Username\n              </div>\n              <div [hidden]=\"!nameRef.errors.minlength\">\n                please enter atleast 8 characters\n\n              </div>\n            </div>\n          </div>\n\n\n          <!-- Mobile Input box -->\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Mobile No.:</label>\n            <input type=\"text\" #mobileRef=\"ngModel\" maxlength=\"10\" minlength=\"10\" required class=\"form-control\"\n              name=\"mobile\" [(ngModel)]=\"forgotModel.mobile\">\n            <div *ngIf=\"mobileRef.errors && (mobileRef.dirty || mobileRef.touched)\" class=\"alert alert-danger\">\n              <div [hidden]=\"!mobileRef.errors.required\">\n                Please enter a Mobile No.\n              </div>\n              <div [hidden]=\"!mobileRef.errors.minlength\">\n                please enter 10-digit correct Number\n\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Email</label>\n            <input style=\"color: rgb(197, 27, 27);\" type=\"email\" #emailRef=\"ngModel\" maxlength=\"30\" required email\n              class=\"form-control\" name=\"email\" [(ngModel)]=\"forgotModel.email\">\n            <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\n              <div [hidden]=\"!emailRef.errors.required\">\n                Please enter a Email ID.\n\n              </div>\n              <div [hidden]=\"!emailRef.errors.email\">\n                please enter valid Email ID\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button [disabled]=\"!addMountForm.form.valid\" type=\"submit\" class=\"btn btn-warning\">Submit</button>\n          </div>\n        </form>\n      </div>\n       \n      \n      <!-- 2nd form update password-->\n        <div *ngIf=\"isCollapsed\">\n        <form (ngSubmit)=\"onResetpwd()\" #addResetForm=\"ngForm\" autocomplete=\"true\">\n            <!-- user name input box -->\n            <div class=\"form-group\">\n              <label class=\"col-form-label\">OTP:</label>\n              <input type=\"text\" #otpRef=\"ngModel\" maxlength=\"5\" minlength=\"5\" required class=\"form-control\"\n                id=\"recipient-otp\" name=\"otp\" [(ngModel)]=\"resetModel.otp\" >\n              <div *ngIf=\"otpRef.errors && (otpRef.dirty || otpRef.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!otpRef.errors.required\">\n                  Please enter a valid otp\n  \n                </div>\n                <div [hidden]=\"!otpRef.errors.minlength\">\n                  please enter 5 characters\n  \n                </div>\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <label class=\"col-form-label\">New Password :</label>\n              <input type=\"password\" #newpwdRef=\"ngModel\" maxlength=\"15\" minlength=\"8\" required class=\"form-control\"\n                name=\"newpassword\" [(ngModel)]=\"resetModel.newpassword\">\n              <div *ngIf=\"newpwdRef.invalid && (newpwdRef.dirty || newpwdRef.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!newpwdRef.errors.required\">\n                  Please enter a New password\n  \n                </div>\n                <div [hidden]=\"!newpwdRef.errors.minlength\">\n                  please enter valid New password\n  \n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-form-label\">Confirm Password:</label>\n              <input type=\"password\" #cpwdRef=\"ngModel\" maxlength=\"15\" minlength=\"8\" required compare class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"resetModel.confirmpassword\">\n              <div *ngIf=\"cpwdRef.errors && (cpwdRef.dirty || cpwdRef.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!cpwdRef.errors.required\">\n                  Please enter a Confirm Password.\n  \n                </div>\n                    <div  *ngIf=\"cpwdRef.errors['compare']\">Password not match..try again</div>\n                <div [hidden]=\"!cpwdRef.errors.minlength\">\n                  please enter valid Confirm Password\n  \n                </div>\n              </div>\n            </div>\n    \n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button [disabled]=\"!addResetForm.form.valid\" type=\"submit\" class=\"btn btn-warning\">OK</button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_userLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/userLogin */ "./src/app/models/userLogin.ts");
/* harmony import */ var _models_forgotpassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/forgotpassword */ "./src/app/models/forgotpassword.ts");
/* harmony import */ var _dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dialog-over/dialog-over.component */ "./src/app/dialog-over/dialog-over.component.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/dashboard-data.service */ "./src/app/services/dashboard-data.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_resetpassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/resetpassword */ "./src/app/models/resetpassword.ts");













var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, userService, dialog, global, data, dashData) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.global = global;
        this.data = data;
        this.dashData = dashData;
        this.Result = 0;
        this.isCollapsed = false;
        this.userLoginModel = new _models_userLogin__WEBPACK_IMPORTED_MODULE_1__["userLogin"]('', '', '');
        this.forgotModel = new _models_forgotpassword__WEBPACK_IMPORTED_MODULE_2__["Forgotpassword"]('', '', '');
        this.resetModel = new _models_resetpassword__WEBPACK_IMPORTED_MODULE_12__["resetpassword"]('', '', '');
        this.userLogin = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            password: [btoa(''), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = false;
        if (localStorage.getItem('token') && localStorage.getItem('account')) {
            this.global.me = JSON.parse(localStorage.getItem('account'));
            this.router.navigate(['/dashboard']);
            var myObj = JSON.parse(localStorage.getItem("account"));
            if (myObj['UserType'] == 1) {
                this.data.changeMessage("superadmin");
                localStorage.setItem('user_category', 'superadmin');
            }
            else if (myObj['UserType'] == 4 || myObj['UserType'] == 5) {
                this.data.changeMessage("customer");
                localStorage.setItem('user_category', 'customer');
            }
            else if (myObj['UserType'] == 2) {
                this.data.changeMessage("customer");
                localStorage.setItem('user_category', 'fireAlarm');
            }
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log("sending value: ", this.userLoginModel.username, btoa(this.userLoginModel.password));
        if (this.userLoginModel.username == '' || this.userLoginModel.password == '') {
            this.loginerror = "All fields are mandatory";
            var dialogRef = this.dialog.open(_dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_3__["DialogOverComponent"], {
                data: this.loginerror,
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
            return;
        }
        this.loading = true;
        this.loginValue = { 'username': this.userLoginModel.username, 'password': btoa(this.userLoginModel.password) };
        this.userService.loginUser(this.loginValue).subscribe(function (response) {
            console.log("Login Response : ", response);
            _this.loading = false;
            localStorage.setItem('token', response['token']);
            localStorage.setItem('Saved Engergy', response['Saved Engergy']);
            _this.global.me = response['user'];
            _this.router.navigate(['/dashboard']);
            _this.userLoginModel.UserType = response['UserType'];
            var myObj = JSON.parse(localStorage.getItem("account"));
            if (myObj['UserType'] == 1) {
                _this.data.changeMessage("superadmin");
                localStorage.setItem('user_category', 'superadmin');
            }
            else if (myObj['UserType'] == 4 || myObj['UserType'] == 5) {
                _this.data.changeMessage("customer");
                localStorage.setItem('user_category', 'customer');
            }
            else if (myObj['UserType'] == 2) {
                _this.data.changeMessage("customer");
                localStorage.setItem('user_category', 'fireAlarm');
            }
        }, function (error) {
            _this.loading = false;
            _this.loginerror = "Login Error, please check your credentials";
            var dialogRef = _this.dialog.open(_dialog_over_dialog_over_component__WEBPACK_IMPORTED_MODULE_3__["DialogOverComponent"], {
                data: _this.loginerror,
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    LoginComponent.prototype.onForgottpwd = function () {
        var _this = this;
        console.log("forgot password: ", this.forgotModel);
        this.userService.forgetpassword(this.forgotModel).subscribe(function (data) {
            console.log('Server Response ! ', data);
            _this.Result = data.result;
            _this.msg = data.Error;
            console.log('Result : ', _this.Result);
            if (_this.Result == 1) {
                _this.isCollapsed = true;
            }
            else {
                alert(_this.msg);
            }
        }, function (error) {
            console.log('Error! ', error);
        });
    };
    LoginComponent.prototype.onResetpwd = function () {
        var _this = this;
        console.log("reset value: ", this.resetModel);
        this.isCollapsed = false;
        this.userService.resetPassword(this.resetModel).subscribe(function (data) {
            _this.Result = data.result;
            if (_this.Result == 1) {
                _this.msg = data.success;
                location.reload();
            }
        }, function (error) {
            _this.msg = error.error;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_4__["DashboardDataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/changepassword.ts":
/*!******************************************!*\
  !*** ./src/app/models/changepassword.ts ***!
  \******************************************/
/*! exports provided: changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
var changePassword = /** @class */ (function () {
    function changePassword(token, oldpassword, newpassword) {
        this.token = token;
        this.oldpassword = oldpassword;
        this.newpassword = newpassword;
    }
    return changePassword;
}());



/***/ }),

/***/ "./src/app/models/forgotpassword.ts":
/*!******************************************!*\
  !*** ./src/app/models/forgotpassword.ts ***!
  \******************************************/
/*! exports provided: Forgotpassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forgotpassword", function() { return Forgotpassword; });
var Forgotpassword = /** @class */ (function () {
    function Forgotpassword(Username, mobile, email) {
        this.Username = Username;
        this.mobile = mobile;
        this.email = email;
    }
    return Forgotpassword;
}());



/***/ }),

/***/ "./src/app/models/resetpassword.ts":
/*!*****************************************!*\
  !*** ./src/app/models/resetpassword.ts ***!
  \*****************************************/
/*! exports provided: resetpassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetpassword", function() { return resetpassword; });
var resetpassword = /** @class */ (function () {
    function resetpassword(otp, newpassword, confirmpassword) {
        this.otp = otp;
        this.newpassword = newpassword;
        this.confirmpassword = confirmpassword;
    }
    return resetpassword;
}());



/***/ }),

/***/ "./src/app/models/siteDataModel.ts":
/*!*****************************************!*\
  !*** ./src/app/models/siteDataModel.ts ***!
  \*****************************************/
/*! exports provided: SiteDetailsModel, LiveMeteringDataModel, BaselineData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailsModel", function() { return SiteDetailsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveMeteringDataModel", function() { return LiveMeteringDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineData", function() { return BaselineData; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var SiteDetailsModel = /** @class */ (function () {
    function SiteDetailsModel() {
    }
    return SiteDetailsModel;
}());

var LiveMeteringDataModel = /** @class */ (function () {
    function LiveMeteringDataModel() {
    }
    return LiveMeteringDataModel;
}());

var BaselineData = /** @class */ (function () {
    function BaselineData() {
    }
    BaselineData.asFormGroup = function (baselineData) {
        var fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            serialNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.serialNo, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            AisleGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.AisleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            TotalLights: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.TotalLights, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            wattage1Light: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.wattage1Light, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ExpectedConsump: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.ExpectedConsump, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            CurrentConsump: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](baselineData.CurrentConsump, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        return fg;
    };
    return BaselineData;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, CustomerDetailsModel, Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsModel", function() { return CustomerDetailsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var CustomerDetailsModel = /** @class */ (function () {
    function CustomerDetailsModel() {
    }
    return CustomerDetailsModel;
}());

var Album = /** @class */ (function () {
    function Album() {
    }
    Album.asFormGroup = function (album) {
        var fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](album.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](album.id, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](album.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        return fg;
    };
    return Album;
}());



/***/ }),

/***/ "./src/app/models/userLogin.ts":
/*!*************************************!*\
  !*** ./src/app/models/userLogin.ts ***!
  \*************************************/
/*! exports provided: userLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
var userLogin = /** @class */ (function () {
    function userLogin(username, password, UserType) {
        this.username = username;
        this.password = password;
        this.UserType = UserType;
    }
    return userLogin;
}());



/***/ }),

/***/ "./src/app/output-graph/output-graph.component.css":
/*!*********************************************************!*\
  !*** ./src/app/output-graph/output-graph.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.chartBorder{\n    margin: 2px;\n    border-top: 58px solid orangered;\n    border-left: 1px solid orangered;\n    border-bottom: 1px solid orangered;\n    border-right: 1px solid orangered;\n    padding: 15px;\n    border-radius: 8px;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0LWdyYXBoL291dHB1dC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQtZ3JhcGgvb3V0cHV0LWdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jaGFydEJvcmRlcntcbiAgICBtYXJnaW46IDJweDtcbiAgICBib3JkZXItdG9wOiA1OHB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/output-graph/output-graph.component.html":
/*!**********************************************************!*\
  !*** ./src/app/output-graph/output-graph.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"alarmdata\" style=\"width: 100%;display:block; \"></div>\n\n"

/***/ }),

/***/ "./src/app/output-graph/output-graph.component.ts":
/*!********************************************************!*\
  !*** ./src/app/output-graph/output-graph.component.ts ***!
  \********************************************************/
/*! exports provided: OutputGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputGraphComponent", function() { return OutputGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");




var Boost = __webpack_require__(/*! highcharts/modules/boost */ "./node_modules/highcharts/modules/boost.js");
var noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
var More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
Boost(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
var OutputGraphComponent = /** @class */ (function () {
    function OutputGraphComponent(UserService) {
        this.UserService = UserService;
        this.siteId = 90;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    OutputGraphComponent.prototype.loadData = function (data) {
        this.alarmdata.nativeElement.innerHTML = data;
    };
    OutputGraphComponent.prototype.ngOnInit = function () {
        highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('alarmdata', this.lineChartOptions);
        this.getMonthlyTrend();
    };
    OutputGraphComponent.prototype.getMonthlyTrend = function () {
        var _this = this;
        var data1 = { 'site_id': this.siteId };
        this.UserService.energySavingMonthlyTrend(data1).subscribe(function (response) {
            var seriesData = [];
            for (var k = 0; k < response['Data'].length; k++) {
                var energyConsumed = void 0;
                energyConsumed = { "name": "energyConsumed", 'y': response['Data'][k]['energy_consumed'] };
                var enegySaved = { "name": "energySaved", 'y': response['Data'][k]['energy_saved'] };
                var percentageSaved = { "name": "percentageSaved", 'type': 'spline', 'y': response['Data'][k]['percentage_saved'] };
                var data2 = [{ "data": [energyConsumed, enegySaved, percentageSaved] }];
                seriesData.push(data2);
            }
            // highcharts = Highcharts;
            _this.lineChartOptions = {
                colorCount: '4',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                chart: {
                    type: "spline",
                    backgroundColor: "#222222",
                    overflow: 'scroll'
                },
                title: {
                    style: {
                        color: 'white',
                    },
                    text: 'Snapshot Monthly Trend'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['months']
                },
                yAxis: {
                    title: {
                        style: { color: 'white', },
                        text: "Value"
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    }
                },
                tooltip: {
                    valueSuffix: ""
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: seriesData
            };
            console.log("graph data", _this.lineChartOptions);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alarmdata'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OutputGraphComponent.prototype, "alarmdata", void 0);
    OutputGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-output-graph',
            template: __webpack_require__(/*! ./output-graph.component.html */ "./src/app/output-graph/output-graph.component.html"),
            styles: [__webpack_require__(/*! ./output-graph.component.css */ "./src/app/output-graph/output-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], OutputGraphComponent);
    return OutputGraphComponent;
}());



/***/ }),

/***/ "./src/app/pf-table/pf-table.component.css":
/*!*************************************************!*\
  !*** ./src/app/pf-table/pf-table.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    margin-left: 670px;\n    margin-top: 300px;\n}\n\n.mat-dialog-container {\n    box-shadow:#E6E7E7;\n    background: #E6E7E7;\n    color: #fff;\n}\n\n/* table Starts */\n\n.panel-heading{\n    position: relative;\n    background-color: #ff7a01;\n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n\n.hover-effect{\n    border-color: #4C4B4B;\n    background-color: #4C4B4B;\n}\n\n.status-panel-body{\n    width:100%;\n    background-color:black;\n    position:relative;\n    border-radius:3px; \n    border:1px solid #ff7a01;  \n    padding: 10px;\n}\n\n.chartBorder{\n    width: 100%;\n\n}\n\n/* table End */\n\n#cancel{\n    background-color: #ff7a01;  \n}\n\n/* Site Deatils table start */\n\n.panel-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding: 5px;  \n}\n\n.mat-form-field{\n \n font-size: 14px;\n width: 100%;\n}\n\n.mat-table {\n width: 100%;\n text-align:left;\n border-spacing: 0;\n border-collapse: collapse;\n}\n\n.mat-header-cell{\n background-color: black;\n padding: 8px;\n font-size: 16px;\n \n /* text-align: center; */\n}\n\n.mat-row:nth-child(even){\n    background-color: #696969;\n }\n\n.mat-row:nth-child(odd){\n    background-color: #3F3F3F;\n }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 1px;\n}\n\nmat-cell, mat-footer-cell, mat-header-cell {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    word-wrap: break-word;\n    min-height: inherit;\n    padding-left: 22px;\n    border-right: 1px solid #222;\n}\n\n.mat-header-row {\n    min-height: 76px;\n    /* width: 1675px; */\n}\n\n.headerRow{\n background: red;\n padding: 8px;\n text-align: center;\n font-size: 16px;\n}\n\n.mat-paginator{\n background: #000000;\n}\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n      padding: 13px;\n    }\n  \n    .mat-table .mat-cell:before {\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n  \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGYtdGFibGUvcGYtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFJQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBLGNBQWM7O0FBQ2Q7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsNkJBQTZCOztBQUM3QjtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFDQTs7Q0FFQyxlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixlQUFlOztDQUVmLHdCQUF3QjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFDQTtJQUNHLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFHQTtJQUNJO01BQ0UsU0FBUztNQUNUO0lBQ0Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztJQUNoQjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGFBQWE7SUFDZjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLG1CQUFtQjs7TUFFbkIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7TUFDRTtNQUNBLGNBQWM7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BmLXRhYmxlL3BmLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA2NzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiNFNkU3RTc7XG4gICAgYmFja2dyb3VuZDogI0U2RTdFNztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG5cbi8qIHRhYmxlIFN0YXJ0cyAqL1xuLnBhbmVsLWhlYWRpbmd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG5cbi5ob3Zlci1lZmZlY3R7XG4gICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG59XG4uc3RhdHVzLXBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4OyBcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7ICBcbiAgICBwYWRkaW5nOiAxMHB4O1xufSAgXG4gXG4uY2hhcnRCb3JkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbiAgICAgXG4vKiB0YWJsZSBFbmQgKi8gXG4jY2FuY2Vse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7ICBcbn1cblxuXG4vKiBTaXRlIERlYXRpbHMgdGFibGUgc3RhcnQgKi9cbi5wYW5lbC1ib2R5e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgIHBhZGRpbmc6IDVweDsgIFxufSAgXG4ubWF0LWZvcm0tZmllbGR7XG4gXG4gZm9udC1zaXplOiAxNHB4O1xuIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYmxlIHtcbiB3aWR0aDogMTAwJTtcbiB0ZXh0LWFsaWduOmxlZnQ7XG4gYm9yZGVyLXNwYWNpbmc6IDA7XG4gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5tYXQtaGVhZGVyLWNlbGx7XG4gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gcGFkZGluZzogOHB4O1xuIGZvbnQtc2l6ZTogMTZweDtcbiBcbiAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTtcbiB9XG4gLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0YzRjtcbiB9XG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbn1cblxubWF0LWNlbGwsIG1hdC1mb290ZXItY2VsbCwgbWF0LWhlYWRlci1jZWxsIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xufVxuLm1hdC1oZWFkZXItcm93IHtcbiAgICBtaW4taGVpZ2h0OiA3NnB4O1xuICAgIC8qIHdpZHRoOiAxNjc1cHg7ICovXG59XG4uaGVhZGVyUm93e1xuIGJhY2tncm91bmQ6IHJlZDtcbiBwYWRkaW5nOiA4cHg7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtcGFnaW5hdG9ye1xuIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAubWF0LXRhYmxlIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICB9XG4gIFxuICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgfVxuICBcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAgICAgZm9udC1zaXplOiAuODVlbTtcbiAgICB9XG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbiAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIH1cbn1cbiAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/pf-table/pf-table.component.html":
/*!**************************************************!*\
  !*** ./src/app/pf-table/pf-table.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content id=\"selectdash\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 \">\n        <div class=\"panel-heading\">\n            <i class=\"fa fa-bar-chart-o\"></i> Power-Factor below allowed values\n        </div>\n                <div class=\"chart-body\">\n                  <div class=\"example-header\" fxLayout=\"row\">\n                      <mat-form-field>\n                          <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search anything in table here ...\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"example-container mat-elevation-z8\">\n\n                        <mat-table [dataSource]=\"dataSource\" matSort>\n\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"datetime\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > Date Time</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Date Time\" > {{row.datetime}} </mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"power_source\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Power Source</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"power_source\" > {{row.power_source}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Name Column -->\n                          <ng-container matColumnDef=\"R_Phase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >R-Phase</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"R-Phase\" > {{row.r_phase}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Site Type -->\n                          <ng-container matColumnDef=\"Y_Phase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >Y-Phase</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Y-Phase\" > {{row.y_phase}}</mat-cell>\n                          </ng-container>\n                          <ng-container matColumnDef=\"B_Phase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header >B-Phase</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" data-label=\"Y-Phase\"> {{row.b_phase}} </mat-cell>\n                          </ng-container>\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                          </mat-row> \n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" ></mat-paginator>\n                       \n                      </div>\n                    </div>\n                  </div>\n                </div>\n</div>\n<div mat-dialog-actions>\n  <button (click)='exportPFFluctuationData()' id=\"cancel\" mat-button >Export</button>\n  <button (click)='onNoClick()' id=\"cancel\" mat-button >Close</button>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pf-table/pf-table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pf-table/pf-table.component.ts ***!
  \************************************************/
/*! exports provided: DialogData, PfTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfTableComponent", function() { return PfTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var PfTableComponent = /** @class */ (function () {
    function PfTableComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.displayedColumns = ['datetime', 'power_source', 'R_Phase', 'Y_Phase', 'B_Phase'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.siteId = localStorage.getItem('siteId');
    }
    PfTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PfTableComponent.prototype.ngOnInit = function () {
        this.fetch_power_factor_fluctuation_data();
        this.siteId = localStorage.getItem('siteId');
    };
    PfTableComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PfTableComponent.prototype.fetch_power_factor_fluctuation_data = function () {
        var _this = this;
        var data = { 'site_id': this.siteId };
        this.dataService.fetch_power_factor_fluctuation_data(data).subscribe(function (response) {
            console.log("res of pf table : ", response);
            var pfData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var data_1 = response['data'][i];
                pfData.push({ "datetime": data_1['created'],
                    "power_source": data_1["power_source"],
                    "r_phase": data_1["r_phase"],
                    "y_phase": data_1["y_phase"],
                    "b_phase": data_1["b_phase"],
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](pfData);
            _this.dataSource.paginator = _this.paginator.toArray()[0];
            _this.dataSource.sort = _this.sort.toArray()[0];
        });
    };
    PfTableComponent.prototype.exportPFFluctuationData = function () {
        var data = { "site_id": this.siteId };
        this.dataService.exportPFFluctuationData(data).subscribe(function (response) {
            console.log("response: ", response);
            var current_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
            var blob = response.body;
            var downloadURL = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = ("power_factor_data_" + current_date + ".csv");
            link.click();
        });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PfTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PfTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], PfTableComponent.prototype, "table", void 0);
    PfTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pf-table',
            template: __webpack_require__(/*! ./pf-table.component.html */ "./src/app/pf-table/pf-table.component.html"),
            styles: [__webpack_require__(/*! ./pf-table.component.css */ "./src/app/pf-table/pf-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            DialogData])
    ], PfTableComponent);
    return PfTableComponent;
}());



/***/ }),

/***/ "./src/app/services/dashboard-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/dashboard-data.service.ts ***!
  \****************************************************/
/*! exports provided: DashboardDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDataService", function() { return DashboardDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var DashboardDataService = /** @class */ (function () {
    function DashboardDataService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DashboardDataService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    DashboardDataService.prototype.setData = function (data) {
        this.data = data;
        console.log("3rd service class : ", data);
    };
    DashboardDataService.prototype.getData = function () {
        var temp = this.data;
        //this.clearData();
        return temp;
    };
    DashboardDataService.prototype.clearData = function () {
        this.data = undefined;
    };
    DashboardDataService.prototype.getSiteCurrentLoadInfo = function (data) {
        return this.http.post(this.baseUrl + 'getSiteCurrLoadInfo/', data, this.getAuthHeaders());
    };
    DashboardDataService.prototype.getCustomerDetail = function () {
        return this.http.get(this.baseUrl + 'customers', this.getAuthHeaders());
    };
    DashboardDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardDataService);
    return DashboardDataService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var DataService = /** @class */ (function () {
    function DataService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.isLoading = false;
        this.isModalLoading = false;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("superAdmin");
        this.currentMessage = this.messageSource.asObservable();
        //Here is implementation of sucess and error msgs
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    DataService.prototype.showLoader = function (isModal) {
        if (isModal === void 0) { isModal = false; }
        if (isModal) {
            this.isModalLoading = true;
        }
        else {
            this.isLoading = true;
        }
    };
    DataService.prototype.hideLoader = function (isModal) {
        if (isModal === void 0) { isModal = false; }
        if (isModal) {
            this.isModalLoading = false;
        }
        else {
            this.isLoading = false;
        }
    };
    DataService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    DataService.prototype.data = function (data) {
        return this.http.post(this.baseUrl + 'data/', data);
    };
    DataService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || "Server Error");
    };
    DataService.prototype.removeToken = function (usertoken) {
        return this.http.delete(this.baseUrl + 'movie/' + usertoken + '/', this.getAuthHeaders());
    };
    DataService.prototype.changeMessage = function (message) {
        console.log("New message source received :" + message);
        this.messageSource.next(message);
    };
    DataService.prototype.getGraphData = function (data) {
        return this.http.post(this.baseUrl + 'getSiteDailyConsumptionData/', data, this.getAuthHeaders());
    };
    DataService.prototype.getSiteHourlyConsumptionData = function (data) {
        return this.http.post(this.baseUrl + 'getSiteHourlyConsumptionData/', data, this.getAuthHeaders());
    };
    DataService.prototype.getWarehouseList = function (data) {
        return this.http.post(this.baseUrl + 'getCustomerSites/', data, this.getAuthHeaders()).catch(this.errorHandler);
    };
    DataService.prototype.getSiteInfo = function (data) {
        return this.http.post(this.baseUrl + 'site-details/', data, this.getAuthHeaders());
    };
    DataService.prototype.getPowerSrcDistData = function (data) {
        return this.http.post(this.baseUrl + 'getPowerSrcDistData/', data, this.getAuthHeaders());
    };
    DataService.prototype.getDailyPowerSrcDistData = function (data) {
        return this.http.post(this.baseUrl + 'getDailyPowerSrcDistData/', data, this.getAuthHeaders());
    };
    DataService.prototype.getDailyPowerSrcDistDataTime = function (data) {
        return this.http.post(this.baseUrl + 'getDailyPowerSrcDistDataTime/', data, this.getAuthHeaders());
    };
    DataService.prototype.getHourlyPowerSrcDistDataTime = function (data) {
        return this.http.post(this.baseUrl + 'getHourlyPowerSrcDistDataTime/', data, this.getAuthHeaders());
    };
    DataService.prototype.getHourlyPowerSrcDistData = function (data) {
        return this.http.post(this.baseUrl + 'getHourlyPowerSrcDistData/', data, this.getAuthHeaders());
    };
    DataService.prototype.fetchBaselineData = function (data) {
        return this.http.post(this.baseUrl + 'fetchBaseline/', data, this.getAuthHeaders());
    };
    DataService.prototype.saveBaselineData = function (data) {
        return this.http.post(this.baseUrl + 'saveBaseline/', data, this.getAuthHeaders());
    };
    DataService.prototype.switchSiteDashboardApi = function (data) {
        return this.http.post(this.baseUrl + "switchSiteDashboard/", data, this.getAuthHeaders());
    };
    DataService.prototype.success = function (msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    DataService.prototype.warn = function (msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    DataService.prototype.switchSiteDashboard = function (data) {
        return this.http.post(this.baseUrl + "switchSiteDashboard/", data, this.getAuthHeaders());
    };
    DataService.prototype.saveInventoryData = function (data) {
        return this.http.post(this.baseUrl + "saveInventoryData/", data, this.getAuthHeaders());
    };
    DataService.prototype.editInventoryData = function (data) {
        return this.http.post(this.baseUrl + 'editInventoryData/', data, this.getAuthHeaders());
    };
    DataService.prototype.deleteInventoryData = function (data) {
        return this.http.post(this.baseUrl + 'deleteInventoryData/', data, this.getAuthHeaders());
    };
    DataService.prototype.fireDevicefetchdata = function (data) {
        return this.http.post(this.baseUrl + 'fireDevicefetchdata/', data, this.getAuthHeaders());
    };
    DataService.prototype.fetchfireDeviceTypeData = function (data) {
        return this.http.post(this.baseUrl + 'fireDeviceTypefetch/', data, this.getAuthHeaders());
    };
    DataService.prototype.fireDeviceTypeAdd = function (data) {
        return this.http.post(this.baseUrl + 'fireDeviceTypeAdd/', data, this.getAuthHeaders());
    };
    DataService.prototype.fireDeviceSnapshotApi = function (data) {
        return this.http.post(this.baseUrl + 'snapShotApi/', data, this.getAuthHeaders());
    };
    DataService.prototype.lightsData = function (data) {
        return this.http.post(this.baseUrl + 'lightsDataApi/', data, this.getAuthHeaders());
    };
    DataService.prototype.fansData = function (data) {
        return this.http.post(this.baseUrl + 'FansDataApi/', data, this.getAuthHeaders());
    };
    DataService.prototype.expiredDeviceslist = function (data) {
        return this.http.post(this.baseUrl + 'expireddevicesList/', data, this.getAuthHeaders());
    };
    DataService.prototype.avgDataValue = function (data) {
        return this.http.post(this.baseUrl + 'avgData/', data, this.getAuthHeaders());
    };
    DataService.prototype.excelDataValue = function (data) {
        return this.http.post(this.baseUrl + 'DownloadExcel/', data, { observe: "response", responseType: "blob" });
    };
    DataService.prototype.load_live_graph = function (data) {
        return this.http.post(this.baseUrl + "liveDataLoadGraph/", data, this.getAuthHeaders());
    };
    DataService.prototype.load_graph_every_sec = function (data) {
        return this.http.post(this.baseUrl + "liveDataEverySecond/", data, this.getAuthHeaders());
    };
    //new load every sec api
    DataService.prototype.new_load_data_sec = function (data) {
        return this.http.post(this.baseUrl + "liveLoadData/test", data, this.getAuthHeaders());
    };
    DataService.prototype.hourly_load_graph = function (data) {
        return this.http.post(this.baseUrl + "loadDataPowerSource/test", data, this.getAuthHeaders());
    };
    DataService.prototype.daily_load_graph = function (data) {
        return this.http.post(this.baseUrl + "dailyLoadGraph/", data, this.getAuthHeaders());
    };
    DataService.prototype.mains_dg_daily_load_graph = function (data) {
        return this.http.post(this.baseUrl + "loadDataMainsDgDaily/", data, this.getAuthHeaders());
    };
    DataService.prototype.download_excel_load_data = function (data) {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return this.http.post(this.baseUrl + "downloadExcelLoadData/", data, { observe: "response", responseType: "blob", headers: httpHeaders });
    };
    DataService.prototype.fetch_power_factor_fluctuation_data = function (data) {
        return this.http.post(this.baseUrl + "fluctuatedPowerFactorData/", data, this.getAuthHeaders());
    };
    DataService.prototype.monthly_min_max_load_data = function (data) {
        return this.http.post(this.baseUrl + 'monthlyMinMaxLoadData/', data, this.getAuthHeaders());
    };
    DataService.prototype.exportPFFluctuationData = function (data) {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return this.http.post(this.baseUrl + "downloadExcelPFData/", data, { observe: "response", responseType: "blob", headers: httpHeaders });
    };
    DataService.prototype.exportMonthlyMinMaxData = function (data) {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return this.http.post(this.baseUrl + "downloadExcelMonthlyMinMaxData/", data, { observe: "response", responseType: "blob", headers: httpHeaders });
    };
    DataService.prototype.dgFuelConsumptionData = function (data) {
        return this.http.post(this.baseUrl + "dgFuelConsumptionData/", data, this.getAuthHeaders());
    };
    DataService.prototype.fetchDGFuelDataCustomeRange = function (data) {
        return this.http.post(this.baseUrl + "fetchDGFuelDataCustomeRange/", data, this.getAuthHeaders());
    };
    DataService.prototype.dgFuelConsumptionMonthlyTrend = function (data) {
        return this.http.post(this.baseUrl + "dgFuelMonthlyTrend/", data, this.getAuthHeaders());
    };
    DataService.prototype.dgFuelExcelExport = function (data) {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return this.http.post(this.baseUrl + "dgFuelDataExcelExport/", data, { observe: "response", responseType: "blob", headers: httpHeaders });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]());
        this.user = this.userSource.asObservable();
    }
    Object.defineProperty(GlobalService.prototype, "me", {
        set: function (user) {
            localStorage.setItem('account', JSON.stringify(user));
            this.userSource.next(user);
        },
        enumerable: true,
        configurable: true
    });
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/services/modalService.ts":
/*!******************************************!*\
  !*** ./src/app/services/modalService.ts ***!
  \******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.baseUrl + 'movies/', this.getAuthHeaders());
    };
    MovieService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    MovieService.prototype.getAll = function (d) {
        return this.http.post(this.baseUrl + 'albums/', d)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (albums) {
            return albums;
        }));
    };
    MovieService.prototype.getAllAsFormArray = function (d) {
        return this.getAll(d).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (albums) {
            // Maps all the albums into a formGroup defined in tge album.model.ts
            var fgs = albums.map(_models_user__WEBPACK_IMPORTED_MODULE_4__["Album"].asFormGroup);
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"](fgs);
        }));
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    TokenService.prototype.getToken = function () {
        return this.http.get(this.baseUrl + 'tokens/', this.getAuthHeaders());
    };
    TokenService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");







var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + 'login/', userData, this.getAuthHeaders()).catch(this.errorHandler);
    };
    UserService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || "Server Error");
    };
    UserService.prototype.removeToken = function (usertoken) {
        return this.http.delete(this.baseUrl + 'movie/' + usertoken + '/', this.getAuthHeaders());
    };
    UserService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    UserService.prototype.superAdminCustomertable = function () {
        return this.http.get(this.baseUrl + 'customer/', this.getAuthHeaders());
    };
    UserService.prototype.forgetpassword = function (data) {
        return this.http.post(this.baseUrl + 'forgot/', data);
    };
    UserService.prototype.resetPassword = function (data) {
        return this.http.post(this.baseUrl + 'reset/', data);
    };
    UserService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + 'change-pwd/', data, this.getAuthHeaders());
    };
    UserService.prototype.getCustomerDetails = function (data) {
        return this.http.post(this.baseUrl + 'customer-details', data, this.getAuthHeaders());
    };
    UserService.prototype.validateToken = function (data) {
        return this.http.post(this.baseUrl + 'validateToken/', data);
    };
    //here is api for baselinedata
    UserService.prototype.siteSnapshot = function (data) {
        return this.http.post(this.baseUrl + 'snapshot/', data, this.getAuthHeaders());
    };
    UserService.prototype.energySavingMonthlyTrend = function (data) {
        return this.http.post(this.baseUrl + 'savingMonthlyTrend/', data, this.getAuthHeaders());
    };
    UserService.prototype.subMeteringMonthlyTrend = function (data) {
        return this.http.post(this.baseUrl + 'subMeteringMonthlyTrend/', data, this.getAuthHeaders());
    };
    UserService.prototype.energySavingPie = function (data) {
        return this.http.post(this.baseUrl + 'savingPieChartData/', data, this.getAuthHeaders());
    };
    UserService.prototype.energySavingMonthlyData = function (data) {
        return this.http.post(this.baseUrl + 'savingMonthly/', data, this.getAuthHeaders());
    };
    UserService.prototype.submeteringMonthlyBarChart = function (data) {
        return this.http.post(this.baseUrl + 'submeteringMonthlyBarChart/', data, this.getAuthHeaders());
    };
    UserService.prototype.energySavingHourlyData = function (data) {
        return this.http.post(this.baseUrl + 'hourlySavingData/', data, this.getAuthHeaders());
    };
    UserService.prototype.submeteringHourlyData = function (data) {
        return this.http.post(this.baseUrl + 'submeteringHourlyData/', data, this.getAuthHeaders());
    };
    UserService.prototype.siteLoad = function (data) {
        return this.http.post(this.baseUrl + 'siteLoad/', data);
    };
    UserService.prototype.getBaselineHistory = function (data) {
        return this.http.post(this.baseUrl + 'baselineHistory/', data, this.getAuthHeaders());
    };
    UserService.prototype.getSiteSnapshot = function (data) {
        return this.http.post(this.baseUrl + 'siteSnapShotEnergySavingApi/', data, this.getAuthHeaders());
    };
    UserService.prototype.getSubmeteringSnapshot = function (data) {
        return this.http.post(this.baseUrl + 'submeteringSnapshot/', data, this.getAuthHeaders());
    };
    UserService.prototype.getCustomerSnapshot = function (data) {
        return this.http.post(this.baseUrl + 'customerSnapShotEnergySavingApi/', data, this.getAuthHeaders());
    };
    // for fire alarm
    UserService.prototype.getFireAlarmSnapShotData = function (data) {
        return this.http.post(this.baseUrl + 'fireAlarm/', data, this.getAuthHeaders());
    };
    UserService.prototype.getEmailHistorySnapShotData = function (data) {
        return this.http.post(this.baseUrl + 'emailhistory/', data, this.getAuthHeaders());
    };
    UserService.prototype.getAllCustomers = function () {
        return this.http.get(this.baseUrl + "customer/", this.getAuthHeaders());
    };
    UserService.prototype.getAlarmsOnCustomerPage = function (data) {
        return this.http.post(this.baseUrl + "alarmListOnCustomerPage/", data);
    };
    UserService.prototype.getAlarmOnSitePage = function (data) {
        return this.http.post(this.baseUrl + "alarmListOnSitePage/", data, this.getAuthHeaders());
    };
    UserService.prototype.getCustAlarmGraphData = function (data) {
        return this.http.post(this.baseUrl + 'getCustAlarmGraph/', data, this.getAuthHeaders());
    };
    // super admin services start here for homepage
    UserService.prototype.getSuperAdminSnapShot = function (data) {
        return this.http.post(this.baseUrl + 'snapshot/', data, this.getAuthHeaders());
    };
    UserService.prototype.getSuperAdminAlarmPriorityTable = function (data) {
        return this.http.post(this.baseUrl + 'alarmTypeApi/', data, this.getAuthHeaders());
    };
    UserService.prototype.getAllCustomersOnSuperAdmin = function (data) {
        return this.http.post(this.baseUrl + 'customerDetails/', data, this.getAuthHeaders());
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/submetering/submetering.component.css":
/*!*******************************************************!*\
  !*** ./src/app/submetering/submetering.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_trakcer{\n   \n    margin-top: 10px;\n    margin-left:10px;\n    margin-right: 5px;\n    font-size: 18px;\n }\n \n hr {\n     width: 95%;\n     height: 1px;\n     margin-left: 10px;\n     margin-top: 0px;\n     background-color:#666;\n     \n    }\n \n .container-fluid {\n      background: black;\n   }\n \n .mat-option.mat-selected:not(.mat-option-disabled) {\n       color: #fff !important;\n   }\n \n /* Snapshot row start */\n \n .circle-title2{\n     margin-bottom: 15px;\n     text-align: center;\n     \n     \n      }\n \n .circle-title-heading{\n       position:relative; \n       height: 80px; \n       width: 80px;\n       margin: 0 auto -40px;\n       border-radius: 100%;\n       transition: all ease-in-out .3s;\n       background:#ff7a01;\n       color: #fff;\n     }\n \n .circle-title-heading .fa{\n        line-height: 80px;\n     }\n \n .circle-title-heading .fa.icon{\n       font-size: 4em;\n       padding-top: 8px;\n    }\n \n #sparklineA{ \n     font-size: 15px;\n    }\n \n .box{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n    /*   height:180px;*/\n       border-radius: 5px;\n     \n    }\n \n .carbonbox{\n      padding-top: 55px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n   /*   height:180px;*/\n      border-radius: 5px;\n\n    }\n \n .box2{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n       border-radius: 5px;\n       height: 140px;\n       margin-bottom: 50px;\n    }\n \n .box:hover{\n       border-color: #4C4B4B;\n       background-color: #4C4B4B;\n    }\n \n .box-heading{\n         text-transform: uppercase;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n    }\n \n .text-faded{\n       color:rgba(255,255,255,0.7);\n    }\n \n .box-number{\n       padding:5px 0 15px;\n       font-size: 26px;\n       font-weight: 700;\n       line-height: 1;\n    }\n \n .box-number1{\n      padding:5px 0 15px;\n      font-size: 19px;\n      font-weight: 900;\n      line-height: 1;\n   }\n \n .footer{\n       display: block;\n       padding: 5px;\n       color:rgba(255,255,255,0.5);\n       transition: all ease-in-out .3s;\n    }\n \n .footer:hover{\n       text-decoration: none;\n       color:rgba(255,255,255,0.5);\n       background-color: rgba(0,0,0,0.2);\n    }\n \n #img-ctn{\n       padding-top: 14px;\n    }\n \n /* Snapshot row end */\n \n /* status and energy power status row Starts */\n \n .panel-heading{\n    position: relative;\n  \n    background-color: #ff7a01;\n    \n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n \n .hover-effect{\n    border-color: #4C4B4B;\n       background-color: #4C4B4B;\n }\n \n .status-panel-body{\n        \n        width:100%;\n        background-color:black;\n        position:relative;\n        border-radius:3px; \n        border:1px solid #ff7a01;  \n        padding: 10px;\n        }\n \n .chartBorder{\n          width: 100%;\n \n      \n      }\n \n /* status and energy power status row End */\n \n /* Customer detail table start */\n \n .panel-body{\n       width:100%;\n       border:1px solid #ff7a01;\n       padding: 5px;  \n }\n \n .chart-body{\n      border:1px solid #ff7a01;\n      padding: 10px;\n      position: relative;\n      min-height: 360px; /* ensure consistent chart container height to avoid layout shifts */\n      width: 100%;\n}\n \n table {\n    width: 100%;\n    text-align:left;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n \n .mat-header-cell{\n    background-color: black;\n    padding: 8px;\n    font-size: 16px;\n }\n \n .headerRow{\n    background: red;\n    padding: 8px;\n    text-align: center;\n    font-size: 16px;\n }\n \n .mat-paginator{\n    background: #000000;\n }\n \n th {\n    background-color: #000000;\n    padding: 8px;\n    text-align: center;\n }\n \n td{\n       \n    padding:8px;\n }\n \n .mat-row:nth-child(even){\n   background-color: #696969;\n}\n \n .mat-row:nth-child(odd){\n   background-color: #3F3F3F;\n}\n \n /* Customer detail table end */\n \n /* Energy status graph start */\n \n .heading-panel{\n    background:#ff7a01;\n    padding:5px;\n    text-align: left;\n    font-size: 16px;\n    border-radius: 3px;\n    margin-top: 12px;\n    }\n \n /* Energy status graph end */\n \n .chngpwd-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding-top: 15px;\n    margin-top: 55px;\n    \n }\n \n .card-header{\n    color: black;\n    text-align: left;\n    font-size: 18px;\n }\n \n .oldp{\n    margin-top: 10px;\n }\n \n .chpwd{\n    text-align: left;\n }\n \n .btn-primary {\n    background: #E66F00;\n    color: #ffffff;\n }\n \n .btn{\n    border: #E66F00;\n     \n }\n \n .chngpwd{\n    margin-top: 125px;\n }\n \n .charheader2{\n    margin: 5px;\n    border-top: 1px solid orangered;\n    background: orangered;\n    padding: 5px;\n    border-radius: 5px;\n \n }\n \n #breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n \n *  breadcrump */\n\n.btn-breadcrumb .btn:not(:last-child):after {\n   content: \" \";\n   display: block;\n   width: 0;\n   height: 0;\n   border-top: 17px solid transparent;\n   border-bottom: 17px solid transparent;\n   border-left: 10px solid #303030;\n   position: absolute;\n   top: 50%;\n   margin-top: -17px;\n   left: 100%;\n   z-index: 3;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:not(:last-child):before {\n   content: \" \";\n   display: block;\n   width: 0;\n   height: 0;\n   border-top: 17px solid transparent;\n   border-bottom: 17px solid transparent;\n   border-left: 10px solid rgb(173, 173, 173);\n   position: absolute;\n   top: 50%;\n   margin-top: -17px;\n   margin-left: 1px;\n   left: 100%;\n   z-index: 3;\n }\n \n .btn-breadcrumb .btn {\n   padding:6px 12px 6px 24px;\n   background: #303030;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:first-child {\n   padding:6px 6px 6px 10px;\n   background: #303030;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:last-child {\n   padding:6px 18px 6px 24px;\n   background: #303030;\n   color: #fff;\n }\n \n /** Default button **/\n \n .btn-breadcrumb .btn.btn-default:not(:last-child):after {\n   border-left: 10px solid #303030;\n }\n \n /* The responsive part */\n \n .btn-breadcrumb > * > div {\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;    \n }\n \n .btn-breadcrumb > *:nth-child(n+2) {\n   display:none;\n }\n \n /* === For phones =================================== */\n \n @media (max-width: 767px) {\n     .btn-breadcrumb > *:nth-last-child(-n+2) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 60px;\n     }\n }\n \n /* === For tablets ================================== */\n \n @media (min-width: 768px) and (max-width:991px) {\n     .btn-breadcrumb > *:nth-last-child(-n+4) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 100px;\n     }\n }\n \n /* === For desktops ================================== */\n \n @media (min-width: 992px) {\n     .btn-breadcrumb > *:nth-last-child(-n+6) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 170px;\n     }\n }\n \n #page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n}\n \n .md-raised.md-primary.md-button.md-link-ripple{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n}\n \n #excelbtn{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n   margin-right: 25px;\n}\n \n #button{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n   margin-right: -81px;\n\n}\n \n .close {\n   float: right;\n   font-size: 1.5rem;\n   font-weight: 700;\n   line-height: 1;\n   color: #fff;\n   text-shadow: 0 1px 0 #fff;\n   opacity: .5;\n}\n \n .mat-table[_ngcontent-c13] .mat-cell[_ngcontent-c13]:first-child {\n   margin-top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWV0ZXJpbmcvc3VibWV0ZXJpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztDQUVBO0tBQ0ksVUFBVTtLQUNWLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsZUFBZTtLQUNmLHFCQUFxQjs7SUFFdEI7O0NBRUE7TUFDRSxpQkFBaUI7R0FDcEI7O0NBRUM7T0FDRyxzQkFBc0I7R0FDMUI7O0NBRUEsdUJBQXVCOztDQUV2QjtLQUNFLG1CQUFtQjtLQUNuQixrQkFBa0I7OztNQUdqQjs7Q0FDRDtPQUNFLGlCQUFpQjtPQUNqQixZQUFZO09BQ1osV0FBVztPQUNYLG9CQUFvQjtPQUNwQixtQkFBbUI7T0FDbkIsK0JBQStCO09BQy9CLGtCQUFrQjtPQUNsQixXQUFXO0tBQ2I7O0NBQ0E7UUFDRyxpQkFBaUI7S0FDcEI7O0NBQ0E7T0FDRSxjQUFjO09BQ2QsZ0JBQWdCO0lBQ25COztDQUNBO0tBQ0MsZUFBZTtJQUNoQjs7Q0FDQztPQUNFLGlCQUFpQjtPQUNqQix5QkFBeUI7T0FDekIseUJBQXlCO0lBQzVCLG1CQUFtQjtPQUNoQixrQkFBa0I7O0lBRXJCOztDQUNBO01BQ0UsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6Qix5QkFBeUI7R0FDNUIsbUJBQW1CO01BQ2hCLGtCQUFrQjs7SUFFcEI7O0NBRUE7T0FDRyxpQkFBaUI7T0FDakIseUJBQXlCO09BQ3pCLHlCQUF5QjtPQUN6QixrQkFBa0I7T0FDbEIsYUFBYTtPQUNiLG1CQUFtQjtJQUN0Qjs7Q0FDQTtPQUNHLHFCQUFxQjtPQUNyQix5QkFBeUI7SUFDNUI7O0NBQ0E7U0FDSyx5QkFBeUI7U0FDekIsdUJBQXVCO1NBQ3ZCLGdCQUFnQjtTQUNoQixtQkFBbUI7SUFDeEI7O0NBQ0E7T0FDRywyQkFBMkI7SUFDOUI7O0NBQ0E7T0FDRyxrQkFBa0I7T0FDbEIsZUFBZTtPQUNmLGdCQUFnQjtPQUNoQixjQUFjO0lBQ2pCOztDQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztHQUNqQjs7Q0FDQztPQUNHLGNBQWM7T0FDZCxZQUFZO09BQ1osMkJBQTJCO09BQzNCLCtCQUErQjtJQUNsQzs7Q0FDQTtPQUNHLHFCQUFxQjtPQUNyQiwyQkFBMkI7T0FDM0IsaUNBQWlDO0lBQ3BDOztDQUNBO09BQ0csaUJBQWlCO0lBQ3BCOztDQUVILHFCQUFxQjs7Q0FJckIsOENBQThDOztDQUM5QztJQUNHLGtCQUFrQjs7SUFFbEIseUJBQXlCOztJQUV6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7Q0FDQTtJQUNHLHFCQUFxQjtPQUNsQix5QkFBeUI7Q0FDL0I7O0NBQ0E7O1FBRU8sVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2I7O0NBRUo7VUFDTSxXQUFXOzs7TUFHZjs7Q0FHTCwyQ0FBMkM7O0NBRzNDLGdDQUFnQzs7Q0FHaEM7T0FDTSxVQUFVO09BQ1Ysd0JBQXdCO09BQ3hCLFlBQVk7Q0FDbEI7O0NBQ0Q7TUFDTSx3QkFBd0I7TUFDeEIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBRSxvRUFBb0U7TUFDdkYsV0FBVztBQUNqQjs7Q0FDQztJQUNHLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7Q0FDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7Q0FDQTtJQUNHLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0NBQ0M7SUFDRSxtQkFBbUI7Q0FDdEI7O0NBRUE7SUFDRyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjs7Q0FDQTs7SUFFRyxXQUFXO0NBQ2Q7O0NBQ0E7R0FDRSx5QkFBeUI7QUFDNUI7O0NBQ0E7R0FDRyx5QkFBeUI7QUFDNUI7O0NBQ0MsOEJBQThCOztDQUU5Qiw4QkFBOEI7O0NBQzlCO0lBQ0csa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7O0NBR0gsNEJBQTRCOztDQUk1QjtJQUNHLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7Q0FFbkI7O0NBR0E7SUFDRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0NBQ0E7SUFDRyxnQkFBZ0I7Q0FDbkI7O0NBQ0E7SUFDRyxnQkFBZ0I7Q0FDbkI7O0NBQ0E7SUFDRyxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjs7Q0FDQTtJQUNHLGVBQWU7O0NBRWxCOztDQUNBO0lBQ0csaUJBQWlCO0NBQ3BCOztDQUdBO0lBQ0csV0FBVztJQUNYLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjs7Q0FFckI7O0NBQ0E7R0FDRSxlQUFlO0dBQ2YsWUFBWTtHQUNaLFNBQVM7R0FDVCxXQUFXO0dBQ1gsbUJBQW1CO0FBQ3RCOztDQUdBOzs7R0FHRyxZQUFZO0dBQ1osY0FBYztHQUNkLFFBQVE7R0FDUixTQUFTO0dBQ1Qsa0NBQWtDO0dBQ2xDLHFDQUFxQztHQUNyQywrQkFBK0I7R0FDL0Isa0JBQWtCO0dBQ2xCLFFBQVE7R0FDUixpQkFBaUI7R0FDakIsVUFBVTtHQUNWLFVBQVU7R0FDVixXQUFXO0NBQ2I7O0NBQ0E7R0FDRSxZQUFZO0dBQ1osY0FBYztHQUNkLFFBQVE7R0FDUixTQUFTO0dBQ1Qsa0NBQWtDO0dBQ2xDLHFDQUFxQztHQUNyQywwQ0FBMEM7R0FDMUMsa0JBQWtCO0dBQ2xCLFFBQVE7R0FDUixpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLFVBQVU7R0FDVixVQUFVO0NBQ1o7O0NBRUE7R0FDRSx5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLFdBQVc7Q0FDYjs7Q0FDQTtHQUNFLHdCQUF3QjtHQUN4QixtQkFBbUI7R0FDbkIsV0FBVztDQUNiOztDQUNBO0dBQ0UseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixXQUFXO0NBQ2I7O0NBRUEscUJBQXFCOztDQUNyQjtHQUNFLCtCQUErQjtDQUNqQzs7Q0FHQSx3QkFBd0I7O0NBRXhCO0tBQ0ksbUJBQW1CO0tBQ25CLGdCQUFnQjtLQUNoQix1QkFBdUI7Q0FDM0I7O0NBRUE7R0FDRSxZQUFZO0NBQ2Q7O0NBRUEsdURBQXVEOztDQUN2RDtLQUNJO1NBQ0ksYUFBYTtLQUNqQjtLQUNBO1NBQ0ksZUFBZTtLQUNuQjtDQUNKOztDQUVBLHVEQUF1RDs7Q0FDdkQ7S0FDSTtTQUNJLGFBQWE7S0FDakI7S0FDQTtTQUNJLGdCQUFnQjtLQUNwQjtDQUNKOztDQUVBLHdEQUF3RDs7Q0FDeEQ7S0FDSTtTQUNJLGFBQWE7S0FDakI7S0FDQTtTQUNJLGdCQUFnQjtLQUNwQjtDQUNKOztDQUNBO0dBQ0UsV0FBVztHQUNYLDhCQUE4QjtHQUM5QixtQkFBbUI7QUFDdEI7O0NBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsY0FBYztHQUNkLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixlQUFlO0FBQ2xCOztDQUNBO0dBQ0csbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsZUFBZTtHQUNmLGtCQUFrQjtBQUNyQjs7Q0FFQTtHQUNHLG1CQUFtQjtHQUNuQixjQUFjO0dBQ2QsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGVBQWU7R0FDZixtQkFBbUI7O0FBRXRCOztDQUdBO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsY0FBYztHQUNkLFdBQVc7R0FDWCx5QkFBeUI7R0FDekIsV0FBVztBQUNkOztDQUNBO0dBQ0csY0FBYztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1ldGVyaW5nL3N1Ym1ldGVyaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkX3RyYWtjZXJ7XG4gICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuIH1cbiBcbiBociB7XG4gICAgIHdpZHRoOiA5NSU7XG4gICAgIGhlaWdodDogMXB4O1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2NjY7XG4gICAgIFxuICAgIH1cblxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICB9XG4gICAgXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICB9XG4gICBcbiAgIC8qIFNuYXBzaG90IHJvdyBzdGFydCAqL1xuIFxuICAgLmNpcmNsZS10aXRsZTJ7XG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgXG4gICAgIFxuICAgICAgfVxuICAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmd7XG4gICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxuICAgICAgIGhlaWdodDogODBweDsgXG4gICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgbWFyZ2luOiAwIGF1dG8gLTQwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgICAgIGJhY2tncm91bmQ6I2ZmN2EwMTtcbiAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgfSBcbiAgICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgIH1cbiAgICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYS5pY29ue1xuICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgICNzcGFya2xpbmVBeyBcbiAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAgLmJveHtcbiAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAgLyogICBoZWlnaHQ6MTgwcHg7Ki9cbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIFxuICAgIH1cbiAgICAuY2FyYm9uYm94e1xuICAgICAgcGFkZGluZy10b3A6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgIC8qICAgaGVpZ2h0OjE4MHB4OyovXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICB9XG4gXG4gICAgLmJveDJ7XG4gICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5ib3g6aG92ZXJ7XG4gICAgICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG4gICAgfVxuICAgIC5ib3gtaGVhZGluZ3tcbiAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICAudGV4dC1mYWRlZHtcbiAgICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gICAgfVxuICAgIC5ib3gtbnVtYmVye1xuICAgICAgIHBhZGRpbmc6NXB4IDAgMTVweDtcbiAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gICAgLmJveC1udW1iZXIxe1xuICAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgfVxuICAgIC5mb290ZXJ7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgIH1cbiAgICAuZm9vdGVyOmhvdmVye1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICAjaW1nLWN0bntcbiAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB9XG4gICAgXG4gLyogU25hcHNob3Qgcm93IGVuZCAqL1xuIFxuIFxuIFxuIC8qIHN0YXR1cyBhbmQgZW5lcmd5IHBvd2VyIHN0YXR1cyByb3cgU3RhcnRzICovXG4gLnBhbmVsLWhlYWRpbmd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTAxO1xuICAgIFxuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuIC5ob3Zlci1lZmZlY3R7XG4gICAgYm9yZGVyLWNvbG9yOiAjNEM0QjRCO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XG4gfVxuIC5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9ICBcbiBcbiAgICAuY2hhcnRCb3JkZXJ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gXG4gICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICBcbiAvKiBzdGF0dXMgYW5kIGVuZXJneSBwb3dlciBzdGF0dXMgcm93IEVuZCAqL1xuIFxuIFxuIC8qIEN1c3RvbWVyIGRldGFpbCB0YWJsZSBzdGFydCAqL1xuIFxuIFxuIC5wYW5lbC1ib2R5e1xuICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTAxO1xuICAgICAgIHBhZGRpbmc6IDVweDsgIFxuIH0gIFxuLmNoYXJ0LWJvZHl7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLWhlaWdodDogMzYwcHg7IC8qIGVuc3VyZSBjb25zaXN0ZW50IGNoYXJ0IGNvbnRhaW5lciBoZWlnaHQgdG8gYXZvaWQgbGF5b3V0IHNoaWZ0cyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG59XG4gdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB9XG4gIC5tYXQtaGVhZGVyLWNlbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG4gLmhlYWRlclJvd3tcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuICAubWF0LXBhZ2luYXRvcntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuIH1cbiBcbiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiB0ZHtcbiAgICAgICBcbiAgICBwYWRkaW5nOjhweDtcbiB9IFxuIC5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG59XG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XG59XG4gLyogQ3VzdG9tZXIgZGV0YWlsIHRhYmxlIGVuZCAqL1xuIFxuIC8qIEVuZXJneSBzdGF0dXMgZ3JhcGggc3RhcnQgKi9cbiAuaGVhZGluZy1wYW5lbHtcbiAgICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuIFxuIFxuIC8qIEVuZXJneSBzdGF0dXMgZ3JhcGggZW5kICovXG4gXG4gXG4gXG4gLmNobmdwd2QtYm9keXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICAgIFxuIH1cbiBcbiBcbiAuY2FyZC1oZWFkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuIH1cbiAub2xkcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuIH1cbiAuY2hwd2R7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiB9XG4gLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRTY2RjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuIH1cbiAuYnRue1xuICAgIGJvcmRlcjogI0U2NkYwMDtcbiAgICAgXG4gfVxuIC5jaG5ncHdke1xuICAgIG1hcmdpbi10b3A6IDEyNXB4O1xuIH1cbiBcbiBcbiAuY2hhcmhlYWRlcjJ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcbiB9XG4gI2JyZWFkY3J1bWJ7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB6LWluZGV4OiA5OTk7XG4gICB0b3A6IDUwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG59XG5cblxuKiAgYnJlYWRjcnVtcCAqL1xuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICB3aWR0aDogMDtcbiAgIGhlaWdodDogMDtcbiAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogNTAlO1xuICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICBsZWZ0OiAxMDAlO1xuICAgei1pbmRleDogMztcbiAgIGNvbG9yOiAjZmZmO1xuIH1cbiAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICBjb250ZW50OiBcIiBcIjtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgd2lkdGg6IDA7XG4gICBoZWlnaHQ6IDA7XG4gICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogNTAlO1xuICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICBtYXJnaW4tbGVmdDogMXB4O1xuICAgbGVmdDogMTAwJTtcbiAgIHotaW5kZXg6IDM7XG4gfVxuIFxuIC5idG4tYnJlYWRjcnVtYiAuYnRuIHtcbiAgIHBhZGRpbmc6NnB4IDEycHggNnB4IDI0cHg7XG4gICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgY29sb3I6ICNmZmY7XG4gfVxuIC5idG4tYnJlYWRjcnVtYiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgIHBhZGRpbmc6NnB4IDZweCA2cHggMTBweDtcbiAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICBjb2xvcjogI2ZmZjtcbiB9XG4gLmJ0bi1icmVhZGNydW1iIC5idG46bGFzdC1jaGlsZCB7XG4gICBwYWRkaW5nOjZweCAxOHB4IDZweCAyNHB4O1xuICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgIGNvbG9yOiAjZmZmO1xuIH1cbiBcbiAvKiogRGVmYXVsdCBidXR0b24gKiovXG4gLmJ0bi1icmVhZGNydW1iIC5idG4uYnRuLWRlZmF1bHQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuIH1cbiBcbiBcbiAvKiBUaGUgcmVzcG9uc2l2ZSBwYXJ0ICovXG4gXG4gLmJ0bi1icmVhZGNydW1iID4gKiA+IGRpdiB7XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgICBcbiB9XG4gXG4gLmJ0bi1icmVhZGNydW1iID4gKjpudGgtY2hpbGQobisyKSB7XG4gICBkaXNwbGF5Om5vbmU7XG4gfVxuIFxuIC8qID09PSBGb3IgcGhvbmVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rMikge1xuICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgfSBcbiAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICB9XG4gfVxuIFxuIC8qID09PSBGb3IgdGFibGV0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xuICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzQpIHtcbiAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgIH0gXG4gICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgIH1cbiB9XG4gXG4gLyogPT09IEZvciBkZXNrdG9wcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNikge1xuICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgfSBcbiAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcbiAgICAgfVxuIH1cbiAjcGFnZS13cmFwcGVyIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZzogMTMwcHggMjVweCAxMzBweCAyNXB4O1xuICAgYmFja2dyb3VuZDogIzBGMEYwRjtcbn1cbi5tZC1yYWlzZWQubWQtcHJpbWFyeS5tZC1idXR0b24ubWQtbGluay1yaXBwbGV7XG4gICBiYWNrZ3JvdW5kOiAjRTY2RjAwOzsgXG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIGJvcmRlcjogI0U2NkYwMDs7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBwYWRkaW5nOiA3cHggMThweDtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNleGNlbGJ0bntcbiAgIGJhY2tncm91bmQ6ICNFNjZGMDA7OyBcbiAgIGNvbG9yOiAjZmZmZmZmO1xuICAgYm9yZGVyOiAjRTY2RjAwOztcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIHBhZGRpbmc6IDdweCAxOHB4O1xuICAgbWFyZ2luLXRvcDogOHB4O1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4jYnV0dG9ue1xuICAgYmFja2dyb3VuZDogI0U2NkYwMDs7IFxuICAgY29sb3I6ICNmZmZmZmY7XG4gICBib3JkZXI6ICNFNjZGMDA7O1xuICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgcGFkZGluZzogN3B4IDE4cHg7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gICBmb250LXNpemU6IDE0cHg7XG4gICBtYXJnaW4tcmlnaHQ6IC04MXB4O1xuXG59XG5cbiBcbi5jbG9zZSB7XG4gICBmbG9hdDogcmlnaHQ7XG4gICBmb250LXNpemU6IDEuNXJlbTtcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICBsaW5lLWhlaWdodDogMTtcbiAgIGNvbG9yOiAjZmZmO1xuICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgIG9wYWNpdHk6IC41O1xufVxuLm1hdC10YWJsZVtfbmdjb250ZW50LWMxM10gLm1hdC1jZWxsW19uZ2NvbnRlbnQtYzEzXTpmaXJzdC1jaGlsZCB7XG4gICBtYXJnaW4tdG9wOiAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/submetering/submetering.component.html":
/*!********************************************************!*\
  !*** ./src/app/submetering/submetering.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" style=\"margin-right:15px !important;\">\n    <div class=\"col-md-6 col-sm-8\">\n        <div class=\"row\" style=\"margin-left:4px !important\">\n            <div id=\"bc2\" class=\"btn-group btn-breadcrumb\">\n                <a (click)=\"home()\" *ngIf=\"super_admin_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n                <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n                <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\">\n                    <div>Customer Page</div>\n                </a>\n                <a (click)=\"sitePage()\" *ngIf=\"saving_site_dash\" class=\"btn btn-default\">Site Page</a>\n                 \n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"page-wrapper\" class=\"container-fluid\">\n    <div *ngIf=\"isShown\">\n        <div class=\"row \">\n            <div class=\"dashboard_trakcer\">Change Password</div>\n            <hr>\n            <!-- change password form  -->\n            <div class=\"mt-6 col-8 offset-2 chngpwd\">\n                <div class=\"card\">\n                    <div class=\"card-header\">Change Password</div>\n                    <div class=\"card-body\">\n                        <form #changePassword=ngForm (ngSubmit)=\"onChangePwd()\">\n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-10 oldp \">\n                                    <input type=\"password\" name=\"old_password\" class=\"form-control\"\n                                        placeholder=\"Old Password\" required\n                                        [(ngModel)]=\"changePasswordModel.oldpassword\" base-sixty-four-input>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row\">\n\n                                <div class=\"col-sm-10 newp\">\n                                    <input type=\"password\" name=\"new_password\" class=\"form-control\"\n                                        placeholder=\"New Password\" required\n                                        [(ngModel)]=\"changePasswordModel.newpassword\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row\">\n\n                                <div class=\"col-sm-10 confp\">\n                                    <input type=\"password\" name=\"conf_password\" class=\"form-control\"\n                                        placeholder=\"Confirm Password\" required\n                                        [(ngModel)]=\"changePasswordModel.confirmpassword\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-10 chpwd\">\n\n                                    <button type=\"submit\" class=\"btn btn-primary \"\n                                        [disabled]=\"!changePassword.valid\">Submit</button>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- dashboard content -->\n    <div *ngIf=\"!isShown\">\n\n\n        <div class=\"row\">\n            <div class=\"dashboard_trakcer\"> {{sitename}}</div>\n            <hr>\n\n\n            <!-- 1st snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <i class=\"fa fa-bell fa-fw fa-3x\"></i>\n                    </div>\n                    <div class=\"box\" style=\"cursor: pointer;\" (click)=\"alarmTable()\">\n                        <div class=\"box-heading text-faded\">Alarms</div>\n                        &nbsp;\n                        <div class=\"box-number1 text-faded\">{{alarms}}</div>\n\n                        &nbsp;\n                        <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info <i\n                                class=\"fa fa-chevron-circle-right\"></i></a>\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 1st snapshot end -->\n\n\n            <!-- 2nd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n                    </div>\n                    <div class=\"box\">\n                        <div class=\"box-heading text-faded\">Total Energy Consumed</div>\n\n                        <div class=\"box-number text-faded\">{{energyConsumed}} kWh</div>\n                        <div>\n                            <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                            <span id=\"sparklineA\">till {{previous}}</span>\n                        </div>\n                        &nbsp;\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 2nd snapshot end -->\n\n            <!-- 3rd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                    </div>\n                    <div class=\"box\">\n                        <div class=\"box-heading text-faded\">Monthly Units</div>\n\n                        <div class=\"box-number text-faded\">{{monthlyAvg}} kWh </div>\n                        <div>\n                            <span id=\"sparklineA\">from {{monthdate}}</span><br>\n                            <span id=\"sparklineA\">till {{previous}}</span>\n                        </div>\n                        &nbsp;\n                    </div>\n                </div>\n\n            </div>\n\n\n\n            <!-- 3rd snapshot end -->\n\n            <!-- 4th snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n                    </div>\n                    <div class=\"box\">\n                        <div class=\"box-heading text-faded\">Avg. Daily Units</div>\n\n                        <div class=\"box-number text-faded\">{{dailyAvg}} kWh</div>\n                        <div>\n                            <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                            <span id=\"sparklineA\">till {{previous}}</span>\n                        </div>\n\n                        &nbsp;\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <!--Alarm details table-->\n\n        <!--power-status and customer power-status start-->\n        <div class=\"row mt-4\">\n\n            <div class=\"col-md-12 col-sm-12\">\n\n                <div class=\"panel-heading\">\n                    <i class=\"fa fa-bar-chart-o\"></i> Trend Overview(MonthlyTrend)\n                </div>\n                <div class=\"chart-body\">\n\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"lineChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                </div>\n            </div>\n        </div>\n        <!--End of the power-status and customer power-status-->\n\n        <!--chart start-->\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-12 \">\n                <div class=\"heading-panel\">\n\n                    <div class=\"row\">\n                        <div class=\"col-md-7\" style=\"margin-top: 20px;\">\n                            Total Energy Consumption\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field appearance=\"outline\">\n                                <input matInput [max]=\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\"\n                                    [formControl]=\"date\" [value]=\"date.value\" (dateChange)=\"columnGraphFilterChanged()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n\n                        <div *ngIf=\"showIntervalOptions; then thenTemplate else elseTemplate\"></div>\n                        <ng-template #thenTemplate>\n                            <div class=\"col-md-2\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-select [(value)]=\"selected_task\"\n                                        (selectionChange)=\"columnGraphFilterChanged()\">\n                                        <mat-option *ngFor=\"let interval of intervals\" [value]=\"interval.value\">\n                                            {{interval.viewValue}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </ng-template>\n                        <ng-template #elseTemplate>\n                            <div class=\"col-md-2\"></div>\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"chart-body\" *ngIf=\"showDailygraph\">\n                    <highcharts-chart #chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"barChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                </div>\n                <div *ngIf=\"showHourlygraph\">\n                    <highcharts-chart #chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"updatedbarChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-6\"></div>\n                    <div class=\"col-6\">\n                        <button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\"\n                            style=\"float: right;\" (click)=\"exportExcelData()\">\n                            <span class=\"ng-scope\">Export Excel</span>\n                        </button>\n                        <button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\" id=\"excelbtn\"\n                            style=\"float: right;\" (click)=\"changeGraphStacking()\">\n                            <span class=\"ng-scope\">Change Graph</span>\n                        </button>\n                        <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"button\" type=\"button\"\n                            (click)=\"reenable()\">\n                            <span class=\"ng-scope\" *ngIf=\"graphShown\">Disable All</span>\n                            <span class=\"ng-scope\" *ngIf=\"!graphShown\">Enable All</span>\n                        </button>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/submetering/submetering.component.ts":
/*!******************************************************!*\
  !*** ./src/app/submetering/submetering.component.ts ***!
  \******************************************************/
/*! exports provided: SubmeteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmeteringComponent", function() { return SubmeteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_changepassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/changepassword */ "./src/app/models/changepassword.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/dashboard-data.service */ "./src/app/services/dashboard-data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_siteDataModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../models/siteDataModel */ "./src/app/models/siteDataModel.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../excelsheet/excelsheet.component */ "./src/app/excelsheet/excelsheet.component.ts");















var SubmeteringComponent = /** @class */ (function () {
    function SubmeteringComponent(dashData, UserService, DataService, dialog, router) {
        this.dashData = dashData;
        this.UserService = UserService;
        this.DataService = DataService;
        this.dialog = dialog;
        this.router = router;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.intervals = [
            { value: '0', viewValue: 'Daily' },
            { value: '1', viewValue: 'Hourly' }
        ];
        this.selected_graph = '0';
        this.selected_task = '0';
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.showIntervalOptions = false;
        this.showDailygraph = true;
        this.showHourlygraph = false;
        this.is_carbon_emission_visible = localStorage.getItem('carbon_emission_visible');
        this.liveData = new _models_siteDataModel__WEBPACK_IMPORTED_MODULE_11__["LiveMeteringDataModel"]();
        this.updateFlag = false;
        this.whichGraph = 1;
        this.ishide = 1;
        this.graphShown = true;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.isCollapsed = true;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.token = localStorage.getItem('token');
        this.isShown = false;
        this.loading = true;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.pieChart = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.chartConstructor = 'chart';
        this.chartCallback = function () { };
        this.oneToOneFlag = true;
        //breadcrumbs keywords 
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.site_dash = false;
        this.super_admin_home = false;
        this.customer_home = false;
        this.customer_name = false;
        this.Admindata = false;
        this.saving_site_dash = false;
        this.customerOnly = true;
        this.MyntraLightsOnly = false;
        this.MyntraFansOnly = false;
        this.changePasswordModel = new _models_changepassword__WEBPACK_IMPORTED_MODULE_2__["changePassword"](this.token, '', '');
        this.displayedColumns1 = ['alarm_type', 'object_type', 'alarm_priority', 'created_date'];
    }
    SubmeteringComponent.prototype.applySelectFilter = function (event) {
    };
    SubmeteringComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    // helper to normalize series data into Highcharts-friendly form
    SubmeteringComponent.prototype.normalizeSeries = function (inputSeries) {
        if (!inputSeries)
            return [];
        return inputSeries.map(function (s) {
            // if series already looks ok, return as-is
            if (Array.isArray(s.data) || Array.isArray(s)) {
                // ensure numeric y values when data is array of points
                if (Array.isArray(s.data)) {
                    s.data = s.data.map(function (pt) {
                        if (Array.isArray(pt)) {
                            return [Number(pt[0]), Number(pt[1])];
                        }
                        else if (pt && typeof pt === 'object' && pt.x !== undefined) {
                            return [Number(pt.x), Number(pt.y)];
                        }
                        return pt;
                    });
                }
                return s;
            }
            // if s is an object with name and array of points
            if (s && typeof s === 'object' && s.data) {
                s.data = (s.data || []).map(function (pt) {
                    if (Array.isArray(pt))
                        return [Number(pt[0]), Number(pt[1])];
                    if (pt && pt.x !== undefined)
                        return [Number(pt.x), Number(pt.y)];
                    return pt;
                });
                return s;
            }
            return s;
        });
    };
    SubmeteringComponent.prototype.ngOnInit = function () {
        this.siteId = localStorage.getItem('siteId');
        this.sitename = localStorage.getItem('sitename');
        console.log('here site id in energy saving', this.siteId);
        //here is implementation of breadcrumb...
        if (this.user_type == '1') {
            this.super_admin_home = true;
            this.customer_home = false;
            this.customer_name = true; //false
            this.site_dash = false;
            this.Admindata = true;
            this.saving_site_dash = true;
            this.showIntervalOptions = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
            this.showIntervalOptions = false;
            this.customerOnly = false;
        }
        else {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
        }
        if (this.siteId == '29') {
            this.MyntraLightsOnly = true;
        }
        if (this.siteId == '34') {
            this.MyntraFansOnly = true;
        }
        //this.getPowerSourceDistData();
        this.submeteringMonthlyBarChart();
        this.getMonthlyTrend();
        this.getSubmeteringSnapshot();
    };
    //Here is define function for getting site snapshot(energy-saved, saved% etc)
    SubmeteringComponent.prototype.getSubmeteringSnapshot = function () {
        var _this = this;
        var data = { "site_id": this.siteId, "user_type": this.user_type };
        this.UserService.getSubmeteringSnapshot(data).subscribe(function (response) {
            _this.alarms = response['alarms'];
            _this.energyConsumed = response['energy_consumed'];
            _this.dailyAvg = response['dailyAvg'];
            _this.liveDate = response['live_date'];
            _this.previous = response['current_date'];
            _this.monthlyAvg = response['monthlyAvg'];
            _this.monthdate = response['firstmnthDate'];
        });
    };
    SubmeteringComponent.prototype.valuechange = function (newValue) {
        //mymodel = newValue;
        console.log(newValue);
    };
    SubmeteringComponent.prototype.getCust = function () {
        this.dashData.getCustomerDetail().subscribe(function (response) {
        });
    };
    SubmeteringComponent.prototype.alarmTable = function () {
        this.getSiteAlarmsDetails();
        this.showAlarm = true;
    };
    SubmeteringComponent.prototype.AlarmTableClose = function () {
        this.showAlarm = false;
    };
    SubmeteringComponent.prototype.custTable = function () {
        var _this = this;
        this.UserService.superAdminCustomertable().subscribe(function (response) {
            var res = response[0];
            _this.userInfo = res['c'];
            _this.custTable = res['customer'];
        }, function (error) {
        });
    };
    SubmeteringComponent.prototype.changeGraphStacking = function () {
        this.whichGraph ^= 0x1;
        if (this.whichGraph == 0) {
            try {
                this.barChartOptions.plotOptions.column.stacking = ''; // for daily
            }
            catch (_a) {
                console.log("error in daily");
            }
            try {
                this.updatedbarChartOptions.plotOptions.column.stacking = ''; // for hourly
            }
            catch (_b) {
                console.log("err in hourly");
            }
            this.updateFlag = true;
            console.log('Inside normal stacking false');
        }
        else {
            try {
                this.barChartOptions.plotOptions.column.stacking = 'normal'; // for daily
            }
            catch (_c) {
                console.log("error in daily....");
            }
            try {
                this.updatedbarChartOptions.plotOptions.column.stacking = 'normal'; // for hourly
            }
            catch (_d) {
                console.log("error in hourly ....");
            }
            this.updateFlag = true;
            console.log('Inside normal stacking True');
        }
    };
    SubmeteringComponent.prototype.reenable = function () {
        this.ishide ^= 0x1;
        if (this.ishide == 1) {
            this.graphShown = true;
            var chartData = this.chart.chart.legend.allItems;
            for (var i = 0; i <= chartData.length - 1; i++) {
                console.log("data : ", chartData[i]);
                chartData[i].setVisible(true, false);
            }
            this.chart.chart.redraw();
            console.log("reenable function true");
        }
        else {
            this.graphShown = false;
            var chartData = this.chart.chart.legend.allItems;
            for (var i = 0; i <= chartData.length - 1; i++) {
                console.log("data : ", chartData[i]);
                chartData[i].setVisible(false, false);
            }
            this.chart.chart.redraw();
        }
    };
    SubmeteringComponent.prototype.getSiteAlarmsDetails = function () {
        var _this = this;
        var data1 = { "site_id": this.siteId };
        this.UserService.getAlarmOnSitePage(data1).subscribe(function (response) {
            var data = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var res = response['data'][i];
                var alarm_type = res['alarm_type'];
                var object_type = res['object_type'];
                var object_name = res['object_name'];
                var alarm_priority = res['alarm_priority'];
                var created_date = res['created_date'];
                data.push({
                    "alarm_type": alarm_type,
                    "object_type": object_type,
                    "object_name": object_name,
                    "alarm_priority": alarm_priority,
                    "created_date": created_date
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            console.log(data);
            _this.dataSource.paginator = _this.paginator; //mandeep
            _this.dataSource.sort = _this.sort; //mandeep
        }, function (error) { });
    };
    SubmeteringComponent.prototype.getcustomerSnapshot = function () {
        var data = { "site_id": this.siteId };
        this.UserService.siteSnapshot(data).subscribe(function (response) {
            console.log(response);
        });
    };
    SubmeteringComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    SubmeteringComponent.prototype.getRecord = function (row) {
    };
    SubmeteringComponent.prototype.onClickChngpwd = function () {
        this.isShown = true;
    };
    SubmeteringComponent.prototype.customerdetail = function (obj) {
        console.log(obj);
    };
    SubmeteringComponent.prototype.onChangePwd = function () {
        this.chngpwd = { 'token': this.token, 'oldpassword': btoa(this.changePasswordModel.oldpassword), 'newpassword': btoa(this.changePasswordModel.newpassword) };
        this.UserService.changePassword(this.chngpwd).subscribe(function (data) {
        }, function (error) {
            console.log("Server Error: ", error);
        });
    };
    SubmeteringComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        location.reload();
    };
    SubmeteringComponent.prototype.customerPage = function () {
        this.DataService.changeMessage("customer");
    };
    //Here is implementation of bar graph daily and hourly data
    SubmeteringComponent.prototype.submeteringMonthlyBarChart = function () {
        var _this = this;
        var todayDate = new Date();
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        var fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        var data1 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
        this.UserService.submeteringMonthlyBarChart(data1).subscribe(function (response) {
            console.log("ressnw  : ", response);
            // $(function () {
            _this.barChartOptions = {
                colorCount: '12',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                credits: {
                    enabled: false,
                },
                chart: {
                    backgroundColor: '#222222',
                    type: 'column',
                    zoomType: 'x',
                    setVisible: 'false',
                },
                title: {
                    text: _this.graphTitle,
                    style: {
                        color: 'white',
                    },
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['Dates']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    // max:6000,
                    title: {
                        style: { color: 'white', },
                        text: 'Number of units (kWh)'
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    },
                    stackLabels: {
                        enabled: true,
                        rotation: 270,
                        y: -28,
                        style: {
                            color: 'white',
                            fontSize: '11px',
                            verticalAlign: "top",
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        maxPointWidth: 50
                        //colors: ['orange', 'white', 'blue']
                    },
                },
                legend: {
                    itemStyle: { color: 'white', },
                    maxHeight: 80,
                    y: 10,
                    navigation: {
                        activeColor: 'white',
                        animation: true,
                        arrowSize: 12,
                        inactiveColor: '#333',
                        style: {
                            fontWeight: '2px',
                            color: 'white'
                        }
                    }
                },
                series: _this.normalizeSeries(response["Data"]),
            };
            // ensure chart updates after options are set and force reflow
            setTimeout(function () {
                _this.updateFlag = true;
                try {
                    if (_this.chart && _this.chart.chart)
                        _this.chart.chart.reflow();
                }
                catch (e) { }
            }, 0);
            _this.updateFlag = true;
        });
    };
    SubmeteringComponent.prototype.columnGraphFilterChanged = function () {
        var _this = this;
        var mode = this.selected_task;
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        var graphType = this.selected_graph;
        var todayDate = new Date();
        var fromDate;
        var categories = [];
        var series = [];
        var selectedYear = this.date.value.getFullYear();
        var selectedMonth = this.date.value.getMonth();
        var selectedMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM', 'en');
        var currentMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM', 'en');
        var hourlySelectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        if (selectedMonthYear == currentMonthYear) {
            // if the daily filter is for current month only
            // then show the last 30 days data
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        }
        else {
            // if the current month is not same as the selected month
            // then show the data for that complete month
            fromDate = selectedMonthYear + "/01";
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(fromDate, 'yyyy/MM/dd', 'en');
            var day = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            tillDate = selectedMonthYear + "/" + day;
        }
        /**
         *  Call the API on the basis of Graph Type
         */
        if (graphType == '0') {
            // Energy Consumption Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                this.showHourlygraph = false;
                this.showDailygraph = true;
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
                this.UserService.submeteringMonthlyBarChart(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.updateFlag = true;
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                    // this.updateFlag = true;
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                this.showDailygraph = false;
                this.showHourlygraph = true;
                var data = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                console.log('This is mine selected Date in hourly data', hourlySelectedDate);
                // this.barChartOptions.plotOptions.column.stacking='percent';
                this.UserService.submeteringHourlyData(data).subscribe(function (response) {
                    _this.updatedbarChartOptions = {
                        colorCount: '12',
                        colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                        credits: {
                            enabled: false,
                        },
                        chart: {
                            backgroundColor: '#222222',
                            type: 'column',
                            zoomType: 'x',
                            setVisible: 'false',
                        },
                        title: {
                            text: _this.graphTitle,
                            style: {
                                color: 'white',
                            },
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: 'white',
                                },
                            },
                            categories: response['Hours']
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                style: { color: 'white', },
                                text: 'Number of units (kWh)'
                            },
                            labels: {
                                style: {
                                    color: 'white'
                                }
                            },
                            stackLabels: {
                                enabled: true,
                                rotation: 270,
                                y: -28,
                                style: {
                                    color: 'white',
                                    fontSize: '11px',
                                    verticalAlign: "top",
                                }
                            }
                        },
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>' +
                                    'Total: ' + this.point.stackTotal;
                            }
                        },
                        plotOptions: {
                            // series:{
                            //   pointWidth:15
                            // },
                            column: {
                                stacking: 'normal',
                                maxPointWidth: 50
                                //colors: ['orange', 'white', 'blue']
                            },
                        },
                        legend: {
                            itemStyle: { color: 'white', },
                            maxHeight: 80,
                            y: 10,
                            // x:15,
                            navigation: {
                                activeColor: 'white',
                                animation: true,
                                arrowSize: 12,
                                inactiveColor: '#333',
                                style: {
                                    fontWeight: '2px',
                                    color: 'white'
                                }
                            }
                        },
                        series: _this.normalizeSeries(response["Data"]),
                    };
                    console.log("hour : ", _this.updatedbarChartOptions);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
        }
        else {
            // Graph for energy saving data ....
            if (mode == '0') {
                // Graph Filter is for daily data
                this.showDailygraph = true;
                this.showHourlygraph = false;
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
                //this.barChartOptions.plotOptions.column.stacking='percent'; //mandeep for percentage show
                this.UserService.energySavingMonthlyData(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['SavingData'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            else {
                this.showDailygraph = false;
                this.showHourlygraph = true;
                // Graph Filter is for hourly data
                var data = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                console.log('This is mine selected Date in hourly data for energy saving data', hourlySelectedDate);
                this.UserService.energySavingHourlyData(data).subscribe(function (response) {
                    console.log("respsmdksk: ", response);
                    categories = response['Hours'];
                    series = response['SavingData'];
                    _this.updateFlag = true;
                    _this.updatedbarChartOptions.xAxis.categories = categories;
                    _this.updatedbarChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
        }
    };
    //Call function for monthly trend Graph.....
    SubmeteringComponent.prototype.getMonthlyTrend = function () {
        var _this = this;
        var data1 = { 'site_id': this.siteId, "user_type": this.user_type };
        this.UserService.subMeteringMonthlyTrend(data1).subscribe(function (response) {
            _this.lineChartOptions = {
                colorCount: '4',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                chart: {
                    backgroundColor: '#222222',
                    type: 'column',
                    zoomType: 'x',
                    setVisible: 'false',
                },
                title: {
                    style: {
                        color: 'white',
                    },
                    text: 'Snapshot Monthly Trend'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['months']
                },
                yAxis: [{
                        labels: {
                            // format: '{value} units',
                            style: {
                                color: '#ff7a01'
                            }
                        },
                        title: {
                            text: 'Units (KWH)',
                            style: {
                                color: '#ff7a01'
                            }
                        },
                        opposite: false
                    }, {
                        gridLineWidth: 0,
                        title: {
                            text: 'Monthly Avg',
                            style: {
                                color: '#90ED7D'
                            }
                        },
                        labels: {
                            // format: '{value} ',
                            style: {
                                color: '#90ED7D'
                            }
                        },
                        opposite: true
                    }],
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        maxPointWidth: 50
                        //colors: ['orange', 'white', 'blue']
                    },
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: _this.normalizeSeries(response['unit_consumed_data']),
            };
            // trigger update so highcharts-angular picks up new options
            setTimeout(function () {
                _this.updateFlag = true;
                try {
                    if (_this.chart && _this.chart.chart)
                        _this.chart.chart.reflow();
                }
                catch (e) { }
            }, 0);
        });
    };
    SubmeteringComponent.prototype.exportExcelData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        this.dialog.open(_excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_14__["ExcelsheetComponent"], dialogConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], SubmeteringComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], SubmeteringComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], SubmeteringComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubmeteringComponent.prototype, "chart", void 0);
    SubmeteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-submetering',
            template: __webpack_require__(/*! ./submetering.component.html */ "./src/app/submetering/submetering.component.html"),
            styles: [__webpack_require__(/*! ./submetering.component.css */ "./src/app/submetering/submetering.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], SubmeteringComponent);
    return SubmeteringComponent;
}());



/***/ }),

/***/ "./src/app/super-admin/super-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row:hover .mat-cell .customer-table{\n  color: #0a0a09fd;\n  font-size: large;\n}\n\n\n.mat-row:hover .mat-cell{\n  color: #ff6600;\n  font-size: large;\n}\n\n\n/*------new end-----*/\n\n\n.dashboard_trakcer{\n   \n  margin-top: 10px;\n  margin-left:10px;\n  margin-right: 5px;\n  font-size: 18px;\n}\n\n\nhr {\n   width: 95%;\n   height: 1px;\n   margin-left: 10px;\n   margin-top: 0px;\n   background-color:#666;\n   \n  }\n\n\n.mat-option.mat-selected:not(.mat-option-disabled) {\n     color: #ffffff !important;\n }\n\n\n/* Snapshot row start */\n\n\n#alarm{\n  padding-bottom: 65px;\n}\n\n\n.circle-title2{\n   margin-bottom: 15px; \n   text-align: center;\n   \n   \n    }\n\n\n.circle-title-heading{\n     position:relative; \n     height: 80px; \n     width: 80px;\n     margin: 0 auto -40px;\n     border-radius: 100%;\n     transition: all ease-in-out .3s;\n     background:#ff7a01;\n     color: #fff;\n   }\n\n\n.circle-title-heading .fa{\n      line-height: 80px;\n   }\n\n\n.circle-title-heading .fa.icon{\n     font-size: 4em;\n     padding-top: 8px;\n  }\n\n\n.box{\n     padding-top: 50px;\n     background-color: #222222;\n     border: 1px solid #ff7a01;\n     border-radius: 5px;\n   \n  }\n\n\n.box2{\n     padding-top: 50px;\n     background-color: #222222;\n     border: 1px solid #ff7a01;\n     border-radius: 5px;\n     height: 140px;\n     margin-bottom: 50px;\n  }\n\n\n.box:hover{\n     border-color: #4C4B4B;\n     background-color: #4C4B4B;\n  }\n\n\n.box-heading{\n       text-transform: uppercase;\n       text-overflow: ellipsis;\n       overflow: hidden;\n       white-space: nowrap;\n  }\n\n\n.text-faded{\n     color:rgba(255,255,255,0.7);\n  }\n\n\n.box-number{\n     padding:5px 0 15px;\n     font-size: 26px;\n     font-weight: 600;\n     line-height: 1;\n  }\n\n\n.footer{\n     display: block;\n     padding: 5px;\n     color:rgba(255,255,255,0.5);\n     transition: all ease-in-out .3s;\n  }\n\n\n.footer:hover{\n     text-decoration: none;\n     color:rgba(255,255,255,0.5);\n     background-color: rgba(0,0,0,0.2);\n  }\n\n\n#img-ctn{\n     padding-top: 14px;\n  }\n\n\n/* Snapshot row end */\n\n\n/* status and energy power status row Starts */\n\n\n.panel-heading{\n  position: relative;\n\n  background-color: #ff7a01;\n  \n  border: 1px;\n  border-radius: 3px;\n  text-align: left;\n  padding: 5px;\n  font-size: 16px;\n}\n\n\n.hover-effect{\n  border-color: #4C4B4B;\n     background-color: #4C4B4B;\n}\n\n\n.status-panel-body{\n      \n      width:100%;\n      background-color:black;\n      position:relative;\n      border-radius:3px; \n      border:1px solid #ff7a01;  \n      padding: 10px;\n      }\n\n\n.chartBorder{\n        width: 100%;\n\n    \n    }\n\n\n/* status and energy power status row End */\n\n\n/* Customer detail table start */\n\n\n.panel-body{\n     width:100%;\n     border:1px solid #ff7a01;\n     padding: 5px;  \n}\n\n\nmat-form-field{\n  \n  font-size: 14px;\n  width: 100%;\n}\n\n\ntable {\n  width: 100%;\n  text-align:left;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n\n.mat-header-cell{\n  background-color: black;\n  padding: 8px;\n  font-size: 16px;\n}\n\n\n.mat-cell {\n  font-size: 12px;\n  border-right: 1px solid #222;\n  padding: 10px;\n}\n\n\n.headerRow{\n  background: red;\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n}\n\n\n.mat-paginator{\n  background: #000000;\n}\n\n\nth {\n  background-color: #000000;\n  padding: 8px;\n  text-align: center;\n}\n\n\ntd{    \n  padding:8px;\n}\n\n\n.mat-row:nth-child(even){\n  background-color: #696969;\n}\n\n\n.mat-row:nth-child(odd){\n  background-color: #3F3F3F;\n}\n\n\n.mat-table .mat-cell:last-child{\n  border-bottom: 0;\n}\n\n\n/* Customer detail table end */\n\n\n/* Energy status graph start */\n\n\n.heading-panel{\n  background:#ff7a01;\n  padding:5px;\n  text-align: left;\n  font-size: 16px;\n  border-radius: 3px;\n  margin-top: 12px;\n  }\n\n\n.chart-body{\n  border:1px solid #ff7a01;\n  padding: 10px;\n  position: relative;\n}\n\n\n/* Energy status graph end */\n\n\n.chngpwd-body{\n  width:100%;\n  border:1px solid #ff7a01;\n  padding-top: 15px;\n  margin-top: 55px;\n  \n}\n\n\n.card-header{\n  color: black;\n  text-align: left;\n  font-size: 18px;\n}\n\n\n.oldp{\n  margin-top: 10px;\n}\n\n\n.chpwd{\n  text-align: left;\n}\n\n\n.btn-primary {\n  background: #E66F00;\n  color: #ffffff;\n}\n\n\n.btn{\n  border: #E66F00;\n \n}\n\n\n.chngpwd{\n  margin-top: 125px;\n}\n\n\n.charheader2{\n  margin: 5px;\n  border-top: 1px solid orangered;\n  background: orangered;\n  padding: 5px;\n  border-radius: 5px;\n\n}\n\n\n/*  Shahid */\n\n\n#breadcrumb{\n  position: fixed;\n  z-index: 999;\n  top: 50px;\n  width: 100%;\n  background: #222222;\n}\n\n\n/* Shahid Start for Breadcrum */\n\n\n*  breadcrump *\n\n.btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n\n\n.btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n\n\n.btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n\n.btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n\n\n.btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n\n\n/** Default button **/\n\n\n.btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n\n\n/* The responsive part */\n\n\n.btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n\n\n.btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n\n\n.mat-input-element {\n   caret-color: #E66F00 !important;\n  }\n\n\n.mat-input-element ng-reflect-placeholder {\n   color: #E66F00 !important;\n  }\n\n\n/* === For phones =================================== */\n\n\n@media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n\n\n/* === For tablets ================================== */\n\n\n@media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n      .hide{\n         display: none;\n      }\n  }\n\n\n/* === For desktops ================================== */\n\n\n@media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      }\n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n\n\n/* End for Breadcrum */\n\n\n#page-wrapper {\n  width: 100%;\n  padding: 110px 25px 110px 25px;\n  background: #0F0F0F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7O0FBRUEscUJBQXFCOzs7QUFFckI7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBRUE7R0FDRyxVQUFVO0dBQ1YsV0FBVztHQUNYLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YscUJBQXFCOztFQUV0Qjs7O0FBRUE7S0FDRyx5QkFBeUI7Q0FDN0I7OztBQUVBLHVCQUF1Qjs7O0FBQ3hCO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7QUFDQztHQUNFLG1CQUFtQjtHQUNuQixrQkFBa0I7OztJQUdqQjs7O0FBQ0Q7S0FDRSxpQkFBaUI7S0FDakIsWUFBWTtLQUNaLFdBQVc7S0FDWCxvQkFBb0I7S0FDcEIsbUJBQW1CO0tBQ25CLCtCQUErQjtLQUMvQixrQkFBa0I7S0FDbEIsV0FBVztHQUNiOzs7QUFDQTtNQUNHLGlCQUFpQjtHQUNwQjs7O0FBQ0E7S0FDRSxjQUFjO0tBQ2QsZ0JBQWdCO0VBQ25COzs7QUFDQztLQUNFLGlCQUFpQjtLQUNqQix5QkFBeUI7S0FDekIseUJBQXlCO0tBQ3pCLGtCQUFrQjs7RUFFckI7OztBQUVBO0tBQ0csaUJBQWlCO0tBQ2pCLHlCQUF5QjtLQUN6Qix5QkFBeUI7S0FDekIsa0JBQWtCO0tBQ2xCLGFBQWE7S0FDYixtQkFBbUI7RUFDdEI7OztBQUNBO0tBQ0cscUJBQXFCO0tBQ3JCLHlCQUF5QjtFQUM1Qjs7O0FBQ0E7T0FDSyx5QkFBeUI7T0FDekIsdUJBQXVCO09BQ3ZCLGdCQUFnQjtPQUNoQixtQkFBbUI7RUFDeEI7OztBQUNBO0tBQ0csMkJBQTJCO0VBQzlCOzs7QUFDQTtLQUNHLGtCQUFrQjtLQUNsQixlQUFlO0tBQ2YsZ0JBQWdCO0tBQ2hCLGNBQWM7RUFDakI7OztBQUNBO0tBQ0csY0FBYztLQUNkLFlBQVk7S0FDWiwyQkFBMkI7S0FDM0IsK0JBQStCO0VBQ2xDOzs7QUFDQTtLQUNHLHFCQUFxQjtLQUNyQiwyQkFBMkI7S0FDM0IsaUNBQWlDO0VBQ3BDOzs7QUFDQTtLQUNHLGlCQUFpQjtFQUNwQjs7O0FBRUYscUJBQXFCOzs7QUFJckIsOENBQThDOzs7QUFDOUM7RUFDRSxrQkFBa0I7O0VBRWxCLHlCQUF5Qjs7RUFFekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUNBO0VBQ0UscUJBQXFCO0tBQ2xCLHlCQUF5QjtBQUM5Qjs7O0FBQ0E7O01BRU0sVUFBVTtNQUNWLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixhQUFhO01BQ2I7OztBQUVKO1FBQ00sV0FBVzs7O0lBR2Y7OztBQUdKLDJDQUEyQzs7O0FBRzNDLGdDQUFnQzs7O0FBR2hDO0tBQ0ssVUFBVTtLQUNWLHdCQUF3QjtLQUN4QixZQUFZO0FBQ2pCOzs7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztBQUNiOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7OztBQUNBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQSw4QkFBOEI7OztBQUU5Qiw4QkFBOEI7OztBQUM5QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCOzs7QUFHRjtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFJQSw0QkFBNEI7OztBQUk1QjtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7OztBQUNBO0VBQ0UsZUFBZTs7QUFFakI7OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7O0FBRXBCOzs7QUFPZ0QsWUFBWTs7O0FBSTVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7O0FBS0EsK0JBQStCOzs7QUFFL0I7OztJQUdJLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7RUFDYjs7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0VBQ1o7OztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7OztBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7OztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7OztBQUVBLHFCQUFxQjs7O0FBQ3JCO0lBQ0UsK0JBQStCO0VBQ2pDOzs7QUFHQSx3QkFBd0I7OztBQUV4QjtNQUNJLGlDQUFpQztNQUNqQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjs7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7OztBQUVBO0dBQ0MsK0JBQStCO0VBQ2hDOzs7QUFFQTtHQUNDLHlCQUF5QjtFQUMxQjs7O0FBQ0EsdURBQXVEOzs7QUFDdkQ7TUFDSTtVQUNJLGFBQWE7TUFDakI7TUFDQTtVQUNJLGVBQWU7TUFDbkI7RUFDSjs7O0FBRUEsdURBQXVEOzs7QUFDdkQ7TUFDSTtVQUNJLGFBQWE7TUFDakI7TUFDQTtVQUNJLGdCQUFnQjtNQUNwQjtNQUNBO1NBQ0csYUFBYTtNQUNoQjtFQUNKOzs7QUFFQSx3REFBd0Q7OztBQUN4RDtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1VBQ0ksZ0JBQWdCO01BQ3BCO0VBQ0o7OztBQUVGLHNCQUFzQjs7O0FBU3RCO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdXBlci1hZG1pbi9zdXBlci1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yb3c6aG92ZXIgLm1hdC1jZWxsIC5jdXN0b21lci10YWJsZXtcbiAgY29sb3I6ICMwYTBhMDlmZDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuXG4ubWF0LXJvdzpob3ZlciAubWF0LWNlbGx7XG4gIGNvbG9yOiAjZmY2NjAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4vKi0tLS0tLW5ldyBlbmQtLS0tLSovXG5cbi5kYXNoYm9hcmRfdHJha2NlcntcbiAgIFxuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5ociB7XG4gICB3aWR0aDogOTUlO1xuICAgaGVpZ2h0OiAxcHg7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbiAgIG1hcmdpbi10b3A6IDBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IzY2NjtcbiAgIFxuICB9XG4gIFxuICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gfVxuIFxuIC8qIFNuYXBzaG90IHJvdyBzdGFydCAqL1xuI2FsYXJte1xuICBwYWRkaW5nLWJvdHRvbTogNjVweDtcbn1cbiAuY2lyY2xlLXRpdGxlMntcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7IFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgXG4gICBcbiAgICB9XG4gICAuY2lyY2xlLXRpdGxlLWhlYWRpbmd7XG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcbiAgICAgaGVpZ2h0OiA4MHB4OyBcbiAgICAgd2lkdGg6IDgwcHg7XG4gICAgIG1hcmdpbjogMCBhdXRvIC00MHB4O1xuICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICAgIGNvbG9yOiAjZmZmO1xuICAgfSBcbiAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmF7XG4gICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgIH1cbiAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmEuaWNvbntcbiAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgIC5ib3h7XG4gICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBcbiAgfVxuXG4gIC5ib3gye1xuICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIC5ib3g6aG92ZXJ7XG4gICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0QjtcbiAgfVxuICAuYm94LWhlYWRpbmd7XG4gICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLnRleHQtZmFkZWR7XG4gICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgfVxuICAuYm94LW51bWJlcntcbiAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIC5mb290ZXJ7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgfVxuICAuZm9vdGVyOmhvdmVye1xuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gICNpbWctY3Rue1xuICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgfVxuICBcbi8qIFNuYXBzaG90IHJvdyBlbmQgKi9cblxuXG5cbi8qIHN0YXR1cyBhbmQgZW5lcmd5IHBvd2VyIHN0YXR1cyByb3cgU3RhcnRzICovXG4ucGFuZWwtaGVhZGluZ3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdhMDE7XG4gIFxuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ob3Zlci1lZmZlY3R7XG4gIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0Qjtcbn1cbi5zdGF0dXMtcGFuZWwtYm9keXtcbiAgICAgIFxuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6M3B4OyBcbiAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTsgIFxuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH0gIFxuXG4gIC5jaGFydEJvcmRlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICBcbiAgICB9XG4gICAgXG4gICBcbi8qIHN0YXR1cyBhbmQgZW5lcmd5IHBvd2VyIHN0YXR1cyByb3cgRW5kICovXG5cblxuLyogQ3VzdG9tZXIgZGV0YWlsIHRhYmxlIHN0YXJ0ICovXG5cblxuLnBhbmVsLWJvZHl7XG4gICAgIHdpZHRoOjEwMCU7XG4gICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgcGFkZGluZzogNXB4OyAgXG59ICBcbm1hdC1mb3JtLWZpZWxke1xuICBcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4ubWF0LWhlYWRlci1jZWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWRlclJvd3tcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1wYWdpbmF0b3J7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50ZHsgICAgXG4gIHBhZGRpbmc6OHB4O1xufSBcblxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XG59XG4ubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxke1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLyogQ3VzdG9tZXIgZGV0YWlsIHRhYmxlIGVuZCAqL1xuXG4vKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIHN0YXJ0ICovXG4uaGVhZGluZy1wYW5lbHtcbiAgYmFja2dyb3VuZDojZmY3YTAxO1xuICBwYWRkaW5nOjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiBcblxuLmNoYXJ0LWJvZHl7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIFxuXG5cbi8qIEVuZXJneSBzdGF0dXMgZ3JhcGggZW5kICovXG5cblxuXG4uY2huZ3B3ZC1ib2R5e1xuICB3aWR0aDoxMDAlO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1NXB4O1xuICBcbn1cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm9sZHB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2hwd2R7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjRTY2RjAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG57XG4gIGJvcmRlcjogI0U2NkYwMDtcbiBcbn1cbi5jaG5ncHdke1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbn1cblxuXG4uY2hhcmhlYWRlcjJ7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgb3JhbmdlcmVkO1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgU2hhaGlkICovXG5cblxuXG4jYnJlYWRjcnVtYntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XG59XG5cblxuXG5cbi8qIFNoYWhpZCBTdGFydCBmb3IgQnJlYWRjcnVtICovXG5cbiogIGJyZWFkY3J1bXAgKlxuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMzMDMwMzA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbGVmdDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICB9XG5cbiAgLmJ0bi1icmVhZGNydW1iIC5idG4ge1xuICAgIHBhZGRpbmc6NnB4IDEycHggNnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggNnB4IDZweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ0bi1icmVhZGNydW1iIC5idG46bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZzo2cHggMThweCA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLyoqIERlZmF1bHQgYnV0dG9uICoqL1xuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bi5idG4tZGVmYXVsdDpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuICB9XG5cblxuICAvKiBUaGUgcmVzcG9uc2l2ZSBwYXJ0ICovXG5cbiAgLmJ0bi1icmVhZGNydW1iID4gKiA+IGRpdiB7XG4gICAgICAvKiBXaXRoIGxlc3M6IC50ZXh0LW92ZXJmbG93KCk7ICovXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtY2hpbGQobisyKSB7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgIGNhcmV0LWNvbG9yOiAjRTY2RjAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQgbmctcmVmbGVjdC1wbGFjZWhvbGRlciB7XG4gICBjb2xvcjogI0U2NkYwMCAhaW1wb3J0YW50O1xuICB9XG4gIC8qID09PSBGb3IgcGhvbmVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbisyKSB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH1cbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICB9XG4gIH1cblxuICAvKiA9PT0gRm9yIHRhYmxldHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzQpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfVxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICAuaGlkZXtcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gIH1cblxuICAvKiA9PT0gRm9yIGRlc2t0b3BzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzYpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfVxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICB9XG4gIH1cblxuLyogRW5kIGZvciBCcmVhZGNydW0gKi9cblxuXG5cblxuXG5cblxuXG4jcGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDExMHB4IDI1cHggMTEwcHggMjVweDtcbiAgYmFja2dyb3VuZDogIzBGMEYwRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/super-admin/super-admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -->\n<div class=\"row\" id=\"breadcrumb\" >\n  <div id=\"bc2\" style=\"left: 1% !important\" class=\"btn-group btn-breadcrumb\">\n  </div>\n</div>\n\n\n<div  id=\"page-wrapper\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"dashboard_trakcer\"> Home (Super Admin)</div>\n    <hr>\n\n    <!-- 1st snapshot start -->\n    <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n      <div  class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <i class=\"fa fa-bell fa-fw fa-3x\"></i>\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">Total Alarms</div>\n\n          <div class=\"box-number text-faded\" id=\"alarm\" >{{alarms}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 1st snapshot end -->\n\n\n    <!-- 2nd snapshot start -->\n    <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">Energy Consumed</div>\n\n          <div class=\"box-number text-faded\">{{energyConsumed}} kWh\n             <br> \n            <span style=font-size:medium id=\"sparklineA\">from {{date}}</span>\n            <br>\n            <span style=font-size:small id=\"sparklineA\">To Till Date</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 2nd snapshot end -->\n\n    <!-- 3rd snapshot start -->\n    <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">Energy Saved</div>\n          <div class=\"box-number text-faded\">{{energySaved}} kWh\n            <br> \n            <span style=font-size:medium id=\"sparklineA\">from {{date}}</span> \n            <br>\n            <span style=font-size:small id=\"sparklineA\">To Till Date</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 3rd snapshot end -->\n\n    <!-- 4th snapshot start -->\n    <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n      <div class=\"circle-title2\">\n        <div class=\"circle-title-heading\">\n          <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n        </div>\n        <div class=\"box\">\n          <div class=\"box-heading text-faded\">% saved</div>\n\n          <div class=\"box-number text-faded\">{{percentageSaved}} %\n            <br>\n            <span style=font-size:medium id=\"sparklineA\">from {{date}}</span>\n            <br>\n            <span style=font-size:small id=\"sparklineA\">To Till Date</span>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <a class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a> -->\n\n  <!-- Alarm Priority List Table Start -->\n  <div class=\"mt-5\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 \"> \n        <div class=\"panel-heading\">\n          <div class=\"row\">\n          <div class=\"col-md-8\">\n          <i class=\"fa fa-bar-chart-o\"></i> Alarm Priority List </div>\n        </div>\n        </div>\n        <div class=\"chart-body customer-table\">\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table [dataSource]=\"alarmDataSource\" matSort>\n              <ng-container matColumnDef=\"custName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Customer Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"custName\" > {{row.custName}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"siteName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Site Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"siteName\" > {{row.siteName}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"alarmName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Alarm Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"alarmName\" > {{row.alarmName}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"alarmDate\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Since Time </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"alarmDate\"> {{row.alarmDate}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"alarmPriority\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Alarm Priority </mat-header-cell>\n                <!--<mat-cell *matCellDef=\"let row\" data-label=\"alarmPriority\" [ngStyle]=\"{'color': 'black', 'background-color': row.alarmPriority == 'High' ? '#ff6666': row.alarmPriority == 'Low' ? '#85e085' : row.alarmPriority == 'Medium' ? '#ffe066' : ''}\" > {{row.alarmPriority}} </mat-cell>--> \n                <mat-cell *matCellDef=\"let row\" data-label=\"alarmPriority\"> {{row.alarmPriority}} </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"alarmsColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: alarmsColumns;\">\n              </mat-row>\n            </mat-table>\n            \n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n       \n          </div>\n        </div>\n      </div>\n    </div>\n  </div> \n  <!-- Alarm Priority List Table End-->\n\n\n\n  <!-- Customer Details Table  Start-->\n  <div class=\"mt-5\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 \"> \n\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n          <div class=\"col-md-8\">\n          <i class=\"fa fa-bar-chart-o\"></i> Customer Details </div>\n\n        </div>\n        </div>\n        <div class=\"chart-body\">\n          <div class=\"example-header\" fxLayout=\"row\">     \n            <mat-form-field >\n              <input matInput class=\"matInputFilterBar\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" autocomplete=\"off\">\n            </mat-form-field>\n          </div>\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table [dataSource]=\"dataSource\" matSort>\n\n              <ng-container matColumnDef=\"custId\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Customer's ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\" > {{row.custId}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"custUserName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header >Customer's Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\" >{{row.custUserName}}  </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"totalWH\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Total WH </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\" > {{row.totalWH}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"liveWH\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Live WH </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\">{{row.liveWH}}  </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"WHavgsaving\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > All_WH_Avg Saving % </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\"> {{row.WHavgsaving}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"maxsaving\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Maximum Saving %</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\"> {{row.maxsaving}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"minsaving\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header > Minimum Saving %</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"id\">{{row.minsaving}}  </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"customerDisplayedColumns\"></mat-header-row>\n              <mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: customerDisplayedColumns;\" (click)=\"openCustDashboard(row)\">\n              </mat-row>\n            </mat-table>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n          \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Customer Details Table End -->\n</div>\n"

/***/ }),

/***/ "./src/app/super-admin/super-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.ts ***!
  \******************************************************/
/*! exports provided: SuperAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function() { return SuperAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/dashboard-data.service */ "./src/app/services/dashboard-data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");







//--------------------new---------------------------------



var SuperAdminComponent = /** @class */ (function () {
    function SuperAdminComponent(dashData, router, UserService, dataService) {
        this.dashData = dashData;
        this.router = router;
        this.UserService = UserService;
        this.dataService = dataService;
        this.customerDisplayedColumns = ['custId', 'custUserName', 'totalWH', 'liveWH', 'WHavgsaving', 'maxsaving', 'minsaving'];
        this.alarmsColumns = ['custName', 'siteName', 'alarmName', 'alarmDate', 'alarmPriority'];
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // @ViewChild(MatSort) sort: MatSort;
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        this.selected = '0';
        this.selected_task = '0';
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]((new Date()).toISOString());
        this.isCollapsed = true;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.token = localStorage.getItem('token');
        this.isShown = false;
        this.isCustomer = false;
        this.isShownDiv = false;
    }
    SuperAdminComponent.prototype.applySelectFilter = function (event) {
    };
    SuperAdminComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SuperAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem("account"));
        var userId = userObj['id'];
        var data = { "user_id": userId };
        // calling snapshot api
        this.UserService.getSuperAdminSnapShot(data).subscribe(function (response) {
            console.log("super admin snapshot response : ", response);
            _this.date = response["current_date"];
            _this.alarms = response["alarms"];
            _this.energyConsumed = response["total_unit_consumed"];
            _this.energySaved = response["total_energy_saved"];
            _this.percentageSaved = response["total_saved_percentage"];
        });
        // calling alarm priority table api
        this.UserService.getSuperAdminAlarmPriorityTable(data).subscribe(function (response) {
            console.log("response : ", response);
            var alarmPriorityData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var alarm_data = response['data'][i];
                var site_data = alarm_data['alarm_list'];
                for (var j = 0; j <= site_data.length - 1; j++) {
                    var alarm_priority = void 0;
                    if (site_data[j]['Alarm_priority'] == 0) {
                        alarm_priority = 'Low';
                    }
                    else if (site_data[j]['Alarm_priority'] == 1) {
                        alarm_priority = 'Medium';
                    }
                    else {
                        alarm_priority = 'High';
                    }
                    alarmPriorityData.push({
                        "custName": alarm_data['customer_name'],
                        "siteName": site_data[j]['site_id__site_name'],
                        "alarmName": site_data[j]['alarm'],
                        "alarmDate": site_data[j]['created_time'],
                        "alarmPriority": alarm_priority
                    });
                }
            }
            _this.alarmDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](alarmPriorityData);
            _this.alarmDataSource.paginator = _this.paginator.toArray()[0];
            _this.alarmDataSource.sort = _this.sort.toArray()[0];
            // console.log("paginator : ", this.paginator)
        });
        // calling all customer api
        this.UserService.getAllCustomersOnSuperAdmin(data).subscribe(function (response) {
            var customerData = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var cust = response['data'][i];
                customerData.push({
                    "custId": cust['customer_id'],
                    "custUserName": cust["customer_name"],
                    "totalWH": cust["total_WH"],
                    "liveWH": cust["live_Wh"],
                    "WHavgsaving": cust["avg_saving"],
                    "maxsaving": cust["max_saving"],
                    "minsaving": cust["min_saving"]
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](customerData);
            _this.dataSource.paginator = _this.paginator.toArray()[1];
            _this.dataSource.sort = _this.sort.toArray()[1];
        });
    };
    SuperAdminComponent.prototype.openCustDashboard = function (row) {
        console.log("dskdnqkwkd: ", row);
        var custId = row.custId;
        this.dataService.changeMessage("customer");
        localStorage.setItem('id', custId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuperAdminComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuperAdminComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"])
    ], SuperAdminComponent.prototype, "table", void 0);
    SuperAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-super-admin',
            template: __webpack_require__(/*! ./super-admin.component.html */ "./src/app/super-admin/super-admin.component.html"),
            styles: [__webpack_require__(/*! ./super-admin.component.css */ "./src/app/super-admin/super-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SuperAdminComponent);
    return SuperAdminComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/warehouse.component.css":
/*!***************************************************!*\
  !*** ./src/app/warehouse/warehouse.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_trakcer{\n   \n    margin-top: 10px;\n    margin-left:10px;\n    margin-right: 5px;\n    font-size: 18px;\n }\n \n hr {\n     width: 95%;\n     height: 1px;\n     margin-left: 10px;\n     margin-top: 0px;\n     background-color:#666;\n     \n    }\n \n .container-fluid {\n      background: black;\n   }\n \n .mat-option.mat-selected:not(.mat-option-disabled) {\n       color: #fff !important;\n   }\n \n /* Snapshot row start */\n \n .circle-title2{\n     margin-bottom: 15px;\n     text-align: center;\n     \n     \n      }\n \n .circle-title-heading{\n       position:relative; \n       height: 80px; \n       width: 80px;\n       margin: 0 auto -40px;\n       border-radius: 100%;\n       transition: all ease-in-out .3s;\n       background:#ff7a01;\n       color: #fff;\n     }\n \n .circle-title-heading .fa{\n        line-height: 80px;\n     }\n \n .circle-title-heading .fa.icon{\n       font-size: 4em;\n       padding-top: 8px;\n    }\n \n #sparklineA{ \n     font-size: 15px;\n    }\n \n .box{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n    /*   height:180px;*/\n       border-radius: 5px;\n     \n    }\n \n .carbonbox{\n      padding-top: 55px;\n      background-color: #222222;\n      border: 1px solid #ff7a01;\n   /*   height:180px;*/\n      border-radius: 5px;\n\n    }\n \n .box2{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n       border-radius: 5px;\n       height: 140px;\n       margin-bottom: 50px;\n    }\n \n .box:hover{\n       border-color: #4C4B4B;\n       background-color: #4C4B4B;\n    }\n \n .box-heading{\n         text-transform: uppercase;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n    }\n \n .text-faded{\n       color:rgba(255,255,255,0.7);\n    }\n \n .box-number{\n       padding:5px 0 15px;\n       font-size: 26px;\n       font-weight: 700;\n       line-height: 1;\n    }\n \n .box-number1{\n      padding:5px 0 15px;\n      font-size: 19px;\n      font-weight: 900;\n      line-height: 1;\n   }\n \n .footer{\n       display: block;\n       padding: 5px;\n       color:rgba(255,255,255,0.5);\n       transition: all ease-in-out .3s;\n    }\n \n .footer:hover{\n       text-decoration: none;\n       color:rgba(255,255,255,0.5);\n       background-color: rgba(0,0,0,0.2);\n    }\n \n #img-ctn{\n       padding-top: 14px;\n    }\n \n /* Snapshot row end */\n \n /* status and energy power status row Starts */\n \n .panel-heading{\n    position: relative;\n  \n    background-color: #ff7a01;\n    \n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n \n .hover-effect{\n    border-color: #4C4B4B;\n       background-color: #4C4B4B;\n }\n \n .status-panel-body{\n        \n        width:100%;\n        background-color:black;\n        position:relative;\n        border-radius:3px; \n        border:1px solid #ff7a01;  \n        padding: 10px;\n        }\n \n .chartBorder{\n          width: 100%;\n \n      \n      }\n \n /* status and energy power status row End */\n \n /* Customer detail table start */\n \n .panel-body{\n       width:100%;\n       border:1px solid #ff7a01;\n       padding: 5px;  \n }\n \n mat-form-field{\n    \n    font-size: 14px;\n    width: 100%;\n }\n \n table {\n    width: 100%;\n    text-align:left;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n \n .mat-header-cell{\n    background-color: black;\n    padding: 8px;\n    font-size: 16px;\n }\n \n .headerRow{\n    background: red;\n    padding: 8px;\n    text-align: center;\n    font-size: 16px;\n }\n \n .mat-paginator{\n    background: #000000;\n }\n \n th {\n    background-color: #000000;\n    padding: 8px;\n    text-align: center;\n }\n \n td{\n       \n    padding:8px;\n }\n \n .mat-row:nth-child(even){\n   background-color: #696969;\n}\n \n .mat-row:nth-child(odd){\n   background-color: #3F3F3F;\n}\n \n /* Customer detail table end */\n \n /* Energy status graph start */\n \n .heading-panel{\n    background:#ff7a01;\n    padding:5px;\n    text-align: left;\n    font-size: 16px;\n    border-radius: 3px;\n    margin-top: 12px;\n    }\n \n .chart-body{\n    border:1px solid #ff7a01;\n    padding: 10px;\n    position: relative;\n    min-height: 360px; /* ensure consistent chart container height */\n }\n \n /* Energy status graph end */\n \n .chngpwd-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding-top: 15px;\n    margin-top: 55px;\n    \n }\n \n .card-header{\n    color: black;\n    text-align: left;\n    font-size: 18px;\n }\n \n .oldp{\n    margin-top: 10px;\n }\n \n .chpwd{\n    text-align: left;\n }\n \n .btn-primary {\n    background: #E66F00;\n    color: #ffffff;\n }\n \n .btn{\n    border: #E66F00;\n     \n }\n \n .chngpwd{\n    margin-top: 125px;\n }\n \n .charheader2{\n    margin: 5px;\n    border-top: 1px solid orangered;\n    background: orangered;\n    padding: 5px;\n    border-radius: 5px;\n \n }\n \n /* Breadcrumbs from http://bootsnipp.com/snippets/featured/triangle-breadcrumbs-arrows */\n \n #breadcrumb{\n   position: fixed;\n   z-index: 999;\n   top: 50px;\n   width: 100%;\n   background: #222222;\n}\n \n *  breadcrump */\n\n.btn-breadcrumb .btn:not(:last-child):after {\n   content: \" \";\n   display: block;\n   width: 0;\n   height: 0;\n   border-top: 17px solid transparent;\n   border-bottom: 17px solid transparent;\n   border-left: 10px solid #303030;\n   position: absolute;\n   top: 50%;\n   margin-top: -17px;\n   left: 100%;\n   z-index: 3;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:not(:last-child):before {\n   content: \" \";\n   display: block;\n   width: 0;\n   height: 0;\n   border-top: 17px solid transparent;\n   border-bottom: 17px solid transparent;\n   border-left: 10px solid rgb(173, 173, 173);\n   position: absolute;\n   top: 50%;\n   margin-top: -17px;\n   margin-left: 1px;\n   left: 100%;\n   z-index: 3;\n }\n \n .btn-breadcrumb .btn {\n   padding:6px 12px 6px 24px;\n   background: #303030;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:first-child {\n   padding:6px 6px 6px 10px;\n   background: #303030;\n   color: #fff;\n }\n \n .btn-breadcrumb .btn:last-child {\n   padding:6px 18px 6px 24px;\n   background: #303030;\n   color: #fff;\n }\n \n /** Default button **/\n \n .btn-breadcrumb .btn.btn-default:not(:last-child):after {\n   border-left: 10px solid #303030;\n }\n \n /* The responsive part */\n \n .btn-breadcrumb > * > div {\n     /* With less: .text-overflow(); */\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;    \n }\n \n .btn-breadcrumb > *:nth-child(n+2) {\n   display:none;\n }\n \n /* === For phones =================================== */\n \n @media (max-width: 767px) {\n     .btn-breadcrumb > *:nth-last-child(-n+2) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 60px;\n     }\n }\n \n /* === For tablets ================================== */\n \n @media (min-width: 768px) and (max-width:991px) {\n     .btn-breadcrumb > *:nth-last-child(-n+4) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 100px;\n     }\n }\n \n /* === For desktops ================================== */\n \n @media (min-width: 992px) {\n     .btn-breadcrumb > *:nth-last-child(-n+6) {\n         display:block;\n     } \n     .btn-breadcrumb > * div {\n         max-width: 170px;\n     }\n }\n \n #page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n}\n \n .md-raised.md-primary.md-button.md-link-ripple{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n}\n \n #excelbtn{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n   margin-right: 25px;\n}\n \n #button{\n   background: #E66F00;; \n   color: #ffffff;\n   border: #E66F00;;\n   border-radius: 5px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   font-size: 14px;\n   margin-right: -81px;\n\n}\n \n .close {\n   float: right;\n   font-size: 1.5rem;\n   font-weight: 700;\n   line-height: 1;\n   color: #fff;\n   text-shadow: 0 1px 0 #fff;\n   opacity: .5;\n}\n \n .mat-table[_ngcontent-c13] .mat-cell[_ngcontent-c13]:first-child {\n   margin-top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0NBRUE7S0FDSSxVQUFVO0tBQ1YsV0FBVztLQUNYLGlCQUFpQjtLQUNqQixlQUFlO0tBQ2YscUJBQXFCOztJQUV0Qjs7Q0FFQTtNQUNFLGlCQUFpQjtHQUNwQjs7Q0FFQztPQUNHLHNCQUFzQjtHQUMxQjs7Q0FFQSx1QkFBdUI7O0NBRXZCO0tBQ0UsbUJBQW1CO0tBQ25CLGtCQUFrQjs7O01BR2pCOztDQUNEO09BQ0UsaUJBQWlCO09BQ2pCLFlBQVk7T0FDWixXQUFXO09BQ1gsb0JBQW9CO09BQ3BCLG1CQUFtQjtPQUNuQiwrQkFBK0I7T0FDL0Isa0JBQWtCO09BQ2xCLFdBQVc7S0FDYjs7Q0FDQTtRQUNHLGlCQUFpQjtLQUNwQjs7Q0FDQTtPQUNFLGNBQWM7T0FDZCxnQkFBZ0I7SUFDbkI7O0NBQ0E7S0FDQyxlQUFlO0lBQ2hCOztDQUNDO09BQ0UsaUJBQWlCO09BQ2pCLHlCQUF5QjtPQUN6Qix5QkFBeUI7SUFDNUIsbUJBQW1CO09BQ2hCLGtCQUFrQjs7SUFFckI7O0NBQ0E7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLHlCQUF5QjtHQUM1QixtQkFBbUI7TUFDaEIsa0JBQWtCOztJQUVwQjs7Q0FFQTtPQUNHLGlCQUFpQjtPQUNqQix5QkFBeUI7T0FDekIseUJBQXlCO09BQ3pCLGtCQUFrQjtPQUNsQixhQUFhO09BQ2IsbUJBQW1CO0lBQ3RCOztDQUNBO09BQ0cscUJBQXFCO09BQ3JCLHlCQUF5QjtJQUM1Qjs7Q0FDQTtTQUNLLHlCQUF5QjtTQUN6Qix1QkFBdUI7U0FDdkIsZ0JBQWdCO1NBQ2hCLG1CQUFtQjtJQUN4Qjs7Q0FDQTtPQUNHLDJCQUEyQjtJQUM5Qjs7Q0FDQTtPQUNHLGtCQUFrQjtPQUNsQixlQUFlO09BQ2YsZ0JBQWdCO09BQ2hCLGNBQWM7SUFDakI7O0NBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO0dBQ2pCOztDQUNDO09BQ0csY0FBYztPQUNkLFlBQVk7T0FDWiwyQkFBMkI7T0FDM0IsK0JBQStCO0lBQ2xDOztDQUNBO09BQ0cscUJBQXFCO09BQ3JCLDJCQUEyQjtPQUMzQixpQ0FBaUM7SUFDcEM7O0NBQ0E7T0FDRyxpQkFBaUI7SUFDcEI7O0NBRUgscUJBQXFCOztDQUlyQiw4Q0FBOEM7O0NBQzlDO0lBQ0csa0JBQWtCOztJQUVsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztDQUNBO0lBQ0cscUJBQXFCO09BQ2xCLHlCQUF5QjtDQUMvQjs7Q0FDQTs7UUFFTyxVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYjs7Q0FFSjtVQUNNLFdBQVc7OztNQUdmOztDQUdMLDJDQUEyQzs7Q0FHM0MsZ0NBQWdDOztDQUdoQztPQUNNLFVBQVU7T0FDVix3QkFBd0I7T0FDeEIsWUFBWTtDQUNsQjs7Q0FDQTs7SUFFRyxlQUFlO0lBQ2YsV0FBVztDQUNkOztDQUNBO0lBQ0csV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztDQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztDQUNBO0lBQ0csZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7Q0FDQztJQUNFLG1CQUFtQjtDQUN0Qjs7Q0FFQTtJQUNHLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztDQUNBOztJQUVHLFdBQVc7Q0FDZDs7Q0FDQTtHQUNFLHlCQUF5QjtBQUM1Qjs7Q0FDQTtHQUNHLHlCQUF5QjtBQUM1Qjs7Q0FDQyw4QkFBOEI7O0NBRTlCLDhCQUE4Qjs7Q0FDOUI7SUFDRyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs7Q0FFSDtJQUNHLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFFLDZDQUE2QztDQUNuRTs7Q0FJQSw0QkFBNEI7O0NBSTVCO0lBQ0csVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCOztDQUVuQjs7Q0FHQTtJQUNHLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7Q0FDQTtJQUNHLGdCQUFnQjtDQUNuQjs7Q0FDQTtJQUNHLGdCQUFnQjtDQUNuQjs7Q0FDQTtJQUNHLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCOztDQUNBO0lBQ0csZUFBZTs7Q0FFbEI7O0NBQ0E7SUFDRyxpQkFBaUI7Q0FDcEI7O0NBR0E7SUFDRyxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCOztDQUVyQjs7Q0FFQSx3RkFBd0Y7O0NBQ3hGO0dBQ0UsZUFBZTtHQUNmLFlBQVk7R0FDWixTQUFTO0dBQ1QsV0FBVztHQUNYLG1CQUFtQjtBQUN0Qjs7Q0FHQTs7O0dBR0csWUFBWTtHQUNaLGNBQWM7R0FDZCxRQUFRO0dBQ1IsU0FBUztHQUNULGtDQUFrQztHQUNsQyxxQ0FBcUM7R0FDckMsK0JBQStCO0dBQy9CLGtCQUFrQjtHQUNsQixRQUFRO0dBQ1IsaUJBQWlCO0dBQ2pCLFVBQVU7R0FDVixVQUFVO0dBQ1YsV0FBVztDQUNiOztDQUNBO0dBQ0UsWUFBWTtHQUNaLGNBQWM7R0FDZCxRQUFRO0dBQ1IsU0FBUztHQUNULGtDQUFrQztHQUNsQyxxQ0FBcUM7R0FDckMsMENBQTBDO0dBQzFDLGtCQUFrQjtHQUNsQixRQUFRO0dBQ1IsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YsVUFBVTtDQUNaOztDQUVBO0dBQ0UseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixXQUFXO0NBQ2I7O0NBQ0E7R0FDRSx3QkFBd0I7R0FDeEIsbUJBQW1CO0dBQ25CLFdBQVc7Q0FDYjs7Q0FDQTtHQUNFLHlCQUF5QjtHQUN6QixtQkFBbUI7R0FDbkIsV0FBVztDQUNiOztDQUVBLHFCQUFxQjs7Q0FDckI7R0FDRSwrQkFBK0I7Q0FDakM7O0NBR0Esd0JBQXdCOztDQUV4QjtLQUNJLGlDQUFpQztLQUNqQyxtQkFBbUI7S0FDbkIsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtDQUMzQjs7Q0FFQTtHQUNFLFlBQVk7Q0FDZDs7Q0FFQSx1REFBdUQ7O0NBQ3ZEO0tBQ0k7U0FDSSxhQUFhO0tBQ2pCO0tBQ0E7U0FDSSxlQUFlO0tBQ25CO0NBQ0o7O0NBRUEsdURBQXVEOztDQUN2RDtLQUNJO1NBQ0ksYUFBYTtLQUNqQjtLQUNBO1NBQ0ksZ0JBQWdCO0tBQ3BCO0NBQ0o7O0NBRUEsd0RBQXdEOztDQUN4RDtLQUNJO1NBQ0ksYUFBYTtLQUNqQjtLQUNBO1NBQ0ksZ0JBQWdCO0tBQ3BCO0NBQ0o7O0NBQ0E7R0FDRSxXQUFXO0dBQ1gsOEJBQThCO0dBQzlCLG1CQUFtQjtBQUN0Qjs7Q0FDQTtHQUNHLG1CQUFtQjtHQUNuQixjQUFjO0dBQ2QsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGVBQWU7QUFDbEI7O0NBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsY0FBYztHQUNkLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixlQUFlO0dBQ2Ysa0JBQWtCO0FBQ3JCOztDQUVBO0dBQ0csbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsZUFBZTtHQUNmLG1CQUFtQjs7QUFFdEI7O0NBR0E7R0FDRyxZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsV0FBVztHQUNYLHlCQUF5QjtHQUN6QixXQUFXO0FBQ2Q7O0NBQ0E7R0FDRyxjQUFjO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZF90cmFrY2Vye1xuICAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gXG4gaHIge1xuICAgICB3aWR0aDogOTUlO1xuICAgICBoZWlnaHQ6IDFweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojNjY2O1xuICAgICBcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgfVxuICAgIFxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgfVxuICAgXG4gICAvKiBTbmFwc2hvdCByb3cgc3RhcnQgKi9cbiBcbiAgIC5jaXJjbGUtdGl0bGUye1xuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIFxuICAgICBcbiAgICAgIH1cbiAgICAgLmNpcmNsZS10aXRsZS1oZWFkaW5ne1xuICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcbiAgICAgICBoZWlnaHQ6IDgwcHg7IFxuICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgIG1hcmdpbjogMCBhdXRvIC00MHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgICAgICBiYWNrZ3JvdW5kOiNmZjdhMDE7XG4gICAgICAgY29sb3I6ICNmZmY7XG4gICAgIH0gXG4gICAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmF7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICB9XG4gICAgIC5jaXJjbGUtdGl0bGUtaGVhZGluZyAuZmEuaWNvbntcbiAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAjc3BhcmtsaW5lQXsgXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgIC5ib3h7XG4gICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTAxO1xuICAgIC8qICAgaGVpZ2h0OjE4MHB4OyovXG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBcbiAgICB9XG4gICAgLmNhcmJvbmJveHtcbiAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAvKiAgIGhlaWdodDoxODBweDsqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgfVxuIFxuICAgIC5ib3gye1xuICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAuYm94OmhvdmVye1xuICAgICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xuICAgIH1cbiAgICAuYm94LWhlYWRpbmd7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQtZmFkZWR7XG4gICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgIH1cbiAgICAuYm94LW51bWJlcntcbiAgICAgICBwYWRkaW5nOjVweCAwIDE1cHg7XG4gICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICAgIC5ib3gtbnVtYmVyMXtcbiAgICAgIHBhZGRpbmc6NXB4IDAgMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgIH1cbiAgICAuZm9vdGVye1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgICB9XG4gICAgLmZvb3Rlcjpob3ZlcntcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgI2ltZy1jdG57XG4gICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgfVxuICAgIFxuIC8qIFNuYXBzaG90IHJvdyBlbmQgKi9cbiBcbiBcbiBcbiAvKiBzdGF0dXMgYW5kIGVuZXJneSBwb3dlciBzdGF0dXMgcm93IFN0YXJ0cyAqL1xuIC5wYW5lbC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTtcbiAgICBcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cbiAuaG92ZXItZWZmZWN0e1xuICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xuIH1cbiAuc3RhdHVzLXBhbmVsLWJvZHl7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7ICBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfSAgXG4gXG4gICAgLmNoYXJ0Qm9yZGVye1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuIFxuICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgXG4gLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBFbmQgKi9cbiBcbiBcbiAvKiBDdXN0b21lciBkZXRhaWwgdGFibGUgc3RhcnQgKi9cbiBcbiBcbiAucGFuZWwtYm9keXtcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgICBwYWRkaW5nOiA1cHg7ICBcbiB9ICBcbiBtYXQtZm9ybS1maWVsZHtcbiAgICBcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICAubWF0LWhlYWRlci1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuIC5oZWFkZXJSb3d7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cbiAgLm1hdC1wYWdpbmF0b3J7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiB9XG4gXG4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gdGR7XG4gICAgICAgXG4gICAgcGFkZGluZzo4cHg7XG4gfSBcbiAubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0YzRjNGO1xufVxuIC8qIEN1c3RvbWVyIGRldGFpbCB0YWJsZSBlbmQgKi9cbiBcbiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIHN0YXJ0ICovXG4gLmhlYWRpbmctcGFuZWx7XG4gICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiBcbiAuY2hhcnQtYm9keXtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMzYwcHg7IC8qIGVuc3VyZSBjb25zaXN0ZW50IGNoYXJ0IGNvbnRhaW5lciBoZWlnaHQgKi9cbiB9XG4gICBcbiBcbiBcbiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIGVuZCAqL1xuIFxuIFxuIFxuIC5jaG5ncHdkLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNTVweDtcbiAgICBcbiB9XG4gXG4gXG4gLmNhcmQtaGVhZGVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gLm9sZHB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9XG4gLmNocHdke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogI0U2NkYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiB9XG4gLmJ0bntcbiAgICBib3JkZXI6ICNFNjZGMDA7XG4gICAgIFxuIH1cbiAuY2huZ3B3ZHtcbiAgICBtYXJnaW4tdG9wOiAxMjVweDtcbiB9XG4gXG4gXG4gLmNoYXJoZWFkZXIye1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gXG4gfVxuIFxuIC8qIEJyZWFkY3J1bWJzIGZyb20gaHR0cDovL2Jvb3RzbmlwcC5jb20vc25pcHBldHMvZmVhdHVyZWQvdHJpYW5nbGUtYnJlYWRjcnVtYnMtYXJyb3dzICovXG4gI2JyZWFkY3J1bWJ7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB6LWluZGV4OiA5OTk7XG4gICB0b3A6IDUwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG59XG5cblxuKiAgYnJlYWRjcnVtcCAqL1xuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICB3aWR0aDogMDtcbiAgIGhlaWdodDogMDtcbiAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogNTAlO1xuICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICBsZWZ0OiAxMDAlO1xuICAgei1pbmRleDogMztcbiAgIGNvbG9yOiAjZmZmO1xuIH1cbiAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICBjb250ZW50OiBcIiBcIjtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgd2lkdGg6IDA7XG4gICBoZWlnaHQ6IDA7XG4gICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogNTAlO1xuICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICBtYXJnaW4tbGVmdDogMXB4O1xuICAgbGVmdDogMTAwJTtcbiAgIHotaW5kZXg6IDM7XG4gfVxuIFxuIC5idG4tYnJlYWRjcnVtYiAuYnRuIHtcbiAgIHBhZGRpbmc6NnB4IDEycHggNnB4IDI0cHg7XG4gICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgY29sb3I6ICNmZmY7XG4gfVxuIC5idG4tYnJlYWRjcnVtYiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgIHBhZGRpbmc6NnB4IDZweCA2cHggMTBweDtcbiAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICBjb2xvcjogI2ZmZjtcbiB9XG4gLmJ0bi1icmVhZGNydW1iIC5idG46bGFzdC1jaGlsZCB7XG4gICBwYWRkaW5nOjZweCAxOHB4IDZweCAyNHB4O1xuICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgIGNvbG9yOiAjZmZmO1xuIH1cbiBcbiAvKiogRGVmYXVsdCBidXR0b24gKiovXG4gLmJ0bi1icmVhZGNydW1iIC5idG4uYnRuLWRlZmF1bHQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzMDMwO1xuIH1cbiBcbiBcbiAvKiBUaGUgcmVzcG9uc2l2ZSBwYXJ0ICovXG4gXG4gLmJ0bi1icmVhZGNydW1iID4gKiA+IGRpdiB7XG4gICAgIC8qIFdpdGggbGVzczogLnRleHQtb3ZlcmZsb3coKTsgKi9cbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICAgIFxuIH1cbiBcbiAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1jaGlsZChuKzIpIHtcbiAgIGRpc3BsYXk6bm9uZTtcbiB9XG4gXG4gLyogPT09IEZvciBwaG9uZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbisyKSB7XG4gICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICB9IFxuICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgIH1cbiB9XG4gXG4gLyogPT09IEZvciB0YWJsZXRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNCkge1xuICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgfSBcbiAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgfVxuIH1cbiBcbiAvKiA9PT0gRm9yIGRlc2t0b3BzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgLmJ0bi1icmVhZGNydW1iID4gKjpudGgtbGFzdC1jaGlsZCgtbis2KSB7XG4gICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICB9IFxuICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqIGRpdiB7XG4gICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICB9XG4gfVxuICNwYWdlLXdyYXBwZXIge1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nOiAxMzBweCAyNXB4IDEzMHB4IDI1cHg7XG4gICBiYWNrZ3JvdW5kOiAjMEYwRjBGO1xufVxuLm1kLXJhaXNlZC5tZC1wcmltYXJ5Lm1kLWJ1dHRvbi5tZC1saW5rLXJpcHBsZXtcbiAgIGJhY2tncm91bmQ6ICNFNjZGMDA7OyBcbiAgIGNvbG9yOiAjZmZmZmZmO1xuICAgYm9yZGVyOiAjRTY2RjAwOztcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIHBhZGRpbmc6IDdweCAxOHB4O1xuICAgbWFyZ2luLXRvcDogOHB4O1xuICAgZm9udC1zaXplOiAxNHB4O1xufVxuI2V4Y2VsYnRue1xuICAgYmFja2dyb3VuZDogI0U2NkYwMDs7IFxuICAgY29sb3I6ICNmZmZmZmY7XG4gICBib3JkZXI6ICNFNjZGMDA7O1xuICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgcGFkZGluZzogN3B4IDE4cHg7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gICBmb250LXNpemU6IDE0cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbiNidXR0b257XG4gICBiYWNrZ3JvdW5kOiAjRTY2RjAwOzsgXG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIGJvcmRlcjogI0U2NkYwMDs7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBwYWRkaW5nOiA3cHggMThweDtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiAgIGZvbnQtc2l6ZTogMTRweDtcbiAgIG1hcmdpbi1yaWdodDogLTgxcHg7XG5cbn1cblxuIFxuLmNsb3NlIHtcbiAgIGZsb2F0OiByaWdodDtcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgY29sb3I6ICNmZmY7XG4gICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xuICAgb3BhY2l0eTogLjU7XG59XG4ubWF0LXRhYmxlW19uZ2NvbnRlbnQtYzEzXSAubWF0LWNlbGxbX25nY29udGVudC1jMTNdOmZpcnN0LWNoaWxkIHtcbiAgIG1hcmdpbi10b3A6IDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/warehouse/warehouse.component.html":
/*!****************************************************!*\
  !*** ./src/app/warehouse/warehouse.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" style=\"margin-right:15px !important;\">\n    <div class=\"col-md-6 col-sm-8\">\n        <div class=\"row\" style=\"margin-left:4px !important\">\n        <div id=\"bc2\" class=\"btn-group btn-breadcrumb\" >\n            <a (click)=\"home()\" *ngIf=\"super_admin_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n            <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n            <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\"><div >Customer Page</div></a>\n            <a (click)=\"sitePage()\" *ngIf=\"saving_site_dash\" class=\"btn btn-default\">Site Page</a>\n        </div></div>\n    </div>\n    <div class=\"col-md-4 col-sm-8\">\n       \n        <button class=\"btn btn-float btn-primary\" style=\"margin-left: 30px !important;\">\n            <span class =\"ng-scope\" (click)=\"openSiteDashboard()\" >Select Site</span>\n        </button>\n         <button  *ngIf=\"customerOnly\" class=\"btn btn-float btn-primary\" style=\"margin-left: 30px !important;\">\n            <span class =\"ng-scope\" (click)=\"baseline()\" >Baseline</span>\n         </button>\n         \n         <button *ngIf=\"MyntraLightsOnly\" class=\"btn btn-float btn-primary\" style=\"margin-left: 30px !important;\">\n            <span class =\"ng-scope\" (click)=\"lightsData()\" >Lights Data</span>\n         </button>\n         <button *ngIf=\"MyntraFansOnly\" class=\"btn btn-float btn-primary\" style=\"margin-left: 30px !important;\">\n            <span class =\"ng-scope\" (click)=\"fansData()\" >Fans Data</span>\n         </button>  \n         <button  *ngIf=\"avgDataValue\" class=\"btn btn-float btn-primary\" style=\"margin-left: 30px !important;\">\n            <span class =\"ng-scope\" (click)=\"avgData()\" >Avg Data</span>\n         </button>      \n    </div>\n</div>\n\n <!-- <div class=\"container no-margin \"> -->\n    <div id=\"page-wrapper\" class=\"container-fluid\">\n        <div *ngIf=\"isShown\">\n           <div class=\"row \">\n               <div class=\"dashboard_trakcer\">Change Password</div>\n               <hr>\n               <!-- change password form  -->\n               <div class=\"mt-6 col-8 offset-2 chngpwd\">\n                   <div class=\"card\">\n                       <div class=\"card-header\">Change Password</div>\n                       <div class=\"card-body\">\n                           <form #changePassword=ngForm (ngSubmit)=\"onChangePwd()\">\n                               <div class=\"form-group row\">\n                                    <div class=\"col-sm-10 oldp \">\n                                       <input type=\"password\" name=\"old_password\" class=\"form-control\"\n                                           placeholder=\"Old Password\" required\n                                           [(ngModel)]=\"changePasswordModel.oldpassword\" base-sixty-four-input>\n                                   </div>\n                               </div>\n   \n                               <div class=\"form-group row\">\n   \n                                   <div class=\"col-sm-10 newp\">\n                                       <input type=\"password\" name=\"new_password\" class=\"form-control\"\n                                           placeholder=\"New Password\" required\n                                           [(ngModel)]=\"changePasswordModel.newpassword\">\n                                   </div>\n                               </div>\n   \n                               <div class=\"form-group row\">\n   \n                                   <div class=\"col-sm-10 confp\">\n                                       <input type=\"password\" name=\"conf_password\" class=\"form-control\"\n                                           placeholder=\"Confirm Password\" required\n                                           [(ngModel)]=\"changePasswordModel.confirmpassword\">\n                                   </div>\n                               </div>\n   \n                               <div class=\"form-group row\">\n                                   <div class=\"col-sm-10 chpwd\">\n   \n                                       <button type=\"submit\" class=\"btn btn-primary \"\n                                           [disabled]=\"!changePassword.valid\">Submit</button>\n                                   </div>\n                               </div>\n                           </form>\n   \n                       </div>\n                   </div>\n               </div>\n           </div>\n       </div>\n   \n       <!-- dashboard content -->\n       <div *ngIf=\"!isShown\">\n   \n           \n           <div class=\"row\">\n               <div class=\"dashboard_trakcer\"> {{sitename}}</div>\n               <hr>\n   \n   \n               <!-- 1st snapshot start -->\n               <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                   <div class=\"circle-title2\">\n                       <div class=\"circle-title-heading\">\n                           <i class=\"fa fa-bell fa-fw fa-3x\"></i>\n                       </div>\n                       <div class=\"box\" style=\"cursor: pointer;\" (click)=\"alarmTable()\">\n                           <div class=\"box-heading text-faded\">Alarms</div>\n                            &nbsp;\n                           <div class=\"box-number1 text-faded\">{{alarms}}</div>\n                           \n                           &nbsp;\n                           <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info <i\n                                   class=\"fa fa-chevron-circle-right\"></i></a>\n                       </div>\n                   </div>\n   \n               </div>\n   \n   \n               <!-- 1st snapshot end -->\n   \n   \n               <!-- 2nd snapshot start -->\n               <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                   <div class=\"circle-title2\">\n                       <div class=\"circle-title-heading\">\n                           <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n                       </div>\n                       <div class=\"box\">\n                           <div class=\"box-heading text-faded\">Energy Consumed</div>\n   \n                           <div class=\"box-number text-faded\">{{energyConsumed}} kWh</div>\n                                <div>\n                                <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                                <span id=\"sparklineA\">till {{previous}}</span>  \n                           </div>\n                           &nbsp;\n                       </div>\n                   </div>\n   \n               </div>\n   \n   \n               <!-- 2nd snapshot end -->\n   \n               <!-- 3rd snapshot start -->\n               <div  *ngIf=\"!is_carbon_emission_visible\" class=\"col-lg-3 col-sm-6 col-xs-6\">\n                   <div class=\"circle-title2\">\n                       <div class=\"circle-title-heading\">\n                           <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                       </div>\n                       <div class=\"box\">\n                           <div class=\"box-heading text-faded\">Energy Saved</div>\n   \n                           <div class=\"box-number text-faded\">{{savedEnergy}} kWh </div> \n                               <div>\n                                <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                                <span id=\"sparklineA\">till {{previous}}</span>    \n                           </div>\n                            &nbsp;\n                       </div>\n                   </div>\n   \n               </div>\n               <div  *ngIf=\"is_carbon_emission_visible\" class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                    </div>\n                    <div class=\"carbonbox\">\n                        <div class=\"box-heading text-faded\">Energy Saved/Carbon Emission Saved</div>\n                        <div class=\"box-heading text-faded\">\n                            <small>\n                                <span style=\"font-weight: 700\">Enery Saved :</span> {{savedEnergy}} kWH<br>\n                                <span style=\"font-weight: 700\">Carbon Emission Saved :</span> {{carbonValue}} <br>\n                            </small>\n                        </div>\n                            <div>\n                             <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                             <span id=\"sparklineA\">till {{previous}}</span>    \n                        </div>\n                         &nbsp;\n                    </div>\n                </div>\n\n            </div>\n   \n   \n               <!-- 3rd snapshot end -->\n   \n               <!-- 4th snapshot start -->\n               <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                   <div class=\"circle-title2\">\n                       <div class=\"circle-title-heading\">\n                           <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n                       </div>\n                       <div class=\"box\">\n                           <div class=\"box-heading text-faded\">% saved</div>\n   \n                           <div class=\"box-number text-faded\">{{percentageSaved}}</div>\n                           <div>\n                           <span id=\"sparklineA\">from {{liveDate}}</span><br>\n                           <span id=\"sparklineA\">till {{previous}}</span>\n                        </div>\n                           \n                            &nbsp;\n\n                       </div>\n                   </div>\n   \n               </div>\n           </div>\n\n           <!--Alarm details table-->\n           \n           <!--power-status and customer power-status start-->\n           <div class=\"row mt-4\">\n   \n               <div class=\"col-md-12 col-sm-12\">\n   \n                   <div class=\"panel-heading\">\n                       <i class=\"fa fa-bar-chart-o\"></i> Trend Overview\n                   </div>\n                   <div class=\"chart-body\">\n                    \n                        <highcharts-chart\n                            [Highcharts]=\"Highcharts\"\n                            [constructorType]=\"chartConstructor\"\n                            [options]=\"lineChartOptions\"\n                            [callbackFunction]=\"chartCallback\"\n                            [(update)]=\"updateFlag\"\n                            [oneToOne]=\"oneToOneFlag\"\n                    \n                            style=\"width: 100%; height: 100%; display: block;\"\n                        ></highcharts-chart>\n                </div>\n               </div>               \n           </div>\n           <!--End of the power-status and customer power-status-->\n       \n           <!--chart start-->\n            <div class=\"row mt-4\">\n            <div class=\"col-sm-12 \">\n                <div class=\"heading-panel\">\n\n                    <div class=\"row\">\n                        <div class=\"col-md-7\">\n                            <i class=\"fa fa-bar-chart-o\"></i>Total <mat-form-field style=\"max-width: 34%; font-size: 16px\">\n                            <mat-select [(value)]=\"selected_graph\" #energyValue (selectionChange)=\"columnGraphFilterChanged($event)\">\n                                <mat-option *ngFor=\"let graphType of graphTypes\" [value]=\"graphType.value\">\n                                    {{graphType.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                            </mat-form-field>\n                        </div>\n                        \n                        <div class=\"col-md-3\">\n                            <mat-form-field appearance=\"outline\">\n                                <input matInput [max] =\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\" [formControl]=\"date\" [value]=\"date.value\" (dateChange)=\"columnGraphFilterChanged()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                   \n                        <div *ngIf=\"showIntervalOptions; then thenTemplate else elseTemplate\"></div>\n                        <ng-template #thenTemplate>\n                            <div class=\"col-md-2\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-select [(value)]=\"selected_task\" (selectionChange)=\"columnGraphFilterChanged()\">\n                                        <mat-option *ngFor=\"let interval of intervals\" [value]=\"interval.value\">\n                                            {{interval.viewValue}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </ng-template>\n                        <ng-template #elseTemplate>\n                            <div class=\"col-md-2\"></div>\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"chart-body\" *ngIf=\"showDailygraph\">\n                    <highcharts-chart #chart \n                        [Highcharts]=\"Highcharts\"\n                        [constructorType]=\"chartConstructor\"\n                        [options]=\"barChartOptions\"\n                        [callbackFunction]=\"chartCallback\"\n                \n                        [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\"\n                \n                        style=\"width: 100%; height: 100%; display: block;\"\n                    ></highcharts-chart>\n                </div>\n                    <div *ngIf=\"showHourlygraph\">\n                        <highcharts-chart #chart\n                        [Highcharts]=\"Highcharts\"\n                        [constructorType]=\"chartConstructor\"\n                        [options]=\"updatedbarChartOptions\"\n                        [callbackFunction]=\"chartCallback\"\n                \n                        [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\"\n                \n                        style=\"width: 100%; height: 100%; display: block;\"\n                        ></highcharts-chart></div>  \n\n                    <div class=\"row\">\n                        <div class=\"col-6\"></div>\n                        <div class=\"col-6\">\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\" style=\"float: right;\" (click)=\"exportExcelData()\">\n                                <span class =\"ng-scope\">Export Excel</span>\n                            </button>\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\" id=\"excelbtn\" style=\"float: right;\" (click)=\"changeGraphStacking()\">\n                                <span class =\"ng-scope\">Change Graph</span>\n                            </button>\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"button\" type=\"button\" (click)=\"reenable()\">\n                                <span class =\"ng-scope\" *ngIf=\"graphShown\">Disable All</span>\n                                <span class =\"ng-scope\" *ngIf=\"!graphShown\">Enable All</span>\n                            </button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n   </div>"

/***/ }),

/***/ "./src/app/warehouse/warehouse.component.ts":
/*!**************************************************!*\
  !*** ./src/app/warehouse/warehouse.component.ts ***!
  \**************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_changepassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/changepassword */ "./src/app/models/changepassword.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/dashboard-data.service */ "./src/app/services/dashboard-data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_siteDataModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../models/siteDataModel */ "./src/app/models/siteDataModel.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-switchdash/dialog-switchdash.component */ "./src/app/dialog-switchdash/dialog-switchdash.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lights_watt_data_lights_watt_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lights-watt-data/lights-watt-data.component */ "./src/app/lights-watt-data/lights-watt-data.component.ts");
/* harmony import */ var _fanswattdata_fanswattdata_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fanswattdata/fanswattdata.component */ "./src/app/fanswattdata/fanswattdata.component.ts");
/* harmony import */ var _avg_data_avg_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../avg-data/avg-data.component */ "./src/app/avg-data/avg-data.component.ts");
/* harmony import */ var _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../excelsheet/excelsheet.component */ "./src/app/excelsheet/excelsheet.component.ts");




// import {LightsDataComponent} from './lights-data/lights-data.component';




//import {MatPaginator} from '@angular/material';


// import {formatDate} from '@angular/common';









var WarehouseComponent = /** @class */ (function () {
    function WarehouseComponent(dashData, UserService, DataService, dialog, router) {
        this.dashData = dashData;
        this.UserService = UserService;
        this.DataService = DataService;
        this.dialog = dialog;
        this.router = router;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.intervals = [
            { value: '0', viewValue: 'Daily' },
            { value: '1', viewValue: 'Hourly' }
        ];
        this.graphTypes = [
            { value: '0', viewValue: 'Energy Consumption' },
            { value: '1', viewValue: 'Energy Saved' }
        ];
        this.selected_graph = '0';
        this.selected_task = '0';
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.showIntervalOptions = false;
        this.showDailygraph = true;
        this.showHourlygraph = false;
        this.is_carbon_emission_visible = localStorage.getItem('carbon_emission_visible');
        this.liveData = new _models_siteDataModel__WEBPACK_IMPORTED_MODULE_11__["LiveMeteringDataModel"]();
        this.updateFlag = false;
        this.whichGraph = 1;
        this.ishide = 1;
        this.graphShown = true;
        this.isCollapsed = true;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.token = localStorage.getItem('token');
        this.isShown = false;
        this.is_hourly_data_visible = localStorage.getItem("is_hourly_data_visible");
        this.loading = true;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.pieChart = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.chartConstructor = 'chart';
        this.chartCallback = function () { };
        this.oneToOneFlag = true;
        //breadcrumbs keywords 
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.site_dash = false;
        this.super_admin_home = false;
        this.customer_home = false;
        this.customer_name = false;
        this.Admindata = false;
        this.saving_site_dash = false;
        this.customerOnly = true;
        this.avgDataValue = false;
        this.MyntraLightsOnly = false;
        this.MyntraFansOnly = false;
        this.changePasswordModel = new _models_changepassword__WEBPACK_IMPORTED_MODULE_2__["changePassword"](this.token, '', '');
        this.displayedColumns1 = ['alarm_type', 'object_type', 'alarm_priority', 'created_date'];
    }
    // highCharts = HighCharts;
    WarehouseComponent.prototype.applySelectFilter = function (event) {
        //alert(event.value);
        //data = event.value;
    };
    WarehouseComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    // normalize incoming series data to Highcharts-friendly arrays
    WarehouseComponent.prototype.normalizeSeries = function (inputSeries) {
        if (!inputSeries)
            return [];
        return inputSeries.map(function (s) {
            if (s && Array.isArray(s.data)) {
                s.data = s.data.map(function (pt) {
                    if (Array.isArray(pt))
                        return [Number(pt[0]), Number(pt[1])];
                    if (pt && pt.x !== undefined)
                        return [Number(pt.x), Number(pt.y)];
                    return pt;
                });
                return s;
            }
            if (s && s.data) {
                s.data = (s.data || []).map(function (pt) {
                    if (Array.isArray(pt))
                        return [Number(pt[0]), Number(pt[1])];
                    if (pt && pt.x !== undefined)
                        return [Number(pt.x), Number(pt.y)];
                    return pt;
                });
                return s;
            }
            return s;
        });
    };
    WarehouseComponent.prototype.ngOnInit = function () {
        if (this.is_carbon_emission_visible == "true") {
            this.is_carbon_emission_visible = true;
        }
        else {
            this.is_carbon_emission_visible = false;
        }
        this.siteId = localStorage.getItem('siteId');
        this.sitename = localStorage.getItem('sitename');
        console.log('here site id in energy saving', this.siteId);
        //here is implementation of breadcrumb...
        if (this.user_type == '1') {
            this.super_admin_home = true;
            this.customer_home = false;
            this.customer_name = true; //false
            this.site_dash = false;
            this.Admindata = true;
            this.saving_site_dash = true;
            this.showIntervalOptions = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
            this.customerOnly = false;
            this.avgDataValue = true;
            if (this.is_hourly_data_visible == 'true') {
                this.showIntervalOptions = true;
            }
            else {
                this.showIntervalOptions = false;
            }
        }
        else {
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = false;
            this.Admindata = false;
            this.saving_site_dash = true;
        }
        if (this.siteId == '29') {
            this.MyntraLightsOnly = true;
        }
        if (this.siteId == '34') {
            this.MyntraFansOnly = true;
        }
        //this.getPowerSourceDistData();
        this.getConsumptionData();
        this.getMonthlyTrend();
        this.getSiteSnapshot();
    };
    //Here is define function for getting site snapshot(energy-saved, saved% etc)
    WarehouseComponent.prototype.getSiteSnapshot = function () {
        var _this = this;
        var data = { "site_id": this.siteId, "user_type": this.user_type };
        this.UserService.getSiteSnapshot(data).subscribe(function (response) {
            _this.alarms = response['alarms'];
            _this.energyConsumed = response['energy_consumed'];
            _this.savedEnergy = response['saved_energy'];
            _this.percentageSaved = response['percentage_saved'];
            _this.carbonValue = response['carbon_emission_saved'];
            _this.liveDate = response['live_date'];
            _this.previous = response['previous_date'];
        });
    };
    WarehouseComponent.prototype.valuechange = function (newValue) {
        //mymodel = newValue;
        console.log(newValue);
    };
    WarehouseComponent.prototype.getCust = function () {
        this.dashData.getCustomerDetail().subscribe(function (response) {
        });
    };
    WarehouseComponent.prototype.alarmTable = function () {
        this.getSiteAlarmsDetails();
        this.showAlarm = true;
    };
    WarehouseComponent.prototype.AlarmTableClose = function () {
        this.showAlarm = false;
    };
    WarehouseComponent.prototype.custTable = function () {
        var _this = this;
        //this.loading = true;
        this.UserService.superAdminCustomertable().subscribe(function (response) {
            var res = response[0];
            _this.userInfo = res['c'];
            _this.custTable = res['customer'];
        }, function (error) {
        });
    };
    WarehouseComponent.prototype.changeGraphStacking = function () {
        this.whichGraph ^= 0x1;
        if (this.whichGraph == 0) {
            try {
                this.barChartOptions.plotOptions.column.stacking = ''; // for daily
            }
            catch (_a) {
                console.log("error in daily");
            }
            try {
                this.updatedbarChartOptions.plotOptions.column.stacking = ''; // for hourly
            }
            catch (_b) {
                console.log("err in hourly");
            }
            this.updateFlag = true;
            console.log('Inside normal stacking false');
        }
        else {
            try {
                this.barChartOptions.plotOptions.column.stacking = 'normal'; // for daily
            }
            catch (_c) {
                console.log("error in daily....");
            }
            try {
                this.updatedbarChartOptions.plotOptions.column.stacking = 'normal'; // for hourly
            }
            catch (_d) {
                console.log("error in hourly ....");
            }
            this.updateFlag = true;
            console.log('Inside normal stacking True');
        }
    };
    WarehouseComponent.prototype.reenable = function () {
        this.ishide ^= 0x1;
        if (this.ishide == 1) {
            this.graphShown = true;
            var chartData = this.chart.chart.legend.allItems;
            for (var i = 0; i <= chartData.length - 1; i++) {
                console.log("data : ", chartData[i]);
                chartData[i].setVisible(true, false);
            }
            this.chart.chart.redraw();
            console.log("reenable function true");
        }
        else {
            this.graphShown = false;
            var chartData = this.chart.chart.legend.allItems;
            for (var i = 0; i <= chartData.length - 1; i++) {
                console.log("data : ", chartData[i]);
                chartData[i].setVisible(false, false);
            }
            this.chart.chart.redraw();
        }
    };
    WarehouseComponent.prototype.getSiteAlarmsDetails = function () {
        var _this = this;
        var data1 = { "site_id": this.siteId };
        this.UserService.getAlarmOnSitePage(data1).subscribe(function (response) {
            var data = [];
            for (var i = 0; i <= response['data'].length - 1; i++) {
                var res = response['data'][i];
                var alarm_type = res['alarm_type'];
                var object_type = res['object_type'];
                var object_name = res['object_name'];
                var alarm_priority = res['alarm_priority'];
                var created_date = res['created_date'];
                data.push({
                    "alarm_type": alarm_type,
                    "object_type": object_type,
                    "object_name": object_name,
                    "alarm_priority": alarm_priority,
                    "created_date": created_date
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            console.log(data);
            _this.dataSource.paginator = _this.paginator; //mandeep
            _this.dataSource.sort = _this.sort; //mandeep
        }, function (error) { });
    };
    WarehouseComponent.prototype.getcustomerSnapshot = function () {
        var data = { "site_id": this.siteId };
        this.UserService.siteSnapshot(data).subscribe(function (response) {
            console.log(response);
        });
    };
    WarehouseComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        //console.log("Table Ka Click", "gkgkgkgkgk");
    };
    WarehouseComponent.prototype.getRecord = function (row) {
    };
    WarehouseComponent.prototype.onClickChngpwd = function () {
        this.isShown = true;
    };
    WarehouseComponent.prototype.customerdetail = function (obj) {
        console.log(obj);
    };
    WarehouseComponent.prototype.onChangePwd = function () {
        this.chngpwd = { 'token': this.token, 'oldpassword': btoa(this.changePasswordModel.oldpassword), 'newpassword': btoa(this.changePasswordModel.newpassword) };
        this.UserService.changePassword(this.chngpwd).subscribe(function (data) {
            //console.log("server_Res: ", data);
        }, function (error) {
            console.log("Server Error: ", error);
        });
    };
    WarehouseComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        location.reload();
    };
    WarehouseComponent.prototype.customerPage = function () {
        this.DataService.changeMessage("customer");
    };
    //Here is implementation of bar graph daily and hourly data
    WarehouseComponent.prototype.getConsumptionData = function () {
        var _this = this;
        var todayDate = new Date();
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        var fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        var data1 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
        this.UserService.energySavingMonthlyData(data1).subscribe(function (response) {
            console.log("ressnw  : ", response);
            // $(function () {
            _this.barChartOptions = {
                colorCount: '12',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                credits: {
                    enabled: false,
                },
                chart: {
                    backgroundColor: '#222222',
                    type: 'column',
                    zoomType: 'x',
                    setVisible: 'false',
                },
                title: {
                    text: _this.graphTitle,
                    style: {
                        color: 'white',
                    },
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['Dates']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    // max:6000,
                    title: {
                        style: { color: 'white', },
                        text: 'Number of units (kWh)'
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    },
                    stackLabels: {
                        enabled: true,
                        rotation: 270,
                        y: -28,
                        style: {
                            color: 'white',
                            fontSize: '11px',
                            verticalAlign: "top",
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        maxPointWidth: 50
                    },
                },
                legend: {
                    itemStyle: { color: 'white', },
                    maxHeight: 80,
                    y: 10,
                    // x:15,
                    navigation: {
                        activeColor: 'white',
                        animation: true,
                        arrowSize: 12,
                        inactiveColor: '#333',
                        style: {
                            fontWeight: '2px',
                            color: 'white'
                        }
                    }
                },
                series: _this.normalizeSeries(response["Data"]),
            };
            setTimeout(function () {
                _this.updateFlag = true;
                try {
                    if (_this.chart && _this.chart.chart)
                        _this.chart.chart.reflow();
                }
                catch (e) { }
            }, 0);
            _this.updateFlag = true;
        });
    };
    WarehouseComponent.prototype.columnGraphFilterChanged = function () {
        var _this = this;
        var mode = this.selected_task;
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        var graphType = this.selected_graph;
        var todayDate = new Date();
        var fromDate;
        var categories = [];
        var series = [];
        var selectedYear = this.date.value.getFullYear();
        var selectedMonth = this.date.value.getMonth();
        var selectedMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM', 'en');
        var currentMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM', 'en');
        var hourlySelectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        if (selectedMonthYear == currentMonthYear) {
            // if the daily filter is for current month only
            // then show the last 30 days data
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        }
        else {
            // if the current month is not same as the selected month
            // then show the data for that complete month
            fromDate = selectedMonthYear + "/01";
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(fromDate, 'yyyy/MM/dd', 'en');
            var day = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            tillDate = selectedMonthYear + "/" + day;
        }
        /**
         *  Call the API on the basis of Graph Type
         */
        if (graphType == '0') {
            // Energy Consumption Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                this.showHourlygraph = false;
                this.showDailygraph = true;
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
                this.UserService.energySavingMonthlyData(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                this.showDailygraph = false;
                this.showHourlygraph = true;
                var data = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                console.log('This is mine selected Date in hourly data', hourlySelectedDate);
                // this.barChartOptions.plotOptions.column.stacking='percent';
                this.UserService.energySavingHourlyData(data).subscribe(function (response) {
                    _this.updatedbarChartOptions = {
                        colorCount: '12',
                        colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                        credits: {
                            enabled: false,
                        },
                        chart: {
                            backgroundColor: '#222222',
                            type: 'column',
                            zoomType: 'x',
                            setVisible: 'false',
                        },
                        title: {
                            text: _this.graphTitle,
                            style: {
                                color: 'white',
                            },
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: 'white',
                                },
                            },
                            categories: response['Hours']
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                style: { color: 'white', },
                                text: 'Number of units (kWh)'
                            },
                            labels: {
                                style: {
                                    color: 'white'
                                }
                            },
                            stackLabels: {
                                enabled: true,
                                rotation: 270,
                                y: -28,
                                style: {
                                    color: 'white',
                                    fontSize: '11px',
                                    verticalAlign: "top",
                                }
                            }
                        },
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>' +
                                    'Total: ' + this.point.stackTotal;
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                maxPointWidth: 50
                                //colors: ['orange', 'white', 'blue']
                            },
                        },
                        legend: {
                            itemStyle: { color: 'white', },
                            maxHeight: 80,
                            y: 10,
                            // x:15,
                            navigation: {
                                activeColor: 'white',
                                animation: true,
                                arrowSize: 12,
                                inactiveColor: '#333',
                                style: {
                                    fontWeight: '2px',
                                    color: 'white'
                                }
                            }
                        },
                        series: response["Data"],
                    };
                    // this.chart.chart.redraw()
                    console.log("hour : ", _this.updatedbarChartOptions);
                }, function (error) { });
            }
        }
        else {
            // Graph for energy saving data ....
            if (mode == '0') {
                // Graph Filter is for daily data
                this.showDailygraph = true;
                this.showHourlygraph = false;
                // Call the API with specific data
                var data = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate, "user_type": this.user_type };
                //this.barChartOptions.plotOptions.column.stacking='percent'; //mandeep for percentage show
                this.UserService.energySavingMonthlyData(data).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['SavingData'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            else {
                this.showDailygraph = false;
                this.showHourlygraph = true;
                // Graph Filter is for hourly data
                var data = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                console.log('This is mine selected Date in hourly data for energy saving data', hourlySelectedDate);
                this.UserService.energySavingHourlyData(data).subscribe(function (response) {
                    console.log("respsmdksk: ", response);
                    categories = response['Hours'];
                    series = response['SavingData'];
                    _this.updateFlag = true;
                    _this.updatedbarChartOptions.xAxis.categories = categories;
                    _this.updatedbarChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
        }
    };
    //Call function for monthly trend Graph.....
    WarehouseComponent.prototype.getMonthlyTrend = function () {
        var _this = this;
        var data1 = { 'site_id': this.siteId, "user_type": this.user_type };
        if (this.is_carbon_emission_visible == true) {
            this.UserService.energySavingMonthlyTrend(data1).subscribe(function (response) {
                var seriesData = [];
                var energyConsumed;
                energyConsumed = { "name": "energyConsumed", 'type': "spline", 'y': response['energyConsumed'] };
                var enegySaved = { "name": "energySaved", 'type': 'spline', 'y': response['energySaved'] };
                var percentageSaved = { "name": "percentageSaved", 'type': 'spline', 'y': response['percentageSaved'] };
                var carbonSaved = { "name": "carbonSaved", 'type': 'spline', 'y': response['carbon_saved'] };
                var data2 = [{ "data": [energyConsumed, enegySaved, percentageSaved, carbonSaved] }];
                seriesData.push(data2);
                // highcharts = Highcharts;
                _this.lineChartOptions = {
                    colorCount: '4',
                    colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                    chart: {
                        type: "spline",
                        backgroundColor: "#222222",
                        overflow: 'scroll'
                    },
                    title: {
                        style: {
                            color: 'white',
                        },
                        text: 'Snapshot Monthly Trend'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: 'white',
                            },
                        },
                        categories: response['months']
                    },
                    yAxis: [{
                            labels: {
                                // format: '{value} units',
                                style: {
                                    color: '#ff7a01'
                                }
                            },
                            title: {
                                text: 'Units (KWH)',
                                style: {
                                    color: '#ff7a01'
                                }
                            },
                            opposite: false
                        }, {
                            gridLineWidth: 0,
                            title: {
                                text: 'Percentage Saved',
                                style: {
                                    color: '#7cb5ec'
                                }
                            },
                            labels: {
                                format: '{value} %',
                                style: {
                                    color: '#7cb5ec'
                                }
                            },
                            opposite: true
                        }],
                    tooltip: {
                        formatter: function () {
                            var date = new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString();
                            if (date == this.x) {
                                var d = new Date(); // today!
                                d.setDate(d.getDate() - 1);
                                return '<b>' + 'till' + ' ' + d.getDate().toString() + '-' + new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString() + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>';
                            }
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>';
                        }
                    },
                    legend: {
                        itemStyle: { color: 'white', },
                    },
                    series: [
                        {
                            name: 'Energy Consumed',
                            data: response['energyConsumed'],
                        },
                        {
                            name: 'Energy Saved',
                            data: response["energySaved"],
                        },
                        {
                            name: 'Carbon Emission Saved',
                            data: response["carbon_saved"],
                        },
                        {
                            yAxis: 1,
                            name: 'Percentage Saved',
                            data: response["percentageSaved"],
                        }
                    ]
                };
                console.log("graph data", _this.lineChartOptions);
            });
        }
        else {
            console.log("else##################################");
            this.UserService.energySavingMonthlyTrend(data1).subscribe(function (response) {
                var seriesData = [];
                var energyConsumed;
                energyConsumed = { "name": "energyConsumed", 'type': "spline", 'y': response['energyConsumed'] };
                var enegySaved = { "name": "energySaved", 'type': 'spline', 'y': response['energySaved'] };
                var percentageSaved = { "name": "percentageSaved", 'type': 'spline', 'y': response['percentageSaved'] };
                var data2 = [{ "data": [energyConsumed, enegySaved, percentageSaved] }];
                seriesData.push(data2);
                // highcharts = Highcharts;
                _this.lineChartOptions = {
                    colorCount: '4',
                    colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                    chart: {
                        type: "spline",
                        backgroundColor: "#222222",
                        overflow: 'scroll'
                    },
                    title: {
                        style: {
                            color: 'white',
                        },
                        text: 'Snapshot Monthly Trend'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: 'white',
                            },
                        },
                        categories: response['months']
                    },
                    yAxis: [{
                            labels: {
                                // format: '{value} units',
                                style: {
                                    color: '#ff7a01'
                                }
                            },
                            title: {
                                text: 'Units (KWH)',
                                style: {
                                    color: '#ff7a01'
                                }
                            },
                            opposite: false
                        }, {
                            gridLineWidth: 0,
                            title: {
                                text: 'Percentage Saved',
                                style: {
                                    color: '#7cb5ec'
                                }
                            },
                            labels: {
                                format: '{value} %',
                                style: {
                                    color: '#7cb5ec'
                                }
                            },
                            opposite: true
                        }],
                    tooltip: {
                        formatter: function () {
                            var date = new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString();
                            if (date == this.x) {
                                var d = new Date(); // today!
                                d.setDate(d.getDate() - 1);
                                return '<b>' + 'till' + ' ' + d.getDate().toString() + '-' + new Date().toLocaleDateString("en-US", { month: 'short' }) + '-' + new Date().getFullYear().toString() + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>';
                            }
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>';
                        }
                    },
                    legend: {
                        itemStyle: { color: 'white', },
                    },
                    series: [
                        {
                            name: 'Energy Consumed',
                            data: response['energyConsumed'],
                        },
                        {
                            name: 'Energy Saved',
                            data: response["energySaved"],
                        },
                        {
                            yAxis: 1,
                            name: 'Percentage Saved',
                            data: response["percentageSaved"],
                        }
                    ]
                };
                console.log("graph data", _this.lineChartOptions);
            });
        }
    };
    WarehouseComponent.prototype.openSiteDashboard = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        this.dialog.open(_dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_13__["DialogSwitchdashComponent"], dialogConfig);
    };
    WarehouseComponent.prototype.lightsData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        this.dialog.open(_lights_watt_data_lights_watt_data_component__WEBPACK_IMPORTED_MODULE_15__["LightsWattDataComponent"], dialogConfig);
    };
    WarehouseComponent.prototype.fansData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        this.dialog.open(_fanswattdata_fanswattdata_component__WEBPACK_IMPORTED_MODULE_16__["FanswattdataComponent"], dialogConfig);
    };
    WarehouseComponent.prototype.avgData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        this.dialog.open(_avg_data_avg_data_component__WEBPACK_IMPORTED_MODULE_17__["AvgDataComponent"], dialogConfig);
    };
    WarehouseComponent.prototype.exportExcelData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        this.dialog.open(_excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_18__["ExcelsheetComponent"], dialogConfig);
    };
    WarehouseComponent.prototype.baseline = function () {
        console.log("baseline html hit");
        this.DataService.changeMessage("baseline");
        localStorage.setItem('siteId', this.siteId);
        localStorage.setItem("baseline", 'true');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], WarehouseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], WarehouseComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], WarehouseComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WarehouseComponent.prototype, "chart", void 0);
    WarehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-warehouse',
            template: __webpack_require__(/*! ./warehouse.component.html */ "./src/app/warehouse/warehouse.component.html"),
            styles: [__webpack_require__(/*! ./warehouse.component.css */ "./src/app/warehouse/warehouse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]])
    ], WarehouseComponent);
    return WarehouseComponent;
}());



/***/ }),

/***/ "./src/app/wh-metering/wh-metering.component.css":
/*!*******************************************************!*\
  !*** ./src/app/wh-metering/wh-metering.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_trakcer{\n   \n    margin-top: 10px;\n    margin-left:10px;\n    margin-right: 5px;\n    font-size: 18px;\n }\n \n hr {\n     width: 95%;\n     height: 1px;\n     margin-left: 10px;\n     margin-top: 0px;\n     background-color:#666;\n     \n    }\n \n .mat-option.mat-selected:not(.mat-option-disabled) {\n       color: #fff !important;\n      \n   }\n \n #button2{\n      margin-top: 5px;\n      background-color: #ffa5003d;\n      border: 1px solid #ffffff2b;\n      padding: 12px 11px 13px 11px;\n      color: white;\n   }\n \n .mat-cell[_ngcontent-c10] {\n      font-size: 12px;\n      border-right: 1px solid #222;\n      padding: 10px;\n  }\n \n .container-fluid {\n      background: black;\n   }\n \n /* Snapshot row start */\n \n .circle-title2{\n     margin-bottom: 15px;\n     text-align: center;\n     \n     \n      }\n \n .circle-title-heading{\n       position:relative; \n       height: 80px; \n       width: 80px;\n       margin: 0 auto -40px;\n       border-radius: 100%;\n       transition: all ease-in-out .3s;\n       background:#ff7a01;\n       color: #fff;\n     }\n \n .circle-title-heading .fa{\n        line-height: 80px;\n     }\n \n .circle-title-heading .fa.icon{\n       font-size: 4em;\n       padding-top: 8px;\n    }\n \n .box{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n       border-radius: 5px;\n     \n    }\n \n .box2{\n       padding-top: 50px;\n       background-color: #222222;\n       border: 1px solid #ff7a01;\n       border-radius: 5px;\n       height: 140px;\n       margin-bottom: 50px;\n    }\n \n .box:hover{\n       border-color: #4C4B4B;\n       background-color: #4C4B4B;\n    }\n \n .box-heading{\n         text-transform: uppercase;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n    }\n \n .text-faded{\n       color:rgba(255,255,255,0.7);\n    }\n \n .box-number{\n       padding:5px 0 15px;\n       font-size: 26px;\n       font-weight: 700;\n       line-height: 1;\n    }\n \n .footer{\n       display: block;\n       padding: 5px;\n       color:rgba(255,255,255,0.5);\n       transition: all ease-in-out .3s;\n    }\n \n .footer:hover{\n       text-decoration: none;\n       color:rgba(255,255,255,0.5);\n       background-color: rgba(0,0,0,0.2);\n    }\n \n #img-ctn{\n       padding-top: 14px;\n    }\n \n /* Snapshot row end */\n \n /* status and energy power status row Starts */\n \n .panel-heading{\n    position: relative;\n  \n    background-color: #ff7a01;\n    \n    border: 1px;\n    border-radius: 3px;\n    text-align: left;\n    padding: 5px;\n    font-size: 16px;\n }\n \n .hover-effect{\n    border-color: #4C4B4B;\n       background-color: #4C4B4B;\n }\n \n .status-panel-body{\n        \n        width:100%;\n        background-color:black;\n        position:relative;\n        border-radius:3px; \n        border:1px solid #ff7a01;  \n        padding: 10px;\n        }\n \n .chartBorder{\n          width: 100%;\n \n      \n      }\n \n /* status and energy power status row End */\n \n /* Customer detail table start */\n \n .panel-body{\n       width:100%;\n       border:1px solid #ff7a01;\n       padding: 5px;  \n }\n \n mat-form-field{\n    \n    font-size: 16px;\n    width: 100%;\n }\n \n table {\n    width: 100%;\n    text-align:left;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n \n .mat-header-cell{\n    background-color: black;\n    padding: 8px;\n    font-size: 16px;\n }\n \n .headerRow{\n    background: red;\n    padding: 8px;\n    text-align: center;\n    font-size: 16px;\n }\n \n .mat-paginator{\n    background: #000000;\n }\n \n th {\n    background-color: #000000;\n    padding: 8px;\n    text-align: center;\n }\n \n td{\n       \n    padding:8px;\n }\n \n .mat-row:nth-child(even){\n   background-color: #696969;\n}\n \n .mat-row:nth-child(odd){\n   background-color: #3F3F3F;\n}\n \n /* Customer detail table end */\n \n /* Energy status graph start */\n \n .heading-panel{\n    background:#ff7a01;\n    padding:5px;\n    text-align: left;\n    font-size: 16px;\n    border-radius: 3px;\n    margin-top: 12px;\n    }\n \n .chart-body{\n   background-color: #222222;\n   border:1px solid #ff7a01;\n   padding: 10px;\n   position: relative;\n   min-height: 360px; /* ensure consistent chart container height */\n }\n \n /* Energy status graph end */\n \n .chngpwd-body{\n    width:100%;\n    border:1px solid #ff7a01;\n    padding-top: 15px;\n    margin-top: 55px;\n    \n }\n \n .card-header{\n    color: black;\n    text-align: left;\n    font-size: 18px;\n }\n \n .oldp{\n    margin-top: 10px;\n }\n \n .chpwd{\n    text-align: left;\n }\n \n .btn-primary {\n    border:none;\n    background: #E66F00;\n    color: #ffffff;\n }\n \n .btn-primary::after {\n   border: none;\n   background: #E66F00;\n }\n \n .btn{\n    border: #E66F00;\n     \n }\n \n .chngpwd{\n    margin-top: 125px;\n }\n \n .charheader2{\n    margin: 5px;\n    border-top: 1px solid orangered;\n    background: orangered;\n    padding: 5px;\n    border-radius: 5px;\n \n }\n \n .mat-form-field-flex {\n    margin-bottom: -15px !important;\n }\n \n .mat-form-field-underline {\n   display: block;\n}\n \n .md-raised.md-primary.md-button.md-link-ripple{\n   background: #E66F00; \n   color: #ffffff;\n   border: #E66F00;\n   border-radius: 6px;\n   padding: 7px 18px;\n   margin-top: 8px;\n}\n \n #exceldata{\n    background: #E66F00; \n   color: #ffffff;\n   border: #E66F00;\n   border-radius: 6px;\n   padding: 7px 18px;\n   margin-top: 8px;\n   margin-right: 10px;\n}\n \n /* Breadcrumbs from http://bootsnipp.com/snippets/featured/triangle-breadcrumbs-arrows */\n \n #breadcrumb{\n    position: fixed;\n    z-index: 999;\n    top: 50px;\n    width: 100%;\n    background: #222222;\n }\n \n /*  breadcrumb */\n \n .btn-breadcrumb .btn:not(:last-child):after {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid #303030;\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: 100%;\n    z-index: 3;\n    color: #fff;\n  }\n \n .btn-breadcrumb .btn:not(:last-child):before {\n    content: \" \";\n    display: block;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    border-left: 10px solid rgb(173, 173, 173);\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    margin-left: 1px;\n    left: 100%;\n    z-index: 3;\n  }\n \n .btn-breadcrumb .btn {\n    padding:6px 12px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n \n .btn-breadcrumb .btn:first-child {\n    padding:6px 6px 6px 10px;\n    background: #303030;\n    color: #fff;\n  }\n \n .btn-breadcrumb .btn:last-child {\n    padding:6px 18px 6px 24px;\n    background: #303030;\n    color: #fff;\n  }\n \n /** Default button **/\n \n .btn-breadcrumb .btn.btn-default:not(:last-child):after {\n    border-left: 10px solid #303030;\n  }\n \n /* The responsive part */\n \n .btn-breadcrumb > * > div {\n      /* With less: .text-overflow(); */\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;    \n  }\n \n .btn-breadcrumb > *:nth-child(n+2) {\n    display:none;\n  }\n \n /* === For phones =================================== */\n \n @media (max-width: 767px) {\n      .btn-breadcrumb > *:nth-last-child(-n+2) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 60px;\n      }\n  }\n \n /* === For tablets ================================== */\n \n @media (min-width: 768px) and (max-width:991px) {\n      .btn-breadcrumb > *:nth-last-child(-n+4) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 100px;\n      }\n  }\n \n /* === For desktops ================================== */\n \n @media (min-width: 992px) {\n      .btn-breadcrumb > *:nth-last-child(-n+6) {\n          display:block;\n      } \n      .btn-breadcrumb > * div {\n          max-width: 170px;\n      }\n  }\n \n #page-wrapper {\n   width: 100%;\n   padding: 130px 25px 130px 25px;\n   background: #0F0F0F;\n}\n \n /* warehouse details css start  */\n \n .panel-body ul.all-details{\n   font-weight: bold;\n   display: table;\n   width: 100%;\n   text-align: left;\n}\n \n .panel-body ul.all-details li{\n display: table-cell;\n width: 50%;\n\n\n}\n \n .panel-body ul.all-details li { /*changes-23/08/17*/\n   max-width: 100px;\n   word-wrap: break-word;\n}\n \n .panel-body.details{\n   min-height: 291px;\n   background: #222222;\n   margin: 0;\n   padding: 0;\n }\n \n dl, ol, p, ul {\n   margin-top: 0;\n   margin-bottom: 0.5rem;\n}\n \n dl[_ngcontent-c10], ol[_ngcontent-c10], ul[_ngcontent-c10] {\n   margin-top: 1px;\n   margin-bottom: 0;\n}\n \n /* Customer details css end  */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2gtbWV0ZXJpbmcvd2gtbWV0ZXJpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztDQUVBO0tBQ0ksVUFBVTtLQUNWLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsZUFBZTtLQUNmLHFCQUFxQjs7SUFFdEI7O0NBRUE7T0FDRyxzQkFBc0I7O0dBRTFCOztDQUNBO01BQ0csZUFBZTtNQUNmLDJCQUEyQjtNQUMzQiwyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLFlBQVk7R0FDZjs7Q0FDQTtNQUNHLGVBQWU7TUFDZiw0QkFBNEI7TUFDNUIsYUFBYTtFQUNqQjs7Q0FFQztNQUNHLGlCQUFpQjtHQUNwQjs7Q0FFQSx1QkFBdUI7O0NBRXZCO0tBQ0UsbUJBQW1CO0tBQ25CLGtCQUFrQjs7O01BR2pCOztDQUNEO09BQ0UsaUJBQWlCO09BQ2pCLFlBQVk7T0FDWixXQUFXO09BQ1gsb0JBQW9CO09BQ3BCLG1CQUFtQjtPQUNuQiwrQkFBK0I7T0FDL0Isa0JBQWtCO09BQ2xCLFdBQVc7S0FDYjs7Q0FDQTtRQUNHLGlCQUFpQjtLQUNwQjs7Q0FDQTtPQUNFLGNBQWM7T0FDZCxnQkFBZ0I7SUFDbkI7O0NBQ0M7T0FDRSxpQkFBaUI7T0FDakIseUJBQXlCO09BQ3pCLHlCQUF5QjtPQUN6QixrQkFBa0I7O0lBRXJCOztDQUVBO09BQ0csaUJBQWlCO09BQ2pCLHlCQUF5QjtPQUN6Qix5QkFBeUI7T0FDekIsa0JBQWtCO09BQ2xCLGFBQWE7T0FDYixtQkFBbUI7SUFDdEI7O0NBQ0E7T0FDRyxxQkFBcUI7T0FDckIseUJBQXlCO0lBQzVCOztDQUNBO1NBQ0sseUJBQXlCO1NBQ3pCLHVCQUF1QjtTQUN2QixnQkFBZ0I7U0FDaEIsbUJBQW1CO0lBQ3hCOztDQUNBO09BQ0csMkJBQTJCO0lBQzlCOztDQUNBO09BQ0csa0JBQWtCO09BQ2xCLGVBQWU7T0FDZixnQkFBZ0I7T0FDaEIsY0FBYztJQUNqQjs7Q0FDQTtPQUNHLGNBQWM7T0FDZCxZQUFZO09BQ1osMkJBQTJCO09BQzNCLCtCQUErQjtJQUNsQzs7Q0FDQTtPQUNHLHFCQUFxQjtPQUNyQiwyQkFBMkI7T0FDM0IsaUNBQWlDO0lBQ3BDOztDQUNBO09BQ0csaUJBQWlCO0lBQ3BCOztDQUVILHFCQUFxQjs7Q0FJckIsOENBQThDOztDQUM5QztJQUNHLGtCQUFrQjs7SUFFbEIseUJBQXlCOztJQUV6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7Q0FDQTtJQUNHLHFCQUFxQjtPQUNsQix5QkFBeUI7Q0FDL0I7O0NBQ0E7O1FBRU8sVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2I7O0NBRUo7VUFDTSxXQUFXOzs7TUFHZjs7Q0FHTCwyQ0FBMkM7O0NBRzNDLGdDQUFnQzs7Q0FHaEM7T0FDTSxVQUFVO09BQ1Ysd0JBQXdCO09BQ3hCLFlBQVk7Q0FDbEI7O0NBQ0E7O0lBRUcsZUFBZTtJQUNmLFdBQVc7Q0FDZDs7Q0FDQTtJQUNHLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7Q0FDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7Q0FDQTtJQUNHLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0NBQ0M7SUFDRSxtQkFBbUI7Q0FDdEI7O0NBR0E7SUFDRyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjs7Q0FDQTs7SUFFRyxXQUFXO0NBQ2Q7O0NBQ0E7R0FDRSx5QkFBeUI7QUFDNUI7O0NBQ0E7R0FDRyx5QkFBeUI7QUFDNUI7O0NBQ0MsOEJBQThCOztDQUU5Qiw4QkFBOEI7O0NBQzlCO0lBQ0csa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7O0NBRUg7R0FDRSx5QkFBeUI7R0FDekIsd0JBQXdCO0dBQ3hCLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsaUJBQWlCLEVBQUUsNkNBQTZDO0NBQ2xFOztDQUlBLDRCQUE0Qjs7Q0FJNUI7SUFDRyxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0NBRW5COztDQUdBO0lBQ0csWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztDQUNBO0lBQ0csZ0JBQWdCO0NBQ25COztDQUNBO0lBQ0csZ0JBQWdCO0NBQ25COztDQUNBO0lBQ0csV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCOztDQUNBO0dBQ0UsWUFBWTtHQUNaLG1CQUFtQjtDQUNyQjs7Q0FDQTtJQUNHLGVBQWU7O0NBRWxCOztDQUNBO0lBQ0csaUJBQWlCO0NBQ3BCOztDQUdBO0lBQ0csV0FBVztJQUNYLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjs7Q0FFckI7O0NBRUE7SUFDRywrQkFBK0I7Q0FDbEM7O0NBQ0E7R0FDRSxjQUFjO0FBQ2pCOztDQUNBO0dBQ0csbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0FBQ2xCOztDQUNBO0lBQ0ksbUJBQW1CO0dBQ3BCLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2Ysa0JBQWtCO0FBQ3JCOztDQUdBLHdGQUF3Rjs7Q0FDdkY7SUFDRyxlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztDQUdELGdCQUFnQjs7Q0FFaEI7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0NBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0NBRUE7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7Q0FDQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztDQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0NBRUEscUJBQXFCOztDQUNyQjtJQUNFLCtCQUErQjtFQUNqQzs7Q0FHQSx3QkFBd0I7O0NBRXhCO01BQ0ksaUNBQWlDO01BQ2pDLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCO0VBQzNCOztDQUVBO0lBQ0UsWUFBWTtFQUNkOztDQUVBLHVEQUF1RDs7Q0FDdkQ7TUFDSTtVQUNJLGFBQWE7TUFDakI7TUFDQTtVQUNJLGVBQWU7TUFDbkI7RUFDSjs7Q0FFQSx1REFBdUQ7O0NBQ3ZEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjs7Q0FFQSx3REFBd0Q7O0NBQ3hEO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjs7Q0FDQTtHQUNDLFdBQVc7R0FDWCw4QkFBOEI7R0FDOUIsbUJBQW1CO0FBQ3RCOztDQUVDLGlDQUFpQzs7Q0FDbEM7R0FDRyxpQkFBaUI7R0FDakIsY0FBYztHQUNkLFdBQVc7R0FDWCxnQkFBZ0I7QUFDbkI7O0NBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTs7O0FBR1g7O0NBQ0EsZ0NBQWdDLG1CQUFtQjtHQUNoRCxnQkFBZ0I7R0FDaEIscUJBQXFCO0FBQ3hCOztDQUNBO0dBQ0csaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixTQUFTO0dBQ1QsVUFBVTtDQUNaOztDQUNBO0dBQ0UsYUFBYTtHQUNiLHFCQUFxQjtBQUN4Qjs7Q0FFQTtHQUNHLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0NBQ0MsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvd2gtbWV0ZXJpbmcvd2gtbWV0ZXJpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmRfdHJha2NlcntcbiAgIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gfVxuIFxuIGhyIHtcbiAgICAgd2lkdGg6IDk1JTtcbiAgICAgaGVpZ2h0OiAxcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IzY2NjtcbiAgICAgXG4gICAgfVxuICAgIFxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgXG4gICB9XG4gICAjYnV0dG9uMntcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDAzZDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYyYjtcbiAgICAgIHBhZGRpbmc6IDEycHggMTFweCAxM3B4IDExcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICB9XG4gICAubWF0LWNlbGxbX25nY29udGVudC1jMTBdIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICB9XG4gICBcbiAgIC8qIFNuYXBzaG90IHJvdyBzdGFydCAqL1xuIFxuICAgLmNpcmNsZS10aXRsZTJ7XG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgXG4gICAgIFxuICAgICAgfVxuICAgICAuY2lyY2xlLXRpdGxlLWhlYWRpbmd7XG4gICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxuICAgICAgIGhlaWdodDogODBweDsgXG4gICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgbWFyZ2luOiAwIGF1dG8gLTQwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICAgICAgIGJhY2tncm91bmQ6I2ZmN2EwMTtcbiAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgfSBcbiAgICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgIH1cbiAgICAgLmNpcmNsZS10aXRsZS1oZWFkaW5nIC5mYS5pY29ue1xuICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgICAuYm94e1xuICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIFxuICAgIH1cbiBcbiAgICAuYm94MntcbiAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhMDE7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmJveDpob3ZlcntcbiAgICAgICBib3JkZXItY29sb3I6ICM0QzRCNEI7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNEI0QjtcbiAgICB9XG4gICAgLmJveC1oZWFkaW5ne1xuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC50ZXh0LWZhZGVke1xuICAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgICB9XG4gICAgLmJveC1udW1iZXJ7XG4gICAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgICAuZm9vdGVye1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgICB9XG4gICAgLmZvb3Rlcjpob3ZlcntcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgI2ltZy1jdG57XG4gICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgfVxuICAgIFxuIC8qIFNuYXBzaG90IHJvdyBlbmQgKi9cbiBcbiBcbiBcbiAvKiBzdGF0dXMgYW5kIGVuZXJneSBwb3dlciBzdGF0dXMgcm93IFN0YXJ0cyAqL1xuIC5wYW5lbC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EwMTtcbiAgICBcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cbiAuaG92ZXItZWZmZWN0e1xuICAgIGJvcmRlci1jb2xvcjogIzRDNEI0QjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM0QjRCO1xuIH1cbiAuc3RhdHVzLXBhbmVsLWJvZHl7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czozcHg7IFxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7ICBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfSAgXG4gXG4gICAgLmNoYXJ0Qm9yZGVye1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuIFxuICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgXG4gLyogc3RhdHVzIGFuZCBlbmVyZ3kgcG93ZXIgc3RhdHVzIHJvdyBFbmQgKi9cbiBcbiBcbiAvKiBDdXN0b21lciBkZXRhaWwgdGFibGUgc3RhcnQgKi9cbiBcbiBcbiAucGFuZWwtYm9keXtcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmN2EwMTtcbiAgICAgICBwYWRkaW5nOiA1cHg7ICBcbiB9ICBcbiBtYXQtZm9ybS1maWVsZHtcbiAgICBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICAubWF0LWhlYWRlci1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gfVxuIC5oZWFkZXJSb3d7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIH1cbiAgLm1hdC1wYWdpbmF0b3J7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiB9XG4gXG4gXG4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gdGR7XG4gICAgICAgXG4gICAgcGFkZGluZzo4cHg7XG4gfSBcbiAubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0YzRjNGO1xufVxuIC8qIEN1c3RvbWVyIGRldGFpbCB0YWJsZSBlbmQgKi9cbiBcbiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIHN0YXJ0ICovXG4gLmhlYWRpbmctcGFuZWx7XG4gICAgYmFja2dyb3VuZDojZmY3YTAxO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiBcbiAuY2hhcnQtYm9keXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgbWluLWhlaWdodDogMzYwcHg7IC8qIGVuc3VyZSBjb25zaXN0ZW50IGNoYXJ0IGNvbnRhaW5lciBoZWlnaHQgKi9cbiB9XG4gICBcbiBcbiBcbiAvKiBFbmVyZ3kgc3RhdHVzIGdyYXBoIGVuZCAqL1xuIFxuIFxuIFxuIC5jaG5ncHdkLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhMDE7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNTVweDtcbiAgICBcbiB9XG4gXG4gXG4gLmNhcmQtaGVhZGVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gLm9sZHB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9XG4gLmNocHdke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIC5idG4tcHJpbWFyeSB7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogI0U2NkYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiB9XG4gLmJ0bi1wcmltYXJ5OjphZnRlciB7XG4gICBib3JkZXI6IG5vbmU7XG4gICBiYWNrZ3JvdW5kOiAjRTY2RjAwO1xuIH1cbiAuYnRue1xuICAgIGJvcmRlcjogI0U2NkYwMDtcbiAgICAgXG4gfVxuIC5jaG5ncHdke1xuICAgIG1hcmdpbi10b3A6IDEyNXB4O1xuIH1cbiBcbiBcbiAuY2hhcmhlYWRlcjJ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcbiB9XG5cbiAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHggIWltcG9ydGFudDtcbiB9XG4gLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZC1yYWlzZWQubWQtcHJpbWFyeS5tZC1idXR0b24ubWQtbGluay1yaXBwbGV7XG4gICBiYWNrZ3JvdW5kOiAjRTY2RjAwOyBcbiAgIGNvbG9yOiAjZmZmZmZmO1xuICAgYm9yZGVyOiAjRTY2RjAwO1xuICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgcGFkZGluZzogN3B4IDE4cHg7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG59XG4jZXhjZWxkYXRhe1xuICAgIGJhY2tncm91bmQ6ICNFNjZGMDA7IFxuICAgY29sb3I6ICNmZmZmZmY7XG4gICBib3JkZXI6ICNFNjZGMDA7XG4gICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICBwYWRkaW5nOiA3cHggMThweDtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuXG4vKiBCcmVhZGNydW1icyBmcm9tIGh0dHA6Ly9ib290c25pcHAuY29tL3NuaXBwZXRzL2ZlYXR1cmVkL3RyaWFuZ2xlLWJyZWFkY3J1bWJzLWFycm93cyAqL1xuICNicmVhZGNydW1ie1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gfVxuXG4gXG4vKiAgYnJlYWRjcnVtYiAqL1xuXG4uYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMzMDMwMzA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbGVmdDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICB9XG4gIFxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0biB7XG4gICAgcGFkZGluZzo2cHggMTJweCA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idG4tYnJlYWRjcnVtYiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nOjZweCA2cHggNnB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWJyZWFkY3J1bWIgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nOjZweCAxOHB4IDZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8qKiBEZWZhdWx0IGJ1dHRvbiAqKi9cbiAgLmJ0bi1icmVhZGNydW1iIC5idG4uYnRuLWRlZmF1bHQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwMzAzMDtcbiAgfVxuICBcbiAgXG4gIC8qIFRoZSByZXNwb25zaXZlIHBhcnQgKi9cbiAgXG4gIC5idG4tYnJlYWRjcnVtYiA+ICogPiBkaXYge1xuICAgICAgLyogV2l0aCBsZXNzOiAudGV4dC1vdmVyZmxvdygpOyAqL1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICAgXG4gIH1cbiAgXG4gIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWNoaWxkKG4rMikge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBcbiAgLyogPT09IEZvciBwaG9uZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAuYnRuLWJyZWFkY3J1bWIgPiAqOm50aC1sYXN0LWNoaWxkKC1uKzIpIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfSBcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICogZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIC8qID09PSBGb3IgdGFibGV0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNCkge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIC8qID09PSBGb3IgZGVza3RvcHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5idG4tYnJlYWRjcnVtYiA+ICo6bnRoLWxhc3QtY2hpbGQoLW4rNikge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9IFxuICAgICAgLmJ0bi1icmVhZGNydW1iID4gKiBkaXYge1xuICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICB9XG4gIH1cbiAgI3BhZ2Utd3JhcHBlciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDEzMHB4IDI1cHggMTMwcHggMjVweDtcbiAgIGJhY2tncm91bmQ6ICMwRjBGMEY7XG59XG4gXG4gLyogd2FyZWhvdXNlIGRldGFpbHMgY3NzIHN0YXJ0ICAqL1xuLnBhbmVsLWJvZHkgdWwuYWxsLWRldGFpbHN7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGRpc3BsYXk6IHRhYmxlO1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhbmVsLWJvZHkgdWwuYWxsLWRldGFpbHMgbGl7XG4gZGlzcGxheTogdGFibGUtY2VsbDtcbiB3aWR0aDogNTAlO1xuXG5cbn1cbi5wYW5lbC1ib2R5IHVsLmFsbC1kZXRhaWxzIGxpIHsgLypjaGFuZ2VzLTIzLzA4LzE3Ki9cbiAgIG1heC13aWR0aDogMTAwcHg7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucGFuZWwtYm9keS5kZXRhaWxze1xuICAgbWluLWhlaWdodDogMjkxcHg7XG4gICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiB9XG4gZGwsIG9sLCBwLCB1bCB7XG4gICBtYXJnaW4tdG9wOiAwO1xuICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5kbFtfbmdjb250ZW50LWMxMF0sIG9sW19uZ2NvbnRlbnQtYzEwXSwgdWxbX25nY29udGVudC1jMTBdIHtcbiAgIG1hcmdpbi10b3A6IDFweDtcbiAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4gLyogQ3VzdG9tZXIgZGV0YWlscyBjc3MgZW5kICAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/wh-metering/wh-metering.component.html":
/*!********************************************************!*\
  !*** ./src/app/wh-metering/wh-metering.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"breadcrumb\" style=\"margin-right:15px !important;\">\n    <div class=\"col-md-8 col-sm-12\">\n        <div class=\"row\" style=\"margin-left:2px !important\">\n            <div id=\"bc2\" style=\"left: 1% !important;\" class=\"btn-group btn-breadcrumb\">\n                <a (click)=\"home()\" *ngIf=\"super_admin_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n                <a (click)=\"home()\" *ngIf=\"customer_home\" class=\"btn btn-default\"><i class=\"fa fa-home\"></i></a>\n                <a (click)=\"customerPage()\" *ngIf=\"customer_name\" class=\"btn btn-default\">\n                    <div>Customer Page</div>\n                </a>\n                <a (click)=\"sitePage()\" *ngIf=\"site_dash\" class=\"btn btn-default\">Site Page</a>\n                 \n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n        <button class=\"btn btn-float btn-primary\" style=\"margin-right: 35px !important;\">\n            <span class=\"ng-scope\" (click)=\"openSiteDashboard()\">Select Site</span>\n        </button>\n    </div>\n\n</div>\n<!-- <div class=\"container no-margin \"> -->\n<div id=\"page-wrapper\" class=\"container-fluid\">\n    <!-- dashboard content -->\n    <div *ngIf=\"isShown\">\n        <div class=\"row\" *ngIf=\"!pf_visible\">\n            <div class=\"dashboard_trakcer\">Live Data</div>\n            <hr>\n\n            <!-- 1st snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <!-- <i class=\"fa fa-bell fa-fw fa-3x\"></i> -->\n                        <img id=\"img-ctn\" src=\"/assets/image/consume.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Mains or DG</div>\n\n                        <div class=\"box-number text-faded\">{{ liveData.supply_source }}</div>\n                        <!-- <div class=\"box-number text-faded\">{{ supply_source}}</div> -->\n\n                        <!--<a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 1st snapshot end -->\n\n\n            <!-- 2nd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <i class=\"fa fa-bolt fa-3x\"></i>\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous Voltage</div>\n                        <div class=\"box-heading text-faded\">\n                            <small>\n                                <span style=\"color: red\">R Phase :</span> {{liveData.r_volt}}<br>\n                                <span style=\"color: yellow\">Y Phase :</span> {{liveData.y_volt}}<br>\n                                <span style=\"color: skyblue\">B Phase :</span> {{liveData.b_volt}}<br>\n                            </small>\n                        </div>\n\n                        <!--  <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 2nd snapshot end -->\n\n            <!-- 3rd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous Load</div>\n\n                        <div class=\"box-number text-faded\">{{liveData.totalLoad}} KW</div>\n\n                        <!-- <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n            </div>\n            <!-- 3rd snapshot end -->\n\n            <!-- 4th snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous Current</div>\n                        <div class=\"box-heading text-faded\">\n                            <small>\n                                <span style=\"color: red\">R Phase :</span> {{liveData.r_current}} Amp<br>\n                                <span style=\"color: yellow\">Y Phase :</span> {{liveData.y_current}} Amp<br>\n                                <span style=\"color: skyblue\">B Phase :</span> {{liveData.b_current}} Amp\n                            </small>\n                        </div>\n\n                        <!--  <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\" *ngIf=\"pf_visible\">\n            <div class=\"dashboard_trakcer\">Live Data</div>\n            <hr>\n\n            <!-- 1st snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <!-- <i class=\"fa fa-bell fa-fw fa-3x\"></i> -->\n                        <img id=\"img-ctn\" src=\"assets/image/consume.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Mains or DG</div>\n\n                        <div class=\"box-number text-faded\">{{ liveData.supply_source }}</div>\n                        <!-- <div class=\"box-number text-faded\">{{ supply_source}}</div> -->\n\n                        <!--<a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 1st snapshot end -->\n\n\n            <!-- 2nd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <i class=\"fa fa-bolt fa-3x\"></i>\n                    </div>\n                    <div class=\"box2\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous Volt/Current</div>\n                        <div class=\"box-heading text-faded\">\n                            <small>\n                                <span style=\"color: red\">R Phase :</span> {{liveData.r_volt}} V / {{liveData.r_current}}\n                                amp <br>\n                                <span style=\"color: yellow\">Y Phase :</span> {{liveData.y_volt}} V /\n                                {{liveData.y_current}} amp<br>\n                                <span style=\"color: skyblue\">B Phase :</span> {{liveData.b_volt}} V /\n                                {{liveData.b_current}} amp <br>\n                            </small>\n                        </div>\n\n                        <!--  <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n\n            </div>\n\n\n            <!-- 2nd snapshot end -->\n\n            <!-- 3rd snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/energy.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\" style=\"cursor: pointer;\" (click)=\"loadDetails()\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous Load</div>\n\n                        <div class=\"box-number1 text-faded\">\n                            <small>\n                                <span style=\"color: #ff7a01;\">CURRENT LOAD :</span> {{liveData.totalLoad}} KW<br>\n                                <span style=\"color: red\">MAXIMUM LOAD :</span> {{liveData.max_load}} KW <br>\n                                <span style=\"color: #37d837\">MINIMUM LOAD :</span> {{liveData.min_load}} KW\n                            </small>\n                        </div>\n\n\n                        <!-- <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n            </div>\n            <!-- 3rd snapshot end -->\n\n            <!-- 4th snapshot start -->\n            <div class=\"col-lg-3 col-sm-6 col-xs-6\">\n                <div class=\"circle-title2\">\n                    <div class=\"circle-title-heading\">\n                        <img id=\"img-ctn\" src=\"/assets/image/low.png\" width=\"45\">\n                    </div>\n                    <div class=\"box2\" style=\"cursor: pointer;\" (click)=\"pf_details()\">\n                        <div class=\"box-heading text-faded\" style=\"font-weight: 700;\">Instantaneous PF</div>\n                        <div class=\"box-heading text-faded\">\n                            <small>\n                                <span style=\"color: red\">R Phase :</span> {{liveData.r_pf}} <br>\n                                <span style=\"color: yellow\">Y Phase :</span> {{liveData.y_pf}} <br>\n                                <span style=\"color: skyblue\">B Phase :</span> {{liveData.b_pf}} <br>\n                            </small>\n                        </div>\n\n                        <!--  <a du-smooth-scroll=\"table\" du-scrollspy class=\"footer\">More Info<i\n                                class=\"fa fa-chevron-circle-right\"></i></a> -->\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <!--power-status and customer power-status start-->\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"panel-heading\">\n                    <i class=\"fa fa-bar-chart-o\"></i> Monthly Power Source Distribution\n                    <div class=\"col-md-3 \">\n                    </div>\n                </div>\n                <div class=\"status-panel-body\" style=\"height:291px\">\n                    <highcharts-chart [Highcharts]=\"pieChart\" [constructorType]=\"chartConstructor\"\n                        [options]=\"pieChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\">\n                    </highcharts-chart>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 col-sm-12\">\n\n\n                <div class=\"panel-heading\">\n                    <i class=\"fa fa-bar-chart-o\"></i> Site Details\n                </div>\n                <div class=\"panel-body details\">\n                    <ul class=\"all-details\">\n                        <li>\n                            <p>Site ID : </p>\n                        </li>\n                        <li>{{ siteDetails.site_id  }}</li>\n                    </ul>\n                    <ul class=\"all-details\">\n                        <li>\n                            <p>Site Name : </p>\n                        </li>\n                        <li> {{siteDetails.site_name }}</li>\n                    </ul>\n\n                    <ul class=\"all-details\">\n                        <li>\n                            <p>Address : </p>\n                        </li>\n                        <li> {{ siteDetails.site_addr }}</li>\n                    </ul>\n                    <ul class=\"all-details\">\n                        <li>\n                            <p>Site Type : </p>\n                        </li>\n                        <li> {{siteDetails.site_type }} </li>\n                    </ul>\n                    <ul class=\"all-details\">\n                        <li>\n                            <p>Site Manager : </p>\n                        </li>\n                        <li> {{ siteDetails.site_mgr_name }} </li>\n                    </ul>\n                    <ul class=\"all-details\">\n                        <li>\n                            <p> Site Manager Email : </p>\n                        </li>\n                        <li>{{ siteDetails.site_mgr_email }}</li>\n                    </ul>\n                    <ul class=\"all-details\">\n                        <li>\n                            <p> Site Manager Contact : </p>\n                        </li>\n                        <li> {{ siteDetails.site_mgr_mob}}</li>\n                    </ul>\n                </div>\n\n\n\n            </div>\n        </div>\n\n        <br>\n        <!--chart start-->\n        <div class=\"row\">\n            <!-- fuel consumption graph-->\n            <div class=\"col-sm-12 \" *ngIf=\"showFuelGraph\">\n                <div class=\"heading-panel\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8\" style=\"margin-top: 20px;\">\n                            DG Fuel Consumption Graph\n                        </div>\n                        <div class=\"col-md-2\">\n                            <mat-form-field appearance=\"outline\">\n                                <input matInput [max]=\"maxDate\" [min]=\"dgfuelMinDate\" [matDatepicker]=\"picker2\"\n                                    [formControl]=\"dgFuelDate\" [value]=\"dgFuelDate.value\"\n                                    (dateChange)=\"dgFuelConsumptionGraphSelectionChange()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker2></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <button id=\"button2\" type=\"button\" style=\"cursor: pointer;\"\n                                (click)=\"customRangePopup()\">Custom Range</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chart-body\" *ngIf=\"dgFuelData\">\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"stockChart\"\n                        [options]=\"dgFuelConsumptionOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\">\n\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportDgFuelExcelData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"chart-body\" *ngIf=\"dgFuelDataSelectionChange\">\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"stockChart\"\n                        [options]=\"dgFuelConsumptionSelectionOptions\" [callbackFunction]=\"chartCallback\"\n                        [(update)]=\"updateFlag\" [oneToOne]=\"oneToOneFlag\"\n                        style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\">\n\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportDgFuelExcelData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"col-sm-12 \" *ngIf=\"chartLoading\">\n                <!-- <div class=\"col-md-12 col-sm-12\"> -->\n                <div class=\"heading-panel\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8\" style=\"margin-top: 20px;\">\n                            <i class=\"fa fa-bar-chart-o\"></i>Total load-graph\n                        </div>\n                        <div class=\"col-md-2\">\n                            <mat-form-field appearance=\"outline\">\n                                <input matInput [max]=\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\"\n                                    [formControl]=\"loadDate\" [value]=\"loadDate.value\"\n                                    (dateChange)=\"loadGraphFilterChanged()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"showLoadIntervalOptions; then thenTemplate else elseTemplate\"></div>\n                        <ng-template #thenTemplate>\n                            <div class=\"col-md-2\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-select [(value)]=\"selected_load_options\"\n                                        (selectionChange)=\"loadGraphFilterChanged()\">\n                                        <mat-option *ngFor=\"let interval of loadGraphintervals\"\n                                            [value]=\"interval.value\">\n                                            {{interval.viewValue}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </ng-template>\n                        <ng-template #elseTemplate>\n                            <div class=\"col-md-2\"></div>\n                        </ng-template>\n\n                    </div>\n\n                    <!-- <i class=\"fa fa-bar-chart-o\"></i> Trend Overview -->\n                </div>\n\n                <div class=\"chart-body\" *ngIf=\"loadGraph\">\n\n                    <highcharts-chart #loadChart [Highcharts]=\"Highcharts\" [constructorType]=\"stockChart\"\n                        [options]=\"lineChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag \"\n                        [oneToOne]=\"true\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\">\n\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportLoadData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"chart-body\" *ngIf=\"seprateManinsDgLoad\">\n\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"stockChart\"\n                        [options]=\"seprateManinsDgLoadChartOptions\" [callbackFunction]=\"chartCallback\"\n                        [(update)]=\"updateLoadDataFlag\" [oneToOne]=\"true\"\n                        style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\">\n\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportLoadData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <!-- </div>                -->\n            </div>\n            <div class=\"col-sm-12\" *ngIf=\"showFuelGraph\">\n                <div>\n                    <div class=\"heading-panel\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <i class=\"fa fa-bar-chart-o\"></i>Monthly Trend Overview\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <div class=\"chart-body\">\n\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"lineChartOption\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                </div>\n\n            </div>\n\n\n\n            <div class=\"col-sm-12 \">\n                <div class=\"heading-panel\">\n\n                    <div class=\"row\">\n                        <div class=\"col-md-7\">\n                            <i class=\"fa fa-bar-chart-o\"></i>Total <mat-form-field\n                                style=\"max-width: 34%; font-size: 16px\">\n                                <mat-select [(value)]=\"selected_graph\" #energyValue\n                                    (selectionChange)=\"columnGraphFilterChanged($event)\">\n                                    <mat-option *ngFor=\"let graphType of graphTypes\" [value]=\"graphType.value\">\n                                        {{graphType.viewValue}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field appearance=\"outline\">\n                                <input matInput [max]=\"maxDate\" [min]=\"minDate\" [matDatepicker]=\"picker1\"\n                                    [formControl]=\"date\" [value]=\"date.value\" (dateChange)=\"columnGraphFilterChanged()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"showIntervalOptions; then thenTemplate else elseTemplate\"></div>\n                        <ng-template #thenTemplate>\n                            <div class=\"col-md-2\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-select [(value)]=\"selected_task\"\n                                        (selectionChange)=\"columnGraphFilterChanged()\">\n                                        <mat-option *ngFor=\"let interval of intervals\" [value]=\"interval.value\">\n                                            {{interval.viewValue}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </ng-template>\n                        <ng-template #elseTemplate>\n                            <div class=\"col-md-2\"></div>\n                        </ng-template>\n\n\n\n                    </div>\n                </div>\n                <div class=\"chart-body\" *ngIf=\"unitConsumptionGraph\">\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"barChartOptions\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\"><button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\"\n                                style=\"float: right;\" (click)=\"changeGraphStacking()\">\n                                <span class=\"ng-scope\">Change Graph</span>\n                            </button>\n\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportExcelData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"chart-body\" *ngIf=\"runTimeGraph\">\n                    <highcharts-chart [Highcharts]=\"Highcharts\" [constructorType]=\"chartConstructor\"\n                        [options]=\"barChartOptionsRunTime\" [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\"\n                        [oneToOne]=\"oneToOneFlag\" style=\"width: 100%; height: 100%; display: block;\"></highcharts-chart>\n                    <div class=\"row\">\n                        <div class=\"col-8\"></div>\n                        <div class=\"col-4\">\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" type=\"button\"\n                                style=\"float: right;\" (click)=\"changeGraphStackingRunTime()\">\n                                <span class=\"ng-scope\">Change Graph</span>\n                            </button>\n                            <button class=\"md-raised md-primary md-button md-link-ripple\" id=\"exceldata\" type=\"button\"\n                                style=\"float: right;\" (click)=\"exportExcelData()\">\n                                <span class=\"ng-scope\">Export Excel</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/wh-metering/wh-metering.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wh-metering/wh-metering.component.ts ***!
  \******************************************************/
/*! exports provided: WhMeteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhMeteringComponent", function() { return WhMeteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_siteDataModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/siteDataModel */ "./src/app/models/siteDataModel.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_changepassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/changepassword */ "./src/app/models/changepassword.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/dashboard-data.service */ "./src/app/services/dashboard-data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-switchdash/dialog-switchdash.component */ "./src/app/dialog-switchdash/dialog-switchdash.component.ts");
/* harmony import */ var _excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../excelsheet/excelsheet.component */ "./src/app/excelsheet/excelsheet.component.ts");
/* harmony import */ var _pf_table_pf_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pf-table/pf-table.component */ "./src/app/pf-table/pf-table.component.ts");
/* harmony import */ var _load_data_table_load_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../load-data-table/load-data-table.component */ "./src/app/load-data-table/load-data-table.component.ts");
/* harmony import */ var _custom_date_range_picker_custom_date_range_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../custom-date-range-picker/custom-date-range-picker.component */ "./src/app/custom-date-range-picker/custom-date-range-picker.component.ts");
/* harmony import */ var _dg_fuel_excel_export_dg_fuel_excel_export_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dg-fuel-excel-export/dg-fuel-excel-export.component */ "./src/app/dg-fuel-excel-export/dg-fuel-excel-export.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);

//import { PieGraphComponent } from './../pie-graph/pie-graph.component';


// import { DataTableItem, DataTableDataSource } from '../super-admin/data-table-datasource';


// import { LoginComponent } from './../login/login.component';



//import {MatPaginator} from '@angular/material';
// import { MatSort } from '@angular/material/sort';






// import * as solidGauge from 'highcharts/modules/solid-gauge.src';


// import { LightsWattDataComponent } from '../lights-watt-data/lights-watt-data.component';




var WhMeteringComponent = /** @class */ (function () {
    //@ViewChild(MatPaginator) paginator: MatPaginator;
    function WhMeteringComponent(dashData, UserService, DataService, user_service, router, dialog) {
        this.dashData = dashData;
        this.UserService = UserService;
        this.DataService = DataService;
        this.user_service = user_service;
        this.router = router;
        this.dialog = dialog;
        this.myObj = JSON.parse(localStorage.getItem("account"));
        this.siteId = localStorage.getItem('siteId');
        this.user_id = this.myObj["id"];
        this.user_type = this.myObj["UserType"];
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.dgfuelMinDate = new Date(2023, 3, 6);
        this.supply_source = "";
        this.selected_load_options = "0";
        this.loadGraphintervals = [
            { value: '0', viewValue: 'DateWise' },
            { value: '1', viewValue: 'Daily' },
            { value: '2', viewValue: 'Monthly' },
            { value: '3', viewValue: 'Mains &DG' },
            { value: '4', viewValue: 'Live Data' },
        ];
        this.intervals = [
            { value: '0', viewValue: 'Daily' },
            { value: '1', viewValue: 'Hourly' }
        ];
        this.graphTypes = [
            { value: '0', viewValue: 'Energy Consumption' },
            { value: '1', viewValue: 'Mains/DG Run Percentage(Unit)' }
        ];
        this.selected_graph = '0';
        this.selected_task = '0';
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](new Date());
        this.loadDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](new Date());
        this.dgFuelDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]((new Date()).toISOString().substring(0, 10));
        this.whichGraph = 1;
        this.loadGraph = true;
        this.seprateManinsDgLoad = false;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        //displayedColumns = ['id', 'name'];
        this.isCollapsed = true;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.token = localStorage.getItem('token');
        this.isShown = false;
        this.liveData = new _models_siteDataModel__WEBPACK_IMPORTED_MODULE_1__["LiveMeteringDataModel"]();
        this.loading = true;
        this.updateFlag = false;
        this.updateLoadDataFlag = false;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.pieChart = highcharts__WEBPACK_IMPORTED_MODULE_7__;
        this.chartConstructor = 'chart';
        this.chartCallback = function () { };
        this.oneToOneFlag = true;
        this.unitConsumptionGraph = true;
        this.runTimeGraph = false;
        this.changePasswordModel = new _models_changepassword__WEBPACK_IMPORTED_MODULE_3__["changePassword"](this.token, '', '');
        this.siteDetails = new _models_siteDataModel__WEBPACK_IMPORTED_MODULE_1__["SiteDetailsModel"]();
        this.dgFuelData = false;
        this.dgFuelDataSelectionChange = false;
        this.showFuelGraph = false;
        this.site_dash = false;
        this.customer_home = false;
        this.super_admin_home = false;
        this.customer_name = false;
        this.Admindata = false;
        this.baselineVisibility = false;
        this.showIntervalOptions = false;
        this.showLoadIntervalOptions = false;
        // pf_visible: boolean = false;
        this.pf_visible = localStorage.getItem('pf_visible');
        this.is_load_graph_visible = localStorage.getItem("is_load_graph_visible");
        this.dg_fuel_system_installed = localStorage.getItem("dg_fuel_system_installed");
        this.customer_visible_dg_fuel_data = localStorage.getItem("customer_visible_dg_fuel_data");
        this.is_hourly_data_visible = localStorage.getItem("is_hourly_data_visible");
        this.liveLoadApiCal = false;
        // Highcharts = Highcharts;
        this.chartLoading = false;
        this.show_dg_mains_run_time = localStorage.getItem('show_dg_mains_run_time');
        if (this.show_dg_mains_run_time == "true") {
            this.graphTypes = [
                { value: '0', viewValue: 'Energy Consumption' },
                { value: '1', viewValue: 'Mains/DG Run Percentage(Unit)' },
                { value: '2', viewValue: 'Mains/DG Run Percentage(Time)' }
            ];
        }
    }
    // highCharts = HighCharts;
    WhMeteringComponent.prototype.applySelectFilter = function (event) {
        //alert(event.value);
        //data = event.value;
    };
    // normalize series data to ensure numeric points and consistent shapes
    WhMeteringComponent.prototype.normalizeSeries = function (inputSeries) {
        if (!inputSeries)
            return [];
        return inputSeries.map(function (s) {
            if (s && Array.isArray(s.data)) {
                s.data = s.data.map(function (pt) {
                    if (Array.isArray(pt))
                        return [Number(pt[0]), Number(pt[1])];
                    if (pt && pt.x !== undefined)
                        return [Number(pt.x), Number(pt.y)];
                    return pt;
                });
                return s;
            }
            if (s && s.data) {
                s.data = (s.data || []).map(function (pt) {
                    if (Array.isArray(pt))
                        return [Number(pt[0]), Number(pt[1])];
                    if (pt && pt.x !== undefined)
                        return [Number(pt.x), Number(pt.y)];
                    return pt;
                });
                return s;
            }
            return s;
        });
    };
    /*ngOnInit() {
        if (this.pf_visible == "true"){
            this.pf_visible = true;
        }else{
            this.pf_visible = false
        }
        //here is implementation of breadceumb...
        if (this.user_type == '1') {
            this.super_admin_home = true
            this.customer_home = false
            this.customer_name = true //false
            this.site_dash = true
            this.Admindata = true
            this.showIntervalOptions = true
            this.showLoadIntervalOptions = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.super_admin_home = false
            this.customer_home = true
            this.customer_name = false
            this.site_dash = true
            this.Admindata = false
            this.showLoadIntervalOptions = true;
            if(this.is_hourly_data_visible == 'true'){
                this.showIntervalOptions = true
            }else{
                this.showIntervalOptions = false;
            }
            
        }
        else {
            this.super_admin_home = false
            this.customer_home = true
            this.customer_name = false
            this.site_dash = true
            this.Admindata = false
        }

        
        /**
         * These functions need to be called whenever the page is loaded
         
        // Get Site Details
        this.getSiteDetails();
        // Live data to be fetched every 5 sec
        this.getSiteCurrLoadInfoData();
        this.dgFuelMonthlyTrend();


        // Get Power source distribution data
        this.getPowerSourceDistData();
        // Highcharts.chart('chartcontainer',this.barChartOptions);
        this.isShown = true;
        console.log("is_load_graph_visible: ", this.is_load_graph_visible)
        console.log("is pf visible: ", this.pf_visible)
        if(this.is_load_graph_visible == "true"){
            this.load_graph(); // this function will call for particular customer and site
        }
        console.log("show fuel data: ", this.dg_fuel_system_installed)
        if(this.dg_fuel_system_installed == 'true'){
            console.log("#########################", this.customer_visible_dg_fuel_data)
            if (this.user_type == '1'){
                this.showFuelGraph=true
                this.dgFuelConsumptionGraph()
            }
            else if(this.customer_visible_dg_fuel_data == 'true'){
                this.showFuelGraph=true
                this.dgFuelConsumptionGraph()
            }
            
        }
        


        // Consumption Graph data
        this.getConsumptionData();

        //  if( this.updateFlag=true){
        //    this.getConsumptionData();
        //  }

        
        

    }*/
    WhMeteringComponent.prototype.ngOnInit = function () {
        var _this = this;
        var accountStr = localStorage.getItem("account");
        if (accountStr) {
            this.myObj = JSON.parse(accountStr);
            this.user_id = this.myObj["id"];
            this.user_type = this.myObj["UserType"];
        }
        else {
            console.error("Account info missing — redirecting to login");
            this.router.navigate(['/login']);
        }
        // this.fetchDGCountFromAPI();
        // this.fetchDGOptions(this.siteIds);
        // console.log(this.fetchDGOptions(this.siteIds));
        if (this.pf_visible == "true") {
            this.pf_visible = true;
        }
        else {
            this.pf_visible = false;
        }
        //here is implementation of breadceumb...
        if (this.user_type == '1') {
            this.super_admin_home = true;
            this.customer_home = false;
            this.customer_name = true; //false
            this.site_dash = true;
            this.Admindata = true;
            this.showIntervalOptions = true;
            this.showLoadIntervalOptions = true;
        }
        else if (this.user_type == '4' || this.user_type == '5') {
            this.super_admin_home = false;
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = true;
            this.Admindata = false;
            this.showLoadIntervalOptions = true;
            if (this.is_hourly_data_visible == 'true') {
                this.showIntervalOptions = true;
            }
            else {
                this.showIntervalOptions = false;
            }
        }
        else {
            this.super_admin_home = false;
            this.customer_home = true;
            this.customer_name = false;
            this.site_dash = true;
            this.Admindata = false;
        }
        /**
         * These functions need to be called whenever the page is loaded
         */
        // Get Site Details
        this.getSiteDetails();
        // Live data to be fetched every 5 sec
        // this.getDGInfo();
        this.getSiteCurrLoadInfoData();
        this.dgFuelMonthlyTrend();
        // Get Power source distribution data
        this.getPowerSourceDistData();
        // Highcharts.chart('chartcontainer',this.barChartOptions);
        this.isShown = true;
        console.log("is_load_graph_visible: ", this.is_load_graph_visible);
        console.log("is pf visible: ", this.pf_visible);
        // Set defaults
        this.selected_load_options = "0"; // datewise
        this.loadDate.setValue(new Date());
        // Wait until view is initialized so chart exists
        setTimeout(function () {
            _this.loadGraphFilterChanged();
        }, 0);
        if (this.is_load_graph_visible == "true") {
            this.load_graph(jquery__WEBPACK_IMPORTED_MODULE_19__["data"]); // this function will call for particular customer and site
        }
        console.log("show fuel data: ", this.dg_fuel_system_installed);
        if (this.dg_fuel_system_installed == 'true') {
            console.log("#########################", this.customer_visible_dg_fuel_data);
            if (this.user_type == '1') {
                this.showFuelGraph = true;
                this.dgFuelConsumptionGraph();
            }
            else if (this.customer_visible_dg_fuel_data == 'true') {
                this.showFuelGraph = true;
                this.dgFuelConsumptionGraph();
            }
        }
        // Consumption Graph data
        this.getConsumptionData();
    };
    WhMeteringComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(15000).subscribe(function (response) {
            if (_this.selected_load_options == "4" && _this.liveLoadApiCal) {
                _this.load_data_every_second();
            }
        });
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(5000).subscribe(function (response) {
            _this.getSiteCurrLoadInfoData();
        });
    };
    WhMeteringComponent.prototype.dgFuelConsumptionGraph = function () {
        var _this = this;
        var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.dgFuelDate.value, 'yyyy/MM/dd', 'en');
        var reqData = { "site_id": this.siteId, "date": todayDate, "user_type": this.user_type };
        this.dgFuelDataSelectionChange = false;
        this.dgFuelData = true;
        this.DataService.dgFuelConsumptionData(reqData).subscribe(function (res) {
            var dataSeries = res["data"];
            var refuelSeries = res["refuel_alert"];
            refuelSeries["dataLabels"] = { "enabled": true };
            var theftSeries = res["theft_alert"];
            theftSeries["dataLabels"] = { "enabled": true };
            var dgFuelConsumed = res["dg_fuel_data"];
            dgFuelConsumed["dataLabels"] = { "enabled": true };
            var dgUnitPerLtr = res["dg_unit_per_litre_data"];
            dgUnitPerLtr["dataLabels"] = { "enabled": true };
            var dgConsumptionDataSeries = res["dg_unit_data"];
            dgConsumptionDataSeries["yAxis"] = 1;
            dgConsumptionDataSeries["dataLabels"] = { "enabled": true };
            console.log("dgConsumptionDataSeries", dgConsumptionDataSeries);
            // console.log("api data: ", dataSeries)
            _this.chartLoading = true;
            _this.dgFuelConsumptionOptions = {
                colorCount: '5',
                colors: ['#90ED7D', '#7cb5ec', '#ff0000', '#ff7a01', '#800080', '#00008B'],
                chart: {
                    // type:"spline",
                    backgroundColor: "#222222",
                    scrollablePlotArea: {
                        minWidth: 300,
                        scrollPositionX: 1
                    },
                    zoomType: "x",
                },
                navigator: {
                    enabled: true
                },
                scrollbar: {
                    enabled: true
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%d %b %Y' //ex- 01 Jan 2016
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                    labels: {
                        style: { color: 'white', },
                        rotation: -45,
                        //Specify the formatting of xAxis labels:
                        format: '{value:%Y-%m-%d %H:%M}',
                    }
                },
                yAxis: [{
                        labels: {
                            // format: '{value} units',
                            style: {
                                color: 'white'
                            }
                        },
                        title: {
                            text: 'Fuel Level (in Litres)',
                            style: {
                                color: 'white'
                            }
                        },
                        opposite: false,
                    },
                    {
                        gridLineWidth: 0,
                        title: {
                            text: 'Unit Consumed In KWH',
                            style: {
                                color: 'white'
                            }
                        },
                        labels: {
                            format: '{value} KWH',
                            style: {
                                color: 'white'
                            }
                        },
                        opposite: true,
                        min: 0,
                        max: 600,
                        tickInterval: 100,
                    }
                ],
                time: {
                    useUTC: false
                },
                title: {
                    text: 'DG Fuel and Unit Trend',
                    style: {
                        color: 'white',
                    },
                },
                plotOptions: {
                    series: {
                        turboThreshold: 0,
                        pointWidth: 15
                    }
                },
                series: [{
                        type: "areaspline",
                        name: 'Fuel Level',
                        data: dataSeries,
                        fillColor: new highcharts__WEBPACK_IMPORTED_MODULE_7__["Color"]('#808080').setOpacity(0.66).get(),
                    }, refuelSeries, theftSeries, dgConsumptionDataSeries, dgFuelConsumed, dgUnitPerLtr
                ]
            };
            // make sure the chart updates after options are assigned
            _this.updateFlag = true;
        });
    };
    WhMeteringComponent.prototype.dgFuelConsumptionGraphSelectionChange = function () {
        var _this = this;
        var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.dgFuelDate.value, 'yyyy/MM/dd', 'en');
        var reqData = { "site_id": this.siteId, "date": todayDate, "user_type": this.user_type };
        this.dgFuelData = false;
        this.dgFuelDataSelectionChange = true;
        this.DataService.dgFuelConsumptionData(reqData).subscribe(function (res) {
            var dataSeries = res["data"];
            // dataSeries["dataLabels"] = {"enabled": true}
            var refuelSeries = res["refuel_alert"];
            refuelSeries["dataLabels"] = { "enabled": true };
            var theftSeries = res["theft_alert"];
            theftSeries["dataLabels"] = { "enabled": true };
            var dgFuelConsumed = res["dg_fuel_data"];
            dgFuelConsumed["dataLabels"] = { "enabled": true };
            var dgUnitPerLtr = res["dg_unit_per_litre_data"];
            dgUnitPerLtr["dataLabels"] = { "enabled": true };
            var dgConsumptionDataSeries = res["dg_unit_data"];
            dgConsumptionDataSeries["yAxis"] = 1;
            dgConsumptionDataSeries["dataLabels"] = { "enabled": true };
            console.log("################## ", dataSeries[0]['x']);
            var alertData = res["alert_data"];
            console.log("api data: ", dataSeries);
            _this.chartLoading = true;
            _this.dgFuelConsumptionSelectionOptions = {
                colorCount: '5',
                colors: ['#90ED7D', '#7cb5ec', '#ff0000', '#ff7a01', '#800080', '#00008B'],
                chart: {
                    type: "spline",
                    backgroundColor: "#222222",
                    scrollablePlotArea: {
                        minWidth: 300,
                        scrollPositionX: 1
                    },
                    zoomType: "x",
                },
                navigator: {
                    enabled: true
                },
                scrollbar: {
                    enabled: true
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%d %b %Y' //ex- 01 Jan 2016
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                    labels: {
                        style: { color: 'white', },
                        rotation: -45,
                        //Specify the formatting of xAxis labels:
                        format: '{value:%Y-%m-%d %H:%M}',
                    }
                },
                yAxis: [{
                        labels: {
                            // format: '{value} units',
                            style: {
                                color: 'white'
                            }
                        },
                        title: {
                            text: 'Fuel Level (in Litres)',
                            style: {
                                color: 'white'
                            }
                        },
                        opposite: false,
                    },
                    {
                        gridLineWidth: 0,
                        title: {
                            text: 'Unit Consumed In KWH',
                            style: {
                                color: 'white'
                            }
                        },
                        labels: {
                            format: '{value} KWH',
                            style: {
                                color: 'white'
                            }
                        },
                        opposite: true,
                        min: 0,
                        max: 600,
                        tickInterval: 100,
                    },
                ],
                time: {
                    useUTC: false
                },
                title: {
                    text: 'DG Fuel and Unit Trend',
                    style: {
                        color: 'white',
                    },
                },
                plotOptions: {
                    series: {
                        turboThreshold: 0,
                        pointWidth: 15
                    }
                },
                series: [{
                        type: "areaspline",
                        name: 'Fuel Level',
                        data: dataSeries,
                        fillColor: new highcharts__WEBPACK_IMPORTED_MODULE_7__["Color"]('#808080').setOpacity(0.66).get(),
                    }, refuelSeries, theftSeries, dgConsumptionDataSeries, dgFuelConsumed, dgUnitPerLtr
                ]
            };
        });
    };
    WhMeteringComponent.prototype.verifySession = function () {
        var _this = this;
        this.infoToken = { "token": localStorage.getItem("token") };
        this.user_service.validateToken(this.infoToken).subscribe(function (response) {
            _this.sessionVerify = response['result'];
            if (_this.sessionVerify == 'true') {
                console.log(_this.sessionVerify + 'Session verified');
            }
            else {
                // localStorage.removeItem('token');
                localStorage.clear();
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
            }
        });
    };
    WhMeteringComponent.prototype.open = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        this.dialog.open(_dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_13__["DialogSwitchdashComponent"], dialogConfig);
    };
    // load_data_every_second() {
    //     let epoch_time = localStorage.getItem("epoch_time");
    //     let data = { "site_id": this.siteId, "epoch_time": epoch_time }
    //     this.DataService.load_graph_every_sec(data).subscribe(
    //         res => {
    //             console.log("live load data every second api res: ", res);
    //             for (let i = 0; i <= res['data'].length - 1; i++) {
    //                 this.loadChart.chart.series[0].addPoint(res['data'][i], true, false)
    //             }
    //             localStorage.setItem("epoch_time", res["data"].splice(-1)[0].x)
    //         })
    // }
    // load_data_every_second() {
    //     const epoch_time = localStorage.getItem("epoch_time");
    //     if (!epoch_time) return;
    //     const req_data = { site_id: this.siteId, epoch_time: epoch_time };
    //     this.DataService.load_graph_every_sec(req_data).subscribe(res => {
    //         if (res && res["data"]) {
    //             console.log("live load data every second api res: ", res);
    //             const supplyNames = Object.keys(res["data"]);
    //             let latestEpoch = parseInt(epoch_time, 10);
    //             supplyNames.forEach((supply, index) => {
    //                 const points = res["data"][supply];
    //                 points.forEach((p: any) => {
    //                     const x = parseInt(p.epoch, 10);
    //                     // const y = p.load;
    //                     const y = parseFloat(p.load.toFixed(2));
    //                     if (!this.loadChart.chart.series[index]) {
    //                         this.loadChart.chart.addSeries(
    //                             { data: [], name: supply, type: "spline" },
    //                             false
    //                         );
    //                     }
    //                     this.loadChart.chart.series[index].addPoint([x, y], true, false);
    //                     if (x > latestEpoch) latestEpoch = x;
    //                 });
    //             });
    //             // update stored epoch
    //             localStorage.setItem("epoch_time", latestEpoch.toString());
    //         }
    //     });
    // }
    WhMeteringComponent.prototype.load_data_every_second = function () {
        var _this = this;
        var epoch_time = localStorage.getItem("epoch_time");
        if (!epoch_time)
            return;
        var req_data = { site_id: this.siteId, epoch_time: epoch_time };
        var fixedColors = ['#00FFFF', '#FF7F50', '#7CFC00']; // same fixed colors
        this.DataService.new_load_data_sec(req_data).subscribe(function (res) {
            if (res && res["data"]) {
                console.log("live load data every second api res: ", res);
                var supplyNames = Object.keys(res["data"]);
                var latestEpoch_1 = parseInt(epoch_time, 10);
                supplyNames.forEach(function (supply, index) {
                    var points = res["data"][supply];
                    points.forEach(function (p) {
                        var x = parseInt(p.epoch, 10);
                        var y = parseFloat(p.load.toFixed(2));
                        if (!_this.loadChart.chart.series[index]) {
                            _this.loadChart.chart.addSeries({
                                data: [],
                                name: supply,
                                type: "spline",
                                color: fixedColors[index % fixedColors.length] // 🔥 enforce color
                            }, false);
                        }
                        _this.loadChart.chart.series[index].addPoint([x, y], true, false);
                        if (x > latestEpoch_1)
                            latestEpoch_1 = x;
                    });
                });
                // update stored epoch
                localStorage.setItem("epoch_time", latestEpoch_1.toString());
            }
        });
    };
    // load_graph(data) {
    //     let req_data = data;
    //     this.DataService.hourly_load_graph(req_data).subscribe(res => {
    //         const apiData = (res && res["data"]) || [];
    //         const brightColors = ['#00FFFF', '#30d1b6', '#FFFF00', '#5d8fde', '#7CFC00'];
    //         const seriesData = apiData.map((item, idx) => {
    //             const name = Object.keys(item)[0];
    //             const values = item[name] || [];
    //             const transformed = values.flatMap(point => {
    //                 if (point.x !== undefined) {
    //                     // Normal reading
    //                     return [{ x: point.x, y: point.y }];
    //                 } else if (point.from !== undefined && point.to !== undefined) {
    //                     // Gap → insert 0 at start and end
    //                     return [
    //                         { x: point.from, y: 0 },
    //                         { x: point.to, y: 0 }
    //                     ];
    //                 }
    //                 return [];
    //             });
    //             return {
    //                 name: name,
    //                 data: transformed,
    //                 color: (values.length > 0 && values[0].color)
    //                     ? values[0].color
    //                     : brightColors[idx % brightColors.length],
    //                 type: 'spline',
    //                 step: 'left'
    //             };
    //         });
    //         this.chartLoading = true;
    //         this.lineChartOptions = {
    //             chart: {
    //                 type: "spline",
    //                 backgroundColor: '#222222',
    //                 scrollablePlotArea: { minWidth: 300, scrollPositionX: 1 },
    //                 zoomType: "x"
    //             },
    //             navigator: { enabled: true },
    //             scrollbar: { enabled: true },
    //             credits: { enabled: false },
    //             xAxis: {
    //                 type: 'datetime',
    //                 labels: {
    //                     style: { color: 'white' },
    //                     rotation: -45,
    //                     format: '{value:%Y-%m-%d %H:%M}'
    //                 }
    //             },
    //             yAxis: {
    //                 allowDecimals: false,
    //                 min: 0,
    //                 title: { text: 'Load Values (kW)', style: { color: 'white' } },
    //                 labels: { style: { color: 'white' } }
    //             },
    //             time: { useUTC: false },
    //             title: { text: 'Load data', style: { color: 'white' } },
    //             legend: { itemStyle: { color: 'white' } },
    //             plotOptions: { series: { turboThreshold: 0 } },
    //             series: seriesData
    //         };
    //     });
    // }
    WhMeteringComponent.prototype.load_graph = function (data) {
        var _this = this;
        var req_data = data;
        this.DataService.hourly_load_graph(req_data).subscribe(function (res) {
            var apiData = (res && res["data"]) || [];
            var brightColors = ['#00FFFF', '#30d1b6', '#FFFF00', '#5d8fde', '#7CFC00'];
            var seriesData = apiData.map(function (item, idx) {
                var name = Object.keys(item)[0];
                var values = item[name] || [];
                var transformed = values.flatMap(function (point) {
                    if (point.x !== undefined) {
                        // Normal reading
                        return [{ x: point.x, y: point.y }];
                    }
                    else if (point.from !== undefined && point.to !== undefined) {
                        // Gap → insert 0 at start and end
                        return [
                            { x: point.from, y: 0 },
                            { x: point.to, y: 0 }
                        ];
                    }
                    return [];
                });
                return {
                    name: name,
                    data: transformed,
                    color: brightColors[idx % brightColors.length],
                    type: 'spline',
                    step: 'left'
                };
            });
            _this.chartLoading = true;
            _this.lineChartOptions = {
                chart: {
                    type: "spline",
                    backgroundColor: '#222222',
                    scrollablePlotArea: { minWidth: 300, scrollPositionX: 1 },
                    zoomType: "x"
                },
                navigator: { enabled: true },
                scrollbar: { enabled: true },
                credits: { enabled: false },
                xAxis: {
                    type: 'datetime',
                    labels: {
                        style: { color: 'white' },
                        rotation: -45,
                        format: '{value:%Y-%m-%d %H:%M}'
                    }
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: { text: 'Load Values (kW)', style: { color: 'white' } },
                    labels: { style: { color: 'white' } }
                },
                time: { useUTC: false },
                title: { text: 'Load data', style: { color: 'white' } },
                legend: { itemStyle: { color: 'white' } },
                plotOptions: { series: { turboThreshold: 0 } },
                series: seriesData
            };
        });
    };
    WhMeteringComponent.prototype.loadGraphFilterChanged = function () {
        var _this = this;
        console.log("#######################", Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en'), this.selected_load_options);
        // Always clear all series before rendering new data
        if (this.loadChart && this.loadChart.chart && this.loadChart.chart.series) {
            while (this.loadChart.chart.series.length) {
                this.loadChart.chart.series[0].remove(false);
            }
            this.loadChart.chart.update({
                title: { text: 'Load data' },
                series: []
            }, false);
            this.loadChart.chart.redraw();
        }
        if (this.selected_load_options == "0") {
            this.loadGraph = true;
            this.liveLoadApiCal = false;
            this.seprateManinsDgLoad = false;
            var data_1 = { "site_id": this.siteId, 'date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en') };
            this.load_graph(data_1);
        }
        else if (this.selected_load_options == "1") {
            this.loadGraph = true;
            this.liveLoadApiCal = false;
            this.seprateManinsDgLoad = false;
            var data_2 = { "site_id": this.siteId, 'date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en') };
            this.DataService.daily_load_graph(data_2).subscribe(function (res) {
                if (res["data"].length > 0) {
                    _this.loadChart.chart.addSeries({ data: res["data"], name: 'Daily Load', type: 'spline' }, false);
                    _this.updateLoadDataFlag = true;
                }
                else {
                    var epoch_time = new Date(_this.loadDate.value).getTime();
                    _this.loadChart.chart.addSeries({ data: [[epoch_time, 0]], name: 'Daily Load', type: 'spline' }, false);
                    _this.updateLoadDataFlag = true;
                }
                _this.loadChart.chart.redraw();
            });
        }
        else if (this.selected_load_options == "2") {
            this.loadGraph = true;
            this.liveLoadApiCal = false;
            this.seprateManinsDgLoad = false;
            var data_3 = { "site_id": this.siteId, 'date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en') };
            this.DataService.daily_load_graph(data_3).subscribe(function (res) {
                if (res["data"].length > 0) {
                    _this.loadChart.chart.addSeries({ data: res["data"], name: 'Monthly Load', type: 'spline' }, false);
                    _this.updateLoadDataFlag = true;
                }
                else {
                    var epoch_time = new Date(_this.loadDate.value).getTime();
                    _this.loadChart.chart.addSeries({ data: [[epoch_time, 0]], name: 'Monthly Load', type: 'spline' }, false);
                    _this.updateLoadDataFlag = true;
                }
                _this.loadChart.chart.redraw();
            });
        }
        else if (this.selected_load_options == "3") {
            this.liveLoadApiCal = false;
            this.loadGraph = false;
            this.seprateManinsDgLoad = true;
            var data_4 = { "site_id": this.siteId, 'date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en') };
            this.DataService.mains_dg_daily_load_graph(data_4).subscribe(function (res) {
                if (res["data"].length > 0) {
                    _this.seprateManinsDgLoadChartOptions = {
                        colorCount: 12,
                        colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                        chart: {
                            type: "spline",
                            backgroundColor: '#222222',
                            scrollablePlotArea: {
                                minWidth: 300,
                                scrollPositionX: 1
                            },
                            zoomType: "x",
                        },
                        navigator: { enabled: true },
                        scrollbar: { enabled: true },
                        xAxis: {
                            type: 'datetime',
                            dateTimeLabelFormats: { day: '%d %b %Y' },
                            startOnTick: true,
                            endOnTick: true,
                            showLastLabel: true,
                            labels: {
                                style: { color: 'white' },
                                rotation: -45,
                                format: '{value:%Y-%m-%d %H:%M}',
                            }
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                style: { color: 'white', },
                                text: 'Load Values(in KW)'
                            },
                            stackLabels: {
                                enabled: true,
                                rotation: -90,
                                style: { color: "white" },
                                verticalAlign: "top",
                                y: -30,
                            },
                            labels: { style: { color: 'white' } }
                        },
                        time: { useUTC: false },
                        title: {
                            text: 'Load data',
                            style: { color: 'white', },
                        },
                        legend: { itemStyle: { color: 'white' } },
                        plotOptions: {
                            series: {
                                turboThreshold: 0
                            }
                        },
                        series: res["data"]
                    };
                }
                else {
                    var epoch_time = new Date(_this.loadDate.value).getTime();
                    _this.seprateManinsDgLoadChartOptions = {
                        series: [{ data: [[epoch_time, 0]], name: 'No Data', type: 'spline' }]
                    };
                    _this.updateLoadDataFlag = true;
                }
            });
        }
        // else if (this.selected_load_options == "4") {
        //     let req_data = { "site_id": this.siteId }
        //     this.loadGraph = true;
        //     this.seprateManinsDgLoad = false;
        //     this.liveLoadApiCal = true;
        //     this.DataService.load_live_graph(req_data).subscribe(
        //         res => {
        //             if (res["data"].length > 0) {
        //                 this.loadChart.chart.addSeries({ data: res["data"], name: 'Live Load', type: 'spline' }, false);
        //                 this.updateLoadDataFlag = true;
        //             } else {
        //                 let epoch_time = new Date(this.loadDate.value).getTime()
        //                 this.loadChart.chart.addSeries({ data: [[epoch_time, 0]], name: 'Live Load', type: 'spline' }, false);
        //                 this.updateLoadDataFlag = true;
        //             }
        //             this.loadChart.chart.redraw();
        //         }
        //     )
        // }
        else if (this.selected_load_options == "4") {
            // const currentEpoch = Date.now()*1000; // current epoch in ms
            var epoch_time = localStorage.getItem("epoch_time");
            var req_data = { site_id: this.siteId, epoch_time: epoch_time };
            this.loadGraph = true;
            this.seprateManinsDgLoad = false;
            this.liveLoadApiCal = true;
            this.chartLoading = true;
            // Force color set
            // Pastel blue/green shades
            var fixedColors_1 = ['#A8DADC', '#90CAF9', '#81C784'];
            if (this.loadChart && this.loadChart.chart) {
                while (this.loadChart.chart.series.length) {
                    this.loadChart.chart.series[0].remove(false);
                }
                this.loadChart.chart.redraw();
            }
            this.DataService.new_load_data_sec(req_data).subscribe(function (res) {
                if (res && res["data"]) {
                    console.log("live load data api res: 4 ", res);
                    var supplyNames = Object.keys(res["data"]);
                    supplyNames.forEach(function (supply, idx) {
                        var points = res["data"][supply].map(function (p) {
                            return [parseInt(p.epoch, 10), parseFloat(p.load.toFixed(2))];
                        });
                        _this.loadChart.chart.addSeries({
                            data: points,
                            name: supply,
                            type: "spline",
                            color: fixedColors_1[idx % fixedColors_1.length] // 🔥 enforce color
                        }, false);
                    });
                    _this.loadChart.chart.redraw();
                    _this.chartLoading = true;
                    // store the latest epoch
                    var latestEpoch_2 = 0;
                    supplyNames.forEach(function (supply) {
                        var arr = res["data"][supply];
                        if (arr.length > 0) {
                            var lastEpoch = parseInt(arr[arr.length - 1].epoch, 10);
                            if (lastEpoch > latestEpoch_2)
                                latestEpoch_2 = lastEpoch;
                        }
                    });
                    localStorage.setItem("epoch_time", latestEpoch_2.toString());
                }
            });
        }
    };
    WhMeteringComponent.prototype.getSiteDetails = function () {
        var _this = this;
        var data = { 'siteId': this.siteId };
        this.DataService.getSiteInfo(data).subscribe(function (response) {
            var siteDetails = response['site'];
            // let siteManagerDetails = siteDetails['site_manager'];
            var site_type = siteDetails['site_type'];
            if (site_type == '1') {
                site_type = 'WH METERING';
            }
            else if (site_type == '2') {
                site_type = 'WH_ENERGY SAVING';
            }
            console.log("Site Details" + siteDetails);
            _this.siteDetails.site_id = siteDetails['id'];
            _this.siteDetails.site_name = siteDetails['site_name'];
            _this.siteDetails.site_addr = siteDetails['location'];
            _this.siteDetails.site_type = site_type;
            _this.siteDetails.site_mgr_name = siteDetails['site_manager'];
            _this.siteDetails.site_mgr_mob = siteDetails['site_manager_contact'];
            _this.siteDetails.site_mgr_email = siteDetails['site_manager_email'];
            _this.siteDetails.total_blocks = siteDetails['total_no_of_blocks'];
            _this.siteDetails.total_aisles = siteDetails['total_no_of_aisles'];
            _this.siteDetails.total_single_src_meters = siteDetails['no_of_single_source_meters'];
            _this.siteDetails.total_dual_src_meters = siteDetails['no_of_dual_source_meters'];
        }, function (error) { });
    };
    WhMeteringComponent.prototype.getPowerSourceDistData = function () {
        var _this = this;
        var data = { 'siteId': this.siteId };
        this.DataService.getPowerSrcDistData(data).subscribe(function (response) {
            var status = response['result'];
            var mainsPercentage = 0;
            var dg1Percentage = 0;
            var dg2Percentage = 0;
            var seriesData = [];
            var currentMonth = response['current_month'];
            if (status == "1") {
                for (var k = 0; k < response['data'].length; k++) {
                    var data_5 = void 0;
                    data_5 = { 'name': response['data'][k]['name'], 'y': response['data'][k]['data'] };
                    seriesData.push(data_5);
                }
            }
            // this.pieChartComp.updatePieChartData(seriesData);
            // this.highcharts = Highcharts;
            _this.pieChartOptions = {
                colorCount: '12',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                chart: {
                    type: 'pie',
                    backgroundColor: '#222222',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    style: {
                        color: 'white',
                    },
                    text: 'Power Source Distribution ( ' + currentMonth + ' )'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            style: {
                                color: 'white',
                                fontSize: '12'
                            },
                            enabled: true,
                            format: '{point.name}: <b>{point.percentage:.1f}%</b>'
                        }
                    }
                },
                series: [{
                        type: 'pie',
                        name: 'share',
                        // innersize:'50%',
                        data: seriesData
                    }]
            };
            console.log("this is series data", _this.pieChartOptions);
            // else {
            //   // Show the meaningful text on  graph
            // }
        }, function (error) {
        });
    };
    WhMeteringComponent.prototype.getConsumptionData = function () {
        var _this = this;
        var todayDate = new Date();
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        var fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        console.log("till Date is : " + tillDate);
        console.log("From Date is : " + fromDate);
        var data1 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
        this.DataService.getGraphData(data1).subscribe(function (response) {
            //this.Highcharts = Highcharts;
            _this.barChartOptions = {
                colorCount: '12',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                credits: {
                    enabled: false,
                },
                chart: {
                    backgroundColor: '#222222',
                    type: 'column',
                    zoomType: "x"
                },
                title: {
                    text: _this.graphTitle,
                    style: {
                        color: 'white',
                    },
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['Dates']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        style: { color: 'white', },
                        text: 'Number of units (kWh)'
                    },
                    stackLabels: {
                        enabled: true,
                        rotation: -90,
                        style: { color: "white" },
                        verticalAlign: "top",
                        y: -30,
                    },
                    labels: {
                        style: {
                            color: 'white'
                        }
                    }
                },
                labels: {
                    style: {
                        color: 'white'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    },
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: response['Data'],
            };
            console.log("graph data", _this.barChartOptions);
        });
    };
    WhMeteringComponent.prototype.onChange = function (value) {
        console.log("@@@@@@@ ", value);
    };
    WhMeteringComponent.prototype.columnGraphFilterChanged = function (interval) {
        var _this = this;
        var mode = this.selected_task;
        console.log("value of selected task is", mode);
        var tillDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        var graphType = this.selected_graph;
        var todayDate = new Date();
        var fromDate;
        var categories = [];
        var series = [];
        var selectedYear = this.date.value.getFullYear();
        var selectedMonth = this.date.value.getMonth();
        var selectedMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM', 'en');
        var currentMonthYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy/MM', 'en');
        var hourlySelectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.date.value, 'yyyy/MM/dd', 'en');
        if (selectedMonthYear == currentMonthYear) {
            // if the daily filter is for current month only
            // then show the last 30 days data
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date().setDate(todayDate.getDate() - 30), 'yyyy/MM/dd', 'en');
        }
        else {
            // if the current month is not same as the selected month
            // then show the data for that complete month
            fromDate = selectedMonthYear + "/01";
            fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(fromDate, 'yyyy/MM/dd', 'en');
            var day = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            tillDate = selectedMonthYear + "/" + day;
        }
        /**
         *  Call the API on the basis of Graph Type
         */
        if (graphType == '0') {
            // Energy Consumption Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                // Call the API with specific data
                var data_6 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
                this.DataService.getGraphData(data_6).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                var data_7 = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                // this.barChartOptions.plotOptions.column.stacking='percent';
                this.DataService.getSiteHourlyConsumptionData(data_7).subscribe(function (response) {
                    categories = response['Hours'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            this.unitConsumptionGraph = true;
            this.runTimeGraph = false;
        }
        else if (graphType == "1") {
            // Percentage Run Graph
            if (mode == '0') {
                // Graph Filter is for daily data
                // Call the API with specific data
                var data_8 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
                this.DataService.getDailyPowerSrcDistData(data_8).subscribe(function (response) {
                    categories = response['Dates'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = series;
                    _this.barChartOptions.yAxis.title.text = "Number of units % (KWh)";
                    _this.updateFlag = true;
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                var data_9 = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                this.DataService.getHourlyPowerSrcDistData(data_9).subscribe(function (response) {
                    categories = response['Hours'];
                    series = response['Data'];
                    _this.barChartOptions.xAxis.categories = categories;
                    _this.barChartOptions.series = _this.normalizeSeries(series);
                    setTimeout(function () {
                        _this.updateFlag = true;
                        try {
                            if (_this.chart && _this.chart.chart)
                                _this.chart.chart.reflow();
                        }
                        catch (e) { }
                    }, 0);
                }, function (error) { });
            }
            this.unitConsumptionGraph = true;
            this.runTimeGraph = false;
        }
        else {
            // Percentage Run Graph (Time)
            if (mode == '0') {
                // Graph Filter is for daily data
                // Call the API with specific data
                var data_10 = { 'site_id': this.siteId, 'from_date': fromDate, 'till_date': tillDate };
                this.DataService.getDailyPowerSrcDistDataTime(data_10).subscribe(function (response) {
                    _this.barChartOptionsRunTime = {
                        colorCount: '12',
                        colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                        credits: {
                            enabled: false,
                        },
                        chart: {
                            backgroundColor: '#222222',
                            type: 'column',
                            zoomType: "x"
                        },
                        title: {
                            text: _this.graphTitle,
                            style: {
                                color: 'white',
                            },
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: 'white',
                                },
                            },
                            categories: response['Dates']
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                style: { color: 'white', },
                                text: 'Time (In Seconds)'
                            },
                            stackLabels: {
                                enabled: true,
                                rotation: -90,
                                style: { color: "white" },
                                verticalAlign: "top",
                                y: -30,
                            },
                            labels: {
                                style: {
                                    color: 'white'
                                }
                            }
                        },
                        labels: {
                            style: {
                                color: 'white'
                            }
                        },
                        tooltip: {
                            formatter: function () {
                                var totalMinutes = Math.floor(this.y / 60);
                                var seconds = this.y % 60;
                                var hours = Math.floor(totalMinutes / 60);
                                var minutes = totalMinutes % 60;
                                var y = hours + " hrs " + minutes + " min " + seconds + " sec";
                                // for total
                                var tm = Math.floor(this.point.stackTotal / 60);
                                var ss = this.point.stackTotal % 60;
                                var hrs = Math.floor(tm / 60);
                                var ms = tm % 60;
                                var total = hrs + " hrs " + ms + " min " + ss + " sec";
                                return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + y + '<br/>' +
                                    'Total: ' + total;
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                            },
                        },
                        legend: {
                            itemStyle: { color: 'white', },
                        },
                        series: response['Data'],
                    };
                    _this.unitConsumptionGraph = false;
                    _this.runTimeGraph = true;
                }, function (error) { });
            }
            else {
                // Graph Filter is for hourly data
                var data_11 = { 'site_id': this.siteId, 'date': hourlySelectedDate };
                this.DataService.getHourlyPowerSrcDistDataTime(data_11).subscribe(function (response) {
                    _this.barChartOptionsRunTime = {
                        colorCount: '12',
                        colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                        credits: {
                            enabled: false,
                        },
                        chart: {
                            backgroundColor: '#222222',
                            type: 'column',
                            zoomType: "x"
                        },
                        title: {
                            text: _this.graphTitle,
                            style: {
                                color: 'white',
                            },
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: 'white',
                                },
                            },
                            categories: response['Dates']
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                style: { color: 'white', },
                                text: 'Number of units (kWh)'
                            },
                            stackLabels: {
                                enabled: true,
                                rotation: -90,
                                style: { color: "white" },
                                verticalAlign: "top",
                                y: -30,
                            },
                            labels: {
                                style: {
                                    color: 'white'
                                }
                            }
                        },
                        labels: {
                            style: {
                                color: 'white'
                            }
                        },
                        tooltip: {
                            formatter: function () {
                                var totalMinutes = Math.floor(this.y / 60);
                                var seconds = this.y % 60;
                                var hours = Math.floor(totalMinutes / 60);
                                var minutes = totalMinutes % 60;
                                var y = hours + " hrs " + minutes + " min " + seconds + " sec";
                                // for total
                                var tm = Math.floor(this.point.stackTotal / 60);
                                var ss = this.point.stackTotal % 60;
                                var hrs = Math.floor(tm / 60);
                                var ms = tm % 60;
                                var total = hrs + " hrs " + ms + " min " + ss + " sec";
                                return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + y + '<br/>' +
                                    'Total: ' + total;
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                            },
                        },
                        legend: {
                            itemStyle: { color: 'white', },
                        },
                        series: response['Data'],
                    };
                    _this.unitConsumptionGraph = false;
                    _this.runTimeGraph = true;
                }, function (error) { });
            }
        }
    };
    WhMeteringComponent.prototype.changeGraphStacking = function () {
        this.whichGraph ^= 0x1;
        if (this.whichGraph == 0) {
            this.barChartOptions.plotOptions.column.stacking = '';
            this.updateFlag = true;
            console.log('Inside normal stacking false');
        }
        else {
            this.barChartOptions.plotOptions.column.stacking = 'normal';
            this.updateFlag = true;
            console.log('Inside normal stacking True');
        }
    };
    WhMeteringComponent.prototype.changeGraphStackingRunTime = function () {
        this.whichGraph ^= 0x1;
        if (this.whichGraph == 0) {
            this.barChartOptionsRunTime.plotOptions.column.stacking = '';
            this.updateFlag = true;
            console.log('Inside normal stacking false');
        }
        else {
            this.barChartOptionsRunTime.plotOptions.column.stacking = 'normal';
            this.updateFlag = true;
            console.log('Inside normal stacking True');
        }
    };
    WhMeteringComponent.prototype.openSiteDashboard = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        this.dialog.open(_dialog_switchdash_dialog_switchdash_component__WEBPACK_IMPORTED_MODULE_13__["DialogSwitchdashComponent"], dialogConfig);
    };
    WhMeteringComponent.prototype.loadDetails = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_load_data_table_load_data_table_component__WEBPACK_IMPORTED_MODULE_16__["LoadDataTableComponent"], dialogConfig);
    };
    WhMeteringComponent.prototype.exportExcelData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        this.dialog.open(_excelsheet_excelsheet_component__WEBPACK_IMPORTED_MODULE_14__["ExcelsheetComponent"], dialogConfig);
    };
    WhMeteringComponent.prototype.exportDgFuelExcelData = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        this.dialog.open(_dg_fuel_excel_export_dg_fuel_excel_export_component__WEBPACK_IMPORTED_MODULE_18__["DgFuelExcelExportComponent"], dialogConfig);
    };
    WhMeteringComponent.prototype.exportLoadData = function () {
        var _this = this;
        var data = { "site_id": this.siteId, "date": Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.loadDate.value, 'yyyy/MM/dd', 'en'), "graph_type": this.selected_load_options };
        this.DataService.download_excel_load_data(data).subscribe(function (response) {
            console.log("response: ", response);
            var selectedGraphName = _this.loadGraphintervals[parseInt(_this.selected_load_options)].viewValue;
            var blob = response.body;
            var downloadURL = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = (selectedGraphName + "load_data_" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(_this.loadDate.value, 'yyyy/MM/dd', 'en') + ".csv");
            link.click();
        });
    };
    WhMeteringComponent.prototype.getSiteCurrLoadInfoData = function () {
        var _this = this;
        var pf_visible = localStorage.getItem('pf_visible');
        var data = { 'site_id': this.siteId };
        this.dashData.getSiteCurrentLoadInfo(data).subscribe(function (response) {
            console.log("Response#####", response);
            _this.liveData.totalLoad = response.Total_Load;
            _this.liveData.r_volt = response.R_Voltage;
            _this.liveData.y_volt = response.Y_Voltage;
            _this.liveData.b_volt = response.B_Voltage;
            _this.liveData.r_current = response.R_Current;
            _this.liveData.y_current = response.Y_Current;
            _this.liveData.b_current = response.B_Current;
            _this.liveData.r_pf = response.R_Power_Factor;
            _this.liveData.y_pf = response.Y_Power_Factor;
            _this.liveData.b_pf = response.B_Power_Factor;
            _this.liveData.max_load = response.max_load;
            _this.liveData.min_load = response.min_load;
            _this.liveData.supply_source = response.Power_supply;
        }, function (error) {
        });
    };
    WhMeteringComponent.prototype.customerPage = function () {
        this.DataService.changeMessage("customer");
    };
    WhMeteringComponent.prototype.pf_details = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "70%";
        this.dialog.open(_pf_table_pf_table_component__WEBPACK_IMPORTED_MODULE_15__["PfTableComponent"], dialogConfig);
    };
    WhMeteringComponent.prototype.home = function () {
        localStorage.removeItem('customer');
        location.reload();
    };
    WhMeteringComponent.prototype.customRangePopup = function () {
        var _this = this;
        console.log("function called");
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        var dialogRef = this.dialog.open(_custom_date_range_picker_custom_date_range_picker_component__WEBPACK_IMPORTED_MODULE_17__["CustomDateRangePickerComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.length > 0 && result[0].from_date != '' && result[0].end_date != '') {
                console.log("#############:", result.length, result);
                result = result[0];
                var start_date = result.from_date;
                var end_date = result.end_date;
                var reqData = { "site_id": _this.siteId, "from_date": start_date, "end_date": end_date };
                _this.DataService.fetchDGFuelDataCustomeRange(reqData).subscribe(function (res) {
                    _this.dgFuelData = false;
                    _this.dgFuelDataSelectionChange = true;
                    console.log("response: ", res);
                    var dataSeries = res["data"];
                    // dataSeries["dataLabels"] = {"enabled": true}
                    var refuelSeries = res["refuel_alert"];
                    refuelSeries["dataLabels"] = { "enabled": true };
                    var theftSeries = res["theft_alert"];
                    theftSeries["dataLabels"] = { "enabled": true };
                    var dgFuelConsumed = res["dg_fuel_data"];
                    // dgFuelConsumed["dataLabels"] = {"enabled": true}
                    var dgUnitPerLtr = res["dg_unit_per_litre_data"];
                    // dgUnitPerLtr["dataLabels"] = {"enabled": true}
                    var dgConsumptionDataSeries = res["dg_unit_data"];
                    dgConsumptionDataSeries["yAxis"] = 1;
                    dgConsumptionDataSeries["dataLabels"] = { "enabled": true };
                    console.log("################## ", dataSeries[0]['x']);
                    var alertData = res["alert_data"];
                    console.log("api data: ", dataSeries);
                    _this.chartLoading = true;
                    _this.dgFuelConsumptionSelectionOptions = {
                        colorCount: '5',
                        colors: ['#90ED7D', '#7cb5ec', '#ff0000', '#ff7a01', '#800080', '#00008B'],
                        chart: {
                            type: "spline",
                            backgroundColor: "#222222",
                            scrollablePlotArea: {
                                minWidth: 300,
                                scrollPositionX: 1
                            },
                            zoomType: "x",
                        },
                        navigator: {
                            enabled: true
                        },
                        scrollbar: {
                            enabled: true
                        },
                        legend: {
                            itemStyle: { color: 'white', },
                        },
                        xAxis: {
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                day: '%d %b %Y' //ex- 01 Jan 2016
                            },
                            startOnTick: true,
                            endOnTick: true,
                            showLastLabel: true,
                            labels: {
                                style: { color: 'white', },
                                rotation: -45,
                                //Specify the formatting of xAxis labels:
                                format: '{value:%Y-%m-%d %H:%M}',
                            }
                        },
                        yAxis: [{
                                labels: {
                                    // format: '{value} units',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                title: {
                                    text: 'Fuel Level (in Litres)',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                opposite: false,
                            },
                            {
                                gridLineWidth: 0,
                                title: {
                                    text: 'Unit Consumed In KWH',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                labels: {
                                    format: '{value} KWH',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                opposite: true,
                                min: 0,
                                max: 600,
                                tickInterval: 100,
                            },
                        ],
                        time: {
                            useUTC: false
                        },
                        title: {
                            text: 'DG Fuel and Unit Trend',
                            style: {
                                color: 'white',
                            },
                        },
                        plotOptions: {
                            series: {
                                turboThreshold: 0,
                                pointWidth: 15
                            }
                        },
                        series: [{
                                type: "areaspline",
                                name: 'Fuel Level',
                                data: dataSeries,
                                fillColor: new highcharts__WEBPACK_IMPORTED_MODULE_7__["Color"]('#808080').setOpacity(0.66).get(),
                            }, refuelSeries, theftSeries, dgConsumptionDataSeries, dgFuelConsumed, dgUnitPerLtr
                        ]
                    };
                });
            }
        });
    };
    WhMeteringComponent.prototype.dgFuelMonthlyTrend = function () {
        var _this = this;
        console.log("5%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        var data1 = { 'site_id': this.siteId, "user_type": this.user_type };
        // this.dgFuelData=true;
        this.DataService.dgFuelConsumptionMonthlyTrend(data1).subscribe(function (response) {
            console.log('**************************', response);
            var seriesData = [];
            //this.Highcharts = Highcharts;
            //let xyz = [response['Data'],{"leg":'baseline', 'type': "spline", 'data':[{"a":100,'b':90,'c':80,'d':86,'e':90,'f':100,'g':100,'h':100,'i':100,'j':100,'k':100,'l':100,'m':100,'n':100,'o':100,'p':100,'q':100,'r':100,'s':100,'t':100,'u':100,'v':100,'w':100,'x':100,'y':100,'z':100,'ca':100,'cb':100,'cc':100,'cd':100,}]}]
            var energyConsumed;
            energyConsumed = { "name": "Mains", 'type': "spline", 'y': response['mains_unit_consumption_monthly'] };
            var enegySaved = { "name": "DG", 'type': 'spline', 'y': response['dg_unit_consumption_monthly'] };
            var percentageSaved = { "name": "DG-Fuel-Consumption", 'type': 'spline', 'y': response['dg_unit_consumption_monthly'] };
            var data2 = [{ "data": [energyConsumed, enegySaved, percentageSaved] }];
            // seriesData.push(consumption);
            // seriesData1.push(dataSaving);
            seriesData.push(data2);
            // highcharts = Highcharts;
            _this.lineChartOption = {
                colorCount: '4',
                colors: ['#90ED7D', '#ff7a01', '#7cb5ec', '#058DC7'],
                chart: {
                    type: "column",
                    backgroundColor: "#222222",
                    overflow: 'scroll'
                },
                title: {
                    style: {
                        color: 'white',
                    },
                    text: 'Monthly Trend Mains/DG-Units & DG-Fuel-Consumption'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            color: 'white',
                        },
                    },
                    categories: response['months']
                },
                yAxis: [{
                        labels: {
                            //   format: '{value} units',
                            style: {
                                color: '#ff7a01'
                            }
                        },
                        title: {
                            text: 'Units (KWH)',
                            style: {
                                color: '#ff7a01'
                            }
                        },
                        opposite: false
                    }, {
                        gridLineWidth: 0,
                        title: {
                            text: 'DG Fuel Consumption',
                            style: {
                                color: '#7cb5ec'
                            }
                        },
                        labels: {
                            //   format: '{value} %',
                            style: {
                                color: '#7cb5ec'
                            }
                        },
                        opposite: true
                    }],
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>';
                    }
                },
                legend: {
                    itemStyle: { color: 'white', },
                },
                series: [
                    {
                        name: 'Mains-Units',
                        data: response['mains_unit_consumption_monthly'],
                    },
                    {
                        name: 'DG-Units',
                        data: response["dg_unit_consumption_monthly"],
                    },
                    {
                        yAxis: 1,
                        name: 'DG-Fuel-Consumption',
                        data: response["dg_fuel_monthly"],
                        type: 'spline'
                    }
                ]
            };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WhMeteringComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("loadChart"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WhMeteringComponent.prototype, "loadChart", void 0);
    WhMeteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-wh-metering',
            template: __webpack_require__(/*! ./wh-metering.component.html */ "./src/app/wh-metering/wh-metering.component.html"),
            styles: [__webpack_require__(/*! ./wh-metering.component.css */ "./src/app/wh-metering/wh-metering.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_4__["DashboardDataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]])
    ], WhMeteringComponent);
    return WhMeteringComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    //apiUrl: 'http://127.0.0.1:8005/api/'
    // apiUrl: 'http://127.0.0.1:8080/api/'
    //apiUrl: 'http://192.168.1.19:8080/api/'
    //apiUrl: 'http://192.168.0.71:8888/api/'
    //apiUrl: 'http://sem2.aviconn.in:8005/api/'
    //  apiUrl: 'http://192.168.0.47:8006/api/'  //Yash-aviconn path
    // apiUrl: 'http://asem.aviconn.net:8006/api/'   // Server Path
    // apiUrl: 'http://192.168.0.22:8005/api/'
    //  apiUrl: 'https://asem1.aviconn.in:8005/api/'   //live webapp server path (test_project)
    apiUrl: 'https://asem.aviconncorp.com/api/' //new server path (test_project)
    //  apiUrl: 'http://127.0.0.1:8000/api/' //local system path
};


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
    production: false,
    //apiUrl: 'http://127.0.0.1:8005/api/'
    // apiUrl: 'http://127.0.0.1:8080/api/'
    //apiUrl: 'http://192.168.1.19:8080/api/'
    //apiUrl: 'http://192.168.0.71:8888/api/'
    //apiUrl: 'http://sem2.aviconn.in:8005/api/'
    // apiUrl: 'http://192.168.0.22:8005/api/'
    //  apiUrl: 'http://192.168.0.47:8006/api/'  //Yash-aviconn path
    // apiUrl: 'http://206.189.143.24:8005/api/'   //new server path (test_project)
    // apiUrl: 'http://asem1.aviconn.net:8000/api/'   // provisionTest server path
    // apiUrl: 'http://127.0.0.1:8000/api/'    // Shahid local Server Path
    // apiUrl: 'https://asem1.aviconn.in:8005/api/'   //new server path (test_project)
    apiUrl: 'https://asem.aviconnncorp.com/api/' //new server path (test_project)
    // apiUrl: 'http://127.0.0.1:8000/api/' //local system path
    //  apiUrl: 'http://192.168.1.2:8000/api/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! D:\Aviconn\movie-rater-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map