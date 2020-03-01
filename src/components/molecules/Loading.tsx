import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../atoms/Text';

type LoadingType =
  'blank' | 'balls' | 'bars' | 'bubbles' | 'cubes' |
  'cylon' | 'spin' | 'spinningBubbles' | 'spokes';

type LoadingProps = {
  className?: string;
  type?: LoadingType;
  color?: string;
  isLoading: boolean;
};

const Loading: React.FC<LoadingProps> = ({
  isLoading,
  className = '',
  type = 'spinningBubbles',
  color = 'rgba(27, 41, 68, 0.8)',
}) => {
  if (!isLoading) {
    return (null);
  }

  return (
    <Container
      className={className}
    >
      <ReactLoading
        type={type}
        color={color}
        height={85}
        width={85}
      />
      <PrimaryText>
        OCR 엔진이 데이터를 추출하고 있습니다.<br />
        <SecondaryText>
          약간의 시간이 걸릴 수 있습니다.
        </SecondaryText>
      </PrimaryText>
    </Container>
  )
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
