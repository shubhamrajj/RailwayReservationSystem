import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/Customer.service';

@Component({
  selector: 'app-viewallcustomers',
  templateUrl: './viewallcustomers.component.html',
  styleUrls: ['./viewallcustomers.component.css']
})
export class ViewallcustomersComponent {
customers: Customer[] = [];
customerToEdit?: Customer;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService
    .getCustomer()
    .subscribe((result: Customer[]) => (this.customers = result));
  }

  updateCustomerList(cust: Customer[]) {
    this.customers=cust;
  }

  initNewCustomer(){
    this.customerToEdit = new Customer();
  }

  editCustomer(cust: Customer){
    this.customerToEdit = cust;
  }

}
