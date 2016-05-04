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
    updateActivePad(tick) {
        let index = tick % this.kick.length;
        this.resetPads();
        this.kick[index] = true;
        this.snare[index] = true;
        this.hat[index] = true;
    }
    resetPads() {
        [this.kick, this.snare, this.hat].forEach(function (pads) {
            for (let i = 0; i <= pads.length; i++) {
                if (pads[i] === true) {
                    pads[i] = false;
                }
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sequencer;
