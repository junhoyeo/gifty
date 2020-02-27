import * as React from 'react';
import ReactModal from 'react-modal';

export type ModalProps = {
  isOpen?: boolean;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onAfterOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;

const ModalStyles = {
  content: {
    borderRadius: '0',
    bottom: 'unset',
    left: 'unset',
    overflow: 'unset',
    padding: '2rem',
    position: 'relative',
    right: 'unset',
    top: 'unset',
    border: 'none',
    minWidth: '350px',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
  },
};
