import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class FicheService {
 
  constructor(private http : HttpClient){

  }

   getFiche() {
    let url = environment.Fiche_base_url+'/getFiche';
    return this.http.get(url);
   }
}
