import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastService} from "../../services/toast-service";
import {ServerService} from "../../services/server-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public contactFields : any = {
    "subject" : "",
      "desc" : ""
  }

  public contactSubjects:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public server:ServerService, public Toast:ToastService) {

      this.contactSubjects = this.server.homePageArray.contact_subjects;
      console.log("contactSubjects",this.contactSubjects)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

    sendContact() {

    if (!this.contactFields.subject)
        this.Toast.presentToast("יש לבחור נושא הפניה");



     else if (!this.contactFields.desc)
            this.Toast.presentToast("יש להזין פרטי הפניה");

     else
       {
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
        let sendData =
            {

                "LOADCODE": "10",                        /* קבוע*/
                "CUSTNAME" : localStorage.getItem("CUSTNAME").toString(),       /* מספר לקוח*/
                "SUBJCODE" : this.contactFields.subject,//  /*קוד סוג המשימה, יש להעביר רשימה של קודים עבור סוגי משימות ולסנכרן בפריוריטי*/
                "PRIT_DOCTEXT_SUBFORM":
                    [
                        {
                            "TEXT": this.contactFields.desc,     /* טקסט חופשי בפירוט, יש לפצל לשורות של עד 68 תוים */
                        }
                    ],

                "PRIT_INTERFACE_SUBFORM":
                    [
                        {
                            "EXECUTE": "Y"  /* קבוע*/
                        }
                    ]

            };
        this.server.SendPost(URL,sendData).then((data: any) => {
            console.log(data);
            let response = data;
            if  (response.ok) {
                this.Toast.presentToast("פניתך התקבלה בהצלחה");
                this.navCtrl.push(HomePage);
            }
            else {
                this.Toast.presentToast("שגיאה, יש לנסות שוב");
            }
        });
     }




    }

}
