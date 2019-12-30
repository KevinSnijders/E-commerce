import UserActionTypes from "./userTypes";
import { UserActions } from "./userActions";

export interface CustomUserProps {
  id: string;
  displayName?: string;
  email?: string;
  createdAt?: Date;
}

export interface UserState {
  currentUser: firebase.User | CustomUserProps | null;
}

const initUserState: UserState = {
  currentUser: null
};

const userReducer = (state: UserState = initUserState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
