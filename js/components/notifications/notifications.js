var AppNotifications = React.createClass({
	render: function() {
		return (
			<div className="AppNotifications">
				<figure>
					<img src="assets/images/user.png" />
				</figure>
				<h2>{this.props.notifySettings.heading}</h2>
				<p className="sub-heading">{this.props.notifySettings.subHeading}</p>
			</div>
		);
	}
});

var notifySettings = {
	heading: 'Welcome BNP',
	subHeading: 'Let\'s review your goals and see if you\'re ready to change the world!'
};

ReactDOM.render(
    <AppNotifications notifySettings={notifySettings}/>,
    document.getElementById('app_notifications')
);