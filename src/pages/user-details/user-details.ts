import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-details',
    templateUrl: 'user-details.html',
})
export class UserDetailsPage implements OnInit{
    
    public userData:any;
    
    public inputFlags:object = {
        'mobile':false,
        'phone':false,
        'fax':false,
        'mail':false,
        'address':false,
        'city':false,
        'zip':false,
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.userData = JSON.parse(localStorage.userData);
        console.log("Details : " , this.userData);
    }
    
    ngOnInit()
    {
        console.log("Details1 : " , this.userData);
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad UserDetailsPage');
    }
    
    editRow(row)
    {
        console.log(row)
        this.inputFlags[row] = this.inputFlags[row] == true ? false : true;
    }
    
    showDetails()
    {
        console.log("1111" , this.userData);
    }
    
}
