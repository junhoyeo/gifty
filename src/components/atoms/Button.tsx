import styled from 'styled-components';

import Text from './Text';

const TextWithButton = Text.withComponent('button');

const Button = styled(TextWithButton)`
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  padding: 1.2rem;
  background-color:#E0E5EC;
  box-shadow:
    9px 9px 16px rgb(163,177,198,0.6),
    -9px -9px 16px  rgba(255,255,255, 0.5);
  color: rgb(27, 41, 68);
  text-shadow: 2px 2px 3px rgba(193, 204, 224, 0.9);
  border-radius: 64px;
  transition: 0.2s all ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(to top left, #d5dbe0, #f0f5fd);
    box-shadow:
      7px 7px 14px rgb(163,177,198,0.6),
      -7px -7px 14px rgba(255,255,255, 0.5);
  }
`;

export default Button;
