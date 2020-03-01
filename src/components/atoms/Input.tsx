import styled, { css } from 'styled-components';

import { sharedTextCSS } from './Text';

export const sharedInputCSS = css`
  ${sharedTextCSS};
  color: #1b2944;
  border: none;
  padding: 1rem 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to top left, #f0f5fd, #caced4);
  box-shadow:
    6px 6px 13px rgb(163, 177, 198, 0.35),
    -6px -6px 13px rgba(255, 255, 255, 0.8);
  border-radius: 64px;
  font-weight: 600;
  text-shadow: none;
  transition: 0.2s all ease-in-out;

  &:focus {
    box-shadow:
      inset 6px 6px 13px #bec3c9,
      inset -6px -6px 13px #ffffff;
  }

  &::placeholder {
    color: #868e96;
  }
`;

const Input = styled.input`
  ${sharedInputCSS}
`;

export default Input;
