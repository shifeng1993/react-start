import React, {Component} from 'react'
import './style.css'

const keyarr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '确定',
    '取消'
];

class Keyboard extends Component {
    numClick(e) {
        let index = e.target.getAttribute("data-index")
        console.log(index)
    }
    render() {
        const keys = keyarr.map((key) => {
            return (
                <div
                    key={keyarr.indexOf(key)}
                    className="keyboard-item"
                    data-index={key}
                    onClick={this
                    .numClick
                    .bind(this)}>{key}</div>
            );
        });
        return (
            <div className="keyboard-wrap">
                {keys}
            </div>
        );
    }
}

export default Keyboard
