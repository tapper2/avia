import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContactsPage} from "../contacts/contacts";
import {ToastService} from "../../services/toast-service";
import {ServerService} from "../../services/server-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-details',
    templateUrl: 'user-details.html',
})
export class UserDetailsPage implements OnInit{
    
    public userData:any;
    
    public inputFlags:object = {
        'mobile':false,
        'phone':false,
        'fax':false,
        'mail':false,
        'address':false,
        'city':false,
        'zip':false,
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public server:ServerService, public Toast:ToastService,private alertCtrl: AlertController) {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userData.isChanged = false;
        console.log("Details : " , this.userData);
    }
    
    ngOnInit()
    {
        console.log("Details1 : " , this.userData);
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad UserDetailsPage');
    }
    
    editRow(row)
    {
        console.log(row)
        this.inputFlags[row] = this.inputFlags[row] == true ? false : true;
    }



    ionViewCanLeave(): boolean {
        if (this.userData.isChanged) {
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
                            this.userData.isChanged = false;
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            alertBox.present();
            return false;
        }
    }
    saveDetails()
    {
        console.log("1111" , this.userData);
        this.userData.isChanged = false;

        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
        let sendData =



            {
                "LOADCODE": "1",
                "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),           //מספר לקוח
                "CUSTDES": this.userData.CUSTDES,        // customer name
                "ADDRESS":  this.userData.ADDRESS,
                "CITY":  this.userData.STATE,
                "ZIP":  this.userData.ZIP,                 //מיקוד
                "PHONE1":  this.userData.PHONE,          //טלפון נייד
                "PHONE2":  this.userData.AVI_PHONE2,        //טלפון 2
                "PHONE3":  this.userData.AVI_PHONE3,         //טלפון3
                "PHONE4":  this.userData.FAX,           //פקס
                "EMAIL":  this.userData.EMAIL,     //אימייל
                "PASSWORD": this.userData.PRIT_PASSWORD,           //סיסמא
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
                this.Toast.presentToast("עידכון פרטים התבצע בהצלחה");
                localStorage.userData = JSON.stringify(this.userData);
                this.navCtrl.push(HomePage);
            }
            else {
                this.Toast.presentToast("שגיאה, יש לנסות שוב");
            }
        });
    }

    goContactsPage() {
        this.navCtrl.push(ContactsPage);
    }
    
}
