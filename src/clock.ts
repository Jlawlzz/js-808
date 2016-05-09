
import ClockEmitter from './clock-emitter'

interface Clock {
  tempo: number;
  tick: number;
  running: boolean;
}

let temp;

class Clock {

  constructor() {
    this.tick = 0;
    this.tempo = 300;
    this.running = false;
  }


  setMetro(time: number) {
  	this.tempo = time;
    ClockEmitter.emit('change');
  }

  startMetro() {
    this.running = true
  	temp = setInterval(this.triggerTick(), this.tempo)
    ClockEmitter.emit('change');
  }

  stopMetro() {
    this.running = false
    temp.clearInterval()
    ClockEmitter.emit('change');
  }

  triggerTick() {
    this.tick += 1
    ClockEmitter.emit('change');
  }

  resetTick() {
    this.tick = 0
    ClockEmitter.emit('change');
  }

  upTempo() {
    this.tempo += 100
    ClockEmitter.emit('change');
  }

  downTempo() {
    this.tempo -= 100
    ClockEmitter.emit('change');
  }

}

export default Clock;
