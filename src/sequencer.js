"use strict";
class Sequencer {
    constructor(kick, snare, hat) {
        this.kick = kick;
        this.snare = snare;
        this.hat = hat;
    }
    updateSequenceCount(newNumber) {
        let newSteps = [];
        for (let i = 0; i < newNumber; i++) {
            newSteps.push(false);
        }
        this.kick = newSteps;
        this.snare = newSteps;
        this.hat = newSteps;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sequencer;
