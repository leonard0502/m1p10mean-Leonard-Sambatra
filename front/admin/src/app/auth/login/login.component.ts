import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : [null],
      mdp : [null]
    });
  }

  onSubmit(){
    console.log('donnee entree: ', this.loginForm.value);
    this.userService.login(this.loginForm.value)
    .subscribe((response : any) => {
      console.log(response);
      if(response) {
        localStorage.setItem("tokenUser", response.token);
        localStorage.setItem("type", response.type);
        // if(response.type=='c'){
          this.router.navigate(['']);
        // }else if(response[0].role.intitule=='atelier'){
        //   this.router.navigate(['Atelier/reception_voiture']);
        // }else if(response[0].role.intitule=='financier'){
        //   this.router.navigate(['Financier/liste_paiement']);
        // }else{
        //   this.router.navigate(['']);
        // }
      }else {
        this.router.navigate(['auth']);
      }
      
     
    });
  }

}
