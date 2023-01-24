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
  depenseListe: any;

  constructor(private formBuilder : FormBuilder,  private depenseService: DepenseService) { }

  ngOnInit() {
    this.ficheForm = this.formBuilder.group({
      intitule : [null],
      montant : [null],
      dateDepense : [null]
    });

    this.getDepense();
  }

  getDepense(){
    this.depenseService.getDepense()
    .subscribe(resultat => {
      this.depenseListe=resultat;
      console.log(resultat);
    })
  }
  ngSave() {
    console.log('donnee entree: ', this.ficheForm.value);
    this.depenseService.createDepense(this.ficheForm.value)
    .subscribe((response) => {
      console.log(response);
      this.getDepense();
    })
  }


}
