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


import {WINDOW_WIDTH} from '../common/constant';

import Back from '../component/Back';

export default class Forget extends React.Component {

  constructor(props){
        super(props);
        this.state = {

        };
  }

  _onClick() {
    this.props.navigator.pop();
  }


  render() {
    return (
      <View style={{flex:1}}>

          <Back title={this.props.title} onClick={()=>this._onClick()}/>

          <ScrollView style={{backgroundColor:'#F1F2F6'}}>

            <View style={styles.separate}/>

            <View style={styles.container}>
                <Image source={require('./img/user_name_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='请输入手机号码'
                        style={styles.inputText}/>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.codeText}>获取验证码</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image source={require('./img/password_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='输入手机验证码'
                        style={styles.inputText}/>
                </View>
            </View>

            <View style={styles.container}>
                <Image source={require('./img/img_code_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='输入您的新密码'
                        style={styles.inputText}/>
                </View>
            </View>

            <View style={styles.container}>
                <Image source={require('./img/phone_code_@2x.png')} style={styles.icon}/>
                <View style={styles.inputBox}>
                    <TextInput
                        clearButtonMode='while-editing'
                        placeholder='再次输入您的新密码'
                        style={styles.inputText}/>
                </View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center',margin:20}}>
                <Text style={{color:'#666666',fontSize:10}}>点击注册，表示您同意LegendShop</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={{color:'#0067C4',fontSize:10}}>《服务协议》</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.okText}>确定</Text>
            </TouchableOpacity>

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
      flexDirection:'row',
      backgroundColor: '#FF303D',
      fontSize: 10,
  },
  codeText: {
    height:30,
    width:60,
    borderRadius:5,
    textAlign:'center',
    paddingTop:10,
    alignItems:'center',
    color:'white',
    flexDirection:'row',
    backgroundColor: '#FF303D',
    fontSize: 8,
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
