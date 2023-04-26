import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Train } from "../models/Train";

@Injectable({
    providedIn: 'root'
})

export class TrainService{
    constructor(private http: HttpClient) { }

    public getTrain() : Observable<Train[]> {
        return this.http.get<Train[]>('https://localhost:7054/Trains');
    }
}

