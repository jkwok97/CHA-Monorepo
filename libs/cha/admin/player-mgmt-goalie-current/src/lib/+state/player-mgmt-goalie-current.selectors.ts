import { StatGoalieAllDto, StatPlayerAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PlayerMgmtGoalieCurrentReducer from './player-mgmt-goalie-current.reducer';

export const selectState =
  createFeatureSelector<PlayerMgmtGoalieCurrentReducer.State>(
    'player-mgmt-player-current'
  );

const selectLoading = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getSaved
);

const selectGoalies = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getGoalies
);

const selectGoalie = createSelector(
  selectState,
  PlayerMgmtGoalieCurrentReducer.getGoalie
);

const selectGoalieOptions = createSelector(
  selectGoalies,
  (goalies: StatGoalieAllDto[]) =>
    goalies.map((goalie: StatGoalieAllDto) => ({
      value: goalie.player_id.id,
      label: `${goalie.player_id.firstname} ${goalie.player_id.lastname}`,
    }))
);

export const PlayerMgmtGoalieCurrentSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectGoalies,
  selectGoalie,
  selectGoalieOptions,
};
