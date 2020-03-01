import React from 'react';
import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../atoms/Text';

const IllustForEmpty = ({ isEmpty }) => {
  if (!isEmpty) {
    return (null);
  }
  return (
    <Container>
      <Illust
        src="/static/illusts/ice-cream.png"
      />
      <PrimaryText>
        추가된 기프티콘이 없습니다.<br />
        <SecondaryText>
          아래 버튼을 눌러 바로 시작해 보세요.
        </SecondaryText>
      </PrimaryText>
    </Container>
  );
};

export default IllustForEmpty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;

const Illust = styled.img`
  height: 262.484px;
  width: 350px;
`;
