import styled, { css } from 'styled-components';

export const sharedTextCSS = css`
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.35;
  letter-spacing: -0.5px;
  text-shadow:
    5px 5px 9px rgba(163, 177, 198, 0.65),
    -3px -3px 15px #ffffff;
`;

const Text = styled.span`
  ${sharedTextCSS}
`;

export default Text;
