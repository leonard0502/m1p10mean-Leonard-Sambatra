import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  idVoiture !: string;
  listReparation : any;

  constructor(private voitureService : VoitureService) { }

  ngOnInit() {
  }
  getFactureVoiture() {
    this.voitureService.getReparationVoiture(this.idVoiture)
    .subscribe(resultat => {
      this.listReparation=resultat;
      console.log(resultat);
    })
  }

}
