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
 		if (this.props.router.current == "household") {
 			return <HouseholdComponent />;
 		}
 		if (this.props.router.current == "goals") {
 			return <GoalsComponent />;
 		}
 		if (this.props.router.current == "accounts") {
 			return <AccountsComponent />;
 		}
 		return <div />;
 	}
 });
 
 var Router = Backbone.Router.extend({
 	routes : {
 		"household" : "household",
 		"goals" : "goals",
 		"accounts" : "accounts"
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
 
 ReactDOM.render(
 	<InterfaceComponent router={router} />,
 	document.getElementById('interface')
 	);
 
 Backbone.history.start();