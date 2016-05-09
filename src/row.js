"use strict";
const React = require('react');
class Row extends React.Component {
    toggleSelect(pad) {
        pad.toggleSelected();
    }
    padSequence() {
        return this.props.pads.map(function (pad) {
            return pad.active ? getPadOn(pad) : getPadOff(pad);
        });
    }
    render() {
        let padModules = this.padSequence();
        return (React.createElement("div", null, React.createElement("h1", null, padModules)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Row;
function getPadOn(pad) {
    let selectStatus = pad.selected ? 'selected' : 'un-selected';
    return React.createElement("div", {className: "pad on " + pad.selected, classID: pad.type + ' ' + pad.identifier}, React.createElement("h3", null, pad.type, "+"), React.createElement("button", {onClick: () => pad.toggleSelected()}, "toggle"));
}
function getPadOff(pad) {
    let selectStatus = pad.selected ? 'selected' : 'un-selected';
    return React.createElement("div", {className: "pad off " + pad.selected, classID: pad.type + ' ' + pad.identifier}, React.createElement("h3", null, pad.type, "+"), React.createElement("button", {onClick: () => pad.toggleSelected()}, "toggle"));
}
