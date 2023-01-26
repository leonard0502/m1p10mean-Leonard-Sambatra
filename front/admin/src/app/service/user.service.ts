import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données DepenseService
 */
export class VoitureService {
 
  constructor(private http : HttpClient){

  }

  login(form : any) {
    let url = environment.User_base_url+'/login';
    return this.http.get(url,form);
   }
   incription(form : any) {
    let url = environment.User_base_url+'/inscription';
    return this.http.get(url,form);
   }
}
