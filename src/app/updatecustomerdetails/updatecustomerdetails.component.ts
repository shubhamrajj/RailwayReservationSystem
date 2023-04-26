import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/Customer.service';

@Component({
  selector: 'app-updatecustomerdetails',
  templateUrl: './updatecustomerdetails.component.html',
  styleUrls: ['./updatecustomerdetails.component.css']
})
export class UpdatecustomerdetailsComponent implements OnInit {
  @Input() customer?: Customer;
  @Output() customerUpdated = new EventEmitter<Customer[]>();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  updateCustomer(customer: Customer) {
    this.customerService
    .updateCustomer(customer)
    .subscribe((customers: Customer[]) => this.customerUpdated.emit(customers));
  }
  deleteCustomer(customer: Customer) {
    this.customerService
    .deleteCustomer(customer)
    .subscribe((customers: Customer[]) => this.customerUpdated.emit(customers));
  
  }
  createCustomer(customer: Customer) {
    this.customerService
    .createCustomer(customer)
    .subscribe((customers: Customer[]) => this.customerUpdated.emit(customers));
  
  }

}
