import styled, { css } from 'styled-components';
import Button from '../atoms/Button';

type RoundButtonProps = {
  disabled?: boolean;
};

const RoundButton = styled(Button)<RoundButtonProps>`
  box-shadow:
    9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px  rgba(255, 255, 255, 0.5);
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${({ disabled }) => disabled && css`
    box-shadow:
      inset 3px 3px 6px #bec3c9,
      inset -3px -3px 6px #ffffff;
  `};
`;

export default RoundButton;
