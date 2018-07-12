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

    public isOpen = false;
    
    constructor() {
    }
    
    ngOnInit() {
        console.log("Details1 : ", this.Data[this.jsonKey] , this.jsonKey);
    }
    
    editRow()
    {
        this.isOpen = this.isOpen == true ? false : true;
    }
    
}
