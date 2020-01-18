import { Camera } from '@ionic-native/camera';


import { FilePath } from '@ionic-native/file-path';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ActionSheetController, Platform, LoadingController, ToastController, Loading } from 'ionic-angular';
import { ServerService } from "../../services/server-service";
import { ToastService } from "../../services/toast-service";
import { SelectedproductsPage } from "../selectedproducts/selectedproducts";
import moment from 'moment';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { DaypickermodalPage } from "../daypickermodal/daypickermodal";
import { ImageModalPage } from "../image-modal/image-modal";

declare var cordova: any;

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
    public imageUrl = this.server.imageUrl;
    public selectedPullItems: boolean = false;
    public selectedReturnItems: boolean = false;
    public countedSelected: number = 0;
    public showSelectedFooter: boolean = false;
    public caluclateProductPrice: number = 0;
    public selectedDayArray: any = [];
    public toggleCheckBox: boolean = false;
    public selectedPullType: number = 0;
    public productsSendArray: any = [];
    public todaydate: any = moment().format();
    public selectedAll: boolean = false;
    public image: string;
    public lastImage: string = null;
    loading: Loading;
    public currentProductId: string;
    public BeforeImagesArray: Array<string> = [];
    public ImagesArray: Array<string> = [];
    public mainURl = this.server.aviaServer;
    public imgURL: string = "https://www.tapper.org.il/avia/laravel/storage/app/public/"
    public productFields: any = {
        "isChanged": false
    }

    public type9 = 'false';




    constructor(public navCtrl: NavController, public toastCtrl: ToastController, private transfer: Transfer, public platform: Platform, public navParams: NavParams, public file: File, public filePath: FilePath, public camera: Camera, public actionSheetCtrl: ActionSheetController, public server: ServerService, public Toast: ToastService, public modalCtrl: ModalController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
        let URL = "/odata/Priority/tabula.ini/avia/SERNUMBERS?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'";
        this.BeforeImagesArray = [];

        this.server.GetData(URL).then((data: any) => {
            console.log("DTT : ", data)
            this.productsArray = data.json().value;
            for (let i = 0; i < this.productsArray.length; i++) {
                this.productsArray[i].choosen = "0";
                this.productsArray[i].isEdit = false;
                this.BeforeImagesArray.push(this.productsArray[i]['SERNUM'])
            }

            this.getImagesFromServer();
            console.log(this.productsArray);
        });

        this.type9 = localStorage.type9;
        console.log("TYPE9 : ", this.type9)
    }

    getImagesFromServer() {
        let url = "GetImages"
        this.server.getImagesFromServer(url, this.BeforeImagesArray).then((data: any) => {
            this.ImagesArray = data.json();
            console.log("IMages : ", this.ImagesArray)
        });
    }

    getImageLen(i) {
        if (this.ImagesArray[i])
            return this.ImagesArray[i].length;
        else
            return 0;
    }

    modelChanged(newObj) {
        console.log("Change");
        this.productFields.isChanged = true;
    }


    // ionViewCanLeave(): boolean {
    //     console.log("CanLeave" , this.productFields.isChanged);
    //     if (this.productFields.isChanged) {
    //         let alertBox = this.alertCtrl.create({
    //             title: 'שינוים שלא נשמרו',
    //             message: 'האם ברצונך לצאת מבלי לשמור את השינוים?',
    //             buttons: [
    //                 {
    //                     text: 'לא',
    //                     role: 'cancel',
    //                     handler: () => {
    //                         console.log('Cancel clicked');
    //                     }
    //                 },
    //                 {
    //                     text: 'כן',
    //                     handler: () => {
    //                         this.productFields.isChanged = false;
    //                         this.navCtrl.pop();
    //                     }
    //                 }
    //             ]
    //         });
    //         alertBox.present();
    //         return false;
    //     }
    // }

    ionViewCanLeave(): boolean {
        //     console.log("CanLeave : " , this.selectedPullItems  , this.selectedReturnItems )
        //    if(this.selectedPullItems || this.selectedReturnItems)
        //    {
        console.log("CanLeave : ", this.productFields.isChanged);
        if (this.productFields.isChanged) {
            // this.productFields.isChanged = false;
            let status = -1;
            for (let i = 0; i < this.productsArray.length; i++) {
                if (this.productsArray[i].STATUS == 1)
                    status = i;
            }
            console.log("CanLeave2 : ", status, this.productsArray);
            if (status >= 0) {

                // let alertPopup = this.alertCtrl.create({
                //     title: 'שים לב !!',
                //     message: 'ישנם נתונים שלא נשמרו האם ברצונך לשמור אותם ?  ',
                //     buttons: [{
                //             text: 'בטל',
                //             role: 'cancel',
                //             handler: () => {

                //                 alertPopup.dismiss().then(() => {
                //                     //this.navCtrl.push(HomePage);
                //                     this.navCtrl.pop();
                //                 })     
                //             }
                //         },
                //         {
                //             text: 'אשר',
                //             handler: () => {
                //                 this.changeStatus(status,3)
                //             }
                //         }]
                // });

                // Show the alert
                // alertPopup.present();

                // Return false to avoid the page to be popped up
                //return false;




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
                                this.changeStatus(status, 3)
                            }
                        }
                    ]

                    // buttons: [
                    //     {
                    //         text: 'לא',
                    //         role: 'cancel',
                    //         handler: () => {
                    //             console.log('Cancel clicked');
                    //         }
                    //     },
                    //     {
                    //         text: 'כן',
                    //         handler: () => {

                    //             this.navCtrl.pop();
                    //         }
                    //     }
                    // ]

                });
                alertBox.present();
                return false;


            }
        }

    }


    public exitPage() {
        this.navCtrl.popToRoot();
    }


    selectAll() {
        for (let i = 0; i < this.productsArray.length; i++) {
            if (this.selectedAll == false) {
                this.productsArray[i].choosen = true;
                this.showSelectedFooter = true;
            }
            else {
                this.productsArray[i].choosen = false;
                this.showSelectedFooter = false;
            }
        }

        this.selectProduct();
        this.selectedAll = !this.selectedAll;
    }

    ToggleCheckBox(type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;

        if (this.selectedPullType == 0) {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;

            if (this.selectedPullItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
                this.resetChoosen();
            }
        }

        if (this.selectedPullType == 1) {
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
            this.showSelectedFooter = false;
        }
    }

    selectProduct() {
        this.countedSelected = 0;
        this.caluclateProductPrice = 0;
        let isMakat100 = false;


        for (let i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                if (this.productsArray[i].PARTNAME == "100" || this.productsArray[i].PARTNAME == "101") {
                    if (isMakat100 == false) {
                        isMakat100 = true;
                        this.caluclateProductPrice += this.productsArray[i].PRIT_PRICEOUT;
                    }
                    else
                        this.caluclateProductPrice += Number(this.productsArray[i].PRIT_PRICEOUT) / 2;
                }
                else if (this.productsArray[i].PARTNAME == "102")
                    this.caluclateProductPrice += this.productsArray[i].PRIT_PRICEOUT;
                this.countedSelected++;
            }
        }

        if (this.countedSelected > 0) {
            this.showSelectedFooter = true;
        } else {
            this.showSelectedFooter = false;
        }

    }

    resetChoosen() {
        for (let i = 0; i < this.productsArray.length; i++) {
            if (this.productsArray[i].choosen == true) {
                this.productsArray[i].choosen = false;
            }
        }
    }

    fullscreenImage(img) {
        let ImageModal = this.modalCtrl.create(ImageModalPage, { url: this.imgURL + "" + img.url, id: img.id });
        ImageModal.present();

        ImageModal.onDidDismiss(data => {
            console.log("DissmisData : ", data);

            if (data['type'] == 1) {
                this.deleteImg(data['id'])
            }
        });
    }


    async deleteImg(ImgId) {
        console.log("StartDelete : ", ImgId)
        await this.server.deleteImg("deleteImg", ImgId, this.BeforeImagesArray).then((data: any) => {
            console.log("Return : ", data.json())
            this.ImagesArray = data.json();
        });
    }

    async openProductsModal() {


        await this.server.getWorkingDays("getWorkingDays", 1).then((data: any) => {
            let serverResponse = data.json();
            console.log("serverResponse", serverResponse);

            let ProductsModal = this.modalCtrl.create(SelectedproductsPage, { products: this.productsArray, page: 'products', daysArray: serverResponse, selectedPullItems: this.selectedPullItems, selectedReturnItems: this.selectedReturnItems });
            ProductsModal.present();
            this.todaydate = moment().format();


            ProductsModal.onDidDismiss(data => {

                console.log("dismiss: ", data);

                let TYPECODE;
                if (data[0].selectedPullItems == true)
                    TYPECODE = "13"
                else if (data[0].selectedReturnItems == true)
                    TYPECODE = "14"

                if (this.type9 == 'true')
                    TYPECODE = "12";

                console.log("TYPECODE  : ", data[0].selectedPullItems, data[0].selectedReturnItems, TYPECODE)

                this.countedSelected = 0;
                this.caluclateProductPrice = 0;
                this.showSelectedFooter = false;
                this.selectedPullItems = false;
                this.toggleCheckBox = false;
                this.selectedReturnItems = false;
                this.productsSendArray = [];


                if (data[0].type == 1) {
                    //send data
                    for (let i = 0; i < data[0].days.length; i++) {
                        if (data[0].days[i].choosen) {
                            this.selectedDayArray = data[0].days[i];
                        }
                    }


                    console.log("selectedDayArray", this.selectedDayArray, moment(this.selectedDayArray.formatted_date, 'DD-MM-YYYY').format())
                    //'1988-01-01 '
                    for (let i = 0; i < this.productsArray.length; i++) {
                        if (this.productsArray[i].choosen == true) {
                            this.productsSendArray.push({
                                "PARTNAME": this.productsArray[i].PARTNAME,
                                "SERNUM": this.productsArray[i].SERNUM,
                                "TASKDATE": moment(this.selectedDayArray.formatted_date, 'DD-MM-YYYY').format(),   /* תאריך למשימה*/
                                "DUEDATE": moment(this.selectedDayArray.formatted_date, 'DD-MM-YYYY').format(),   /* תאריך למשימה*/
                                "FROMDATE": moment('1988-01-01' + this.selectedDayArray.start_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format(), /* משעה למשימה*/
                                "TODATE": moment('1988-01-01 ' + this.selectedDayArray.end_hour + ':00', 'YYYY-MM-DD HH:mm:ss').format() /* עד שעה למשימה*/
                            });
                        }
                    }

                    console.log("productsSendArray:", this.productsSendArray)

                    //send to server//

                    // let TYPECODE;
                    //
                    // if (this.selectedPullType == 0)
                    //     TYPECODE = "13";
                    // else
                    //     TYPECODE = "14";

                    let URL = "/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
                    console.log(data[0].branchName, data[0])
                    let sendData =
                    {
                        "LOADCODE": "3",
                        "CUSTNAME": localStorage.getItem("CUSTNAME").toString(),       /* מספר לקוח */
                        // "DOCDATE":"", /* תאריך הזמנה  this.todaydate,*/
                        "TYPECODE": TYPECODE,       /* עבור שליפה יש לשים ערך 13, עבור החזרה ערך 14 */
                        "PRIT_DOCLINE_SUBFORM": this.productsSendArray,
                        "PRIT_INTERFACE_SUBFORM":
                            [
                                {
                                    "EXECUTE": "Y"
                                }
                            ]
                    }

                    if (this.type9) {
                        sendData['BRANCHNAME'] = data[0].branchName;
                    }


                    console.log("sent data11:", JSON.stringify(sendData))
                    this.server.SendPost(URL, sendData).then((data: any) => {
                        console.log(data);
                        let response = data;
                        if (response.ok) {
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
        });

    }



    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductsPage');
    }

    // cutImageUrl(url)
    // {
    //     //console.log("image url:",url);
    //     if (url) {
    //          let arr = url.split("/");
    //          //console.log("arr",arr);
    //          return arr[4]+"/"+arr[5]+"/"+arr[6];
    //     }
    //     else {
    //         return '';
    //     }
    //
    // }

    cutImageUrl(url, type) {
        if (url) {
            let arr = url.split("/");
            return this.imageUrl + "/" + arr[4] + "/" + arr[5] + "/" + arr[6];
        }
        else {

            if (String(type) == "100")
                return 'images/100.png';
            else if (String(type) == "101")
                return 'images/101.jpg';
            else if (String(type) == "102")
                return 'images/102.jpg';
        }

        if (this.type9 == 'true')
            return 'images/ic4.png';
    }

    changeStatus(place, status) {
        this.productsArray[place].STATUS = status;
        //this.productFields.isChanged = true;
        console.log("Change : ", this.productFields.isChanged)
        if (status == 3)
            this.navCtrl.pop();
        else if (status == 0 && this.productFields.isChanged) {
            console.log("cs1");
            this.productFields.isChanged = false;


            let URL = "/odata/Priority/tabula.ini/avia/PRIT_LOADDOC";
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

            this.server.SendPost(URL, sendData).then((data: any) => {
                console.log(data);
                let response = data;
                if (response.ok) {
                    this.Toast.presentToast("עודכן בהצלחה");
                    if (status == 3)
                        this.navCtrl.pop();
                }
                else {
                    this.Toast.presentToast("שגיאה, יש לנסות שוב");
                }
            });
        }
    }



    presentConfirm() {

    }




    //     /////////////////////////////////////////////////////////////////////////////////////////
    //     ///////////////////////////////////  add image functions ////////////////////////////////
    //     /////////////////////////////////////////////////////////////////////////////////////////


    //     public presentActionSheet() {
    //         // if(this.CarImages.length<6)
    //         // {
    //             let actionSheet = this.actionSheetCtrl.create({
    //                 title: 'Select Image Source',
    //                 buttons: [
    //                     {
    //                         text: 'Load from Library',
    //                         handler: () => {
    //                             this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //                         }
    //                     },
    //                     {
    //                         text: 'Use Camera',
    //                         handler: () => {
    //                             this.takePicture(this.camera.PictureSourceType.CAMERA);
    //                         }
    //                     },
    //                     {
    //                         text: 'Cancel',
    //                         role: 'cancel'
    //                     }
    //                 ]
    //             });
    //             actionSheet.present();
    //         // }
    //         // else
    //         //     this.presentToast('אין אפשרות להוסיף יותר מ6 תמונות');
    //     }

    //     public takePicture(sourceType) {
    //         // Create options for the Camera Dialog
    //         var options = {
    //             quality: 60,
    //             sourceType: sourceType,
    //             saveToPhotoAlbum: false,
    //             correctOrientation: true,
    //             targetWidth: 1000,
    //             targetHeight: 1000,
    //             allowEdit: true
    //         };

    //         // Get the data of an image
    //         this.camera.getPicture(options).then((imagePath) => {
    //             // Special handling for Android library
    //             console.log("f0");
    //             if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    //                 this.filePath.resolveNativePath(imagePath)
    //                     .then(filePath => {
    //                         console.log("f01");
    //                         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //                         console.log("f02");
    //                         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
    //                         console.log("f03");
    //                         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //                     });
    //             } else {
    //                 var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    //                 var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //                 this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //             }
    //         }, (err) => {
    //             this.presentToast('Error while selecting image.');
    //         });
    //     }


    //     // Create a new name for the image
    //     private createFileName() {
    //         console.log("f1");
    //         var d = new Date(),
    //             n = d.getTime(),
    //             newFileName =  n + ".jpg";
    //         return newFileName;
    //     }

    // // Copy the image to a local folder
    //     private copyFileToLocalDir(namePath, currentName, newFileName) {
    //         console.log("f2 : "+ namePath + " : " + currentName + " : " + newFileName);
    //         this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    //             this.lastImage = newFileName;
    //             this.uploadImage();
    //         }, error => {
    //             this.presentToast('Error while storing file.');
    //         });
    //     }

    //     public presentToast(text) {
    //         console.log("f3");
    //         let toast = this.toastCtrl.create({
    //             message: text,
    //             duration: 3000,
    //             position: 'bottom',
    //             cssClass: "ToastClass"
    //         });
    //         toast.present();
    //     }

    // // Always get the accurate path to your apps folder
    //     public pathForImage(img) {
    //         if (img === null) {
    //             return '';
    //         } else {
    //             return cordova.file.dataDirectory + img;
    //         }
    //     }


    //     public uploadImage() {
    //         // Destination URL
    //         console.log("Up1  : ")
    //         var url = "http://www.tapper.co.il/salecar/laravel/public/api/GetFile";
    //         // File for Upload
    //         console.log("Up2  : " + this.lastImage + " : " + this.pathForImage(this.lastImage));
    //         var targetPath = this.pathForImage(this.lastImage);

    //         // File name only
    //         var filename = this.lastImage;

    //         var options = {
    //             fileKey: "file",
    //             fileName: filename,
    //             chunkedMode: false,
    //             mimeType: "multipart/form-data",
    //             params : {'fileName': filename, 'CarId':this.Car['id']}
    //         };
    //         console.log("Up3  : " + this.Car['id']);
    //         const fileTransfer: TransferObject = this.transfer.create();

    //         this.loading = this.loadingCtrl.create({
    //             content: 'Uploading...',
    //         });
    //         this.loading.present();

    //         // Use the FileTransfer to upload the image
    //         fileTransfer.upload(targetPath, url, options).then(data => {
    //             this.loading.dismissAll()
    //             this.callToImagesFromServer(data);
    //         }, err => {
    //             this.loading.dismissAll()
    //             this.presentToast('Error while uploading file.');
    //         });
    //     }

    //     public callToImagesFromServer(data)
    //     {
    //         console.log("GT : " , JSON.parse(data.response));
    //       //  this.CarImages = JSON.parse(data.response);
    //         //console.log(this.companyService.CompaniesArray);


    //        /* this.companyService.GetCompanyById('GetCompanyById').then((data: any) => {
    //             console.log("CarAdmin : ", data);
    //             this.Car = this.companyService.CompanyAdmin['cars'][this.CarPlace];
    //             this.CarImages = this.Car['images'];
    //         });*/
    //     }


    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////  add image functions ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////


    public presentActionSheet(item) {
        // if(this.CarImages.length<6)
        // {currentProductId
        console.log("Image : ", item)
        this.currentProductId = item['SERNUM'];
        let actionSheet = this.actionSheetCtrl.create({

            buttons: [
                {
                    cssClass: 'actioSheet',
                    text: 'טען מהגלרייה',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    cssClass: 'actioSheet',
                    text: 'טען מהמצלמה',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        });
        actionSheet.present();
        // }
        // else
        //     this.presentToast('אין אפשרות להוסיף יותר מ6 תמונות');
    }

    public takePicture(sourceType) {
        // Create options for the Camera Dialog
        var options = {
            quality: 60,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetWidth: 1000,
            targetHeight: 1000,
            allowEdit: true
        };

        // Get the data of an image
        this.camera.getPicture(options).then((imagePath) => {
            // Special handling for Android library
            console.log("f0");
            if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        console.log("f01");
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        console.log("f02");
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        console.log("f03");
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        }, (err) => {
            this.presentToast('Error while selecting image.');
        });
    }


    // Create a new name for the image
    private createFileName() {
        console.log("f1");
        var d = new Date(),
            n = d.getTime(),
            newFileName = n + ".jpg";
        return newFileName;
    }

    // Copy the image to a local folder
    private copyFileToLocalDir(namePath, currentName, newFileName) {
        console.log("f2 : " + namePath + " : " + currentName + " : " + newFileName);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
            this.lastImage = newFileName;
            this.uploadImage();
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }

    public presentToast(text) {
        console.log("f3");
        let toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom',
            cssClass: "ToastClass"
        });
        toast.present();
    }

    // Always get the accurate path to your apps folder
    public pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            return cordova.file.dataDirectory + img;
        }
    }


    public uploadImage() {
        // Destination URL
        console.log("Up1  : getProductImage ")
        var url = "https://www.tapper.org.il/avia/laravel/public/api/GetFile"
        //var url = "http://www.tapper.co.il/salecar/laravel/public/api/GetFile";

        // File for Upload
        console.log("Up2  : " + this.lastImage + " : " + this.pathForImage(this.lastImage));
        var targetPath = this.pathForImage(this.lastImage);

        // File name only
        var filename = this.lastImage;

        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'ProductId': this.currentProductId },//this.currentProductId 'CarId':this.Car['id']}
        };
        console.log("Up3  : ", options);
        const fileTransfer: TransferObject = this.transfer.create();

        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        console.log("PT : ", targetPath, url, options)
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(data => {
            console.log("Return : ", data);
            this.loading.dismissAll()
            this.getImagesFromServer();
        }, err => {
            this.loading.dismissAll()
            this.presentToast('Error while uploading file.');
        });
    }

}



