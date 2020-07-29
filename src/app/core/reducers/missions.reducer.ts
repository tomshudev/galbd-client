import { Mission } from '../models/mission.model';
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { SelectMission } from '../actions/missins.actions';

export const missionsToken: string = 'missions';

export interface MissionsState {
  selectedMission: Mission;
}

export const initialState: MissionsState = {
  selectedMission: undefined,
};

export const missionsReducer = createReducer(
  initialState,
  on(SelectMission, (state, action) => ({
    ...state,
    selectedMission: action.mission,
  }))
);

const getMissionsState = createFeatureSelector(missionsToken);

export const getSelectedMission = createSelector(
  getMissionsState,
  (state: MissionsState) => state.selectedMission
);
