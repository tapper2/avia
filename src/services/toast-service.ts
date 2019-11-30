import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings'

@Injectable()
export class ToastService {
    
    constructor(private toastCtrl: ToastController) {}
    
    presentToast(message: string) {
        console.log("Toast : " , AppSettings.TOAST);
        let toastItem = AppSettings.TOAST;
        toastItem["message"] = message;
        toastItem["duration"] = 3000;
        toastItem["cssClass"] = "mainToastClass"
        let toast = this.toastCtrl.create(toastItem);
        toast.present();
    }
}