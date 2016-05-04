interface Clock {
    tempo: number;
		triggerTick: Function;
}

function setMetro(time, emitInterval) {
	let clock = { tempo: time, triggerTick: emitInterval }
	startMetro(clock)
}

function startMetro(clock: Clock) {
	console.log(clock.tempo)
	let temp = setInterval(() => clock.triggerTick(), clock.tempo)
}

export default setMetro
