import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  type : string,
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    type : 'c',
    label: 'Client',
    main: [
      {
        state: 'voiture',
        short_label: 'D',
        name: 'Voiture',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'historique-reparation',
            name: 'Historique-réparation'
          },
        ]
      },
      {
        state: 'fiche',
        short_label: 'D',
        name: 'Fiche',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'depot',
            name: 'Depot voiture'
          },
          {
            state: 'garage',
            name: 'Encours de réparation'
          }
        ]
      },
    ],
  },
  {
    type : 'a',
    label: 'Atelier',
    main: [
      {
        state: 'fiche',
        short_label: 'D',
        name: 'Fiche',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'liste-fiche',
            name: 'Liste fiche'
          },
          {
            state: 'fiche-paiement',
            name: 'Validation paiement'
          }
        ]
      },
      {
        state: 'garage',
        short_label: 'D',
        name: 'Réception en garage',
        type: 'link',
        icon: 'ti-clipboard'
      }
    ]
  },
  {
    type : 'f',
    label: 'Finance',
    main: [
      {
        state: 'fiche',
        short_label: 'D',
        name: 'Fiche',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'liste-fiche',
            name: 'Liste fiche'
          },
          {
            state: 'fiche-paiement',
            name: 'Validation paiement'
          }
        ]
      },
      {
        state: 'statistique',
        short_label: 'D',
        name: 'Statistique',
        type: 'link',
        icon: 'ti-bar-chart'
      },
      {
        state: 'depense',
        short_label: 'D',
        name: 'Depense',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'ajout',
            name: 'Ajout Dépense'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  getMenu() : Menu {
    for(let i =0; i <MENUITEMS.length ; i++) {
      if(localStorage.getItem("type") == MENUITEMS[i].type) {
        return MENUITEMS[i];
      }
    }
  }
  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
