import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import moment from 'moment';
import {ToastService} from "../../services/toast-service";

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
    public todaydate :any = moment().format();

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerService,private alertCtrl: AlertController, public Toast:ToastService) {

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
            console.log(this.roomsArray);
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
