import { createAction, props } from '@ngrx/store';
import { Mission } from '../models/mission.model';

export const SelectMission = createAction(
  '[Missions] Select mission',
  props<{
    mission: Mission;
  }>()
);
