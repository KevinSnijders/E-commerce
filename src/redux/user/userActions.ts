import UserActionTypes from "./userTypes";
import { UserState } from "./userReducer";

export interface SetCurrentUserAction {
  type: typeof UserActionTypes.SET_CURRENT_USER;
  payload: UserState;
}

export interface GoogleSignInStartAction {
  type: typeof UserActionTypes.GOOGLE_SIGN_IN_START;
}

export type UserActions = SetCurrentUserAction | GoogleSignInStartAction;

const setCurrentUser = (user: UserState) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
