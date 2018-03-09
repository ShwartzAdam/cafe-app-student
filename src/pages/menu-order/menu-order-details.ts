import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ItemComponent} from "../../components/item/item";

@Component({
  selector: 'page-menu-order-details',
  templateUrl: 'menu-order-details.html'
})
export class MenuOrderDetails {

  // varibles from quick-order page taken out with nav controller
  title : string;
  url : string;
  // switched to present the right form
  displayFoodList : boolean ;
  displayDrinkList : boolean ;
  // food array
  foodList : any ;
  drinkList : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('name');
    this.url = this.navParams.get('url');

    if(this.title == "Food"){
      // init food list with service
      this.foodList = [
        {id : "1", name : "Spaghetti bolognese" , price : "29 Nis", url : "/assets/png/bolognese.png",
        desc : "Fried rice is a dish of cooked rice that has been\n" +
        "stir-fried in a wok or a frying pan and is \n" +
        "usually mixed with other ingredients such \n" +
        "as eggs, vegetables, seafood, or meat. \n" +
        "It is often eaten by itself or as an \n" +
        "accompaniment to another dish." },
        {id : "2", name : "Fried Rice" , price : "5 Nis" },
      ];
      //present Food Menu
      this.displayFoodList = true;
      console.log("food")
    }else{
      // init food list with service
      this.drinkList = [
        {id : "1", name : "Coca Cola" , price : "5 Nis" },
        {id : "2", name : "Fanta" , price : "5 Nis" },
        {id : "3", name : "Sprite" , price : "5 Nis" },
        {id : "4", name : "Black Coffee" , price : "5 Nis" },
        {id : "5", name : "Water" , price : "5 Nis" },

      ];
      // present Drinks Menu
      this.displayDrinkList = true;
      console.log("drinks")
    }
  }
  pushItem(items) {
    this.navCtrl.push(ItemComponent,
      {
        id : items.id,
        name : items.name,
        description : items.desc,
        url : items.url,
        price : items.price
      });
  }

}
