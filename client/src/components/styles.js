import styled from "styled-components";
import { css } from "styled-components";

export const media = {
  handheld: (...args) => css`
    @media (max-width: 500px) {
      ${css(...args)};
    }
  `
};

export const SubmitButton = styled.button`
  background: #2185d0;
  color: #fff;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    color: #2185d0 !important;
    border: solid 1px #2185d0 !important;
    background: #fff !important;
  }
`;

export const BackgroundContainer = styled.div`
  background-color: rgb(0, 185, 245);
  ${media.handheld`
    background-color: #fff;
  `};
`;
