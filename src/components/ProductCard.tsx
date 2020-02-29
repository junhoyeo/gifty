import React from 'react'
import styled from 'styled-components';

import Text from './atoms/Text';
import { formatDateToKorean } from '../utils/formatDate';
import RoundButton from './molecules/RoundButton';

type ProductCardProps = {
  image?: string;
  title?: string;
  orderNumber?: string;
  expireDate?: Date;
  isUsed?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image, orderNumber, title = '배고파', expireDate = new Date(), isUsed = true,
}) => {
  return (
    <Container>
      <Image
        src={image || 'https://dummyimage.com/64x64/fff/e3e3e3'}
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
      <ButtonList>
        <CheckButton
          disabled={isUsed}
        >
          <Icon src="/static/icons/check.svg" />
        </CheckButton>
        <DeleteButton>
          <Icon src="/static/icons/trash.svg" />
        </DeleteButton>
      </ButtonList>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  padding: 1.2rem;
  border-radius: 8px;
  width: calc(100% - 2.4rem);
  position: relative;
  background-color:#E0E5EC;
  align-items: center;
  justify-items: space-between;
  box-shadow:
    9px 9px 16px rgb(163,177,198,0.6),
    -9px -9px 16px  rgba(255,255,255, 0.5);
  margin-bottom: 1.2rem;
`;

const Image = styled.img`
  box-shadow:
    9px 9px 16px rgb(163,177,198,0.6),
    -9px -9px 16px  rgba(255,255,255, 0.5);
  border-radius: 8px;
  min-width: 64px;
  width: 64px;
  height: 64px;
`;

const Info = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const OrderNumber = styled(Text)`
  font-size: 0.85rem;
  font-weight: bold;
  color: #868e96;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #1b2944;
`;

const ExpireDate = styled(Text)`
  font-size: 0.9rem;
  font-weight: bold;
  color: #868e96;
`;

const ButtonList = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
`;

const Icon = styled.img`
  width: 20px;
  height: -webkit-fill-available;
  padding: 0.5rem;
`;

const CheckButton = styled(RoundButton)`
  margin-right: 0.35rem;
`;

const DeleteButton = styled(RoundButton)`
`;
