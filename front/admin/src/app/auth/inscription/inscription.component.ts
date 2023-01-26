import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      nom : [null],
      prenom : [null],
      email : [null],
      contact :[null],
      mdp : [null]
    });
  }

  onSubmit(){
    console.log('donnee: ', this.inscriptionForm.value);
    this.userService.inscription(this.inscriptionForm.value)
    .subscribe((response) => {
      console.log(response);
      if(response) {
        localStorage.setItem("tokenUser", response[0].token);
        // if(response[0].type=='f'){
        //   this.router.navigate(['Client/depot_voiture']);
        // }else if(response[0].role.intitule=='atelier'){
        //   this.router.navigate(['Atelier/reception_voiture']);
        // }else if(response[0].role.intitule=='financier'){
        //   this.router.navigate(['Financier/liste_paiement']);
        // }else{
        //   this.router.navigate(['']);
        // }
      }else {
        this.router.navigate(['']);
      }
      
     
    });
  }
}
