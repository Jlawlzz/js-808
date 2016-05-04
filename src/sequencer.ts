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
}

export default Sequencer;
