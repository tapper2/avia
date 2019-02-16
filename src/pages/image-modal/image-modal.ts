import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ImageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-image-modal',
  templateUrl: 'image-modal.html',
})
export class ImageModalPage {
  public imgUrl:string;
  public id:string;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController , public navParams: NavParams) {
    this.imgUrl = navParams.get('url');
    this.id = navParams.get('id');
    console.log("Modal : " , this.imgUrl)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageModalPage');
  }

  onDissmiss(num)
  {
    let obj = {
      type:num,
      id:this.id
    }
    this.viewCtrl.dismiss(obj);
  }

}
