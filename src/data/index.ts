export interface Highlight {
  color: string;
  text: string;
}
export interface Page {
  title: string;
  tagList: string[];
  source: string;
  href: string;
  highlights?: Highlight[];
  description?: string;
  authors?: string;
}

export interface AsideData {
  keywords: string[];
  pages: Page[];
}

export const languages = { title: 'Select for feed', data: ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'] };

export const searchOptions = { title: 'Search Option', data: ['Title', 'URL', 'Highlight', 'Description', 'Comment'] };

export const trendingData: AsideData = {
  keywords: [
    'sharing',
    'news',
    'upload',
    'video',
    'free',
    'medline',
    'health',
    'nih',
    'education',
    'ncbi',
    'nlm',
    'national library of medicine',
  ],
  pages: [
    {
      title: '20 Google Search Tips to Use Google More Efficiently - Lifehack',
      tagList: ['google', 'google search', 'list', 'tips'],
      source: 'www.lifehack.org',
      href: 'https://getliner.com/home/pages/bbdb1632-be82-39ab-a7d4-f4481a14b62a?access=trending&index=0&url=https://www.lifehack.org/articles/technology/20-tips-use-google-search-efficiently.html&method=DOC_REC_TB_002',
    },
    {
      title: 'Song Maker - Chrome Music Lab',
      tagList: ['music'],
      source: 'musiclab.chromeexperiments.com',
      href: 'https://getliner.com/home/pages/aff9be01-d236-3aab-8297-585fc808f4bb?access=trending&index=1&url=https://musiclab.chromeexperiments.com/Song-Maker&method=DOC_REC_TB_002',
    },
    {
      title: 'Feed | LinkedIn',
      tagList: [],
      source: 'www.linkedin.com',
      href: 'https://getliner.com/home/pages/40ce0414-e477-3194-98ac-b4cc333d18b8?access=trending&index=2&url=https://www.linkedin.com/feed&method=DOC_REC_TB_002',
    },
    {
      title: 'Times Tables Rock Stars: Play',
      tagList: [],
      source: 'play.ttrockstars.com',
      href: 'https://getliner.com/home/pages/be9e5f8c-4398-3ce0-b51c-671b00f9a340?access=trending&index=3&url=https://play.ttrockstars.com/play&method=DOC_REC_TB_002',
    },
    {
      title: 'Free Personality Test | 16Personalities',
      tagList: [],
      source: 'www.16personalities.com',
      href: 'https://getliner.com/home/home/pages/4e842088-256a-3454-9016-7e43cb365774?access=trending&index=4&url=https://www.16personalities.com/free-personality-test&method=DOC_REC_TB_002',
    },
  ],
};

export interface PageData {
  index: number;
  title: string;
  tagList?: string[];
  source: string;
  href: string;
  description: string;
  highlights?: Highlight[];
}

export const foryouData: PageData[] = [
  {
    index: 0,
    title: '1. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 1,
    title: '2. Foryou data',
    tagList: ['hello', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'green', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 2,
    title: '3. Foryou data',
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#33cac6', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 3,
    title: '4. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'blue', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 4,
    title: '5. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 5,
    title: '6. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
];

export const highlightsData: PageData[] = [
  {
    index: 0,
    title: '1. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 1,
    title: '2. Highlights data',
    tagList: ['my', 'high', 'lights', 'hello'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'green', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 2,
    title: '3. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#33cac6', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 3,
    title: '4. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'blue', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 4,
    title: '5. Highlights data',
    tagList: ['my', 'high', 'lights', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 5,
    title: '6. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
];
