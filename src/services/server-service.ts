import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {LoadingController} from "ionic-angular";
import { AppSettings } from './app-settings'
import 'rxjs/Rx';

import { Http, Headers, RequestOptions} from '@angular/http';
import { HttpModule } from '@angular/http';
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";


@Injectable()
export class ServerService {

    public homePageArray:any = [];

    constructor(public loadingCtrl: LoadingController,
                private http: Http) {

    }


    getServerData(url) {

        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        try {
            let body = new FormData();
            //body.append('data', JSON.stringify(data));
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.get(AppSettings.SERVER_URL+url) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log( err);
        } finally {
            loading.dismiss();
        }
    }


    getRoomsBranchDays(url,branch_code) {

        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        try {
            let body = new FormData();
            body.append('branch_code', branch_code);
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL+url,body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log( err);
        } finally {
            loading.dismiss();
        }
    }


    getWorkingDays(url) {

        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        try {
            let body = new FormData();
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(AppSettings.SERVER_URL+url,body) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log( err);
        } finally {
            loading.dismiss();
        }
    }


    
    GetData(url) {
        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        try {
            let body = new FormData();
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                //btoa('username' + ":" + 'password')
                this.http.get(url,{ headers: new Headers(
                    {
                        'Authorization' : "Basic YXBpOmFwSTEwNTY=",
                        'content-Type'  : 'application/json',
                        'Accept'        : 'application/json'
                    }
                )}) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });
            
        } catch (err) {
            console.log( err);
        } finally {
            loading.dismiss();
        }
    }




    SendPost(url,data) {
        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        try {
            let body = new FormData();
            //body.append('data', JSON.stringify(data));
            return new Promise((resolve, reject) => {  //return a promise to the calling function so it can handle the response
                this.http.post(url,JSON.stringify(data),{ headers: new Headers(
                    {
                        'Authorization' : "Basic YXBpOmFwSTEwNTY=",
                        'content-Type'  : 'application/json',
                        'Accept'        : 'application/json'
                    }
                )}) //for post, put and delete put the body before the headers
                    .toPromise()
                    .then(res => resolve(res))
                    .catch(err => console.log("error:", err));
            });

        } catch (err) {
            console.log( err);
        } finally {
            loading.dismiss();
        }
    }
}




//this._categories.next(categories);
//resolve(this.categories);