import * as React from 'react';
import Counter from './Counter';

interface IControlsProps {
  clock?: any;
}

export default class Controls extends React.Component<IControlsProps, {}> {

	public render() {

		return (
			<div>

        {this.props.clock.running ? <button onClick={() => this.props.clock.stopMetro()}>stop</button>
                            : <button onClick={() => this.props.clock.startMetro()}>start</button>}

        <h1>Tempo: {this.props.clock.tempo}</h1>

        <button onClick={() => this.props.clock.upTempo()}>speed</button>
        <br></br>

				<button onClick={() => this.props.clock.downTempo()}>slow</button>
        <br></br>

			</div>
		);
	}
}
