"use strict";
const React = require('react');
const sequencer_1 = require('./sequencer');
let sequencer = new sequencer_1.default([false], [false], [false]);
let initSteps = initSequencerSteps(8);
function initSequencerSteps(steps) {
    let stepsInit = [];
    for (let i = 0; i <= steps; i++) {
        stepsInit.push(false);
    }
    return stepsInit;
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0,
            kick: this.kickSequence(sequencer.kick),
            snare: this.snareSequence(sequencer.snare),
            hat: this.hatSequence(sequencer.hat) };
        console.log(this.state.kick);
    }
    onButtonClick() {
        let temp = setInterval(() => this.emitInterval(), 1000);
    }
    emitInterval() {
        console.log('click');
        this.incrementCounter();
    }
    incrementCounter() {
        this.state.counter = this.state.counter + 1;
    }
    updateSequenceCount(newNumber) {
        sequencer.updateSequenceCount(newNumber);
        console.log(sequencer);
        this.setState({ counter: this.state.counter, kick: this.kickSequence(sequencer.kick), snare: this.snareSequence(sequencer.snare), hat: this.hatSequence(sequencer.hat) });
    }
    kickSequence(kicks) {
        return kicks.map(function (kick) {
            return kick ? React.createElement("div", {className: "pad on"}, 
                React.createElement("h3", null, "k +")
            ) : React.createElement("div", {className: "pad off"}, 
                React.createElement("h3", null, "k -")
            );
        });
    }
    snareSequence(snares) {
        return snares.map(function (snare) {
            return snare ? React.createElement("div", {className: "pad on"}, 
                React.createElement("h3", null, "s +")
            ) : React.createElement("div", {className: "pad off"}, 
                React.createElement("h3", null, "s -")
            );
        });
    }
    hatSequence(hats) {
        return hats.map(function (hat) {
            return hat ? React.createElement("div", {className: "pad on"}, 
                React.createElement("h3", null, "h +")
            ) : React.createElement("div", {className: "pad off"}, 
                React.createElement("h3", null, "h -")
            );
        });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement("button", {onClick: () => this.onButtonClick()}, "start timer"), 
            React.createElement("br", null), 
            React.createElement("h2", null, "Set Sequencer To:"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(4)}, "4"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(8)}, "8"), 
            React.createElement("button", {onClick: () => this.updateSequenceCount(16)}, "16"), 
            React.createElement("h1", null, 
                "click: ", 
                this.state.counter), 
            React.createElement("h1", null, this.state.kick), 
            React.createElement("h1", null, this.state.snare), 
            React.createElement("h1", null, this.state.hat)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
