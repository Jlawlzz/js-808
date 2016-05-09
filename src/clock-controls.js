"use strict";
const React = require('react');
class ClockControls extends React.Component {
    toggleClock(action) {
        if (action === 'start') {
            this.props.clock.startMetro();
        }
        else if (action === 'stop') {
            this.props.clock.stopMetro();
        }
        this.props.updateState();
    }
    adjustTempo(action) {
        if (action === 'up') {
            this.props.clock.upTempo();
        }
        else if (action === 'down') {
            this.props.clock.downTempo();
        }
        this.props.updateState();
    }
    render() {
        return (React.createElement("div", null, this.props.clock.running ? React.createElement("button", {onClick: () => this.toggleClock('stop')}, "stop")
            : React.createElement("button", {onClick: () => this.toggleClock('start')}, "start"), React.createElement("h1", null, "Tempo: ", this.props.clock.tempo), React.createElement("button", {onClick: () => this.props.clock.upTempo()}, "speed"), React.createElement("br", null), React.createElement("button", {onClick: () => this.props.clock.downTempo()}, "slow"), React.createElement("br", null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClockControls;
