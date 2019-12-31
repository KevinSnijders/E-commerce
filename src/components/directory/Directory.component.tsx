import * as React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/MenuItem.component";
import selectDirectoryCategories from "../../redux/directory/directorySelector";
import {
  DirectoryState,
  Category,
  Directory as IDirectory
} from "../../redux/directory/directoryReducer";

import DirectoryWrapper from "./Directory.styles";

const mapStateToProps = (state: IDirectory) => ({
  categories: selectDirectoryCategories(state)
});

const Directory = ({ categories }: DirectoryState) => (
  <DirectoryWrapper>
    {categories.map(({ id, title, preview, url }: Category) => (
      <MenuItem key={id} title={title} preview={preview} url={url} />
    ))}
  </DirectoryWrapper>
);

export default connect(mapStateToProps)(Directory);
