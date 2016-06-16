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