import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueSalariesAndRatingActions } from './league-salaries-ratings.actions';

export interface State {
  salaries: SalariesAndRatingsDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  salaries: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    LeagueSalariesAndRatingActions.getPlayerSalaries,
    LeagueSalariesAndRatingActions.getGoaliesalaries,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    LeagueSalariesAndRatingActions.getPlayerSalariesSuccess,
    LeagueSalariesAndRatingActions.getGoaliesalariesSuccess,
    (state, action) => ({
      ...state,
      salaries: action.salaries,
      loading: false,
      loaded: true,
    })
  ),

  on(LeagueSalariesAndRatingActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getSalaries = (state: State) => state.salaries;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
