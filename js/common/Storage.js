'use strict';

import React, {
  AsyncStorage
} from 'react-native';

//本地key－value存储，可以存储普通对象以及json对象，
//对AsyncStorage进行封装简单的增删改查操作，
//保存登录等用户配置信息，保存部分本地缓存等

class Storage {

  //获取
  static get(key) {
    return AsyncStorage.getItem(key);
  }
  //保存
  static save(key, value) {
    return AsyncStorage.setItem(key, value);
  }
  //更新
  static update(key, value) {
    return DeviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, value);
    });
  }
  //获取json对象
	static getJson(key) {
		return AsyncStorage.getItem(key).then(function(value) {
			return JSON.parse(value);
		});
	}
  //保存json对象
	static saveJson(key, value) {
		return AsyncStorage.setItem(key, JSON.stringify(value));
	}
  //更新json对象
	static updateJson(key, value) {
		return DeviceStorage.get(key).then((item) => {
			value = typeof value === 'string' ? value : Object.assign({}, item, value);
			return AsyncStorage.setItem(key, JSON.stringify(value));
		});
	}
  //删除
	static delete(key) {
		return AsyncStorage.removeItem(key);
	}
}
export default Storage;
