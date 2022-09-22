import { UserAwardDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeAwardsActions } from './home-awards.actions';

export interface State {
  awards: UserAwardDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  awards: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(HomeAwardsActions.getUserAwards, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(HomeAwardsActions.getUserAwardsSuccess, (state, action) => ({
    ...state,
    awards: action.awards,
    loading: false,
    loaded: true,
  })),

  on(HomeAwardsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllAwards = (state: State) => state.awards;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
