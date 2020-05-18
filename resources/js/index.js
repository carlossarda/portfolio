import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import NavBar from './components/NavBar';
import Container from "./components/Container";

export default class Index extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Container/>
            </div>
        );
    }
}

if (document.getElementById('app_react')) {
    ReactDOM.render(<Index/>, document.getElementById('app_react'));
}
