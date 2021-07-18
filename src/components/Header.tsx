import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export default function Header() {
  return (
    <HEADER>
      <LOGO_BOX>
        <LOGO href="/home" />
      </LOGO_BOX>
      <SEARCH icon="search" width="680px" placeholder="Search on LINER" />
      <RIGHT>
        <Button>Upgrade</Button>
        <NOTIFICATION_BTN icon="notification" />
      </RIGHT>
    </HEADER>
  );
}

const HEADER = styled.header`
  position: fixed;
  top: 0;
  width: 1280px;
  height: 64px;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 1;
`;

const LOGO_BOX = styled.div`
  flex: 2;
  height: 32px;
`;
const LOGO = styled.a`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 8px;

  background: url(/images/logo.svg);
  background-size: 32px;
`;

const SEARCH = styled(Input)`
  flex: 6;
`;

const RIGHT = styled.div`
  flex: 3;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NOTIFICATION_BTN = styled(Button)`
  margin-left: 20px;
`;
