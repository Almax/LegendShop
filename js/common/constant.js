'use strict';

import React, {
    Platform,
    Dimensions,
} from 'react-native';

//获取屏幕的长款
export const WINDOW_WIDTH = Platform.OS==='ios'?Dimensions.get('window').width:Dimensions.get('screen').width;

export const WINDOW_HEIGHT = Platform.OS==='ios'?Dimensions.get('window').height:Dimensions.get('screen').height;


export const ACCOUNT_SAVE_KEY='ACCOUNT_SAVE_KEY';
