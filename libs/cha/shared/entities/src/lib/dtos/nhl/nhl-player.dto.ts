export interface NhlPlayerDto {
  player: NhlPlayer;
  team: NhlTeam;
  points?: number;
  goals?: number;
  assists?: number;
}

export interface NhlGoalieDto {
  player: NhlPlayer;
  team: NhlTeam;
  gaa?: number;
  savePctg?: number;
  shutouts?: number;
}

export interface NhlPlayer {
  id: number;
  currentTeamId: number;
  firstName: string;
  lastName: string;
  fullName: string;
  positionCode: string;
  sweaterNumber: number;
}

export interface NhlTeam {
  id: number;
  franchiseId: number;
  fullName: string;
  leagueId: number;
  logos: NhlLogo[];
  rawTricode: 'string';
  triCode: string;
}

export interface NhlLogo {
  id: number;
  background: string;
  endSeason: number;
  secureUrl: string;
  startSeason: number;
  teamId: number;
  url: string;
}
