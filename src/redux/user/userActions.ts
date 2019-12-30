import { UserActionTypes, UserAction } from "./userTypes";
import { UserState } from "./userReducer";

export interface SetCurrentUserAction extends UserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: UserState;
}

const setCurrentUser = (user: UserState) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
