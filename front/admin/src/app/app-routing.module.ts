import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { FicheGarageComponent } from './fiche/fiche-garage/fiche-garage.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {
    path: 'page',
    component: AdminComponent,
    children: [
      {
        path: 'garage',
        component: FicheGarageComponent
      },
      {
        path: 'statistique',
        component: StatistiqueComponent
      },
      {
        path: 'depense',
        loadChildren: () => import('./depense/depense.module').then(m => m.DepenseModule)
      }, { path: 'voiture', loadChildren: () => import('./voiture/voiture.module').then(m => m.VoitureModule)
      }, { path: 'fiche', loadChildren: () => import('./fiche/fiche.module').then(m => m.FicheModule) }

    ]
  },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
