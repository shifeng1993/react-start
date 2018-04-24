import React, {Component} from 'react';
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  toggle = () => {
    this.setState((prevState, props) => ({
      isShow: !this.state.isShow
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle交替显示 about 和 helloworld</button>
        {this.state.isShow
          ? (
            <div>
              <h1>helloworld</h1>
            </div>
          )
          : (
            <div>
              <h1>about</h1>
            </div>
          )}
      </div>
    );
  }
}

export default About;