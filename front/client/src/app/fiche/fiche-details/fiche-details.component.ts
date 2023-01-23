import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheDepotService} from 'src/service/fiche-depot';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-details',
  templateUrl: './fiche-details.component.html',
  styleUrls: ['./fiche-details.component.scss']
})
export class FicheDetailsComponent implements OnInit {

  id ! : string; 
  fiche$ ! : Observable<Object>;
  loading ! : boolean; 

  constructor(private ficheDepotService : FicheDepotService,private activatedRoute : ActivatedRoute) {
   }

   /**
    * Initialisation variable iso constructeur
    *   
    */
   ngOnInit() {
    this.loading = true;
	  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fiche$ = this.ficheDepotService.getUserFicheById(this.id);  
    this.loading = false;
  }


}
