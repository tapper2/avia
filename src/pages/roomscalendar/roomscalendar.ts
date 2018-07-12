import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CalendarComponentOptions} from "ion2-calendar";
import {ToastService} from "../../services/toast-service";
import moment from 'moment';

/**
 * Generated class for the RoomscalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomscalendar',
  templateUrl: 'roomscalendar.html',
})
export class RoomscalendarPage {


    date: string;
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

    public myProducts: any = [];
    public pageName: any = '';
    selectedDate : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public Toast:ToastService) {
      console.log("products:",navParams.get('products'));
      this.myProducts = navParams.get('products');
      this.pageName = navParams.get('page');
  }

    optionsMulti: CalendarComponentOptions = {
        pickMode: 'single',
        //monthPickerFormat : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        weekdays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        weekStart: 0,
        canBackwardsSelected : false,
        disableWeeks: [6]
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomscalendarPage');
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
