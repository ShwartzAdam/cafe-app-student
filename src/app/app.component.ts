import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QuickOrderPage } from '../pages/quick-order/quick-order';
import { MenuOrderPage } from '../pages/menu-order/menu-order';
import { TrackingPage}  from '../pages/tracking/tracking';
import { LoginPage } from "../pages/login/login";
import {WalletPage} from "../pages/wallet/wallet";
import {BasketPage} from "../pages/basket/basket";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WalletPage;
  pages : any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = {
      loginPage : LoginPage,
      quickorderPage : QuickOrderPage,
      menuorderPage : MenuOrderPage,
      trackingPage : TrackingPage,
      walletPage : WalletPage,
      baskPage : BasketPage
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
