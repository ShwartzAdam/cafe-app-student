import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {QuickOrderTicket} from "./quick-order-ticket";

@Component({
  selector: 'quick-order-details',
  templateUrl: 'quick-order-details.html'
})
export class QuickOrderDetails {

  // varibles from quick-order page taken out with nav controller
  title : string;
  url : string;
  // vars that belong to the form
  drink : string;
  crooisant : string;
  myDate : string;
  qDrink : string;
  qCross : string;
  // switched to present the right form
  displayDrinkList : boolean ;
  displayDrinkQuan : boolean ;
  displayCrosList : boolean ;
  displayCrosQuan : boolean ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('name');
    this.url = this.navParams.get('url');
    if(this.title == "Drink And Croissant"){
      //present Drink and Corissant form
      this.displayDrinkList = true;
      this.displayDrinkQuan = true;
      this.displayCrosList = true;
      this.displayCrosQuan = true;
    }else if(this.title == "Drink"){
      // present Drink form
      this.displayDrinkList = true;
      this.displayDrinkQuan = true;
    }else if(this.title == "Sandwich"){
      //present sandwich form
    }else{
      // present snack form
    }
  }
  clearOrder(){
      // remove all var from input tags
  }

  initOrder(){
      // create order and pass it to confirmation in quick-order-ticket
    let _drink = this.drink;
    let _crooisant = this.crooisant;
    let _time = this.myDate;
    let _qDrink = this.qDrink;
    let _qCross = this.qCross;

    this.navCtrl.push(QuickOrderTicket,{
      drink : this.drink,
      cross : this.crooisant,
      time : this.myDate,
      qDrink : this.qDrink,
      qCross : this.qCross
    });
  }

}
