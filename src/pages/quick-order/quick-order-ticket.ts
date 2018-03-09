import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'quick-order-ticket',
  templateUrl: 'quick-order-ticket.html',
})
export class QuickOrderTicket {

  drink : string;
  crooisant : string;
  myDate : string;
  qDrink : string;
  qCross : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drink = this.navParams.get("drink");
    this.crooisant = this.navParams.get("cross");
    this.myDate = this.navParams.get("time");
    this.qDrink = this.navParams.get("qDrink");
    this.qCross = this.navParams.get("qCross");
  }

  deleOrder(){

  }

  confOrder(){
      // show receipt with the Order Data and Tx so we could track it (tracking page)
  }


}
