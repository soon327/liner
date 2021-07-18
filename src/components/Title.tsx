import React, { useState } from 'react';
import styled from 'styled-components';
import InfomationBtn from './Button/InformationBtn';
import OptionsBtn from './Button/OptionsBtn';
import GuideTooltip from './GuideTooltip';
import { languages } from '../data';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  titleName: 'For You' | 'My Highlights';
}

// props.children이 tootip의 내용으로 들어간다.

export default function Title({ titleName, ...props }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <HEADER>
      <HOME_TITLE>
        {titleName}
        <DROPDOWN_CONTAINER>
          <InfomationBtn showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
          <GuideTooltip title={titleName} showTooltip={showTooltip} setShowTooltip={setShowTooltip}>
            {props.children}
          </GuideTooltip>
        </DROPDOWN_CONTAINER>
        {titleName === 'For You' && (
          <OptionsBtn showOptions={showLanguages} setShowOptions={() => setShowLanguages(!showLanguages)} optionData={languages}>
            Languages
          </OptionsBtn>
        )}
      </HOME_TITLE>
    </HEADER>
  );
}

const HEADER = styled.header`
  margin: 40px 16px 16px 15px;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: sticky;
  position: -webkit-sticky;
  top: 64px;
  z-index: 2;
  height: 40px;
`;

const HOME_TITLE = styled.h1`
  display: flex;
  align-items: center;
  width: 681px;
  height: 40px;
  font-weight: 800;
  font-style: normal;
  font-size: 32px;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.colors.title_black};
  z-index: 2;
`;

const DROPDOWN_CONTAINER = styled.div`
  position: relative;
  height: 32px;
`;
