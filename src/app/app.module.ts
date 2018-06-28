import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ComponentsModule} from "../components/components.module";
import {ServerService} from "../services/server-service";
import {HttpModule} from "@angular/http";
import {ProductsPage} from "../pages/products/products";
import {UserDetailsPage} from "../pages/user-details/user-details";
import {ToastService} from "../services/toast-service";



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        ProductsPage,
        UserDetailsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule,
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        ProductsPage,
        UserDetailsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ServerService,
        ToastService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
