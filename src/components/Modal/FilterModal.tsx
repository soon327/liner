import React from 'react';
import styled from 'styled-components';
import Modal, { Props } from './';

export default function FilterModal({ openModal, setOpenModal }: Props) {
  return (
    <CONTAINER openModal={openModal} setOpenModal={setOpenModal}>
      필터
    </CONTAINER>
  );
}

const CONTAINER = styled(Modal)`
  padding: 20px 16px 16px;
  width: 400px;
  min-height: 179px;
  border-radius: 16px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
`;
