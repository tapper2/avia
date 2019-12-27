import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServerService } from "../../services/server-service";
import { ProductsPage } from "../products/products";
import { RoomsPage } from "../rooms/rooms";
import { PaymentinfoPage } from "../paymentinfo/paymentinfo";
import { PaymenthistoryPage } from "../paymenthistory/paymenthistory";
import { AppSettings } from "../../services/app-settings";
import { ArticlePage } from "../article/article";
import { ContactPage } from "../contact/contact";
import { ContactsPage } from "../contacts/contacts";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Type9Page } from '../type9/type9';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    public cHeight = ((window.innerHeight - 335) / 2);
    public cubeHeight = this.cHeight + 'px';
    public iconWidth = this.cHeight / 1.3 + 'px';
    public jsonResponse;
    public imageHost: any = '';
    public articlesArray: any = [];
    public appsettingsArray: any = [];
    public ctypecode: any = 7;
    public type9 = true;

    constructor(public navCtrl: NavController, public server: ServerService) {
        this.imageHost = AppSettings.IMAGE_URL;
        localStorage.type9 = false;
        this.getHomePageData();
        this.checkClient();
        this.callType9();
    }



    getHomePageData() {
        this.server.getServerData("getHomePageData").then((data: any) => {
            let serverResponse = data.json();
            this.server.homePageArray = serverResponse;
            this.articlesArray = serverResponse.articles;
            this.server.appsettingsArray = serverResponse.app_settings;
        });
    }

    checkClient() {
        this.server.GetData("/odata/Priority/tabula.ini/avia/CUSTOMERS('" + localStorage.getItem("CUSTNAME") + "')").then((data: any) => {
            this.ctypecode = data.json().CTYPECODE;
            console.log("ctypecode : ", "hard coded:" + this.ctypecode);
        });
    }

    goArticle(index, clickable) {
        if (clickable == 0) {
            this.navCtrl.push(ArticlePage, { articleIndex: index })
        }
    }

    ngOnInit() {

    }

    NavigatePage(pageNum) {
        console.log("Navigate2 : ", pageNum, this.ctypecode, this.type9)
        switch (pageNum) {

            case 1:
                this.navCtrl.push(RoomsPage); //LoginPage
                break;

            case 2:
                console.log("T")
                if (this.ctypecode == 9 && this.type9 == false) {
                    console.log("T1")
                    this.navCtrl.push(Type9Page); //ContactPage
                } else {
                    if (this.ctypecode == 9 && this.type9 == true) {
                        console.log("T2")
                        localStorage.type9 = true;
                    }
                    this.navCtrl.push(ProductsPage); //LoginPage
                }
                break;

            case 3:
                this.navCtrl.push(PaymenthistoryPage); //LoginPage
                break;

            case 4:
                this.navCtrl.push(PaymentinfoPage); //LoginPage
                break;

            case 5:
                this.navCtrl.push(ContactsPage); //ContactPage
                break;

            case 6:
                console.log("N6")
                this.navCtrl.push(Type9Page); //ContactPage
                break;

        }
    }

    callType9() {
        let URL = "/odata/Priority/tabula.ini/avia/PRIT_ORDIAPI?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'&$expand=PRIT_ORDISERN_SUBFORM";

        this.server.GetData(URL).then((data: any) => {
            console.log("Type9 : ", data.json().value);
            let arr = data.json().value;
            arr = arr[0]
            console.log("Type9Arr : ", arr)

            if (!arr)
                this.type9 = true;
            else
                this.type9 = false;

            console.log("Type9 : ", this.type9)
        });
    }

}
