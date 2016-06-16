/**
 * @jsx React.DOM
 * https://medium.com/react-tutorials/react-backbone-router-c00be0cf1592#.795v2jm84
 */
 
var FooComponent = React.createClass({
  render : function() {
    return <div>foo</div>;
  }
});
 
var BarComponent = React.createClass({
  render : function() {
    return <div>bar</div>;
  }
});
 
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
    if (this.props.router.current == "foo") {
      return <FooComponent />;
    }
    if (this.props.router.current == "bar") {
      return <BarComponent />;
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
    this.current = "foo";
  },
  goals : function() {
    console.log("We at the goals.");
    this.current = "foo";
  },
  accounts : function() {
    console.log("We at the accounts.");
    this.current = "bar";
  }
});
 
var router = new Router();
 
ReactDOM.render(
  <InterfaceComponent router={router} />,
  document.getElementById('interface')
);
 
Backbone.history.start();