import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {TrackingPage} from "../tracking/tracking";


@Component({
  selector: 'menu-order-ticket',
  templateUrl: 'menu-order-ticket.html',
})
export class MenuOrderTicket {

  myDate : string;
  qItem : string;
  nameItem : string;
  priceItem : string;
  sum : string;

  DisplaySuccessful : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = this.navParams.get("time");
    this.qItem = this.navParams.get("qItem");
    this.nameItem = this.navParams.get("nameItem");
    this.priceItem = this.navParams.get("priceItem");
  }

  confOrder(){
        this.DisplaySuccessful = true;
        //this.navCtrl.setRoot(TrackingPage);
  }
  deleOrder(){
    //
  }


}
