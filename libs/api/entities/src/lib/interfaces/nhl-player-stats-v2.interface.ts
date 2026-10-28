/** Localized strings; `default` is always present. */
export interface LocalizedString {
  default: string;
  fr?: string;
  cs?: string;
  de?: string;
  es?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}

/** Links to the NHL stats site, keyed by locale. */
export interface RankLinks {
  default: string;
  fr?: string;
  cs?: string;
  de?: string;
  fi?: string;
  sk?: string;
  sv?: string;
  es?: string;
}

/** A stat value, optionally with a ranking (only present on ranked stats). */
export interface StatValue<T = number> {
  value: T;
  rank?: number;
  isTied?: boolean;
  rankType?: 'team' | 'league';
  rankLinks?: RankLinks;
}

/** 2 = regular season, 3 = playoffs. */
export type GameTypeId = 2 | 3;

/** "MM:SS" */
export type TimeOnIce = string;

export interface SeasonStatline {
  gameTypeId: GameTypeId;
  seasonId?: number;
  gamesPlayed: StatValue;
  goals: StatValue;
  assists: StatValue;
  points: StatValue;
  pim: StatValue;
  toi: StatValue<TimeOnIce>;
}

export interface Statline {
  isPlayerActive: boolean;
  /** e.g. "2024-2027" */
  careerSpan: string;
  regularSeason: {
    current: SeasonStatline;
    career: SeasonStatline;
  };
}

export interface TeamRef {
  id: number;
  abbrev: string;
}

export interface PeriodDescriptor {
  number: number;
  /** REG, OT, SO */
  periodType: 'REG' | 'OT' | 'SO' | (string & NonNullable<unknown>);
  maxRegulationPeriods: number;
}

export interface Last5Game {
  gameId: number;
  gameTypeId: GameTypeId;
  seasonId: number;
  /** ISO date, YYYY-MM-DD */
  gameDate: string;
  homeTeam: TeamRef;
  awayTeam: TeamRef;
  homeScore: number;
  awayScore: number;
  gameCenterLink: string;
  /** H = home, R = road */
  homeRoadFlag: 'H' | 'R';
  periodDescriptor: PeriodDescriptor;
  toi: TimeOnIce;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  powerPlayGoals: number;
  shorthandedGoals: number;
  shots: number;
  shifts: number;
}

export interface Last5 {
  games: Last5Game[];
  totals: Omit<
    Last5Game,
    | 'gameId'
    | 'gameTypeId'
    | 'seasonId'
    | 'gameDate'
    | 'homeTeam'
    | 'awayTeam'
    | 'homeScore'
    | 'awayScore'
    | 'gameCenterLink'
    | 'homeRoadFlag'
    | 'periodDescriptor'
  >;
}

export interface CareerTotalsRegularSeason {
  assists: number;
  avgToi: TimeOnIce;
  /** 0–1 */
  faceoffWinningPctg: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  otGoals: number;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  /** 0–1 */
  shootingPctg: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  shots: number;
}

export interface SeasonTotal {
  /** e.g. 20242025 */
  season: number;
  gameTypeId: GameTypeId;
  sequence: number;
  leagueAbbrev: LocalizedString;
  teamName: LocalizedString;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  pim?: number;
  plusMinus?: number;

  // NHL-only / detailed fields (absent for junior, college & international rows)
  avgToi?: TimeOnIce;
  faceoffWinningPctg?: number;
  gameWinningGoals?: number;
  otGoals?: number;
  powerPlayGoals?: number;
  powerPlayPoints?: number;
  shorthandedGoals?: number;
  shorthandedPoints?: number;
  shootingPctg?: number;
  shots?: number;
  teamCommonName?: LocalizedString;
  teamPlaceNameWithPreposition?: LocalizedString;
}

export interface NhlPlayerStatsV2 {
  currentGameTypeId: GameTypeId;
  statline: Statline;
  last5: Last5;
  careerTotals: {
    regularSeason: CareerTotalsRegularSeason;
  };
  seasonTotals: SeasonTotal[];
}
