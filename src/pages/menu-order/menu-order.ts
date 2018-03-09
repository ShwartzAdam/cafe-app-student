import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { MenuOrderDetails } from "./menu-order-details";
@Component({
  selector: 'page-menu-order',
  templateUrl: 'menu-order.html',
})
@IonicPage()
export class MenuOrderPage {

  Items : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Items = [
      {name : "Food", icon :'pizza' , src : "assets/svg-files/cor.svg" , component : MenuOrderDetails },
      {name : "Drink", icon :'cafe' , src : "assets/svg-files/coffe.svg" , component : MenuOrderDetails },
    ];

  }
  pushPage(item) {
    this.navCtrl.push(MenuOrderDetails,{
      name : item.name
    });
  }

}
