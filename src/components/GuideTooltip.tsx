import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Lottie from 'react-lottie';
import forYou from 'src/animations/foryou.json';
import myHighlights from 'src/animations/myHighlights.json';

const animationData = {
  'For You': forYou,
  'My Highlights': myHighlights,
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: 'For You' | 'My Highlights';
  showTooltip: boolean;
  setShowTooltip: (showTooltip: boolean) => void;
}
export default function GuideTooltip({ title, showTooltip, setShowTooltip, ...props }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData[title], // title에 따라 애니메이션 데이터를 선택한다.
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <CONTAINER showTooltip={showTooltip}>
      <TRIANGLE />
      <TOOLTIP_BOX>
        <CLOSE_BTN icon="close" onClick={() => setShowTooltip(false)} />
        <LOTTIE_CONTAINER>
          <Lottie options={defaultOptions} width={320} height={160} style={{ width: '100%', height: '100%' }} />
        </LOTTIE_CONTAINER>
        <TEXT_CONTAINER>
          <TEXT_TITLE>{title}</TEXT_TITLE>
          <TEXT_CONTENTS>{props.children}</TEXT_CONTENTS>
        </TEXT_CONTAINER>
      </TOOLTIP_BOX>
    </CONTAINER>
  );
}

const CONTAINER = styled.div<{ showTooltip: boolean }>`
  top: -24px;
  margin-left: 60px;
  z-index: 50;
  width: 329px;
  height: 280px;
  position: absolute;
  display: ${({ showTooltip }) => (showTooltip ? 'flex' : 'none')};
`;

const TRIANGLE = styled.div`
  width: 19px;
  height: 19px;
  background-color: ${({ theme }) => theme.colors.tab_title_black};
  position: absolute;
  top: 30px;
  left: -9px;
  transform: rotate(45deg);
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tab_title_grey};
  border-left: 1px solid ${({ theme }) => theme.colors.tab_title_grey};
`;

const TOOLTIP_BOX = styled.div`
  justify-self: flex-end;
  width: 320px;
  height: 280px;
  box-shadow: 0 8px 20px 0 rgb(39 43 49 / 20%);
  border: 1px solid ${({ theme }) => theme.colors.tab_title_grey};
  background-color: ${({ theme }) => theme.colors.tab_title_black};
  border-radius: 8px;
  z-index: 1;
  position: relative;
`;

const CLOSE_BTN = styled(Button)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 3;
  :hover {
    background-color: unset;
  }
`;

const LOTTIE_CONTAINER = styled.div`
  width: 100%;
  height: 160px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const TEXT_CONTAINER = styled.div`
  margin-top: -10px;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 17px;
`;

const TEXT_TITLE = styled.div`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #fff;
`;

const TEXT_CONTENTS = styled.div`
  margin-top: 8px;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: -0.35px;
  color: #fff;
`;
