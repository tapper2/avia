import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomscalendarPage } from './roomscalendar';

@NgModule({
  declarations: [
    RoomscalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomscalendarPage),
  ],
})
export class RoomscalendarPageModule {}
