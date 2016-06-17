/**
 * Created by ljunb on 16/5/26.
 */
import { Dimensions } from 'react-native';

//基本的全局信息，比如窗口信息

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

//全局颜色配置

let colors = {
    themeColor: 'rgb(217, 51, 58)',
}

//key,存储本地数据的key

let storeKeys = {
    //存储登录界面是否记得账号，0是不记录，1是记录
    ACCOUNT_REMEMBER_KEY: 'ACCOUNT_REMEMBER_KEY',
}


export default {
    window: window,
    colors: colors,
    storeKeys: storeKeys,
}
