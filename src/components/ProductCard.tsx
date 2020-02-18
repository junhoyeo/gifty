import React from 'react'
import styled from 'styled-components';

import Text from './atoms/Text';
import { formatDateToKorean } from '../utils/formatDate';

type ProductCardProps = {
  image: string;
  title: string;
  orderNumber: string;
  expireDate: Date;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image, orderNumber, title, expireDate,
}) => {
  return (
    <Container>
      <Image
        src={image}
      />
      <Info>
        <OrderNumber>
          주문번호 {orderNumber}
        </OrderNumber>
        <Title>
          {title}
        </Title>
        <ExpireDate>
          유효기간 {formatDateToKorean(expireDate)}
        </ExpireDate>
      </Info>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  box-shadow: 0px 1px 26px -4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: fit-content;
  position: relative;
`;

const Image = styled.img`
  width: 240px;
  box-shadow: 0px 1px 26px -4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const Info = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const OrderNumber = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #868e96;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

const ExpireDate = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #868e96;
`;
