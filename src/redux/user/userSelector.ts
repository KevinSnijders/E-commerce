import { createSelector } from "reselect";
import { User } from "./userReducer";

const selectUser = (state: User) => state.user;

const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export default selectCurrentUser;
