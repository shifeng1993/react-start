import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './style.css'

// 引入action
import indexAction from '../../stores/actions/index/index.js';

// 引入组件
import Goods from '../../components/Goods/index.js';
import Keyboard from '../../components/Keyboard/index.js';
import Screen from '../../components/Screen/index.js';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        const {actions} = this.props;
        actions.getGoods()
    }

    // 接受键盘来的商品id
    activeGood(goodid) {
        // 发送按照商品id查询单个货物请求
        const {actions} = this.props;
        actions.getGood(goodid);
    }
    render() {
        return (
            <div className="index-page">
                <Goods goods={this.props.goods}/>
                <Keyboard activeGood={goodid => this.activeGood(goodid)}/>
                <Screen good={this.props.good}/>
            </div>
        )
    }
}

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
    return {goods: state.index.goods, good: state.index.good};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(indexAction, dispatch),
    dispatch: dispatch
});

// withRouter获取当前路由信息
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
