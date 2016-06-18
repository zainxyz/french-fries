var DashboardComponent = React.createClass({
	getAPIData: function(){
		var bankToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIiOiIifQ.7UbgIJtfQcYA9ZCr63k-Zj1XXYknUAKD0T2ZiHPVkBk"
		var base_url = 'https://bnpparibas-api.openbankproject.com/obp/v2.0.0';
		var relative_url = '/my/banks/obp-bank-x-gh/accounts/asiAccount2/account';
		var parsedData;
		var auth = "DirectLogin token=\""+bankToken +"\"";


		console.log("auth:" + auth);
		$.ajax
		({
  			type: "GET",
  			url: base_url + relative_url,
  			dataType: 'json',
  			async: true,
  			headers: {
    				"Authorization": auth
  			},
  			data: '',
  			success: function (res){
  				console.log(res);
    				//alert('Thanks for your comment!');	
  			}
		});


				
	

	},
	componentDidMount: function(){
		console.log("componentDidMount");
		this.getAPIData();
	},
	render: function(){
		return (
			<div className="DashboardComponent">
				<GoalChartComponent />
				<GoalOverviewComponent goalsData={GOALS_DATA} />
				<ChartSampleComponent data={CHART_SAMPLE_DATA} />
				<FinancialSnapshotComponent />
				<InfoCards cardData={CARD_DATA} /> 
			</div>
		);
	}
});
var CHART_SAMPLE_DATA = [15, 22, 32, 41]


var GOALS_DATA = [
	{
		icon: 'icon',
		goalName: 'Cash Reserve',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'icon',
		goalName: 'Credit Card Payoff',
		targetAmount: 5000,
		targetDate: 2020,
		progressToGoal: 80
	},
	{
		icon: 'icon',
		goalName: 'Student Loan Payoff',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'icon',
		goalName: 'Home Down Payment',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'icon',
		goalName: 'Retirement',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'icon',
		goalName: 'Vacation',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
];

var CARD_DATA = [{
    title: 'Assets',
    tableValues: [
        { label: 'B of A Checking & Savings', value: '19500' },
        { label: 'TD Ameritrade', value: '84000' },
        { label: 'GWRS 401k', value: '100000' }
    ],
    netValue: '203500',
    footerText: 'what i own'
}, {
    title: 'Liabilities',
    tableValues: [
        { label: 'Credit Card Debt', value: '5000' },
        { label: 'Other Loans', value: '20000' }
    ],
    netValue: '25000',
    footerText: 'what i owe'
},{
    title: 'Income',
    tableValues: [
        { label: 'Akeem\'s Annual Pay', value: '120000' },
        { label: 'Ingrid\'s Annual Pay', value: '95000' }
    ],
    netValue: '215000',
    footerText: 'what i earn'
}, {
    title: 'Expenses',
    tableValues: [
        { label: 'Rent', value: '29832' },
        { label: 'Food & Groceries', value: '12600' },
        { label: 'Clothing & Shopping', value: '24000' },
        { label: 'Transportation', value: '8940' },
        { label: 'Tax & Other', value: '75990' }
    ],
    netValue: '151362',
    footerText: 'how much i spend'
}];


