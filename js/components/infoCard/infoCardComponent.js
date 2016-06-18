var InfoCardHeader = React.createClass({
	render: function(){
		return (
			<header className="InfoCardHeader">
				<h1>{this.props.infoCardTitle}</h1>
			</header>
		);
	}
});

var InfoCardMain = React.createClass({
	render: function(){
		console.log("InfoCardMain", this.props);
		return (
			<main className="InfoCardMain">
				<InfoCardList
					rowsData = {this.props.infoCardMainData.tableValues}
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
		var valueFormatted = numeral(this.props.value).format('$0,0.00');
    return (
      <li className="InfoCardListRow">
        <p>{this.props.label}</p>
        <p>{valueFormatted}</p>
      </li>
    );
  }
});

var InfoCardNetWorth = React.createClass({
	render: function(){
		console.log("InfoCardNetWorth",this.props.netData);
		var netWorth = numeral(this.props.netData).format('$0,0.00');
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
  	console.log("max");
    return (	
      <section className={'InfoCardComponent ' + this.props.cardData.title.toLowerCase()}>
		<InfoCardHeader 
			infoCardTitle = {this.props.cardData.title}
		/>
		<InfoCardMain 
			infoCardMainData = {this.props.cardData}
		/>
		<InfoCardNetWorth
			netData = {this.props.cardData.netValue}
		/>
		<InfoCardFooter 
			infoCardFooter = {this.props.cardData.footerText}
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
		var cardDOM = [];
		
		console.log('InfoCards');
		console.log(this);

		this.props.cardData.forEach(function(key, value){
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
