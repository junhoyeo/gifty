import * as React from 'react';
import styled from 'styled-components';

import GlobalStyle from './atoms/GlobalStyle';

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  </>
);

export default Layout;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.main`
  width: 500px;
  min-height: 100vh;
  background-color: #E0E5EC;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
