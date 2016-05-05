import * as React from 'react';
import Counter from './Counter';
import Sequencer from './sequencer';
import Row from './row'
import Clock from './clock';
import Controls from './controls';


let sequencer = new Sequencer([false], [false], [false]);
let clock = new Clock;

interface IAppProps {
  dispatch?: (func: any) => void;
}

interface IAppState {
	tick: number;
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

		this.state = { tick: clock.tick,
                   kick: sequencer.kick,
                   snare: sequencer.snare,
                   hat: sequencer.hat,
                   tempo: clock.tempo,
                   running: clock.running,
                 };
	}

  componentDidMount(){
    sequencer.updateSequenceCount(4);

    clock.evtChanged.attach((event: string): void => {
      console.log(event);
      this.updateState()
    });
  }

  updateState(){
    this.setState({tick: clock.tick,
                   kick: this.state.kick,
                   snare: this.state.snare,
                   hat: this.state.hat,
                   tempo: clock.tempo,
                   running: clock.running
                 })
  }

  updateSequenceCount(newNumber){
    sequencer.updateSequenceCount(newNumber);

    this.setState({tick: this.state.tick,
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

        <Controls clock={clock} />

        <h2>Set Sequencer To:</h2>
				<button onClick={() => this.updateSequenceCount(4)}>4</button>
				<button onClick={() => this.updateSequenceCount(8)}>8</button>
				<button onClick={() => this.updateSequenceCount(16)}>16</button>

				<h1>click: {this.state.tick}</h1>
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
