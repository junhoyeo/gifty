import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import Button from '../components/atoms/Button';
import ProductCard from '../components/ProductCard';
import CreateModal from '../components/organisms/CreateModal';
import Layout from '../components/Layout';
import Text from '../components/atoms/Text';

import useLocalStorage from '../utils/useLocalStorage';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [productList, setProductList] = useLocalStorage('products', []);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const onChangeCreateModalOpen = () =>
    setIsCreateModalOpen(!isCreateModalOpen);

  return (
    <Layout>
      <Container>
        <Title>
          기프티콘 목록
        </Title>
        <ProductList>
          {productList.map(({ image, name, order, dueDate }, idx) => (
            <ProductCard
              key={`product-${idx}`}
              image={image}
              name={name}
              order={order}
              dueDate={dueDate}
            />
          ))}
        </ProductList>
        <CreateButton
          onClick={onChangeCreateModalOpen}
        >
          기프티콘 추가하기
        </CreateButton>
        <CreateModal
          isOpen={isCreateModalOpen}
          onRequestClose={onChangeCreateModalOpen}
        />
      </Container>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
      />
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 1.8rem;
`;

const CreateButton = styled(Button)`
  position: absolute;
  bottom: 1.8rem;
  left: 1.8rem;
  right: 1.8rem;
  width: calc(100% - 3.6rem);
  z-index: 2;
`;

const Title = styled(Text)`
  color: #1b2944;
  font-weight: 800;
  font-size: 1.5rem;
`;

const ProductList = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;
