import { createSelector } from "reselect";
import { Directory } from "./directoryReducer";

const selectDirectory = (state: Directory) => state.directory;

const selectDirectoryCategories = createSelector(
  [selectDirectory],
  directory => directory.categories
);

export default selectDirectoryCategories;
