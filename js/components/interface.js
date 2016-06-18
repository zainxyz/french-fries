/**
 * @jsx React.DOM
 * https://medium.com/react-tutorials/react-backbone-router-c00be0cf1592#.795v2jm84
 */

/**
* For communication between two components that don't have a parent-child relationship,
* you can set up your own global event system. 
* Subscribe to events in componentDidMount(), 
* unsubscribe in componentWillUnmount(), and 
* call setState() when you receive an event. 
*/

var accountsData = [];
var dataloaded = $.Deferred();


function getAPIData(api, data, verb){

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

}


function loadData () {

	var ldPromise = $.Deferred();

	console.log("componentDidMount");
	var promise = getAPIData('/accounts','','GET');
	// var promise = this.getAPIData('/accounts/asiAccount2/account','','GET');
    var self = this;

	$.when(promise).done( function(data) {
		// console.log(data);	
		// accounts.push(data);
		// console.log(accounts);
		// accounts = data;
		var typeInc = 0;
		var types = ['Assets','Liabilities','Income','Expenses'];
		$.each(data,function(index,value){
			var promise2 = getAPIData('/accounts/' +  value.id + '/account','','GET');
			$.when(promise2).done( function(data) {
				// debugger;

               



                typeInc++;

				if(typeInc <= 4){
                	data.type = types[typeInc - 1];

					accountsData.push(data);
				}
				else {
					ldPromise.resolve();
					return false;
				}

				console.log(accountsData);
				// console.log(mother.accounts);

			}).fail(function(response) { 
				console.log(response);
				ldPromise.reject();
    		});
			// accounts.push()
		});

	}).fail(function(response) { 
		console.log(response);
		ldPromise.reject();
    });
	
	return ldPromise;
}

 var InterfaceComponent = React.createClass({
 	componentWillMount : function() {
 		this.callback = (function() {
 			this.forceUpdate();
 		}).bind(this);

 		this.props.router.on("route", this.callback);
 	},
 	componentWillUnmount : function() {
 		this.props.router.off("route", this.callback);
 	},
 	render : function() {

 	   var self = this;

       		// debugger;
			if (self.props.router.current == "dashboard"){
				return <DashboardComponent />;
			}
	 		if (self.props.router.current == "household") {
	 			return <HouseholdComponent />;
	 		}
	 		if (self.props.router.current == "goals") {
	 			return <GoalsComponent />;
	 		}
	 		if (self.props.router.current == "accounts") {
	 			return <AccountsComponent />;
	 		}
	 		return <div />;
 		
 	}
 });
 
 var Router = Backbone.Router.extend({
 	routes : {
 		"household" : "household",
 		"goals" : "goals",
 		"accounts" : "accounts",
 		"*404" : "dashboard"
 	},
 	dashboard : function() {
 		console.log("We at the dashboard.");
 		this.current = "dashboard";
 	},
 	household : function() {
 		console.log("We at the household.");
 		this.current = "household";
 	},
 	goals : function() {
 		console.log("We at the goals.");
 		this.current = "goals";
 	},
 	accounts : function() {
 		console.log("We at the accounts.");
 		this.current = "accounts";
 	}
 });
 
var router = new Router();
 
function main() {
	$.when(loadData()).done( function() {
	 ReactDOM.render(
 		<InterfaceComponent router={router} />,
 		document.getElementById('app_content')
 		);
		Backbone.history.start();
	});
}

main(); 
