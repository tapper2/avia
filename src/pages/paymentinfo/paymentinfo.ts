import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";
import moment from 'moment';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the PaymentinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentinfo',
  templateUrl: 'paymentinfo.html',
})
export class PaymentinfoPage implements OnInit{

    public jsonResponse : any[] = [];
    cardFieldOpen : boolean =  false;
    expirationOpen : boolean =  false;
    public todaydate :any  = moment().format('YYYY-MM-DD');
    selectedDate = new Date(this.todaydate).toISOString();
    maxDate = moment().add(10, 'years').format('YYYY');
    public validMonth;

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService, public Toast:ToastService,private iab: InAppBrowser,private toastCtrl: ToastController) {

      this.getItem();

  }

  getItem() {
      let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('"+localStorage.getItem("CUSTNAME")+"')/PAYMENTDEF_SUBFORM";
      this.server.GetData(URL).then((data: any) => {
          this.jsonResponse = data.json();
          console.log (this.jsonResponse);
          // this.validMonth = this.jsonResponse.VALIDMONTH;
          // let splitdate = this.validMonth.split("/");
          // this.validMonth =  moment(moment('01-'+splitdate[0]+'-'+splitdate[1]+'', 'DD-MM-YY')).format('YYYY-MM-DD');
      });
  }

    async ngOnInit()
    {

    }



    saveCard() {

        const browser = this.iab.create('https://tapper.org.il/avia/payment_redirect.php?custumer_id='+localStorage.getItem("CUSTNAME"), '_self', "location=yes");
        browser.show();


        browser.on('loadstop').subscribe(event => {
            if(event.url.indexOf("payment-cancel") > -1) {
                browser.close();
                this.Toast.presentToast("משתמש ביטל את הפעולה");
            }

            if(event.url.indexOf("payment-error") > -1) {
                browser.close();
                this.Toast.presentToast("עידכון פרטי אשראי נכשלו יש לנסות שוב");
            }


            if(event.url.indexOf("payment-ok") > -1) {
                browser.close();

                const AlertShow = this.toastCtrl.create({
                    message: 'פרטי אשראי עודכנו בהצלחה',
                    showCloseButton: true,
                    closeButtonText: 'אישור'
                });
                AlertShow.present();
                this.getItem();
            }
        });

        browser.on('exit').subscribe(event => {
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentinfoPage');
  }

}
