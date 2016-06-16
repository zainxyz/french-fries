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