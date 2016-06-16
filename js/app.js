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

var PagesModel = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      completed: false
    },

  });

var Pages = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: PagesModel,

    // Save all of the pages items under the `"pages"` namespace.
    localStorage: new Store('pages-react-backbone'),

  });

var PagesApp = React.createClass({

  // mixins: [BackboneMixin],

  getInitialState: function() {
    return {editing: null};
  },

  componentDidMount: function() {
    console.log("componentDidMount");
    // Additional functionality for todomvc: fetch() the collection on init
    // this.refs.newField.getDOMNode().focus();
  },

  componentDidUpdate: function() {
    console.log("componentDidUpdate");
    // If saving were expensive we'd listen for mutation events on Backbone and
    // do this manually. however, since saving isn't expensive this is an
    // elegant way to keep it reactively up-to-date.
    // this.props.todos.forEach(function(todo) {
    //   todo.save();
    // });
  },

  getBackboneModels: function() {
    console.log("getBackboneModels");
    return [];
  },

  render: function() {
    console.log("render");
    var footer = null;
    var main = null;
    var todoItems = this.props.todos.map(function(todo) {
      return (
        <TodoItem
          key={Math.random()}
          todo={todo}
          onToggle={todo.toggle.bind(todo)}
          onDestroy={todo.destroy.bind(todo)}
          onEdit={this.edit.bind(this, todo)}
          editing={this.state.editing === todo.get('id')}
          onSave={this.save.bind(this, todo)}
        />
      );
    }, this);

  

    return (
      <div>
        Yo.
      </div>
    );
  }
});

ReactDOM.render(
  <PagesApp todos={new Pages()} />, document.getElementById('container')
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

var WhatsUp = React.createClass({

  render: function() {
    return (
    <div>
      <p>{'What' + String.fromCharCode(146) + 's up, Universe!'}</p>
      </div>
    )
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

