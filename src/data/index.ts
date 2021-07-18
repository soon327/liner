export interface Highlight {
  color: string;
  text: string;
}
export interface PageData {
  index: number;
  title: string;
  tagList?: string[];
  source: string;
  href: string;
  description?: string;
  highlights?: Highlight[];
}

export interface AsideData {
  keywords: string[];
  pages: PageData[];
}

export const languages = { title: 'Select for feed', data: ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'], left: '-200px' };

export const searchOptions = { title: 'Search Option', data: ['Title', 'URL', 'Highlight', 'Description', 'Comment'], left: '-100px' };

export const pageListMoreData = {
  btnType: 'more',
  data: ['More Pages like this', 'Fewer pages like this', 'Hide this page'],
  left: '-100px',
};

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
      index: 0,
      title: '20 Google Search Tips to Use Google More Efficiently - Lifehack',
      tagList: ['google', 'google search', 'list', 'tips'],
      source: 'www.lifehack.org',
      href: 'https://getliner.com/home/pages/bbdb1632-be82-39ab-a7d4-f4481a14b62a?access=trending&index=0&url=https://www.lifehack.org/articles/technology/20-tips-use-google-search-efficiently.html&method=DOC_REC_TB_002',
    },
    {
      index: 1,
      title: 'Song Maker - Chrome Music Lab',
      tagList: ['music'],
      source: 'musiclab.chromeexperiments.com',
      href: 'https://getliner.com/home/pages/aff9be01-d236-3aab-8297-585fc808f4bb?access=trending&index=1&url=https://musiclab.chromeexperiments.com/Song-Maker&method=DOC_REC_TB_002',
    },
    {
      index: 2,
      title: 'Feed | LinkedIn',
      tagList: [],
      source: 'www.linkedin.com',
      href: 'https://getliner.com/home/pages/40ce0414-e477-3194-98ac-b4cc333d18b8?access=trending&index=2&url=https://www.linkedin.com/feed&method=DOC_REC_TB_002',
    },
    {
      index: 3,
      title: 'Times Tables Rock Stars: Play',
      tagList: [],
      source: 'play.ttrockstars.com',
      href: 'https://getliner.com/home/pages/be9e5f8c-4398-3ce0-b51c-671b00f9a340?access=trending&index=3&url=https://play.ttrockstars.com/play&method=DOC_REC_TB_002',
    },
    {
      index: 4,
      title: 'Free Personality Test | 16Personalities',
      tagList: [],
      source: 'www.16personalities.com',
      href: 'https://getliner.com/home/home/pages/4e842088-256a-3454-9016-7e43cb365774?access=trending&index=4&url=https://www.16personalities.com/free-personality-test&method=DOC_REC_TB_002',
    },
  ],
};

export const relevantData: AsideData = {
  keywords: [
    'english',
    'is',
    'a',
    'West',
    'Germanic',
    'language',
    'originally',
    'spoken',
    'by',
    'the',
    'inhabitants',
    'of',
    'early medieval England',
  ],
  pages: [
    {
      index: 0,
      title: 'Free online pixel art drawing tool - Pixilart',
      tagList: ['art', 'drawing'],
      source: 'www.lifehack.org',
      href: 'https://getliner.com/home/pages/bbdb1632-be82-39ab-a7d4-f4481a14b62a?access=trending&index=0&url=https://www.lifehack.org/articles/technology/20-tips-use-google-search-efficiently.html&method=DOC_REC_TB_002',
      description:
        'English has developed over the course of more than 1,400 years. The earliest forms of English, a group of West Germanic (Ingvaeonic) dialects brought to Great Britain by Anglo-Saxon settlers in the 5th century, are collectively called Old English.',
    },
    {
      index: 1,
      title: 'WhiteHat Junior',
      tagList: ['music'],
      source: 'musiclab.chromeexperiments.com',
      href: 'https://getliner.com/home/pages/aff9be01-d236-3aab-8297-585fc808f4bb?access=trending&index=1&url=https://musiclab.chromeexperiments.com/Song-Maker&method=DOC_REC_TB_002',
    },
    {
      index: 2,
      title: 'ReadTheory | ReadTheory',
      tagList: ['read'],
      source: 'www.linkedin.com',
      href: 'https://ko.wikipedia.org/wiki/%EC%9B%94%EC%9A%94%EB%B3%91',
      description:
        '월요병(月曜病)은 월요일 아침에 특히나 피곤한 상태를 말한다. 주말에 쉬고 월요일에 다시 출근, 등교를 하는 직장인들과 학생들에게 주로 나타난다.심리적인 증상으로서 주말 토요일과 일요일에 휴식을 취한 뒤에 새로 출근하여 일을 시작하는 월요일에 느끼게 되는 권태감 내지는 무력감을 말한다.',
    },
    {
      index: 3,
      title: 'Song Maker - Chrome Music Lab',
      tagList: ['music'],
      source: 'ko.wikipedia.org',
      href: 'https://ko.wikipedia.org/wiki/%EC%9B%94%EC%9A%94%EB%B3%91',
      description:
        '주말에 흐트러진 생체리듬 때문에 원래의 리듬으로 적응해 가는 데 나타나는 신체적인 현상과 주말 동안의 휴식에 대한 미련이 남아 있기 때문에 월요일은 새로운 한 주를 시작해야 한다는 심리적 긴장감으로 스트레스성 두통이나 우울증이 올 수 있는데, 비단 월요일뿐만 아니라 긴 휴가 후에도 비슷한 증상이 나타난다.‘병’이라는 단어를 담고 있지만 실제 치료가 필요한 의학적 질병이나 정신 질환 따위는 아니다.주말 동안 적당한 휴식을 취하고 평상시와 같은 수면 시간을 유지하는 것이 좋으며, 충분한 비타민 섭취가 도움이 된다.',
    },
    {
      index: 4,
      title: 'Toppr OS: Power your school to the future',
      tagList: [],
      source: 'www.16personalities.com',
      href: 'https://getliner.com/home/home/pages/4e842088-256a-3454-9016-7e43cb365774?access=trending&index=4&url=https://www.16personalities.com/free-personality-test&method=DOC_REC_TB_002',
    },
  ],
};

export const foryouData: PageData[] = [
  {
    index: 0,
    title: '1. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [
      { color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' },
      {
        color: 'red',
        text: '이 컴포넌트를 보시면, const App: React.FC = () => { ... } 와 같이 화살표함수를 사용하여 컴포넌트가 선언되었습니다. 우리가 지금까지 강의에서 다뤄왔던 컴포넌트들은 function 키워드를 사용해서 선언했었는데요, 컴포넌트를 선언 할 때 이렇게 화살표함수를 사용하여 선언해도 무방합니다. 리액트 공식 문서나 해외의 유명 개발자들 (링크1, 링크2)은 보통 function 키워드를 사용하여 함수형 컴포넌트를 선언하는 것이 추세이기에, 이 튜토리얼에서는 지금까지 function 키워드를 사용해왔습니다. 반면 위 코드에서는 화살표함수로 선언이 되었고 React.FC 라는 것을 사용하여 컴포넌트의 타입을 지정했는데요, 이렇게 타입을 지정하는것이 좋을수도 있고 나쁠수도 있습니다',
      },
    ],
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
  {
    index: 6,
    title: '7. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [
      { color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' },
      {
        color: 'red',
        text: '이 컴포넌트를 보시면, const App: React.FC = () => { ... } 와 같이 화살표함수를 사용하여 컴포넌트가 선언되었습니다. 우리가 지금까지 강의에서 다뤄왔던 컴포넌트들은 function 키워드를 사용해서 선언했었는데요, 컴포넌트를 선언 할 때 이렇게 화살표함수를 사용하여 선언해도 무방합니다. 리액트 공식 문서나 해외의 유명 개발자들 (링크1, 링크2)은 보통 function 키워드를 사용하여 함수형 컴포넌트를 선언하는 것이 추세이기에, 이 튜토리얼에서는 지금까지 function 키워드를 사용해왔습니다. 반면 위 코드에서는 화살표함수로 선언이 되었고 React.FC 라는 것을 사용하여 컴포넌트의 타입을 지정했는데요, 이렇게 타입을 지정하는것이 좋을수도 있고 나쁠수도 있습니다',
      },
    ],
  },
  {
    index: 7,
    title: '8. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [
      { color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' },
      {
        color: 'red',
        text: '이 컴포넌트를 보시면, const App: React.FC = () => { ... } 와 같이 화살표함수를 사용하여 컴포넌트가 선언되었습니다. 우리가 지금까지 강의에서 다뤄왔던 컴포넌트들은 function 키워드를 사용해서 선언했었는데요, 컴포넌트를 선언 할 때 이렇게 화살표함수를 사용하여 선언해도 무방합니다. 리액트 공식 문서나 해외의 유명 개발자들 (링크1, 링크2)은 보통 function 키워드를 사용하여 함수형 컴포넌트를 선언하는 것이 추세이기에, 이 튜토리얼에서는 지금까지 function 키워드를 사용해왔습니다. 반면 위 코드에서는 화살표함수로 선언이 되었고 React.FC 라는 것을 사용하여 컴포넌트의 타입을 지정했는데요, 이렇게 타입을 지정하는것이 좋을수도 있고 나쁠수도 있습니다',
      },
    ],
  },
  {
    index: 8,
    title: '9. Foryou data',
    tagList: ['hello', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'green', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 9,
    title: '10. Foryou data',
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#33cac6', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 10,
    title: '11. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'blue', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 11,
    title: '12. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 12,
    title: '13. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 13,
    title: '14. Foryou data',
    tagList: ['for', 'you'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [
      { color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' },
      {
        color: 'red',
        text: '이 컴포넌트를 보시면, const App: React.FC = () => { ... } 와 같이 화살표함수를 사용하여 컴포넌트가 선언되었습니다. 우리가 지금까지 강의에서 다뤄왔던 컴포넌트들은 function 키워드를 사용해서 선언했었는데요, 컴포넌트를 선언 할 때 이렇게 화살표함수를 사용하여 선언해도 무방합니다. 리액트 공식 문서나 해외의 유명 개발자들 (링크1, 링크2)은 보통 function 키워드를 사용하여 함수형 컴포넌트를 선언하는 것이 추세이기에, 이 튜토리얼에서는 지금까지 function 키워드를 사용해왔습니다. 반면 위 코드에서는 화살표함수로 선언이 되었고 React.FC 라는 것을 사용하여 컴포넌트의 타입을 지정했는데요, 이렇게 타입을 지정하는것이 좋을수도 있고 나쁠수도 있습니다',
      },
    ],
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
  {
    index: 6,
    title: '7. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 7,
    title: '8. Highlights data',
    tagList: ['my', 'high', 'lights', 'hello'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'green', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 8,
    title: '9. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#33cac6', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 9,
    title: '10. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'blue', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 10,
    title: '11. Highlights data',
    tagList: ['my', 'high', 'lights', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 11,
    title: '12. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 12,
    title: '13. Highlights data',
    tagList: ['my', 'high', 'lights', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 13,
    title: '14. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 14,
    title: '15. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 15,
    title: '16. Highlights data',
    tagList: ['my', 'high', 'lights', 'hello'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'green', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 16,
    title: '17. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#33cac6', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 17,
    title: '18. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'blue', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 18,
    title: '19. Highlights data',
    tagList: ['my', 'high', 'lights', 'world'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: '#00bdb8', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
  {
    index: 19,
    title: '20. Highlights data',
    tagList: ['my', 'high', 'lights'],
    source: 'getliner.com',
    href: 'https://getliner.com/home',
    description:
      '라이너는 나에게 중요한 정보를 표시할 수 있는 웹 하이라이터와 겹겹이 하이라이팅 된 인터넷의 핵심을 볼 수 있는 콘텐츠 탐색 플랫폼 을 서비스 합니다.',
    highlights: [{ color: 'yellow', text: '라이너는 사용자의 90%가 해외 유저인 진정한 글로벌 서비스입니다.' }],
  },
];
