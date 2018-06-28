import { Component } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  
  public userData:any;
  public userName:any;
  
  constructor() {
      if(localStorage.userData)
      {
          this.userData =  JSON.parse(localStorage.userData);
          this.userName = this.userData.CUSTDES;
      }
  }
}
