webpackJsonp([9],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(28);
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
            selector: 'page-addcontact',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\addcontact\addcontact.html"*/'<!--\n  Generated template for the AddcontactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="info">\n\n\n    <edit-row jsonKey="NAME" Title = "שם לקוח" [Data]="contactFields" FieldType="text"> </edit-row>\n    <edit-row jsonKey="PHONENUM" Title = "טלפון" [Data]="contactFields" FieldType="tel"> </edit-row>\n    <edit-row jsonKey="CELLPHONE" Title = "טלפון נייד" [Data]="contactFields" FieldType="tel"> </edit-row>\n    <edit-row jsonKey="HOMEPHONE" Title = "תעודת זהות" [Data]="contactFields" FieldType="tel"> </edit-row>\n    <edit-row jsonKey="EMAIL" Title = "דואר אלקטרוני" [Data]="contactFields" FieldType="email"> </edit-row>\n\n\n\n    <div class="buttons">\n      <button ion-button full style="background-color: #6eb43f" (click)="saveContact()">שלח</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\addcontact\addcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(28);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header xmlns="http://www.w3.org/1999/html">\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="info">\n    <div class="MainAvatar">\n      <img src="images/footeric1.png" style="width: 20%">\n    </div>\n\n    <div>\n      <div class="fullRow">\n        <div class="EditRow" >\n          <select class="inputText MT10" [(ngModel)]="contactFields.subject">\n            <option value="">נושא הפניה</option>\n            <option [value]="0" >תמיכה טכנית</option>\n            <option [value]="1" >פניית שירות</option>\n            <option [value]="2" >אחר</option>\n          </select>\n        </div>\n\n        <div class="EditRow" >\n          <textarea  class="inputText MT10" value="" [(ngModel)]="contactFields.desc"  dir="rtl" placeholder="הכנס פרטים (עד 50 תווים)" maxlength="50"></textarea>\n        </div>\n      </div>\n    </div>\n\n\n    <div class="buttons">\n      <button ion-button full style="background-color: #6eb43f" (click)="sendContact()">שלח</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectedproducts_selectedproducts__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, server, Toast, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.modalCtrl = modalCtrl;
        this.productsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        this.selectedPullItems = false;
        this.selectedReturnItems = false;
        this.countedSelected = 0;
        this.showSelectedFooter = false;
        this.caluclateProductPrice = 0;
        this.selectedDayArray = [];
        this.toggleCheckBox = false;
        this.selectedPullType = 0;
        this.productsSendArray = [];
        this.todaydate = __WEBPACK_IMPORTED_MODULE_5_moment___default()().format();
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'";
        this.server.GetData(URL).then(function (data) {
            _this.productsArray = data.json().value;
            for (var i = 0; i < _this.productsArray.length; i++) {
                _this.productsArray[i].choosen = "0";
            }
            console.log(_this.productsArray);
        });
    }
    ProductsPage.prototype.ToggleCheckBox = function (type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;
        if (this.selectedPullType == 0) {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;
            if (this.selectedPullItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }
        if (this.selectedPullType == 1) {
            this.selectedPullItems = false;
            this.selectedReturnItems = !this.selectedReturnItems;
            if (this.selectedReturnItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }
        if (!this.toggleCheckBox) {
            this.showSelectedFooter = false;
        }
    };
    ProductsPage.prototype.selectProduct = function (row) {
        this.countedSelected = 0;
        this.caluclateProductPrice = 0;
        for (var i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice + row.PRIT_PRICEOUT;
            }
        }
        if (this.countedSelected > 0) {
            this.showSelectedFooter = true;
        }
        else {
            this.showSelectedFooter = false;
        }
    };
    ProductsPage.prototype.resetChoosen = function () {
        for (var i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                this.productsArray[i].choosen = false;
            }
        }
    };
    ProductsPage.prototype.openProductsModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ProductsModal;
            return __generator(this, function (_a) {
                ProductsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__selectedproducts_selectedproducts__["a" /* SelectedproductsPage */], { products: this.productsArray, page: 'products' });
                ProductsModal.present();
                this.todaydate = __WEBPACK_IMPORTED_MODULE_5_moment___default()().format();
                ProductsModal.onDidDismiss(function (data) {
                    console.log("dismiss: ", data);
                    _this.countedSelected = 0;
                    _this.caluclateProductPrice = 0;
                    _this.showSelectedFooter = false;
                    _this.selectedPullItems = false;
                    _this.toggleCheckBox = false;
                    _this.selectedPullItems = false;
                    _this.selectedReturnItems = false;
                    _this.productsSendArray = [];
                    if (data[0].type == 1) {
                        //send data
                        for (var i = 0; i < data[0].days.length; i++) {
                            if (data[0].days[i].choosen) {
                                _this.selectedDayArray = data[0].days[i];
                            }
                        }
                        for (var i = 0; i < _this.productsArray.length; i++) {
                            if (_this.productsArray[i].choosen == true) {
                                _this.productsSendArray.push({
                                    "PARTNAME": _this.productsArray[i].PARTNAME,
                                    "SERNUM": _this.productsArray[i].SERNUM,
                                    "DUEDATE": _this.todaydate,
                                    "TASKDATE": __WEBPACK_IMPORTED_MODULE_5_moment___default()(_this.selectedDayArray.date, 'YYYY-MM-DD').format(),
                                    "FROMDATE": __WEBPACK_IMPORTED_MODULE_5_moment___default()(_this.selectedDayArray.date + ' ' + _this.selectedDayArray.start_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format(),
                                    "TODATE": __WEBPACK_IMPORTED_MODULE_5_moment___default()(_this.selectedDayArray.date + ' ' + _this.selectedDayArray.end_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format() /* עד שעה למשימה*/
                                });
                            }
                        }
                        console.log("productsSendArray:", _this.productsSendArray);
                        //send to server//
                        var TYPECODE = void 0;
                        if (_this.selectedPullType == 0)
                            TYPECODE = "13";
                        else
                            TYPECODE = "14";
                        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                        var sendData = {
                            "LOADCODE": "3",
                            "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                            "DOCDATE": _this.todaydate,
                            "TYPECODE": TYPECODE,
                            "PRIT_DOCLINE_SUBFORM": _this.productsSendArray,
                            "PRIT_INTERFACE_SUBFORM": [
                                {
                                    "EXECUTE": "Y"
                                }
                            ]
                        };
                        console.log("sent data11:", JSON.stringify(sendData));
                        _this.server.SendPost(URL, sendData).then(function (data) {
                            console.log(data);
                            var response = data;
                            if (response.ok) {
                                _this.Toast.presentToast("נשלח בהצלחה");
                            }
                            else {
                                _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                            }
                        });
                    }
                    else if (data[0].type == 0) {
                        _this.Toast.presentToast("פעולה בוטלה");
                    }
                    _this.resetChoosen();
                });
                return [2 /*return*/];
            });
        });
    };
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
            var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
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
            this.server.SendPost(URL, sendData).then(function (data) {
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
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\products\products.html"*/'<!--\n\n  Generated template for the ProductsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="buttonsBar">\n\n        <div class="buttonsBarLeft">\n\n            <button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(1)"> החזרת פריטים</button>\n\n        </div>\n\n        <div class="buttonsBarRight">\n\n            <button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(0)"> שליפת פריטים</button>\n\n        </div>\n\n    </div>\n\n    <div class="products">\n\n        <div *ngFor="let item of productsArray let i=index" class="productItem">\n\n            <div *ngIf="!item.STATUS || item.STATUS == 0">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <ion-checkbox [(ngModel)]="item.choosen" *ngIf="toggleCheckBox"  (click)="selectProduct(item)" ></ion-checkbox>\n\n\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <img src="images/avatar.png"  style="width: 100%" />\n\n                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}} </div>\n\n                        <div> {{item.FREE1}}</div>\n\n                        <div> {{item.PRIT_FREE}}</div>\n\n                    </div>\n\n                    <div class="productEdit" (click)="changeStatus(i,1)">\n\n                        <img src="images/edit.png" style="width: 100%" />\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="item.STATUS == 1">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <img src="images/avatar.png"  style="width: 100%" />                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}}</div>\n\n                        <div> {{item.FREE1}}</div>\n\n                    </div>\n\n\n\n                    <textarea rows="4" cols="50" [(ngModel)]="item.PRIT_FREE"> </textarea>\n\n                    <button ion-button class="editButton" (click)="changeStatus(i,0)"> סיים עריכה</button>\n\n                </div>\n\n                <!-- <img src="images/edit.png" style="width:5%" (click)="changeStatus(i,0)"/>\n\n                <div>6666767676767676767</div> -->\n\n            </div>\n\n            <hr>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="showSelectedFooter">\n\n        <div class="buttons">\n\n            <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n\n            <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n\n        </div>\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _e || Object])
    ], ProductsPage);
    return ProductsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(27);
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
 * Generated class for the SelectedproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectedproductsPage = /** @class */ (function () {
    function SelectedproductsPage(navCtrl, navParams, viewCtrl, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.Toast = Toast;
        this.caluclateProductPrice = 0;
        this.countSelectedDays = 0;
        this.myProducts = [];
        this.pageName = '';
        this.daysOptions = [
            {
                id: '0',
                day: 'ראשון',
                date: '1988-01-01',
                dateformatted: '01/01/1988',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '1',
                day: 'שני',
                date: '1988-01-01',
                dateformatted: '01/01/1988',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '2',
                day: 'שלישי',
                date: '1988-01-01',
                dateformatted: '01/01/1988',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '3',
                day: 'רביעי',
                date: '1988-01-01',
                dateformatted: '01/01/1988',
                start_hour: '17:00',
                end_hour: '18:00',
            },
        ];
        console.log("products:", navParams.get('products'));
        this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');
        this.caluclateProductPrice = 0;
        for (var i = 0; i < this.daysOptions.length; i++) {
            this.daysOptions[i].choosen = false;
        }
        for (var i = 0; i < this.myProducts.length; i++) {
            if (this.myProducts[i].choosen == true) {
                if (this.pageName == "products")
                    this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].PRIT_PRICEOUT;
                else
                    this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].BASEPRICE;
            }
        }
    }
    SelectedproductsPage.prototype.selectDay = function (row) {
        for (var i = 0; i < this.daysOptions.length; i++) {
            if (row.id != this.daysOptions[i].id) {
                this.daysOptions[i].choosen = false;
            }
        }
    };
    SelectedproductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectedproductsPage');
    };
    SelectedproductsPage.prototype.sendSelectedProducts = function (type) {
        var options = [
            {
                type: type,
                days: this.daysOptions
            }
        ];
        if (type == 1) {
            this.countSelectedDays = 0;
            for (var i = 0; i < this.daysOptions.length; i++) {
                if (this.daysOptions[i].choosen == true) {
                    this.countSelectedDays++;
                }
            }
            if (this.countSelectedDays == 0)
                this.Toast.presentToast("יש לבחור יום");
            else {
                this.viewCtrl.dismiss(options);
            }
        }
        else {
            this.viewCtrl.dismiss(options);
        }
    };
    SelectedproductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectedproducts',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/'<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-buttons start>-->\n      <!--<button ion-button (click)="dismiss()">Close</button>-->\n    <!--</ion-buttons>-->\n    <!--<ion-title>Modals</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-header>\n  <div class="mainHeader">\n    <div class="headLogo" align="center">\n      <img src="images/home/head_logo.png" style="width: 70%"/>\n    </div>\n  </div>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="products">\n    <div *ngFor="let item of daysOptions let i=index" class="productItem">\n        <div class="productNumber"> {{item.day}} | {{item.dateformatted}} | {{item.start_hour}} - {{item.end_hour}}</div>\n        <div class="productInfo" >\n          <div class="productEdit" >\n            <ion-checkbox [(ngModel)]="item.choosen" (click)="selectDay(item)"></ion-checkbox>\n          </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n\n\n<ion-footer >\n  <div class="buttons">\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n      <button ion-button color="danger" full (click)="sendSelectedProducts(0)">ביטול</button>\n      <button ion-button full style="background-color: #6eb43f" (click)="sendSelectedProducts(1)">שליחה</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]) === "function" && _d || Object])
    ], SelectedproductsPage);
    return SelectedproductsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=selectedproducts.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectedproducts_selectedproducts__ = __webpack_require__(157);
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
    function RoomsPage(navCtrl, navParams, server, alertCtrl, Toast, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.alertCtrl = alertCtrl;
        this.Toast = Toast;
        this.modalCtrl = modalCtrl;
        this.roomsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        this.selectedPullItems = false;
        this.selectedReturnItems = false;
        this.countedSelected = 0;
        this.showSelectedFooter = false;
        this.caluclateProductPrice = 0;
        this.selectedDayArray = [];
        this.toggleCheckBox = false;
        this.selectedPullType = 0;
        this.productsSendArray = [];
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
            for (var i = 0; i < _this.roomsArray.length; i++) {
                _this.roomsArray[i].choosen = "0";
            }
            console.log(_this.roomsArray);
        });
    };
    RoomsPage.prototype.ToggleCheckBox = function (type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;
        if (this.selectedPullType == 0) {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;
            if (this.selectedPullItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }
        if (this.selectedPullType == 1) {
            this.selectedPullItems = false;
            this.selectedReturnItems = !this.selectedReturnItems;
            if (this.selectedReturnItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }
        if (!this.toggleCheckBox) {
            this.showSelectedFooter = false;
        }
    };
    RoomsPage.prototype.selectProduct = function (row) {
        this.countedSelected = 0;
        this.caluclateProductPrice = 0;
        for (var i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice + row.BASEPRICE;
            }
        }
        if (this.countedSelected > 0) {
            this.showSelectedFooter = true;
        }
        else {
            this.showSelectedFooter = false;
        }
    };
    RoomsPage.prototype.resetChoosen = function () {
        for (var i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.roomsArray[i].choosen = false;
            }
        }
    };
    RoomsPage.prototype.openProductsModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ProductsModal;
            return __generator(this, function (_a) {
                ProductsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__selectedproducts_selectedproducts__["a" /* SelectedproductsPage */], { products: this.roomsArray, page: 'rooms' });
                ProductsModal.present();
                this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
                ProductsModal.onDidDismiss(function (data) {
                    console.log("dismiss: ", data);
                    _this.countedSelected = 0;
                    _this.caluclateProductPrice = 0;
                    _this.showSelectedFooter = false;
                    _this.selectedPullItems = false;
                    _this.toggleCheckBox = false;
                    _this.selectedPullItems = false;
                    _this.selectedReturnItems = false;
                    _this.productsSendArray = [];
                    if (data[0].type == 1) {
                        for (var i = 0; i < data[0].days.length; i++) {
                            if (data[0].days[i].choosen) {
                                _this.selectedDayArray = data[0].days[i];
                            }
                        }
                        for (var i = 0; i < _this.roomsArray.length; i++) {
                            if (_this.roomsArray[i].choosen == true) {
                                _this.productsSendArray.push({
                                    "PARTNAME": _this.roomsArray[i].PARTNAME,
                                    "DUEDATE": __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.selectedDayArray.date, 'YYYY-MM-DD').format(),
                                });
                            }
                        }
                        console.log("productsSendArray:", _this.productsSendArray);
                        //send to server//
                        var TYPECODE = void 0;
                        if (_this.selectedPullType == 0)
                            TYPECODE = "13";
                        else
                            TYPECODE = "14";
                        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                        var sendData = {
                            "LOADCODE": "6",
                            "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                            "PRIT_DOCLINE_SUBFORM": _this.productsSendArray,
                            "PRIT_INTERFACE_SUBFORM": [
                                {
                                    "EXECUTE": "Y"
                                }
                            ]
                        };
                        console.log("sent data11:", JSON.stringify(sendData));
                        _this.server.SendPost(URL, sendData).then(function (data) {
                            console.log(data);
                            var response = data;
                            if (response.ok) {
                                _this.Toast.presentToast("נשלח בהצלחה");
                            }
                            else {
                                _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                            }
                        });
                    }
                    else if (data[0].type == 0) {
                        _this.Toast.presentToast("פעולה בוטלה");
                    }
                    _this.resetChoosen();
                });
                return [2 /*return*/];
            });
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
            selector: 'page-rooms',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\rooms\rooms.html"*/'<!--\n  Generated template for the RoomsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="buttonsBar">\n    <div class="buttonsBarLeft">\n      <button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(1)"> החזרת פריטים</button>\n    </div>\n    <div class="buttonsBarRight">\n      <button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(0)"> שליפת פריטים</button>\n    </div>\n  </div>\n\n  <div class="products">\n    <div *ngFor="let item of roomsArray let i=index" class="productItem">\n      <div >\n        <div class="productNumber">  {{item.PDES}}</div>\n        <div class="productInfo" >\n          <div class="productText">\n            <div dir="rtl" style="direction: rtl;"> מספר מוצר: {{item.PARTNAME}}</div>\n            <div dir="rtl" style="direction: rtl;">כמות: {{item.QUANT}} {{item.UNITNAME}}</div>\n            <div dir="rtl" style="direction: rtl;">מחיר: {{item.BASEPRICE}} {{item.OCODE}}</div>\n          </div>\n          <div class="productEdit" >\n            <ion-checkbox [(ngModel)]="item.choosen" *ngIf="toggleCheckBox"  (click)="selectProduct(item)" ></ion-checkbox>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border class="topBorder" *ngIf="!showSelectedFooter">\n  <button ion-button full style="background-color: #6eb43f" (click)="ClearRooms()">פינוי חדרים כללי</button>\n</ion-footer>\n\n\n<ion-footer *ngIf="showSelectedFooter">\n  <div class="buttons">\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n    <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n  </div>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\rooms\rooms.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _f || Object])
    ], RoomsPage);
    return RoomsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(436);
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
            selector: 'page-paymentinfo',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/'<!--\n  Generated template for the PaymentinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <div class="fullRow">\n      <div class="nonEditRow" *ngIf="!cardFieldOpen" >\n        <div class="rowRight">\n          {{jsonResponse.PAYACCOUNT}}\n        </div>\n        <!--<div class="rowLeft">-->\n          <!--<img src="images/edit.png" style="width: 100%">-->\n        <!--</div>-->\n      </div>\n      <!--<div class="EditRow" *ngIf="cardFieldOpen">-->\n        <!--<img src="images/edit.png" class="absoluteEditButton" (click)="ToggleCardField(0)">-->\n        <!--<input type="tel" class="inputText MT10"  [(ngModel)]="jsonResponse.PAYACCOUNT"-->\n               <!--placeholder="4 ספרות אחרונות של כרטיס האשראי"/>-->\n      <!--</div>-->\n\n    </div>\n\n      <div class="fullRow">\n        <div class="nonEditRow" *ngIf="!expirationOpen" >\n          <div class="rowRight">\n            {{jsonResponse.VALIDMONTH}}\n          </div>\n          <!--<div class="rowLeft">-->\n            <!--<img src="images/edit.png" style="width: 100%">-->\n          <!--</div>-->\n        </div>\n        <!--<div class="EditRow" *ngIf="expirationOpen">-->\n          <!--<img src="images/edit.png" class="absoluteEditButton" (click)="ToggleExpirationField(0)">-->\n          <!--<ion-datetime displayFormat="MM/YY" class="inputText MT10" [max]="maxDate" [(ngModel)]="validMonth"></ion-datetime>-->\n        <!--</div>-->\n\n    </div>\n\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="saveCard()">החלף כרטיס</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PaymentinfoPage);
    return PaymentinfoPage;
}());

//# sourceMappingURL=paymentinfo.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(27);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\login\login.html"*/'<ion-content padding>\n\n    <login> </login>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcontact/addcontact.module": [
		818,
		8
	],
	"../pages/contact/contact.module": [
		819,
		7
	],
	"../pages/contacts/contacts.module": [
		820,
		6
	],
	"../pages/login/login.module": [
		821,
		5
	],
	"../pages/paymentinfo/paymentinfo.module": [
		825,
		4
	],
	"../pages/products/products.module": [
		822,
		3
	],
	"../pages/rooms/rooms.module": [
		823,
		2
	],
	"../pages/selectedproducts/selectedproducts.module": [
		824,
		1
	],
	"../pages/user-details/user-details.module": [
		826,
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
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(504);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(310);
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

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(160);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\app\app.html"*/'<ion-menu [content]="content"  side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(484);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_products_products__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_details_user_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(436);
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
                __WEBPACK_IMPORTED_MODULE_19__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addcontact/addcontact.module#AddcontactPageModule', name: 'AddcontactPage', segment: 'addcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectedproducts/selectedproducts.module#SelectedproductsPageModule', name: 'SelectedproductsPage', segment: 'selectedproducts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_19__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_20__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 504:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_details_user_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paymentinfo_paymentinfo__ = __webpack_require__(159);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\home\home.html"*/'<ion-header>\n\n  <!--<ion-navbar>-->\n\n    <!--<button ion-button menuToggle>-->\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n    <!--</button>-->\n\n    <!--<ion-title>Home</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n    <header></header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-slides>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n\n\n    <div class="mainIcons">\n\n        <div class="mainRow" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(4)">\n\n                    <img src="images/home/ic1.png" style="width:100%" />\n\n                    <div class="mainIconTitle">יחידות אכסון</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(3)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic2.png" style="width:100%" />\n\n                    <div class="mainIconTitle">הפריטים שלי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="mainRow topBorder" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic3.png" style="width:100%" />\n\n                    <div class="mainIconTitle">פירוט חיובים</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(6)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic4.png" style="width:100%" />\n\n                    <div class="mainIconTitle">החלפת כרטיסי אשראי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n    <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 313,
	"./af.js": 313,
	"./ar": 314,
	"./ar-dz": 315,
	"./ar-dz.js": 315,
	"./ar-kw": 316,
	"./ar-kw.js": 316,
	"./ar-ly": 317,
	"./ar-ly.js": 317,
	"./ar-ma": 318,
	"./ar-ma.js": 318,
	"./ar-sa": 319,
	"./ar-sa.js": 319,
	"./ar-tn": 320,
	"./ar-tn.js": 320,
	"./ar.js": 314,
	"./az": 321,
	"./az.js": 321,
	"./be": 322,
	"./be.js": 322,
	"./bg": 323,
	"./bg.js": 323,
	"./bm": 324,
	"./bm.js": 324,
	"./bn": 325,
	"./bn.js": 325,
	"./bo": 326,
	"./bo.js": 326,
	"./br": 327,
	"./br.js": 327,
	"./bs": 328,
	"./bs.js": 328,
	"./ca": 329,
	"./ca.js": 329,
	"./cs": 330,
	"./cs.js": 330,
	"./cv": 331,
	"./cv.js": 331,
	"./cy": 332,
	"./cy.js": 332,
	"./da": 333,
	"./da.js": 333,
	"./de": 334,
	"./de-at": 335,
	"./de-at.js": 335,
	"./de-ch": 336,
	"./de-ch.js": 336,
	"./de.js": 334,
	"./dv": 337,
	"./dv.js": 337,
	"./el": 338,
	"./el.js": 338,
	"./en-au": 339,
	"./en-au.js": 339,
	"./en-ca": 340,
	"./en-ca.js": 340,
	"./en-gb": 341,
	"./en-gb.js": 341,
	"./en-ie": 342,
	"./en-ie.js": 342,
	"./en-il": 343,
	"./en-il.js": 343,
	"./en-nz": 344,
	"./en-nz.js": 344,
	"./eo": 345,
	"./eo.js": 345,
	"./es": 346,
	"./es-do": 347,
	"./es-do.js": 347,
	"./es-us": 348,
	"./es-us.js": 348,
	"./es.js": 346,
	"./et": 349,
	"./et.js": 349,
	"./eu": 350,
	"./eu.js": 350,
	"./fa": 351,
	"./fa.js": 351,
	"./fi": 352,
	"./fi.js": 352,
	"./fo": 353,
	"./fo.js": 353,
	"./fr": 354,
	"./fr-ca": 355,
	"./fr-ca.js": 355,
	"./fr-ch": 356,
	"./fr-ch.js": 356,
	"./fr.js": 354,
	"./fy": 357,
	"./fy.js": 357,
	"./gd": 358,
	"./gd.js": 358,
	"./gl": 359,
	"./gl.js": 359,
	"./gom-latn": 360,
	"./gom-latn.js": 360,
	"./gu": 361,
	"./gu.js": 361,
	"./he": 362,
	"./he.js": 362,
	"./hi": 363,
	"./hi.js": 363,
	"./hr": 364,
	"./hr.js": 364,
	"./hu": 365,
	"./hu.js": 365,
	"./hy-am": 366,
	"./hy-am.js": 366,
	"./id": 367,
	"./id.js": 367,
	"./is": 368,
	"./is.js": 368,
	"./it": 369,
	"./it.js": 369,
	"./ja": 370,
	"./ja.js": 370,
	"./jv": 371,
	"./jv.js": 371,
	"./ka": 372,
	"./ka.js": 372,
	"./kk": 373,
	"./kk.js": 373,
	"./km": 374,
	"./km.js": 374,
	"./kn": 375,
	"./kn.js": 375,
	"./ko": 376,
	"./ko.js": 376,
	"./ky": 377,
	"./ky.js": 377,
	"./lb": 378,
	"./lb.js": 378,
	"./lo": 379,
	"./lo.js": 379,
	"./lt": 380,
	"./lt.js": 380,
	"./lv": 381,
	"./lv.js": 381,
	"./me": 382,
	"./me.js": 382,
	"./mi": 383,
	"./mi.js": 383,
	"./mk": 384,
	"./mk.js": 384,
	"./ml": 385,
	"./ml.js": 385,
	"./mn": 386,
	"./mn.js": 386,
	"./mr": 387,
	"./mr.js": 387,
	"./ms": 388,
	"./ms-my": 389,
	"./ms-my.js": 389,
	"./ms.js": 388,
	"./mt": 390,
	"./mt.js": 390,
	"./my": 391,
	"./my.js": 391,
	"./nb": 392,
	"./nb.js": 392,
	"./ne": 393,
	"./ne.js": 393,
	"./nl": 394,
	"./nl-be": 395,
	"./nl-be.js": 395,
	"./nl.js": 394,
	"./nn": 396,
	"./nn.js": 396,
	"./pa-in": 397,
	"./pa-in.js": 397,
	"./pl": 398,
	"./pl.js": 398,
	"./pt": 399,
	"./pt-br": 400,
	"./pt-br.js": 400,
	"./pt.js": 399,
	"./ro": 401,
	"./ro.js": 401,
	"./ru": 402,
	"./ru.js": 402,
	"./sd": 403,
	"./sd.js": 403,
	"./se": 404,
	"./se.js": 404,
	"./si": 405,
	"./si.js": 405,
	"./sk": 406,
	"./sk.js": 406,
	"./sl": 407,
	"./sl.js": 407,
	"./sq": 408,
	"./sq.js": 408,
	"./sr": 409,
	"./sr-cyrl": 410,
	"./sr-cyrl.js": 410,
	"./sr.js": 409,
	"./ss": 411,
	"./ss.js": 411,
	"./sv": 412,
	"./sv.js": 412,
	"./sw": 413,
	"./sw.js": 413,
	"./ta": 414,
	"./ta.js": 414,
	"./te": 415,
	"./te.js": 415,
	"./tet": 416,
	"./tet.js": 416,
	"./tg": 417,
	"./tg.js": 417,
	"./th": 418,
	"./th.js": 418,
	"./tl-ph": 419,
	"./tl-ph.js": 419,
	"./tlh": 420,
	"./tlh.js": 420,
	"./tr": 421,
	"./tr.js": 421,
	"./tzl": 422,
	"./tzl.js": 422,
	"./tzm": 423,
	"./tzm-latn": 424,
	"./tzm-latn.js": 424,
	"./tzm.js": 423,
	"./ug-cn": 425,
	"./ug-cn.js": 425,
	"./uk": 426,
	"./uk.js": 426,
	"./ur": 427,
	"./ur.js": 427,
	"./uz": 428,
	"./uz-latn": 429,
	"./uz-latn.js": 429,
	"./uz.js": 428,
	"./vi": 430,
	"./vi.js": 430,
	"./x-pseudo": 431,
	"./x-pseudo.js": 431,
	"./yo": 432,
	"./yo.js": 432,
	"./zh-cn": 433,
	"./zh-cn.js": 433,
	"./zh-hk": 434,
	"./zh-hk.js": 434,
	"./zh-tw": 435,
	"./zh-tw.js": 435
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
webpackContext.id = 794;

/***/ }),

/***/ 812:
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__ = __webpack_require__(817);
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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(27);
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
            selector: 'login',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n\n\n\n    <div>\n\n        <div class="mainLogo">\n\n            <img src="images/logo.png" style="width: 100%">\n\n        </div>\n\n\n\n        <div class="loginForm">\n\n            <input type="text" class="inputText" value="" [(ngModel)]="UserId" placeholder="הכנס מייל "/>\n\n            <input type="text" class="inputText MT10" value="" [(ngModel)]="Password"  placeholder="הכנס סיסמה "/>\n\n        </div>\n\n\n\n        <button ion-button color="dark" full class="MT20" (click)="LogIn()">כניסה</button>\n\n        <p >שכחת סיסמה ?</p>\n\n    </div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 815:
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
            selector: 'header',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n<div class="mainHeader">\n\n    <div class="avatar">\n\n        <img src="images/home/avatar.png" style="width:90%"/>\n\n        <p>{{userName}}</p>\n\n    </div>\n\n\n\n    <div class="headLogo" align="center">\n\n        <img src="images/home/head_logo.png" style="width: 70%"/>\n\n    </div>\n\n\n\n    <div class="bar" menuToggle side="right">\n\n        <img src="images/home/side_bar.png" style="width: 70%"/>\n\n    </div>\n\n\n\n</div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 816:
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
            selector: 'footer',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<div>\n\n  <table>\n\n      <tr>\n\n          <td (click)="NavigatePage(5)">\n\n              <img src="images/home/fi3.png" class="borderLeft" style="width: 100%" />\n\n          </td>\n\n          <td>\n\n              <img src="images/home/fi2.png" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(1)">\n\n              <img src="images/home/fi1.png" style="width: 100%" />\n\n          </td>\n\n      </tr>\n\n  </table>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 817:
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EditRowComponent.prototype, "FieldType", void 0);
    EditRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-row',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\edit-row\edit-row.html"*/'<!-- Generated template for the EditRowComponent component -->\n\n<div>\n\n    <div class="fullRow">\n\n        <div class="nonEditRow" *ngIf="!isOpen" (click)="editRow()">\n\n            <div class="rowRight">\n\n                {{Title}} : {{Data[jsonKey]}}\n\n            </div>\n\n            <div class="rowLeft">\n\n                <img src="images/edit.png" style="width: 100%">\n\n            </div>\n\n        </div>\n\n        <div class="EditRow" *ngIf="isOpen">\n\n            <img src="images/edit.png" class="absoluteEditButton" (click)="editRow()">\n\n            <input [type]="FieldType" class="inputText MT10" value="" [(ngModel)]="Data[jsonKey]"\n\n                   [placeholder]="Title"/>\n\n        </div>\n\n    </div>\n\n</div>\n\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\edit-row\edit-row.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(311);
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
            selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contacts\contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of contactsArray let i=index">\n      <ion-thumbnail item-end >\n        <img src="images/avatar.png">\n      </ion-thumbnail>\n      <div float-right>\n        <h2>{{item.NAME}}</h2>\n        <p>{{item.CELLPHONE}}</p>\n        <p>{{item.EMAIL}}</p>\n      </div>\n\n      <button ion-button clear item-left (click)="callPhone(item.CELLPHONE)">\n        <ion-icon name="call" style="font-size:30px;"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer no-border class="topBorder">\n  <button ion-button full style="background-color: #6eb43f" (click)="AddContactPage()">הוספת איש קשר חדש</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__(28);
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
            selector: 'page-user-details',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\user-details\user-details.html"*/'<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <div class="info">\n\n            <div class="MainAvatar">\n\n                <img src="images/avatar.png" style="width: 20%">\n\n                <div>{{userData.CUSTDES}}</div>\n\n                <div>{{userData.CUSTNAME}}</div>\n\n            </div>\n\n\n\n            <edit-row jsonKey="CUSTDES" Title = "שם לקוח" [Data]="userData" FieldType="text"> </edit-row>\n\n            <edit-row jsonKey="ADDRESS" Title = "כתובת" [Data]="userData" FieldType="text"> </edit-row>\n\n            <edit-row jsonKey="STATE" Title = "עיר" [Data]="userData" FieldType="text"> </edit-row>\n\n            <edit-row jsonKey="ZIP" Title = "מיקוד" [Data]="userData" FieldType="tel"> </edit-row>\n\n            <edit-row jsonKey="PHONE" Title = "טלפון נייד" [Data]="userData" FieldType="tel"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE2" Title = "טלפון 2" [Data]="userData" FieldType="tel"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE3" Title = "טלפון 3" [Data]="userData" FieldType="tel"> </edit-row>\n\n            <edit-row jsonKey="FAX" Title = "פקס" [Data]="userData" FieldType="tel"> </edit-row>\n\n            <edit-row jsonKey="EMAIL" Title = "אימייל" [Data]="userData" FieldType="email"> </edit-row>\n\n            <edit-row jsonKey="PRIT_PASSWORD" Title = "סיסמא" [Data]="userData" FieldType="text"> </edit-row>\n\n\n\n\n\n            <div class="buttons">\n\n                <button ion-button full style="background-color: #6eb43f" (click)="saveDetails()">עדכן פרטים</button>\n\n                <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="goContactsPage()">אנשי קשר</button>\n\n            </div>\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\user-details\user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());

//# sourceMappingURL=user-details.js.map

/***/ })

},[479]);
//# sourceMappingURL=main.js.map