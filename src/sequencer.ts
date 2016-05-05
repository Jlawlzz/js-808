import Pad from './pad'

class Sequencer {

    constructor(public kick, public snare, public hat) {
    }

    updateSequenceCount(newNumber: number){
      let seq = this
      let types = ['kick', 'snare', 'hat']

      for (let a = 0; a <= types.length; a++){

        let stepsInit = []

        for (let i = 0; i < newNumber; i++){
          stepsInit.push(new Pad(types[a], i, false, false));
        }

        if(types[a] === 'kick'){
          seq.kick = stepsInit
        } else if (types[a] === 'snare') {
          seq.snare = stepsInit
        } else {
          seq.hat = stepsInit
        }
      }
    }

    updateActivePad(tick: number){

      let index = tick % this.kick.length

      console.log(index)

      this.resetPads()

      if (this.kick[index].selected){this.kick[index].active = true;}
      if (this.snare[index].selected){this.snare[index].active = true;}
      if (this.hat[index].selected){this.hat[index].active = true;}

    }

    resetPads(){
      [this.kick, this.snare, this.hat].forEach(function(pads){
        for( let i = 0; i < pads.length; i++){
          if (pads[i].active === true){pads[i].active = false}
        }
      });
    }
}

export default Sequencer;
