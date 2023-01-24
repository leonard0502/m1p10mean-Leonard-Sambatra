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

  ajoutReparation(form : any, id :any) {
    let url = environment.Depense_base_url+'/ajoutReparation/'+id;
    return this.http.post(url,form);
   }
   getReparationParIdFiche(idFiche : string) {
    let url = environment.Depense_base_url+'/getReparationParIdFiche/'+idFiche;
    return this.http.get(url);
   }
   getListeVoiture(){
    let url = environment.Voiture_base_url;
    return this.http.get(url);
   }
   getReparationVoiture(idVoiture : string) {
    let url = environment.Voiture_base_url+'/getAllRepParVoiture/'+idVoiture;
    return this.http.get(url);
   }
}
