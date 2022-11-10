import { ConferenceDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueConferencesActions } from './league-conferences.actions';

export interface State {
  conferences: ConferenceDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  conferences: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueConferencesActions.getConferences, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    LeagueConferencesActions.addConference,
    LeagueConferencesActions.editConference,
    LeagueConferencesActions.deleteConference,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(LeagueConferencesActions.getConferencesSuccess, (state, action) => ({
    ...state,
    conferences: action.conferences,
    loading: false,
    loaded: true,
  })),

  on(
    LeagueConferencesActions.addConferenceSuccess,
    LeagueConferencesActions.editConferenceSuccess,
    LeagueConferencesActions.deleteConferenceSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(LeagueConferencesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getConferences = (state: State) => state.conferences;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
