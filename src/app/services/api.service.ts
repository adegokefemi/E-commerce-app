import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  getProduct(){
    return this.httpClient.get<any>("https://fakestoreapi.com/products")
    // Pipe takes data/string etc, and transform it into another data/string.It take function to execute as an
    // argument e.g map in below but can takes multiple like 'map,filter,forEach,etc and is ipmported above.
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
