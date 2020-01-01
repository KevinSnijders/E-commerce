import styled from "styled-components";
import { screen } from "../../helper";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

export const TitleContainer = styled.h1`
  font-size: 2.8rem;
  margin: 1.2rem 0 2rem;
  text-align: center;

  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.lightGrey};
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 100%;

  @media ${screen.md} {
    flex-wrap: nowrap;
  }
`;
