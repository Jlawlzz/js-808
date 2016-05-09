"use strict";
const React = require('react');
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.interval = window.setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({
            counter: this.state.counter + this.props.increment
        });
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (React.createElement("h1", {style: { color: this.props.color }}, "Counter (", this.props.increment, "): ", this.state.counter));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Counter;
