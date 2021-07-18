import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: 'search' | 'close';
  width: string;
  btnHanddler?: () => void;
}

export default function Input({ icon, width, btnHanddler, ...props }: Props): JSX.Element {
  return (
    <INPUT_BOX width={width}>
      <INPUT {...props}></INPUT>
      <SEARCH_ICON icon={icon} onClick={btnHanddler}></SEARCH_ICON>
    </INPUT_BOX>
  );
}

const INPUT_BOX = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
`;
const INPUT = styled.input`
  outline: unset;
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background_grey};
  line-height: 1.2;
  font-size: 16px;
  color: #333;
  padding: 10px 54px 11px 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const SEARCH_ICON = styled(Button)`
  min-width: 32px;
  align-self: center;
  position: relative;
  left: -40px;
`;
