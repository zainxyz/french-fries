var accountsData = [];
var DashboardComponent = React.createClass({


	getAPIData: function(api, data, verb){

		var bankToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIiOiIifQ.7UbgIJtfQcYA9ZCr63k-Zj1XXYknUAKD0T2ZiHPVkBk"
		var base_url = 'https://bnpparibas-api.openbankproject.com/obp/v2.0.0//my/banks/obp-bank-x-gh';
		var parsedData;
		var auth = "DirectLogin token=\""+bankToken +"\"";


		console.log("auth:" + auth);

		var thisRequest = $.Deferred();

		var promise = $.ajax
		({
  			type: verb,
  			url: base_url + api,
  			dataType: 'json',
  			async: true,
  			headers: {
    				"Authorization": auth
  			},
  			data: data,
  			timeout : 75000
		});

		promise.done( function(data, textStatus, jqXHR) {
			thisRequest.resolve(data);
		});

		promise.fail(function(response, status, error) {
			thisRequest.reject(response,status,error);
		});

		return thisRequest;

	},

	componentDidMount: function(){

		console.log("componentDidMount");
		var promise = this.getAPIData('/accounts','','GET');
		// var promise = this.getAPIData('/accounts/asiAccount2/account','','GET');
        var mother = this;
		var accounts = [];
		$.when(promise).done( function(data) {
			// console.log(data);	
			// accounts.push(data);
			// console.log(accounts);
			// accounts = data;
			var typeInc = 0;
			var types = ['Assets','Liabilities','Income','Expenses'];

			$.each(data,function(index,value){

				var promise2 = mother.getAPIData('/accounts/' +  value.id + '/account','','GET');


				$.when(promise2).done( function(data) {
					// debugger;

                   



                    typeInc++;

					if(typeInc <= 4){
                    	data.type = types[typeInc - 1];

						accountsData.push(data);
					}




					console.log(accountsData);
					// console.log(mother.accounts);

				}).fail(function(response) { 
					console.log(response);
        		});
				// accounts.push()
			});
		}).fail(function(response) { 
			console.log(response);
        });



	},
	render: function(){
		return (
			<div className="DashboardComponent">
				<GoalChartComponent />
				<GoalOverviewComponent goalsData={GOALS_DATA} />
				<ChartSampleComponent data={CHART_SAMPLE_DATA} />
				<FinancialSnapshotComponent />
				<InfoCards cardData={accountsData} /> 
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
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'home-down-payment',
		goalName: 'Home Down Payment',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'retirement',
		goalName: 'Retirement',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
	},
	{
		icon: 'vacation',
		goalName: 'Vacation',
		targetAmount: 20000,
		targetDate: 2016,
		progressToGoal: 100
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


