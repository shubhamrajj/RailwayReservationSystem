import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LoginDetails } from "./login-details.model";

@Injectable({
    providedIn:'root'
})
export class LoginDetailsService{
    constructor(private http:HttpClient){ }

    formData: LoginDetails = new LoginDetails();
    readonly baseUrl = 'https://localhost:7054/Admin/AdminLogin';

    postLogin(){
        return this.http.post(this.baseUrl,this.formData);
    }

}