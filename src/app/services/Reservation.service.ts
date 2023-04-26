import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reservation } from "../models/Reservation";

@Injectable({
    providedIn: 'root'
})

export class CustomerService{
    constructor(private http: HttpClient) { }

    public getPayment() : Observable<Reservation[]> {
        return this.http.get<Reservation[]>('https://localhost:7054/Reservations');
    }
}