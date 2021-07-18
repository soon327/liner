import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { foryouData, PageData } from '../../../data';
import Button from '../../../components/Button';

export default function PageList() {
  const history = useHistory();

  const handleClickTitle = (data: PageData) => {
    history.push(`/home/pages?access=recommend$index=${data.index}&url=${data.href}`, data);
  };

  return (
    <section>
      {foryouData.map((data) => (
        <PAGE_CONTAINER key={data.index}>
          {data.tagList && (
            <TAG_CONTAINER>
              {data.tagList.map((tag, idx) => (
                <TAG key={idx} href="/">
                  #{tag}
                </TAG>
              ))}
            </TAG_CONTAINER>
          )}
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
          <FOOTER>
            <SOURCE_CONTAINER>
              <a href={data.href} target="_blank" rel="noreferrer">
                {data.source}
              </a>
            </SOURCE_CONTAINER>
            <BUTTON_CONTAINER>
              <Button icon="bookmark" />
              <Button icon="share" />
              <Button icon="more" />
            </BUTTON_CONTAINER>
          </FOOTER>
        </PAGE_CONTAINER>
      ))}
    </section>
  );
}

const PAGE_CONTAINER = styled.article`
  padding: 24px 16px 0;
  width: 712px;
  position: relative;
`;

const TAG_CONTAINER = styled.div`
  height: 21px;
  max-width: 560px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const TAG = styled.a`
  font-weight: 500;
  line-height: 1.5;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.hover_mint};
  margin: 0 6px 0 0;
  border-radius: 4px;
`;

const CONTENTS_CONTAINER = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  overflow-x: hidden;
`;

const CONTENTS = styled.div`
  width: 100%;
`;
const CONTENTS_TITLE_CONTAINER = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.33;
  color: #222;
  margin: 0 0 8px;
  word-wrap: break-word;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CONTENTS_TITLE = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const CONTENTS_DESC_CONTAINER = styled.div`
  display: flex;
  margin-top: 16px;
`;

const CONTENTS_DESC = styled.mark`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.43;
  color: #555;
  word-wrap: break-word;
  background-color: transparent;
`;

const FOOTER = styled.footer`
  height: 48px;
  display: flex;
  justify-content: space-between;
  width: 680px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eef1f4;
`;

const SOURCE_CONTAINER = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: default;
  font-weight: 400;
  text-decoration: underline;
  color: #777;
  font-size: 11px;
  line-height: 1.5;
`;
const BUTTON_CONTAINER = styled.div`
  position: relative;
  display: inline-flex;
`;

export {
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
};
