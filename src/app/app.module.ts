import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// main App
import { MyApp } from './app.component';
// pages
import { LoginPage } from '../pages/login/login';
import { QuickOrderPage } from '../pages/quick-order/quick-order';
import { MenuOrderPage } from '../pages/menu-order/menu-order';
import { TrackingPage } from '../pages/tracking/tracking';
// components
import { QuickOrderDetails } from '../pages/quick-order/quick-order-details';
import { MenuOrderDetails } from '../pages/menu-order/menu-order-details';
import { ItemComponent } from '../components/item/item';
// services
import { UserProvider } from '../providers/user/user';
import {SignInComponent} from "../pages/login/signin/signin";
import {ForgotPassComponent} from "../pages/login/forgotpass/forgotpass";
import {QuickOrderTicket} from "../pages/quick-order/quick-order-ticket";
import {MenuOrderTicket} from "../pages/menu-order/menu-order-ticket";
// modules
import { IonicStepperModule } from "ionic-stepper";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {WalletPage} from "../pages/wallet/wallet";
import {BasketPage} from "../pages/basket/basket";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    QuickOrderPage,
    QuickOrderDetails,
    QuickOrderTicket,
    MenuOrderPage,
    MenuOrderDetails,
    MenuOrderTicket,
    TrackingPage,
    WalletPage,
    BasketPage,
    ItemComponent,
    SignInComponent,
    ForgotPassComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStepperModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    QuickOrderPage,
    QuickOrderDetails,
    QuickOrderTicket,
    MenuOrderPage,
    MenuOrderDetails,
    MenuOrderTicket,
    TrackingPage,
    WalletPage,
    BasketPage,
    ItemComponent,
    SignInComponent,
    ForgotPassComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
