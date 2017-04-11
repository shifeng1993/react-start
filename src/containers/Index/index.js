import React, {Component} from 'react';
import NavBar from '../../components/NavBar'
class Index extends Component {
    render() {
        return (
            <div id="container">
                <NavBar/>
                {this.props.children}
            </div>
        );
    }
}

export default Index;
