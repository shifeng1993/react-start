import * as types from '../../constants/ActionTypes';
import axios from 'axios';

function fetchGoods() {
  return axios.get('http://localhost:3333/api/goods');
}

export function getGoods() {
  return function (dispatch) {
    return fetchGoods().then((res) => {
      if (res.status === 200) {
        dispatch(setGoods(res.data));
      } else {
        console.log('获取数据失败，请刷新页面')
      }
    });
  };
}

export function setGoods(data) {
  return {type: types.SET_GOOD, data};
}
