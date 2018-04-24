import {SET_GOODS, SET_GOOD} from '../../constants/ActionTypes';
import axios from 'axios';

class IndexActions {
  // 读取商品数组
  fetchGoods = () => {
    return axios.get('http://localhost:3333/api/goods');
  }
  getGoods = () => {
    return async (dispatch, getState) => {
      try {
        const {data, status} = await this.fetchGoods();
        if (status === 200) {
          dispatch(this.setGoods(data));
        } else {
          console.error('获取数据失败，请刷新页面')
        }
      } catch (e) {
        console.error(e);
      }
    };
  }
  // 设置商品数组
  setGoods = (data) => {
    return {type: SET_GOODS, data};
  }
  // 查询单个产品
  getGood = (goodid) => {
    return (dispatch, getState) => {
      const goods = getState().index.goods;
      let arr = [];
      for (let i = 0; i < goods.length; i++) {
        arr.push(goods[i].id);
      }
      let index = arr.indexOf(parseInt(goodid, 10));
      if (index !== -1) {
        dispatch(this.setGood(goods[index]));
      }
    };
  }
  // 设置单个商品到全局state
  setGood = (data) => {
    return {type: SET_GOOD, data};
  }
}

export default new IndexActions();