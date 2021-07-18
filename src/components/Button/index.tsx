import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'notification' | 'search' | 'close' | 'info' | 'expand' | 'expand_mint' | 'filter' | 'bookmark' | 'share' | 'more' | 'export';
}

const iconURL = {
  notification: '/images/notification.svg',
  search: '/images/search.svg',
  close: '/images/close.svg',
  info: '/images/information.svg',
  expand: '/images/expand.svg',
  expand_mint: '/images/expand_mint.svg',
  filter: '/images/filter.svg',
  bookmark: '/images/bookmark.svg',
  share: '/images/share.svg',
  more: '/images/more.svg',
  export: '/images/export.svg',
  tag: '/images/tag.svg',
};

export default function Button({ icon, ...props }: Props): JSX.Element {
  return (
    <BUTTON icon={icon ? iconURL[icon] : null} {...props}>
      {props.children}
    </BUTTON>
  );
}

const BUTTON = styled.button<{ icon: string | null }>`
  all: unset;
  cursor: pointer;
  padding: 7px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.img_mint};
  color: white;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover_mint};
  }

  ${({ icon }) =>
    icon &&
    css`
      all: unset;
      cursor: pointer;
      background-image: url(${icon});
      width: 32px;
      height: 32px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      :hover {
        background-color: ${({ theme }) => (icon === '/images/search.svg' ? theme.colors.hover_darkgrey : theme.colors.hover_grey)};
      }
    `}
`;
