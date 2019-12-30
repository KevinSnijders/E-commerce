import { UserActionTypes } from "./userTypes";
import { SetCurrentUserAction } from "./userActions";

export interface UserState {
  currentUser: firebase.User | null;
}

const initUserState: UserState = {
  currentUser: null
};

type UserReducerActions = SetCurrentUserAction;

const userReducer = (
  state: UserState = initUserState,
  action: UserReducerActions
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
