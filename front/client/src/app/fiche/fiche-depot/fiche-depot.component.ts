import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FicheDepotService } from 'src/service/fiche-depot';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  listVehicule$ ! : Observable<Object[]>;
  idUser ! : String; 
  loading ! : boolean;

  constructor(private formBuilder : FormBuilder,private ficheDepotService : FicheDepotService,private router : Router) {

   }

   /**
    * Initialisation variable iso constructeur
    *   
    */
   ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      formVehicules : ['false'],
      idVoiture : [null],
      matricule : [null],
      marque : [null],
      type : [null]
    });
    this.loading = true;
    this.formVehicule = 'false';

    this.idUser = '000000068499e1e8ab81fcd0';
    this.listVehicule$ = this.ficheDepotService.getVoitureUser(this.idUser);   
    this.loading = false;

    
  }

  ngOnChanges() {
  }

  ngSave(){
    this.loading = true;
    this.ficheDepotService.createfiche({
      ...this.ficheForm.value,
      idUser : this.idUser,
      dateFiche : new Date(),
      etat : 0,
      reparation : [],
    }).subscribe((res : {message , error}) =>{ 
    this.loading = false;
      alert(res?.message);
      this.router.navigate(
        ['/garage'] 
       ); 
    });

  }

}
