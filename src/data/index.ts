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

export interface Data {
  keywords: string[];
  pages: Page[];
}

export const languages = { title: 'Select for feed', data: ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'] };

export const searchOptions = { title: 'Search Option', data: ['Title', 'URL', 'Highlight', 'Description', 'Comment'] };

export const trendingData: Data = {
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
