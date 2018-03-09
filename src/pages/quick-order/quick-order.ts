import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuickOrderDetails } from "./quick-order-details";

@IonicPage()
@Component({
  selector: 'page-quick-order',
  templateUrl: 'quick-order.html',
})
export class QuickOrderPage {

  // items for ngfor list with icons
  Items : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Items = [
      {name : "Drink And Croissant", icon :'star' , src : "assets/svg-files/cor.svg" , component : QuickOrderDetails},
      {name : "Drink", icon :'cafe' , src : "assets/svg-files/coffe.svg" , component : QuickOrderDetails },
      {name : "Sandwich" , icon :'pizza' , src : "assets/svg-files/coffe.svg" , component : QuickOrderDetails },
      {name : "Snack" , icon :'star' , src : "assets/svg-files/food.svg" ,  component : QuickOrderDetails }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickOrderPage');
  }
  pushPage(item){
    this.navCtrl.push(QuickOrderDetails,{
      name : item.name,
      url : item.src
    });
  }


}
