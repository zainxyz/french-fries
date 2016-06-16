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
var WhatsUp = React.createClass({
  render: function() {
    return (
      <p>What's up, Universe!</p>
      )
  }
});

ReactDOM.render(
  <WhatsUp/>,
  document.getElementById('hello_world')
  );

