'use strict';

import React, {
    Component,
    Image,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';

import Utils from '../common/Utils';
import Constant from '../common/Constant';

export default class TopBar extends Component {

  constructor(props){
        super(props);
        this.state = {
            login:'登录',
        };
  }

  componentDidMount() {
    Utils.storageGetItem(Constant.storeKeys.LOGIN_INFO_KEY)
        .then((value)=> {
          if(value){
          console.log('tag','登录信息获取＝'+JSON.stringify(value));
          if(value.accessToken)
            this.setState({
                  login:'已登录',
            });
          }
        });
  }

    _onLoginClick(title:string){
        if (this.props._onLoginClick) {
            this.props._onLoginClick(title);
        }
    }

    _onSearchClick(title: string) {
        if (this.props._onSearchClick) {
             this.props._onSearchClick(title);
        }
    }

    render() {
        return (
          <View>
            <View style={styles.container}>
                <Image source={require('../image/home_logo_@2x.png')} style={styles.logo}/>
                <View style={styles.searchBox}>
                    <Image source={require('../image/lib_story_img_search_bt_@2x.png')} style={styles.searchIcon}/>
                    <TextInput
                        onPress={()=>this._onSearchClick('搜索')}
                        keyboardType='web-search'
                        placeholder='搜索...'
                        style={styles.inputText}/>
                </View>
                <TouchableOpacity onPress={()=>this._onLoginClick('登录')} activeOpacity={0.7}>
                  <Text style={styles.loginText}>
                    {this.state.login}
                  </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separate}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 50 : 50,   // 处理iOS状态栏
        backgroundColor: 'white',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 15,
        width: 100,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height: 22,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 10,  // 设置圆角边
        backgroundColor: 'white',
        borderWidth:0.5,
        borderColor:'#DEDEDE',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    scanIcon: {
        height: 17,
        width: 17,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 10,
        height: 10,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 10
    },
    loginText:{
        fontSize:12,
    },
    separate:{
      height:1,
      backgroundColor:'#A7A7AA',
    },
});
