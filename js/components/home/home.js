
var NavButton = React.createClass({
  render: function(){
    return (
      <button className={this.props.buttonName}>{this.props.buttonName}</button>
    );
  }
});

var NavBar = React.createClass({
  render:function(){
    var buttons = [];
    this.props.buttons.forEach(function(key,value,obj){
      buttons.push(<NavButton buttonName={key.buttonName} key={key.buttonName}/>);

    });
    return (
      <div>{buttons}</div>
    );
  }
});

var buttonArray = [
  {buttonName: 'Home'},
  {buttonName: 'About'},
  {buttonName: 'Zaaaaaaaain'},
  ];

ReactDOM.render(
  <NavBar buttons={buttonArray}/>,
  document.getElementById('hello_world')
);
