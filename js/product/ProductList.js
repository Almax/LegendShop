'use strict';

import React,{
  ActivityIndicatorIOS,
  ListView,
  Platform,
  ProgressBarAndroid,
  InteractionManager,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ProductCell from './ProductCell';
import ProductDetail from './ProductDetail';

import Back from '../component/Back';

let resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  loadingStateForQuery: {},
};
let LOADING = {};//这个保证获取数据时停止render避免不必要的渲染

//模拟加载更多的效果，总共两页数据
const DATA1=[{img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
  ];

const DATA2=[{img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
];

export default class ProductList extends React.Component{

 constructor(props) {
    super(props);
    this.state={
      isLoading: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      filter: '',
      queryNumber: 0,
    };
    this._renderFooter=this._renderFooter.bind(this);
    this._onEndReached=this._onEndReached.bind(this);
    this._renderRow=this._renderRow.bind(this);
    this._onClick=this._onClick.bind(this);
  }
  //初始化渲染之后立即调用，这里可以进行网络请求等逻辑
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
     this._searchProduct('suffix');
    });
  }
  _onClick() {
    this.props.navigator.pop();
  }
  /*
    这里有个注意的地方，因为顶部navigator是在js的主线程中渲染的
    所以当前也初始渲染时保证componentDidMount时不做过多空间渲染
  */
  _searchProduct(query: string){
    this.setState({filter: query});
    //如果缓存存在数据则直接进心render并返回
    let cachedResultsForQuery = resultsCache.dataForQuery[query];
    if (cachedResultsForQuery) {
        if (!LOADING[query]) {
            this.setState({
              dataSource: this._getDataSource(cachedResultsForQuery),
              isLoading: false,
            });
        }else {
         this.setState({isLoading: true});
       }
    }else{
    LOADING[query] = true;
    resultsCache.dataForQuery[query] = null;
    this.setState({
      isLoading: true,
      queryNumber: this.state.queryNumber + 1,
    });
    //模拟耗时，加载第一页数据
    setTimeout(() => {
      LOADING[query] = false;
      //这里默认是没有加载完，后期会进行判断第一次读取数据是否已经加载完成，根据实际数据长度是否小于页面数量查询
      resultsCache.loadingStateForQuery[query] = false;
      resultsCache.dataForQuery[query] = DATA1;
      resultsCache.nextPageNumberForQuery[query] = 2;
      this.setState({
            isLoading: false,
            dataSource: this._getDataSource(resultsCache.dataForQuery[query])})
      },1000);
    }
  }

  _onEndReached(){
    //这一步是必要的，如果正在加载，不要加载更多，表现在用户快速下拉而网络较慢的情况
    let query = this.state.filter;
    if (LOADING[query]) {
      return;
    }
    //进入加载
    LOADING[query] = true;
    this.setState({
      queryNumber: this.state.queryNumber + 1,
      isLoading:true,
    });
    //模拟耗时操作，一秒之后加载第二页数据,后面改成InteractionManager
    // setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        let page = resultsCache.nextPageNumberForQuery[query];
        let cacheData = resultsCache.dataForQuery[query].slice();
        LOADING[query] = false;
        //如果最新加载的数据存在，则添加进当前缓存
        if (cacheData.length<50) {
          for (let i in DATA2) {
            cacheData.push(DATA2[i]);
          }
          resultsCache.loadingStateForQuery[query] = false;
        }else{
          resultsCache.loadingStateForQuery[query] = true;
        }
        //充值最新的缓存数据
        resultsCache.dataForQuery[query] = cacheData;
        resultsCache.nextPageNumberForQuery[query] += 1;
        this.setState({
          dataSource: this._getDataSource(resultsCache.dataForQuery[query]),
        });
      });
      // },1000);
  }

  _getDataSource(data: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(data);
  }

  _pressItem(title:string) {
     let navigator = this.props.navigator;
       navigator.push({
           name: title,
           component: ProductDetail,
           params: {
                title:title,
            }
       })
  }

  _renderFooter(){
    return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
  }

  _renderSeparator(
    sectionID: number | string,
    rowID: number | string,
    adjacentRowHighlighted: boolean
  ) {
    let style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  }
  _renderRow(
    product: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <ProductCell
        onSelect={()=>this._pressItem('商品详情')}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        product={product}
      />
    );
  }
  render(){
    console.log('tag','render');
    let content = this.state.dataSource.getRowCount() === 0 ?
      <ActivityIndicatorIOS style={styles.scrollSpinner} />:
      <ListView
        ref="listview"
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
        renderFooter={this._renderFooter}
        renderRow={this._renderRow}
        onEndReached={this._onEndReached}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;
    return (
      <View style={{flex: 1}}>
          <Back title={this.props.title} onClick={this._onClick}/>
          <View style={{flex:1,backgroundColor:'#F1F2F6'}}>
            {content}
          </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 0.5,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});
