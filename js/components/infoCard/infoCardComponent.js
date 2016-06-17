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
		console.log("InfoCardMain", this.props);
		return (
			<main>
				<InfoCardTable
					rowsData = {this.props.infoCardMainData.tableValues}
				/>				
				<InfoCardNet
					netData = {this.props.infoCardMainData.netValue}
				/>	
			</main>
		);	

	}
});

var InfoCardTable = React.createClass({
	render: function(){
		console.log("InfoCardTable", this.props);
		var rows = [];
		this.props.rowsData.forEach(function(key){
			rows.push(<InfoCardTableRow label={key.label} key={key.label}/>);
		});
		return (
			<table>
				<tbody>{rows}</tbody>
			</table>	
		);
	}
});

var InfoCardTableRow = React.createClass({
	render: function() {
    return (
      <tr>
        <td>{this.props.label}</td>
        <td>{this.props.value}</td>
      </tr>
    );
  }
});

var InfoCardNet = React.createClass({
	render: function(){
		console.log("InfoCardNet",this.props.netData);
		return	(
			<section>{this.props.netData}</section>
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
  	console.log("max");
    return (	
      <section>
		<InfoCardHeader 
			infoCardTitle = {this.props.cardData.title}
		/>
		<InfoCardMain 
			infoCardMainData = {this.props.cardData}
		/>
		<InfoCardFooter 
			infoCardFooter = {this.props.cardData.footerText}
		/>
      </section>
      );
  }
});


var InfoCards = React.createClass({
	render: function(){
		var cardDOM = [];
		console.log(this);

		this.props.cardData.forEach(function(key){
			cardDOM.push(<InfoCardComponent cardData={key} />);
			
		});
		console.log("cardDom",cardDOM);
		return (
			<div>{cardDOM}</div>
		);
	}
})


var CARD_DATA = [{
	title: 'Assets',
	tableValues: [
	  {label: 'label 1', value: 'value 1'},
	  {label: 'label 2', value: 'value 2'},
	  {label: 'label 3', value: 'value 3'},
	],
	netValue : '$203,500.00',
	footerText : 'What I Own'
},{
	title: 'Liabilities',
	tableValues: [
	  {label: 'CC', value: 'value 1'},
	  {label: 'label 2', value: 'value 2'},
	  {label: 'label 3', value: 'value 3'},
	],
	netValue : '$203,500.00',
	footerText : 'What I Owe'
}
]

var TABLE_VALUES = [
  {label: 'label 1', value: 'value 1'},
  {label: 'label 2', value: 'value 2'},
  {label: 'label 3', value: 'value 3'},
];


ReactDOM.render(
	<InfoCards cardData={CARD_DATA}/>, document.getElementById('test')
);
