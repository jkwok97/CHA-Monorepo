import { SeasonTotal } from '@api/entities';
import { stripTeamInfo } from './strip-team-info';
import { sumCountingStats } from './sum-counting-stats';
import { computeWeightedAvgToi } from './compute-weighted-avg-toi';

export function aggregateSeasonStats(records: SeasonTotal[]): SeasonTotal {
  if (records.length === 1) {
    return stripTeamInfo(records[0]);
  }

  const totals = sumCountingStats(records);
  const avgToi = computeWeightedAvgToi(records, totals.gamesPlayed);
  const shootingPctg =
    totals.shots > 0 ? Number((totals.goals / totals.shots).toFixed(3)) : 0;

  return {
    ...totals,
    avgToi,
    shootingPctg,
    faceoffWinningPctg: 0,
    gameTypeId: 2,
    leagueAbbrev: { default: 'NHL' },
    season: records[0].season,
  } as SeasonTotal;
}
