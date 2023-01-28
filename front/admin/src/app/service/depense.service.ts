import { HttpClient } from "@angular/common/http";
// import { environment } from "../../environments/environment.prod";
import { environment } from "../../environments/environment";


import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données DepenseService
 */
export class DepenseService {
 
  constructor(private http : HttpClient){

  }

  createDepense(form : any) {
    let url = environment.Depense_base_url+'/creerDepense';
    return this.http.post(url,form);
   }
   getDepense() {
    let url = environment.Depense_base_url+'/getDepense';
    return this.http.get(url);
   }
   
}
