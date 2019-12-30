import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
