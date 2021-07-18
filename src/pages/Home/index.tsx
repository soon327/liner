import React from 'react';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import Title from '../../components/Title';
import { trendingData } from '../../data';

export default function HomePage() {
  return (
    <CONTAINER>
      <CONTENTS>
        <Title titleName="For You">
          We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.
        </Title>
        <SUBTITLE>Picked by LINER, just for you</SUBTITLE>
      </CONTENTS>
      <Aside data={trendingData}>Trending</Aside>
    </CONTAINER>
  );
}

export const CONTAINER = styled.main`
  display: flex;
  margin-top: 64px;
  margin-left: 224px;
`;

export const CONTENTS = styled.section`
  width: 712px;
  height: 100%;
  margin-bottom: 100px;
`;

export const SUBTITLE = styled.h3`
  margin: 0 16px 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.text_grey};
`;
