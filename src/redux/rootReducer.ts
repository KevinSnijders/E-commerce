import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

export enum ReduxActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER"
}

export interface ReduxBaseAction {
  type: ReduxActionTypes;
}

export default combineReducers({
  user: userReducer
});
