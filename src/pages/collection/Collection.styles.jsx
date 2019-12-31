import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 3.8rem;
  margin: 0 auto 3rem;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  & .collection-item {
    margin-bottom: 3rem;
  }
`;
