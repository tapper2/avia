import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController, Loading, ToastController, AlertController } from 'ionic-angular';
import { ServerService } from '../../services/server-service';
import { ToastService } from '../../services/toast-service';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';


declare var cordova: any;
/**
 * Generated class for the Type9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type9',
  templateUrl: 'type9.html',
})
export class Type9Page {

  public productsArray: any = [];
  public product = [];
  public toggleCheckBox: boolean = false;
  public currentProductId: string;
  public lastImage: string = null;
  public imgURL: string = "https://www.tapper.org.il/avia/laravel/storage/app/public/"
  public ImagesArray: Array<string> = [];
  public BeforeImagesArray: Array<string> = [];
  public productFields: any = {
    "isChanged": false
  }
  public lastSaveObject = {}
  public mainText = this.server.appsettingsArray['type9']
  public isChanged: boolean = false;
  loading: Loading;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public server: ServerService,
    public Toast: ToastService,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private transfer: Transfer,
    public platform: Platform,
    public file: File,
    public filePath: FilePath,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController) {

    let URL = "/odata/Priority/tabula.ini/avia/PRIT_ORDIAPI?$filter=CUSTNAME eq '" + localStorage.getItem("CUSTNAME") + "'&$expand=PRIT_ORDISERN_SUBFORM";

    this.server.GetData(URL).then((data: any) => {
      console.log("Type9 : ", data.json().value);
      this.product = data.json().value;
      this.product = this.product[0]
      this.productsArray = this.product['PRIT_ORDISERN_SUBFORM']
      console.log("Type9 : ", this.productsArray, this.product)

      for (let i = 0; i < this.productsArray.length; i++) {
        this.productsArray[i].choosen = "0";
        this.productsArray[i].isEdit = false;
        this.BeforeImagesArray.push("type_9_" + this.productsArray[i]['CUSTNUM'])
      }
      console.log("Type9 : ", this.productsArray, this.product)
      this.getImagesFromServer();
      console.log(this.productsArray);
    });
  }

  modelChanged(newObj) {
    console.log("Change");
    this.productFields.isChanged = true;
    this.isChanged = true;
  }

  cutImage(url, type) {
    if (url) {
      let arr = url.split("/");
      return this.imgURL + "/" + arr[4] + "/" + arr[5] + "/" + arr[6];
    }
    else {
      if (String(type) == "100")
        return 'images/100.png';
      else if (String(type) == "101")
        return 'images/101.jpg';
      else if (String(type) == "102")
        return 'images/102.jpg';
      else
        return 'images/ic3.png';
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Type9Page');
  }


  getImageLen(i) {
    if (this.ImagesArray[i])
      return this.ImagesArray[i].length;
    else
      return 0;
  }


  changeStatus(place, status, type?) {
    if (status == 0 && type == 1) {
      if (this.productsArray[place].CUSTNUM == "" || !this.productsArray[place].CUSTNUM)
        alert("חובה להכניס מספר מוצר");
      else if (this.productsArray[place].CUSTREMARK == "" || !this.productsArray[place].CUSTREMARK)
        alert("חובה להכניס פירוט מוצר");
      else
        this.productsArray[place].STATUS = status;
    } else
      this.productsArray[place].STATUS = status;

    if (status == 1) {
      this.lastSaveObject = { ...this.productsArray[place] }
    }

    if (status == 0 && type == 0) {
      this.productsArray[place] = { ...this.lastSaveObject }
      this.productsArray[place].STATUS = status;
    }
    //this.productFields.isChanged = true;
    console.log("Change : ", this.productFields.isChanged)

    //CUSTNUM CUSTREMARK
    // if (status == 3)
    //   this.navCtrl.pop();
    // else if (status == 9 && this.productFields.isChanged) {

    // }
  }

  buildArryForServer() {
    let arr = [];
    for (let item of this.productsArray) {
      let it = {
        "KLINE": item['KLINE'],                                                     // מספר שורה אם קיימת   
        "CUSTNUM": item['CUSTNUM'],                                         //מספר ארגז של הלקוח    
        "CUSTREMARK": item['CUSTREMARK'],
      }

      arr.push(it);
    }

    return arr;
  }

  ionViewCanLeave(): boolean {
    if (this.isChanged) {
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
              this.isChanged = false;
              this.navCtrl.pop();
            }
          }
        ]
      });
      alertBox.present();
      return false;
    }
  }

  onSubmit() {
    this.productFields.isChanged = false;
    let pr = this.productsArray;

    let URL = "/odata/Priority/tabula.ini/avia/PRIT_ORDIAPI";
    let obArray = this.buildArryForServer();
    let sendData = {
      "ORDI": this.product['ORDI'],                                              //   מזהה שורת ההזמנה
      "PRIT_ORDISERN_SUBFORM": obArray
    }



    // let sendData =
    // {
    //   "ORDI": 168000,
    //   "PRIT_ORDISERN_SUBFORM": [{
    //     "KLINE": 2,
    //     "CUSTNUM": "1",
    //     "CUSTREMARK": "test1"
    //   }, {
    //     "KLINE": 3,
    //     "CUSTNUM": "2",
    //     "CUSTREMARK": "test1"
    //   }, {
    //     "KLINE": 4,
    //     "CUSTNUM": "3",
    //     "CUSTREMARK": "test1"
    //   }, {
    //     "KLINE": 1,
    //     "CUSTNUM": "1",
    //     "CUSTREMARK": "בדיקה"
    //   }]
    // }

    console.log("Send : ", JSON.stringify(sendData))
    this.server.SendPatch(URL, sendData).then((data: any) => {
      console.log(data);
      let response = data;
      if (response.ok) {
        this.Toast.presentToast("עודכן בהצלחה");
        // if (status == 3)
        //   this.navCtrl.pop();
      }
      else {
        this.Toast.presentToast("שגיאה, יש לנסות שוב");
      }
    });

  }


  /////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////  add image functions ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////


  public presentActionSheet(item) {

    console.log("Image : ", item)
    this.currentProductId = item['CUSTNUM'];
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

  getImagesFromServer() {
    console.log("Before : ", this.BeforeImagesArray)
    let url = "GetImages"
    this.server.getImagesFromServer(url, this.BeforeImagesArray).then((data: any) => {
      this.ImagesArray = data.json();
      console.log("IMages : ", this.ImagesArray)
    });
  }

}


// {
//   shops: [{
//     shopId: 1,
//     name: "Clothing Store",
//     categories: {
//       name: "shirts",
//       items: [
//         {
//           itemId: 1,
//           name: "חולצת חורף",
//         }, {
//           itemId: 2,
//           name: "חולצה קצרה לגבר",
//         }, {
//           itemId: 3,
//           name: "גופייה",
//         }
//       ]
//     }
//   },
//   {
//     shopId: 2,
//     name: "furniture shop",
//     categories: {
//       name: "Salons",
//       items: [
//         {
//           itemId: 1,
//           name: "סלון 2+3",
//         }, {
//           itemId: 2,
//           name: "סלון עור איטלקי",
//         }, {
//           itemId: 3,
//           name: "סלון פינתי",
//         }
//       ]
//     }
//   }, {
//     shopId: 3,
//     name: "supermarket",
//     categories: {
//       name: "Dairy Department",
//       items: [
//         {
//           itemId: 1,
//           name: "גבינה צהובה",
//         }, {
//           itemId: 2,
//           name: "גבינה לבנה",
//         }, {
//           itemId: 3,
//           name: "מעדן גבינה",
//         }
//       ]
//     }
//   }
//   ]
// }
