import { Component } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import { NavController } from 'ionic-angular';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  
  public userData:any;
  public userName:any;
  
  constructor(public navCtrl: NavController) {
      if(localStorage.userData)
      {
          this.userData =  JSON.parse(localStorage.userData);
          this.userName = this.userData.CUSTDES;
      }
  }

    goMainPage() {
        this.navCtrl.setRoot(HomePage);
    }
}
