import {SET_GOODS, SET_GOOD} from '../../constants/ActionTypes';

let indexState = {
  // 商品数组
  goods: [],
  // 单个商品
  good: {}
};

const index = (state = indexState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {
        ...state,
        goods: action.data
      };
    case SET_GOOD:
      return {
        ...state,
        good: action.data
      };
    default:
      return state;
  }
}

export default index;