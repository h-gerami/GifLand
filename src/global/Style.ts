import {Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

const GL_Palette = {
  black: '#2A3756',
  grayLight: '#D4E1EC',
  gray: '#AAAAAA',
  blue: '#20C0D6',
  red: '#EF395E',
  white: '#fff',
  lightGray: '#f2f2f2',
};

const GL_Font = {
  light: 'SofiaProLight',
  medium: 'SofiaProMedium',
  bold: 'SofiaProBold',
  regular: 'SofiaProRegular',
};

export {GL_Palette, GL_Font, wp, hp};
