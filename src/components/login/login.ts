import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {ServerService} from "../../services/server-service";
import {ToastService} from "../../services/toast-service";
import {UserDetailsPage} from "../../pages/user-details/user-details";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    
    text: string;
    public UserId: number = 513102566;
    public Password : string = '34343434rr'
    public jsonResponse;
    constructor(public navCtrl: NavController , public server:ServerService , public Toast:ToastService) {
    }
    
    gotoHomePage() {
        this.navCtrl.push(HomePage);
    }
    
    LogIn() {
        
        let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS?$filter=CUSTNAME eq '" + this.UserId + "' and PRIT_PASSWORD eq '" + this.Password + "'" ;
        
        this.server.GetData(URL).then((data: any) => {
            console.log("getLoginDetaild : ", data.json().value[0]);
            
            if(data.json().value[0])
            {
                console.log(data.json().value[0])

                localStorage.setItem("CUSTNAME",data.json().value[0].CUSTNAME)
                localStorage.setItem("userData",JSON.stringify(data.json().value[0]))
                this.navCtrl.push(HomePage);
            }
            else
            {
                this.Toast.presentToast("הכנסת פרטים לא נכונים, אנא נסה שנית")
            }
        });
    }
    
}
