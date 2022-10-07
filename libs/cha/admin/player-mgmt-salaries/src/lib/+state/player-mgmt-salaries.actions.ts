import { SalaryAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[PLAYER MGMT SALARIES]';

const getSalaries = createAction(`${NAMESPACE} Get Salaries`);

const getSalariesSuccess = createAction(
  `${NAMESPACE} Get Salaries Success`,
  props<{ salaries: SalaryAllDto[] }>()
);

const editSalary = createAction(
  `${NAMESPACE} Edit Salary`,
  props<{ salary: SalaryAllDto }>()
);

const editSalarysuccess = createAction(
  `${NAMESPACE} Edit Salary Success`,
  props<{ salary: SalaryAllDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const PlayerMgmtSalariesActions = {
  getSalaries,
  getSalariesSuccess,
  editSalary,
  editSalarysuccess,
  error,
};
