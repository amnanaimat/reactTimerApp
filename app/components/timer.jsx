var  React =require('react');
var  Clock =require('Clock');



var Timer = (props)=> {
	return (
			
			<div>
			<h1>Timer</h1>
			<Clock totalSeconds={670}/>
			
			</div>
		);
}
module.exports = Timer;