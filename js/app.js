var Greeting = React.createClass({
        render: function() {
          return (
            <p>Hello, Universe</p>
          )
        }
      });

      ReactDOM.render(
        <Greeting/>,
        document.getElementById('hello_world')
      );

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

var WhatsUp = React.createClass({
        render: function() {
          return (
            <div>
              <Greeting />
              <p>What's up, HACKATHON!</p>
            </div>
          )
        }
      });

      ReactDOM.render(
        <WhatsUp/>,
        document.getElementById('hello_world')
      );