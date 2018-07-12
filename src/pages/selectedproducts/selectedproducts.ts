import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ToastService} from "../../services/toast-service";

/**
 * Generated class for the SelectedproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectedproducts',
  templateUrl: 'selectedproducts.html',
})
export class SelectedproductsPage {

    public caluclateProductPrice : number = 0;
    public countSelectedDays : number = 0
    public myProducts: any = [];
    public pageName: any = '';

    daysOptions : any[] = [
        {
            id: '0',
            day: 'ראשון',
            date: '1988-01-01',
            dateformatted : '01/01/1988',
            start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
            end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
        },
        {
            id: '1',
            day: 'שני',
            date: '1988-01-01',
            dateformatted : '01/01/1988',
            start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
            end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
        },
        {
            id: '2',
            day: 'שלישי',
            date: '1988-01-01',
            dateformatted : '01/01/1988',
            start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
            end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
        },
        {
            id: '3',
            day: 'רביעי',
            date: '1988-01-01',
            dateformatted : '01/01/1988',
            start_hour: '17:00',//'1988-01-01T09:00:00+03:00',
            end_hour: '18:00',//'1988-01-01T11:00:00+03:00',
        },
    ];


    constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public Toast:ToastService) {
      console.log("products:",navParams.get('products'));
        this.myProducts = navParams.get('products');
        this.pageName = navParams.get('page');

      this.caluclateProductPrice = 0;

        for (let i = 0; i < this.daysOptions.length; i++) {
            this.daysOptions[i].choosen = false;
        }


      for (let i = 0; i < this.myProducts.length; i++) {
          if (this.myProducts[i].choosen == true) {
              if (this.pageName == "products")
                    this.caluclateProductPrice = this.caluclateProductPrice+this.myProducts[i].PRIT_PRICEOUT;
              else
                  this.caluclateProductPrice = this.caluclateProductPrice+this.myProducts[i].BASEPRICE;
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
    console.log('ionViewDidLoad SelectedproductsPage');
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
