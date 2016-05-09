import * as React from 'react';
import Counter from './Counter';

interface IClockControlsProps {
  clock?: any;
  updateState?: any;
}

export default class ClockControls extends React.Component<IClockControlsProps, {}> {

  toggleClock(action: string){
      if (action === 'start'){
        this.props.clock.startMetro()
      } else if (action === 'stop') {
        this.props.clock.stopMetro()
      }
    this.props.updateState();
  }

  adjustTempo(action: string){
      if (action === 'up'){
        this.props.clock.upTempo()
      } else if (action === 'down') {
        this.props.clock.downTempo()
      }
    this.props.updateState();
  }

	public render() {

		return (
			<div>

        {this.props.clock.running ? <button onClick={() => this.toggleClock('stop')}>stop</button>
                                  : <button onClick={() => this.toggleClock('start')}>start</button>}

        <h1>Tempo: {this.props.clock.tempo}</h1>

        <button onClick={() => this.props.clock.upTempo()}>speed</button>
        <br></br>

				<button onClick={() => this.props.clock.downTempo()}>slow</button>
        <br></br>

			</div>
		);
	}
}
