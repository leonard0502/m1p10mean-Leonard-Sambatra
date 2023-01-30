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
    .subscribe((response:any) => {
      console.log(response);
      if(response.nom != undefined) {
        localStorage.setItem("tokenUser", response.token);
        localStorage.setItem("type", response.type);
        localStorage.setItem("idUser", response.idUser);
        if(response.type=='c'){
          this.router.navigate(['fiche/depot']);
        }else if(response.type=='a'){
          this.router.navigate(['fiche/liste-fiche']);
        }else if(response.type=='f'){
          this.router.navigate(['statistique']);
        }else{
          this.router.navigate(['']);
        }
      }else {
        this.router.navigate(['auth']);
      }
      
     
    });
  }
}
