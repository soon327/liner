import React from 'react';
import styled from 'styled-components';
import Button from '.';

interface Props {
  showTooltip: boolean;
  setShowTooltip: (showTooltip: boolean) => void;
}
export default function InformationBtn({ showTooltip, setShowTooltip }: Props) {
  return <INFO_BTN icon="info" onClick={() => setShowTooltip(!showTooltip)} />;
}

const INFO_BTN = styled(Button)`
  margin-left: 9px;
  background-size: 20px;
`;
