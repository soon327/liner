import React from 'react';
import styled from 'styled-components';
import { PageData } from '../../../data';

interface Props {
  data: PageData;
}
export default function DetailContents({ data }: Props) {
  return (
    <CONTAINER>
      <ABSTRACT>
        <TITLE>{data.title}</TITLE>
        <SOURCE_CONTAINER>
          <SOURCE href={data.href} target="_blank" rel="noreferrer">
            {data.source}
          </SOURCE>
        </SOURCE_CONTAINER>
      </ABSTRACT>
      <DETAIL>
        {data.highlights &&
          data.highlights.map((highlight, idx) => (
            <HIGHLIGHTS key={idx}>
              <HIGHLIGHTS_LINE lineColor={highlight.color} />
              <HIGHLIGHTS_TEXT>{highlight.text}</HIGHLIGHTS_TEXT>
            </HIGHLIGHTS>
          ))}
      </DETAIL>
    </CONTAINER>
  );
}
const CONTAINER = styled.article`
  padding: 16px 16px 0;
`;

const ABSTRACT = styled.section`
  width: 680px;
  border-bottom: 1px solid #eef1f4;
`;
const TITLE = styled.h2`
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-size: 24px;
  letter-spacing: normal;
  color: #222;
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
  word-wrap: break-word;
  margin: 0 0 16px;
  cursor: text;
  white-space: pre-line;
`;
const SOURCE_CONTAINER = styled.div`
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: default;
`;

const SOURCE = styled.a`
  font-size: 12px;
  font-weight: 400;
  margin-left: 14px;
  text-decoration: underline;
  color: #777;
`;

const DETAIL = styled.section`
  padding: 32px 0;
`;
const HIGHLIGHTS = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const HIGHLIGHTS_LINE = styled.div<{ lineColor: string }>`
  border-left: 4px solid ${({ lineColor }) => lineColor};
  border-width: 0 0 0 4px;
  border-style: solid;
  margin: 2px 0;
`;

const HIGHLIGHTS_TEXT = styled.div`
  width: 100%;
  font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
  line-height: 1.43;
  color: #555;
  margin: 0 16px;
  font-size: 16px;
`;
