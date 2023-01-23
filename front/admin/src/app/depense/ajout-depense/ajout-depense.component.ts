import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/service/depense.service';


@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.scss']
})
export class AjoutDepenseComponent implements OnInit {
  form: any = {
    intitule: null,
    montant: null,
    mois: null,
    annee: null
  };
  depenseListe: any;

  constructor( private depenseService: DepenseService) { }

  ngOnInit() {
    this.getDepense();
  }

  OnSubmit(){
    console.log('donnee entree: ', this.form);
    // this.depenseService.createDepense(this.form)
    // .subscribe((response) => {
    //   console.log(response);
    //   this.router.navigate(['Client/reparation_voiture']);
    // });
  }
  getDepense(){
    // this.depenseService.getDepense()
    // .subscribe(resultat => {
    //   this.depenseListe=resultat.data;
    //   console.log(resultat.data);
    // })
  }


}
