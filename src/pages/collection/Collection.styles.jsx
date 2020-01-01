import styled from "styled-components";
import { screen } from "../../helper";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.2rem 0;
`;

export const CollectionTitle = styled.h2`
  font-size: 3.8rem;
  margin: 0 auto 3rem;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.2rem;

  @media ${screen.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${screen.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${screen.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  & .collection-item {
    margin-bottom: 3rem;
  }
`;
