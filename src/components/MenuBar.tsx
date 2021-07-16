import React from 'react';
import styled from 'styled-components';

export default function MenuBar() {
  return <MENU_BAR>메뉴바</MENU_BAR>;
}

const MENU_BAR = styled.nav`
  position: fixed;
  top: 98px;
  width: 216px;
  margin-left: -16px;
  z-index: 1;
  border: 1px solid red;
`;
