
'use strict';

import React,{
  Image,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  InteractionManager,
  ActivityIndicatorIOS,
  TouchableOpacity,
  View,
} from 'react-native';

import ProductDetail1 from './ProductDetail1';
import ProductDetail2 from './ProductDetail2';
import ProductDetail3 from './ProductDetail3';

import OrderCommit from '../order/OrderCommit';

import Constant from '../common/Constant';

let defaultTab=Constant.strings.detailTabString;

export default class ProductDetail extends React.Component{

  constructor(props) {
     super(props);
     this.state={
       pageIndex:0,
     };
  }
  _fetchData(){


  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this._fetchData();
    });
  }
  _onClick() {
      this.props.navigator.pop();
  }
  _onPayClick(){
    let navigator = this.props.navigator;
      navigator.push({
              name: '订单填写',
                component: OrderCommit,
              params: {
                   title:'订单填写',
               }
      })
  }
  _onCartClick(){

  }
  _onFollowClick(){

  }

  _renderTab(){
    let tab = defaultTab.map((item,i)=>{
          return (
            <TouchableOpacity key={i} activeOpacity={0.7} onPress = {()=> this.setState(
              {pageIndex: i})}>
              <View style={{alignItems:'center',marginRight:15}}>
                  <Text style={[styles.defaultText,this.state.pageIndex==i?styles.selectText:null]}>{item}</Text>
                  <View style={[styles.defaultLine,this.state.pageIndex==i?styles.selectLine:null]}/>
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
    let page;
    switch (this.state.pageIndex) {
      case 0:
          page = < ProductDetail1 prodId={this.props.prodId}/>
              break;
      case 1:
          page = < ProductDetail2 prodId={this.props.prodId}/>
              break;
      case 2:
          page = < ProductDetail3 />
              break;

            };
    let content = <View style={{flex:1}}>
                    {page}
                    <View style={styles.bottom}>
                      <TouchableOpacity onPress={()=>this._onFollowClick('关注')} activeOpacity={0.7}>
                        <View style={styles.bottomContainer1}>
                            <Image source={require('./img/icon_collection.png')} style={styles.icon}/>
                            <Text style={[styles.text1,{color:'white',marginLeft:5}]}>关注</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.bottomContainer1}>
                        <TouchableOpacity onPress={()=>this._onCartClick('加入购物车')} activeOpacity={0.7}>
                            <View style={[styles.bottomContainer2,{backgroundColor:'#F47022'}]}>
                                <Text style={[styles.bottomText]}>加入购物车</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._onPayClick('购买')} activeOpacity={0.7}>
                            <View style={[styles.bottomContainer2,{backgroundColor:'#FF4854',marginLeft:15}]}>
                                <Text style={[styles.bottomText]}>立即购买</Text>
                            </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>;

    return (
        <View style={{flex: 1,backgroundColor:'#F1F2F6'}}>
            <View >
              <View style={styles.container}>
                  <TouchableOpacity activeOpacity={0.7} onPress={()=>this._onClick()}>
                      <Image source={require('../image/ic_arrow_back_black_@2x.png')}/>
                  </TouchableOpacity>
                  {this._renderTab()}
              </View>
              <View style={styles.separate}/>
            </View>
            {content}
        </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
          flexDirection: 'row', // 水平排布
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: Platform.OS === 'ios' ? 20 : 20,  // 处理iOS状态栏
          height: Platform.OS === 'ios' ? 60 : 60,   // 处理iOS状态栏
          backgroundColor: 'white',
          alignItems: 'center' // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
      },
      separate: {
          height: 1,
          backgroundColor: '#A7A7AA',
      },
      bottom: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 50,
          backgroundColor: '#808080',
      },
      bottomContainer1: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
      },
      bottomContainer2: {
          alignItems:'center',
          width:100,
          paddingBottom:10,
          paddingTop: 10,
          borderRadius:3,
          borderColor:'#F0F0F0',
      },
      bottomText: {
          color: 'white',
          fontSize: 12,
      },
      tabContainer: {
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          marginTop: 8,
          backgroundColor: 'white'
      },
      icon: {
          width: 15,
          height: 13,
      },
      selectText: {
          color: Constant.colors.redColor,
          fontSize: 15,
      },
      defaultText: {
          fontSize: 15,
          color: 'black',
      },
      selectLine: {
          backgroundColor: Constant.colors.redColor,
          height: 3,
          marginTop: 10,
          width: 60,
      },
      defaultLine: {
          backgroundColor: 'transparent',
          height: 3,
          marginTop: 10,
          width: 60,
      },
});
