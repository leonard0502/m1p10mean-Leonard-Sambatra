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
      if(response.nom != undefined) {
        console.log(response);
        localStorage.setItem("tokenUser", response.token);
        console.log(localStorage.getItem("tokenUser"));
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
