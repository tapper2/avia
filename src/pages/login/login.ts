import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    
    public jsonResponse: any;
    
    
    constructor(public navCtrl: NavController, public navParams: NavParams , public server:ServerService, public Toast:ToastService) {
        // this.server.GetData('https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC').then((data: any) => {
        //     alert (data);
        //     console.log("getPastClasses : " , data.json());
        //     this.jsonResponse = data.json();
        // });
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    
}
