import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../share/share.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  imports: [ CommonModule, FormsModule, ShareModule, OrdersRoutingModule ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { }
