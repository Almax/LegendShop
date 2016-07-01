
'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const NEW_BANNER_IMGS = [
  require('../image/new_banner01_@2x.jpg'),
  require('../image/new_banner02_@2x.jpg'),
  require('../image/new_banner03_@2x.jpg'),
];
 export default class BusinessActive extends React.Component {

   _onItemClick(title:string){
       if (this.props.onItemClick) {
           this.props.onItemClick(title);
       }
   }
   _onMoreClick(title:string){
     if (this.props.onMoreClick) {
         this.props.onMoreClick(title);
     }
   }
  render() {
    return(
          <View style={styles.parent}>
              <View style={styles.container}>
                <Text style={styles.title1}>
                  商家上新
                </Text>
                <TouchableOpacity onPress={()=>this._onMoreClick('最新商品')} activeOpacity={0.7}>
                  <Text style={styles.title2}>
                    更多>>
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.separate,{marginTop:3}]}/>
              <View style={styles.container2}>
                <View style={styles.container1}>
                  <TouchableOpacity onPress={()=>this._onItemClick('商品详情')} activeOpacity={0.7}>
                    <Image source={NEW_BANNER_IMGS[0]} style={styles.image1}/>
                  </TouchableOpacity>
                  <View style={styles.separate}/>
                  <TouchableOpacity onPress={()=>this._onItemClick('商品详情')} activeOpacity={0.7}>
                    <Image source={NEW_BANNER_IMGS[1]} style={styles.image1}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.separate1}/>
                <TouchableOpacity onPress={()=>this._onItemClick('商品详情')} activeOpacity={0.7}>
                  <Image source={NEW_BANNER_IMGS[2]} style={styles.image2}/>
                </TouchableOpacity>
              </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
    parent:{
      flex:1,
      padding:5,
      marginTop:8,
      backgroundColor:'white',
    },
    container: {
      flex:1,
      padding:5,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    container1:{
      flex:1,
    },
    container2:{
      flex:1,
      flexDirection:'row',
      padding:3
    },
    separate:{
      height:0.5,
      backgroundColor:'#F0F0F0',
    },
    separate1:{
      width:1,
      height:180,
      backgroundColor:'#F0F0F0',
    },
    image1:{
      width:180,
      height:90,
    },
    image2:{
      width:180,
      height:180,
    },
    title1:{
      color:'#323232',
      fontSize:12
    },
    title2:{
      color:'#1A92E0',
      fontSize:10
    }
});
