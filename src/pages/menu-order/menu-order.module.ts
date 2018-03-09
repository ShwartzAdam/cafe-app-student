import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MenuOrderPage} from './menu-order';
import {MenuOrderDetails} from "./menu-order-details";
import {MenuOrderTicket} from "./menu-order-ticket";

@NgModule({
  declarations: [
    MenuOrderPage,
    MenuOrderDetails,
    MenuOrderTicket,
  ],
  imports: [
    IonicPageModule.forChild(MenuOrderPage),
  ],
})
export class LoginPageModule {}
