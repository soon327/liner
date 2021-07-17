import React from 'react';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import Title from './sections/Title';

export default function HomePage() {
  return (
    <CONTAINER>
      <Title />
      <Aside />
    </CONTAINER>
  );
}

const CONTAINER = styled.main`
  display: flex;
  margin-top: 64px;
  margin-left: 224px;
  border: 1px solid blue;
`;
