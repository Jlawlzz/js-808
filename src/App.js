"use strict";
const React = require('react');
const sequencer_1 = require('./sequencer');
const row_1 = require('./row');
let sequencer = new sequencer_1.default([false], [false], [false]);
let temp, running;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: 500,
            running: false,
        };
        console.log(this.state.kick);
    }
    componentDidMount() {
        this.updateSequenceCount(4);
    }
    startSequencer() {
        temp = setInterval(() => this.emitInterval(), this.state.tempo);
        this.state.running = true;
        this.updateState();
    }
    stopSequencer() {
        clearInterval(temp);
        this.state.running = false;
        this.updateState();
    }
    primeTempoAdjust(event, that) {
        console.log(event.target);
        that.setState({ counter: that.state.counter,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: event.target.value,
            running: that.state.running });
    }
    emitInterval() {
        console.log('click');
        this.incrementCounter();
    }
    incrementCounter() {
        this.state.counter = this.state.counter + 1;
        sequencer.updateActivePad(this.state.counter);
        this.setState({ counter: this.state.counter,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: this.state.tempo,
            running: this.state.running
        });
    }
    updateState() {
        this.setState({ counter: this.state.counter,
            kick: this.state.kick,
            snare: this.state.snare,
            hat: this.state.hat,
            tempo: this.state.tempo,
            running: this.state.running
        });
    }
    upTempo() {
        this.state.tempo += 100;
        this.updateState();
    }
    downTempo() {
        this.state.tempo -= 100;
        this.updateState();
    }
    updateSequenceCount(newNumber) {
        sequencer.updateSequenceCount(newNumber);
        console.log(sequencer);
        this.setState({ counter: this.state.counter,
            kick: sequencer.kick,
            snare: sequencer.snare,
            hat: sequencer.hat,
            tempo: this.state.tempo,
            running: this.state.running
        });
    }
    render() {
        return (React.createElement("div", null, 
            this.state.running ? React.createElement("button", {onClick: () => this.stopSequencer()}, "stop")
                : React.createElement("button", {onClick: () => this.startSequencer()}, "start"), 
            React.createElement("h1", null, 
                "Tempo: ", 
                this.state.tempo), 
            React.createElement("button", {onClick: () => this.upTempo()}, "speed"), 
            React.createElement("br", null), 
            React.createElement("button", {onClick: () => this.downTempo()}, "slow"), 
            React.createElement("br", null), 
            React.createElement("h2", null, "Set Sequencer To:"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(4)}, "4"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(8)}, "8"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(16)}, "16"), 
            React.createElement("h1", null, 
                "click: ", 
                this.state.counter), 
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
