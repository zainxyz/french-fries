var InfoCardHeader = React.createClass({

	render: function(){
		console.log('this from InfoCardHeader');
		console.log(this);
		return (
			<header className="InfoCardHeader">
				<h1>{this.props.infoCardTitle.type}</h1>
			</header>
		);
	}
});

var InfoCardMain = React.createClass({
	render: function(){
		var rowsData = [];
		rowsData.push(
        	{ label: this.props.infoCardMainData.id, value: this.props.infoCardMainData.balance.amount },
		)
		console.log("InfoCardMain", this.props);
		console.log('balance', this.props.infoCardMainData.balance.amount);
		return (

			<main className="InfoCardMain">
				<InfoCardList
					rowsData = {rowsData}
				/>					
			</main>
		);	

	}
});

var InfoCardList = React.createClass({
	render: function(){
		console.log("InfoCardList", this.props);
		var rows = [];
		this.props.rowsData.forEach(function(key, value, obj){
			rows.push(<InfoCardListRow label={key.label} value={key.value} key={key.label.toLowerCase().replace(' ', '')} />);
		});
		return (
			<ul className="InfoCardList">{rows}</ul>
		);
	}
});

var InfoCardListRow = React.createClass({
	render: function() {
		// var valueFormatted = numeral(this.props.value).format('$0,0.00');
    return (
      <li className="InfoCardListRow">
        <p>{this.props.label}</p>
        <p>{this.props.value}</p>
      </li>
    );
  }
});


var InfoCardNetWorth = React.createClass({
	render: function(){
		console.log("InfoCardNetWorth",this.props.netData);
		var netWorth = numeral(this.props.netData.amount).format('$0,0.00');
		return	(
			<div className="InfoCardNetWorth">
				<p>{netWorth}</p>
			</div>
		);
	}
});

var InfoCardFooter = React.createClass({
	render: function(){
		return (
			<footer className="InfoCardFooter">{this.props.infoCardFooter}</footer>
		);

	}
});


var InfoCardComponent = React.createClass({
  render: function() {
  	var footerText;
  	console.log("infoCardComponent", this.props);
  	switch (this.props.cardData.type) {
  		case 'Assets':
  			footerText = "what i own";
  			break;
  		case 'Liabilities':
  			footerText = "what i owe"
  			break;
  		case 'Income':
  			footerText = "what i earn"
  			break;
  		case 'Expenses':
  			footerText = "how much i spend"
  			break;
  		default:
  			footerText = "my info cards"
  			break;
  	}
    return (	
      <section className={"InfoCardComponent " + this.props.cardData.type.toLowerCase()}>
		<InfoCardHeader 
			infoCardTitle = {this.props.cardData}
		/>
		<InfoCardMain 
			infoCardMainData = {this.props.cardData}
		/>
		<InfoCardNetWorth
			netData = {this.props.cardData.balance}
		/>
		<InfoCardFooter 
			infoCardFooter = {footerText}
		/>
      </section>
      );
  }
});


var InfoCards = React.createClass({
	componentDidMount: function() {
		// Set all cards to same height :)
		var singleCard = $('.InfoCards > .InfoCardComponent');
		singleCard.height("auto");
			var maxHeight = Math.max.apply(null, singleCard.map(function() {
    		return $(this).height();
		}).get());
		console.log('maxHeight of all questions : ' + maxHeight);
		singleCard.height(maxHeight);
	},
	render: function(){
		var cardDOM = [],
			self = this;
		// debugger;
		console.log('InfoCards');
		console.log(self);
		console.log(self.props);
		console.log("self.props.cardData");
		console.log(self.props.cardData);

		// debugger;
		self.props.cardData.forEach(function(key, value){
			console.log('key from infoCards', key);
			console.log('value from infoCards', value);
			cardDOM.push(<InfoCardComponent cardData={key} key={value} />);
		});

		console.log("cardDom",cardDOM);
		
		return (
			<section className="InfoCards">{cardDOM}</section>
		);
	}
})


// var CARD_DATA = [{
// 	title: 'Assets',
// 	tableValues: [
// 	  {label: 'label 1', value: 'value 1'},
// 	  {label: 'label 2', value: 'value 2'},
// 	  {label: 'label 3', value: 'value 3'},
// 	],
// 	netValue : '$203,500.00',
// 	footerText : 'What I Own'
// },{
// 	title: 'Liabilities',
// 	tableValues: [
// 	  {label: 'CC', value: 'value 1'},
// 	  {label: 'label 2', value: 'value 2'},
// 	  {label: 'label 3', value: 'value 3'},
// 	],
// 	netValue : '$203,500.00',
// 	footerText : 'What I Owe'
// }
// ]

// var TABLE_VALUES = [
//   {label: 'label 1', value: 'value 1'},
//   {label: 'label 2', value: 'value 2'},
//   {label: 'label 3', value: 'value 3'},
// ];


// ReactDOM.render(
// 	<InfoCards cardData={CARD_DATA}/>, document.getElementById('test')
// );

// var singleCard = $('.InfoCards > .InfoCardComponent');
// singleCard.height("auto");
// var maxHeight = Math.max.apply(null, singleCard.map(function() {
//     return $(this).height();
// }).get());

// console.log('maxHeight of all questions : ' + maxHeight);

// singleCard.height(maxHeight);
