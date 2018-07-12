import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";
import {SelectedproductsPage} from "../selectedproducts/selectedproducts";
import moment from 'moment';

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
export class ProductsPage  {
    
    public productsArray = [];
    public imageUrl = 'https://aviatest.wee.co.il/primail/';
    public selectedPullItems : boolean = false;
    public selectedReturnItems : boolean = false;
    public countedSelected : number = 0;
    public showSelectedFooter : boolean = false;
    public caluclateProductPrice : number = 0;
    public selectedDayArray : any = [];
    public toggleCheckBox: boolean = false;
    public selectedPullType : number = 0;
    public productsSendArray: any = [];
    public todaydate :any = moment().format();




    constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService, public Toast:ToastService,public modalCtrl: ModalController) {
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '"+localStorage.getItem("CUSTNAME")+"'";
        
        this.server.GetData(URL).then((data: any) => {
            this.productsArray = data.json().value;
            for (let i = 0; i < this.productsArray.length; i++) {
                this.productsArray[i].choosen = "0";
            }
            console.log(this.productsArray);

        });

    }



        ToggleCheckBox(type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;

        if (this.selectedPullType == 0)
        {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;

            if (this.selectedPullItems)
                 this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }

        if (this.selectedPullType == 1)
        {
            this.selectedPullItems = false;
            this.selectedReturnItems = !this.selectedReturnItems;

            if (this.selectedReturnItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }

        if (!this.toggleCheckBox) {
            this.showSelectedFooter  = false;
        }

    }

    selectProduct(row) {
        this.countedSelected = 0;
        this.caluclateProductPrice = 0;


        for (let i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice+row.PRIT_PRICEOUT;
            }
        }

        if (this.countedSelected > 0) {
            this.showSelectedFooter = true;
        } else {
            this.showSelectedFooter  = false;
        }

    }

    resetChoosen() {
        for (let i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                this.productsArray[i].choosen = false;
            }
        }
    }


    async openProductsModal() {
        let ProductsModal = this.modalCtrl.create(SelectedproductsPage, {products: this.productsArray,page: 'products'});
        ProductsModal.present();
        this.todaydate =  moment().format();


        ProductsModal.onDidDismiss(data => {

            console.log("dismiss: ", data);


            this.countedSelected = 0;
            this.caluclateProductPrice = 0;
            this.showSelectedFooter  = false;
            this.selectedPullItems = false;
            this.toggleCheckBox = false;
            this.selectedPullItems  = false;
            this.selectedReturnItems  = false;
            this.productsSendArray = [];


            if (data[0].type == 1)
            {
                //send data


                for (let i = 0; i < data[0].days.length; i++) {
                    if (data[0].days[i].choosen) {
                        this.selectedDayArray = data[0].days[i];
                    }
                }



                for (let i = 0; i < this.productsArray.length; i++) {
                    if (this.productsArray[i].choosen == true)
                    {
                        this.productsSendArray.push({
                            "PARTNAME" : this.productsArray[i].PARTNAME,
                            "SERNUM" : this.productsArray[i].SERNUM,
                            "DUEDATE": this.todaydate, /* תאריך אספקה*/
                            "TASKDATE": moment(this.selectedDayArray.date, 'YYYY-MM-DD').format(),   /* תאריך למשימה*/
                            "FROMDATE": moment(this.selectedDayArray.date+' '+this.selectedDayArray.start_hour+':00', 'YYYY-MM-DD HH:mm:ss').format(), /* משעה למשימה*/
                            "TODATE": moment(this.selectedDayArray.date+' '+this.selectedDayArray.end_hour+':00', 'YYYY-MM-DD HH:mm:ss').format() /* עד שעה למשימה*/
                        });
                    }
                }

             console.log("productsSendArray:",this.productsSendArray)

             //send to server//

                let TYPECODE;

                if (this.selectedPullType == 0)
                    TYPECODE = "13";
                else
                    TYPECODE = "14";

                let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";

                let sendData =
                    {
                        "LOADCODE": "3",
                        "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),       /* מספר לקוח */
                        "DOCDATE": this.todaydate, /* תאריך הזמנה */
                        "TYPECODE": TYPECODE ,       /* עבור שליפה יש לשים ערך 13, עבור החזרה ערך 14 */

                        "PRIT_DOCLINE_SUBFORM":

                         this.productsSendArray,

                        "PRIT_INTERFACE_SUBFORM":
                            [
                                {
                                    "EXECUTE": "Y"
                                }
                            ]
                    }


                console.log("sent data11:",JSON.stringify(sendData))
                this.server.SendPost(URL,sendData).then((data: any) => {
                    console.log(data);
                    let response = data;
                    if  (response.ok) {
                        this.Toast.presentToast("נשלח בהצלחה");
                    }
                    else {
                        this.Toast.presentToast("שגיאה, יש לנסות שוב");
                    }
                });


            } else if (data[0].type == 0) {
                this.Toast.presentToast("פעולה בוטלה");
            }

            this.resetChoosen();
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
