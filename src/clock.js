"use strict";
const clock_emitter_1 = require('./clock-emitter');
let temp;
class Clock {
    constructor() {
        this.tick = 0;
        this.tempo = 300;
        this.running = false;
    }
    setMetro(time) {
        this.tempo = time;
        clock_emitter_1.default.emit('change');
    }
    startMetro() {
        this.running = true;
        temp = setInterval(this.triggerTick(), this.tempo);
        clock_emitter_1.default.emit('change');
    }
    stopMetro() {
        this.running = false;
        temp.clearInterval();
        clock_emitter_1.default.emit('change');
    }
    triggerTick() {
        this.tick += 1;
        clock_emitter_1.default.emit('change');
    }
    resetTick() {
        this.tick = 0;
        clock_emitter_1.default.emit('change');
    }
    upTempo() {
        this.tempo += 100;
        clock_emitter_1.default.emit('change');
    }
    downTempo() {
        this.tempo -= 100;
        clock_emitter_1.default.emit('change');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Clock;
