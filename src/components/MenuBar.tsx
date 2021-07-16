import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function MenuBar() {
  const { pathname } = useLocation();

  return (
    <MENU_BAR>
      <MENU href="/home" active={pathname === '/home'}>
        For You
      </MENU>
      <MENU href="/myhighlights/highlights" active={pathname === '/myhighlights/highlights'}>
        My Highlights
      </MENU>
      <MENU href="/more" active={pathname === '/more'}>
        More
      </MENU>
    </MENU_BAR>
  );
}

const MENU_BAR = styled.nav`
  position: fixed;
  top: 98px;
  display: flex;
  flex-direction: column;
  width: 216px;
  margin-left: -16px;
  z-index: 1;
`;

const MENU = styled.a<{ active: boolean }>`
  ${({ theme, active }) => css`
    width: 232px;
    height: 51px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 16px;
    letter-spacing: -0.4px;
    color: ${theme.colors.text_grey};
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.hover_grey};
    }
    ${active &&
    css`
      color: ${theme.colors.text_mint};
      font-weight: 700;
    `}
  `}
`;
