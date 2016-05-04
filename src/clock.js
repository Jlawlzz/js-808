"use strict";
function setMetro(time, emitInterval) {
    let clock = { tempo: time, triggerTick: emitInterval };
    startMetro(clock);
}
function startMetro(clock) {
    console.log(clock.tempo);
    let temp = setInterval(() => clock.triggerTick(), clock.tempo);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setMetro;
