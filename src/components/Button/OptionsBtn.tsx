import React from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  showOptions: boolean;
  setShowOptions: () => void;
  optionData: { title?: string; data: string[]; btnType?: string; left: string };
}

export default function OptionsBtn({ showOptions, setShowOptions, optionData, ...props }: Props) {
  return (
    <OPTIONS_WRAP btnType={optionData.btnType} {...props}>
      <OPTIONS_BTN onClick={() => setShowOptions()}>
        {props.children}
        <OPTIONS_ICON showOptions={showOptions} btnType={optionData.btnType} />
      </OPTIONS_BTN>
      <OPTIONS_DROPDOWN_BOX showOptions={showOptions} left={optionData.left}>
        <OPTIONS_DROPDOWN>
          {optionData.title && <DROPDOWN_HEADER>{optionData.title}</DROPDOWN_HEADER>}
          {optionData.data.map((language) => (
            <OPTION_LI key={language}>
              <span>{language}</span>
            </OPTION_LI>
          ))}
        </OPTIONS_DROPDOWN>
      </OPTIONS_DROPDOWN_BOX>
    </OPTIONS_WRAP>
  );
}

const OPTIONS_WRAP = styled.div<{ btnType: string | undefined }>`
  justify-self: flex-end;
  margin-left: auto;
  display: flex;
  align-items: center;
  align-self: flex-end;
  position: relative;
  height: 32px;
  ${({ btnType }) =>
    btnType &&
    css`
      all: unset;
    `}
`;

const OPTIONS_BTN = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_grey};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const OPTIONS_ICON = styled.div<{ showOptions: boolean; btnType: string | undefined }>`
  width: 8px;
  height: 8px;
  background-size: 8px;
  object-fit: contain;
  margin-left: 8px;
  background-image: url(${({ showOptions }) => (showOptions ? '/images/collapse.svg' : '/images/expand.svg')});
  ${({ btnType }) =>
    btnType &&
    css`
      all: unset;
      cursor: pointer;
      background-image: url(/images/${btnType}.svg);
      width: 32px;
      height: 32px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      :hover {
        background-color: ${({ theme }) => theme.colors.hover_grey};
      }
    `}
  background-repeat: no-repeat;
`;

const OPTIONS_DROPDOWN_BOX = styled.div<{ showOptions: boolean; left: string }>`
  position: relative;
  left: ${({ left }) => left};
  top: -15px;
  z-index: 3 !important;
  display: ${({ showOptions }) => (showOptions ? 'bolck' : 'none')};
`;

const OPTIONS_DROPDOWN = styled.ul`
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

const OPTION_LI = styled.li`
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
