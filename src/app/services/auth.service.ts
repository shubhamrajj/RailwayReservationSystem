import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, isObservable, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }
    currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
    baseServerUrl = 'https://localhost:7054/'
    jwtHelperService = new JwtHelperService();
   
   
    public login(user: User): Observable<string> {
        return this.http.post('https://localhost:7054/Admin/AdminLogin', user, { responseType: 'text', });

    }


    loginadmin(loginInfo: Array<string>) {
        return this.http.post(this.baseServerUrl + 'Admin/AdminLogin',
            {
                Username: loginInfo[0],
                Password: loginInfo[1]
            },
            {
                responseType: 'text',
            }
        );
    }

    registerUser(customer: Array<String>) {

        return this.http.post(this.baseServerUrl + 'Customers/CreateCustomer',
            {
                Name: customer[0],
                Age: customer[1],
                Gender: customer[2],
                Email: customer[3],
                Password: customer[4]
            },
            {
                responseType: 'text',
            }
        );
    }



    loginUser(loginInfo: Array<string>) {
        return this.http.post(this.baseServerUrl + 'Customers/CustomerLogin',
            {
                Username: loginInfo[0],
                Password: loginInfo[1]
            },
            {
                responseType: 'text',
            }
        );
    }


    setToken(token: string) {
        localStorage.setItem("access_token", token);
        this.loadCurrentUser();
    }



    loadCurrentUser() {
        const token = localStorage.getItem("access_token");
        const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
        const data = userInfo ? {
            CustomerId: userInfo.CustomerId,
            name: userInfo.name,
            age: userInfo.age,
            gender: userInfo.gender,
            email: userInfo.email,
            password: userInfo.password
        } : null;
        this.currentUser.next(data);
    }



    isLoggedin(): boolean {
        return localStorage.getItem("access_token") ? true : false;
    }



    removeToken(){
        localStorage.removeItem("access_token");
    }
}