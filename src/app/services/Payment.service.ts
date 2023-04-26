import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Payment } from "../models/Payment";

@Injectable({
    providedIn: 'root'
})

export class CustomerService{
    constructor(private http: HttpClient) { }

    public getPayment() : Observable<Payment[]> {
        return this.http.get<Payment[]>('https://localhost:7054/Payments');
    }
}