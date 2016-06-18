var FooterComponent = React.createClass({
	render: function() {
		return (
			<div className="FooterComponent">
				<p>Copyright &copy; 2016 Super Advisor.</p>
				<p>Powered by <a href="//advisorsoftware.com" title="The Team Too Big To Fail!">MMVZ</a></p>
			</div>
		);
	}
});

ReactDOM.render(
	<FooterComponent />, document.getElementById('app_footer')
);
