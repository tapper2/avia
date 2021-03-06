import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from "ionic-angular";
import { AppSettings } from './app-settings'
import 'rxjs/Rx';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ServerService {

    public homePageArray: any = [];
    public appsettingsArray: any = [];
    public aviaServer = "https://aviatest.wee.co.il";
    public imageUrl = 'https://aviatest.wee.co.il/primail';
    public pdfURL = 'https://aviatest.wee.co.il/primail/invoices/';

    // public aviaServer = "https://avia.wee.co.il";
    // public imageUrl = 'https://avia.wee.co.il/primail';
    // public pdfURL = 'https://avia.wee.co.il/primail/invoices/';

    constructor(public loadingCtrl: LoadingController, private http: Http) { }

    getServerData(url) {

        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            //body.append('data', JSON.stringify(data));
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.get(AppSettings.SERVER_URL + url) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }

    deleteImg(url, img, imgArr) {
        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            body.append('id', img);
            body.append('data', JSON.stringify(imgArr));

            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL + url, body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }

    getImagesFromServer(url, arr) {
        console.log("IMG : ", arr)
        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            body.append('data', JSON.stringify(arr));
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL + url, body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }


    getRoomsBranchDays(url, branch_code) {

        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            body.append('branch_code', branch_code);
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL + url, body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }


    getWorkingDays(url, branch) {

        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            body.append('branch', branch);
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL + url, body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }


    getBranchesType9(url) {

        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL + url, body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }



    GetData(url) {
        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                //btoa('username' + ":" + 'password') ZWxpazplZTMyMzI0NQ==   //YXBpOmFwSTEwNTY=
                this.http.get(this.aviaServer + '' + url, {
                    headers:
                        new Headers(
                            {
                                'Authorization': "Basic ZWxpazplZTMyMzI0NQ==",
                                'content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        )
                }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log(err);
        } finally {
            loading.dismiss();
        }
    }




    SendPost(url, data) {
        console.log("Start99");
        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            //body.append('data', JSON.stringify(data));
            console.log("Start2");
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(this.aviaServer + '' + url, JSON.stringify(data), {
                    headers: new Headers(
                        {
                            //'Authorization' : "Basic YXBpOmFwSTEwNTY=",
                            'Authorization': "Basic " + btoa("elik:ee323245"),
                            'content-Type': 'application/json',
                            'Accept': 'application/json'
                        }

                    )
                }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => {
                        resolve(res);
                        console.log("Start3");
                        loading.dismiss();
                    })
                    .catch(err => {
                        console.log("error:", err);
                        alert("התקבלה שגיאה, יש לנסות שוב");
                        loading.dismiss();
                    });
            });

        } catch (err) {
            console.log(err);
        } finally {
            console.log("Start4");
        }
    }


    SendPatch(url, data) {
        console.log("Start99");
        let loading = this.loadingCtrl.create({ content: '...בטעינה' });
        loading.present();
        try {
            let body = new FormData();
            //body.append('data', JSON.stringify(data));
            console.log("Start2");
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.patch(this.aviaServer + '' + url, JSON.stringify(data), {
                    headers: new Headers(
                        {
                            //'Authorization' : "Basic YXBpOmFwSTEwNTY=",
                            'Authorization': "Basic " + btoa("elik:ee323245"),
                            'content-Type': 'application/json',
                            'Accept': 'application/json'
                        }

                    )
                }) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => {
                        resolve(res);
                        console.log("Start3");
                        loading.dismiss();
                    })
                    .catch(err => {
                        console.log("error:", err);
                        alert("התקבלה שגיאה, יש לנסות שוב");
                        loading.dismiss();
                    });
            });

        } catch (err) {
            console.log(err);
        } finally {
            console.log("Start4");
        }
    }
}




//this._categories.next(categories);
//resolve(this.categories);