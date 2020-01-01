import styled, { css } from "styled-components";

const columnStyle = css`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
  padding: 1.6rem 0;
  font-size: 2rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  ${columnStyle}
  padding: 0 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  ${columnStyle}
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 1rem;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  ${columnStyle}
  width: 8%;
  cursor: pointer;
`;
