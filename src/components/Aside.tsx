import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Data } from '../data';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: Data;
}

export default function Aside({ data, ...props }: Props) {
  return (
    <ASIDE>
      <RECOMMENDATION_KEYWORDS>
        <TITLE>{props.children} Keywords</TITLE>
        <LIST>
          {data.keywords.map((keyword, idx) => (
            <TAG_KEYWORD key={idx}>#{keyword}</TAG_KEYWORD>
          ))}
        </LIST>
      </RECOMMENDATION_KEYWORDS>
      <RECOMMENDATION_PAGES>
        <TITLE>{props.children} Pages</TITLE>
        <LIST>
          {data.pages.map((page, idx) => (
            <PAGE key={idx} href={page.href}>
              {page.tagList.length !== 0 && (
                <TAG_LIST>
                  {page.tagList.map((tag, idx) => (
                    <TAG_PAGE key={idx}>#{tag}</TAG_PAGE>
                  ))}
                </TAG_LIST>
              )}
              <PAGE_TITLE>{page.title}</PAGE_TITLE>
              <PAGE_SOURCE_CONTAINER>
                <PAGE_SOURCE>{page.source}</PAGE_SOURCE>
              </PAGE_SOURCE_CONTAINER>
            </PAGE>
          ))}
        </LIST>
        <SHOWMORE>
          Show More
          <MORE_BTN icon="expand_mint" />
        </SHOWMORE>
      </RECOMMENDATION_PAGES>
    </ASIDE>
  );
}

const ASIDE = styled.aside`
  width: 320px;
  margin-left: 24px;
  margin-top: 40px;
`;
const RECOMMENDATION_KEYWORDS = styled.section`
  width: 320px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.hover_grey};
  display: flex;
  flex-direction: column;
  padding: 4px 16px 8px 16px;
`;
const RECOMMENDATION_PAGES = styled(RECOMMENDATION_KEYWORDS)`
  margin-top: 16px;
`;

const TITLE = styled.header`
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.tab_title_grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.hover_darkgrey};
  padding: 8px 0;
`;

const LIST = styled.div`
  padding: 3px 0;
  display: flex;
  flex-wrap: wrap;
`;
const TAG_KEYWORD = styled.a`
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.text_black};
  margin-bottom: 8px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.background_grey};
    color: ${({ theme }) => theme.colors.text_mint};
  }
`;

const PAGE = styled.a`
  width: 320px;
  padding: 8px 0;
  :hover {
    background-color: ${({ theme }) => theme.colors.background_grey};
  }
`;
const TAG_LIST = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
  height: 15px;
  overflow-y: hidden;
`;

const TAG_PAGE = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  height: 18px;
  color: #777;
  margin-right: 6px;
`;

const PAGE_TITLE = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PAGE_SOURCE_CONTAINER = styled.div`
  display: inline-flex;
  align-items: center;
  width: 260px;
  white-space: nowrap;
`;

const PAGE_SOURCE = styled.div`
  font-size: 11px;
  color: #999;
`;

const SHOWMORE = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.text_mint};
  text-align: left;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.hover_grey};
  cursor: pointer;

  width: 100%;
  display: flex;
  justify-content: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.background_grey};
  }
`;

const MORE_BTN = styled(Button)`
  margin-left: 5px;
  width: 12px;
  height: 12px;
  background-size: 12px;
`;
