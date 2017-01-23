var React = require('react');
var {Link} =  require('react-router');


var Examples = (props)=>{
	return (
		<div>
		  <h1 className="text-center page-title">Example</h1>
		  <p>Shows Some Example of Weather</p>
		  <ol>
		  <li><Link to="/?location=dubai">Dubai, UAE</Link></li>
		  <li><Link to="/?location=berlin">Berlin, Germany</Link></li>
		  </ol>
		 </div>
    )
	
}

module.exports = Examples;
