import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickOrderPage } from './quick-order';
import { QuickOrderDetails } from './quick-order-details';
import { QuickOrderTicket } from './quick-order-ticket';

@NgModule({
  declarations: [
    QuickOrderPage,
    QuickOrderDetails,
    QuickOrderTicket
  ],
  imports: [
    IonicPageModule.forChild(QuickOrderPage),
  ],
})
export class QuickOrderPageModule {}
