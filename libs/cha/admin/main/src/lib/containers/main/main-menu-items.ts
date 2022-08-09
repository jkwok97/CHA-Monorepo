import { MenuItem } from 'primeng/api';

export const mainMenuItems: MenuItem[] = [
  {
    label: 'Home',
    routerLink: ['/home'],
  },
  {
    label: 'League',
    items: [
      {
        label: 'Users',
        routerLink: ['/league/users'],
      },
      {
        label: 'Teams',
        routerLink: ['/league/teams'],
      },
      {
        label: 'Awards',
        routerLink: ['/league/awards'],
      },
    ],
  },
  {
    label: 'Players Mgmt',
    items: [
      {
        label: 'Info',
        routerLink: ['/players/info'],
      },
      {
        label: 'Salaries',
        routerLink: ['/players/salaries'],
      },
      {
        label: 'Ratings',
        routerLink: ['/players/ratings'],
      },
      {
        label: 'Current Players',
        routerLink: ['/players/players-current'],
      },
      {
        label: 'Current Goalies',
        routerLink: ['/players/goalies-current'],
      },
    ],
  },
  {
    label: 'Draft Mgmt',
    items: [
      {
        label: 'Table',
        routerLink: ['/draft/table'],
      },
      {
        label: 'Entry',
        routerLink: ['/draft/entry'],
      },
    ],
  },
  {
    label: 'Transactions',
    items: [
      {
        label: 'Trades/Drops/Adds',
        routerLink: ['/transactions/trades'],
      },
      {
        label: 'Waiver Order',
        routerLink: ['/transactions/waiver'],
      },
    ],
  },
  {
    label: 'Schedule',
    routerLink: ['/schedule'],
  },
];
