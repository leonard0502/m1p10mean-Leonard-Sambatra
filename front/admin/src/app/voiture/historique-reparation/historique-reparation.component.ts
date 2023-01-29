import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { VoitureService } from '../../service/voiture.service';
@Component({
  selector: 'app-historique-reparation',
  templateUrl: './historique-reparation.component.html',
  styleUrls: ['./historique-reparation.component.scss']
})
export class HistoriqueReparationComponent implements OnInit {

  ficheForm : FormGroup;
  listVehicule ! : any;
  listReparation ! : any;
  constructor(private formBuilder : FormBuilder, private voitureService : VoitureService) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      numero : [null]
    });
    this.getListeVoiture();
  }
  getListeVoiture() {
    this.voitureService.getListeVoiture()
    .subscribe((resultat) =>{
      this.listVehicule =resultat;
      console.log(resultat);
    })
  }

  ngHistorique() {
    console.log("huhu", this.ficheForm.value.numero);
    this.voitureService.getReparationVoiture(this.ficheForm.value.numero)
    .subscribe((resultat : any) => {
      this.listReparation=resultat;
      console.log(resultat);
    })
  }

}
