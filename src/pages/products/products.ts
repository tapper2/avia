import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";

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
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService, public Toast:ToastService) {
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '"+localStorage.getItem("CUSTNAME")+"'";
        
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
        //console.log("image url:",url);
        if (url) {
             let arr = url.split("/");
             //console.log("arr",arr);
             return arr[4]+"/"+arr[5]+"/"+arr[6];
        }
        else {
            return '';
        }

    }
    
    changeStatus(place, status) {
        this.productsArray[place].STATUS = status;

        if (status == 0) {


            let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
            let sendData =
                {

                    "LOADCODE": "9",
                    "CUSTDES": "LoadSern",
                    "PRIT_SERNUMBERS_SUBFORM":
                        [
                            {
                                "PARTNAME": this.productsArray[place].PARTNAME,                             //מק"ט
                                "SERNUM": this.productsArray[place].SERNUM,                           //מספר מכשיר
                                "FREE1": this.productsArray[place].PRIT_FREE,
                                "EXTFILENAME": this.productsArray[place].PRIT_FILENAME,
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
                    this.Toast.presentToast("עודכן בהצלחה");
                }
                else {
                    this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    }
    
}
