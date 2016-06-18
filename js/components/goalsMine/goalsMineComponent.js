var GoalsMineComponent = React.createClass({
	render: function() {
		console.log("GoalsMineComponent goals");
		console.log(this.props.goals);
		return (
			<div className="GoalsMineComponent">
				<p>Whats up, GoalsMineComponent!</p>
			</div>
		)
	}
});

