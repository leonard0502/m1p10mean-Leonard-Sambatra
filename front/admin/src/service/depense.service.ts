import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données DepenseService
 */
export class depenseService {
 
  constructor(private http : HttpClient){

  }

  createDepense(form : any) {
    let url = environment.Depense_base_url+'/creerDepense';
    return this.http.post(url,form);
   }
   
}
