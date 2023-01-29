import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../service/fiche.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  idFiche !: string;
  listReparation : any;
  dateNow : Date;
  somme !: number;

  constructor(private ficheService : FicheService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.idFiche=this.activatedRoute.snapshot.paramMap.get('id');
    this.dateNow = new Date(); 
    this.getFactureVoiture();
  }
  getFactureVoiture() {
    this.ficheService.getReparationParIdFiche(this.idFiche)
    .subscribe((resultat :any) => {
      this.listReparation=resultat;
      this.sommer(resultat);
      console.log(this.somme);
      console.log(resultat);
    })
  }
  sommer(array : any) {
    let total =0;
      for(let a = 0; a < array.length; a++) {
        total += array[a].prix;
      }
      this.somme = total;
  }


}
