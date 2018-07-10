webpackJsonp([8],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddcontactPage = /** @class */ (function () {
    function AddcontactPage(navCtrl, navParams, server, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.contactFields = {
            "NAME": "",
            "PHONENUM": "",
            "CELLPHONE": "",
            "HOMEPHONE": "",
            "EMAIL": "",
        };
    }
    AddcontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcontactPage');
    };
    AddcontactPage.prototype.saveContact = function () {
        var _this = this;
        console.log("1111", this.contactFields);
        if (!this.contactFields.NAME)
            this.Toast.presentToast("יש להזין שם לקוח");
        else if (!this.contactFields.PHONENUM)
            this.Toast.presentToast("יש להזין מספר טלפון");
        else if (!this.contactFields.CELLPHONE)
            this.Toast.presentToast("יש להזין טלפון נייד");
        else if (!this.contactFields.HOMEPHONE)
            this.Toast.presentToast("יש להזין תעודת זהות");
        else if (!this.contactFields.EMAIL)
            this.Toast.presentToast("יש להזין דואר אלקטרוני");
        else {
            var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
            var sendData = {
                "LOADCODE": "1",
                "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                "PRIT_CUSTPERSONNEL_SUBFORM": [
                    {
                        "NAME": this.contactFields.NAME,
                        "PHONENUM": this.contactFields.PHONENUM,
                        "CELLPHONE": this.contactFields.CELLPHONE,
                        "HOMEPHONE": this.contactFields.HOMEPHONE,
                        "EMAIL": this.contactFields.EMAIL,
                    }
                ],
                "PRIT_INTERFACE_SUBFORM": [
                    {
                        "EXECUTE": "Y"
                    }
                ]
            };
            this.server.SendPost(URL_1, sendData).then(function (data) {
                console.log("response", data);
                var response = data;
                if (response.ok) {
                    _this.Toast.presentToast("איש קשר נוסף בהצלחה");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contacts_contacts__["a" /* ContactsPage */]);
                }
                else {
                    _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    };
    AddcontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcontact',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\addcontact\addcontact.html"*/'<!--\n\n  Generated template for the AddcontactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="info">\n\n\n\n\n\n    <edit-row jsonKey="NAME" Title = "שם לקוח" [Data]="contactFields"> </edit-row>\n\n    <edit-row jsonKey="PHONENUM" Title = "טלפון" [Data]="contactFields"> </edit-row>\n\n    <edit-row jsonKey="CELLPHONE" Title = "טלפון נייד" [Data]="contactFields"> </edit-row>\n\n    <edit-row jsonKey="HOMEPHONE" Title = "תעודת זהות" [Data]="contactFields"> </edit-row>\n\n    <edit-row jsonKey="EMAIL" Title = "דואר אלקטרוני" [Data]="contactFields"> </edit-row>\n\n\n\n\n\n\n\n    <div class="buttons">\n\n      <button ion-button full style="background-color: #6eb43f" (click)="saveContact()">שלח</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\addcontact\addcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], AddcontactPage);
    return AddcontactPage;
}());

//# sourceMappingURL=addcontact.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, server, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.contactFields = {
            "subject": "",
            "desc": ""
        };
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.sendContact = function () {
        var _this = this;
        if (!this.contactFields.subject)
            this.Toast.presentToast("יש לבחור נושא הפניה");
        else if (!this.contactFields.desc)
            this.Toast.presentToast("יש להזין פרטי הפניה");
        else {
            var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
            var sendData = {
                "LOADCODE": "10",
                "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                "SUBJCODE": "210",
                "PRIT_DOCTEXT_SUBFORM": [
                    {
                        "TEXT": this.contactFields.desc,
                    }
                ],
                "PRIT_INTERFACE_SUBFORM": [
                    {
                        "EXECUTE": "Y" /* קבוע*/
                    }
                ]
            };
            this.server.SendPost(URL_1, sendData).then(function (data) {
                console.log(data);
                var response = data;
                if (response.ok) {
                    _this.Toast.presentToast("פניתך התקבלה בהצלחה");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header xmlns="http://www.w3.org/1999/html">\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="info">\n\n    <div class="MainAvatar">\n\n      <img src="images/footeric1.png" style="width: 20%">\n\n    </div>\n\n\n\n    <div>\n\n      <div class="fullRow">\n\n        <div class="EditRow" >\n\n          <select class="inputText MT10" [(ngModel)]="contactFields.subject">\n\n            <option value="">נושא הפניה</option>\n\n            <option [value]="0" >תמיכה טכנית</option>\n\n            <option [value]="1" >פניית שירות</option>\n\n            <option [value]="2" >אחר</option>\n\n          </select>\n\n        </div>\n\n\n\n        <div class="EditRow" >\n\n          <textarea  class="inputText MT10" value="" [(ngModel)]="contactFields.desc"  dir="rtl" placeholder="הכנס פרטים (עד 50 תווים)" maxlength="50"></textarea>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <div class="buttons">\n\n      <button ion-button full style="background-color: #6eb43f" (click)="sendContact()">שלח</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, server, Toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.productsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'";
        this.server.GetData(URL).then(function (data) {
            _this.productsArray = data.json().value;
            console.log(_this.productsArray);
        });
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    ProductsPage.prototype.cutImageUrl = function (url) {
        //console.log("image url:",url);
        if (url) {
            var arr = url.split("/");
            //console.log("arr",arr);
            return arr[4] + "/" + arr[5] + "/" + arr[6];
        }
        else {
            return '';
        }
    };
    ProductsPage.prototype.changeStatus = function (place, status) {
        var _this = this;
        this.productsArray[place].STATUS = status;
        if (status == 0) {
            var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
            var sendData = {
                "LOADCODE": "9",
                "CUSTDES": "LoadSern",
                "PRIT_SERNUMBERS_SUBFORM": [
                    {
                        "PARTNAME": this.productsArray[place].PARTNAME,
                        "SERNUM": this.productsArray[place].SERNUM,
                        "FREE1": this.productsArray[place].PRIT_FREE,
                        "EXTFILENAME": this.productsArray[place].PRIT_FILENAME,
                    }
                ],
                "PRIT_INTERFACE_SUBFORM": [
                    {
                        "EXECUTE": "Y" /* קבוע*/
                    }
                ]
            };
            this.server.SendPost(URL_1, sendData).then(function (data) {
                console.log(data);
                var response = data;
                if (response.ok) {
                    _this.Toast.presentToast("עודכן בהצלחה");
                }
                else {
                    _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\products\products.html"*/'<!--\n\n  Generated template for the ProductsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="buttonsBar">\n\n        <div class="buttonsBarLeft">\n\n            <button ion-button class="buttonsBarButton" (click)="c()"> החזרת פריטים</button>\n\n        </div>\n\n        <div class="buttonsBarRight">\n\n            <button ion-button class="buttonsBarButton" (click)="c()"> שליפת פריטים</button>\n\n        </div>\n\n    </div>\n\n    <div class="products">\n\n        <div *ngFor="let item of productsArray let i=index" class="productItem">\n\n            <div *ngIf="!item.STATUS || item.STATUS == 0">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <img src="images/avatar.png"  style="width: 100%" />\n\n                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}}</div>\n\n                        <div> {{item.FREE1}}</div>\n\n                        <div> {{item.PRIT_FREE}}</div>\n\n                    </div>\n\n                    <div class="productEdit" (click)="changeStatus(i,1)">\n\n                        <img src="images/edit.png" style="width: 100%" />\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="item.STATUS == 1">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}" style="width: 100%" />\n\n                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}}</div>\n\n                        <div> {{item.FREE1}}</div>\n\n                    </div>\n\n\n\n                    <textarea rows="4" cols="50" [(ngModel)]="item.PRIT_FREE"> </textarea>\n\n                    <button ion-button class="editButton" (click)="changeStatus(i,0)"> סיים עריכה</button>\n\n                </div>\n\n                <!-- <img src="images/edit.png" style="width:5%" (click)="changeStatus(i,0)"/>\n\n                <div>6666767676767676767</div> -->\n\n            </div>\n\n            <hr>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomsPage = /** @class */ (function () {
    function RoomsPage(navCtrl, navParams, server, alertCtrl, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.alertCtrl = alertCtrl;
        this.Toast = Toast;
        this.roomsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
        this.getItems();
    }
    RoomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomsPage');
    };
    RoomsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RoomsPage.prototype.getItems = function () {
        var _this = this;
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ORDISINGLE?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "' and PRIT_COND eq 'Y'";
        this.server.GetData(URL).then(function (data) {
            _this.roomsArray = data.json().value;
            console.log(_this.roomsArray);
        });
    };
    RoomsPage.prototype.clearRoom = function (PARTNAME) {
        var _this = this;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
        if (PARTNAME) {
            var Confirmalert = this.alertCtrl.create({
                title: 'אישור פנוי חדר',
                message: '',
                buttons: [
                    {
                        text: 'ביטול',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'אישור',
                        handler: function () {
                            var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                            var sendData = {
                                "LOADCODE": "6",
                                "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                                "PRIT_DOCLINE_SUBFORM": [
                                    {
                                        "PARTNAME": PARTNAME,
                                        "DUEDATE": _this.todaydate //תאריך פינוי
                                    }
                                ],
                                "PRIT_INTERFACE_SUBFORM": [
                                    {
                                        "EXECUTE": "Y"
                                    }
                                ]
                            };
                            _this.server.SendPost(URL, sendData).then(function (data) {
                                console.log("response", data);
                                var response = data;
                                if (response.ok) {
                                    _this.Toast.presentToast("פינוי חדר בוצע בהצלחה");
                                }
                                else {
                                    _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                                }
                            });
                        }
                    }
                ]
            });
            Confirmalert.present();
        }
    };
    RoomsPage.prototype.ClearRooms = function () {
        var _this = this;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
        var Confirmalert = this.alertCtrl.create({
            title: 'אישור פנוי חדרים',
            message: '',
            buttons: [
                {
                    text: 'ביטול',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'אישור',
                    handler: function () {
                        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                        var sendData = {
                            "LOADCODE": "6",
                            "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                            "DOCDATE": _this.todaydate,
                            "PRIT_INTERFACE_SUBFORM": [
                                {
                                    "EXECUTE": "Y"
                                }
                            ]
                        };
                        _this.server.SendPost(URL, sendData).then(function (data) {
                            console.log("response", data);
                            var response = data;
                            if (response.ok) {
                                _this.Toast.presentToast("פינוי חדרים בוצע בהצלחה");
                            }
                            else {
                                _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                            }
                        });
                    }
                }
            ]
        });
        Confirmalert.present();
    };
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rooms',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\rooms\rooms.html"*/'<!--\n\n  Generated template for the RoomsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="products">\n\n    <div *ngFor="let item of roomsArray let i=index" class="productItem">\n\n      <div >\n\n        <div class="productNumber">  {{item.PDES}}</div>\n\n        <div class="productInfo" >\n\n          <div class="productText">\n\n            <div dir="rtl" style="direction: rtl;"> מספר מוצר: {{item.PARTNAME}}</div>\n\n            <div dir="rtl" style="direction: rtl;">כמות: {{item.QUANT}} {{item.UNITNAME}}</div>\n\n            <div dir="rtl" style="direction: rtl;">מחיר: {{item.BASEPRICE}} {{item.OCODE}}</div>\n\n          </div>\n\n          <div class="productEdit" (click)="clearRoom(item.PARTNAME)">\n\n            <ion-icon name="exit" style="font-size:30px"></ion-icon>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <hr>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n  <button ion-button full style="background-color: #6eb43f" (click)="ClearRooms()">פינוי חדרים כללי</button>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\rooms\rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the PaymentinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentinfoPage = /** @class */ (function () {
    function PaymentinfoPage(navCtrl, navParams, server, Toast, iab, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.jsonResponse = [];
        this.cardFieldOpen = false;
        this.expirationOpen = false;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('YYYY-MM-DD');
        this.selectedDate = new Date(this.todaydate).toISOString();
        this.maxDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()().add(10, 'years').format('YYYY');
        this.getItem();
    }
    PaymentinfoPage.prototype.getItem = function () {
        var _this = this;
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')/PAYMENTDEF_SUBFORM";
        this.server.GetData(URL).then(function (data) {
            _this.jsonResponse = data.json();
            console.log(_this.jsonResponse);
            // this.validMonth = this.jsonResponse.VALIDMONTH;
            // let splitdate = this.validMonth.split("/");
            // this.validMonth =  moment(moment('01-'+splitdate[0]+'-'+splitdate[1]+'', 'DD-MM-YY')).format('YYYY-MM-DD');
        });
    };
    PaymentinfoPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PaymentinfoPage.prototype.saveCard = function () {
        var _this = this;
        var browser = this.iab.create('https://tapper.org.il/avia/payment_redirect.php?custumer_id=' + localStorage.getItem("CUSTNAME"), '_self', "location=yes");
        browser.show();
        browser.on('loadstop').subscribe(function (event) {
            if (event.url.indexOf("payment-cancel") > -1) {
                browser.close();
                _this.Toast.presentToast("משתמש ביטל את הפעולה");
            }
            if (event.url.indexOf("payment-error") > -1) {
                browser.close();
                _this.Toast.presentToast("עידכון פרטי אשראי נכשלו יש לנסות שוב");
            }
            if (event.url.indexOf("payment-ok") > -1) {
                browser.close();
                var AlertShow = _this.toastCtrl.create({
                    message: 'פרטי אשראי עודכנו בהצלחה',
                    showCloseButton: true,
                    closeButtonText: 'אישור'
                });
                AlertShow.present();
                _this.getItem();
            }
        });
        browser.on('exit').subscribe(function (event) {
        });
    };
    PaymentinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentinfoPage');
    };
    PaymentinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paymentinfo',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/'<!--\n\n  Generated template for the PaymentinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <div class="fullRow">\n\n      <div class="nonEditRow" *ngIf="!cardFieldOpen" >\n\n        <div class="rowRight">\n\n          {{jsonResponse.PAYACCOUNT}}\n\n        </div>\n\n        <!--<div class="rowLeft">-->\n\n          <!--<img src="images/edit.png" style="width: 100%">-->\n\n        <!--</div>-->\n\n      </div>\n\n      <!--<div class="EditRow" *ngIf="cardFieldOpen">-->\n\n        <!--<img src="images/edit.png" class="absoluteEditButton" (click)="ToggleCardField(0)">-->\n\n        <!--<input type="tel" class="inputText MT10"  [(ngModel)]="jsonResponse.PAYACCOUNT"-->\n\n               <!--placeholder="4 ספרות אחרונות של כרטיס האשראי"/>-->\n\n      <!--</div>-->\n\n\n\n    </div>\n\n\n\n      <div class="fullRow">\n\n        <div class="nonEditRow" *ngIf="!expirationOpen" >\n\n          <div class="rowRight">\n\n            {{jsonResponse.VALIDMONTH}}\n\n          </div>\n\n          <!--<div class="rowLeft">-->\n\n            <!--<img src="images/edit.png" style="width: 100%">-->\n\n          <!--</div>-->\n\n        </div>\n\n        <!--<div class="EditRow" *ngIf="expirationOpen">-->\n\n          <!--<img src="images/edit.png" class="absoluteEditButton" (click)="ToggleExpirationField(0)">-->\n\n          <!--<ion-datetime displayFormat="MM/YY" class="inputText MT10" [max]="maxDate" [(ngModel)]="validMonth"></ion-datetime>-->\n\n        <!--</div>-->\n\n\n\n    </div>\n\n\n\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="saveCard()">החלף כרטיס</button>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], PaymentinfoPage);
    return PaymentinfoPage;
}());

//# sourceMappingURL=paymentinfo.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, server, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        // this.server.GetData('https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC').then((data: any) => {
        //     alert (data);
        //     console.log("getPastClasses : " , data.json());
        //     this.jsonResponse = data.json();
        // });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\login\login.html"*/'<ion-content padding>\n    <login> </login>\n</ion-content>\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcontact/addcontact.module": [
		817,
		7
	],
	"../pages/contact/contact.module": [
		818,
		6
	],
	"../pages/contacts/contacts.module": [
		819,
		5
	],
	"../pages/login/login.module": [
		820,
		4
	],
	"../pages/paymentinfo/paymentinfo.module": [
		821,
		3
	],
	"../pages/products/products.module": [
		822,
		2
	],
	"../pages/rooms/rooms.module": [
		823,
		1
	],
	"../pages/user-details/user-details.module": [
		824,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = /** @class */ (function () {
    function ServerService(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
    }
    ServerService.prototype.GetData = function (url) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        try {
            var body = new FormData();
            return new Promise(function (resolve, reject) {
                //btoa('username' + ":" + 'password')
                _this.http.get(url, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                        'Authorization': "Basic YXBpOmFwSTEwNTY=",
                        'content-Type': 'application/json',
                        'Accept': 'application/json'
                    }) }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(function (res) { return resolve(res); })
                    .catch(function (err) { return console.log("error:", err); });
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            loading.dismiss();
        }
    };
    ServerService.prototype.SendPost = function (url, data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        try {
            var body = new FormData();
            body.append('data', JSON.stringify(data));
            return new Promise(function (resolve, reject) {
                _this.http.post(url, JSON.stringify(data), { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                        'Authorization': "Basic YXBpOmFwSTEwNTY=",
                        'content-Type': 'application/json',
                        'Accept': 'application/json'
                    }) }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(function (res) { return resolve(res); })
                    .catch(function (err) { return console.log("error:", err); });
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            loading.dismiss();
        }
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ServerService);
    return ServerService;
}());

//this._categories.next(categories);
//resolve(this.categories); 
//# sourceMappingURL=server-service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        console.log("Toast : ", __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST);
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        toastItem["cssClass"] = "mainToastClass";
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ראשי', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            //{title: 'ניהול אנשי קשר', component: ContactsPage},
            { title: 'התנתקות', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var CUSTNAME = localStorage.getItem("CUSTNAME");
            if (CUSTNAME) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]); //ProductsPage LoginPage
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //console.log("App" , page.component)
        if (page.component == __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]) {
            console.log("LO");
            localStorage.removeItem("CUSTNAME");
            localStorage.removeItem("userData");
        }
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\gitlab\avia\src\app\app.html"*/'<ion-menu [content]="content"  side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"G:\gitlab\avia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_products_products__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_details_user_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addcontact/addcontact.module#AddcontactPageModule', name: 'AddcontactPage', segment: 'addcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_19__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    //"SERVER_URL":'http://www.tapper.org.il/ezmath/laravel/public/api/',
    //"IMAGE_URL":'http://www.tapper.org.il/ezmath/laravel/storage/app/public/',
    "FACEBOOKID": '1759132254144414',
    "TOAST": {
        "duration": 3000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCYOVrRscQ26G5lAmOSfwrBFncNidaCSOE",
        "authDomain": "ionic3-blue-light.firebaseapp.com",
        "databaseURL": "https://ionic3-blue-light.firebaseio.com",
        "projectId": "ionic3-blue-light",
        "storageBucket": "ionic3-blue-light.appspot.com",
        "messagingSenderId": "519928359775"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_details_user_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paymentinfo_paymentinfo__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, server) {
        this.navCtrl = navCtrl;
        this.server = server;
        this.cHeight = ((window.innerHeight - 335) / 2);
        this.cubeHeight = this.cHeight + 'px';
        this.iconWidth = this.cHeight / 1.3 + 'px';
        //let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS?$filter=CUSTNAME eq '513102566' and PRIT_PASSWORD eq '34343434rr'";
        //let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '13724646'"
        // let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC"
        //
        // //let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=SERNUM eq 'B000590'";
        // //https://aviatest.wee.co.il/odata/Priority/tabula.ini/system/mail/201806/7we5q/homebox1-1.jpg"
        // this.server.GetData1(URL,data).then((data: any) => {
        //     console.log("getPastClasses : " , data.json());
        //     this.jsonResponse = data.json().value[0];
        //     localStorage.userData = JSON.stringify(this.jsonResponse)
        //     console.log(this.jsonResponse.CUSTDES);
        // });
    }
    HomePage.prototype.NavigatePage = function (pageNum) {
        switch (pageNum) {
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */]); //LoginPage
                break;
            case 4:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rooms_rooms__["a" /* RoomsPage */]); //LoginPage
                break;
            case 5:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_details_user_details__["a" /* UserDetailsPage */]); //LoginPage
                break;
            case 6:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__paymentinfo_paymentinfo__["a" /* PaymentinfoPage */]); //LoginPage
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\home\home.html"*/'<ion-header>\n\n  <!--<ion-navbar>-->\n\n    <!--<button ion-button menuToggle>-->\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n    <!--</button>-->\n\n    <!--<ion-title>Home</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n    <header></header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-slides>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n\n\n    <div class="mainIcons">\n\n        <div class="mainRow" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(4)">\n\n                    <img src="images/home/ic1.png" style="width:100%" />\n\n                    <div class="mainIconTitle">יחידות אכסון</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(3)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic2.png" style="width:100%" />\n\n                    <div class="mainIconTitle">הפריטים שלי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="mainRow topBorder" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic3.png" style="width:100%" />\n\n                    <div class="mainIconTitle">פירוט חיובים</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(6)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic4.png" style="width:100%" />\n\n                    <div class="mainIconTitle">החלפת כרטיסי אשראי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n    <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 312,
	"./af.js": 312,
	"./ar": 313,
	"./ar-dz": 314,
	"./ar-dz.js": 314,
	"./ar-kw": 315,
	"./ar-kw.js": 315,
	"./ar-ly": 316,
	"./ar-ly.js": 316,
	"./ar-ma": 317,
	"./ar-ma.js": 317,
	"./ar-sa": 318,
	"./ar-sa.js": 318,
	"./ar-tn": 319,
	"./ar-tn.js": 319,
	"./ar.js": 313,
	"./az": 320,
	"./az.js": 320,
	"./be": 321,
	"./be.js": 321,
	"./bg": 322,
	"./bg.js": 322,
	"./bm": 323,
	"./bm.js": 323,
	"./bn": 324,
	"./bn.js": 324,
	"./bo": 325,
	"./bo.js": 325,
	"./br": 326,
	"./br.js": 326,
	"./bs": 327,
	"./bs.js": 327,
	"./ca": 328,
	"./ca.js": 328,
	"./cs": 329,
	"./cs.js": 329,
	"./cv": 330,
	"./cv.js": 330,
	"./cy": 331,
	"./cy.js": 331,
	"./da": 332,
	"./da.js": 332,
	"./de": 333,
	"./de-at": 334,
	"./de-at.js": 334,
	"./de-ch": 335,
	"./de-ch.js": 335,
	"./de.js": 333,
	"./dv": 336,
	"./dv.js": 336,
	"./el": 337,
	"./el.js": 337,
	"./en-au": 338,
	"./en-au.js": 338,
	"./en-ca": 339,
	"./en-ca.js": 339,
	"./en-gb": 340,
	"./en-gb.js": 340,
	"./en-ie": 341,
	"./en-ie.js": 341,
	"./en-il": 342,
	"./en-il.js": 342,
	"./en-nz": 343,
	"./en-nz.js": 343,
	"./eo": 344,
	"./eo.js": 344,
	"./es": 345,
	"./es-do": 346,
	"./es-do.js": 346,
	"./es-us": 347,
	"./es-us.js": 347,
	"./es.js": 345,
	"./et": 348,
	"./et.js": 348,
	"./eu": 349,
	"./eu.js": 349,
	"./fa": 350,
	"./fa.js": 350,
	"./fi": 351,
	"./fi.js": 351,
	"./fo": 352,
	"./fo.js": 352,
	"./fr": 353,
	"./fr-ca": 354,
	"./fr-ca.js": 354,
	"./fr-ch": 355,
	"./fr-ch.js": 355,
	"./fr.js": 353,
	"./fy": 356,
	"./fy.js": 356,
	"./gd": 357,
	"./gd.js": 357,
	"./gl": 358,
	"./gl.js": 358,
	"./gom-latn": 359,
	"./gom-latn.js": 359,
	"./gu": 360,
	"./gu.js": 360,
	"./he": 361,
	"./he.js": 361,
	"./hi": 362,
	"./hi.js": 362,
	"./hr": 363,
	"./hr.js": 363,
	"./hu": 364,
	"./hu.js": 364,
	"./hy-am": 365,
	"./hy-am.js": 365,
	"./id": 366,
	"./id.js": 366,
	"./is": 367,
	"./is.js": 367,
	"./it": 368,
	"./it.js": 368,
	"./ja": 369,
	"./ja.js": 369,
	"./jv": 370,
	"./jv.js": 370,
	"./ka": 371,
	"./ka.js": 371,
	"./kk": 372,
	"./kk.js": 372,
	"./km": 373,
	"./km.js": 373,
	"./kn": 374,
	"./kn.js": 374,
	"./ko": 375,
	"./ko.js": 375,
	"./ky": 376,
	"./ky.js": 376,
	"./lb": 377,
	"./lb.js": 377,
	"./lo": 378,
	"./lo.js": 378,
	"./lt": 379,
	"./lt.js": 379,
	"./lv": 380,
	"./lv.js": 380,
	"./me": 381,
	"./me.js": 381,
	"./mi": 382,
	"./mi.js": 382,
	"./mk": 383,
	"./mk.js": 383,
	"./ml": 384,
	"./ml.js": 384,
	"./mn": 385,
	"./mn.js": 385,
	"./mr": 386,
	"./mr.js": 386,
	"./ms": 387,
	"./ms-my": 388,
	"./ms-my.js": 388,
	"./ms.js": 387,
	"./mt": 389,
	"./mt.js": 389,
	"./my": 390,
	"./my.js": 390,
	"./nb": 391,
	"./nb.js": 391,
	"./ne": 392,
	"./ne.js": 392,
	"./nl": 393,
	"./nl-be": 394,
	"./nl-be.js": 394,
	"./nl.js": 393,
	"./nn": 395,
	"./nn.js": 395,
	"./pa-in": 396,
	"./pa-in.js": 396,
	"./pl": 397,
	"./pl.js": 397,
	"./pt": 398,
	"./pt-br": 399,
	"./pt-br.js": 399,
	"./pt.js": 398,
	"./ro": 400,
	"./ro.js": 400,
	"./ru": 401,
	"./ru.js": 401,
	"./sd": 402,
	"./sd.js": 402,
	"./se": 403,
	"./se.js": 403,
	"./si": 404,
	"./si.js": 404,
	"./sk": 405,
	"./sk.js": 405,
	"./sl": 406,
	"./sl.js": 406,
	"./sq": 407,
	"./sq.js": 407,
	"./sr": 408,
	"./sr-cyrl": 409,
	"./sr-cyrl.js": 409,
	"./sr.js": 408,
	"./ss": 410,
	"./ss.js": 410,
	"./sv": 411,
	"./sv.js": 411,
	"./sw": 412,
	"./sw.js": 412,
	"./ta": 413,
	"./ta.js": 413,
	"./te": 414,
	"./te.js": 414,
	"./tet": 415,
	"./tet.js": 415,
	"./tg": 416,
	"./tg.js": 416,
	"./th": 417,
	"./th.js": 417,
	"./tl-ph": 418,
	"./tl-ph.js": 418,
	"./tlh": 419,
	"./tlh.js": 419,
	"./tr": 420,
	"./tr.js": 420,
	"./tzl": 421,
	"./tzl.js": 421,
	"./tzm": 422,
	"./tzm-latn": 423,
	"./tzm-latn.js": 423,
	"./tzm.js": 422,
	"./ug-cn": 424,
	"./ug-cn.js": 424,
	"./uk": 425,
	"./uk.js": 425,
	"./ur": 426,
	"./ur.js": 426,
	"./uz": 427,
	"./uz-latn": 428,
	"./uz-latn.js": 428,
	"./uz.js": 427,
	"./vi": 429,
	"./vi.js": 429,
	"./x-pseudo": 430,
	"./x-pseudo.js": 430,
	"./yo": 431,
	"./yo.js": 431,
	"./zh-cn": 432,
	"./zh-cn.js": 432,
	"./zh-hk": 433,
	"./zh-hk.js": 433,
	"./zh-tw": 434,
	"./zh-tw.js": 434
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 793;

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__["a" /* EditRowComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__["a" /* EditRowComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(navCtrl, server, Toast) {
        this.navCtrl = navCtrl;
        this.server = server;
        this.Toast = Toast;
        this.UserId = 513102566;
        this.Password = '34343434rr';
    }
    LoginComponent.prototype.gotoHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginComponent.prototype.LogIn = function () {
        var _this = this;
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS?$filter=CUSTNAME eq '" + this.UserId + "' and PRIT_PASSWORD eq '" + this.Password + "'";
        this.server.GetData(URL).then(function (data) {
            console.log("getLoginDetaild : ", data.json().value[0]);
            if (data.json().value[0]) {
                console.log(data.json().value[0]);
                localStorage.setItem("CUSTNAME", data.json().value[0].CUSTNAME);
                localStorage.setItem("userData", JSON.stringify(data.json().value[0]));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.Toast.presentToast("הכנסת פרטים לא נכונים, אנא נסה שנית");
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"G:\gitlab\avia\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n\n    <div>\n        <div class="mainLogo">\n            <img src="images/logo.png" style="width: 100%">\n        </div>\n\n        <div class="loginForm">\n            <input type="text" class="inputText" value="" [(ngModel)]="UserId" placeholder="הכנס מייל "/>\n            <input type="text" class="inputText MT10" value="" [(ngModel)]="Password"  placeholder="הכנס סיסמה "/>\n        </div>\n\n        <button ion-button color="dark" full class="MT20" (click)="LogIn()">כניסה</button>\n        <p >שכחת סיסמה ?</p>\n    </div>\n'/*ion-inline-end:"G:\gitlab\avia\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        if (localStorage.userData) {
            this.userData = JSON.parse(localStorage.userData);
            this.userName = this.userData.CUSTDES;
        }
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"G:\gitlab\avia\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<div class="mainHeader">\n    <div class="avatar">\n        <img src="images/home/avatar.png" style="width:90%"/>\n        <p>{{userName}}</p>\n    </div>\n\n    <div class="headLogo" align="center">\n        <img src="images/home/head_logo.png" style="width: 70%"/>\n    </div>\n\n    <div class="bar" menuToggle side="right">\n        <img src="images/home/side_bar.png" style="width: 70%"/>\n    </div>\n\n</div>\n'/*ion-inline-end:"G:\gitlab\avia\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    FooterComponent.prototype.NavigatePage = function (pageNum) {
        switch (pageNum) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_contact_contact__["a" /* ContactPage */]);
                break;
            case 5:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__["a" /* UserDetailsPage */]);
                break;
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"G:\gitlab\avia\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<div>\n\n  <table>\n\n      <tr>\n\n          <td (click)="NavigatePage(5)">\n\n              <img src="images/home/fi3.png" class="borderLeft" style="width: 100%" />\n\n          </td>\n\n          <td>\n\n              <img src="images/home/fi2.png" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(1)">\n\n              <img src="images/home/fi1.png" style="width: 100%" />\n\n          </td>\n\n      </tr>\n\n  </table>\n\n</div>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the EditRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditRowComponent = /** @class */ (function () {
    function EditRowComponent() {
        this.isOpen = false;
    }
    EditRowComponent.prototype.ngOnInit = function () {
        console.log("Details1 : ", this.Data[this.jsonKey], this.jsonKey);
    };
    EditRowComponent.prototype.editRow = function () {
        this.isOpen = this.isOpen == true ? false : true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditRowComponent.prototype, "jsonKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditRowComponent.prototype, "Data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EditRowComponent.prototype, "Title", void 0);
    EditRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-row',template:/*ion-inline-start:"G:\gitlab\avia\src\components\edit-row\edit-row.html"*/'<!-- Generated template for the EditRowComponent component -->\n\n<div>\n\n    <div class="fullRow">\n\n        <div class="nonEditRow" *ngIf="!isOpen" (click)="editRow()">\n\n            <div class="rowRight">\n\n                {{Title}} : {{Data[jsonKey]}}\n\n            </div>\n\n            <div class="rowLeft">\n\n                <img src="images/edit.png" style="width: 100%">\n\n            </div>\n\n        </div>\n\n        <div class="EditRow" *ngIf="isOpen">\n\n            <img src="images/edit.png" class="absoluteEditButton" (click)="editRow()">\n\n            <input type="text" class="inputText MT10" value="" [(ngModel)]="Data[jsonKey]"\n\n                   [placeholder]="Title"/>\n\n        </div>\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\edit-row\edit-row.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EditRowComponent);
    return EditRowComponent;
}());

//# sourceMappingURL=edit-row.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addcontact_addcontact__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, server, Toast, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.callNumber = callNumber;
        this.contactsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')/CUSTPERSONNEL_SUBFORM?$filter=INACTIVE ne 'Y'";
        this.server.GetData(URL).then(function (data) {
            _this.contactsArray = data.json().value;
            console.log(_this.contactsArray);
        });
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.callPhone = function (phone) {
        if (!phone) {
            this.Toast.presentToast("לא הוזן מספר טלפון");
        }
        else {
            this.callNumber.callNumber(phone, true);
        }
    };
    ContactsPage.prototype.AddContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addcontact_addcontact__["a" /* AddcontactPage */]);
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\contacts\contacts.html"*/'<!--\n\n  Generated template for the ContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of contactsArray let i=index">\n\n      <ion-thumbnail item-end >\n\n        <img src="images/avatar.png">\n\n      </ion-thumbnail>\n\n      <div float-right>\n\n        <h2>{{item.NAME}}</h2>\n\n        <p>{{item.CELLPHONE}}</p>\n\n        <p>{{item.EMAIL}}</p>\n\n      </div>\n\n\n\n      <button ion-button clear item-left (click)="callPhone(item.CELLPHONE)">\n\n        <ion-icon name="call" style="font-size:30px;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n  <button ion-button full style="background-color: #6eb43f" (click)="AddContactPage()">הוספת איש קשר חדש</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailsPage = /** @class */ (function () {
    function UserDetailsPage(navCtrl, navParams, server, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.inputFlags = {
            'mobile': false,
            'phone': false,
            'fax': false,
            'mail': false,
            'address': false,
            'city': false,
            'zip': false,
        };
        this.userData = JSON.parse(localStorage.getItem("userData"));
        console.log("Details : ", this.userData);
    }
    UserDetailsPage.prototype.ngOnInit = function () {
        console.log("Details1 : ", this.userData);
    };
    UserDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailsPage');
    };
    UserDetailsPage.prototype.editRow = function (row) {
        console.log(row);
        this.inputFlags[row] = this.inputFlags[row] == true ? false : true;
    };
    UserDetailsPage.prototype.saveDetails = function () {
        var _this = this;
        console.log("1111", this.userData);
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
        var sendData = {
            "LOADCODE": "1",
            "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
            "CUSTDES": this.userData.CUSTDES,
            "ADDRESS": this.userData.ADDRESS,
            "CITY": this.userData.STATE,
            "ZIP": this.userData.ZIP,
            "PHONE1": this.userData.PHONE,
            "PHONE2": this.userData.AVI_PHONE2,
            "PHONE3": this.userData.AVI_PHONE3,
            "PHONE4": this.userData.FAX,
            "EMAIL": this.userData.EMAIL,
            "PASSWORD": this.userData.PRIT_PASSWORD,
            "PRIT_INTERFACE_SUBFORM": [
                {
                    "EXECUTE": "Y"
                }
            ]
        };
        this.server.SendPost(URL, sendData).then(function (data) {
            console.log("response", data);
            var response = data;
            if (response.ok) {
                _this.Toast.presentToast("עידכון פרטים התבצע בהצלחה");
                localStorage.userData = JSON.stringify(_this.userData);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
            else {
                _this.Toast.presentToast("שגיאה, יש לנסות שוב");
            }
        });
    };
    UserDetailsPage.prototype.goContactsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* ContactsPage */]);
    };
    UserDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-details',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\user-details\user-details.html"*/'<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <div class="info">\n\n            <div class="MainAvatar">\n\n                <img src="images/avatar.png" style="width: 20%">\n\n                <div>{{userData.CUSTDES}}</div>\n\n                <div>{{userData.CUSTNAME}}</div>\n\n            </div>\n\n\n\n            <edit-row jsonKey="CUSTDES" Title = "שם לקוח" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="ADDRESS" Title = "כתובת" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="STATE" Title = "עיר" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="ZIP" Title = "מיקוד" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="PHONE" Title = "טלפון נייד" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE2" Title = "טלפון 2" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE3" Title = "טלפון 3" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="FAX" Title = "פקס" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="EMAIL" Title = "אימייל" [Data]="userData"> </edit-row>\n\n            <edit-row jsonKey="PRIT_PASSWORD" Title = "סיסמא" [Data]="userData"> </edit-row>\n\n\n\n\n\n            <div class="buttons">\n\n                <button ion-button full style="background-color: #6eb43f" (click)="saveDetails()">עדכן פרטים</button>\n\n                <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="goContactsPage()">אנשי קשר</button>\n\n            </div>\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\user-details\user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());

//# sourceMappingURL=user-details.js.map

/***/ })

},[478]);
//# sourceMappingURL=main.js.map