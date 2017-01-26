var  React =require('react');
var  Clock =require('Clock');



var Timer = (props)=> {
	return (
			<div className="row">
			<div className="columns medium-6 large-4 small-centered">
			<h1>Timer</h1>
			<Clock totalSeconds={670}/>
			</div>
			</div>
		);
}
module.exports = Timer;