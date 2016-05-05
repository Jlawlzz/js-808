import * as React from 'react';
import Counter from './Counter';
import clock from './clock';

interface IRowProps {
  pads: any;
}

export default class Row extends React.Component<IRowProps, {}> {

  toggleSelect(pad){
    pad.toggleSelected();
  }

  padSequence(){
    return this.props.pads.map(function(pad){
       return pad.active ? getPadOn(pad) : getPadOff(pad);
    });
  }

	public render() {

    let padModules = this.padSequence()

		return (
			<div>
				<h1>{padModules}</h1>
			</div>
		);
	}
}

function getPadOn(pad){
  let selectStatus = pad.selected ? 'selected' : 'un-selected';
  return <div className={"pad on " + pad.selected} classID={pad.type + ' ' + pad.identifier} >
          <h3>{pad.type}+</h3>
          <button onClick={() => pad.toggleSelected()}>toggle</button>
         </div>;
}

function getPadOff(pad){
  let selectStatus = pad.selected ? 'selected' : 'un-selected';
  return <div className={"pad off " + pad.selected} classID={pad.type + ' ' + pad.identifier} >
          <h3>{pad.type}+</h3>
          <button onClick={() => pad.toggleSelected()}>toggle</button>
         </div>;
}
