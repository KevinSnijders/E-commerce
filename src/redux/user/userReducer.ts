import UserActionTypes from "./userTypes";
import { UserActions } from "./userActions";

export interface UserState {
  currentUser: firebase.User | null;
}

const initUserState: UserState = {
  currentUser: null
};

const userReducer = (state: UserState = initUserState, action: UserActions) => {
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
