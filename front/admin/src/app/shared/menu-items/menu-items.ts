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
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
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
  },
  {
    label: 'Map And Extra Pages ',
    main: [
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      },
      {
        state: 'authentication',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
