var NotificationsComponent = React.createClass({
	render: function() {
		return (
			<div className="NotificationsComponent">
				<figure>
					<img src="assets/images/user.png" />
				</figure>
				<h2>{this.props.settings.heading}</h2>
				<p className="sub-heading">{this.props.settings.subHeading}</p>
			</div>
		);
	}
});

var settings = {
	heading: 'Welcome BNP',
	subHeading: 'Let\'s review your goals and see if you\'re ready to change the world!'
};

ReactDOM.render(
    <NotificationsComponent settings={settings}/>,
    document.getElementById('app_notifications')
);