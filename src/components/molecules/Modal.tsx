import * as React from 'react';
import ReactModal from 'react-modal';
import useWindowSize from '../utils/useWindowSize';

export type ModalProps = {
  isOpen?: boolean;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onAfterOpen, onRequestClose, children }) => {
  const { width } = useWindowSize();
  const isNarrower = width <= 500;
  const modalStylesWithResponsiveWidth = getModalStyles(isNarrower);

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={modalStylesWithResponsiveWidth}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;

const getModalStyles = (isNarrower) => ({
  content: {
    borderRadius: '8px',
    bottom: 'unset',
    left: 'unset',
    overflow: 'unset',
    padding: '2rem',
    position: 'relative',
    right: 'unset',
    top: 'unset',
    border: 'none',
    minWidth: isNarrower ? undefined : '350px',
    width: isNarrower ? 'calc(75% - 2rem)' : undefined,
    background: 'linear-gradient(145deg, #d8dde4, #ffffff)',
    boxShadow: `
      20px 20px 60px #bec3c9,
      -20px -20px 60px #ffffff`,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(240, 245, 253, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 999,
    margin: '0 auto',
    width: isNarrower ? '100%' : '500px',
  },
});
