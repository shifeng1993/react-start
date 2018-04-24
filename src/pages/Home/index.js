import React, {Component} from 'react';
class Home extends Component {
  state = {}
  render() {
    return (
      <div className='home-page'>
        <button onClick={this.goAbout}>点击去about</button>
        <button onClick={this.goAbout}>点击返回上一页</button>
      </div>
    );
  }
  goAbout = () => {
    this.props.history.goBack();
  }
}

export default Home;