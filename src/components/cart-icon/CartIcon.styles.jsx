import styled from "styled-components";
import { ReactComponent as ChartIconSVG } from "../../assets/chart.svg";

export const CartIconContainer = styled.div`
  width: 4.7rem;
  height: 4.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ChartIconSVG)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  transform: translateY(25%);
`;
