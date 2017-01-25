import React from 'react'
var {Link, IndexLink}  = require('react-router');



var Nav = (props) => {
		
		return (
			<div className="top-bar">
			<div className="top-bar-left">
			<ul className="menu">
			<li className="menu-text">Timer App</li>
			<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</IndexLink></li>
			<li><Link to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Count Down</Link></li>
			
			</ul>
			
			</div>
			<div className="top-bar-right">
			<ul className="menu">
			<li className="menu-text">Powered By Amna Naimatullah</li>
			
			</ul>
			</div>
			
			</div>
		);
		
};
	
module.exports = Nav;
			
			
			