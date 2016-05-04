import * as React from 'react';
import Counter from './Counter';
import clock from './clock';

interface IAppProps {
  dispatch?: (func: any) => void;
}

interface ICounterState {
	counter: number;
}

export default class App extends React.Component<IAppProps, ICounterState> {

	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	onButtonClick(){
		let temp = setInterval(() => this.emitInterval(), 1000);
	}

	emitInterval() {
		console.log('click')
		this.incrementCounter()
	}

	incrementCounter(){
		this.setState({
			counter: this.state.counter + 1
		})
	}



	public render() {
		return (
			<div>
				<button onClick={() => this.onButtonClick()}>start timer</button>
				<h1>click: {this.state.counter}</h1>
			</div>
		);
	}
}
