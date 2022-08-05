import { TeamDto } from '@cha/shared/entities';
import { createSelector } from '@ngrx/store';
import { AppState, selectFeatureState } from '../index';

import * as UserTeamReducer from './user-team.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.userTeam
);

const selectTeams = createSelector(selectState, UserTeamReducer.getTeams);

const selectActiveTeam = createSelector(selectTeams, (teams: TeamDto[]) =>
  teams.find((team: TeamDto) => team.isactive)
);

const selectLoading = createSelector(selectState, UserTeamReducer.getLoading);

const selectLoaded = createSelector(selectState, UserTeamReducer.getLoaded);

export const UserTeamSelectors = {
  selectTeams,
  selectActiveTeam,
  selectLoaded,
  selectLoading,
};
