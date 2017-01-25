import React from 'react'
import Nav from 'Nav';


var Main = (props)=> {
	return (
			<div>
			<Nav />
			
			{props.children}
		
			</div>
		);
}
module.exports = Main;