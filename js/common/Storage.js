'use strict';

import React, {
  AsyncStorage
} from 'react-native';

//本地key－value存储，保存登录等用户配置信息

class DeviceStorage {
	static get(key) {
		return AsyncStorage.getItem(key).then(function(value) {
			return JSON.parse(value);
		});
	}
	static save(key, value) {
		return AsyncStorage.setItem(key, JSON.stringify(value));
	}

	static update(key, value) {
		return DeviceStorage.get(key).then((item) => {
			value = typeof value === 'string' ? value : Object.assign({}, item, value);
			return AsyncStorage.setItem(key, JSON.stringify(value));
		});
	}

	static delete(key) {
		return AsyncStorage.removeItem(key);
	}
}
export default DeviceStorage;
