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
    LOGIN_INFO_KEY:'LOGIN_INFO_KEY',
}

//接口请求前缀
let httpKeys = {
    //主地址
    HOST: 'http://react.legendshop.cn',
    // HOST: 'http://legendshop.imwork.net:8801/legendshop_app',
    //注册使用短信验证码
    REGISTER_SMS_API_KEY: '/sendRegSMSCode?',
    //忘记密码发送短信验证码
    FORGET_SMS_API_KEY: '/sendSMSCode?',
    //登录
    LOGIN_API_KEY: '/login?',
    //注册
    REGISTER_API_KEY: '/userReg?',
    //找回密码
    FORGET_PWD_API_KEY: '/forgetPwd?',

}

export default {
    window: window,
    colors: colors,
    storeKeys: storeKeys,
    httpKeys: httpKeys,
}
