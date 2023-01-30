import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
// import { environment } from "../../environments/environment";


import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données StatService
 */
export class StatService {

  constructor(private http : HttpClient){

  }

  /**
   *
   * @returns Observable<any>
   */
  getPaiementThisYear() : Observable<any>{
    let url = environment.back+'/paiement/years';
    return this.http.get(url);
   }

   /**
    *
    * @param month
    * @param year
    * @returns Observable<any>
    */
  getPaiementMonth(month : string , year : string) : Observable<any>{
    let url = environment.back+'/paiement/days/'+month+"/"+year;
    return this.http.get(url);
   }

}
