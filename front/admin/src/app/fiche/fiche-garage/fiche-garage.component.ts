import { Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FicheService } from '../../service/fiche.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-fiche-garage',
  templateUrl: './fiche-garage.component.html',
  styleUrls: ['./fiche-garage.component.scss']
})
export class FicheGarageComponent implements OnInit{
  creer ! : [];
  enreception ! : [];
  loadingcreer ! : boolean;
  loadingrecep ! : boolean;

  constructor(private ficheService : FicheService){

  }

  ngOnInit() {
  this.loadingcreer = true;
  this.loadingrecep = true;

    this.ficheService.getUserFichegarage('0').subscribe((value)=>{
      if(value.length){
        this.creer= value;
      } else {
        this.creer=[];
      }
      this.loadingcreer = false;
    });
    this.ficheService.getUserFichegarage('1').subscribe((value)=>{
      if(value.length){
        this.enreception= value;
      } else {
        this.enreception=[];
      }
      this.loadingrecep = false;
    });
  }

   async drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      if( event.container.id === 'cdk-drop-list-0') {
        this.loadingcreer = true;
        const stop= await this.ficheService.modifierEtatFiche((event.container.data[event.currentIndex])._id,'0');
        this.loadingcreer = false;
      }
      if( event.container.id === 'cdk-drop-list-1') {
        this.loadingrecep = true;
        const stop= await this.ficheService.modifierEtatFiche((event.container.data[event.currentIndex])._id,'1');
        this.loadingrecep = false;
      }
    }
  }
}
