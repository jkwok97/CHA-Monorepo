import { AwardAwardTypeDto, AwardDto, UserDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueAwardsActions } from './league-awards.actions';

export interface State {
  awards: AwardDto[];
  users: UserDto[];
  awardTypes: AwardAwardTypeDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  awards: [],
  users: [],
  awardTypes: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueAwardsActions.getAwards, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    LeagueAwardsActions.addAward,
    LeagueAwardsActions.editAward,
    LeagueAwardsActions.deleteAward,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(LeagueAwardsActions.getAwardsSuccess, (state, action) => ({
    ...state,
    awards: action.awards,
    loading: false,
    loaded: true,
  })),

  on(LeagueAwardsActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
  })),

  on(LeagueAwardsActions.getAwardTypesSuccess, (state, action) => ({
    ...state,
    awardTypes: action.awardTypes,
  })),

  on(
    LeagueAwardsActions.addAwardSuccess,
    LeagueAwardsActions.editAwardSuccess,
    LeagueAwardsActions.deleteAwardSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(LeagueAwardsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAwards = (state: State) => state.awards;

export const getUsers = (state: State) => state.users;

export const getAwardTypes = (state: State) => state.awardTypes;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
