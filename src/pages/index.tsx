import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/atoms/Button';
import ProductCard from '../components/ProductCard';
import CreateModal from '../components/organisms/CreateModal';

const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const onChangeCreateModalOpen = () =>
    setIsCreateModalOpen(!isCreateModalOpen);

  return (
    <Container>
      {/* <ProductCard /> */}
      <CreateButton
        onClick={onChangeCreateModalOpen}
      >
        기프티콘 추가하기
      </CreateButton>
      <CreateModal
        isOpen={isCreateModalOpen}
        onRequestClose={onChangeCreateModalOpen}
      >
      </CreateModal>
    </Container>
  );
};

export default Home;

const Container = styled.div`
`;

const CreateButton = styled(Button)`
`;
