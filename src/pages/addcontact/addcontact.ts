import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastService} from "../../services/toast-service";
import {ServerService} from "../../services/server-service";
import {HomePage} from "../home/home";
import {ContactsPage} from "../contacts/contacts";

/**
 * Generated class for the AddcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddcontactPage {

  public contactFields : any = {
      "NAME" : "",
      "PHONENUM" : "",
      "CELLPHONE" : "",
      "HOMEPHONE" : "",
      "EMAIL" : "",
      "isChanged" : false
  }

    public appsettingsArray = [];


    constructor(public navCtrl: NavController, public navParams: NavParams, public server:ServerService, public Toast:ToastService,private alertCtrl: AlertController) {
      this.contactFields.isChanged = false;

      this.appsettingsArray = this.server.appsettingsArray;
      console.log("appsettingsArray",this.appsettingsArray)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcontactPage');
  }

    ionViewCanLeave(): boolean {
        if (this.contactFields.isChanged) {
            let alertBox = this.alertCtrl.create({
                title: 'שינוים שלא נשמרו',
                message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
                buttons: [
                    {
                        text: 'לא',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'כן',
                        handler: () => {
                            this.contactFields.isChanged = false;
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            alertBox.present();
            return false;
        }
    }

    saveContact() {
        console.log("1111" , this.contactFields);
        this.contactFields.isChanged = false;

        if (!this.contactFields.NAME)
            this.Toast.presentToast("יש להזין שם איש קשר");

        // else if (!this.contactFields.PHONENUM)
        //     this.Toast.presentToast("יש להזין מספר טלפון");

        else if (!this.contactFields.CELLPHONE)
            this.Toast.presentToast("יש להזין טלפון נייד");

        else if (!this.contactFields.HOMEPHONE)
            this.Toast.presentToast("יש להזין תעודת זהות");


        else {
            let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
            let sendData =


                {
                    "LOADCODE": "1",
                    "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),                       //מספר לקוח
                    "PRIT_CUSTPERSONNEL_SUBFORM":
                        [
                            {
                                "NAME": this.contactFields.NAME,
                                "PHONENUM": this.contactFields.PHONENUM,                  // טלפון
                                "CELLPHONE": this.contactFields.CELLPHONE,                  //טלפון נייד
                                "HOMEPHONE": this.contactFields.HOMEPHONE,                   //ת.ז.
                                "EMAIL": this.contactFields.EMAIL,              // דוא"ל
                            }
                        ],
                    "PRIT_INTERFACE_SUBFORM":
                        [
                            {
                                "EXECUTE": "Y"
                            }
                        ]
                }

            this.server.SendPost(URL,sendData).then((data: any) => {
                console.log("response",data);
                let response = data;
                if  (response.ok) {
                    this.Toast.presentToast("איש קשר נוסף בהצלחה");
                    this.navCtrl.push(ContactsPage);
                }
                else {
                    this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    }
}
