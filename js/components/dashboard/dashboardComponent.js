var DashboardComponent = React.createClass({
	render: function(){
		return (
			<div className="DashboardComponent">
				<InfoCards cardData={accountsData} /> 
				<GoalChartComponent />
				<GoalOverviewComponent goalsData={GOALS_DATA} />
				<ChartSampleComponent data={CHART_SAMPLE_DATA} />
				<FinancialSnapshotComponent />
			</div>
		);
	}
});
var CHART_SAMPLE_DATA = [15, 22, 32, 41]


var GOALS_DATA = [
	{
		icon: 'cash-revenue',
		goalName: 'Cash Reserve',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'credit-card',
		goalName: 'Credit Card Payoff',
		targetAmount: 5000,
		targetDate: 2020,
		progressToGoal: 80
	},
	{
		icon: 'student-loan',
		goalName: 'Student Loan Payoff',
		targetAmount: 20000,
		targetDate: 2020,
		progressToGoal: 80
	},
	{
		icon: 'home-down-payment',
		goalName: 'Home Down Payment',
		targetAmount: 120000,
		targetDate: 2025,
		progressToGoal: 65
	},
	{
		icon: 'retirement',
		goalName: 'Retirement',
		targetAmount: 75000,
		targetDate: '2046-2075',
		progressToGoal: 25
	},
	{
		icon: 'vacation',
		goalName: 'Vacation',
		targetAmount: 6000,
		targetDate: 2018,
		progressToGoal: 83
	},
];

// var CARD_DATA = [{
//     title: 'Assets',
//     tableValues: [
//         { label: 'B of A Checking & Savings', value: '19500' },
//         { label: 'TD Ameritrade', value: '84000' },
//         { label: 'GWRS 401k', value: '100000' }
//     ],
//     netValue: '203500',
//     footerText: 'what i own'
// }, {
//     title: 'Liabilities',
//     tableValues: [
//         { label: 'Credit Card Debt', value: '5000' },
//         { label: 'Other Loans', value: '20000' }
//     ],
//     netValue: '25000',
//     footerText: 'what i owe'
// },{
//     title: 'Income',
//     tableValues: [
//         { label: 'Akeem\'s Annual Pay', value: '120000' },
//         { label: 'Ingrid\'s Annual Pay', value: '95000' }
//     ],
//     netValue: '215000',
//     footerText: 'what i earn'
// }, {
//     title: 'Expenses',
//     tableValues: [
//         { label: 'Rent', value: '29832' },
//         { label: 'Food & Groceries', value: '12600' },
//         { label: 'Clothing & Shopping', value: '24000' },
//         { label: 'Transportation', value: '8940' },
//         { label: 'Tax & Other', value: '75990' }
//     ],
//     netValue: '151362',
//     footerText: 'how much i spend'
// }];


