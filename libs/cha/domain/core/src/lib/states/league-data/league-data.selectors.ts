import { createSelector } from '@ngrx/store';

import * as LeagueDataReducer from './league-data.reducer';
import { AppState, selectFeatureState } from '../index';
import { LeagueDataDto } from '@cha/shared/entities';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.currentData
);

const selectLeagueData = createSelector(
  selectState,
  LeagueDataReducer.getLeagueData
);

const selectCurrentSeason = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_year;
    } else {
      return;
    }
  }
);

const selectCurrentSeasonType = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_season_type;
    } else {
      return;
    }
  }
);

const selectCurrentDraftSeason = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_draft_year;
    } else {
      return;
    }
  }
);

const selectTeams = createSelector(selectState, LeagueDataReducer.getTeams);

const selectLoading = createSelector(selectState, LeagueDataReducer.getLoading);

const selectLoaded = createSelector(selectState, LeagueDataReducer.getLoaded);

export const LeagueDataSelectors = {
  selectLeagueData,
  selectCurrentSeason,
  selectCurrentDraftSeason,
  selectCurrentSeasonType,
  selectTeams,
  selectLoaded,
  selectLoading,
};
