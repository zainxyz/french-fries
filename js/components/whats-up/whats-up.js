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