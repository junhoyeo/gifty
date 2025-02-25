import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import Button from '../components/atoms/Button';
import ProductCard from '../components/ProductCard';
import CreateModal from '../components/organisms/CreateModal';
import IllustForEmpty from '../components/organisms/IllustForEmpty';
import Layout from '../components/Layout';
import Text from '../components/atoms/Text';

import { IGiftCard } from '../utils/models';
import { loadFromLocalStorage } from '../utils/useLocalStorage';
import useProductList from '../utils/useProductList';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [productList, setProductList] = useProductList();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isProductListEmpty, setIsProductListEmpty] = useState<boolean>(false);

  const onChangeCreateModalOpen = () =>
    setIsCreateModalOpen(!isCreateModalOpen);

  const onUpdateProductList = () =>
    setProductList(loadFromLocalStorage('products', []));

  const onClickDelete = (order: string) => {
    setProductList(
      productList.filter(
        (product: IGiftCard) =>
          product.order !== order,
      ),
    );
    toast('삭제했습니다!');
  };

  useEffect(
    () => {
      setIsProductListEmpty(
        !productList.length,
      );
    },
    [],
  );

  return (
    <Layout>
      <Container>
        <Title>
          기프티콘 목록
        </Title>
        <ProductList>
          <IllustForEmpty
            isEmpty={isProductListEmpty}
          />
          {productList.map(({ image, name, order, dueDate }, idx) => (
            <ProductCard
              key={`product-${idx}`}
              image={image}
              name={name}
              order={order}
              dueDate={dueDate}
              onClickDeleteButton={() => onClickDelete(order)}
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
          onUpdateAfterClose={onUpdateProductList}
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
