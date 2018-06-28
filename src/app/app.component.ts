import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {ProductsPage} from "../pages/products/products";
import {UserDetailsPage} from "../pages/user-details/user-details";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    
    //rootPage: any = HomePage;
    
    pages: Array<{ title: string, component: any }>;
    
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();
        
        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: HomePage},
            {title: 'LogOut', component: LoginPage}
        ];
    }
    
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            console.log("1")
            if(localStorage.userData)
            {
                let UserData = JSON.parse(localStorage.userData);
                console.log(UserData)
                if (UserData.CUSTNAME != null && UserData.CUSTNAME != '')
                    this.nav.push(ProductsPage);//UserDetailsPage
                else
                    this.nav.push(LoginPage); //ProductsPage LoginPage
            }else
                this.nav.push(LoginPage); //ProductsPage LoginPage
            
        });
    }
    
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log("App" , page.component)
        if (page.component == LoginPage) {
            console.log("LO");
            localStorage.userData = '';
        }
        
        this.nav.setRoot(page.component);
    }
}
