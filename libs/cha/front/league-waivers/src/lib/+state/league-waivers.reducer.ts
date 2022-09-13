import { WaiversDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueWaiversActions } from './league-waivers.actions';

export interface State {
  waivers: WaiversDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  waivers: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(LeagueWaiversActions.getWaivers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueWaiversActions.getWaiversSuccess, (state, action) => ({
    ...state,
    waivers: action.waivers,
    loading: false,
    loaded: true,
  })),

  on(LeagueWaiversActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getWaivers = (state: State) => state.waivers;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
