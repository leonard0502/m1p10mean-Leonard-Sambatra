import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../service/fiche.service';

@Component({
  selector: 'app-fiche-paiement',
  templateUrl: './fiche-paiement.component.html',
  styleUrls: ['./fiche-paiement.component.scss']
})
export class FichePaiementComponent implements OnInit {
  listeFiche !: any;
  somme : any[] = [];

  constructor(private ficheService : FicheService) { }

  ngOnInit() {
    this.pourPaie();
  }

  pourPaie() {
    this.ficheService.pourPaie()
    .subscribe((resultat : any) => {
      this.listeFiche = resultat;
      this.sommer(resultat);
      console.log(resultat);
    })
  }
  sommer(array : any) {
    let total =0;
    for (let i = 0; i < array.length; i++) {
      for(let a = 0; a < array[i].reparation.length; a++) {
        total += array[i].reparation[a].prix;
      } 
      console.log(total);
      this.somme.push(total);
    }
  }
  ngValider(idFiche : string,somme : number) {
    this.ficheService.validerPaiement(idFiche,somme)
    .subscribe((result) => {
      this.pourPaie();
      console.log(result);
    })
  }
  
}
