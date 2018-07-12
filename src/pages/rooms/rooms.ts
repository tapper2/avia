import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import moment from 'moment';
import {ToastService} from "../../services/toast-service";
import {SelectedproductsPage} from "../selectedproducts/selectedproducts";

/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage implements OnInit {

    public roomsArray = [];
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



  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService,private alertCtrl: AlertController, public Toast:ToastService,public modalCtrl: ModalController) {

    this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }

    async ngOnInit() {
    }

    getItems() {
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/ORDISINGLE?$filter=CUSTNAME eq '"+localStorage.getItem("CUSTNAME")+"' and PRIT_COND eq 'Y'";

        this.server.GetData(URL).then((data: any) => {
            this.roomsArray = data.json().value;
            for (let i = 0; i < this.roomsArray.length; i++) {
                this.roomsArray[i].choosen = "0";
            }
            console.log(this.roomsArray);
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


        for (let i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice+row.BASEPRICE;
            }
        }

        if (this.countedSelected > 0) {
            this.showSelectedFooter = true;
        } else {
            this.showSelectedFooter  = false;
        }

    }



    resetChoosen() {
        for (let i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.roomsArray[i].choosen = false;
            }
        }
    }

    async openProductsModal() {
        let ProductsModal = this.modalCtrl.create(SelectedproductsPage, {products: this.roomsArray,page: 'rooms'});
        ProductsModal.present();
        this.todaydate = moment().format();


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


                for (let i = 0; i < data[0].days.length; i++) {
                    if (data[0].days[i].choosen) {
                        this.selectedDayArray = data[0].days[i];
                    }
                }



                for (let i = 0; i < this.roomsArray.length; i++) {
                    if (this.roomsArray[i].choosen == true)
                    {
                        this.productsSendArray.push({
                            "PARTNAME" : this.roomsArray[i].PARTNAME,
                            "DUEDATE": moment(this.selectedDayArray.date, 'YYYY-MM-DD').format(),   /* תאריך פינוי*/
                        });
                    }
                }

                console.log("productsSendArray:",this.productsSendArray);

                //send to server//

                let TYPECODE;

                if (this.selectedPullType == 0)
                    TYPECODE = "13";
                else
                    TYPECODE = "14";


                let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";

                let sendData =
                    {
                        "LOADCODE": "6",
                        "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),       /* מספר לקוח */

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





            }

        else if (data[0].type == 0) {
            this.Toast.presentToast("פעולה בוטלה");
        }

        this.resetChoosen();
    });




    }


    clearRoom(PARTNAME) {

      this.todaydate =  moment().format();

      if (PARTNAME) {
          let Confirmalert = this.alertCtrl.create({
              title: 'אישור פנוי חדר',
              message: '',
              buttons: [
                  {
                      text: 'ביטול',
                      role: 'cancel',
                      handler: () => {
                          console.log('Cancel clicked');
                      }
                  },
                  {
                      text: 'אישור',
                      handler: () => {
                          let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                          let sendData =

                              {
                                  "LOADCODE": "6",
                                  "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),      // מספר לקוח
                                  "PRIT_DOCLINE_SUBFORM":
                                      [
                                          {
                                              "PARTNAME": PARTNAME,           //מק"ט
                                              "DUEDATE": this.todaydate   //תאריך פינוי
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
                                  this.Toast.presentToast("פינוי חדר בוצע בהצלחה");
                              }
                              else {
                                  this.Toast.presentToast("שגיאה, יש לנסות שוב");
                              }
                          });
                      }
                  }
              ]
          });
          Confirmalert.present();
      }
    }

    ClearRooms() {
        this.todaydate =  moment().format();

            let Confirmalert = this.alertCtrl.create({
                title: 'אישור פנוי חדרים',
                message: '',
                buttons: [
                    {
                        text: 'ביטול',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'אישור',
                        handler: () => {
                            let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                            let sendData =

                                {
                                    "LOADCODE": "6",
                                    "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),                                          //לקוח
                                    "DOCDATE": this.todaydate,                   //תקריך פינוי
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
                                    this.Toast.presentToast("פינוי חדרים בוצע בהצלחה");
                                }
                                else {
                                    this.Toast.presentToast("שגיאה, יש לנסות שוב");
                                }
                            });
                        }
                    }
                ]
            });
            Confirmalert.present();
    }

}
