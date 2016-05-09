/// <reference path="./typings/tsd.d.ts" />

declare function require(string): string;

import EventEmitter = require('eventemitter3');

let ClockEmitter = new EventEmitter()

export default ClockEmitter;
