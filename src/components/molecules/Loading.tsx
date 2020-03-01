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
  status?: string;
  progress?: number;
};

const generateLoadingText = (status: string, progress: number) => {
  const statusText = {
    'loading tesseract core': '테서렉트 코어를 로딩하고 있습니다',
    'initializing tesseract': '테서렉트를 초기화하고 있습니다',
    'initialized tesseract': '테서렉트를 초기화하고 있습니다',
    'loading language traineddata': '학습된 한국어 데이터를 불러오고 있습니다',
    'loaded language traineddata': '학습된 한국어 데이터를 불러오고 있습니다',
    'initializing api': 'API를 초기화하고 있습니다',
    'initialized api': 'API를 초기화하고 있습니다',
    'recognizing text': '텍스트를 인식 중입니다',
  }[status];

  return `${statusText}... ${Math.floor(progress * 100)}%`;
};

const Loading: React.FC<LoadingProps> = ({
  isLoading,
  status,
  progress,
  className = '',
  type = 'spinningBubbles',
  color = 'rgba(27, 41, 68, 0.8)',
}) => {
  if (!isLoading) {
    return (null);
  }

  const statusText = status ?
    generateLoadingText(status, progress) : '약간의 시간이 걸릴 수 있습니다.';

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
          {statusText}
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
