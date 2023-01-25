import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../service/fiche.service';
@Component({
  selector: 'app-liste-fiche',
  templateUrl: './liste-fiche.component.html',
  styleUrls: ['./liste-fiche.component.scss']
})
export class ListeFicheComponent implements OnInit {

  ficheListe: any;
  constructor( private ficheService : FicheService) { }

  ngOnInit() {
    this.getFiche();
  }
  getFiche(){
    this.ficheService.getFiche()
    .subscribe(resultat => {
      this.ficheListe=resultat;
      console.log(resultat);
    })
  }
}
