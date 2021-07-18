import React from 'react';
import styled from 'styled-components';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
export default function Modal({ openModal, setOpenModal, ...props }: Props) {
  return (
    <>
      <MODAL_BACKGROUND openModal={openModal} onClick={() => setOpenModal(false)} />
      <MODAL openModal={openModal} {...props} />
    </>
  );
}

const MODAL_BACKGROUND = styled.div<{ openModal: boolean }>`
  display: ${(props) => (props.openModal ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: hidden;
  z-index: 20;
`;

const MODAL = styled.div<{ openModal: boolean }>`
  display: ${(props) => (props.openModal ? 'flex' : 'none')};
  z-index: 99;
`;
