import { HttpClient } from "@angular/common/http";
// import { environment } from "../../environments/environment";
import { environment } from "../../environments/environment.prod";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { Injectable } from '@angular/core';

export class Voiture {

  matricule ! : String;
  marque ! : String;
  type ! : String;

  constructor(){

  }

}

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
     this.http.post(environment.back+'/voiture',voiture).subscribe((res : {message , error}) => alert(res.message));
   }

   /**
    *  POST localhost:333/fiche/creerFiche
    */
   createfiche(fiche : any) : Observable<any> {
    // console.log(fiche);
    return this.http.post(environment.back+'/fiche/creerFiche',fiche);
   }

   /**
    *  GET Liste voiture pour un user
    */
   getVoitureUser(idUser : String) : Observable<any> {
     return this.http.get(environment.back+'/voiture/user/'+idUser).pipe(
        filter( (res : any) => (!res.message)),
        tap( error => {
          if( error.message){
          alert(" Erreur lors de la recherche de voiture "+error.message);
          }
        })
     );
   }

   /**
    *  Get List Fiche by idUser and etat<3
    */

   getUserFichegarage(idUser : string ) : Observable<any> {
        return this.http.get(environment.back+'/fiche/getFiche?idUser='+idUser+'&etat=3').pipe(
          filter( (res : any) => (!res.message)),
          tap( error => {
            if( error.message){
            alert(" Erreur lors de la recherche de voiture "+error.message);
            }
          })
       );
   }

   /**
    *  Get Fiche by Id
    */

   getUserFicheById(id : string ) : Observable<any> {
    return this.http.get(environment.back+'/fiche/getFicheById/'+id).pipe(
      filter( (res : any) => (!res.message)),
      tap( error => {
        if( error.message){
        alert(" Erreur lors de la recherche de la fiche "+error.message);
        }
      })
   );
}
}
