import React, { useState } from 'react';
import styled from 'styled-components';
import InfomationBtn from '../../../components/Button/InformationBtn';
import GuideTooltip from '../../../components/GuideTooltip';

const languages = ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'];
export default function Title() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <CONTAINER>
      <HEADER>
        <HOME_TITLE>
          For You
          <DROPDOWN_CONTAINER>
            <InfomationBtn showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
            <GuideTooltip title="For You" showTooltip={showTooltip} setShowTooltip={setShowTooltip}>
              "We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets."
            </GuideTooltip>
          </DROPDOWN_CONTAINER>
          <LANGUAGES_WRAP>
            <LANGUAGES_BTN onClick={() => setShowLanguages(!showLanguages)}>
              Languages
              <LANGUAGES_ICON showLanguages={showLanguages} />
            </LANGUAGES_BTN>
            <LANGUAGES_DROPDOWN_BOX showLanguages={showLanguages}>
              <LANGUAGES_DROPDOWN>
                <DROPDOWN_HEADER>Select for feed</DROPDOWN_HEADER>
                {languages.map((language) => (
                  <LANGUAGE_LI key={language}>
                    <span>{language}</span>
                  </LANGUAGE_LI>
                ))}
              </LANGUAGES_DROPDOWN>
            </LANGUAGES_DROPDOWN_BOX>
          </LANGUAGES_WRAP>
        </HOME_TITLE>
      </HEADER>
    </CONTAINER>
  );
}

const CONTAINER = styled.section`
  width: 712px;
  height: 100%;
  margin-bottom: 100px;
`;

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
  font-weight: 700;
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

const LANGUAGES_WRAP = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  display: flex;
  align-items: center;
  align-self: flex-end;
  position: relative;
  height: 32px;
`;

const LANGUAGES_BTN = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-end;
  font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
  font-size: 14px;
  color: #787d86;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LANGUAGES_ICON = styled.div<{ showLanguages: boolean }>`
  width: 8px;
  height: 8px;
  object-fit: contain;
  margin-left: 8px;
  background-image: url(${({ showLanguages }) => (showLanguages ? '/images/collapse.svg' : '/images/expand.svg')});
  background-size: 8px;
  background-repeat: no-repeat;
`;

const LANGUAGES_DROPDOWN_BOX = styled.div<{ showLanguages: boolean }>`
  position: relative;
  left: -200px;
  top: -15px;
  z-index: 3 !important;
  display: ${({ showLanguages }) => (showLanguages ? 'bolck' : 'none')};
`;

const LANGUAGES_DROPDOWN = styled.ul`
  min-width: 200px;
  position: absolute;
  top: 34px;
  width: max-content;
  white-space: nowrap;
  z-index: 2;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
  border: 1px solid #eef1f4;
  background-color: #fff;
  padding: 8px 0;
  margin: 0;
`;

const DROPDOWN_HEADER = styled.div`
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.35px;
  color: #969aa2;
  display: flex;
  padding: 8px 15px 0;
`;

const LANGUAGE_LI = styled.li`
  height: 40px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  color: #52565d;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
