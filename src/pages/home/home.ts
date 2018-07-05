import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ProductsPage} from "../products/products";
import {RoomsPage} from "../rooms/rooms";

import {UserDetailsPage} from "../user-details/user-details";
import {PaymentinfoPage} from "../paymentinfo/paymentinfo";

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
    
    
    NavigatePage(pageNum)
    {
        switch(pageNum)
        {
            case 3:
                this.navCtrl.push(ProductsPage); //LoginPage
                break;

            case 4:
                this.navCtrl.push(RoomsPage); //LoginPage
                break;
                
            case 5:
                this.navCtrl.push(UserDetailsPage); //LoginPage
                break;

            case 6:
                this.navCtrl.push(PaymentinfoPage); //LoginPage
                break;
        }
    }

}
