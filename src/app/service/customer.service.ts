import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api_config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }

  save(customer: Customer) : Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url+'/customer/create', customer);
  }

  list() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url+'/customer/list');
  }

 
 update(customer: Customer): Observable<Customer[]> {
    return this.http.put<Customer[]>(this.url+'/update/${customer.idCustomer}',
     customer);
  }

  delete(idCustomer: any) : Observable<Customer[]> {
    return this.http.delete<any>(`${this.url}/customer/delete/${idCustomer}`);
  }

  findById(idCustomer: any) : Observable<Customer[]> {
    return this.http.get<any>(`${this.url}/customer/findCustomer/${idCustomer}`);
  }

  
  
   /*update(customer: Customer): Observable<Customer[]> {
    return this.http.put<Customer[]>(this.url+'/customer/update/${customer.idCustomer');
   }*/
}