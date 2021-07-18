import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';
import SharetModal from '../../../components/Modal/ShareModal';
import ButtonContainer from '../../../pages/Home/sections/ButtonContainer';

interface Props {
  dataIdx: number;
}
export default function DetailHeader({ dataIdx }: Props) {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

  return (
    <HEADER>
      <SharetModal openModal={openModal} setOpenModal={setOpenModal} />
      <Button icon="back" onClick={() => history.goBack()} />
      <ButtonContainer dataIdx={dataIdx} openModal={openModal} setOpenModal={setOpenModal} />
    </HEADER>
  );
}

const HEADER = styled.header`
  position: sticky;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  width: 712px;
  height: 40px;
  background-color: #fff;
  padding: 0 16px;
`;

const BUTTON_CONTAINER = styled.div`
  display: flex;
`;
