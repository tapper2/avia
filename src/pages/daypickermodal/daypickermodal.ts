import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ToastService} from "../../services/toast-service"
import moment from 'moment';
import {CalendarComponentOptions} from "ion2-calendar";

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
    public serverData: any;
    dayName: any[] = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];
    date: string;
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    selectedDate : any = '';
    disable_sat:any = '';
    detailsArray:Array<object> = [];

    public optionsMulti: CalendarComponentOptions = {
        pickMode: 'single',
        weekdays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        weekStart: 0,
        disableWeeks: [],
    };



    constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public Toast:ToastService) {
      
      this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');
        this.serverData = navParams.get('daysArray');
        this.detailsArray =  this.serverData['description'].split(",");

        console.log("daysOptions",this.detailsArray)
        console.log("products:",navParams.get('products') , this.serverData);
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

      if (this.serverData)
      {
          if (this.serverData.open_saturday == 0)
          {
              console.log("DisableWeek");
              this.optionsMulti.disableWeeks = [6];
          }
          else
          {
              console.log("DisableWeek1");
              this.optionsMulti.disableWeeks = [];
          }
          
      }


  }


    ionViewDidLoad() {
        console.log('ionViewDidLoad DaypickermodalPage');
    }


    onChange(event) {
        console.log(event);
        this.selectedDate = moment(event.format('YYYY-MM-DD'), 'YYYY-MM-DD').format()
    }

    closeModal(type) {


        let options  = [
            {
                type: type,
                date: this.selectedDate,
            }
        ];

        if (type == 1) {
            if (!this.selectedDate) {
                this.Toast.presentToast("יש תחילה לבחור תאריך");
            } else {
                this.viewCtrl.dismiss(options);
            }
        }
        else {
            this.viewCtrl.dismiss(options);
        }
    }


}
