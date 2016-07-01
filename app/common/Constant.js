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
    lightGreyColor:'rgb(240, 242, 245)',//默认背景灰底
    lightColor:'rgb(206, 206, 211)',
    redColor:'rgb(255,0,0)',//正红
    lightBlackColor:'rgb(92, 92, 92)',//浅黑色
}

let strings = {
    searchTabString:['默认','销量','评论数','价格'],
    orderByString:['buys','buys','comments','cash'],
}

//key,存储本地数据的key

let storeKeys = {
    //存储跟登录相关的所有配置信息，包括token，账号，密码等
    LOGIN_INFO_KEY:'LOGIN_INFO_KEY',
}

//http
let httpKeys = {
    //主地址
    HOST: 'http://react.legendshop.cn',
    IMAGE_API_HOST: 'http://react.legendshop.cn/photoserver/photo/',
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
    //商品分类
    CATEGOTY_API_KEY: '/category',
    //商品搜索
    SEARCH_API_KEY: '/appSearch/prodList?',
    //商品详情
    PRODUCT_DETAIL_API_KEY: '/productDetail',

}

export default {
    window: window,
    colors: colors,
    strings:strings,
    storeKeys: storeKeys,
    httpKeys: httpKeys,

}
