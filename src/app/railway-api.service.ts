import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RailwayApiService {

  readonly railwayAPIUrl = "https://localhost:7054";

  constructor(private http:HttpClient) { }

getCustomerList():Observable<any[]>{
  return this.http.get<any>(this.railwayAPIUrl+'/Customers');
}

getCustomer(id:number|string){
  return this.http.get(this.railwayAPIUrl + '/Customers/${id}')
}

addCustomer(data:any){
  return this.http.post(this.railwayAPIUrl + '/Customers', data);
}

updateCustomer(id:number|string, data:any){
  return this.http.put(this.railwayAPIUrl + '/Customers/${id}',data);
}

deleteCustomer(id:number|string){
  return this.http.delete(this.railwayAPIUrl + '/Customers/${id}');
}

}
