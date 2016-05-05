"use strict";
const React = require('react');
const sequencer_1 = require('./sequencer');
const row_1 = require('./row');
const clock_1 = require('./clock');
const controls_1 = require('./controls');
let sequencer = new sequencer_1.default([false], [false], [false]);
let clock = new clock_1.default;
let temp, running;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tick: clock.tick,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: clock.tempo,
            running: clock.running,
        };
    }
    componentDidMount() {
        sequencer.updateSequenceCount(4);
        clock.evtChanged.attach((event) => {
            console.log(event);
        });
    }
    updateState() {
        this.setState({ tick: clock.tick,
            kick: this.state.kick,
            snare: this.state.snare,
            hat: this.state.hat,
            tempo: clock.tempo,
            running: clock.running
        });
    }
    updateSequenceCount(newNumber) {
        sequencer.updateSequenceCount(newNumber);
        this.setState({ tick: this.state.tick,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: this.state.tempo,
            running: this.state.running
        });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(controls_1.default, {clock: clock}), 
            React.createElement("h2", null, "Set Sequencer To:"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(4)}, "4"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(8)}, "8"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(16)}, "16"), 
            React.createElement("h1", null, 
                "click: ", 
                this.state.tick), 
            React.createElement("div", {className: "pad-row"}, 
                React.createElement("h2", null, "kick:"), 
                React.createElement(row_1.default, {pads: this.state.kick})), 
            React.createElement("div", {className: "pad-row"}, 
                React.createElement("h2", null, "snare:"), 
                React.createElement(row_1.default, {pads: this.state.snare})), 
            React.createElement("div", {className: "pad-row"}, 
                React.createElement("h2", null, "hat:"), 
                React.createElement(row_1.default, {pads: this.state.hat}))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
