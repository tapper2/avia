import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ProductsPage} from "../products/products";
import {RoomsPage} from "../rooms/rooms";
import {PaymentinfoPage} from "../paymentinfo/paymentinfo";
import {PaymenthistoryPage} from "../paymenthistory/paymenthistory";
import {AppSettings} from "../../services/app-settings";
import {ArticlePage} from "../article/article";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements  OnInit{
   
    public cHeight = ((window.innerHeight - 335)/2);
    public cubeHeight = this.cHeight+'px';
    public iconWidth = this.cHeight/1.3 + 'px';
    public jsonResponse;
    public imageHost:any = '';
    public articlesArray:any = [];
    
  constructor(public navCtrl: NavController , public server:ServerService) {
      this.imageHost = AppSettings.IMAGE_URL;
      this.getHomePageData();
}



  getHomePageData() {
      this.server.getServerData("getHomePageData").then((data: any) => {
        let serverResponse = data.json();
        this.server.homePageArray = serverResponse;
        this.articlesArray = serverResponse.articles;
      });
  }

    goArticle(index,clickable)
    {
        if (clickable == 0) {
            this.navCtrl.push(ArticlePage, {articleIndex: index})
        }
    }

    ngOnInit()
    {

    }

    NavigatePage(pageNum)
    {
        switch(pageNum)
        {

            case 1:
                this.navCtrl.push(RoomsPage); //LoginPage
                break;

            case 2:
                this.navCtrl.push(ProductsPage); //LoginPage
                break;

            case 3:
                this.navCtrl.push(PaymenthistoryPage); //LoginPage
                break;

            case 4:
                this.navCtrl.push(PaymentinfoPage); //LoginPage
                break;
        }
    }

}
