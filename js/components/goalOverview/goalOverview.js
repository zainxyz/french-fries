var GoalOverviewComponent = React.createClass({
	render: function(){
		console.log("GoalOverviewComponent",this.props);
		return (
			<section>
				<GoalOverViewTabs />
				<GoalOverViewTable 
					goalsData = {this.props.goalsData}
				/>
			</section>
		);
	}
});

var GoalOverViewTabs = React.createClass({
	render: function(){
		return (
			<ul>
				<li><a>Goal what if</a></li>
				<li><a>Goal Stress Test</a></li>
			</ul>
		);
	}
});

var GoalOverViewTable = React.createClass({
	render: function(){
		console.log("GoalOverViewTable",this.props);
		return (
			<table>
				<GoalOverviewTableHead />				
				<GoalOverviewTableBody
					goalsData = {this.props.goalsData}
				/>
			</table>
		);
	}
});


var GoalOverviewTableHead = React.createClass({
	render: function(){
		return (
			<thead>
				<tr>
					<th></th>
					<th>Goal Name</th>
					<th>Target Amount</th>
					<th>Target Date</th>
					<th>Probability of Success</th>
					<th></th>
				</tr>
			</thead>
		);
	}
});

var GoalOverviewTableBody = React.createClass({
	render: function(){
		console.log("GoalOverviewTableBody", this.props);
		var rows = [];
		this.props.goalsData.forEach(function(value, key){
			console.log("key", key);
			console.log("value", value);
			rows.push(<GoalOverviewRow goalData={value} key={key}/>);
		});
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
});

var GoalOverviewRow = React.createClass({
	render: function(){
		console.log("GoalOverviewRow", this.props.goalData);
		return (
			<tr>
				<td>{this.props.goalData.icon}</td>
				<td>{this.props.goalData.goalName}</td>
				<td>{this.props.goalData.targetAmount}</td>
				<td>{this.props.goalData.targetDate}</td>
				<td>{this.props.goalData.progressToGoal}%</td>
				<td>edit delete</td>
			</tr>
		)
	}
});

// var GOALS_DATA = [
// 	{
// 		icon: 'icon',
// 		goalName: 'Cash Reserve',
// 		targetAmount: 20000,
// 		targetDate: 2016,
// 		progressToGoal: 100
// 	},
// 	{
// 		icon: 'icon',
// 		goalName: 'Credit Card Payoff',
// 		targetAmount: 5000,
// 		targetDate: 2020,
// 		progressToGoal: 80
// 	}
// ];