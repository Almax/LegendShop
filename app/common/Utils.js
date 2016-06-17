'use strict';

import Md5 from './Md5';

import { AsyncStorage } from 'react-native';

let Util = {
    /*
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     *
     * */
    httpGet: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            });
    },
    //http的post请求,参数传递body是标准的json对象
    httpPost:(url, body, successCallback, failCallback)=>{
          fetch(url, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(body)
          })
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            });

    },
    //本地存储，以key-value的方式
    storageSetItem: (key, value) => {
        const jsonValue = JSON.stringify(value);
        return AsyncStorage.setItem(key, jsonValue, (error) => {
            console.log(key + ' set error: ' + error);
        });
    },
    //获取本地对应key的value
    storageGetItem: (key) => {
        return AsyncStorage.getItem(key)
            .then((data, error) => {
                if (data) return JSON.parse(data);
                console.log(key + ' get error: ' + error);
                return null;
            })
    },
    //清除当前key的value
    storageClearItem: (key) => {
        return AsyncStorage.removeItem(key);
    },
    //md5加密
    md5Str:(value)=>{
      return Md5.hex_md5(value);
    },

}

export default Util;
