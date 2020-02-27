import styled from 'styled-components';

import Text from './Text';

const TextWithButton = Text.withComponent('button');

const Button = styled(TextWithButton)`
  width: 100%;
  cursor: pointer;
`;

export default Button;
