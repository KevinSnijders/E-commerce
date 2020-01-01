import styled from "styled-components";
import { screen } from "../../helper";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "250px")};
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme: { radius } }) => radius.normal};
  box-shadow: ${({ theme: { shadow } }) => shadow.normal};
  margin: 1.2rem 2.4rem;
  overflow: hidden;

  @media ${screen.sm} {
    width: 46%;
  }

  @media ${screen.md} {
    margin: 1.2rem;
  }

  @media ${screen.lg} {
    width: 30%;
  }

  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ preview }) => `url(${preview})`};
`;

export const ContentContainer = styled.div`
  min-width: 100px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { radius } }) => radius.normal};
  box-shadow: ${({ theme: { shadow } }) => shadow.normal};
  opacity: 0.8;
  position: absolute;

  @media ${screen.md} {
    padding: 0.8rem 1.6rem;
  }
`;

export const ContentTitle = styled.h1`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin-bottom: 0.8rem;
  font-size: 2.2rem;
  color: ${({ theme: { colors } }) => colors.grey};
  margin: 0;
`;

export const ContentSubtitle = styled.span`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.lighter};
  font-size: 1.6rem;
`;
