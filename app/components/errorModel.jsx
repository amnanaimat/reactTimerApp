var React = require('react');


var ErrorModel = React.createClass({
	getDefaultProps: function(){
		
		return {
			title: 'Error'
		}
		
	},
	propTypes:{
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount : function(){
		var model = new Foundation.Reveal($("#error-model"));
		model.open();
		
	},
	render : function(){
		var {title,message} = this.props;
		
		return(
		<div id="error-model" className="tiny reveal text-center" data-reveal="">
		<h4>{title}</h4>
		<p>{message}</p>
		<button className="button" data-close="">Okay</button>
		</div>
		
		
		);
		
	}
	
	
});
module.exports = ErrorModel;
