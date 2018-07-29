import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerService} from "../../services/server-service";
import {AppSettings} from "../../services/app-settings";

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  articleIndex:any = '';
  articleData : any[] = [];
  public imageHost:any = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public server:ServerService) {
      this.imageHost = AppSettings.IMAGE_URL;
      this.articleIndex =  this.navParams.get('articleIndex');
      this.articleData = this.server.homePageArray.articles[this.articleIndex];
      console.log("article:",this.articleData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
