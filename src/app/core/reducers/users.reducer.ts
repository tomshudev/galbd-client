import { User } from '../models/user.model';
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Login, Logout } from '../actions/users.actions';

export const usersToken: string = 'users';

export type UsersState = {
  user: User;
};

export const initialState: UsersState = {
  user: JSON.parse(localStorage.getItem('galbd-logged-in-user')),
};

export const usersReducer = createReducer(
  initialState,
  on(Login, (state, action) => {
    localStorage.setItem('galbd-logged-in-user', JSON.stringify(action.user));
    return {
      ...state,
      user: action.user,
    };
  }),
  on(Logout, (state) => {
    localStorage.removeItem('galbd-logged-in-user');
    return {
      ...state,
      user: undefined,
    };
  })
);

const getUsersState = createFeatureSelector(usersToken);

export const getLoggedUser = createSelector(
  getUsersState,
  (state: UsersState) => state.user
);
