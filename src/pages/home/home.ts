import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ProductsPage} from "../products/products";
import {RoomsPage} from "../rooms/rooms";
import {PaymentinfoPage} from "../paymentinfo/paymentinfo";
import {PaymenthistoryPage} from "../paymenthistory/paymenthistory";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
    public cHeight = ((window.innerHeight - 335)/2);
    public cubeHeight = this.cHeight+'px';
    public iconWidth = this.cHeight/1.3 + 'px';
    public jsonResponse;
    
  constructor(public navCtrl: NavController , public server:ServerService) {


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
