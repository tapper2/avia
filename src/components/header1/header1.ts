import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../../pages/home/home";
/**
 * Generated class for the Header1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header1',
  templateUrl: 'header1.html'
})

export class Header1Component implements OnInit {
  @Input() HeaderTitle;
  @Input() type;
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

    ngOnInit()
    {
      console.log("HeaderTitle : " , this.HeaderTitle)
    }

}
