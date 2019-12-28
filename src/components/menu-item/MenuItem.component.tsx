import * as React from "react";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from "./MenuItem.styles";

import { Category } from "../directory/Directory.component";

const MenuItem: React.FunctionComponent<Category> = ({
  title,
  preview
}: Category) => {
  return (
    <MenuItemContainer>
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

export default MenuItem;
