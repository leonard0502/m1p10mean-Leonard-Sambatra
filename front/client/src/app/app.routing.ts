import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FicheDepotComponent } from './fiche/fiche-depot/fiche-depot.component';
import { FicheGarageComponent } from './fiche/fiche-garage/fiche-garage.component';
import { FicheDetailsComponent } from './fiche/fiche-details/fiche-details.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'depot',             component: FicheDepotComponent },
    { path: 'garage',             component: FicheGarageComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'fiche/:id',          component: FicheDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
