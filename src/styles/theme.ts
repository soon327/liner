import { ROOT_FONT_SIZE } from './GlobalStyles';

const colors = {
  title_black: '#222222',
  text_black: '#555555',
  text_grey: '#787D86',
  text_mint: '#00bdb8',
  tab_title_black: '#52565d',
  tab_title_grey: '#969aa2',
  img_mint: '#00e2b7',
  background_grey: '#eef1f4',
  hover_grey: '#dde1e7',
};

const pixelToRem = (size: number) => `${size / ROOT_FONT_SIZE}rem`;
const fontSizes = {
  base: '1rem',
  lg: pixelToRem(18),
  subtitle: pixelToRem(24),
  title: pixelToRem(32),
};

const theme = {
  colors,
  fontSizes,
};

export default theme;
