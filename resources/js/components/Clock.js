import React, {Component} from 'react';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(),class: props.class};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <p className={this.state.class}>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}