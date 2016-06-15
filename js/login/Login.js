'use strict';

import React, {
  View,
  StyleSheet,
  TextInput,
  Image,
  InteractionManager,
  Platform,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

import Forget from './Forget';
import Back from '../component/Back';
import Register from './Register';

import {WINDOW_WIDTH} from '../common/constant';

import Storage from '../common/Storage';

import {ACCOUNT_SAVE_KEY} from '../common/constant';


export default class Login extends React.Component {

   //定义首页图片获取的state
  constructor(props){

        super(props);

        this.state = {

        };
  }

  _onForgetClick(title:string){
    let navigator = this.props.navigator;
      navigator.push({
          name: title,
          component: Forget,
          params: {
               title:title,
           }
      })
  }


  _onClick() {
    this.props.navigator.pop();
  }

  _onLogin(){
    this.props.navigator.pop();
  }

  _onRegister(title:string){
    let navigator = this.props.navigator;
      navigator.push({
          name: title,
          component: Register,
          params: {
               title:title,
           }
      })
  }

  render() {

    return (
      <View style={{flex:1}}>

            <View style={styles.container1}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onClick()}>
                    <View >
                      <Image source={require('../image/ic_arrow_back_black_@2x.png')} style={styles.icon3}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>
                      {this.props.title}
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onRegister('注册')}>
                  <Text style={[styles.text,{fontSize:12,marginRight:10,color:'#6A6666'}]}>
                        注册
                  </Text>
                </TouchableOpacity>
            </View>

          <ScrollView style={{backgroundColor:'#F1F2F6'}}>

            <View style={styles.separate}/>

            <View style={styles.container}>
                <Image source={require('./img/user_name_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='邮箱／手机／用户名'
                        style={styles.inputText}/>
                </View>
            </View>
            <View style={styles.container}>
                <Image source={require('./img/password_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='请输入密码'
                        style={styles.inputText}/>
                </View>
            </View>

            <View style={styles.container2}>
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
                <Image source={require('./img/check_@2x.png')} style={styles.icon1}/>
                <Text style={{fontSize:10,color:'#666666'}}> 记住账号 </Text>
              </View>

              <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onForgetClick('找回密码  ')}>
                  <Text style={{color:'#0067C4',fontSize:10,marginRight:10,}}> 忘记密码？</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onLogin()}>
                <Text style={styles.okText}>确定</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
              paddingTop:10,paddingBottom:10,marginTop:10}}>
                <View style={styles.separate1}/>
                <Text style={{fontSize:10,color:'#666666'}}>其他方式登录</Text>
                <View style={styles.separate1}/>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',
                padding:10}}>

              <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onLogin()}>
                  <Image style={{marginLeft:10,}} source={require('./img/qq_@2x.png')}/>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onLogin()}>
                <Image source={require('./img/weixin_@2x.png')}/>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onLogin()}>
                <Image style={{marginRight:10,}} source={require('./img/weibo_@2x.png')}/>
              </TouchableOpacity>

            </View>

          </ScrollView>
      </View>
    );
  }
}
let styles = StyleSheet.create({

  container:{
    flexDirection: 'row',
    backgroundColor:'white',
    padding:10,
    alignItems:'center',
    flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
  },

  inputBox: {
      height: 22,
      flexDirection: 'row',
      flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
      backgroundColor: 'white',
      alignItems:'center',
      marginLeft:10,
      marginRight:10,
  },

  separate:{
    height:15,
    backgroundColor:'#F1F2F6',
  },

  separate1:{
    height:0.5,
    width:WINDOW_WIDTH/3,
    backgroundColor:'#DFE0E3',
  },

  inputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 10
  },

  okText: {
      flex: 1,
      height:35,
      marginLeft:40,
      marginRight:40,
      borderRadius:5,
      textAlign:'center',
      paddingTop:12,
      alignItems:'center',
      color:'white',
      marginTop:15,
      flexDirection:'row',
      backgroundColor: '#FF303D',
      fontSize: 10,
  },
  codeText: {
      color:'#A79BCD',
      marginRight:25,
      marginLeft:15,
      fontSize: 10
  },

  icon:{
    width:20,
    height:20,
    marginLeft:40,
    marginRight:5,
  },

  icon1:{
    width:10,
    height:10,
    marginRight:3,
  },

  container1: {
      flexDirection: 'row',   // 水平排布
      paddingLeft: 5,
      paddingRight: 5,
      justifyContent:'space-between',
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 60 : 60,   // 处理iOS状态栏
      backgroundColor: 'white',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },

  container2: {
      flexDirection: 'row',   // 水平排布
      justifyContent:'space-between',
      paddingLeft:40,
      paddingTop:10,
      paddingBottom:10,
      paddingRight:40,
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },

  icon3:{
     marginLeft:5,
      width:28,
      height:28,
  },
  text:{
    fontSize:15,
  },

});
