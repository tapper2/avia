import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ToastService} from "../../services/toast-service"

/**
 * Generated class for the DaypickermodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daypickermodal',
  templateUrl: 'daypickermodal.html',
})
export class DaypickermodalPage {

    public caluclateProductPrice : number = 0;
    public countSelectedDays : number = 0
    public myProducts: any = [];
    public pageName: any = '';
    public daysOptions: any[] = [];
    dayName: any[] = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];

    // daysOptions : any[] = [
    //     {
    //         id: '0',
    //         day: 'ראשון',
    //         date: '2018-01-01',
    //         dateformatted : '01/01/2018',
    //         start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
    //         end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
    //     },
    //     {
    //         id: '1',
    //         day: 'שני',
    //         date: '2018-01-01',
    //         dateformatted : '01/01/2018',
    //         start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
    //         end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
    //     },
    //     {
    //         id: '2',
    //         day: 'שלישי',
    //         date: '2018-01-01',
    //         dateformatted : '01/01/2018',
    //         start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
    //         end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
    //     },
    //     {
    //         id: '3',
    //         day: 'רביעי',
    //         date: '2018-01-01',
    //         dateformatted : '01/01/2018',
    //         start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
    //         end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
    //     },
    // ];

    constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public Toast:ToastService) {
      console.log("products:",navParams.get('products'));
      this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');
        this.daysOptions = navParams.get('daysArray');
        //console.log("daysOptions",this.daysOptions)

      this.caluclateProductPrice = 0;

      // for (let i = 0; i < this.daysOptions.length; i++) {
      //     this.daysOptions[i].choosen = false;
      // }


      for (let i = 0; i < this.myProducts.length; i++) {
          if (this.myProducts[i].choosen == true) {
              if (this.pageName =="rooms") {
                  this.caluclateProductPrice = this.caluclateProductPrice+this.myProducts[i].BASEPRICE;
              } else {
                  this.caluclateProductPrice = this.caluclateProductPrice+this.myProducts[i].PRIT_PRICEOUT;
              }

          }
      }
  }

    selectDay(row) {

        for (let i = 0; i < this.daysOptions.length; i++) {

            if (row.id != this.daysOptions[i].id){
                this.daysOptions[i].choosen = false;
            }
        }

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DaypickermodalPage');
    }


    sendSelectedProducts(type) {

        let options  = [
            {
                type: type,
                days: this.daysOptions
            }
        ];


        if (type == 1) {
            this.countSelectedDays = 0;

            for (let i = 0; i < this.daysOptions.length; i++) {
                if (this.daysOptions[i].choosen == true) {
                    this.countSelectedDays++;
                }
            }

            if (this.countSelectedDays == 0)
                this.Toast.presentToast("יש לבחור יום");
            else {
                this.viewCtrl.dismiss(options);
            }
        } else {
            this.viewCtrl.dismiss(options);
        }


    }


}
