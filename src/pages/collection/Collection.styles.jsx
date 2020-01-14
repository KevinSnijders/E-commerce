import styled from "styled-components";
import { screen } from "../../helper";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 2.8rem;
  margin: 1.2rem auto 2rem;
  text-transform: uppercase;
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
