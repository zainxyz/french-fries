
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
            <li className={this.props.name.toLowerCase()}>
                <a onClick={this.buttonClick}>{this.props.name}</a>
            </li>
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
            <div className="navbar">
                <a href="#dashboard" className="logo">Super Advisor</a>
                <ul className="nav">{buttons}</ul>
            </div>
        );
    }
});

var buttonArray = [
    {name: 'Dashboard'},
    {name: 'Household'},
    {name: 'Goals'},
    {name: 'Accounts'},
];

ReactDOM.render(
    <NavBar buttons={buttonArray}/>,
    document.getElementById('app_nav')
);
