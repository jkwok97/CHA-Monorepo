import { BladeNavListItemModel } from '@blade/angular/ui/multi-level-menu';

export const menuItems: BladeNavListItemModel[] = [
  {
    key: 'home',
    label: 'Home',
    routerLink: ['/home'],
    // subItems: [
    //   {
    //     key: 'summary',
    //     label: 'Summary',
    //     subItems: [
    //       {
    //         key: 'depth-chart',
    //         label: 'Depth Chart',
    //         routerLink: ['/home/summary/depth-chart'],
    //       },
    //       {
    //         key: 'salaries',
    //         label: 'Salaries',
    //         routerLink: ['/home/summary/salaries'],
    //       },
    //     ],
    //   },
    //   {
    //     key: 'history',
    //     label: 'History',
    //     subItems: [
    //       {
    //         key: 'franchise',
    //         label: 'Franchise',
    //         routerLink: ['/home/franchise'],
    //       },
    //       {
    //         key: 'players',
    //         label: 'Players',
    //         routerLink: ['/home/current-players'],
    //       },
    //       {
    //         key: 'goalies',
    //         label: 'Goalies',
    //         routerLink: ['/home/current-goalies'],
    //       },
    //       {
    //         key: 'awards',
    //         label: 'Awards',
    //         routerLink: ['/home/awards'],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    key: 'league',
    label: 'League',
    icon: 'pi pi-qrcode',
    subItems: [
      {
        key: 'stats',
        label: 'Current Stats',
        subItems: [
          {
            key: 'teams-leaders',
            label: 'Teams Leaders',
            routerLink: ['/league/stats/teams-leaders'],
          },
          {
            key: 'players-leaders',
            label: 'Players Leaders',
            routerLink: ['/league/stats/players-leaders'],
          },
          {
            key: 'goalies-leaders',
            label: 'Goalies Leaders',
            routerLink: ['/league/stats/goalies-leaders'],
          },
          {
            key: 'teams-detailed',
            label: 'Teams Detailed',
            routerLink: ['/league/stats/teams-detailed'],
          },
          {
            key: 'players-detailed',
            label: 'Players Detailed',
            routerLink: ['/league/stats/players-detailed'],
          },
          {
            key: 'goalies-detailed',
            label: 'Goalies Detailed',
            routerLink: ['/league/stats/goalies-detailed'],
          },
        ],
      },
      {
        key: 'games',
        label: 'Schedule',
        subItems: [
          {
            key: 'current',
            label: 'Current Days',
            routerLink: ['/league/games/current'],
          },
          {
            key: 'all',
            label: 'All Days',
            routerLink: ['/league/games/all'],
          },
          {
            key: 'playoffs',
            label: 'Playoffs',
            routerLink: ['/league/games/playoffs'],
          },
        ],
      },
      {
        // TODO MAKE THESE DYNAMIC
        key: 'teams',
        label: 'Teams',
        subItems: [
          {
            key: '2',
            label: 'Atlanta Flashers',
            routerLink: ['/league/teams/2'],
          },
          {
            key: '3',
            label: 'Augusta Green Jackets',
            routerLink: ['/league/teams/3'],
          },
          {
            key: '4',
            label: 'Cheyenne Desperado',
            routerLink: ['/league/teams/4'],
          },
          {
            key: '5',
            label: 'Cincinnati Cyclones',
            routerLink: ['/league/teams/5'],
          },
          {
            key: '6',
            label: 'Green Bay Glory',
            routerLink: ['/league/teams/6'],
          },
          {
            key: '7',
            label: 'Indianapolis Goats',
            routerLink: ['/league/teams/7'],
          },
          {
            key: '8',
            label: 'Kelowna Mountaineers',
            routerLink: ['/league/teams/8'],
          },
          {
            key: '68',
            label: 'Kitchener Bliztkrieg',
            routerLink: ['/league/teams/68'],
          },
          {
            key: '9',
            label: 'Lone Star Brahmas',
            routerLink: ['/league/teams/9'],
          },
          {
            key: '10',
            label: 'Memphis Hound Dogs',
            routerLink: ['/league/teams/10'],
          },
          {
            key: '11',
            label: 'Milwaukee Ice Dragons',
            routerLink: ['/league/teams/11'],
          },
          {
            key: '12',
            label: 'Mississauga North Stars',
            routerLink: ['/league/teams/12'],
          },
          {
            key: '13',
            label: 'Oakland Assassins',
            routerLink: ['/league/teams/13'],
          },
          {
            key: '14',
            label: 'Oklahoma City Oil Barons',
            routerLink: ['/league/teams/14'],
          },
          {
            key: '15',
            label: 'Peoria Prowlers',
            routerLink: ['/league/teams/15'],
          },
          {
            key: '69',
            label: 'Quebec City Flying Canoes',
            routerLink: ['/league/teams/69'],
          },
          {
            key: '61',
            label: 'Sacramento Storm',
            routerLink: ['/league/teams/61'],
          },
          {
            key: '67',
            label: 'Santa Fe Skinwalkers',
            routerLink: ['/league/teams/67'],
          },
          {
            key: '18',
            label: 'South Carolina Stingrays',
            routerLink: ['/league/teams/18'],
          },
          {
            key: '19',
            label: 'Staten Island Killer Bees',
            routerLink: ['/league/teams/19'],
          },
          {
            key: '60',
            label: 'St.Johns Vikings',
            routerLink: ['/league/teams/60'],
          },
          {
            key: '66',
            label: 'Torbay Tidesman',
            routerLink: ['/league/teams/66'],
          },
          {
            key: '53',
            label: "Victoria Stellar's Jays",
            routerLink: ['/league/teams/53'],
          },
          {
            key: '21',
            label: 'Wichita Wolfpack',
            routerLink: ['/league/teams/21'],
          },
        ],
      },
      {
        key: 'trades',
        label: 'Trades',
        routerLink: ['/league/trades'],
      },
      {
        label: 'Salaries & Ratings',
        key: 'salaries-ratings',
        routerLink: ['/league/salaries-ratings'],
      },
      {
        key: 'waivers',
        label: 'Waiver Priority',
        routerLink: ['/league/waivers'],
      },
      {
        key: 'history',
        label: 'Historic Stats',
        subItems: [
          {
            key: 'teams',
            label: 'Teams',
            routerLink: ['/league/history/teams'],
          },
          {
            key: 'players',
            label: 'Players',
            routerLink: ['/league/history/players'],
          },
          {
            key: 'goalies',
            label: 'Goalies',
            routerLink: ['/league/history/goalies'],
          },
        ],
      },
    ],
  },
  {
    key: 'nhl',
    label: 'NHL',
    subItems: [
      {
        key: 'nhl-leaders',
        label: 'Leaders',
        routerLink: ['/nhl/nhl-leaders'],
      },
      {
        key: 'nhl-stats',
        label: 'Statistics',
        routerLink: ['/nhl/nhl-stats'],
      },
    ],
  },
  {
    key: 'draft',
    label: 'Draft',
    subItems: [
      {
        key: 'current',
        label: 'Current',
        routerLink: ['/draft/current'],
      },
      {
        key: 'history',
        label: 'History',
        routerLink: ['/draft/history'],
      },
    ],
  },
  {
    key: 'awards',
    label: 'Awards',
    subItems: [
      {
        key: 'champions',
        label: 'Champions',
        routerLink: ['/awards/champions'],
      },
      {
        key: 'leading-scorer',
        label: 'Leading Scorer',
        routerLink: ['/awards/leading-scorer'],
      },
      {
        key: 'best-defense',
        label: 'Best Defenseman',
        routerLink: ['/awards/best-defense'],
      },
      {
        key: 'best-rookie',
        label: 'Best Rookie',
        routerLink: ['/awards/best-rookie'],
      },
      {
        key: 'best-goalie',
        label: 'Best Goalie',
        routerLink: ['/awards/best-goalie'],
      },
      {
        key: 'best-gm',
        label: 'Best GM',
        routerLink: ['/awards/best-gm'],
      },
      {
        key: 'best-season',
        label: 'Best Season',
        routerLink: ['/awards/best-season'],
      },
    ],
  },
  {
    key: 'rules',
    label: 'Rules & Prizing',
    subItems: [
      {
        key: 'equalization',
        label: 'Player Equalization',
        routerLink: ['/rules/equalization'],
      },
      {
        key: 'lottery',
        label: 'Draft Lottery',
        routerLink: ['/rules/lottery'],
      },
      {
        key: 'egr',
        label: 'Emergency Goaltender',
        routerLink: ['/rules/egr'],
      },
      {
        key: 'player-protection',
        label: 'Player Protection',
        routerLink: ['/rules/player-protection'],
      },
      {
        key: 'rosters',
        label: 'Rosters',
        routerLink: ['/rules/rosters'],
      },
      {
        key: 'waivers',
        label: 'Waivers',
        routerLink: ['/rules/waivers'],
      },
      {
        key: 'winnings',
        label: 'Winnings Allocation',
        routerLink: ['/rules/winnings'],
      },
    ],
  },
];
