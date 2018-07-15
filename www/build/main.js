webpackJsonp([11],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(66);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header xmlns="http://www.w3.org/1999/html">\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="info">\n    <div class="MainAvatar">\n      <img src="images/footeric1.png" style="width: 20%">\n    </div>\n\n    <div>\n      <div class="fullRow">\n        <div class="EditRow" >\n          <select class="inputText MT10" [(ngModel)]="contactFields.subject">\n            <option value="">נושא הפניה</option>\n            <option [value]="0" >תמיכה טכנית</option>\n            <option [value]="1" >פניית שירות</option>\n            <option [value]="2" >אחר</option>\n          </select>\n        </div>\n\n        <div class="EditRow" >\n          <textarea  class="inputText MT10" value="" [(ngModel)]="contactFields.desc"  dir="rtl" placeholder="הכנס פרטים (עד 50 תווים)" maxlength="50"></textarea>\n        </div>\n      </div>\n    </div>\n\n\n    <div class="buttons">\n      <button ion-button full style="background-color: #6eb43f" (click)="sendContact()">שלח</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectedproducts_selectedproducts__ = __webpack_require__(160);
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
                                    "FROMDATE": __WEBPACK_IMPORTED_MODULE_5_moment___default()('1988-01-01 ' + _this.selectedDayArray.start_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format(),
                                    "TODATE": __WEBPACK_IMPORTED_MODULE_5_moment___default()('1988-01-01 ' + _this.selectedDayArray.end_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format() /* עד שעה למשימה*/
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
                        var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
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
                        _this.server.SendPost(URL_1, sendData).then(function (data) {
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
            var URL_2 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
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
            this.server.SendPost(URL_2, sendData).then(function (data) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\products\products.html"*/'<!--\n\n  Generated template for the ProductsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="buttonsBar">\n\n        <div class="buttonsBarLeft">\n\n            <button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(1)"> החזרת פריטים</button>\n\n        </div>\n\n        <div class="buttonsBarRight">\n\n            <button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(0)"> שליפת פריטים</button>\n\n        </div>\n\n    </div>\n\n    <div class="products">\n\n        <div *ngFor="let item of productsArray let i=index" class="productItem">\n\n            <div *ngIf="!item.STATUS || item.STATUS == 0">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <ion-checkbox [(ngModel)]="item.choosen" *ngIf="toggleCheckBox"  (click)="selectProduct(item)" ></ion-checkbox>\n\n\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <img src="images/avatar.png"  style="width: 100%" />\n\n                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}} </div>\n\n                        <div> {{item.FREE1}}</div>\n\n                        <div> {{item.PRIT_FREE}}</div>\n\n                    </div>\n\n                    <div class="productEdit" (click)="changeStatus(i,1)">\n\n                        <img src="images/edit.png" style="width: 100%" />\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="item.STATUS == 1">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="productInfo" >\n\n                    <div class="productImage">\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <img src="images/avatar.png"  style="width: 100%" />                    </div>\n\n                    <div class="productText">\n\n                        <div> {{item.PARTDES}}</div>\n\n                        <div> {{item.FREE1}}</div>\n\n                    </div>\n\n\n\n                    <textarea rows="4" cols="50" [(ngModel)]="item.PRIT_FREE"> </textarea>\n\n                    <button ion-button class="editButton" (click)="changeStatus(i,0)"> סיים עריכה</button>\n\n                </div>\n\n                <!-- <img src="images/edit.png" style="width:5%" (click)="changeStatus(i,0)"/>\n\n                <div>6666767676767676767</div> -->\n\n            </div>\n\n            <hr>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="showSelectedFooter">\n\n        <div class="buttons">\n\n            <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n\n            <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n\n        </div>\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
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
                date: '2018-01-01',
                dateformatted: '01/01/2018',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '1',
                day: 'שני',
                date: '2018-01-01',
                dateformatted: '01/01/2018',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '2',
                day: 'שלישי',
                date: '2018-01-01',
                dateformatted: '01/01/2018',
                start_hour: '17:00',
                end_hour: '18:00',
            },
            {
                id: '3',
                day: 'רביעי',
                date: '2018-01-01',
                dateformatted: '01/01/2018',
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
                this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].PRIT_PRICEOUT;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selectedproducts',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/'<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-buttons start>-->\n      <!--<button ion-button (click)="dismiss()">Close</button>-->\n    <!--</ion-buttons>-->\n    <!--<ion-title>Modals</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-header>\n  <div class="mainHeader">\n    <div class="headLogo" align="center">\n      <img src="images/home/head_logo.png" style="width: 70%"/>\n    </div>\n  </div>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="products">\n    <div *ngFor="let item of daysOptions let i=index" class="productItem">\n        <div class="productNumber"> {{item.day}} | {{item.dateformatted}} | {{item.start_hour}} - {{item.end_hour}}</div>\n        <div class="productInfo" >\n          <div class="productEdit" >\n            <ion-checkbox [(ngModel)]="item.choosen" (click)="selectDay(item)"></ion-checkbox>\n          </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n\n\n<ion-footer >\n  <div class="buttons">\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n      <button ion-button color="danger" full (click)="sendSelectedProducts(0)">ביטול</button>\n      <button ion-button full style="background-color: #6eb43f" (click)="sendSelectedProducts(1)">שליחה</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], SelectedproductsPage);
    return SelectedproductsPage;
}());

//# sourceMappingURL=selectedproducts.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__roomscalendar_roomscalendar__ = __webpack_require__(162);
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
        this.selectedReturnItems = false;
        this.countedSelected = 0;
        this.showSelectedFooter = false;
        this.caluclateProductPrice = 0;
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
        this.selectedPullType = type;
        if (this.selectedPullType == 1) {
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
                ProductsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__roomscalendar_roomscalendar__["a" /* RoomscalendarPage */], { products: this.roomsArray, page: 'rooms' });
                ProductsModal.present();
                this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
                ProductsModal.onDidDismiss(function (data) {
                    console.log("dismiss: ", data);
                    _this.countedSelected = 0;
                    _this.caluclateProductPrice = 0;
                    _this.showSelectedFooter = false;
                    _this.toggleCheckBox = false;
                    _this.selectedReturnItems = false;
                    _this.productsSendArray = [];
                    if (data[0].type == 1) {
                        for (var i = 0; i < _this.roomsArray.length; i++) {
                            if (_this.roomsArray[i].choosen == true) {
                                _this.productsSendArray.push({
                                    "PARTNAME": _this.roomsArray[i].PARTNAME,
                                    "DUEDATE": data[0].date,
                                });
                            }
                        }
                        console.log("productsSendArray:", _this.productsSendArray);
                        //send to server//
                        var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
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
                        _this.server.SendPost(URL_1, sendData).then(function (data) {
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
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rooms',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\rooms\rooms.html"*/'<!--\n  Generated template for the RoomsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="buttonsBar">\n    <button ion-button full style="background-color: #7f7f7f"  (click)="ToggleCheckBox(1)">הודעה על פינוי</button>\n  </div>\n\n  <div class="products">\n    <div *ngFor="let item of roomsArray let i=index" class="productItem">\n      <div >\n        <div class="productNumber">  {{item.PDES}}</div>\n        <div class="productInfo" >\n          <div class="productText">\n            <div dir="rtl" style="direction: rtl;"> מספר מוצר: {{item.PARTNAME}}</div>\n            <div dir="rtl" style="direction: rtl;">כמות: {{item.QUANT}} {{item.UNITNAME}}</div>\n            <div dir="rtl" style="direction: rtl;">מחיר: {{item.BASEPRICE}} {{item.OCODE}}</div>\n          </div>\n          <div class="productEdit" >\n            <ion-checkbox [(ngModel)]="item.choosen" *ngIf="toggleCheckBox"  (click)="selectProduct(item)" ></ion-checkbox>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n  </div>\n</ion-content>\n\n<!--<ion-footer no-border class="topBorder" *ngIf="!showSelectedFooter">-->\n  <!--<button ion-button full style="background-color: #6eb43f" (click)="ClearRooms()">פינוי חדרים כללי</button>-->\n<!--</ion-footer>-->\n\n\n<ion-footer *ngIf="showSelectedFooter">\n  <div class="buttons">\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice}} ש"ח</button>\n    <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n  </div>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\rooms\rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomscalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the RoomscalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomscalendarPage = /** @class */ (function () {
    function RoomscalendarPage(navCtrl, navParams, viewCtrl, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.Toast = Toast;
        this.myProducts = [];
        this.pageName = '';
        this.selectedDate = '';
        this.optionsMulti = {
            pickMode: 'single',
            //monthPickerFormat : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            weekdays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
            weekStart: 0,
            disableWeeks: [6]
        };
        console.log("products:", navParams.get('products'));
        this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');
    }
    RoomscalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomscalendarPage');
    };
    RoomscalendarPage.prototype.onChange = function (event) {
        console.log(event);
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(event.format('YYYY-MM-DD'), 'YYYY-MM-DD').format();
    };
    RoomscalendarPage.prototype.closeModal = function (type) {
        var options = [
            {
                type: type,
                date: this.selectedDate,
            }
        ];
        if (type == 1) {
            if (!this.selectedDate) {
                this.Toast.presentToast("יש תחילה לבחור תאריך");
            }
            else {
                this.viewCtrl.dismiss(options);
            }
        }
        else {
            this.viewCtrl.dismiss(options);
        }
    };
    RoomscalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-roomscalendar',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\roomscalendar\roomscalendar.html"*/'<ion-header>\n  <div class="mainHeader">\n    <div class="headLogo" align="center">\n      <img src="images/home/head_logo.png" style="width: 70%"/>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-calendar [(ngModel)]="date"\n                (onChange)="onChange($event)"\n                [type]="type"\n                [format]="\'YYYY-MM-DD\'"\n                [options]="optionsMulti">\n  </ion-calendar>\n\n</ion-content>\n\n\n<ion-footer >\n  <div class="buttons">\n    <button ion-button color="danger" full (click)="closeModal(0)">ביטול</button>\n    <button ion-button full style="background-color: #6eb43f" (click)="closeModal(1)">שליחה</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\roomscalendar\roomscalendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], RoomscalendarPage);
    return RoomscalendarPage;
}());

//# sourceMappingURL=roomscalendar.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(133);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentinfo',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/'<!--\n  Generated template for the PaymentinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <div class="fullRow">\n      <div class="nonEditRow"  >\n        <div class="rowRight">\n          {{jsonResponse.PAYACCOUNT}}\n        </div>\n      </div>\n    </div>\n\n      <div class="fullRow">\n        <div class="nonEditRow"  >\n          <div class="rowRight">\n            {{jsonResponse.VALIDMONTH}}\n          </div>\n        </div>\n    </div>\n\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="saveCard()">החלף כרטיס</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], PaymentinfoPage);
    return PaymentinfoPage;
}());

//# sourceMappingURL=paymentinfo.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenthistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
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
 * Generated class for the PaymenthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymenthistoryPage = /** @class */ (function () {
    function PaymenthistoryPage(navCtrl, navParams, server) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.paymentHistoryArray = [];
        this.paymentHistoryArray1 = [];
        this.caluclatedSum = 0;
        this.FilterType = 0;
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ACCOUNTS_RECEIVABLE('" + localStorage.getItem("CUSTNAME") + "')/ACCFNCITEMS2_SUBFORM";
        this.server.GetData(URL).then(function (data) {
            _this.paymentHistoryArray = data.json().value;
            _this.paymentHistoryArray1 = data.json().value;
            console.log(_this.paymentHistoryArray);
        });
    }
    PaymenthistoryPage.prototype.ChangeFilter = function (type) {
        this.FilterType = type;
        this.paymentHistoryArray = this.paymentHistoryArray1;
        this.paymentHistoryArray = this.paymentHistoryArray.filter(function (item) {
            if (type == 0)
                return item.FRECONNUM !== '';
            else if (type == 1)
                return item.FRECONNUM == '-1';
            else if (type == 2)
                return item.FRECONNUM == '1';
        });
    };
    PaymenthistoryPage.prototype.showRecipet = function (row) {
    };
    PaymenthistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymenthistoryPage');
    };
    PaymenthistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymenthistory',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymenthistory\paymenthistory.html"*/'<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="buttonsBar">\n        <div class="buttonsBarLeft">\n            <button ion-button [ngClass]="[FilterType == 0? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(0)"> כל הפעולות</button>\n        </div>\n        <div class="buttonsBarRight">\n            <button ion-button  [ngClass]="[FilterType == 1 ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(1)"> פעולות זכות</button>\n        </div>\n\n        <div class="buttonsBarRight">\n            <button ion-button  [ngClass]="[FilterType == 2 ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(2)">  פעולות יתרה</button>\n        </div>\n    </div>\n\n  <div class="products">\n    <div *ngFor="let item of paymentHistoryArray let i=index" class="productItem">\n        <div class="productNumber">{{item.ACCDES}} </div>\n        <div class="productInfo" >\n          <div class="productText">\n            <div> {{item.ACCNAME}}</div>\n            <div *ngIf="item.FRECONNUM == 1" style="direction: rtl;">חובה: {{item.DEBIT}} {{item.CODE}} </div>\n            <div *ngIf="item.FRECONNUM == -1" style="direction: rtl;">זכות: {{item.CREDIT}} {{item.CODE}} </div>\n            <div> {{item.DETAILS}}</div>\n          </div>\n        </div>\n        <button ion-button full style="background-color: #6eb43f" (click)="showRecipet(item)"> קישור לחשבונית</button>\n        <hr>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer >\n    <div class="buttons">\n        <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ יתרה: {{caluclatedSum}} ש"ח</button>\n    </div>\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\paymenthistory\paymenthistory.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _c || Object])
    ], PaymenthistoryPage);
    return PaymenthistoryPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=paymenthistory.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts__ = __webpack_require__(92);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addcontact',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\addcontact\addcontact.html"*/'<!--\n  Generated template for the AddcontactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="info">\n\n\n    <edit-row jsonKey="NAME" Title = "שם לקוח" [Data]="contactFields" FieldType="text" Editable="true"> </edit-row>\n    <edit-row jsonKey="PHONENUM" Title = "טלפון" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>\n    <edit-row jsonKey="CELLPHONE" Title = "טלפון נייד" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>\n    <edit-row jsonKey="HOMEPHONE" Title = "תעודת זהות" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>\n    <edit-row jsonKey="EMAIL" Title = "דואר אלקטרוני" [Data]="contactFields" FieldType="email" Editable="true"> </edit-row>\n\n\n\n    <div class="buttons">\n      <button ion-button full style="background-color: #6eb43f" (click)="saveContact()">שלח</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\addcontact\addcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], AddcontactPage);
    return AddcontactPage;
}());

//# sourceMappingURL=addcontact.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\login\login.html"*/'<ion-content padding>\n\n    <login> </login>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(66);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-details',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\user-details\user-details.html"*/'<ion-header>\n\n    <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <div class="info">\n\n            <div class="MainAvatar">\n\n                <img src="images/avatar.png" style="width: 20%">\n\n                <div>{{userData.CUSTDES}}</div>\n\n                <div>{{userData.CUSTNAME}}</div>\n\n            </div>\n\n\n\n            <edit-row jsonKey="CUSTDES" Title = "שם לקוח" [Data]="userData" FieldType="text" Editable="false"> </edit-row>\n\n            <edit-row jsonKey="ADDRESS" Title = "כתובת" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="STATE" Title = "עיר" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="ZIP" Title = "מיקוד" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="PHONE" Title = "טלפון נייד" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE2" Title = "טלפון 2" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE3" Title = "טלפון 3" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="FAX" Title = "פקס" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="EMAIL" Title = "אימייל" [Data]="userData" FieldType="email" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="PRIT_PASSWORD" Title = "סיסמא" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n\n\n\n\n            <div class="buttons">\n\n                <button ion-button full style="background-color: #6eb43f" (click)="saveDetails()">עדכן פרטים</button>\n\n                <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="goContactsPage()">אנשי קשר</button>\n\n            </div>\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\user-details\user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcontact/addcontact.module": [
		834,
		10
	],
	"../pages/contact/contact.module": [
		833,
		9
	],
	"../pages/contacts/contacts.module": [
		835,
		8
	],
	"../pages/login/login.module": [
		836,
		7
	],
	"../pages/paymenthistory/paymenthistory.module": [
		837,
		6
	],
	"../pages/paymentinfo/paymentinfo.module": [
		838,
		5
	],
	"../pages/products/products.module": [
		843,
		4
	],
	"../pages/rooms/rooms.module": [
		840,
		3
	],
	"../pages/roomscalendar/roomscalendar.module": [
		839,
		2
	],
	"../pages/selectedproducts/selectedproducts.module": [
		841,
		1
	],
	"../pages/user-details/user-details.module": [
		842,
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(514);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(317);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ServerService);
    return ServerService;
}());

//this._categories.next(categories);
//resolve(this.categories); 
//# sourceMappingURL=server-service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(166);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\app\app.html"*/'<ion-menu [content]="content"  side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_products_products__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_paymenthistory_paymenthistory__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_roomscalendar_roomscalendar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_user_details_user_details__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_locales_he__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























Object(__WEBPACK_IMPORTED_MODULE_26__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_27__angular_common_locales_he__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_roomscalendar_roomscalendar__["a" /* RoomscalendarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcontact/addcontact.module#AddcontactPageModule', name: 'AddcontactPage', segment: 'addcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymenthistory/paymenthistory.module#PaymenthistoryPageModule', name: 'PaymenthistoryPage', segment: 'paymenthistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roomscalendar/roomscalendar.module#RoomscalendarPageModule', name: 'RoomscalendarPage', segment: 'roomscalendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectedproducts/selectedproducts.module#SelectedproductsPageModule', name: 'SelectedproductsPage', segment: 'selectedproducts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_roomscalendar_roomscalendar__["a" /* RoomscalendarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_22__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "he" }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 514:
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paymentinfo_paymentinfo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paymenthistory_paymenthistory__ = __webpack_require__(164);
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
    }
    HomePage.prototype.NavigatePage = function (pageNum) {
        switch (pageNum) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rooms_rooms__["a" /* RoomsPage */]); //LoginPage
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */]); //LoginPage
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */]); //LoginPage
                break;
            case 4:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__paymentinfo_paymentinfo__["a" /* PaymentinfoPage */]); //LoginPage
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\home\home.html"*/'<ion-header>\n\n  <!--<ion-navbar>-->\n\n    <!--<button ion-button menuToggle>-->\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n    <!--</button>-->\n\n    <!--<ion-title>Home</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n    <header></header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-slides>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n            <ion-slide>\n\n                <img src="images/home/s_image_1.jpg" style="width: 100%" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n\n\n    <div class="mainIcons">\n\n        <div class="mainRow" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(1)">\n\n                    <img src="images/home/ic1.png" style="width:100%" />\n\n                    <div class="mainIconTitle">יחידות אכסון</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(2)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic2.png" style="width:100%" />\n\n                    <div class="mainIconTitle">הפריטים שלי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="mainRow topBorder" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(3)">\n\n                    <img src="images/home/ic3.png" style="width:100%" />\n\n                    <div class="mainIconTitle">פירוט חיובים</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(4)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic4.png" style="width:100%" />\n\n                    <div class="mainIconTitle">החלפת כרטיסי אשראי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n    <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 318,
	"./af.js": 318,
	"./ar": 319,
	"./ar-dz": 320,
	"./ar-dz.js": 320,
	"./ar-kw": 321,
	"./ar-kw.js": 321,
	"./ar-ly": 322,
	"./ar-ly.js": 322,
	"./ar-ma": 323,
	"./ar-ma.js": 323,
	"./ar-sa": 324,
	"./ar-sa.js": 324,
	"./ar-tn": 325,
	"./ar-tn.js": 325,
	"./ar.js": 319,
	"./az": 326,
	"./az.js": 326,
	"./be": 327,
	"./be.js": 327,
	"./bg": 328,
	"./bg.js": 328,
	"./bm": 329,
	"./bm.js": 329,
	"./bn": 330,
	"./bn.js": 330,
	"./bo": 331,
	"./bo.js": 331,
	"./br": 332,
	"./br.js": 332,
	"./bs": 333,
	"./bs.js": 333,
	"./ca": 334,
	"./ca.js": 334,
	"./cs": 335,
	"./cs.js": 335,
	"./cv": 336,
	"./cv.js": 336,
	"./cy": 337,
	"./cy.js": 337,
	"./da": 338,
	"./da.js": 338,
	"./de": 339,
	"./de-at": 340,
	"./de-at.js": 340,
	"./de-ch": 341,
	"./de-ch.js": 341,
	"./de.js": 339,
	"./dv": 342,
	"./dv.js": 342,
	"./el": 343,
	"./el.js": 343,
	"./en-au": 344,
	"./en-au.js": 344,
	"./en-ca": 345,
	"./en-ca.js": 345,
	"./en-gb": 346,
	"./en-gb.js": 346,
	"./en-ie": 347,
	"./en-ie.js": 347,
	"./en-il": 348,
	"./en-il.js": 348,
	"./en-nz": 349,
	"./en-nz.js": 349,
	"./eo": 350,
	"./eo.js": 350,
	"./es": 351,
	"./es-do": 352,
	"./es-do.js": 352,
	"./es-us": 353,
	"./es-us.js": 353,
	"./es.js": 351,
	"./et": 354,
	"./et.js": 354,
	"./eu": 355,
	"./eu.js": 355,
	"./fa": 356,
	"./fa.js": 356,
	"./fi": 357,
	"./fi.js": 357,
	"./fo": 358,
	"./fo.js": 358,
	"./fr": 359,
	"./fr-ca": 360,
	"./fr-ca.js": 360,
	"./fr-ch": 361,
	"./fr-ch.js": 361,
	"./fr.js": 359,
	"./fy": 362,
	"./fy.js": 362,
	"./gd": 363,
	"./gd.js": 363,
	"./gl": 364,
	"./gl.js": 364,
	"./gom-latn": 365,
	"./gom-latn.js": 365,
	"./gu": 366,
	"./gu.js": 366,
	"./he": 367,
	"./he.js": 367,
	"./hi": 368,
	"./hi.js": 368,
	"./hr": 369,
	"./hr.js": 369,
	"./hu": 370,
	"./hu.js": 370,
	"./hy-am": 371,
	"./hy-am.js": 371,
	"./id": 372,
	"./id.js": 372,
	"./is": 373,
	"./is.js": 373,
	"./it": 374,
	"./it.js": 374,
	"./ja": 375,
	"./ja.js": 375,
	"./jv": 376,
	"./jv.js": 376,
	"./ka": 377,
	"./ka.js": 377,
	"./kk": 378,
	"./kk.js": 378,
	"./km": 379,
	"./km.js": 379,
	"./kn": 380,
	"./kn.js": 380,
	"./ko": 381,
	"./ko.js": 381,
	"./ky": 382,
	"./ky.js": 382,
	"./lb": 383,
	"./lb.js": 383,
	"./lo": 384,
	"./lo.js": 384,
	"./lt": 385,
	"./lt.js": 385,
	"./lv": 386,
	"./lv.js": 386,
	"./me": 387,
	"./me.js": 387,
	"./mi": 388,
	"./mi.js": 388,
	"./mk": 389,
	"./mk.js": 389,
	"./ml": 390,
	"./ml.js": 390,
	"./mn": 391,
	"./mn.js": 391,
	"./mr": 392,
	"./mr.js": 392,
	"./ms": 393,
	"./ms-my": 394,
	"./ms-my.js": 394,
	"./ms.js": 393,
	"./mt": 395,
	"./mt.js": 395,
	"./my": 396,
	"./my.js": 396,
	"./nb": 397,
	"./nb.js": 397,
	"./ne": 398,
	"./ne.js": 398,
	"./nl": 399,
	"./nl-be": 400,
	"./nl-be.js": 400,
	"./nl.js": 399,
	"./nn": 401,
	"./nn.js": 401,
	"./pa-in": 402,
	"./pa-in.js": 402,
	"./pl": 403,
	"./pl.js": 403,
	"./pt": 404,
	"./pt-br": 405,
	"./pt-br.js": 405,
	"./pt.js": 404,
	"./ro": 406,
	"./ro.js": 406,
	"./ru": 407,
	"./ru.js": 407,
	"./sd": 408,
	"./sd.js": 408,
	"./se": 409,
	"./se.js": 409,
	"./si": 410,
	"./si.js": 410,
	"./sk": 411,
	"./sk.js": 411,
	"./sl": 412,
	"./sl.js": 412,
	"./sq": 413,
	"./sq.js": 413,
	"./sr": 414,
	"./sr-cyrl": 415,
	"./sr-cyrl.js": 415,
	"./sr.js": 414,
	"./ss": 416,
	"./ss.js": 416,
	"./sv": 417,
	"./sv.js": 417,
	"./sw": 418,
	"./sw.js": 418,
	"./ta": 419,
	"./ta.js": 419,
	"./te": 420,
	"./te.js": 420,
	"./tet": 421,
	"./tet.js": 421,
	"./tg": 422,
	"./tg.js": 422,
	"./th": 423,
	"./th.js": 423,
	"./tl-ph": 424,
	"./tl-ph.js": 424,
	"./tlh": 425,
	"./tlh.js": 425,
	"./tr": 426,
	"./tr.js": 426,
	"./tzl": 427,
	"./tzl.js": 427,
	"./tzm": 428,
	"./tzm-latn": 429,
	"./tzm-latn.js": 429,
	"./tzm.js": 428,
	"./ug-cn": 430,
	"./ug-cn.js": 430,
	"./uk": 431,
	"./uk.js": 431,
	"./ur": 432,
	"./ur.js": 432,
	"./uz": 433,
	"./uz-latn": 434,
	"./uz-latn.js": 434,
	"./uz.js": 433,
	"./vi": 435,
	"./vi.js": 435,
	"./x-pseudo": 436,
	"./x-pseudo.js": 436,
	"./yo": 437,
	"./yo.js": 437,
	"./zh-cn": 438,
	"./zh-cn.js": 438,
	"./zh-hk": 439,
	"./zh-hk.js": 439,
	"./zh-tw": 440,
	"./zh-tw.js": 440
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
webpackContext.id = 801;

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__ = __webpack_require__(827);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__["a" /* EditRowComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */])],
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

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n\n\n\n    <div>\n\n        <div class="mainLogo">\n\n            <img src="images/logo.png" style="width: 100%">\n\n        </div>\n\n\n\n        <div class="loginForm">\n\n            <input type="text" class="inputText" value="" [(ngModel)]="UserId" placeholder="הכנס מייל "/>\n\n            <input type="text" class="inputText MT10" value="" [(ngModel)]="Password"  placeholder="הכנס סיסמה "/>\n\n        </div>\n\n\n\n        <button ion-button color="dark" full class="MT20" (click)="LogIn()">כניסה</button>\n\n        <p >שכחת סיסמה ?</p>\n\n    </div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 825:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n<div class="mainHeader">\n\n    <div class="avatar">\n\n        <img src="images/home/avatar.png" style="width:90%"/>\n\n        <p>{{userName}}</p>\n\n    </div>\n\n\n\n    <div class="headLogo" align="center">\n\n        <img src="images/home/head_logo.png" style="width: 70%"/>\n\n    </div>\n\n\n\n    <div class="bar" menuToggle side="right">\n\n        <img src="images/home/side_bar.png" style="width: 70%"/>\n\n    </div>\n\n\n\n</div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(133);
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
    function FooterComponent(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    FooterComponent.prototype.NavigatePage = function (pageNum) {
        switch (pageNum) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_contact_contact__["a" /* ContactPage */]);
                break;
            case 2:
                var browser = this.iab.create('https://avias.org/aviaform/', '_self', "location=yes");
                browser.show();
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__["a" /* UserDetailsPage */]);
                break;
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<div>\n\n  <table>\n\n      <tr>\n\n          <td (click)="NavigatePage(3)">\n\n              <img src="images/home/fi3.png" class="borderLeft" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(2)">\n\n              <img src="images/home/fi2.png" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(1)">\n\n              <img src="images/home/fi1.png" style="width: 100%" />\n\n          </td>\n\n      </tr>\n\n  </table>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 827:
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
    EditRowComponent.prototype.editRow = function (Editable) {
        if (Editable == "true")
            this.isOpen = this.isOpen == true ? false : true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditRowComponent.prototype, "jsonKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditRowComponent.prototype, "Data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EditRowComponent.prototype, "Title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EditRowComponent.prototype, "FieldType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EditRowComponent.prototype, "Editable", void 0);
    EditRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-row',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\components\edit-row\edit-row.html"*/'<!-- Generated template for the EditRowComponent component -->\n\n<div>\n\n    <div class="fullRow">\n\n        <div class="nonEditRow" *ngIf="!isOpen" (click)="editRow(Editable)">\n\n            <div class="rowRight">\n\n                {{Title}} : {{Data[jsonKey]}}\n\n            </div>\n\n            <div class="rowLeft">\n\n                <img src="images/edit.png" *ngIf="Editable == \'true\'" style="width: 100%">\n\n            </div>\n\n        </div>\n\n        <div class="EditRow" *ngIf="isOpen">\n\n            <img src="images/edit.png" class="absoluteEditButton" (click)="editRow(Editable)">\n\n            <input [type]="FieldType" class="inputText MT10" value="" [(ngModel)]="Data[jsonKey]"\n\n                   [placeholder]="Title"/>\n\n        </div>\n\n    </div>\n\n</div>\n\n\n\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\components\edit-row\edit-row.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EditRowComponent);
    return EditRowComponent;
}());

//# sourceMappingURL=edit-row.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addcontact_addcontact__ = __webpack_require__(165);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contacts\contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <header></header>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of contactsArray let i=index">\n      <ion-thumbnail item-end >\n        <img src="images/avatar.png">\n      </ion-thumbnail>\n      <div float-right>\n        <h2>{{item.NAME}}</h2>\n        <p>{{item.CELLPHONE}}</p>\n        <p>{{item.EMAIL}}</p>\n      </div>\n\n      <button ion-button clear item-left (click)="callPhone(item.CELLPHONE)">\n        <ion-icon name="call" style="font-size:30px;"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer no-border class="topBorder">\n  <button ion-button full style="background-color: #6eb43f" (click)="AddContactPage()">הוספת איש קשר חדש</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\USER\Desktop\gitlab\avia\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map