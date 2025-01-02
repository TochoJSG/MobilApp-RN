/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  primary:"#2A4D50",
  secondary:"#DDF0FF",
  tertiary:"#FF7754",

  gray:"#83829A",
  gray2:"#C1C0C8",

  offwhite:"#F3F4F8",
  white:"#FFFFFF",
  black:"#000000",
  red:"#e81e4d",
  green:"#00C135",
  lightWhite:"#FAFAFC",
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

const SIZE = {
  xSmall:10,
  small:12,
  medium:16,
  large:19,
  xLarge:23,
  xxLarge:45,
  height,
  width
};

const SHADOWS = {
  small:{
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height: 3,
    },
    shadowOpacity:0.25,
    shaowRadius:3.85,
    elevation:3,
  },
  medium:{
    shadowColor: "#000",
    shadowOffset:{
      width:0,
      height:3,
    },
    shadowOpacity:0.25,
    shadowRadius:5.85,
    elevation:5,
  },
};

export { SHADOWS,SIZE };