import { SeasonTotal } from '@api/entities';

export function stripTeamInfo(record: SeasonTotal): SeasonTotal {
  const {
    teamName,
    teamCommonName,
    teamPlaceNameWithPreposition,
    sequence,
    ...statsOnly
  } = record as any;
  return statsOnly as SeasonTotal;
}
