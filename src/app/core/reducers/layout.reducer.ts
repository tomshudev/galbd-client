import {
  createReducer,
  on,
  State,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { ToggleSidebar } from '../actions/layout.actions';

export const layoutToken = 'layout';

export interface LayoutState {
  isSidebarOpen: boolean;
}

export const initialState: LayoutState = {
  isSidebarOpen: false,
};

export const layoutReducer = createReducer(
  initialState,
  on(ToggleSidebar, (state) => ({
    ...state,
    isSidebarOpen: !state.isSidebarOpen,
  }))
);

export const getLayoutState = createFeatureSelector(layoutToken);

export const getIsSidebarOpen = createSelector(
  getLayoutState,
  (state: LayoutState) => state.isSidebarOpen
);
