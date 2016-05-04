"use strict";
const React = require('react');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    onButtonClick() {
        let temp = setInterval(() => this.emitInterval(), 1000);
    }
    emitInterval() {
        console.log('click');
        this.incrementCounter();
    }
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement("button", {onClick: () => this.onButtonClick()}, "start timer"), 
            React.createElement("h1", null, 
                "click: ", 
                this.state.counter)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
