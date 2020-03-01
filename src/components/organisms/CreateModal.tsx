import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import DateInput from '../molecules/DateInput';
import Modal, { ModalProps } from '../molecules/Modal';
import { IGiftCard, defaultGiftCard } from '../../utils/models';

import 'react-datepicker/dist/react-datepicker.css';

async function getBase64FromFile(file): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const CreateModal: React.FC<ModalProps> = ({
  isOpen, onAfterOpen, onRequestClose,
}) => {
  const [image, setImage] = useState<string>('');
  const [product, setProduct] = useState<IGiftCard>(defaultGiftCard);

  const onChangeProduct = (field: string, event) =>
    setProduct({ ...product, [field]: event.target.value });

  const onChangeProductDate = (date: Date) =>
    setProduct({ ...product, dueDate: date });

  const onBeforeRequestClose = () => {
    setProduct(defaultGiftCard);
    onRequestClose();
  };

  const onChangeImage = async (event: any) => {
    const rawImage = event.target.files[0];
    const base64Image = await getBase64FromFile(rawImage);
    console.log(base64Image);

    const { data: cardInfo } = await axios.post('/api/card', {
      image: base64Image,
    });
    const {
      product: productName,
      barcode: productBarcode,
      order: productOrder,
      date: productDueDate,
    } = cardInfo;
    console.log(cardInfo);
    setProduct({
      ...cardInfo,
      name: productName,
      barcode: productBarcode.toString(),
      order: productOrder.toString(),
      dueDate: new Date(productDueDate),
    });
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
      <InfoForm>
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
      </InfoForm>
    </Modal>
  );
};

export default CreateModal;

const InfoForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;
