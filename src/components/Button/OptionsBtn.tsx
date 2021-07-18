import React from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  showOptions: boolean;
  setShowOptions: (showOptions: boolean) => void;
  optionData: { title?: string; data: string[]; btnType?: string; left: string };
}

export default function OptionsBtn({ showOptions, setShowOptions, optionData, ...props }: Props) {
  return (
    <LANGUAGES_WRAP {...props}>
      <LANGUAGES_BTN onClick={() => setShowOptions(!showOptions)}>
        {props.children}
        <LANGUAGES_ICON showOptions={showOptions} btnType={optionData.btnType} />
      </LANGUAGES_BTN>
      <LANGUAGES_DROPDOWN_BOX showOptions={showOptions} left={optionData.left}>
        <LANGUAGES_DROPDOWN>
          {optionData.title && <DROPDOWN_HEADER>{optionData.title}</DROPDOWN_HEADER>}
          {optionData.data.map((language) => (
            <LANGUAGE_LI key={language}>
              <span>{language}</span>
            </LANGUAGE_LI>
          ))}
        </LANGUAGES_DROPDOWN>
      </LANGUAGES_DROPDOWN_BOX>
    </LANGUAGES_WRAP>
  );
}

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
  align-self: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_grey};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LANGUAGES_ICON = styled.div<{ showOptions: boolean; btnType: string | undefined }>`
  width: 8px;
  height: 8px;
  object-fit: contain;
  margin-left: 8px;
  background-image: url(${({ showOptions }) => (showOptions ? '/images/collapse.svg' : '/images/expand.svg')});
  ${({ btnType }) =>
    btnType === 'more' &&
    css`
      background-image: url(/images/more.svg);
    `}
  background-size: 8px;
  background-repeat: no-repeat;
`;

const LANGUAGES_DROPDOWN_BOX = styled.div<{ showOptions: boolean; left: string }>`
  position: relative;
  left: ${({ left }) => left};
  top: -15px;
  z-index: 3 !important;
  display: ${({ showOptions }) => (showOptions ? 'bolck' : 'none')};
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
  border: 1px solid ${({ theme }) => theme.colors.background_grey};
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
  color: ${({ theme }) => theme.colors.tab_title_grey};
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
  color: ${({ theme }) => theme.colors.tab_title_black};
  padding: 8px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover_grey};
  }
`;
