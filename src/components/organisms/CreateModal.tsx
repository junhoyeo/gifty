import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';
import KakaoGiftOCR from 'kakao-gift-ocr';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import DateInput from '../molecules/DateInput';
import Loading from '../molecules/Loading';
import Modal, { ModalProps } from '../molecules/Modal';
import { IGiftCard, defaultGiftCard, isValidGiftCard } from '../../utils/models';

import 'react-datepicker/dist/react-datepicker.css';

const getCardInfo = async (image) => {
  const giftCardParser = new KakaoGiftOCR(
    console.log,
    '/static/data/lang-data',
  );
  await giftCardParser.Ready;
  const giftCard = await giftCardParser.getInfo(image);
  await giftCardParser.terminate();
  return giftCard;
};

const CreateModal: React.FC<ModalProps> = ({
  isOpen, onAfterOpen, onRequestClose,
}) => {
  const [image, setImage] = useState<string>('');
  const [product, setProduct] = useState<IGiftCard>(defaultGiftCard);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeProduct = (field: string, event) =>
    setProduct({ ...product, [field]: event.target.value });

  const onChangeProductDate = (date: Date) =>
    setProduct({ ...product, dueDate: date });

  const onBeforeRequestClose = () => {
    setProduct(defaultGiftCard);
    onRequestClose();
  };

  const onChangeImage = async (event: any) => {
    setIsLoading(true);
    const rawImage = event.target.files[0];
    const {
      name = '인식 실패',
      barcode = '인식 실패',
      order = '인식 실패',
      dueDate: productDueDate,
    } = await getCardInfo(rawImage);

    setProduct({
      name,
      barcode,
      order,
      dueDate: (() => {
        try {
          return new Date(productDueDate);
        } catch {
          return new Date();
        }
      })(),
    });
    setIsLoading(false);
  };

  const onClickAddButton = () => {
    try {
      if (isValidGiftCard(product)) {
        toast.dismiss();
      }
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const { name, barcode, dueDate, order } = product;
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onBeforeRequestClose}
    >
      <FileInput
        type="file"
        onChange={onChangeImage}
      />
      <FormWrapper>
        <OverlaidLoading
          isLoading={isLoading}
        />
        <FormAfterLoading
          isLoading={isLoading}
        >
          <Input
            type="text"
            placeholder="상품 이름"
            value={name}
            onChange={(event) => onChangeProduct('name', event)}
          />
          <Input
            type="text"
            placeholder="바코드 번호"
            value={barcode}
            onChange={(event) => onChangeProduct('barcode', event)}
          />
          <Input
            type="text"
            placeholder="주문 번호"
            value={order}
            onChange={(event) => onChangeProduct('order', event)}
          />
          <DateInput
            placeholderText="유효기간"
            selected={dueDate}
            onChange={onChangeProductDate}
          />
          <AddButton
            onClick={onClickAddButton}
          >
            추가하기
          </AddButton>
        </FormAfterLoading>
      </FormWrapper>
    </Modal>
  );
};

export default CreateModal;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const OverlaidLoading = styled(Loading)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

type FormAfterLoadingProps = {
  isLoading: boolean;
};

const FormAfterLoading = styled.div<FormAfterLoadingProps>`
  display: flex;
  flex-direction: column;

  ${({ isLoading }) => isLoading && css`
    opacity: 0.3;
  `};
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;

const AddButton = styled(Button)`
  padding: 1rem;
  margin-top: 0.5rem;
`;
