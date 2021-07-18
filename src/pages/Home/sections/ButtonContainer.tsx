import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import OptionsBtn from '../../../components/Button/OptionsBtn';
import { PageData, pageListMoreData } from '../../../data';

interface Props {
  dataIdx: number;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
export default function ButtonContainer({ dataIdx, openModal, setOpenModal }: Props) {
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [moreIdx, setMoreIdx] = useState(-1);

  // 북마크 클릭 시 상태 업데이트하여 북마크이미지 변화
  const handleBookmark = (index: number) => {
    if (bookmarked.indexOf(index) === -1) setBookmarked([...bookmarked, index]);
    else {
      const newState = bookmarked.filter((value) => value !== index);
      setBookmarked(newState);
    }
  };

  // ...버튼 클릭 시 index업데이트
  const handleMore = (index: number) => {
    if (moreIdx === -1 || moreIdx !== index) setMoreIdx(index);
    else setMoreIdx(-1);
  };

  return (
    <BUTTON_CONTAINER>
      <Button onClick={() => handleBookmark(dataIdx)} icon={bookmarked.indexOf(dataIdx) !== -1 ? 'bookmark_mint' : 'bookmark'} />
      <Button icon="share" onClick={() => setOpenModal(!openModal)} />
      <OptionsBtn showOptions={dataIdx === moreIdx} setShowOptions={() => handleMore(dataIdx)} optionData={pageListMoreData} />
    </BUTTON_CONTAINER>
  );
}

const BUTTON_CONTAINER = styled.div`
  position: relative;
  display: inline-flex;
`;
