import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';

export default function DetailHeader() {
  const history = useHistory();
  console.log(history);
  return (
    <HEADER>
      <Button icon="back" onClick={() => history.goBack()} />
      <BUTTON_CONTAINER>
        <Button icon="bookmark" />
        <Button icon="share" />
        <Button icon="more" />
      </BUTTON_CONTAINER>
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
