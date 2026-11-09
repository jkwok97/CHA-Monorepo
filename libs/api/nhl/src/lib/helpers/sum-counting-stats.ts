import { SeasonTotal } from '@api/entities';

export function sumCountingStats(records: SeasonTotal[]) {
  const sum = (key: keyof SeasonTotal) =>
    records.reduce((total, r) => total + (Number(r[key]) || 0), 0);

  return {
    gamesPlayed: sum('gamesPlayed'),
    goals: sum('goals'),
    assists: sum('assists'),
    points: sum('points'),
    plusMinus: sum('plusMinus'),
    pim: sum('pim'),
    shots: sum('shots'),
    gameWinningGoals: sum('gameWinningGoals'),
    otGoals: sum('otGoals'),
    powerPlayGoals: sum('powerPlayGoals'),
    powerPlayPoints: sum('powerPlayPoints'),
    shorthandedGoals: sum('shorthandedGoals'),
    shorthandedPoints: sum('shorthandedPoints'),
  };
}
