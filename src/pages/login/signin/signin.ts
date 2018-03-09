import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SignInComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popView(){
    this.navCtrl.pop();
  }
  userValidation(){
    // check inputs for mistakes
    // post method of User
    // move to Credit loading page
  }

}
