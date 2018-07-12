import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerService} from "../../services/server-service";

/**
 * Generated class for the PaymenthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymenthistory',
  templateUrl: 'paymenthistory.html',
})
export class PaymenthistoryPage {

    public paymentHistoryArray:any = [];
    public paymentHistoryArray1:any = [];
    public caluclatedSum:any = 0;
    public FilterType: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService) {


      let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ACCOUNTS_RECEIVABLE('"+localStorage.getItem("CUSTNAME")+"')/ACCFNCITEMS2_SUBFORM";

      this.server.GetData(URL).then((data: any) => {
          this.paymentHistoryArray = data.json().value;
          this.paymentHistoryArray1 = data.json().value;
          console.log(this.paymentHistoryArray);

      });
  }

    ChangeFilter(type) {
        this.FilterType = type;
        this.paymentHistoryArray = this.paymentHistoryArray1;

        this.paymentHistoryArray = this.paymentHistoryArray.filter((item) => {
            if (type == 0)
                return item.FRECONNUM !== '';

            else if (type == 1)
                return item.FRECONNUM == '-1';

            else if (type == 2)
                return item.FRECONNUM == '1';
        });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymenthistoryPage');
  }

}
