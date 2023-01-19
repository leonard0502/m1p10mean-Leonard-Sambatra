import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FicheDepotService } from 'src/service/fiche-depot';

@Component({
    selector: 'app-fiche-depot',
    templateUrl: './fiche-depot.component.html',
    styleUrls: ['./fiche-depot.component.scss']
})

export class FicheDepotComponent implements OnInit {
  /**
   * Attribut component
   *  -FormGroup mapping formulaire
   */
  
  ficheForm : FormGroup;
  repForm : FormGroup;
  formVehicule ! : String;
  listVehicule ! : Object[];
  listReparation ! : Object[];
  idUser ! : number; 

  constructor(private formBuilder : FormBuilder,private ficheDepotService : FicheDepotService) {
    console.log(this.formVehicule);
   }

   /**
    * Initialisation variable iso constructeur
    *   
    */
  ngOnInit() {
    this.idUser = 6;
    this.ficheForm = this.formBuilder.group({
      formVehicules : ['false'],
      idVoiture : [null],
      matricule : [null],
      marque : [null],
      type : [null]
    });

    this.repForm = this.formBuilder.group({
      intitule : [null],
      prix : [null]
    });

    this.formVehicule = 'false';
    this.listVehicule = [{ id : 1 , matricule : '2489 TAC' , marque : 'Audi' , type : 'léger' , selected : true},
                          { id : 2 , matricule : '1224 TAE' , marque : 'Toyota' , type : '4wd'}
                      ];
    this.listReparation = [];
  }

  ngOnChanges() {
  }

  ngSave(){
    this.ficheDepotService.createfiche({
      ...this.ficheForm.value,
      idUser : this.idUser,
      dateFiche : new Date(),
      etat : 0,
      reparation: this.listReparation,  
    });
  }
  
  ngSubmitrepare() {
    this.listReparation.push({...this.repForm.value , dateDebut : new Date() , dateFin : null , avancement : 0 });
  }

  cancelRepare(index) {
    this.listReparation.splice(index,1);
  }

}
