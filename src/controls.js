"use strict";
const React = require('react');
class Controls extends React.Component {
    render() {
        return (React.createElement("div", null, 
            this.props.clock.running ? React.createElement("button", {onClick: () => this.props.clock.stopMetro()}, "stop")
                : React.createElement("button", {onClick: () => this.props.clock.startMetro()}, "start"), 
            React.createElement("h1", null, 
                "Tempo: ", 
                this.props.clock.tempo), 
            React.createElement("button", {onClick: () => this.props.clock.upTempo()}, "speed"), 
            React.createElement("br", null), 
            React.createElement("button", {onClick: () => this.props.clock.downTempo()}, "slow"), 
            React.createElement("br", null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Controls;
