import React, { useState } from 'react';
import styled from 'styled-components';
import { CONTAINER, CONTENTS, SUBTITLE } from '../Home';
import Aside from '../../components/Aside';
import Title from '../../components/Title';
import ConfigurationBar from './sections/ConfigurationBar';
import PageList from './sections/PageList';
import { highlightsData, trendingData } from '../../data';

export default function HighlightsPage() {
  const [clickedInput, setClickedInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <CONTAINER>
      <CONTENTS>
        <Title titleName="My Highlights">All your work, including highlights and comments will be safely stored on this page.</Title>
        <SUBTITLE>83 Pages, 132 Highlights</SUBTITLE>
        <ConfigurationBar
          clickedInput={clickedInput}
          setClickedInput={setClickedInput}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
        <PageList data={highlightsData} />
      </CONTENTS>
      <Aside data={trendingData}>Trending</Aside>
    </CONTAINER>
  );
}
