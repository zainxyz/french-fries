
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
