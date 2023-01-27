import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { VoitureService } from '../../service/voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-reparation',
  templateUrl: './ajout-reparation.component.html',
  styleUrls: ['./ajout-reparation.component.scss']
})
export class AjoutReparationComponent implements OnInit {

  idFiche !: string
  ficheForm : FormGroup;
  reparationListe: any[];
  constructor(private formBuilder : FormBuilder, private voitureService : VoitureService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      intitule : [null],
      prix : [null]
    });
    this.idFiche=this.activatedRoute.snapshot.paramMap.get('id');
    this.getReparationParIdFiche();
  }
  getReparationParIdFiche(){
    this.voitureService.getReparationParIdFiche(this.idFiche)
    .subscribe((resultat: any) => {
      if(resultat.length) {
        console.log(resultat);
      this.reparationListe=resultat;
      } else { this.reparationListe = []}
    })
  }
  ngSave() {
    console.log('donnee entree: ', this.ficheForm.value);
    this.voitureService.ajoutReparation(this.ficheForm.value, this.idFiche)
    .subscribe((response) => {
      this.getReparationParIdFiche();
      console.log(response);
    })
  }


}
