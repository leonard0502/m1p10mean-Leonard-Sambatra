import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
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
      /**
    *  Get List Fiche by idUser and etat<3
    */

  getUserFichegarage(etat : string) : Observable<any> {
    return this.http.get(environment.back+'/fiche/etat/'+etat).pipe(
      // filter( (res : any) => (! res.message )),
      // tap( error => {
      //   if( error.message){
      //   alert(" Erreur lors de la recherche de voiture "+error.message);
      //   }
      // })
    );
   }

   modifierEtatFiche(id : string , etat : string) : any{
     return this.http.put(environment.back+'/fiche/'+id,{etat}).subscribe((res : any) => {if(res.message) {
      alert(res.message);
    } else {
      if( etat === '1' ) {
      alert("Fiche réceptionner");
      } else {
        alert("Fiche en création");
      }
    }});
   }
}
