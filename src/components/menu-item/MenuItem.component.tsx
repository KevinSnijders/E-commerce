import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from "./MenuItem.styles";

import { Category } from "../../redux/directory/directoryReducer";

type CategoryWithRoute = Category & RouteComponentProps;

const MenuItem: React.FunctionComponent<CategoryWithRoute> = ({
  title,
  preview,
  url,
  history,
  match
}: CategoryWithRoute) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${url}`)}>
      <BackgroundImageContainer
        className="background-image"
        preview={preview}
      />
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop nu</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
