import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

import Modal, { ModalProps } from '../molecules/Modal';

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

  const onChangeImage = async (event: any) => {
    const rawImage = event.target.files[0];
    const base64Image = await getBase64FromFile(rawImage);
    console.log(base64Image);

    const { data: cardInfo } = await axios.post('/api/card', {
      image: base64Image,
    });
    console.log(cardInfo);
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <Input
        type="file"
        onChange={onChangeImage}
      />
    </Modal>
  );
};

export default CreateModal;

const Input = styled.input`
`;
