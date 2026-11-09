import { SeasonTotal } from '@api/entities';

export function computeWeightedAvgToi(
  records: SeasonTotal[],
  totalGames: number
): string {
  if (!totalGames) return '00:00';

  const totalToiSeconds = records.reduce((sum, r) => {
    const [mins = 0, secs = 0] = (r.avgToi || '0:0').split(':').map(Number);
    return sum + (mins * 60 + secs) * (r.gamesPlayed || 0);
  }, 0);

  const avgSeconds = Math.round(totalToiSeconds / totalGames);
  const mins = Math.floor(avgSeconds / 60);
  const secs = (avgSeconds % 60).toString().padStart(2, '0');

  return `${mins}:${secs}`;
}
