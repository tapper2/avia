import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {ToastService} from "../../services/toast-service";

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
    public pdfURL = 'https://aviatest.wee.co.il/primail/invoices/';

    constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService,private iab: InAppBrowser, public Toast:ToastService) {


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

    showRecipet(recipet) {

        console.log(recipet);
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_CUSTINVOICES?$filter=IVNUM eq '"+recipet+"'&$expand=EXTFILES_SUBFORM($filter=EXTFILEDES eq 'Printed Invoice')";
        let filename = '';
        this.server.GetData(URL).then((data: any) => {
            console.log("recipet:", data.json().value[0]);
            let response = data.json().value[0];
            if (response.EXTFILES_SUBFORM.length > 0) {
                if (response.EXTFILES_SUBFORM[0].EXTFILENAME) {
                    let split = response.EXTFILES_SUBFORM[0].EXTFILENAME.split("/");
                    filename = split['5'];
                    const browser = this.iab.create(this.pdfURL+'/'+filename, '_system', "location=yes");
                    browser.show();
                }
            } else {
                this.Toast.presentToast("לא נמצאה חשבונית");
            }

        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymenthistoryPage');
  }

}
