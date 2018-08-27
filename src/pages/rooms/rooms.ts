import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import moment from 'moment';
import {ToastService} from "../../services/toast-service";
//import {SelectedproductsPage} from "../selectedproducts/selectedproducts";
//import {RoomscalendarPage} from "../roomscalendar/roomscalendar";
import {DaypickermodalPage} from "../daypickermodal/daypickermodal";

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
    public roomsArray1 = [];
    public imageUrl = 'https://aviatest.wee.co.il/primail/';


    public selectedReturnItems : boolean = false;
    public countedSelected : number = 0;
    public showSelectedFooter : boolean = false;
    public caluclateProductPrice : number = 0;
    public toggleCheckBox: boolean = false;
    public selectedPullType : number = 0;
    public productsSendArray: any = [];
    public todaydate :any = moment().format();
    public selectedDayArray : any = [];




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
        this.selectedPullType = type;


        if (this.selectedPullType == 1)
        {
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
        this.roomsArray1 = [];


        for (let i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                this.countedSelected++;
                this.caluclateProductPrice = this.caluclateProductPrice+this.roomsArray[i].BASEPRICE;
                this.roomsArray1.push(this.roomsArray[i]);
                // console.log("BASEPRICE",row.BASEPRICE)
                // console.log("caluclateProductPrice",this.caluclateProductPrice)
            }
        }

        console.log("roomsArray1",this.roomsArray1);

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

      let selectedBranch = '';
      let branchFlag = 0;



        for (let g = 0; g < this.roomsArray1.length; g++) {
            selectedBranch = this.roomsArray1[0].SPEC1;
        }

        //check none matches branches
        for (let i = 0; i < this.roomsArray.length; i++) {
            if (this.roomsArray[i].choosen == true) {
                if (selectedBranch != this.roomsArray[i].SPEC1) {
                    branchFlag = 1;
                } else {
                    branchFlag = 0;
                }
            }
        }


        if (branchFlag == 1)  {
            this.Toast.presentToast("לא ניתן לבצע הודעה על פינוי ל 2 סניפים שונים");
        } else {
            await this.server.getRoomsBranchDays("getBranchDays",selectedBranch).then((data: any) => {
                let serverResponse = data.json();
                console.log("serverResponse",serverResponse)
                if (serverResponse.length == 0) {
                    this.Toast.presentToast("לא נמצאו שעות פעילות לסניף שנבחר");
                } else {
                    let ProductsModal = this.modalCtrl.create(DaypickermodalPage, {products: this.roomsArray,page: 'rooms',daysArray:serverResponse});
                    ProductsModal.present();
                    this.todaydate = moment().format();


                    ProductsModal.onDidDismiss(data => {

                        console.log("dismiss: ", data);


                        this.countedSelected = 0;
                        this.caluclateProductPrice = 0;
                        this.showSelectedFooter  = false;
                        this.toggleCheckBox = false;
                        this.selectedReturnItems  = false;
                        this.productsSendArray = [];
                        this.roomsArray1 = [];

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
                                        "DUEDATE": moment(this.selectedDayArray.regular_date, 'YYYY-MM-DD').format(),   /* תאריך פינוי*/
                                    });
                                }
                            }

                            console.log("productsSendArray:",this.productsSendArray);

                            //send to server//



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
            });
        }
    }

}
