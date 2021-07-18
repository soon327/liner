import React from 'react';
import styled from 'styled-components';
import Modal, { Props } from './';

export default function SharetModal({ openModal, setOpenModal }: Props) {
  return (
    <CONTAINER openModal={openModal} setOpenModal={setOpenModal}>
      <div>Share</div>
    </CONTAINER>
  );
}

const CONTAINER = styled(Modal)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 400px;
  min-height: 179px;
  border-radius: 16px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 16px;
  flex-direction: column;
`;
