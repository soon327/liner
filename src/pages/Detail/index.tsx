import React from 'react';
import { useLocation, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { CONTAINER, CONTENTS } from '../Home';
import PageList from '../Home/sections/PageList';
import Aside from '../../components/Aside';
import { trendingData, relevantData, PageData } from '../../data';
import DetailHeader from './sections/DetailHeader';
import DetailContents from './sections/DetailContents';

export default function DetailPage({ location }: RouteComponentProps<{}, {}, PageData>) {
  const { pathname } = useLocation();
  return (
    <CONTAINER>
      <CONTENTS>
        <DetailHeader />
        <DetailContents data={location.state} />
        <VIEW_ORIGINAL href={location.state.href} target="_blank" rel="noreferrer">
          View Original
        </VIEW_ORIGINAL>
        {pathname === '/home/pages' && (
          <>
            <RELEVANT_HEADER>More Like This</RELEVANT_HEADER>
            <PageList data={relevantData.pages} />
          </>
        )}
      </CONTENTS>
      {pathname === '/home/pages' && <Aside data={relevantData}>Relevant</Aside>}
      {pathname === '/myhighlights/pages' && <Aside data={trendingData}>Trending</Aside>}
    </CONTAINER>
  );
}

const VIEW_ORIGINAL = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 680px;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  margin: 0 16px 40px;
  border: 1px solid ${({ theme }) => theme.colors.hover_darkgrey};
  color: #8a919e;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover_grey};
  }
`;
const RELEVANT_HEADER = styled.section`
  font-size: 21px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  padding-bottom: 16px;
  margin-left: 16px;
  border-bottom: 1px solid rgb(238, 241, 244);
  width: 680px;
`;
