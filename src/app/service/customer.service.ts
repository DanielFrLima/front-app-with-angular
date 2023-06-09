import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api_config';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  deleteCustomer(id: number) {
    throw new Error('Method not implemented.');
  }

  url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }
  
  save(customer: Customer) : Observable<Customer[]>{
    return this.http.post<Customer[]>(this.url+'/customer/create', customer);
  }

  list(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url+'/customer/list');
        }

 delete(idCustomer:any): Observable<Customer[]>{
    return this.http.delete<Customer[]> (`${this.url}/customer/delete/${idCustomer}`);
 }

 findById(idCustomer:any): Observable<Customer[]>{
  return this.http.get<any>(`${this.url}/customer/findCustomer/${idCustomer}`);
 }


        
}
