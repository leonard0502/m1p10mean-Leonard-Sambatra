import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheDepotService} from 'src/service/fiche-depot';



@Component({
  selector: 'app-fiche-garage',
  templateUrl: './fiche-garage.component.html',
  styleUrls: ['./fiche-garage.component.scss']
})
export class FicheGarageComponent implements OnInit {

  idUser ! : string; 
  listeFiche$ ! : Observable<Object[]>;
  loading ! : boolean;

  constructor(private ficheDepotService : FicheDepotService) {

   }

   /**
    * Initialisation variable iso constructeur
    *   
    */
   ngOnInit() {
    this.loading = true ; 
    this.idUser = '000000068499e1e8ab81fcd0';
    this.listeFiche$ = this.ficheDepotService.getUserFichegarage(this.idUser);  
    this.loading = false;
  }


}
