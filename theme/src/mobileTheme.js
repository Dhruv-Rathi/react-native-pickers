import {createTheming} from '@callstack/react-theme-provider';
import {Platform} from 'react-native';

export const themes = {
  dark: {
    barStyle: 'light-content',
    colors: {
      primary: '#191A32',
      primaryLighter: '#242645',
      background: '#1A1B32',
      ModalBackground: '#1C1E3C',
      sidebarBackground: '#202345',
      cardBackground: '#1E1F40',
      hyperlink: '#2DA5FF',
      red: '#FF6F6F',
      black: '#000000',
      text: '#ffffff',
      danger: '#FB6D6D',
      green: '#8AE6F0',
      blue: '#5CB6FF',
      skyblue: '#2CD6E2',
      gray: '#5E636B',
      borderOutline: '#5D5D98',
      searchBackground: '#27285A',
      voilet: '#C58EFF',
      orange: '#FFD376',
      dodgerBlue: '#2E8DFD',
      greenishBlue: '#4EDDE6',
      white: 'rgba(255, 255, 255, 0.6)',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      lightBlack: '#1C1E47',
      gradientColor1: 'rgba(93, 93, 152, 1)',
      gradientColor2: 'rgba(0, 0, 0, 0)',
      pink: '#EDAAFD',
      lightWhite: '#FFFFFF',
      lightYellow: '#FFE7B4',
      placeholderBackground: 'rgba(255, 255, 255, 0.3)',
      thickBlue: '#242653',
      tagBackground: '#353762',
      maroon: ' rgba(255, 132, 154, 0.12)',
      darkBlue: '#2B2D52',
      lightGray: 'rgba(255, 248, 233, 0.08)',
      outlineBlue: '#254762',
      foreground: '#999',
    },
    fonts: {
      primary: Platform.OS === 'ios' ? 'IBMPlexSerif' : 'IBMPlexSerif-Regular', //400
      primaryMedium: 'IBMPlexSerif-Medium', //500
      primarySemiBold: 'IBMPlexSerif-SemiBold', //600
      primaryBold: 'IBMPlexSerif-Bold', //700

      secondary: 'Montserrat-Regular',
      secondaryMedium: 'IBMPlexSerif-Medium',
      secondarySemiBold: 'IBMPlexSerif-SemiBold',
      secondaryBold: 'Montserrat-Bold',

      tertiary: 'Nunito-Regular',
      tertiaryMedium: 'Nunito-Medium',
      tertiarySemiBold: 'Nunito-SemiBold',
      tertiaryBold: 'Nunito-Bold',
    },

    fontSizes: {
      xxsSmall: {
        fontSize: 10,
        lineHeight: 12,
      },
      xssmall: {
        fontSize: 12,
        lineHeight: 15,
      },
      xsSmall: {
        fontSize: 14,
        lineHeight: 17,
      },
      small: {
        fontSize: 16,
        lineHeight: 20,
      },
      medium: {
        fontSize: 20,
        lineHeight: 26,
      },
    },
    borderRadius: {
      verySmall: 4,
      small: 6,
      normal: 10,
    },
    borderWidth: {
      verythin: 0.5,
      thin: 0.6,
      normal: 1,
      bold: 1.5,
      fat: 2,
    },
    fontWeights: {
      normal: 'normal',
      lightBold: '400',
      bold: '500',
      Bold: 'bold',
      moreBold: '600',
      veryBold: '700',
    },
    shadow: {
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {width: 2, height: 4},
      shadowRadius: 10,
      elevation: 5,
    },
  },
  light: {
    colors: {
      primary: '#fff', // Dark blue
      secondary: '#242645', // A bit lighter blue
      background: '#1A1B32', //background
      ModalBackground: '#1C1E3C', // Modal background Color
      text: '#000000',
      danger: '#FB6D6D',
    },
    fonts: {
      primary: 'IBMPlexSerif',
      secondary: 'Montserrat',
    },
    fontSizes: {
      medium: {
        fontSize: 20,
        lineHeight: 26,
      },
    },
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(themes.dark);

export {ThemeProvider, withTheme, useTheme};
