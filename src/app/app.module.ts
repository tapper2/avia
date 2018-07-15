import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule, LOCALE_ID} from '@angular/core';
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
import {RoomsPage} from "../pages/rooms/rooms";
import {ContactsPage} from "../pages/contacts/contacts";
import {AddcontactPage} from "../pages/addcontact/addcontact";
import {ContactPage} from "../pages/contact/contact";
import {PaymentinfoPage} from "../pages/paymentinfo/paymentinfo";
import {SelectedproductsPage} from "../pages/selectedproducts/selectedproducts";
import {PaymenthistoryPage} from "../pages/paymenthistory/paymenthistory";
import {RoomscalendarPage} from "../pages/roomscalendar/roomscalendar";

import {UserDetailsPage} from "../pages/user-details/user-details";
import {ToastService} from "../services/toast-service";
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CalendarModule } from "ion2-calendar";
import { registerLocaleData } from '@angular/common';
import lcoaleDeAt from '@angular/common/locales/he';

registerLocaleData(lcoaleDeAt,'he');


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        ProductsPage,
        UserDetailsPage,
        RoomsPage,
        ContactsPage,
        ContactPage,
        AddcontactPage,
        PaymentinfoPage,
        SelectedproductsPage,
        PaymenthistoryPage,
        RoomscalendarPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule,
        HttpModule,
        CalendarModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        ProductsPage,
        UserDetailsPage,
        RoomsPage,
        ContactsPage,
        ContactPage,
        AddcontactPage,
        PaymentinfoPage,
        SelectedproductsPage,
        PaymenthistoryPage,
        RoomscalendarPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ServerService,
        ToastService,
        CallNumber,
        InAppBrowser,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        { provide: LOCALE_ID, useValue: "he" }

    ]
})
export class AppModule {
}
