webpackJsonp([14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(47);
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
    function UserDetailsPage(navCtrl, navParams, server, Toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.alertCtrl = alertCtrl;
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
        this.userData.isChanged = false;
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
    UserDetailsPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.userData.isChanged) {
            var alertBox = this.alertCtrl.create({
                title: 'שינוים שלא נשמרו',
                message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
                buttons: [
                    {
                        text: 'לא',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'כן',
                        handler: function () {
                            _this.userData.isChanged = false;
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alertBox.present();
            return false;
        }
    };
    UserDetailsPage.prototype.saveDetails = function () {
        var _this = this;
        console.log("1111", this.userData);
        this.userData.isChanged = false;
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
            selector: 'page-user-details',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\user-details\user-details.html"*/'<ion-header>\n\n        <header1 HeaderTitle="עידכון פרטים אישיים" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n        <div class="info">\n\n            <div class="MainAvatar">\n\n                <img src="images/avatar.png" style="width: 20%">\n\n                <div>{{userData.CUSTDES}}</div>\n\n                <div>{{userData.CUSTNAME}}</div>\n\n            </div>\n\n\n\n            <!-- <edit-row jsonKey="CUSTDES" Title = "שם לקוח" [Data]="userData" FieldType="text" Editable="false" > </edit-row> -->\n\n            <edit-row jsonKey="ADDRESS" Title = "כתובת" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="STATE" Title = "עיר" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="ZIP" Title = "מיקוד" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="PHONE" Title = "טלפון נייד" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE2" Title = "טלפון 2" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="AVI_PHONE3" Title = "טלפון 3" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="FAX" Title = "פקס" [Data]="userData" FieldType="tel" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="EMAIL" Title = "אימייל" [Data]="userData" FieldType="email" Editable="true"> </edit-row>\n\n            <edit-row jsonKey="PRIT_PASSWORD" Title = "סיסמא" [Data]="userData" FieldType="text" Editable="true"> </edit-row>\n\n\n\n\n\n            <div class="buttons">\n\n                <button ion-button full style="background-color: #6eb43f" (click)="saveDetails()">עדכן פרטים</button>\n\n                <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" (click)="goContactsPage()">אנשי קשר</button>\n\n            </div>\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\user-details\user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_settings__ = __webpack_require__(80);
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
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams, server) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.articleIndex = '';
        this.articleData = [];
        this.imageHost = '';
        this.imageHost = __WEBPACK_IMPORTED_MODULE_3__services_app_settings__["a" /* AppSettings */].IMAGE_URL;
        this.articleIndex = this.navParams.get('articleIndex');
        this.articleData = this.server.homePageArray.articles[this.articleIndex];
        console.log("article:", this.articleData);
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-article',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\article\article.html"*/'<ion-header>\n\n  <!--<ion-navbar>-->\n\n  <!--<button ion-button menuToggle>-->\n\n  <!--<ion-icon name="menu"></ion-icon>-->\n\n  <!--</button>-->\n\n  <!--<ion-title>Home</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n  <header></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <div class="storyPic"><img alt="" [src]="imageHost+articleData.image"    width="100%"/></div>\n\n    <div class="articleTitle" style="direction:rtl;">{{articleData.title}}</div>\n\n    <div class="txt" style="direction:rtl;" [innerHTML]="articleData.description" ></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\article\article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        this.daysOptions = [];
        this.pageName = '';
        this.dayName = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
        this.selectedPullItems = false;
        this.selectedReturnItems = false;
        this.showSelectedFooter = false;
        this.toggleCheckBox = false;
        this.userName = "";
        console.log("products:", navParams.get('products'));
        this.myProducts = navParams.get('products');
        this.daysOptions = navParams.get('daysArray');
        this.pageName = navParams.get('page');
        this.selectedPullItems = navParams.get('selectedPullItems');
        this.selectedReturnItems = navParams.get('selectedReturnItems');
        if (localStorage.userData) {
            this.userData = JSON.parse(localStorage.userData);
            this.userName = this.userData.CUSTDES;
        }
        this.caluclateProductPrice = 0;
        for (var i = 0; i < this.daysOptions.length; i++) {
            this.daysOptions[i].choosen = false;
        }
        for (var i = 0; i < this.myProducts.length; i++) {
            if (this.myProducts[i].choosen == true) {
                this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].PRIT_PRICEOUT;
            }
        }
        console.log("daysOptions:", this.daysOptions);
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
    SelectedproductsPage.prototype.ToggleCheckBox = function (type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;
        if (this.selectedPullType == 0) {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;
            if (this.selectedPullItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
            }
        }
        if (this.selectedPullType == 1) {
            this.selectedPullItems = false;
            this.selectedReturnItems = !this.selectedReturnItems;
            if (this.selectedReturnItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
            }
        }
        if (!this.toggleCheckBox) {
            this.showSelectedFooter = false;
        }
    };
    SelectedproductsPage.prototype.sendSelectedProducts = function (type) {
        var options = [
            {
                type: type,
                days: this.daysOptions,
                selectedReturnItems: this.selectedReturnItems,
                selectedPullItems: this.selectedPullItems
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
            selector: 'page-selectedproducts',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/'<!--<ion-header>-->\n\n\n\n  <!--<ion-navbar>-->\n\n    <!--<ion-buttons start>-->\n\n      <!--<button ion-button (click)="dismiss()">Close</button>-->\n\n    <!--</ion-buttons>-->\n\n    <!--<ion-title>Modals</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n\n\n<!--</ion-header>-->\n\n\n\n\n\n<!-- <ion-header>\n\n  <div class="mainHeader">\n\n    <div class="headLogo" align="center">\n\n      <img src="images/home/head_logo.png" style="width: 70%"/>\n\n    </div>\n\n  </div>\n\n</ion-header> -->\n\n<ion-header>\n\n        <!-- <div class="mainHeader">\n\n                <div class="avatar">\n\n                    <img src="images/home/avatar.png" style="width:90%"/>\n\n                    <p>{{userName}}</p>\n\n                </div>\n\n            \n\n                <div class="headLogo" align="center" (click)="goMainPage()">\n\n                    <img src="images/logo.png" style="width: 60%"/>\n\n                </div>\n\n            \n\n               \n\n            \n\n            </div>\n\n       -->\n\n       <header1 HeaderTitle="הפריטים שלי - בחירת שעות"></header1>\n\n    </ion-header>\n\n<ion-content class="mainContent">\n\n    <div class="buttonsBar">\n\n        <div class="btn-group btn-group-justified">\n\n                    <a href="#" class="btn"  [ngClass]="[selectedReturnItems ? \'ActiveBt\' : \'btnGr\']" >החזרת פריטים</a>\n\n                    <a href="#" class="btn"  [ngClass]="[selectedPullItems  ? \'ActiveBt\' : \'btnGr\']" >שליפת פריטים</a>\n\n        </div>\n\n\n\n       <!-- <div class="buttonsBarLeft">\n\n            <button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']"> החזרת פריטים</button>\n\n        </div>\n\n        <div class="buttonsBarRight">\n\n            <button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" > שליפת פריטים</button>\n\n        </div>  -->\n\n    </div>\n\n    <hr>\n\n  <!--<div class="products">-->\n\n    <!--<div *ngFor="let item of daysOptions let i=index" class="product">-->\n\n        <!--<div class="productDV">-->\n\n            <!--<div class="productNumber"> {{dayName[item.day]}} | {{item.formatted_date}} | {{item.start_hour}} - {{item.end_hour}}</div>-->\n\n            <!--<div class="productInfo" >-->\n\n                <!--<div class="productEdit" >-->\n\n                    <!--<ion-checkbox [(ngModel)]="item.choosen" (click)="selectDay(item)"></ion-checkbox>-->\n\n                <!--</div>-->\n\n            <!--</div>-->\n\n        <!--</div>-->\n\n\n\n        <!--<hr>-->\n\n    <!--</div>-->\n\n    <div class="products">\n\n        <div *ngFor="let item of daysOptions let i=index" class="productItem">\n\n            <div class="row">\n\n                <div class="col-1 toogleCB">\n\n                    <ion-checkbox [(ngModel)]="item.choosen" (click)="selectDay(item)"></ion-checkbox>\n\n                </div>\n\n                <div class="col-8">\n\n                    <div class="productNumber"> {{dayName[item.day]}} | {{item.formatted_date}} | {{item.start_hour}} - {{item.end_hour}}</div>\n\n                </div>\n\n                <div class="col-2 calenderIcon">\n\n                      <img *ngIf="!item.choosen" style="width:20px;" src="images/home/cal1.png">\n\n                      <img *ngIf="item.choosen" style="width:20px" src="images/home/cal2.png">\n\n                </div>\n\n            </div>\n\n            <hr>\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer  >\n\n  <div class="buttons" >\n\n    <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice | number}} ש"ח</button>\n\n   \n\n     <div style="width: 100%; overflow: hidden; padding: 0px; margin-top: -10px;">\n\n        <div style="width: 100%;  float: left">\n\n                <button ion-button full  class="greenButton" (click)="sendSelectedProducts(1)">שליחה</button>\n\n                <button ion-button color="danger"  class="redButton"  full (click)="sendSelectedProducts(0)">ביטול</button>\n\n        </div>\n\n     </div>\n\n      \n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\selectedproducts\selectedproducts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], SelectedproductsPage);
    return SelectedproductsPage;
}());

//# sourceMappingURL=selectedproducts.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaypickermodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the DaypickermodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaypickermodalPage = /** @class */ (function () {
    function DaypickermodalPage(navCtrl, navParams, viewCtrl, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.Toast = Toast;
        this.caluclateProductPrice = 0;
        this.countSelectedDays = 0;
        this.myProducts = [];
        this.pageName = '';
        this.dayName = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
        this.selectedDate = '';
        this.disable_sat = '';
        this.detailsArray = [];
        this.optionsMulti = {
            pickMode: 'single',
            weekdays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
            weekStart: 0,
            disableWeeks: [],
        };
        this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');
        this.serverData = navParams.get('daysArray');
        this.detailsArray = this.serverData['description'].split(",");
        console.log("daysOptions", this.detailsArray);
        console.log("products:", navParams.get('products'), this.serverData);
        this.caluclateProductPrice = 0;
        // for (let i = 0; i < this.daysOptions.length; i++) {
        //     this.daysOptions[i].choosen = false;
        // }
        for (var i = 0; i < this.myProducts.length; i++) {
            if (this.myProducts[i].choosen == true) {
                if (this.pageName == "rooms") {
                    this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].BASEPRICE;
                }
                else {
                    this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].PRIT_PRICEOUT;
                }
            }
        }
        if (this.serverData) {
            if (this.serverData.open_saturday == 0) {
                console.log("DisableWeek");
                this.optionsMulti.disableWeeks = [6];
            }
            else {
                console.log("DisableWeek1");
                this.optionsMulti.disableWeeks = [];
            }
        }
    }
    DaypickermodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaypickermodalPage');
    };
    DaypickermodalPage.prototype.onChange = function (event) {
        console.log(event);
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(event.format('YYYY-MM-DD'), 'YYYY-MM-DD').format();
    };
    DaypickermodalPage.prototype.closeModal = function (type) {
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
    DaypickermodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-daypickermodal',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\daypickermodal\daypickermodal.html"*/'<!--<ion-header>-->\n\n\n\n<!--<ion-navbar>-->\n\n<!--<ion-buttons start>-->\n\n<!--<button ion-button (click)="dismiss()">Close</button>-->\n\n<!--</ion-buttons>-->\n\n<!--<ion-title>Modals</ion-title>-->\n\n<!--</ion-navbar>-->\n\n\n\n<!--</ion-header>-->\n\n\n\n\n\n<ion-header>\n\n  <header1 HeaderTitle="יחידת אחסון - בחירת תאריך"></header1>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n\n\n\n\n    <div class="mainInfo">\n\n        <div class="infoTitle">\n\n            סניף {{serverData.title}}\n\n        </div>\n\n        <div class="infoDescription" *ngFor="let item of detailsArray">\n\n            {{item}}\n\n        </div>\n\n    </div>\n\n    <div>\n\n        <ion-calendar style="background-color: #f8f8f8 !important" dir="rtl" [(ngModel)]="date"\n\n                      (onChange)="onChange($event)"\n\n                      [type]="type"\n\n                      [format]="\'YYYY-MM-DD\'"\n\n                      [options]="optionsMulti">\n\n        </ion-calendar>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer >\n\n  <div class="buttons">\n\n    <!--<button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice | number }} ש"ח</button>-->\n\n      <button ion-button color="danger" full (click)="closeModal(0)">ביטול</button>\n\n      <button ion-button full style="background-color: #6eb43f" (click)="closeModal(1)">שליחה</button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\daypickermodal\daypickermodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], DaypickermodalPage);
    return DaypickermodalPage;
}());

//# sourceMappingURL=daypickermodal.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts__ = __webpack_require__(50);
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
    function AddcontactPage(navCtrl, navParams, server, Toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.Toast = Toast;
        this.alertCtrl = alertCtrl;
        this.contactFields = {
            "NAME": "",
            "PHONENUM": "",
            "CELLPHONE": "",
            "HOMEPHONE": "",
            "EMAIL": "",
            "isChanged": false
        };
        this.appsettingsArray = [];
        this.contactFields.isChanged = false;
        this.appsettingsArray = this.server.appsettingsArray;
        console.log("appsettingsArray", this.appsettingsArray);
    }
    AddcontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcontactPage');
    };
    AddcontactPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.contactFields.isChanged) {
            var alertBox = this.alertCtrl.create({
                title: 'שינוים שלא נשמרו',
                message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
                buttons: [
                    {
                        text: 'לא',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'כן',
                        handler: function () {
                            _this.contactFields.isChanged = false;
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alertBox.present();
            return false;
        }
    };
    AddcontactPage.prototype.saveContact = function () {
        var _this = this;
        console.log("1111", this.contactFields);
        this.contactFields.isChanged = false;
        if (!this.contactFields.NAME)
            this.Toast.presentToast("יש להזין שם איש קשר");
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
            selector: 'page-addcontact',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\addcontact\addcontact.html"*/'<!--\n\n  Generated template for the AddcontactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header1 HeaderTitle="הוספת איש קשר" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n\n\n    <div align="center">\n\n        <img src="images/home/addcontact.png" class="mainImg" />\n\n    </div>\n\n  <div align="center" class="infoText">\n\n    {{appsettingsArray.AddContactDesc}}\n\n  </div>\n\n\n\n  <div class="info">\n\n\n\n\n\n    <edit-row jsonKey="NAME" Title = "שם איש קשר" [Data]="contactFields" FieldType="text" Editable="true"> </edit-row>\n\n    <!--<edit-row jsonKey="PHONENUM" Title = "טלפון" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>-->\n\n    <edit-row jsonKey="CELLPHONE" Title = "טלפון נייד" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>\n\n    <edit-row jsonKey="HOMEPHONE" Title = "תעודת זהות" [Data]="contactFields" FieldType="tel" Editable="true"> </edit-row>\n\n    <edit-row jsonKey="EMAIL" Title = "דואר אלקטרוני (לא חובה)" [Data]="contactFields" FieldType="email" Editable="true"> </edit-row>\n\n\n\n\n\n\n\n    <div class="buttons">\n\n      <button ion-button full style="background-color: #6eb43f" (click)="saveContact()">שלח</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\addcontact\addcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AddcontactPage);
    return AddcontactPage;
}());

//# sourceMappingURL=addcontact.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the InsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsurancePage = /** @class */ (function () {
    function InsurancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InsurancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InsurancePage');
    };
    InsurancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-insurance',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\insurance\insurance.html"*/'<!--\n  Generated template for the InsurancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <header1 HeaderTitle="עידכון ביטוח" type="0"></header1>\n</ion-header>\n\n\n<ion-content class="mainContent">\n  <iframe src="https://avias.org/aviaform/" style="width: 100%; height:1500px; border: none; margin-top: -100px;" ></iframe>\n</ion-content>\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\insurance\insurance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], InsurancePage);
    return InsurancePage;
}());

//# sourceMappingURL=insurance.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
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
            selector: 'page-login',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\login\login.html"*/'<ion-content padding>\n\n    <login> </login>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcontact/addcontact.module": [
		851,
		13
	],
	"../pages/article/article.module": [
		843,
		12
	],
	"../pages/contact/contact.module": [
		844,
		11
	],
	"../pages/contacts/contacts.module": [
		845,
		10
	],
	"../pages/daypickermodal/daypickermodal.module": [
		846,
		9
	],
	"../pages/insurance/insurance.module": [
		847,
		8
	],
	"../pages/login/login.module": [
		854,
		7
	],
	"../pages/paymenthistory/paymenthistory.module": [
		856,
		6
	],
	"../pages/paymentinfo/paymentinfo.module": [
		848,
		5
	],
	"../pages/products/products.module": [
		855,
		4
	],
	"../pages/rooms/rooms.module": [
		852,
		3
	],
	"../pages/roomscalendar/roomscalendar.module": [
		849,
		2
	],
	"../pages/selectedproducts/selectedproducts.module": [
		850,
		1
	],
	"../pages/user-details/user-details.module": [
		853,
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
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(321);
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
        this.homePageArray = [];
        this.appsettingsArray = [];
    }
    ServerService.prototype.getServerData = function (url) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body = new FormData();
            //body.append('data', JSON.stringify(data));
            return new Promise(function (resolve, reject) {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].SERVER_URL + url) //for post, put and delete put the body before the headers
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
    ServerService.prototype.deleteImg = function (url, img, imgArr) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body_1 = new FormData();
            body_1.append('id', img);
            body_1.append('data', JSON.stringify(imgArr));
            return new Promise(function (resolve, reject) {
                _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].SERVER_URL + url, body_1) //for post, put and delete put the body before the headers
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
    ServerService.prototype.getImagesFromServer = function (url, arr) {
        var _this = this;
        console.log("IMG : ", arr);
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body_2 = new FormData();
            body_2.append('data', JSON.stringify(arr));
            return new Promise(function (resolve, reject) {
                _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].SERVER_URL + url, body_2) //for post, put and delete put the body before the headers
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
    ServerService.prototype.getRoomsBranchDays = function (url, branch_code) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body_3 = new FormData();
            body_3.append('branch_code', branch_code);
            return new Promise(function (resolve, reject) {
                _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].SERVER_URL + url, body_3) //for post, put and delete put the body before the headers
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
    ServerService.prototype.getWorkingDays = function (url) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body_4 = new FormData();
            return new Promise(function (resolve, reject) {
                _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].SERVER_URL + url, body_4) //for post, put and delete put the body before the headers
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
    ServerService.prototype.GetData = function (url) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body = new FormData();
            return new Promise(function (resolve, reject) {
                //btoa('username' + ":" + 'password')
                _this.http.get(url, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
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
        console.log("Start1");
        var loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            var body = new FormData();
            //body.append('data', JSON.stringify(data));
            console.log("Start2");
            return new Promise(function (resolve, reject) {
                _this.http.post(url, JSON.stringify(data), { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                        'Authorization': "Basic YXBpOmFwSTEwNTY=",
                        'content-Type': 'application/json',
                        'Accept': 'application/json'
                    }) }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(function (res) {
                    resolve(res);
                    console.log("Start3");
                    loading.dismiss();
                })
                    .catch(function (err) {
                    console.log("error:", err);
                    alert("התקבלה שגיאה, יש לנסות שוב");
                    loading.dismiss();
                });
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log("Start4");
        }
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ServerService);
    return ServerService;
}());

//this._categories.next(categories);
//resolve(this.categories); 
//# sourceMappingURL=server-service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(80);
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ImageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageModalPage = /** @class */ (function () {
    function ImageModalPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.imgUrl = navParams.get('url');
        this.id = navParams.get('id');
        console.log("Modal : ", this.imgUrl);
    }
    ImageModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageModalPage');
    };
    ImageModalPage.prototype.onDissmiss = function (num) {
        var obj = {
            type: num,
            id: this.id
        };
        this.viewCtrl.dismiss(obj);
    };
    ImageModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-modal',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\image-modal\image-modal.html"*/'\n<ion-content padding>\n    <div>\n      <img src="{{imgUrl}}" style="width: 100%;" />\n    </div>\n\n    <button ion-button class="editButton" (click)="onDissmiss(0)">סגור</button>\n    <button ion-button class="editButton" (click)="onDissmiss(1)">מחק תמונה</button>\n</ion-content>\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\image-modal\image-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ImageModalPage);
    return ImageModalPage;
}());

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paymentinfo_paymentinfo__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paymenthistory_paymenthistory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_article__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contacts__ = __webpack_require__(50);
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
        this.imageHost = '';
        this.articlesArray = [];
        this.appsettingsArray = [];
        this.ctypecode = 7;
        this.imageHost = __WEBPACK_IMPORTED_MODULE_7__services_app_settings__["a" /* AppSettings */].IMAGE_URL;
        this.getHomePageData();
        this.checkClient();
    }
    HomePage.prototype.getHomePageData = function () {
        var _this = this;
        this.server.getServerData("getHomePageData").then(function (data) {
            var serverResponse = data.json();
            _this.server.homePageArray = serverResponse;
            _this.articlesArray = serverResponse.articles;
            _this.server.appsettingsArray = serverResponse.app_settings;
        });
    };
    HomePage.prototype.checkClient = function () {
        var _this = this;
        this.server.GetData("https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')").then(function (data) {
            _this.ctypecode = data.json().CTYPECODE;
            console.log("ctypecode : ", "hard coded:" + _this.ctypecode);
        });
    };
    HomePage.prototype.goArticle = function (index, clickable) {
        if (clickable == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__article_article__["a" /* ArticlePage */], { articleIndex: index });
        }
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.NavigatePage = function (pageNum) {
        console.log("Navigate : ", pageNum);
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
            case 5:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__contacts_contacts__["a" /* ContactsPage */]); //ContactPage
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\home\home.html"*/'<ion-header>\n\n  <!--<ion-navbar>-->\n\n    <!--<button ion-button menuToggle>-->\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n    <!--</button>-->\n\n    <!--<ion-title>Home</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n    <header></header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-slides>\n\n            <ion-slide *ngFor="let row of articlesArray; let i = index" (click)="goArticle(i,row.clickable)">\n\n                <img [src]="imageHost+row.image" style="width: 100%"  />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n    <div class="lineH"></div>\n\n    <div class="mainRow">\n\n        <div class="row firstdRow">\n\n            <div class="col-6 mainIcon leftIcon" align="center" (click)="NavigatePage(2)" *ngIf="ctypecode == 6 || ctypecode == 7">\n\n                    <img src="images/home/ic2.png"  />\n\n                    <div class="mainIconTitle">הפריטים שלי</div>\n\n            </div> \n\n            <div class="col-6 mainIcon1 leftIcon" align="center" (click)="NavigatePage(5)" *ngIf="ctypecode != 6 && ctypecode != 7">\n\n                    <img src="images/home/ic6.png" style="margin-top: 4px;"  />\n\n                    <div class="mainIconTitle" style="margin-top: -10px;">אנשי קשר</div>\n\n            </div> \n\n            <div class="col-6 mainIcon" align="center" (click)="NavigatePage(1)"  *ngIf="ctypecode != 6">\n\n                    <img src="images/home/ic1.png"  />\n\n                    <div class="mainIconTitle">יחידות אחסון</div>\n\n            </div>\n\n            <div class="col-6 mainIcon1 leftIcon1" align="center" (click)="NavigatePage(5)" *ngIf="ctypecode == 6">\n\n                    <img src="images/home/ic6.png"  />\n\n                    <div class="mainIconTitle">אנשי קשר</div>\n\n            </div> \n\n        </div>\n\n        <div class="lineW"></div>\n\n        <div class="row secondRow">\n\n                <div class="col-6 mainIcon leftIcon" align="center" (click)="NavigatePage(3)">\n\n                        <img src="images/home/ic3.png" />\n\n                        <div class="mainIconTitle">פירוט חיובים</div>\n\n                </div> \n\n                <div class="col-6 mainIcon" align="center" (click)="NavigatePage(4)">\n\n                        <img src="images/home/ic4.png" />\n\n                        <div class="mainIconTitle">החלפת כרטיס אשראי</div>\n\n                </div>  \n\n        </div>\n\n    </div>\n\n    <!-- <div class="mainIcons">\n\n        <div class="mainRow" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(1)"  *ngIf="ctypecode == 7 || ctypecode != 6">\n\n                    <img src="images/home/ic1.png" style="width:100%" />\n\n                    <div class="mainIconTitle">יחידות אחסון</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(2)" *ngIf="ctypecode == 6 || ctypecode == 7">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic2.png" style="width:100%" />\n\n                    <div class="mainIconTitle">הפריטים שלי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="mainRow topBorder" >\n\n            <div class="leftIcon">\n\n                <div class="mainIcon" [style.width]="iconWidth" (click)="NavigatePage(3)">\n\n                    <img src="images/home/ic3.png" style="width:100%" />\n\n                    <div class="mainIconTitle">פירוט חיובים</div>\n\n                </div>\n\n            </div>\n\n            <div class="rightIcon leftBorder" [style.height]="cubeHeight" (click)="NavigatePage(4)">\n\n                <div class="mainIcon" [style.width]="iconWidth">\n\n                    <img src="images/home/ic4.png" style="width:100%" />\n\n                    <div class="mainIconTitle">החלפת כרטיסי אשראי</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div> -->\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n    <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_products__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contacts_contacts__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_details_user_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_paymenthistory_paymenthistory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rooms_rooms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_paymentinfo_paymentinfo__ = __webpack_require__(98);
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
    function MyApp(platform, statusBar, splashScreen, server) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.server = server;
        this.ctypecode = "";
        this.initializeApp();
        this.server.GetData("https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')").then(function (data) {
            _this.ctypecode = data.json().CTYPECODE;
            console.log("ctypecodeMain : ", "hard coded:" + _this.ctypecode);
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ראשי', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], img: "images/menu/1.png", type: 0 },
            { title: 'הפריטים שלי', component: __WEBPACK_IMPORTED_MODULE_6__pages_products_products__["a" /* ProductsPage */], img: "images/menu/2.png", type: 1 },
            { title: 'יחידות איחסון', component: __WEBPACK_IMPORTED_MODULE_12__pages_rooms_rooms__["a" /* RoomsPage */], img: "images/menu/1.png", type: 2 },
            { title: 'פירוט חיובים', component: __WEBPACK_IMPORTED_MODULE_10__pages_paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */], img: "images/menu/3.png", type: 0 },
            { title: 'פרטים אישיים', component: __WEBPACK_IMPORTED_MODULE_8__pages_user_details_user_details__["a" /* UserDetailsPage */], img: "images/menu/8.png", type: 0 },
            { title: 'ניהול אנשי קשר', component: __WEBPACK_IMPORTED_MODULE_7__pages_contacts_contacts__["a" /* ContactsPage */], img: "images/menu/10.png", type: 0 },
            { title: 'החלפת כרטיסי אשראי', component: __WEBPACK_IMPORTED_MODULE_13__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */], img: "images/menu/11.png", type: 0 },
            { title: 'צור קשר', component: __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */], img: "images/menu/9.png", type: 0 },
            { title: 'התנתקות', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], img: "images/menu/6.png", type: 0 }
        ];
        try {
            this.settings = JSON.parse(localStorage.userData);
            console.log("Sett : ", this.settings);
        }
        catch (err) {
            this.settings = {};
        }
        if (this.settings['CUSTNAME']) {
            console.log("CST : ", this.settings['CUSTNAME'], this.settings['PRIT_PASSWORD']);
            var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS?$filter=CUSTNAME eq '" + this.settings['CUSTNAME'] + "' and PRIT_PASSWORD eq '" + this.settings['PRIT_PASSWORD'] + "'";
            this.server.GetData(URL_1).then(function (data) {
                console.log("getLoginDetaild : ", data.json().value[0]);
                console.log(data.json().value[0]);
                localStorage.setItem("CUSTNAME", data.json().value[0].CUSTNAME);
                localStorage.setItem("userData", JSON.stringify(data.json().value[0]));
            });
        }
    }
    MyApp.prototype.checkVisible = function (p) {
        var vis = false;
        if (p.type != 1 && p.type != 2)
            vis = true;
        else if (p.type == 1 && (this.ctypecode == '6' || this.ctypecode == '7'))
            vis = true;
        else if (p.type == 2 && this.ctypecode != '6')
            vis = true;
        return vis;
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\gitlab\avia\src\app\app.html"*/'<ion-menu [content]="content"  side="right">\n\n  <ion-header>\n\n    <ion-toolbar align="center">\n\n        <img src="images/logo.png" style="width:100px;" />\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <div *ngFor="let p of pages" >\n\n          <button menuClose  ion-item *ngIf="checkVisible(p)" (click)="openPage(p)">\n\n              <div class="menuItem" >\n\n                  <div class="menuItemIcon">\n\n                    <img src="{{p.img}}" style="width:100%" />\n\n                  </div>\n\n                  <div class="menuItemText">{{p.title}}</div>\n\n              </div>\n\n          </button>\n\n          </div>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"G:\gitlab\avia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__services_server_service__["a" /* ServerService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomscalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-roomscalendar',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\roomscalendar\roomscalendar.html"*/'<ion-header>\n\n  <div class="mainHeader">\n\n    <div class="headLogo" align="center">\n\n      <img src="images/home/head_logo.png" style="width: 70%"/>\n\n    </div>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-calendar [(ngModel)]="date"\n\n                (onChange)="onChange($event)"\n\n                [type]="type"\n\n                [format]="\'YYYY-MM-DD\'"\n\n                [options]="optionsMulti">\n\n  </ion-calendar>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer >\n\n  <div class="buttons">\n\n    <button ion-button color="danger" full (click)="closeModal(0)">ביטול</button>\n\n    <button ion-button full style="background-color: #6eb43f" (click)="closeModal(1)">שליחה</button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\roomscalendar\roomscalendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], RoomscalendarPage);
    return RoomscalendarPage;
}());

//# sourceMappingURL=roomscalendar.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(503);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addcontact_addcontact__ = __webpack_require__(168);
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
        this.appsettingsArray = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')/CUSTPERSONNEL_SUBFORM?$filter=INACTIVE ne 'Y'";
        this.server.GetData(URL).then(function (data) {
            _this.contactsArray = data.json().value;
            console.log(_this.contactsArray);
        });
        this.appsettingsArray = this.server.appsettingsArray;
        console.log("appsettingsArray", this.appsettingsArray);
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
            selector: 'page-contacts',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\contacts\contacts.html"*/'<!--\n\n  Generated template for the ContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <header1 HeaderTitle="ניהול אנשי קשר" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n  <div align="center" class="mainInfoText">\n\n    {{appsettingsArray.ContactDesc}}\n\n  </div>\n\n\n\n  <ion-list class="mt-4">\n\n    <div *ngFor="let item of contactsArray let i=index">\n\n      <div class="row">\n\n        <div class="col-2">\n\n            <!-- <button ion-button clear item-left (click)="callPhone(item.CELLPHONE)">\n\n                <!-- <ion-icon name="call" style="font-size:30px;"></ion-icon> \n\n                \n\n            </button> -->\n\n            <img src="images/home/call.png" class="phoneImg align-middle" >\n\n        </div>\n\n        <div class="col-8">\n\n            <div class="infoContactText">\n\n                <p class="inf1">{{item.NAME}}</p>\n\n                <p class="inf2">{{item.CELLPHONE}}</p>\n\n                <p class="inf3">{{item.EMAIL}}</p>\n\n              </div>\n\n        </div>\n\n        <div class="col-2">\n\n            <ion-thumbnail item-end >\n\n                <img src="images/avatar.png">\n\n              </ion-thumbnail> \n\n        </div>\n\n      </div>\n\n      <hr>\n\n    </div>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border class="topBorder">\n\n  <button ion-button full style="background-color: #6eb43f" (click)="AddContactPage()">הוספת איש קשר חדש</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_products_products__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contacts_contacts__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addcontact_addcontact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_paymentinfo_paymentinfo__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_selectedproducts_selectedproducts__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_paymenthistory_paymenthistory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_roomscalendar_roomscalendar__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_daypickermodal_daypickermodal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_article_article__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_details_user_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ion2_calendar__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_locales_he__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_insurance_insurance__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_camera__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_path__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_transfer__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































Object(__WEBPACK_IMPORTED_MODULE_30__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_31__angular_common_locales_he__["a" /* default */], 'he');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_roomscalendar_roomscalendar__["a" /* RoomscalendarPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_daypickermodal_daypickermodal__["a" /* DaypickermodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_insurance_insurance__["a" /* InsurancePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/article/article.module#ArticlePageModule', name: 'ArticlePage', segment: 'article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daypickermodal/daypickermodal.module#DaypickermodalPageModule', name: 'DaypickermodalPage', segment: 'daypickermodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurance/insurance.module#InsurancePageModule', name: 'InsurancePage', segment: 'insurance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roomscalendar/roomscalendar.module#RoomscalendarPageModule', name: 'RoomscalendarPage', segment: 'roomscalendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectedproducts/selectedproducts.module#SelectedproductsPageModule', name: 'SelectedproductsPage', segment: 'selectedproducts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcontact/addcontact.module#AddcontactPageModule', name: 'AddcontactPage', segment: 'addcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymenthistory/paymenthistory.module#PaymenthistoryPageModule', name: 'PaymenthistoryPage', segment: 'paymenthistory', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_details_user_details__["a" /* UserDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addcontact_addcontact__["a" /* AddcontactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_selectedproducts_selectedproducts__["a" /* SelectedproductsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_paymenthistory_paymenthistory__["a" /* PaymenthistoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_roomscalendar_roomscalendar__["a" /* RoomscalendarPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_daypickermodal_daypickermodal__["a" /* DaypickermodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_insurance_insurance__["a" /* InsurancePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_26__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"], useValue: "he" }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "SERVER_URL": 'http://www.tapper.org.il/avia/laravel/public/api/',
    "IMAGE_URL": 'http://www.tapper.org.il/avia/laravel/storage/app/public/',
    "FACEBOOKID": '1759132254144414',
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 324,
	"./af.js": 324,
	"./ar": 325,
	"./ar-dz": 326,
	"./ar-dz.js": 326,
	"./ar-kw": 327,
	"./ar-kw.js": 327,
	"./ar-ly": 328,
	"./ar-ly.js": 328,
	"./ar-ma": 329,
	"./ar-ma.js": 329,
	"./ar-sa": 330,
	"./ar-sa.js": 330,
	"./ar-tn": 331,
	"./ar-tn.js": 331,
	"./ar.js": 325,
	"./az": 332,
	"./az.js": 332,
	"./be": 333,
	"./be.js": 333,
	"./bg": 334,
	"./bg.js": 334,
	"./bm": 335,
	"./bm.js": 335,
	"./bn": 336,
	"./bn.js": 336,
	"./bo": 337,
	"./bo.js": 337,
	"./br": 338,
	"./br.js": 338,
	"./bs": 339,
	"./bs.js": 339,
	"./ca": 340,
	"./ca.js": 340,
	"./cs": 341,
	"./cs.js": 341,
	"./cv": 342,
	"./cv.js": 342,
	"./cy": 343,
	"./cy.js": 343,
	"./da": 344,
	"./da.js": 344,
	"./de": 345,
	"./de-at": 346,
	"./de-at.js": 346,
	"./de-ch": 347,
	"./de-ch.js": 347,
	"./de.js": 345,
	"./dv": 348,
	"./dv.js": 348,
	"./el": 349,
	"./el.js": 349,
	"./en-au": 350,
	"./en-au.js": 350,
	"./en-ca": 351,
	"./en-ca.js": 351,
	"./en-gb": 352,
	"./en-gb.js": 352,
	"./en-ie": 353,
	"./en-ie.js": 353,
	"./en-il": 354,
	"./en-il.js": 354,
	"./en-nz": 355,
	"./en-nz.js": 355,
	"./eo": 356,
	"./eo.js": 356,
	"./es": 357,
	"./es-do": 358,
	"./es-do.js": 358,
	"./es-us": 359,
	"./es-us.js": 359,
	"./es.js": 357,
	"./et": 360,
	"./et.js": 360,
	"./eu": 361,
	"./eu.js": 361,
	"./fa": 362,
	"./fa.js": 362,
	"./fi": 363,
	"./fi.js": 363,
	"./fo": 364,
	"./fo.js": 364,
	"./fr": 365,
	"./fr-ca": 366,
	"./fr-ca.js": 366,
	"./fr-ch": 367,
	"./fr-ch.js": 367,
	"./fr.js": 365,
	"./fy": 368,
	"./fy.js": 368,
	"./gd": 369,
	"./gd.js": 369,
	"./gl": 370,
	"./gl.js": 370,
	"./gom-latn": 371,
	"./gom-latn.js": 371,
	"./gu": 372,
	"./gu.js": 372,
	"./he": 373,
	"./he.js": 373,
	"./hi": 374,
	"./hi.js": 374,
	"./hr": 375,
	"./hr.js": 375,
	"./hu": 376,
	"./hu.js": 376,
	"./hy-am": 377,
	"./hy-am.js": 377,
	"./id": 378,
	"./id.js": 378,
	"./is": 379,
	"./is.js": 379,
	"./it": 380,
	"./it.js": 380,
	"./ja": 381,
	"./ja.js": 381,
	"./jv": 382,
	"./jv.js": 382,
	"./ka": 383,
	"./ka.js": 383,
	"./kk": 384,
	"./kk.js": 384,
	"./km": 385,
	"./km.js": 385,
	"./kn": 386,
	"./kn.js": 386,
	"./ko": 387,
	"./ko.js": 387,
	"./ky": 388,
	"./ky.js": 388,
	"./lb": 389,
	"./lb.js": 389,
	"./lo": 390,
	"./lo.js": 390,
	"./lt": 391,
	"./lt.js": 391,
	"./lv": 392,
	"./lv.js": 392,
	"./me": 393,
	"./me.js": 393,
	"./mi": 394,
	"./mi.js": 394,
	"./mk": 395,
	"./mk.js": 395,
	"./ml": 396,
	"./ml.js": 396,
	"./mn": 397,
	"./mn.js": 397,
	"./mr": 398,
	"./mr.js": 398,
	"./ms": 399,
	"./ms-my": 400,
	"./ms-my.js": 400,
	"./ms.js": 399,
	"./mt": 401,
	"./mt.js": 401,
	"./my": 402,
	"./my.js": 402,
	"./nb": 403,
	"./nb.js": 403,
	"./ne": 404,
	"./ne.js": 404,
	"./nl": 405,
	"./nl-be": 406,
	"./nl-be.js": 406,
	"./nl.js": 405,
	"./nn": 407,
	"./nn.js": 407,
	"./pa-in": 408,
	"./pa-in.js": 408,
	"./pl": 409,
	"./pl.js": 409,
	"./pt": 410,
	"./pt-br": 411,
	"./pt-br.js": 411,
	"./pt.js": 410,
	"./ro": 412,
	"./ro.js": 412,
	"./ru": 413,
	"./ru.js": 413,
	"./sd": 414,
	"./sd.js": 414,
	"./se": 415,
	"./se.js": 415,
	"./si": 416,
	"./si.js": 416,
	"./sk": 417,
	"./sk.js": 417,
	"./sl": 418,
	"./sl.js": 418,
	"./sq": 419,
	"./sq.js": 419,
	"./sr": 420,
	"./sr-cyrl": 421,
	"./sr-cyrl.js": 421,
	"./sr.js": 420,
	"./ss": 422,
	"./ss.js": 422,
	"./sv": 423,
	"./sv.js": 423,
	"./sw": 424,
	"./sw.js": 424,
	"./ta": 425,
	"./ta.js": 425,
	"./te": 426,
	"./te.js": 426,
	"./tet": 427,
	"./tet.js": 427,
	"./tg": 428,
	"./tg.js": 428,
	"./th": 429,
	"./th.js": 429,
	"./tl-ph": 430,
	"./tl-ph.js": 430,
	"./tlh": 431,
	"./tlh.js": 431,
	"./tr": 432,
	"./tr.js": 432,
	"./tzl": 433,
	"./tzl.js": 433,
	"./tzm": 434,
	"./tzm-latn": 435,
	"./tzm-latn.js": 435,
	"./tzm.js": 434,
	"./ug-cn": 436,
	"./ug-cn.js": 436,
	"./uk": 437,
	"./uk.js": 437,
	"./ur": 438,
	"./ur.js": 438,
	"./uz": 439,
	"./uz-latn": 440,
	"./uz-latn.js": 440,
	"./uz.js": 439,
	"./vi": 441,
	"./vi.js": 441,
	"./x-pseudo": 442,
	"./x-pseudo.js": 442,
	"./yo": 443,
	"./yo.js": 443,
	"./zh-cn": 444,
	"./zh-cn.js": 444,
	"./zh-hk": 445,
	"./zh-hk.js": 445,
	"./zh-tw": 446,
	"./zh-tw.js": 446
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
webpackContext.id = 813;

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-list',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header1_header1__ = __webpack_require__(837);
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
                __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__["a" /* EditRowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header1_header1__["a" /* Header1Component */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_row_edit_row__["a" /* EditRowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header1_header1__["a" /* Header1Component */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(23);
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
            selector: 'login',template:/*ion-inline-start:"G:\gitlab\avia\src\components\login\login.html"*/'<!-- Generated template for the LoginComponent component -->\n\n\n\n    <div>\n\n        <div class="mainLogo">\n\n            <img src="images/logo.png" style="width: 100%">\n\n        </div>\n\n\n\n        <div class="loginForm">\n\n            <img class="loginImg" src="images/li1.png" >\n\n            <input type="text" class="inputText" value="" [(ngModel)]="UserId" placeholder="הכנס מייל "/>\n\n            <img class="loginImg1" src="images/li2.png" >\n\n            <input type="text" class="inputText MT10" value="" [(ngModel)]="Password"  placeholder="הכנס סיסמה "/>\n\n        </div>\n\n\n\n        <button ion-button color="dark" full class="MT20" (click)="LogIn()">כניסה</button>\n\n        <p >שכחת סיסמה ?</p>\n\n    </div>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
    function HeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
        if (localStorage.userData) {
            this.userData = JSON.parse(localStorage.userData);
            this.userName = this.userData.CUSTDES;
        }
    }
    HeaderComponent.prototype.goMainPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',template:/*ion-inline-start:"G:\gitlab\avia\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n<div class="mainHeader">\n\n    <div class="avatar">\n\n        <img src="images/home/avatar.png" style="width:90%"/>\n\n        <p>{{userName}}</p>\n\n    </div>\n\n\n\n    <div class="headLogo" align="center" (click)="goMainPage()">\n\n        <img src="images/logo.png" style="width: 60%"/>\n\n    </div>\n\n\n\n    <div class="bar" menuToggle side="right">\n\n        <img src="images/home/side_bar.png" style="width: 70%"/>\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_contact__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_insurance_insurance__ = __webpack_require__(169);
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
                // const browser = this.iab.create('https://avias.org/aviaform/', '_self', "location=yes");
                // browser.show();
                // browser.on('loadstop').subscribe(event => {
                //     browser.insertCSS({ code: ".headerTitle { display:none; } div#footerWrapper { display:none; } " });
                // });
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_insurance_insurance__["a" /* InsurancePage */]);
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_user_details_user_details__["a" /* UserDetailsPage */]);
                break;
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"G:\gitlab\avia\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<div>\n\n  <table>\n\n      <tr>\n\n          <td (click)="NavigatePage(3)">\n\n              <img src="images/home/fi3.png" class="borderLeft" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(2)">\n\n              <img src="images/home/fi2.png" style="width: 100%" />\n\n          </td>\n\n          <td (click)="NavigatePage(1)">\n\n              <img src="images/home/fi1.png" style="width: 100%" />\n\n          </td>\n\n      </tr>\n\n  </table>\n\n</div>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        //public isChanged : boolean = false;
        this.isOpen = false;
    }
    EditRowComponent.prototype.ngOnInit = function () {
        console.log("Details1 : ", this.Data[this.jsonKey], this.jsonKey);
    };
    EditRowComponent.prototype.modelChanged = function (newObj) {
        this.Data.isChanged = true;
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
            selector: 'edit-row',template:/*ion-inline-start:"G:\gitlab\avia\src\components\edit-row\edit-row.html"*/'<!-- Generated template for the EditRowComponent component -->\n\n<div>\n\n    <div class="fullRow">\n\n        <div class="nonEditRow" *ngIf="!isOpen" (click)="editRow(Editable)">\n\n            <div class="rowRight">\n\n                {{Title}} : {{Data[jsonKey]}}\n\n            </div>\n\n            <div class="rowLeft">\n\n                <img src="images/edit.png" *ngIf="Editable == \'true\'" style="width: 80%">\n\n            </div>\n\n        </div>\n\n        <div class="EditRow" *ngIf="isOpen">\n\n            <ion-icon name="checkmark" class="absoluteEditButton" (click)="editRow(Editable)" ></ion-icon>\n\n\n\n            <!--<img src="images/edit.png"  >-->\n\n            <input [type]="FieldType" class="inputText MT10" value="" [(ngModel)]="Data[jsonKey]" (ngModelChange)="modelChanged($event)"\n\n                   [placeholder]="Title"/>\n\n        </div>\n\n    </div>\n\n</div>\n\n\n\n'/*ion-inline-end:"G:\gitlab\avia\src\components\edit-row\edit-row.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EditRowComponent);
    return EditRowComponent;
}());

//# sourceMappingURL=edit-row.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(47);
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
 * Generated class for the Header1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Header1Component = /** @class */ (function () {
    function Header1Component(navCtrl) {
        this.navCtrl = navCtrl;
        if (localStorage.userData) {
            this.userData = JSON.parse(localStorage.userData);
            this.userName = this.userData.CUSTDES;
        }
    }
    Header1Component.prototype.goMainPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    Header1Component.prototype.ngOnInit = function () {
        console.log("HeaderTitle : ", this.HeaderTitle);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Header1Component.prototype, "HeaderTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Header1Component.prototype, "type", void 0);
    Header1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header1',template:/*ion-inline-start:"G:\gitlab\avia\src\components\header1\header1.html"*/'<div class="mainHeader">\n  <div class="avatar">\n      <img src="images/home/avatar.png" style="width:90%"/>\n      <p>{{userName}}</p>\n  </div>\n\n  <div class="headLogo" align="center" (click)="goMainPage()">\n     <div>{{HeaderTitle}}</div>\n  </div>\n\n  <div *ngIf="type == \'0\'" class="bar" menuToggle side="right">\n      <img src="images/home/side_bar.png" style="width: 70%"/>\n  </div>\n</div>'/*ion-inline-end:"G:\gitlab\avia\src\components\header1\header1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], Header1Component);
    return Header1Component;
}());

//# sourceMappingURL=header1.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
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
        this.contactSubjects = [];
        this.contactSubjects = this.server.homePageArray.contact_subjects;
        console.log("contactSubjects", this.contactSubjects);
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
                "SUBJCODE": this.contactFields.subject,
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
            selector: 'page-contact',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header1 HeaderTitle="יצירת קשר" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n\n\n  <div class="info">\n\n    <div class="MainAvatar">\n\n      <img src="images/home/ic5_1.png" style="width: 30%">\n\n    </div>\n\n\n\n\n\n\n\n    <div>\n\n      <div class="fullRow">\n\n        <div class="EditRow" >\n\n          <select class="inputText MT10" style="direction: rtl;" [(ngModel)]="contactFields.subject">\n\n            <option value="" >נושא הפניה</option>\n\n            <option *ngFor="let row of contactSubjects; let i = index" [value]="row.subject_code">{{row.title}}</option>\n\n            <!--<option [value]="0" >תמיכה טכנית</option>-->\n\n            <!--<option [value]="1" >פניית שירות</option>-->\n\n            <!--<option [value]="2" >אחר</option>-->\n\n          </select>\n\n        </div>\n\n\n\n        <div class="EditRow" >\n\n          <textarea  class="inputText1 MT10" value="" [(ngModel)]="contactFields.desc" rows="5" cols="10"  dir="rtl" placeholder="הכנס פרטים (עד 50 תווים)" maxlength="50"></textarea>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <div class="buttons">\n\n      <button ion-button full style="background-color: #6eb43f" (click)="sendContact()">שלח</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_path__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectedproducts_selectedproducts__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_modal_image_modal__ = __webpack_require__(449);
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
    function ProductsPage(navCtrl, toastCtrl, transfer, platform, navParams, file, filePath, camera, actionSheetCtrl, server, Toast, modalCtrl, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.platform = platform;
        this.navParams = navParams;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.server = server;
        this.Toast = Toast;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        this.todaydate = __WEBPACK_IMPORTED_MODULE_7_moment___default()().format();
        this.selectedAll = false;
        this.lastImage = null;
        this.BeforeImagesArray = [];
        this.ImagesArray = [];
        this.imgURL = "http://www.tapper.org.il/avia/laravel/storage/app/public/";
        this.productFields = {
            "isChanged": false
        };
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'";
        this.BeforeImagesArray = [];
        this.server.GetData(URL).then(function (data) {
            console.log("DTT : ", data);
            _this.productsArray = data.json().value;
            for (var i = 0; i < _this.productsArray.length; i++) {
                _this.productsArray[i].choosen = "0";
                _this.BeforeImagesArray.push(_this.productsArray[i]['SERNUM']);
            }
            _this.getImagesFromServer();
            console.log(_this.productsArray);
        });
    }
    ProductsPage.prototype.getImagesFromServer = function () {
        var _this = this;
        var url = "GetImages";
        this.server.getImagesFromServer(url, this.BeforeImagesArray).then(function (data) {
            _this.ImagesArray = data.json();
            console.log("IMages : ", _this.ImagesArray);
        });
    };
    ProductsPage.prototype.getImageLen = function (i) {
        if (this.ImagesArray[i])
            return this.ImagesArray[i].length;
        else
            return 0;
    };
    ProductsPage.prototype.modelChanged = function (newObj) {
        console.log("Change");
        this.productFields.isChanged = true;
    };
    // ionViewCanLeave(): boolean {
    //     console.log("CanLeave" , this.productFields.isChanged);
    //     if (this.productFields.isChanged) {
    //         let alertBox = this.alertCtrl.create({
    //             title: 'שינוים שלא נשמרו',
    //             message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
    //             buttons: [
    //                 {
    //                     text: 'לא',
    //                     role: 'cancel',
    //                     handler: () => {
    //                         console.log('Cancel clicked');
    //                     }
    //                 },
    //                 {
    //                     text: 'כן',
    //                     handler: () => {
    //                         this.productFields.isChanged = false;
    //                         this.navCtrl.pop();
    //                     }
    //                 }
    //             ]
    //         });
    //         alertBox.present();
    //         return false;
    //     }
    // }
    ProductsPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        //     console.log("CanLeave : " , this.selectedPullItems  , this.selectedReturnItems )
        //    if(this.selectedPullItems || this.selectedReturnItems)
        //    {
        console.log("CanLeave : ", this.productFields.isChanged);
        if (this.productFields.isChanged) {
            // this.productFields.isChanged = false;
            var status_1 = -1;
            for (var i = 0; i < this.productsArray.length; i++) {
                if (this.productsArray[i].STATUS == 1)
                    status_1 = i;
            }
            console.log("CanLeave2 : ", status_1, this.productsArray);
            if (status_1 >= 0) {
                // let alertPopup = this.alertCtrl.create({
                //     title: 'שים לב !!',
                //     message: 'ישנם נתונים שלא נשמרו האם ברצונך לשמור אותם ?  ',
                //     buttons: [{
                //             text: 'בטל',
                //             role: 'cancel',
                //             handler: () => {
                //                 alertPopup.dismiss().then(() => {
                //                     //this.navCtrl.push(HomePage);
                //                     this.navCtrl.pop();
                //                 })     
                //             }
                //         },
                //         {
                //             text: 'אשר',
                //             handler: () => {
                //                 this.changeStatus(status,3)
                //             }
                //         }]
                // });
                // Show the alert
                // alertPopup.present();
                // Return false to avoid the page to be popped up
                //return false;
                var alertBox = this.alertCtrl.create({
                    title: 'שינוים שלא נשמרו',
                    message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
                    buttons: [
                        {
                            text: 'לא',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'כן',
                            handler: function () {
                                _this.changeStatus(status_1, 3);
                            }
                        }
                    ]
                    // buttons: [
                    //     {
                    //         text: 'לא',
                    //         role: 'cancel',
                    //         handler: () => {
                    //             console.log('Cancel clicked');
                    //         }
                    //     },
                    //     {
                    //         text: 'כן',
                    //         handler: () => {
                    //             this.navCtrl.pop();
                    //         }
                    //     }
                    // ]
                });
                alertBox.present();
                return false;
            }
        }
    };
    ProductsPage.prototype.exitPage = function () {
        this.navCtrl.popToRoot();
    };
    ProductsPage.prototype.selectAll = function () {
        for (var i = 0; i < this.productsArray.length; i++) {
            if (this.selectedAll == false) {
                this.productsArray[i].choosen = true;
                this.showSelectedFooter = true;
            }
            else {
                this.productsArray[i].choosen = false;
                this.showSelectedFooter = false;
            }
        }
        this.selectProduct();
        this.selectedAll = !this.selectedAll;
    };
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
    ProductsPage.prototype.selectProduct = function () {
        this.countedSelected = 0;
        this.caluclateProductPrice = 0;
        var isMakat100 = false;
        for (var i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                if (this.productsArray[i].PARTNAME == "100" || this.productsArray[i].PARTNAME == "101") {
                    if (isMakat100 == false) {
                        isMakat100 = true;
                        this.caluclateProductPrice += this.productsArray[i].PRIT_PRICEOUT;
                    }
                    else
                        this.caluclateProductPrice += Number(this.productsArray[i].PRIT_PRICEOUT) / 2;
                }
                else if (this.productsArray[i].PARTNAME == "102")
                    this.caluclateProductPrice += this.productsArray[i].PRIT_PRICEOUT;
                this.countedSelected++;
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
    ProductsPage.prototype.fullscreenImage = function (img) {
        var _this = this;
        var ImageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__image_modal_image_modal__["a" /* ImageModalPage */], { url: this.imgURL + "" + img.url, id: img.id });
        ImageModal.present();
        ImageModal.onDidDismiss(function (data) {
            console.log("DissmisData : ", data);
            if (data['type'] == 1) {
                _this.deleteImg(data['id']);
            }
        });
    };
    ProductsPage.prototype.deleteImg = function (ImgId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("StartDelete : ", ImgId);
                        return [4 /*yield*/, this.server.deleteImg("deleteImg", ImgId, this.BeforeImagesArray).then(function (data) {
                                console.log("Return : ", data.json());
                                _this.ImagesArray = data.json();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.openProductsModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.getWorkingDays("getWorkingDays").then(function (data) {
                            var serverResponse = data.json();
                            console.log("serverResponse", serverResponse);
                            var ProductsModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__selectedproducts_selectedproducts__["a" /* SelectedproductsPage */], { products: _this.productsArray, page: 'products', daysArray: serverResponse, selectedPullItems: _this.selectedPullItems, selectedReturnItems: _this.selectedReturnItems });
                            ProductsModal.present();
                            _this.todaydate = __WEBPACK_IMPORTED_MODULE_7_moment___default()().format();
                            ProductsModal.onDidDismiss(function (data) {
                                console.log("dismiss: ", data);
                                var TYPECODE;
                                if (data[0].selectedPullItems == true)
                                    TYPECODE = "13";
                                else if (data[0].selectedReturnItems == true)
                                    TYPECODE = "14";
                                console.log("TYPECODE  : ", data[0].selectedPullItems, data[0].selectedReturnItems, TYPECODE);
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
                                    console.log("selectedDayArray", _this.selectedDayArray);
                                    //'1988-01-01 '
                                    for (var i = 0; i < _this.productsArray.length; i++) {
                                        if (_this.productsArray[i].choosen == true) {
                                            _this.productsSendArray.push({
                                                "PARTNAME": _this.productsArray[i].PARTNAME,
                                                "SERNUM": _this.productsArray[i].SERNUM,
                                                "TASKDATE": __WEBPACK_IMPORTED_MODULE_7_moment___default()(_this.selectedDayArray.formatted_date, 'YYYY-MM-DD').format(),
                                                "FROMDATE": __WEBPACK_IMPORTED_MODULE_7_moment___default()('1988-01-01' + _this.selectedDayArray.start_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format(),
                                                "TODATE": __WEBPACK_IMPORTED_MODULE_7_moment___default()('1988-01-01 ' + _this.selectedDayArray.end_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format() /* עד שעה למשימה*/
                                            });
                                        }
                                    }
                                    console.log("productsSendArray:", _this.productsSendArray);
                                    //send to server//
                                    // let TYPECODE;
                                    //
                                    // if (this.selectedPullType == 0)
                                    //     TYPECODE = "13";
                                    // else
                                    //     TYPECODE = "14";
                                    var URL_1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                                    var sendData = {
                                        "LOADCODE": "3",
                                        "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),
                                        // "DOCDATE":"", /* תאריך הזמנה  this.todaydate,*/
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
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    // cutImageUrl(url)
    // {
    //     //console.log("image url:",url);
    //     if (url) {
    //          let arr = url.split("/");
    //          //console.log("arr",arr);
    //          return arr[4]+"/"+arr[5]+"/"+arr[6];
    //     }
    //     else {
    //         return '';
    //     }
    //
    // }
    ProductsPage.prototype.cutImageUrl = function (url, type) {
        if (url) {
            var arr = url.split("/");
            return this.imageUrl + "/" + arr[4] + "/" + arr[5] + "/" + arr[6];
        }
        else {
            if (String(type) == "100")
                return 'images/100.png';
            else if (String(type) == "101")
                return 'images/100.jpg';
            else if (String(type) == "102")
                return 'images/102.jpg';
        }
    };
    ProductsPage.prototype.changeStatus = function (place, status) {
        var _this = this;
        this.productsArray[place].STATUS = status;
        this.productFields.isChanged = true;
        if (status == 3)
            this.navCtrl.pop();
        else if (status == 0) {
            console.log("cs1");
            this.productFields.isChanged = false;
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
                    if (status == 3)
                        _this.navCtrl.pop();
                }
                else {
                    _this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    };
    ProductsPage.prototype.presentConfirm = function () {
    };
    //     /////////////////////////////////////////////////////////////////////////////////////////
    //     ///////////////////////////////////  add image functions ////////////////////////////////
    //     /////////////////////////////////////////////////////////////////////////////////////////
    //     public presentActionSheet() {
    //         // if(this.CarImages.length<6)
    //         // {
    //             let actionSheet = this.actionSheetCtrl.create({
    //                 title: 'Select Image Source',
    //                 buttons: [
    //                     {
    //                         text: 'Load from Library',
    //                         handler: () => {
    //                             this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //                         }
    //                     },
    //                     {
    //                         text: 'Use Camera',
    //                         handler: () => {
    //                             this.takePicture(this.camera.PictureSourceType.CAMERA);
    //                         }
    //                     },
    //                     {
    //                         text: 'Cancel',
    //                         role: 'cancel'
    //                     }
    //                 ]
    //             });
    //             actionSheet.present();
    //         // }
    //         // else
    //         //     this.presentToast('אין אפשרות להוסיף יותר מ6 תמונות');
    //     }
    //     public takePicture(sourceType) {
    //         // Create options for the Camera Dialog
    //         var options = {
    //             quality: 60,
    //             sourceType: sourceType,
    //             saveToPhotoAlbum: false,
    //             correctOrientation: true,
    //             targetWidth: 1000,
    //             targetHeight: 1000,
    //             allowEdit: true
    //         };
    //         // Get the data of an image
    //         this.camera.getPicture(options).then((imagePath) => {
    //             // Special handling for Android library
    //             console.log("f0");
    //             if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    //                 this.filePath.resolveNativePath(imagePath)
    //                     .then(filePath => {
    //                         console.log("f01");
    //                         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //                         console.log("f02");
    //                         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
    //                         console.log("f03");
    //                         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //                     });
    //             } else {
    //                 var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    //                 var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //                 this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //             }
    //         }, (err) => {
    //             this.presentToast('Error while selecting image.');
    //         });
    //     }
    //     // Create a new name for the image
    //     private createFileName() {
    //         console.log("f1");
    //         var d = new Date(),
    //             n = d.getTime(),
    //             newFileName =  n + ".jpg";
    //         return newFileName;
    //     }
    // // Copy the image to a local folder
    //     private copyFileToLocalDir(namePath, currentName, newFileName) {
    //         console.log("f2 : "+ namePath + " : " + currentName + " : " + newFileName);
    //         this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    //             this.lastImage = newFileName;
    //             this.uploadImage();
    //         }, error => {
    //             this.presentToast('Error while storing file.');
    //         });
    //     }
    //     public presentToast(text) {
    //         console.log("f3");
    //         let toast = this.toastCtrl.create({
    //             message: text,
    //             duration: 3000,
    //             position: 'bottom',
    //             cssClass: "ToastClass"
    //         });
    //         toast.present();
    //     }
    // // Always get the accurate path to your apps folder
    //     public pathForImage(img) {
    //         if (img === null) {
    //             return '';
    //         } else {
    //             return cordova.file.dataDirectory + img;
    //         }
    //     }
    //     public uploadImage() {
    //         // Destination URL
    //         console.log("Up1  : ")
    //         var url = "http://www.tapper.co.il/salecar/laravel/public/api/GetFile";
    //         // File for Upload
    //         console.log("Up2  : " + this.lastImage + " : " + this.pathForImage(this.lastImage));
    //         var targetPath = this.pathForImage(this.lastImage);
    //         // File name only
    //         var filename = this.lastImage;
    //         var options = {
    //             fileKey: "file",
    //             fileName: filename,
    //             chunkedMode: false,
    //             mimeType: "multipart/form-data",
    //             params : {'fileName': filename, 'CarId':this.Car['id']}
    //         };
    //         console.log("Up3  : " + this.Car['id']);
    //         const fileTransfer: TransferObject = this.transfer.create();
    //         this.loading = this.loadingCtrl.create({
    //             content: 'Uploading...',
    //         });
    //         this.loading.present();
    //         // Use the FileTransfer to upload the image
    //         fileTransfer.upload(targetPath, url, options).then(data => {
    //             this.loading.dismissAll()
    //             this.callToImagesFromServer(data);
    //         }, err => {
    //             this.loading.dismissAll()
    //             this.presentToast('Error while uploading file.');
    //         });
    //     }
    //     public callToImagesFromServer(data)
    //     {
    //         console.log("GT : " , JSON.parse(data.response));
    //       //  this.CarImages = JSON.parse(data.response);
    //         //console.log(this.companyService.CompaniesArray);
    //        /* this.companyService.GetCompanyById('GetCompanyById').then((data: any) => {
    //             console.log("CarAdmin : ", data);
    //             this.Car = this.companyService.CompanyAdmin['cars'][this.CarPlace];
    //             this.CarImages = this.Car['images'];
    //         });*/
    //     }
    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////  add image functions ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ProductsPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        // if(this.CarImages.length<6)
        // {currentProductId
        console.log("Image : ", item);
        this.currentProductId = item['SERNUM'];
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    cssClass: 'actioSheet',
                    text: 'טען מהגלרייה',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    cssClass: 'actioSheet',
                    text: 'טען מהמצלמה',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        });
        actionSheet.present();
        // }
        // else
        //     this.presentToast('אין אפשרות להוסיף יותר מ6 תמונות');
    };
    ProductsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 60,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetWidth: 1000,
            targetHeight: 1000,
            allowEdit: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            console.log("f0");
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    console.log("f01");
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    console.log("f02");
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    console.log("f03");
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    ProductsPage.prototype.createFileName = function () {
        console.log("f1");
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProductsPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        console.log("f2 : " + namePath + " : " + currentName + " : " + newFileName);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uploadImage();
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProductsPage.prototype.presentToast = function (text) {
        console.log("f3");
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom',
            cssClass: "ToastClass"
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProductsPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ProductsPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        console.log("Up1  : getProductImage ");
        var url = "http://www.tapper.org.il/avia/laravel/public/api/GetFile";
        //var url = "http://www.tapper.co.il/salecar/laravel/public/api/GetFile";
        // File for Upload
        console.log("Up2  : " + this.lastImage + " : " + this.pathForImage(this.lastImage));
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'ProductId': this.currentProductId },
        };
        console.log("Up3  : ", options);
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        console.log("PT : ", targetPath, url, options);
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log("Return : ", data);
            _this.loading.dismissAll();
            _this.getImagesFromServer();
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\products\products.html"*/'<!--\n\n  Generated template for the ProductsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n        <header1 HeaderTitle="הפריטים שלי" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="mainContent">\n\n    <!--<div class="buttonsBar">-->\n\n        <!--<div class="buttonsBarLeft">-->\n\n            <!--<button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(1)"> החזרת פריטים</button>-->\n\n        <!--</div>-->\n\n        <!--<div class="buttonsBarRight">-->\n\n            <!--<button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(0)"> שליפת פריטים</button>-->\n\n        <!--</div>-->\n\n    <!--</div>-->\n\n\n\n    <!--<div align="center">-->\n\n        <!--<button ion-button color="secondary" round *ngIf="selectedPullItems || selectedReturnItems" (click)="selectAll()">סימון כל הפריטים</button>-->\n\n    <!--</div>-->\n\n\n\n    <div class="buttonsBar">\n\n        <div class="buttonsBarAll" *ngIf="selectedPullItems || selectedReturnItems" >\n\n            <i class="far fa-check-square checkAllIcon" (click)="selectAll()"></i>\n\n            <!--<button ion-button color="secondary" round (click)="selectAll()">סימון כל הפריטים</button>-->\n\n        </div>\n\n        <div class="buttonsBarLeft">\n\n            <div class="btn-group btn-group-justified">\n\n                <a href="#" class="btn"  [ngClass]="[selectedReturnItems ? \'ActiveBt\' : \'btnGr\']" (click)="ToggleCheckBox(1)">החזרת פריטים</a>\n\n                <a href="#" class="btn"  [ngClass]="[selectedPullItems  ? \'ActiveBt\' : \'btnGr\']" (click)="ToggleCheckBox(0)">שליפת פריטים</a>\n\n            </div>\n\n        </div>\n\n        <!-- <div [ngClass]="[!selectedReturnItems || !selectedPullItems ? \'buttonsBarLeft\' : \'buttonsBarLeft\']">\n\n            <button ion-button [ngClass]="[selectedReturnItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(1)"> החזרת פריטים</button>\n\n        </div>\n\n        <div [ngClass]="[!selectedReturnItems || !selectedPullItems  ? \'buttonsBarRight\' : \'buttonsBarRight\']">\n\n            <button ion-button  [ngClass]="[selectedPullItems ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ToggleCheckBox(0)"> שליפת פריטים</button>\n\n        </div> -->\n\n    </div>\n\n    <hr>\n\n\n\n    <div class="products">\n\n        <div *ngFor="let item of productsArray let i=index" class="productItem">\n\n            <div *ngIf="!item.STATUS || item.STATUS == 0">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="row" style="direction:rtl">\n\n                    <div *ngIf="toggleCheckBox"  class="col-1 toggleCheckBox">\n\n                        <ion-checkbox [(ngModel)]="item.choosen"  (click)="selectProduct()" ></ion-checkbox>\n\n                    </div>\n\n                    <div class="col-3">\n\n                        <img src="{{cutImageUrl(item.PRIT_FILENAME,item.PARTNAME)}}" class="productImage"/>\n\n                    </div>\n\n                    <div class="col-7" *ngIf="!toggleCheckBox">\n\n                        <div class="productText">\n\n                            <div> {{item.PARTDES}}</div>\n\n                            <div> {{item.FREE1}}</div>\n\n                            <div *ngIf = "item.PRIT_FREE" ><span style="font-weight: bold">הערות : </span>{{item.PRIT_FREE}}</div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="col-6" *ngIf="toggleCheckBox">\n\n                        <div class="productText">\n\n                            <div> {{item.PARTDES}}</div>\n\n                            <div> {{item.FREE1}}</div>\n\n                            <div>  {{item.PRIT_FREE}}</div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="col-1">\n\n                        <div class="productEdit" (click)="changeStatus(i,1)">\n\n                            <ion-icon name="more" class="moreIcon"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <div *ngIf="item.STATUS == 1">\n\n                <div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>\n\n                <div class="row" style="direction:rtl">\n\n                    <div *ngIf="toggleCheckBox"  class="col-1 toggleCheckBox">\n\n                        <ion-checkbox [(ngModel)]="item.choosen"  (click)="selectProduct(item)" ></ion-checkbox>\n\n                    </div>\n\n                    <div class="col-3">\n\n                        <img src="{{cutImageUrl(item.PRIT_FILENAME,item.PARTNAME)}}" class="w-100 productImage"/>\n\n                        <div *ngIf="ImagesArray">\n\n                                <div *ngFor="let img of ImagesArray[i]" >\n\n                                        <img src="{{imgURL}}{{img.url}}" (click)="fullscreenImage(img)" class="imgThumb"/>\n\n                                </div>\n\n                        </div>\n\n                        <div class="addImg" *ngIf="getImageLen(i) < 2" (click)="presentActionSheet(item)">\n\n                                <ion-icon name="add" class="addIcon"></ion-icon>\n\n                            </div>\n\n                            <!-- <img src="images/add.png" class="addIcon"  /> -->\n\n                        </div>\n\n                    <div class="col-7" *ngIf="!toggleCheckBox">\n\n                        <div class="productText1">\n\n                            <div> {{item.PARTDES}}</div>\n\n                            <div> {{item.FREE1}}</div>\n\n                            <div class="detailsEdit"> הערות :</div>\n\n                            <textarea rows="2" cols="3" [(ngModel)]="item.PRIT_FREE" (ngModelChange)="modelChanged($event)"> </textarea>\n\n                        </div>\n\n                    </div>\n\n                    <div class="col-6" *ngIf="toggleCheckBox">\n\n                        <div class="productText1">\n\n                            <div> {{item.PARTDES}}</div>\n\n                            <div> {{item.FREE1}}</div>\n\n                            <div class="detailsEdit"> הערות :</div>\n\n                            <textarea rows="1" cols="3" [(ngModel)]="item.PRIT_FREE" (ngModelChange)="modelChanged($event)"> </textarea>\n\n                        </div>\n\n                    </div>\n\n                    <div class="col-1">\n\n                        <div class="productEdit" (click)="changeStatus(i,1)">\n\n                            <img src="images/edit.png" style="width:100%" />\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <button ion-button class="editButton" (click)="changeStatus(i,0)"> סיים עריכה</button>\n\n            </div>\n\n            <hr>\n\n            <!--<div *ngIf="!item.STATUS || item.STATUS == 0">-->\n\n                <!--<div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>-->\n\n\n\n\n\n                <!--<div class="productInfo" >-->\n\n                    <!--<ion-checkbox class = "productCheck" [(ngModel)]="item.choosen" *ngIf="toggleCheckBox"  (click)="selectProduct(item)" ></ion-checkbox>-->\n\n                    <!--<div class="productImage">-->\n\n                        <!--<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />-->\n\n                        <!--&lt;!&ndash;<img src="images/avatar.png"  style="width: 100%" />&ndash;&gt;-->\n\n                    <!--</div>-->\n\n                    <!--<div class="productText">-->\n\n                        <!--<div> {{item.PARTDES}} </div>-->\n\n                        <!--<div> {{item.FREE1}}</div>-->\n\n                        <!--<div class="editable"> {{item.PRIT_FREE}}</div>-->\n\n                    <!--</div>-->\n\n                    <!--<div class="productEdit" (click)="changeStatus(i,1)">-->\n\n                        <!--<img src="images/edit.png" style="width: 100%" />-->\n\n                    <!--</div>-->\n\n                <!--</div>-->\n\n            <!--</div>-->\n\n            <!--<div *ngIf="item.STATUS == 1">-->\n\n                <!--<div class="productNumber"> מספר מוצר : {{item.SERNUM}}</div>-->\n\n                <!--<div class="productInfo" >-->\n\n                    <!--<div class="productImage">-->\n\n                        <!--&lt;!&ndash;<img src="{{imageUrl}}{{cutImageUrl(item.PRIT_FILENAME)}}"  style="width: 100%" />&ndash;&gt;-->\n\n                        <!--<img src="images/avatar.png"  style="width: 100%" />                    </div>-->\n\n                    <!--<div class="productText">-->\n\n                        <!--<div> {{item.PARTDES}}</div>-->\n\n                        <!--<div> {{item.FREE1}}</div>-->\n\n                    <!--</div>-->\n\n\n\n                    <!--<textarea rows="4" cols="50" [(ngModel)]="item.PRIT_FREE" (ngModelChange)="modelChanged($event)"> </textarea>-->\n\n                    <!--<button ion-button class="editButton" (click)="changeStatus(i,0)"> סיים עריכה</button>-->\n\n                <!--</div>-->\n\n                <!--&lt;!&ndash; <img src="images/edit.png" style="width:5%" (click)="changeStatus(i,0)"/>-->\n\n                <!--<div>6666767676767676767</div> &ndash;&gt;-->\n\n            <!--</div>-->\n\n            <!--<hr>-->\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="showSelectedFooter">\n\n        <div class="buttons">\n\n            <button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice | number}} ש"ח</button>\n\n            <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n\n        </div>\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daypickermodal_daypickermodal__ = __webpack_require__(167);
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





//import {SelectedproductsPage} from "../selectedproducts/selectedproducts";
//import {RoomscalendarPage} from "../roomscalendar/roomscalendar";

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
        this.roomsArray1 = [];
        this.imageUrl = 'https://aviatest.wee.co.il/primail/';
        this.selectedReturnItems = false;
        this.countedSelected = 0;
        this.showSelectedFooter = false;
        this.caluclateProductPrice = 0;
        this.toggleCheckBox = false;
        this.selectedPullType = 0;
        this.productsSendArray = [];
        this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
        this.selectedDayArray = [];
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
        this.roomsArray1 = [];
        for (var i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice + this.roomsArray[i].BASEPRICE;
                this.roomsArray1.push(this.roomsArray[i]);
                // console.log("BASEPRICE",row.BASEPRICE)
                // console.log("caluclateProductPrice",this.caluclateProductPrice)
            }
        }
        console.log("roomsArray1", this.roomsArray1);
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
            var selectedBranch, branchFlag, g, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedBranch = '';
                        branchFlag = 0;
                        for (g = 0; g < this.roomsArray1.length; g++) {
                            selectedBranch = this.roomsArray1[0].SPEC1;
                        }
                        //check none matches branches
                        for (i = 0; i < this.roomsArray.length; i++) {
                            if (this.roomsArray[i].choosen == true) {
                                if (selectedBranch != this.roomsArray[i].SPEC1) {
                                    branchFlag = 1;
                                }
                                else {
                                    branchFlag = 0;
                                }
                            }
                        }
                        if (!(branchFlag == 1)) return [3 /*break*/, 1];
                        this.Toast.presentToast("לא ניתן לבצע הודעה על פינוי ל 2 סניפים שונים");
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.server.getRoomsBranchDays("getBranchDays", selectedBranch).then(function (data) {
                            var serverResponse = data.json();
                            console.log("serverResponse", serverResponse);
                            if (serverResponse.length == 0) {
                                _this.Toast.presentToast("לא נמצאו שעות פעילות לסניף שנבחר");
                            }
                            else {
                                var ProductsModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__daypickermodal_daypickermodal__["a" /* DaypickermodalPage */], { products: _this.roomsArray, page: 'rooms', daysArray: serverResponse });
                                ProductsModal.present();
                                _this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
                                ProductsModal.onDidDismiss(function (data) {
                                    console.log("dismiss: ", data);
                                    _this.countedSelected = 0;
                                    _this.caluclateProductPrice = 0;
                                    _this.showSelectedFooter = false;
                                    _this.toggleCheckBox = false;
                                    _this.selectedReturnItems = false;
                                    _this.productsSendArray = [];
                                    _this.roomsArray1 = [];
                                    if (data[0].type == 1) {
                                        // for (let i = 0; i < data[0].days.length; i++) {
                                        //     if (data[0].days[i].choosen) {
                                        //         this.selectedDayArray = data[0].days[i];
                                        //     }
                                        // }
                                        for (var i = 0; i < _this.roomsArray.length; i++) {
                                            if (_this.roomsArray[i].choosen == true) {
                                                _this.productsSendArray.push({
                                                    "PARTNAME": _this.roomsArray[i].PARTNAME,
                                                    //"DUEDATE": moment(this.selectedDayArray.regular_date, 'YYYY-MM-DD').format(),   /* תאריך פינוי*/
                                                    "DUEDATE": __WEBPACK_IMPORTED_MODULE_3_moment___default()(data[0].date, 'YYYY-MM-DD').format(),
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
                                            console.log("ResponseData : ", data);
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
                            }
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RoomsPage.prototype.mathRound = function (number) {
        return Math.round(number);
    };
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rooms',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\rooms\rooms.html"*/'<!--\n\n  Generated template for the RoomsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <header1 HeaderTitle="פרטי איחסון" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: #f8f8f8">\n\n    <div align="center" style="margin-top: 0px;">\n\n        <img src="images/home/ic1.jpg" class="w-25" />\n\n    </div>\n\n \n\n\n\n  <div class="products mt-3">\n\n    <div *ngFor="let item of roomsArray let i=index" class="productItem">\n\n        \n\n        <div class="row RTL">\n\n            <div *ngIf="toggleCheckBox" class="productEdit col-2">\n\n                <ion-checkbox [(ngModel)]="item.choosen"   (click)="selectProduct(item)" ></ion-checkbox>\n\n            </div>\n\n            <div [ngClass]="[!toggleCheckBox ? \'col-9 infoRow\' : \'col-9 infoRow1\']" >\n\n                <div class="productNumber">  יחידת אחסון: {{item.PARTNAME}}</div>\n\n                <div class="row RTL">\n\n                    <div class="col-6 RTL"> סניף: {{item.PRIT_SPECDES1}}</div>\n\n                    <div class="col-6 RTL">מבנה: {{item.PRIT_SPECDES2}}</div>\n\n                </div>\n\n                <div class="row RTL">\n\n                    <div class="col-6 RTL">אגף: {{item.PRIT_SPECDES3}}</div>\n\n                    <div class="col-6 RTL">כמות קוב: {{item.AVI_KUB_QUANT}}</div>\n\n                </div>\n\n                <div class="row RTL">\n\n                    <div class="col-12 RTL mt-1">תאריך כניסה: {{item.DUEDATE | date:\'dd/MM/yyyy\'}}</div>\n\n                </div>\n\n                <div class="row RTL">\n\n                    <div class="col-12 RTL">מחיר כולל מע"מ ל-30 יום: {{mathRound(item.PRIT_VATPRICE)}}</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n      <hr>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<!--<ion-footer no-border class="topBorder" *ngIf="!showSelectedFooter">-->\n\n  <!--<button ion-button full style="background-color: #6eb43f" (click)="ClearRooms()">פינוי חדרים כללי</button>-->\n\n<!--</ion-footer>-->\n\n\n\n\n\n<ion-footer no-border >\n\n  <div class="buttons" *ngIf="showSelectedFooter">\n\n    <!--<button ion-button full style="background-color: #7f7f7f; margin-top:5px;" >סה"כ: {{caluclateProductPrice | number}} ש"ח</button>-->\n\n    <button ion-button full style="background-color: #6eb43f" (click)="openProductsModal()">המשך</button>\n\n  </div>\n\n\n\n  <div class="buttonsBar" *ngIf="!showSelectedFooter">\n\n    <button ion-button full style="background-color: #7f7f7f"  (click)="ToggleCheckBox(1)">הודעה על פינוי</button>\n\n  </div>\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\rooms\rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(89);
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
            selector: 'page-paymentinfo',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/'<!--\n\n  Generated template for the PaymentinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header1 HeaderTitle="עדכון פרטי כרטיסי אשראי" type="0"></header1>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainContent">\n\n    <div align="center">\n\n        <img src="images/home/ic4_1.png" class="w-25" />\n\n        <div class="iconInfoText">בוא תעדכן את פרטי האשראי שלך</div>\n\n    </div>\n\n  <div>\n\n      <div class="InfoText">כרטיס אשראי</div>\n\n    <div class="fullRow">\n\n      <div class="nonEditRow"  >\n\n        <div class="rowRight">\n\n          מספר כרטיס אשראי: {{jsonResponse.PAYACCOUNT}}\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n      <div class="fullRow">\n\n        <div class="nonEditRow"  >\n\n          <div class="rowRight">\n\n         תוקף: {{jsonResponse.VALIDMONTH}}\n\n          </div>\n\n        </div>\n\n    </div>\n\n\n\n    <button ion-button full style="background-color: #7f7f7f; margin-top:25px;" (click)="saveCard()">החלף כרטיס</button>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\gitlab\avia\src\pages\paymentinfo\paymentinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], PaymentinfoPage);
    return PaymentinfoPage;
}());

//# sourceMappingURL=paymentinfo.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenthistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(89);
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
 * Generated class for the PaymenthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymenthistoryPage = /** @class */ (function () {
    function PaymenthistoryPage(navCtrl, navParams, server, iab, Toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.iab = iab;
        this.Toast = Toast;
        this.paymentHistoryArray = [];
        this.paymentHistoryArray1 = [];
        this.caluclatedSum = 0;
        this.FilterType = 0;
        this.BALANCE = 0;
        this.pdfURL = 'https://aviatest.wee.co.il/primail/invoices/';
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ACCOUNTS_RECEIVABLE('" + localStorage.getItem("CUSTNAME") + "')/ACCFNCITEMS2_SUBFORM";
        this.server.GetData(URL).then(function (data) {
            _this.paymentHistoryArray = data.json().value;
            _this.paymentHistoryArray1 = data.json().value;
        });
        var URL1 = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ACCOUNTS_RECEIVABLE('" + localStorage.getItem("CUSTNAME") + "')";
        this.server.GetData(URL1).then(function (data) {
            var ans = data.json();
            _this.BALANCE = ans['BALANCE1'] * -1;
            console.log("Balance  : ", data.json(), _this.BALANCE);
        });
    }
    PaymenthistoryPage.prototype.ChangeFilter = function (type) {
        this.FilterType = type;
        this.paymentHistoryArray = this.paymentHistoryArray1;
        this.paymentHistoryArray = this.paymentHistoryArray.filter(function (item) {
            if (type == 0)
                return item.KLINE !== '';
            else if (type == 1)
                return item.KLINE == '2';
            else if (type == 2)
                return item.KLINE == '1';
        });
    };
    PaymenthistoryPage.prototype.showRecipet = function (recipet) {
        var _this = this;
        console.log(recipet);
        var URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_CUSTINVOICES?$filter=IVNUM eq '" + recipet + "'&$expand=EXTFILES_SUBFORM($filter=EXTFILEDES eq 'Printed Invoice')";
        var filename = '';
        this.server.GetData(URL).then(function (data) {
            console.log("recipet:", data.json().value[0]);
            var response = data.json().value[0];
            if (response.EXTFILES_SUBFORM.length > 0) {
                if (response.EXTFILES_SUBFORM[0].EXTFILENAME) {
                    var parts = response.EXTFILES_SUBFORM[0].EXTFILENAME.split('/');
                    filename = parts[parts.length - 1];
                    // alert (filename)
                    // let split = response.EXTFILES_SUBFORM[0].EXTFILENAME.split("/");
                    // filename = split['5'];
                    console.log("Url : ", _this.pdfURL + '/' + filename);
                    window.location.href = _this.pdfURL + '/' + filename;
                    // const browser = this.iab.create(this.pdfURL+'/'+filename, '_system', "location=yes");
                    // browser.show();
                }
            }
            else {
                _this.Toast.presentToast("לא נמצאה חשבונית");
            }
        });
    };
    PaymenthistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymenthistoryPage');
    };
    PaymenthistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymenthistory',template:/*ion-inline-start:"G:\gitlab\avia\src\pages\paymenthistory\paymenthistory.html"*/'<ion-header>\n\n        <header1 HeaderTitle="פירוט חיובים" type="0"></header1>\n\n</ion-header>\n\n\n\n<ion-content padding class="mainContent">\n\n    <div class="btn-group btn-group-justified">\n\n                <a href="#" class="btn"  [ngClass]="[FilterType == 2 ? \'ActiveBt\' : \'btnGr\']" (click)="ChangeFilter(2)">חשבוניות</a>\n\n                <a href="#" class="btn"  [ngClass]="[FilterType == 1 ? \'ActiveBt\' : \'btnGr\']" (click)="ChangeFilter(1)">קבלות</a>\n\n                <a href="#" class="btn"  [ngClass]="[FilterType == 0 ? \'ActiveBt\' : \'btnGr\']" (click)="ChangeFilter(0)">כל הפעולות</a>\n\n    </div>\n\n    <!-- <div class="buttonsBar">\n\n        <div class="buttonsBarLeft">\n\n            <button ion-button [ngClass]="[FilterType == 0? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(0)"> {{FilterType}}כל הפעולות</button>\n\n        </div>\n\n        <div class="buttonsBarRight">\n\n            <button ion-button  [ngClass]="[FilterType == 1 ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(1)"> קבלות</button>\n\n        </div>\n\n\n\n        <div class="buttonsBarRight">\n\n            <button ion-button  [ngClass]="[FilterType == 2 ? \'buttonsBarButton2\' : \'buttonsBarButton\']" (click)="ChangeFilter(2)">  חשבוניות</button>\n\n        </div>\n\n    </div> -->\n\n\n\n  <div class="products">\n\n    <div *ngFor="let item of paymentHistoryArray let i=index" class="productItem">\n\n        <div class="row">\n\n            <div class="col-3 invoicIcon" >\n\n                <div *ngIf="item.KLINE == 1" (click)="showRecipet(item.TODOREF)">\n\n                        <i class="far fa-file-alt mIcon"></i>\n\n                        <p>לפתיחת החשבונית</p>\n\n                </div>\n\n            </div>\n\n            <div class="col-9" [ngClass]="[item.KLINE == 1 ? \'col-9\' : \'col12\']">\n\n                    <div class="productNumber">{{item.DETAILS}} </div>\n\n                    <div class="productInfo" >\n\n                        <div class="productText">\n\n                            <div> תאריך: {{item.BALDATE | date:\'dd/MM/yyyy\'}}</div>\n\n                            <div style="direction: rtl;" *ngIf="item.KLINE == 2"> מספר קבלה: {{item.TODOREF}}</div>\n\n                            <div style="direction: rtl;" *ngIf="item.KLINE == 1"> מספר חשבונית: {{item.TODOREF}}</div>\n\n                \n\n                            <div style="direction: rtl;" *ngIf="item.KLINE == 2"> סכום הקבלה: {{item.CREDIT}} &#8362;</div>\n\n                            <div style="direction: rtl;" *ngIf="item.KLINE == 1"> סכום החשבונית: {{item.DEBIT}} &#8362;</div>\n\n                        </div>\n\n                    </div>\n\n                    <!-- <button ion-button full style="background-color: #6eb43f"   *ngIf="item.KLINE == 1" (click)="showRecipet(item.TODOREF)"> קישור לחשבונית</button> -->\n\n            </div>\n\n        </div>\n\n        <hr>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer >\n\n    <div class="buttons">\n\n        <button ion-button full style="background-color: #7f7f7f; margin-top:5px; direction: rtl; font-size: 17px;" >סה"כ יתרה: {{BALANCE}} &#8362;</button>\n\n    </div>\n\n</ion-footer>'/*ion-inline-end:"G:\gitlab\avia\src\pages\paymenthistory\paymenthistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], PaymenthistoryPage);
    return PaymenthistoryPage;
}());

//# sourceMappingURL=paymenthistory.js.map

/***/ })

},[498]);
//# sourceMappingURL=main.js.map