import { Component, OnInit } from '@angular/core';
import { DepenseService } from '../../service/depense.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.scss']
})
export class AjoutDepenseComponent implements OnInit {
  ficheForm : FormGroup;
  in: any = {
    id: null
  }
  mois = [{value:1,title:"Janvier"},"Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
  depenseListe: any;

  constructor(private formBuilder : FormBuilder, private depenseService: DepenseService) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      intitule : [null],
      montant : [null],
      mois : [null],
      annee : [null]
    });

    this.getDepense();
  }

  OnSubmit(){
    console.log('donnee entree: ', this.ficheForm.value);
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
  getInput() {
    console.log('donnee entree: ', this.ficheForm.value);

  }


}
