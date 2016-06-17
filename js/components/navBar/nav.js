
var NavButton = React.createClass({
  buttonClick: function(){
    console.log("this.props.name");
    console.log(this.props.name.toLowerCase());
    
    var hash = this.props.name.toLowerCase();

    // Backbone.history.start();
    Backbone.history.navigate(hash,true);
  },
  render: function(){
    return (
      <button className={this.props.name} onClick={this.buttonClick}>{this.props.name}</button>
      );
  }
});

var NavBar = React.createClass({
  render:function(){
    var buttons = [];
    this.props.buttons.forEach(function(key,value,obj){
      buttons.push(<NavButton name={key.name} key={key.name}/>);

  });
    return (
      <div>{buttons}</div>
      );
  }
});

var buttonArray = [
  {name: 'Household'},
  {name: 'Goals'},
  {name: 'Accounts'},
];

ReactDOM.render(
  <NavBar buttons={buttonArray}/>,
  document.getElementById('nav_bar')
);
