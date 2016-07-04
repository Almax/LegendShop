
'use strict';

import React,{
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import Constant from '../common/Constant'

let defaultTab=Constant.strings.judgeTabString;

export default class ProductDetail3 extends React.Component{

  constructor(props) {
     super(props);
     this.state={
       tabIndex:0,
     };
  }
  _renderTab(){
      let tab = defaultTab.map((item,i)=>{
            return (
              <TouchableOpacity key={i} activeOpacity={0.7} onPress = {()=> this.setState(
                {tabIndex: i})}>
                <View style={{alignItems:'center',marginRight:15}}>
                    <Text style={[styles.defaultText,this.state.tabIndex==i?styles.selectText:null]}>{item}</Text>
                </View>
              </TouchableOpacity>
             )
          });
      return (
            <View style={styles.tabContainer}>
              {tab}
            </View>
      );
    }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#F1F2F6'}}>
            {this._renderTab()}
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
              <View style={styles.contentContainer}>
                  <Image source={require('./img/not_result_@2x.png')}/>
                  <Text style={{fontSize:18,marginTop:15}}>该商品未收到任何评价</Text>
                  <Text style={{fontSize:13,marginTop:15}}>期待您的购买与评论！</Text>
              </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
        tabContainer:{
          flexDirection:'row',
          backgroundColor:Constant.colors.lightGreyColor1,
          padding:10,
        },
        contentContainer:{
          flex:1,
          alignItems:'center',
          backgroundColor:Constant.colors.lightGreyColor,
        },
        selectText:{
            color:'white',
            borderRadius:4,
            padding:6,
            backgroundColor:'rgb(237, 89, 104)',
            fontSize:15,
        },
        defaultText: {
            fontSize: 15,
            padding:6,
            borderRadius:4,
            backgroundColor:'rgb(206, 206, 211)',
            color:'black',
        },
});