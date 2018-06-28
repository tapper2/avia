import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ServerService} from "../../services/server-service";

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
})
export class ProductsPage {
    
    public productsArray = [];
    public imageUrl = 'https://aviatest.wee.co.il/primail/';
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService) {
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '112233'";
        
        this.server.GetData(URL).then((data: any) => {
            this.productsArray = data.json().value;
            console.log(this.productsArray);
        });
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductsPage');
    }
    
    cutImageUrl(url)
    {
        let arr = url.split("/");
        return arr[4]+"/"+arr[5]+"/"+arr[6];
    }
    
    changeStatus(place, status) {
        this.productsArray[place].STATUS = status;
    }
    
}
