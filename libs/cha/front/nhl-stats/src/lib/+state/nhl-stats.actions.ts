import { NhlPlayerStatDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[NHL Stats]';

const getSportsnetStats = createAction(
  `${NAMESPACE} Get Stats Sportnet`,
  props<{
    season: string;
    season_type: string;
  }>()
);

const getSportsnetStatsSuccess = createAction(
  `${NAMESPACE} Get Stats Sportnet Success`,
  props<{ skaters: any[]; goalies: any[] }>()
);

const getRookieStats = createAction(
  `${NAMESPACE} Get Rookie Stats`,
  props<{
    statType: string;
    sortType: string;
    sortOrder: string;
    start: number;
    pageSize: number;
  }>()
);

const getRookieStatsSuccess = createAction(
  `${NAMESPACE} Get Rookie Stats Success`,
  props<{ stats: NhlPlayerStatDto[]; total: number }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const NhlStatsActions = {
  getSportsnetStats,
  getSportsnetStatsSuccess,
  getRookieStats,
  getRookieStatsSuccess,
  error,
};
