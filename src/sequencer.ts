interface SequencerEls {
    kick: boolean[];
    snare: boolean[];
    hat: boolean[];
}

class Sequencer {

    constructor(public kick, public snare, public hat) {
    }

    updateSequenceCount(newNumber: number){
      let newSteps = []
      for( let i = 0; i < newNumber; i++){
        newSteps.push(false);
      }

      this.kick = newSteps
      this.snare = newSteps
      this.hat = newSteps
    }

    updateActivePad(tick: number){

      let index = tick % this.kick.length

      this.resetPads()

      this.kick[index] = true;
      this.snare[index] = true;
      this.hat[index] = true;
    }

    resetPads(){
      [this.kick, this.snare, this.hat].forEach(function(pads){
        for( let i = 0; i <= pads.length; i++){
          if (pads[i] === true){pads[i] = false}
        }
      });
    }
}

export default Sequencer;
