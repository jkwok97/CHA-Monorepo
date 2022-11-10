import { ConferenceCreateDto, ConferenceDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE CONFERENCES]';

const getConferences = createAction(`${NAMESPACE} Get Conferences`);

const getConferencesSuccess = createAction(
  `${NAMESPACE} Get Conferences Success`,
  props<{ conferences: ConferenceDto[] }>()
);

const addConference = createAction(
  `${NAMESPACE} Add Conference`,
  props<{ conference: ConferenceCreateDto }>()
);

const addConferenceSuccess = createAction(
  `${NAMESPACE} Add Conference Success`,
  props<{ conference: ConferenceDto }>()
);

const editConference = createAction(
  `${NAMESPACE} Edit Conference`,
  props<{ conference: ConferenceDto }>()
);

const editConferenceSuccess = createAction(
  `${NAMESPACE} Edit Conference Success`,
  props<{ conference: ConferenceDto }>()
);

const deleteConference = createAction(
  `${NAMESPACE} Delete Conference`,
  props<{ conferenceId: number }>()
);

const deleteConferenceSuccess = createAction(
  `${NAMESPACE} Delete Conference Success`,
  props<{ conference: ConferenceDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueConferencesActions = {
  getConferences,
  getConferencesSuccess,
  addConference,
  addConferenceSuccess,
  editConference,
  editConferenceSuccess,
  deleteConference,
  deleteConferenceSuccess,
  error,
};
