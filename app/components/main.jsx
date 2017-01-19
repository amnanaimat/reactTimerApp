import React from 'react'
import Nav from 'Nav'


var Main = (props)=> {
	return (
			<div>
			
			<Nav />
			<h1>Main Component</h1>
			{props.children}
			</div>
		);
}
module.exports = Main;