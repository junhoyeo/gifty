import React from 'react';
import styled from 'styled-components';

import Modal, { ModalProps } from '../molecules/Modal';

const CreateModal: React.FC<ModalProps> = ({
  isOpen, onAfterOpen, onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
    </Modal>
  );
};

export default CreateModal;
