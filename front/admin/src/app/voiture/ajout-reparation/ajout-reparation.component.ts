import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-ajout-reparation',
  templateUrl: './ajout-reparation.component.html',
  styleUrls: ['./ajout-reparation.component.scss']
})
export class AjoutReparationComponent implements OnInit {

  idFiche !: string
  ficheForm : FormGroup;
  reparationListe: any;
  constructor(private formBuilder : FormBuilder, private voitureService : VoitureService) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      intitule : [null],
      prix : [null]
    });

  }
  getReparationParIdFiche(){
    this.voitureService.getReparationParIdFiche(this.idFiche)
    .subscribe(resultat => {
      this.reparationListe=resultat;
      console.log(resultat);
    })
  }
  ngSave() {
    console.log('donnee entree: ', this.ficheForm.value);
    this.voitureService.ajoutReparation(this.ficheForm.value, this.idFiche)
    .subscribe((response) => {
      console.log(response);
    })
  }


}
