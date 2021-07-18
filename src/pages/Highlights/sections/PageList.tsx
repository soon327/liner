import React, { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../../utils/useInfiniteScroll';
import { PageData } from '../../../data';
import Button from '../../../components/Button';

import {
  PAGE_CONTAINER,
  CONTENTS_CONTAINER,
  CONTENTS,
  CONTENTS_TITLE_CONTAINER,
  CONTENTS_TITLE,
  CONTENTS_DESC_CONTAINER,
  CONTENTS_DESC,
  FOOTER,
  SOURCE_CONTAINER,
  BUTTON_CONTAINER,
} from '../../Home/sections/PageList';

interface Props {
  data: PageData[];
}
export default function PageList({ data }: Props) {
  const history = useHistory();
  const [limit, setLimit] = useState(5);

  const handleClickTitle = (data: PageData) => {
    history.push(`/myhighlights/pages?type=my_highlights$index=${data.index}&url=${data.href}`, data);
    window.scrollTo(0, 0);
  };

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([{ isIntersecting, target }], observer) => {
      if (isIntersecting) {
        setLimit((limit: number) => limit + 5);
        observer.unobserve(target);
        console.log('dfawefefaefw');
      }
    },
    [setLimit]
  );

  const [setTarget] = useInfiniteScroll(onIntersect);
  const landingData = useMemo(() => data.slice(0, limit), [data, limit]);

  return (
    <section>
      {landingData.map((data) => (
        <PAGE_CONTAINER key={data.index} ref={data.index === landingData.length - 1 ? setTarget : null}>
          <CONTENTS_CONTAINER>
            <CONTENTS>
              <CONTENTS_TITLE_CONTAINER>
                <CONTENTS_TITLE onClick={() => handleClickTitle(data)}>{data.title}</CONTENTS_TITLE>
              </CONTENTS_TITLE_CONTAINER>
              <CONTENTS_DESC_CONTAINER>
                <CONTENTS_DESC>{data.description}</CONTENTS_DESC>
              </CONTENTS_DESC_CONTAINER>
            </CONTENTS>
          </CONTENTS_CONTAINER>
          <PAGE_TAGS>
            <TAG_ICON />
            <TAGS_CONTAINER>
              {data.tagList?.map((tag, idx) => (
                <SAVED_TAG key={idx}>
                  <SAVED_TAG_LINK>{tag}</SAVED_TAG_LINK>
                  <CLOSE_BTN icon="close" />
                </SAVED_TAG>
              ))}
            </TAGS_CONTAINER>
            <ADD_TAGS>Edit Tag</ADD_TAGS>
          </PAGE_TAGS>
          <FOOTER>
            <SOURCE_CONTAINER>
              <a href={data.href} target="_blank" rel="noreferrer">
                {data.source}
              </a>
            </SOURCE_CONTAINER>
            <BUTTON_CONTAINER>
              <Button icon="share" />
              <Button icon="export" />
              <Button icon="more" />
            </BUTTON_CONTAINER>
          </FOOTER>
        </PAGE_CONTAINER>
      ))}
    </section>
  );
}

const PAGE_TAGS = styled.div`
  display: flex;
`;

const TAG_ICON = styled.div`
  background-image: url('/images/tag.svg');
  width: 20px;
  height: 20px;
  margin: 2px 8px 12px 0;
  display: inline-block;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
`;

const TAGS_CONTAINER = styled.div`
  max-width: 652px;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
`;

const SAVED_TAG = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.hover_grey};
  color: ${({ theme }) => theme.colors.text_grey};
  margin: 0 8px 6px 0;
  padding: 3px 6px;
  min-width: 48px;
  text-align: center;
  position: relative;
  justify-content: center;
`;

const SAVED_TAG_LINK = styled.a`
  font-weight: 500;
  line-height: 1.5;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors.text_grey};
  overflow: hidden;
  text-align: center;
  position: relative;
  :hover {
    background-color: #eef1f4;
  }
`;

const CLOSE_BTN = styled(Button)`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  display: none;
`;

const ADD_TAGS = styled.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #b0b4bd;
  border-radius: 4px;
  margin: 0 0 6px;
  height: 24px;
  padding: 0 6px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover_grey};
  }
`;
