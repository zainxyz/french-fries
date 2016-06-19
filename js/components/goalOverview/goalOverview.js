var GoalOverviewComponent = React.createClass({
	render: function(){
		// console.log("GoalOverviewComponent",this.props);
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
			<ul className="GoalOverViewTabs">
				<li className="current"><a>Goal what if</a></li>
				<li><a>Goal Stress Test</a></li>
			</ul>
		);
	}
});

var GoalOverViewTable = React.createClass({
	render: function(){
		// console.log("GoalOverViewTable",this.props);
		return (
			<section className="GoalOverViewTable">
				<table>
					<GoalOverviewTableHead />				
					<GoalOverviewTableBody
						goalsData = {this.props.goalsData}
					/>
				</table>
			</section>
		);
	}
});


var GoalOverviewTableHead = React.createClass({
	render: function(){
		return (
			<thead className="GoalOverviewTableHead">
				<tr>
					<th className="icon"></th>
					<th className="goal-name">Goal Name</th>
					<th className="target-amount">Target Amount</th>
					<th className="target-date">Target Date</th>
					<th className="progress-to-goal">Probability of Success</th>
					<th className="edit"></th>
					<th className="delete"></th>
				</tr>
			</thead>
		);
	}
});

var GoalOverviewTableBody = React.createClass({
	render: function(){
		// console.log("GoalOverviewTableBody", this.props);
		var rows = [];
		this.props.goalsData.forEach(function(value, key){
			// console.log("key", key);
			// console.log("value", value);
			rows.push(<GoalOverviewRow goalData={value} key={key}/>);
		});
		return (
			<tbody className="GoalOverviewTableBody">
				{rows}
			</tbody>
		);
	}
});

var GoalOverviewRow = React.createClass({
	render: function(){
		// console.log("GoalOverviewRow", this.props.goalData);
		var targetAmount = numeral(this.props.goalData.targetAmount).format('$0,0.00');
		return (
			<tr className="GoalOverviewRow">
				<td className="icon"><i className={'ico-' + this.props.goalData.icon}></i></td>
				<td className="goal-name">{this.props.goalData.goalName}</td>
				<td className="target-amount">{targetAmount}</td>
				<td className="target-date">{this.props.goalData.targetDate}</td>
				<td className="progress-to-goal">{this.props.goalData.progressToGoal}%</td>
				<td className="edit"><a><i className="ico-edit"></i></a></td>
				<td className="delete"><a><i className="ico-trash-can"></i></a></td>
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