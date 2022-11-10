import { ConferenceDto, DivisionDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueDivisionsActions } from './league-divisions.actions';

export interface State {
  divisions: DivisionDto[];
  conferences: ConferenceDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  divisions: [],
  conferences: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueDivisionsActions.getDivisions, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    LeagueDivisionsActions.addDivision,
    LeagueDivisionsActions.editDivision,
    LeagueDivisionsActions.deleteDivision,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(LeagueDivisionsActions.getDivisionsSuccess, (state, action) => ({
    ...state,
    divisions: action.divisions,
    loading: false,
    loaded: true,
  })),

  on(
    LeagueDivisionsActions.addDivisionSuccess,
    LeagueDivisionsActions.editDivisionSuccess,
    LeagueDivisionsActions.deleteDivisionSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(LeagueDivisionsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDivisions = (state: State) => state.divisions;

export const getConferences = (state: State) => state.conferences;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
