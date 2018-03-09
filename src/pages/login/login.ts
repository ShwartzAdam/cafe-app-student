import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {QuickOrderPage} from "../quick-order/quick-order";
import {ForgotPassComponent} from "./forgotpass/forgotpass";
import {SignInComponent} from "./signin/signin";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  auth(){
    // user service check email and password
    this.navCtrl.setRoot(QuickOrderPage);
  }

  pushView(id){
    if(id == 1){
      this.navCtrl.push(SignInComponent);
    }else if(id == 2){
      this.navCtrl.push(ForgotPassComponent);
    }else{
      return;
    }
  }

}
