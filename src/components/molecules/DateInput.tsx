import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import { sharedInputCSS } from '../atoms/Input';

const DateInput = styled(DatePicker)`
  ${sharedInputCSS}
  width: -webkit-fill-available;
`;

export default DateInput;
