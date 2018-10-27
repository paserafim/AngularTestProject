import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../app/core/data.service';
import { ICustomer, IOrder } from '../share/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      console.log("--->" + orders)
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      console.log("--->" + customer)
      this.customer = customer;
    });
  }

}
