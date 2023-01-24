import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { FormGroup,FormBuilder } from '@angular/forms';
import { VoitureService } from '../../service/voiture.service';
@Component({
  selector: 'app-historique-reparation',
  templateUrl: './historique-reparation.component.html',
  styleUrls: ['./historique-reparation.component.scss']
})
export class HistoriqueReparationComponent implements OnInit {

  ficheForm : FormGroup;
  listVehicule ! : Observable<Object[]>;
  listReparation ! : Observable<Object[]>;
  constructor(private formBuilder : FormBuilder, private voitureService : VoitureService) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      numero : [null]
    });
  }
  getListeVoiture() {
    this.voitureService.getListeVoiture()
    .subscribe((resultat) =>{
      this.listVehicule =resultat;
    })
  }

  ngHistorique() {
    this.voitureService.getReparationVoiture(this.ficheForm.value.numero)
    .subscribe((resultat) => {
      this.listReparation=resultat;
      console.log(resultat);
    })
  }

}
