import {Component} from '@angular/core';
import {UserDetailsPage} from "../../pages/user-details/user-details";
import {ContactPage} from "../../pages/contact/contact";
import {ProductsPage} from "../../pages/products/products";
import {NavController} from "ionic-angular";
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'footer',
    templateUrl: 'footer.html'
})
export class FooterComponent {
    
    text: string;
    
    constructor(public navCtrl: NavController,private iab: InAppBrowser ) {
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    
    NavigatePage(pageNum) {
        switch (pageNum) {

            case 1:
                this.navCtrl.push(ContactPage);
                break;

            case 2:
                const browser = this.iab.create('https://avias.org/aviaform/', '_self', "location=yes");
                browser.show();
                browser.on('loadstop').subscribe(event => {
                    browser.insertCSS({ code: ".headerTitle { display:none; } div#footerWrapper { display:none; } " });
                });
                break;

            case 3:
                this.navCtrl.push(UserDetailsPage);
                break;
        }
    }
}
