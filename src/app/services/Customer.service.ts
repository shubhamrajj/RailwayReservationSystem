import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/Customer";

@Injectable({
    providedIn: 'root'
})

export class CustomerService{
    constructor(private http: HttpClient) { }

    public getCustomer() : Observable<Customer[]> {
        return this.http.get<Customer[]>('https://localhost:7054/Customers');
    }

    public updateCustomer(customer: Customer): Observable<Customer[]> {
        return this.http.put<Customer[]>(
            'https://localhost:7054/Customers',customer);
    }

    public deleteCustomer(customer: Customer): Observable<Customer[]> {
        return this.http.delete<Customer[]>(
            'https://localhost:7054/Customers/${customer.id}');
    }

    public createCustomer(customer: Customer): Observable<Customer[]> {
        return this.http.post<Customer[]>(
            'https://localhost:7054/Customers',customer);
    }
}



// let cust = new Customer();
//         cust.Id = 1;
//         cust.Name = "Shubham";
//         cust.Age = "21";
//         cust.Gender = "Male";
//         cust.Email = "shubham@gmail.com";
//         cust.Password = "shubham@123";

//         return [cust];