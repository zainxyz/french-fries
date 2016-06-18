var ChartSampleComponent = React.createClass({
  shouldComponentUpdate: function() {
    return false
  },
  componentDidMount: function() {
    var x = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, 420]);
    
    d3.select(this.refs.chart)
      .selectAll("div")
      .data(this.props.data)
      .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
  },
  render: function() {
    return (
      <div ref="chart" className="chart"></div>
    );
  }
});

