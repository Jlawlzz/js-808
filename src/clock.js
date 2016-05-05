"use strict";
const ts_events_1 = require('ts-events');
let temp;
class Clock {
    constructor() {
        this.tick = 0;
        this.tempo = 300;
        this.running = false;
        this.evtChanged = new ts_events_1.SyncEvent();
    }
    setMetro(time) {
        this.tempo = time;
        this.evtChanged.post('tempo');
    }
    startMetro() {
        this.running = true;
        temp = setInterval(() => this.triggerTick(), this.tempo);
        this.evtChanged.post('start-metro');
    }
    stopMetro() {
        this.running = false;
        temp.clearInterval();
        this.evtChanged.post('stahp-metro');
    }
    triggerTick() {
        this.tick += 1;
        this.evtChanged.post('tick');
    }
    resetTick() {
        this.tick = 0;
        this.evtChanged.post('tick');
    }
    upTempo() {
        this.tempo += 100;
        this.evtChanged.post('tempo');
    }
    downTempo() {
        this.tempo -= 100;
        this.evtChanged.post('tempo');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Clock;
