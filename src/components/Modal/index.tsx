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
  z-index: 20;
`;

const MODAL = styled.div<{ openModal: boolean }>`
  display: ${(props) => (props.openModal ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25vw;
  min-width: 30vh;
  height: 30vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5%;
  background-color: white;
  z-index: 22;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
  overflow: hidden;
`;
