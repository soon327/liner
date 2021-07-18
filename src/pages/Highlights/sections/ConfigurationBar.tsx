import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import OptionsBtn from '../../../components/Button/OptionsBtn';
import Input from '../../../components/Input';
import { searchOptions } from '../../../data';

interface Props {
  clickedInput: boolean;
  setClickedInput: (showOptions: boolean) => void;
  showOptions: boolean;
  setShowOptions: (showOptions: boolean) => void;
}

export default function ConfigurationBar({ clickedInput, setClickedInput, showOptions, setShowOptions }: Props) {
  return (
    <>
      {clickedInput ? (
        <>
          <CONFIGURATION_BAR>
            <BUTTON_CONTAINER clicked={clickedInput}>
              <SEARCH_OPTIONS optionData={searchOptions} showOptions={showOptions} setShowOptions={setShowOptions}>
                Search Option
              </SEARCH_OPTIONS>
              <SEARCH
                icon="close"
                width="100%"
                placeholder="Search my highlights"
                btnHanddler={() => setClickedInput(false)}
                clicked={clickedInput}
              />
            </BUTTON_CONTAINER>
          </CONFIGURATION_BAR>
          <SEARCH_MESSAGE>Search results from my highlights</SEARCH_MESSAGE>
        </>
      ) : (
        <CONFIGURATION_BAR>
          <TAB>Highlights</TAB>
          <BUTTON_CONTAINER clicked={clickedInput}>
            <Button icon="filter" />
            <SEARCH
              icon="search"
              width="100%"
              placeholder="Search my highlights"
              onClick={() => setClickedInput(true)}
              clicked={clickedInput}
            />
          </BUTTON_CONTAINER>
        </CONFIGURATION_BAR>
      )}
    </>
  );
}

const CONFIGURATION_BAR = styled.section`
  position: sticky;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  margin-top: 40px;
  width: 680px;
  height: 40px;
  background-color: #fff;
`;

const TAB = styled.a`
  background-color: ${({ theme }) => theme.colors.background_grey};
  color: ${({ theme }) => theme.colors.tab_title_black};
  padding: 11px 16px;
  border-radius: 8px;
  font-weight: 700;
  margin-right: 8px;
  margin-left: 16px;
`;

const BUTTON_CONTAINER = styled.div<{ clicked: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ clicked }) => (clicked ? '100%' : '304px')};
  padding-left: 8px;
`;

const SEARCH = styled(Input)<{ clicked: boolean }>`
  width: 100%;
  min-width: 220px;
  height: 32px;
  margin-left: 16px;
  font-size: 14px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.background_grey};
`;

const SEARCH_OPTIONS = styled(OptionsBtn)`
  margin-left: unset;
  white-space: nowrap;
  margin-left: 8px;
`;

const SEARCH_MESSAGE = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.tab_title_grey};
  height: 34px;
  align-items: center;
  padding-left: 16px;
  font-size: 12px;
`;
