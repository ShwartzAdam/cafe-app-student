import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotPassComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popView(){
    this.navCtrl.pop();
  }

}
