import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: 'search' | 'close';
}

export default function Input({ icon, ...props }: Props): JSX.Element {
  return (
    <INPUT_BOX>
      <INPUT {...props}></INPUT>
      <SEARCH_ICON icon="search"></SEARCH_ICON>
    </INPUT_BOX>
  );
}

const INPUT_BOX = styled.div`
  min-height: 40px;
  display: flex;
`;
const INPUT = styled.input`
  outline: unset;
  width: 680px;
  border-radius: 8px;
  border: none;
  background-color: #eef1f4;
  line-height: 1.2;
  font-size: 16px;
  color: #333;
  padding: 10px 54px 11px 16px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const SEARCH_ICON = styled(Button)`
  align-self: center;
  position: relative;
  left: -40px;
`;
