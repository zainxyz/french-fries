var InfoCardHeader = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Header</h1>
			</header>
		);
	}
});

var InfoCardMain = React.createClass({
	render: function(){
		return (
			<main>
				<InfoCardTable
				/>				
				<InfoCardNet
				/>	
			</main>
		);	

	}
});

var InfoCardTable = React.createClass({
	render: function(){
		return (
			<table>
				tabletownUSA
			</table>	
		);
	}
});

var InfoCardNet = React.createClass({
	render: function(){
		return	(
			<section>Net</section>
		);
	}
});

var InfoCardFooter = React.createClass({
	render: function(){
		return (
			<footer>This is a foot.
			</footer>
		);

	}
});

var InfoCardComponent = React.createClass({
  render: function() {
    return (
      <section>
	<InfoCardHeader />
	<InfoCardMain />
	<InfoCardFooter />
      </section>
      );
  }
});


ReactDOM.render(
	<InfoCardComponent />, document.getElementById('test')
);
