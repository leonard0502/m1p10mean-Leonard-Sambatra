import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../service/fiche.service';
@Component({
  selector: 'app-liste-fiche',
  templateUrl: './liste-fiche.component.html',
  styleUrls: ['./liste-fiche.component.scss']
})
export class ListeFicheComponent implements OnInit {
  loading ! : boolean;
  ficheListe: any;
  constructor( private ficheService : FicheService) { }

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

  ngOnInit() {
    this.loading = true;
    this.getFiche();
    this.loading = false;
  }

  getFiche(){
    this.ficheService.getFiche()
    .subscribe(resultat => {
      this.ficheListe=resultat;
      console.log(resultat);
    })
  }

  async bonDeSotie(_id : string) {
    this.loading = true;
    const stop= await this.ficheService.modifierEtatFiche(_id,'2');
    this.getFiche();
    this.loading = false;
  }
}
