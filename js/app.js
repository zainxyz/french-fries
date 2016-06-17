var AccountsComponent = React.createClass({
  render: function() {
    return (
      <div>
      <p>What's up, AccountsComponent!</p>
      </div>
      )
  }
});


// dashboard component

// nothing

// nothing

// nothing

var GoalsComponent = React.createClass({
  render: function() {
    return (
      <div>
      <p>What's up, GoalsComponent!</p>
      </div>
      )
  }
});


var HouseholdComponent = React.createClass({
  render: function() {
    return (
      <div>
      	<p>What's up, HouseholdComponenta!</p>
      	<InfoCardComponent />
      	<FilterableProductTable products={PRODUCTS} />
      </div>
      )
  }
});

// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

var InfoCardHeader = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Header</h1>
			</header>
		);
	}
);

var InfoCardMain = React.createClass({
	render: function(){
		return (
			<main>
				<InfoCardTable
				/>				
				<InfoCardNet
				/>	
			</main>
		);	

	}
);

var InfoCardFooter = React.createClass({
	render: function(){
		return (
			<footer>This is a foot.
			</footer>
		);

	}
);

var InfoCardComponent = React.createClass({
  render: function() {
    return (
      <section>
	<InfoCardHeader />
	<InfoCardMain />
	<InfoCardFooter />
      </section>
      )
  }
);


ReactDOM.render(
	<InfoCardComponent />, document.getElementById('test');
);

/**
 * @jsx React.DOM
 * https://medium.com/react-tutorials/react-backbone-router-c00be0cf1592#.795v2jm84
 */

/**
* For communication between two components that don't have a parent-child relationship,
* you can set up your own global event system. 
* Subscribe to events in componentDidMount(), 
* unsubscribe in componentWillUnmount(), and 
* call setState() when you receive an event. 
*/
 
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
 		if (this.props.router.current == "household") {
 			return <HouseholdComponent />;
 		}
 		if (this.props.router.current == "goals") {
 			return <GoalsComponent />;
 		}
 		if (this.props.router.current == "accounts") {
 			return <AccountsComponent />;
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
 		this.current = "household";
 	},
 	goals : function() {
 		console.log("We at the goals.");
 		this.current = "goals";
 	},
 	accounts : function() {
 		console.log("We at the accounts.");
 		this.current = "accounts";
 	}
 });
 
 var router = new Router();
 
 ReactDOM.render(
 	<InterfaceComponent router={router} />,
 	document.getElementById('interface')
 	);
 
 Backbone.history.start();


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

// nothing

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


  
// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />, document.getElementById('product_table')
// );
