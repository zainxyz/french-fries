// dashboard component
var DashboardComponent = React.createClass({
	render: function(){
		return (
			<InfoCards cardData={CARD_DATA}/>, document.getElementById('test')
		);
}
});


var CARD_DATA = [{
	title: 'Assets',
	tableValues: [
		{label: 'label 1', value: 'value 1'},
		{label: 'label 2', value: 'value 2'},
		{label: 'label 3', value: 'value 3'},
		{label: 'label 4', value: 'value 4'},
		{label: 'label 5', value: 'value 5'}
	],
	netValue: '$123,456.78',
	footerText: 'Whatever, man.'
},{
	title: 'Assets',
	tableValues: [
		{label: 'label 1', value: 'value 1'},
		{label: 'label 2', value: 'value 2'},
		{label: 'label 3', value: 'value 3'},
		{label: 'label 4', value: 'value 4'},
		{label: 'label 5', value: 'value 5'}
	],
	netValue: '$123,456.78',
	footerText: 'Whatever, man.'
},{
	title: 'Assets',
	tableValues: [
		{label: 'label 1', value: 'value 1'},
		{label: 'label 2', value: 'value 2'},
		{label: 'label 3', value: 'value 3'},
		{label: 'label 4', value: 'value 4'},
		{label: 'label 5', value: 'value 5'}
	],
	netValue: '$123,456.78',
	footerText: 'Whatever, man.'
}];


