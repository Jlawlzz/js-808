///<reference path="../typings/node/node.d.ts" />

import {SyncEvent} from 'ts-events';

interface Clock {
  tempo: number;
  tick: number;
  running: boolean;
  evtChanged: SyncEvent<any>
}

let temp;

class Clock {

  constructor() {
    this.tick = 0;
    this.tempo = 300;
    this.running = false;
    this.evtChanged = new SyncEvent<any>();
  }


  setMetro(time: number) {
  	this.tempo = time;
    this.evtChanged.post('tempo');
  }

  startMetro() {
    this.running = true
  	temp = setInterval(() => this.triggerTick(), this.tempo)
    this.evtChanged.post('start-metro');
  }

  stopMetro() {
    this.running = false
    temp.clearInterval()
    this.evtChanged.post('stahp-metro');
  }

  triggerTick() {
    this.tick += 1
    this.evtChanged.post('tick');
  }

  resetTick() {
    this.tick = 0
    this.evtChanged.post('tick');
  }

  upTempo() {
    this.tempo += 100
    this.evtChanged.post('tempo');
  }

  downTempo() {
    this.tempo -= 100
    this.evtChanged.post('tempo');
  }

}

export default Clock;
