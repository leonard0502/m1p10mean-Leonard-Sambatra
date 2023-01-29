import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheDepotService} from '../../service/fiche-depot';



@Component({
  selector: 'app-fiche-garage-client',
  templateUrl: './fiche-garage-client.component.html',
  styleUrls: ['./fiche-garage-client.component.scss']
})
export class FicheGarageClientComponent implements OnInit {

  idUser ! : string;
  listeFiche$ ! : Observable<Object[]>;
  loading ! : boolean;

  getMoyenne(reps : any[]) : number{
      let ret = 0;
      if(reps.length ===0 ) {
        return 0;
      }
      reps.map((val)=>{
        ret += val.avancement;
      });
      return ret/reps.length;
  }
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
