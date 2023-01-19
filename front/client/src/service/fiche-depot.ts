import { HttpClient } from "@angular/common/http";
import { Voiture } from "src/mapping/voiture";
import { environment } from "src/environments/environment";

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/**
 * Service accès au données FicheDepotService
 */
export class FicheDepotService {
 
  constructor(private http : HttpClient){

  }

  createvoiture(voiture : Voiture) {
     this.http.post(environment.back+'/voiture',voiture).subscribe((res : {message , error}) => alert(res?.message));
   }
   
   /**
    *  POST localhost:333/fiche/creerFiche
    */
   createfiche(fiche : any) {
    // console.log(fiche);
    this.http.post(environment.back+'/fiche/creerFiche',fiche).subscribe((res : {message , error}) => alert(res?.message));
   }
}