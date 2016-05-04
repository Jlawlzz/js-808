import * as React from 'react';
import Counter from './Counter';
import clock from './clock';
import Sequencer from './sequencer';

let sequencer = new Sequencer([false], [false], [false]);

interface IAppProps {
  dispatch?: (func: any) => void;
}

interface IAppState {
	counter: number;
  kick: boolean[];
  snare: boolean[];
  hat: boolean[];
}

let initSteps = initSequencerSteps(8);


function initSequencerSteps(steps) {
  let stepsInit = []

  for (let i = 0; i <= steps; i++){
    stepsInit.push(false);
  }

  return stepsInit
}

export default class App extends React.Component<IAppProps, IAppState> {

	constructor(props) {
		super(props);

		this.state = { counter: 0,
                   kick: this.kickSequence(sequencer.kick),
                   snare: this.snareSequence(sequencer.snare),
                   hat: this.hatSequence(sequencer.hat)};

    console.log(this.state.kick)
	}

	onButtonClick(){
		let temp = setInterval(() => this.emitInterval(), 1000);
	}

	emitInterval() {
		console.log('click')
		this.incrementCounter()
	}

	incrementCounter(){
		this.state.counter = this.state.counter + 1
	}

  updateSequenceCount(newNumber){
    sequencer.updateSequenceCount(newNumber);
    console.log(sequencer)

    this.setState({counter: this.state.counter, kick: this.kickSequence(sequencer.kick), snare: this.snareSequence(sequencer.snare), hat: this.hatSequence(sequencer.hat)})
  }

  kickSequence(kicks){
    return kicks.map(function(kick){
       return kick ? <div className="pad on"><h3>k +</h3></div> : <div className="pad off"><h3>k -</h3></div>;
    });
  }

  snareSequence(snares){
    return snares.map(function(snare){
       return snare ? <div className="pad on"><h3>s +</h3></div> : <div className="pad off"><h3>s -</h3></div>;
    });
  }

  hatSequence(hats){
    return hats.map(function(hat){
       return hat ? <div className="pad on"><h3>h +</h3></div> : <div className="pad off"><h3>h -</h3></div>;
    });
  }

	public render() {

		return (
			<div>
				<button onClick={() => this.onButtonClick()}>start timer</button>
        <br></br>
        <h2>Set Sequencer To:</h2>
				<button onClick={() => this.updateSequenceCount(4)}>4</button>
				<button onClick={() => this.updateSequenceCount(8)}>8</button>
				<button onClick={() => this.updateSequenceCount(16)}>16</button>

				<h1>click: {this.state.counter}</h1>
				<h1>{this.state.kick}</h1>
				<h1>{this.state.snare}</h1>
				<h1>{this.state.hat}</h1>
			</div>
		);
	}
}
