import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";
import { CallNumber } from '@ionic-native/call-number';
import {AddcontactPage} from "../addcontact/addcontact";

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

    public contactsArray = [];
    public appsettingsArray = [];
    public imageUrl = this.server.imageUrl; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService, public Toast:ToastService,private callNumber: CallNumber) {

      let URL  = "/odata/Priority/tabula.ini/avia/CUSTOMERS('"+localStorage.getItem("CUSTNAME")+"')/CUSTPERSONNEL_SUBFORM?$filter=INACTIVE ne 'Y'";
      this.server.GetData(URL).then((data: any) => {
          this.contactsArray = data.json().value;
          console.log(this.contactsArray);
      });

      this.appsettingsArray = this.server.appsettingsArray;
      console.log("appsettingsArray",this.appsettingsArray)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

    callPhone(phone) {
      if (!phone) {
          this.Toast.presentToast("לא הוזן מספר טלפון");
      } else {
          this.callNumber.callNumber(phone, true);
      }
    }

    AddContactPage() {
        this.navCtrl.push(AddcontactPage);
    }
}
