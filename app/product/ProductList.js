'use strict';

import React,{
  StyleSheet,
  View,
} from 'react-native';

import Back from '../component/Back';
import ProductListCell from './ProductListCell';

export default class ProductList extends React.Component{

 constructor(props) {
    super(props);
    this.state={

    };

  }
  //初始化渲染之后立即调用，这里可以进行网络请求等逻辑
  componentDidMount() {

  }
  _onClick() {
    this.props.navigator.pop();
  }

  render(){

    return (
      <View style={{flex: 1}}>
          <Back title={this.props.title} onClick={()=>this._onClick()}/>
          <ProductListCell/>
      </View>
    );
  }
}

let styles = StyleSheet.create({

});
