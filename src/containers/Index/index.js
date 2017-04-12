import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './style.css'

// 引入action
import * as indexAction from '../../stores/actions/index/index.js';

// 引入组件
import Goods from '../../components/Goods/index.js';
import Keyboard from '../../components/Keyboard/index.js';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        // 通过cwm周期发起dispatch，dispatch中包含ajax请求。
        const {actions} = this.props;
        actions.getGoods();
    }
    render() {
        return (
            <div className="index-page">
                <Goods goods={this.props.goods}/>
                <Keyboard/>
            </div>
        )
    }
}

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
    return {goods: state.index.goods};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(indexAction, dispatch),
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
