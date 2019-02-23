import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the EditRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'edit-row',
    templateUrl: 'edit-row.html'
})
export class EditRowComponent implements OnInit {
    
    @Input() jsonKey: any;
    @Input() Data:any;
    @Input() Title:string;
    @Input() FieldType:string;
    @Input() Editable:string;
    @Input() From:string = "";
    
    //public isChanged : boolean = false;
    public isOpen = false;
    
    constructor() {
    }
    
    ngOnInit() {
        console.log("Details1 : ", this.Data[this.jsonKey] , this.jsonKey);
    }

    modelChanged(newObj) {
        this.Data.isChanged = true;
    }
    
    editRow(Editable)
    {
        if (Editable =="true")
            this.isOpen = this.isOpen == true ? false : true;
    }
    
}
