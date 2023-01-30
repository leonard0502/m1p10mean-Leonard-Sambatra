import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
// import { environment } from "../../environments/environment";


import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données DepenseService
 */
export class UserService {
 
  constructor(private http : HttpClient){

  }

  login(form : any) {
    let url = environment.User_base_url+'/login';
    return this.http.post(url,form);
   }
   inscription(form : any) {
    let url = environment.User_base_url+'/inscription';
    console.log(form);
    return this.http.post(url,form);
   }
}
