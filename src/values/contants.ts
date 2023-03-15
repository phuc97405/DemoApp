import {Dimensions, Platform} from 'react-native';

const {
  name: APP_NAME,
  displayName: APP_DISPLAY_NAME,
} = require('../../app.json');

const dimensions = Dimensions.get('window');

const {width, height} = dimensions;

export enum FONT_SIZE {
  SMALLEST = 8,
  SMALLER = 10,
  SMALL = 12,
  NORMAL = 14,
  BIG = 16,
  BIGGER = 18,
  BIGGEST = 20,
  RATIO = 1.5,
}

export enum DURATION {
  SHORT = 200,
  NORMAL = 400,
  LONG = 600,
}

export const CONSTANTS = {
  APP_NAME,
  APP_DISPLAY_NAME,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  BASE_URL: 'https://homecook-api.jacktran.men/api/v1',
  BUNDLE_ID: 'com.agp.yundiet',
  APPLE_ID: '6444329285',
  IS_IPHONE_X:
    Platform.OS === 'ios' && !Platform.isPad && (width >= 812 || height >= 812),
  ICON_PREFIX: Platform.OS === 'ios' ? 'ios-' : 'md-',
  EMAIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  APPLE_STORE_LINK: 'https://apps.apple.com/us/app/iou-아이오유/id6444329285',
  GOOGLE_STORE_LINK: 'https://play.google.com/store/apps/details?id=com.kr.iou',
  MASKING_EMAIL_REGEX: /(?<=.{2}).(?=[^@]*?@)/g,
};

export const DEFAULT_FONTS = {
  Thin: 'Pretendard-Light',
  ExtraLight: 'Pretendard-ExtraLight',
  Light: 'Pretendard-Light',
  Regular: 'Pretendard-Regular',
  Medium: 'Pretendard-Medium',
  SemiBold: 'Pretendard-SemiBold',
  Bold: 'Pretendard-Bold',
  ExtraBold: 'Pretendard-ExtraBold',
  Black: 'Pretendard-Black',
};

export const FLOAT_NUMBER_REGEX = /^$|[+-]?([0-9]*[.])?[0-9]+/gm;

export const naverKeys = {
  kConsumerKey: 'Wnn59AkA8y6J8Diu6mYD',
  kConsumerSecret: 'L0hm9qksVl',
  kServiceAppName: 'com.homecook.kr',
  kServiceAppUrlScheme: 'homecook', // only for iOS
};
