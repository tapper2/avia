import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {ProductsPage} from "../pages/products/products";
import {ContactsPage} from "../pages/contacts/contacts";
import {UserDetailsPage} from "../pages/user-details/user-details";
import { ServerService } from "../services/server-service";
import { PaymenthistoryPage } from "../pages/paymenthistory/paymenthistory";
import { ContactPage } from "../pages/contact/contact";
import { RoomsPage } from "../pages/rooms/rooms";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    
    //rootPage: any = HomePage;
    
    pages: Array<{ title: string, component: any , img:string , type:number }>;
    settings:object;
    ctypecode:string = ""
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , public server:ServerService) {
        this.initializeApp();
        
        this.server.GetData("https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS('"+localStorage.getItem("CUSTNAME")+"')").then((data: any) => {
          this.ctypecode  = data.json().CTYPECODE;
          console.log("ctypecodeMain : " , "hard coded:" + this.ctypecode);
        });

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'ראשי', component: HomePage , img:"images/menu/1.png", type:0},
            {title: 'הפריטים שלי', component: ProductsPage , img:"images/menu/2.png" , type:1},
            {title: 'יחידות איחסון', component: RoomsPage , img:"images/menu/1.png", type:2},
            {title: 'פירוט חיובים', component: PaymenthistoryPage , img:"images/menu/3.png", type:0},
            {title: 'פרטים אישיים', component: UserDetailsPage , img:"images/menu/7.png", type:0},
            {title: 'ניהול אנשי קשר', component: ContactsPage  , img:"images/menu/8.png", type:0},
            {title: 'צור קשר', component: ContactPage , img:"images/menu/9.png", type:0},
            {title: 'התנתקות', component: LoginPage , img:"images/menu/6.png", type:0}
        ];

        try
        {
            this.settings =JSON.parse(localStorage.userData);
            console.log("Sett : " , this.settings)
        }
        catch(err)
        {
            this.settings = {};
        }

        if(this.settings['CUSTNAME'])
        {
            console.log("CST : " ,this.settings['CUSTNAME']  ,   this.settings['PRIT_PASSWORD'])
            let URL = "https://aviatest.wee.co.il/odata/Priority/tabula.ini/avia/CUSTOMERS?$filter=CUSTNAME eq '" + this.settings['CUSTNAME'] + "' and PRIT_PASSWORD eq '" + this.settings['PRIT_PASSWORD']+ "'" ;
        
            this.server.GetData(URL).then((data: any) => {
                console.log("getLoginDetaild : ", data.json().value[0]);
                console.log(data.json().value[0])
                localStorage.setItem("CUSTNAME",data.json().value[0].CUSTNAME)
                localStorage.setItem("userData",JSON.stringify(data.json().value[0]))
            
            });
        }
    }
    
    checkVisible(p)
    {
        let vis = false;

        if(p.type != 1 && p.type != 2)
            vis = true
        else if(p.type == 1 && (this.ctypecode == '6' || this.ctypecode == '7'))
            vis = true;
        else if(p.type == 2 && this.ctypecode != '6')
            vis = true;
        
        return vis;
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();


            let CUSTNAME = localStorage.getItem("CUSTNAME");

            if (CUSTNAME) {
                this.nav.setRoot(HomePage);
            } else {
                this.nav.push(LoginPage); //ProductsPage LoginPage
            }
        });
    }
    
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //console.log("App" , page.component)
        if (page.component == LoginPage) {
            console.log("LO");
            localStorage.removeItem("CUSTNAME");
            localStorage.removeItem("userData");
        }
        
        this.nav.setRoot(page.component);
    }
}
