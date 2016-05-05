import * as React from 'react';
import Counter from './Counter';
import clock from './clock';
import Sequencer from './sequencer';
import Row from './row'

let sequencer = new Sequencer([false], [false], [false]);

interface IAppProps {
  dispatch?: (func: any) => void;
}

interface IAppState {
	counter: number;
  kick: boolean[];
  snare: boolean[];
  hat: boolean[];
  tempo: any;
  running: boolean
}

let temp, running

export default class App extends React.Component<IAppProps, IAppState> {

	constructor(props) {
		super(props);

		this.state = { counter: 0,
                   kick: sequencer.kick,
                   snare: sequencer.snare,
                   hat: sequencer.hat,
                   tempo: 500,
                   running: false,
                 };

    console.log(this.state.kick)
	}

  componentDidMount(){
    this.updateSequenceCount(4)
  }

	startSequencer(){
		temp = setInterval(() => this.emitInterval(), this.state.tempo);
    this.state.running = true;
    this.updateState();
	}

	stopSequencer(){
		clearInterval(temp);
    this.state.running = false;
    this.updateState();
	}

  primeTempoAdjust(event, that){
    console.log(event.target)
    that.setState({counter: that.state.counter,
                   kick: sequencer.kick,
                   snare: sequencer.snare,
                   hat: sequencer.hat,
                   tempo: event.target.value,
                   running: that.state.running})
  }

	emitInterval() {
		console.log('click')
		this.incrementCounter()
	}

	incrementCounter(){
		this.state.counter = this.state.counter + 1
    sequencer.updateActivePad(this.state.counter)

    this.setState({counter: this.state.counter,
                   kick: sequencer.kick,
                   snare: sequencer.snare,
                   hat: sequencer.hat,
                   tempo: this.state.tempo,
                   running: this.state.running
                  })

	}

  updateState(){
    this.setState({counter: this.state.counter,
                   kick: this.state.kick,
                   snare: this.state.snare,
                   hat: this.state.hat,
                   tempo: this.state.tempo,
                   running: this.state.running
                 })
  }

  upTempo(){
    this.state.tempo += 100
    this.updateState()
  }

  downTempo(){
    this.state.tempo -= 100
    this.updateState()
  }

  updateSequenceCount(newNumber){
    sequencer.updateSequenceCount(newNumber);
    console.log(sequencer)

    this.setState({counter: this.state.counter,
                   kick: sequencer.kick,
                   snare: sequencer.snare,
                   hat: sequencer.hat,
                   tempo: this.state.tempo,
                   running: this.state.running
                 })
  }

	public render() {

		return (
			<div>

        {this.state.running ? <button onClick={() => this.stopSequencer()}>stop</button>
                            : <button onClick={() => this.startSequencer()}>start</button>}

        <h1>Tempo: {this.state.tempo}</h1>

        <button onClick={() => this.upTempo()}>speed</button>
        <br></br>

				<button onClick={() => this.downTempo()}>slow</button>
        <br></br>

        <h2>Set Sequencer To:</h2>
				<button onClick={() => this.updateSequenceCount(4)}>4</button>
				<button onClick={() => this.updateSequenceCount(8)}>8</button>
				<button onClick={() => this.updateSequenceCount(16)}>16</button>

				<h1>click: {this.state.counter}</h1>
        <div className="pad-row">
        <h2>kick:</h2>
            <Row pads={this.state.kick} />
        </div>
        <div className="pad-row">
        <h2>snare:</h2>
            <Row pads={this.state.snare} />
        </div>
        <div className="pad-row">
        <h2>hat:</h2>
            <Row pads={this.state.hat} />
        </div>
			</div>
		);
	}
}
