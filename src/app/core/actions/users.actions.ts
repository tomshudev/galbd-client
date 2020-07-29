import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const Login = createAction(
  `[Users] User logged in`,
  props<{ user: User }>()
);

export const Logout = createAction(`[Users] User logged out`);
