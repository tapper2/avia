import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastService } from "../../services/toast-service";
import { ServerService } from '../../services/server-service';

/**
 * Generated class for the SelectedproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-selectedproducts',
    templateUrl: 'selectedproducts.html',
})
export class SelectedproductsPage {

    public caluclateProductPrice: number = 0;
    public countSelectedDays: number = 0
    public myProducts: any = [];
    public daysOptions: any = [];
    public pageName: any = '';
    dayName: any[] = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    public selectedPullItems: boolean = false;
    public selectedReturnItems: boolean = false;
    public selectedPullType: number;
    public showSelectedFooter: boolean = false;
    public toggleCheckBox: boolean = false;
    public userData: any;
    public userName: string = "";
    public type9;
    public branches: Array<object>;
    public currentBranch;

    constructor(public navCtrl: NavController, public server: ServerService, public navParams: NavParams, public viewCtrl: ViewController, public Toast: ToastService) {
        console.log("products:", navParams.get('products'));
        this.myProducts = navParams.get('products');
        this.daysOptions = navParams.get('daysArray');
        this.pageName = navParams.get('page');
        this.selectedPullItems = navParams.get('selectedPullItems');
        this.selectedReturnItems = navParams.get('selectedReturnItems');

        this.type9 = localStorage.type9;

        if (this.type9)
            this.getAllBranchesFromServer();

        if (localStorage.userData) {
            this.userData = JSON.parse(localStorage.userData);
            this.userName = this.userData.CUSTDES;
        }

        this.caluclateProductPrice = 0;

        for (let i = 0; i < this.daysOptions.length; i++) {
            this.daysOptions[i].choosen = false;
        }


        for (let i = 0; i < this.myProducts.length; i++) {
            if (this.myProducts[i].choosen == true) {
                this.caluclateProductPrice = this.caluclateProductPrice + this.myProducts[i].PRIT_PRICEOUT;
            }
        }

        console.log("daysOptions:", this.daysOptions)
    }


    selectDay(row) {


        for (let i = 0; i < this.daysOptions.length; i++) {

            if (row.id != this.daysOptions[i].id) {
                this.daysOptions[i].choosen = false;
            }
        }

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SelectedproductsPage');
    }

    ToggleCheckBox(type) {
        // this.toggleCheckBox = !this.toggleCheckBox;
        this.selectedPullType = type;

        if (this.selectedPullType == 0) {
            this.selectedPullItems = !this.selectedPullItems;
            this.selectedReturnItems = false;

            if (this.selectedPullItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
            }
        }

        if (this.selectedPullType == 1) {
            this.selectedPullItems = false;
            this.selectedReturnItems = !this.selectedReturnItems;

            if (this.selectedReturnItems)
                this.toggleCheckBox = true;
            else {
                this.toggleCheckBox = false;
            }
        }

        if (!this.toggleCheckBox) {
            this.showSelectedFooter = false;
        }
    }

    sendSelectedProducts(type) {
        console.log(this.branches, this.currentBranch)
        let branchName = this.branches.find((ob) => ob['id'] == this.currentBranch);
        console.log("branchName : ", branchName);
        branchName = branchName['title'];
        console.log("branchName : ", branchName);
        let options = [
            {
                type: type,
                days: this.daysOptions,
                selectedReturnItems: this.selectedReturnItems,
                selectedPullItems: this.selectedPullItems,
                branchName: branchName
            }
        ];


        if (type == 1) {
            this.countSelectedDays = 0;

            for (let i = 0; i < this.daysOptions.length; i++) {
                if (this.daysOptions[i].choosen == true) {
                    this.countSelectedDays++;
                }
            }

            if (this.countSelectedDays == 0)
                this.Toast.presentToast("יש לבחור יום");
            else {
                this.viewCtrl.dismiss(options);
            }
        } else {
            this.viewCtrl.dismiss(options);
        }


    }

    getAllBranchesFromServer() {
        this.server.getBranchesType9("getBranchesType9").then((data: any) => {
            console.log("Type9 : ", data.json());
            this.branches = data.json();
            this.currentBranch = String(this.branches[0]['id']);
            this.getWorkingDaysByBranch();
        });
    }

    modelChanged(event) {
        console.log("CurrentBranch : ", this.currentBranch)
    }


    async getWorkingDaysByBranch(event?) {
        await this.server.getWorkingDays("getWorkingDays", this.currentBranch).then((data: any) => {
            this.daysOptions = data.json();
        });
    }


}



// id: 9
// title: "הראל"
// branch_code: "1"
// description: "שעות פעילות:,↵א'-ה': 08:00-16:00, ↵ו': 08:00-13:00,↵*יש לעדכן את המשרד לאחר פינוי יחידת האחסון"
// open_saturday: 0
// type9: 1
// created_at: "2018-08-19 13:45:17"
// updated_at: "2019-12-26 11:45:21"