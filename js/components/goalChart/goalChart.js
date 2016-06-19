var GoalChartComponent = React.createClass({
	render: function(){
		return (
			<div>
				<p>Goal Chart</p>
			</div>
		);
	}
});

function addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight) {
    var legendWidth = 200,
        legendHeight = 100;

    // clipping to make sure nothing appears behind legend
    svg.append('clipPath')
        .attr('id', 'axes-clip')
        .append('polygon')
        .attr('points', (-margin.left) + ',' + (-margin.top) + ' ' +
            (chartWidth - legendWidth - 1) + ',' + (-margin.top) + ' ' +
            (chartWidth - legendWidth - 1) + ',' + legendHeight + ' ' +
            (chartWidth + margin.right) + ',' + legendHeight + ' ' +
            (chartWidth + margin.right) + ',' + (chartHeight + margin.bottom) + ' ' +
            (-margin.left) + ',' + (chartHeight + margin.bottom));

    var axes = svg.append('g')
        .attr('clip-path', 'url(#axes-clip)');

    axes.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    axes.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Value ($)');

    var legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(' + (chartWidth - legendWidth) + ', 0)');

    legend.append('rect')
        .attr('class', 'legend-bg')
        .attr('width', legendWidth)
        .attr('height', legendHeight);

    legend.append('rect')
        .attr('class', 'outer')
        .attr('width', 75)
        .attr('height', 20)
        .attr('x', 10)
        .attr('y', 10);

    legend.append('text')
        .attr('x', 115)
        .attr('y', 25)
        .text('5% - 95%');

    legend.append('rect')
        .attr('class', 'inner')
        .attr('width', 75)
        .attr('height', 20)
        .attr('x', 10)
        .attr('y', 40);

    legend.append('text')
        .attr('x', 115)
        .attr('y', 55)
        .text('25% - 75%');

    legend.append('path')
        .attr('class', 'median-line')
        .attr('d', 'M10,80L85,80');

    legend.append('text')
        .attr('x', 115)
        .attr('y', 85)
        .text('Median');
}

function drawPaths(svg, data, x, y) {
    var upperOuterArea = d3.svg.area()
        .interpolate('basis')
        .x(function(d) {
            return x(d.date) || 1;
        })
        .y0(function(d) {
            return y(d.pct95);
        })
        .y1(function(d) {
            return y(d.pct75);
        });

    var upperInnerArea = d3.svg.area()
        .interpolate('basis')
        .x(function(d) {
            return x(d.date) || 1;
        })
        .y0(function(d) {
            return y(d.pct75);
        })
        .y1(function(d) {
            return y(d.pct50);
        });

    var medianLine = d3.svg.line()
        .interpolate('basis')
        .x(function(d) {
            return x(d.date);
        })
        .y(function(d) {
            return y(d.pct50);
        });

    var lowerInnerArea = d3.svg.area()
        .interpolate('basis')
        .x(function(d) {
            return x(d.date) || 1;
        })
        .y0(function(d) {
            return y(d.pct50);
        })
        .y1(function(d) {
            return y(d.pct25);
        });

    var lowerOuterArea = d3.svg.area()
        .interpolate('basis')
        .x(function(d) {
            return x(d.date) || 1;
        })
        .y0(function(d) {
            return y(d.pct25);
        })
        .y1(function(d) {
            return y(d.pct05);
        });

    svg.datum(data);

    svg.append('path')
        .attr('class', 'area upper outer')
        .attr('d', upperOuterArea)
        .attr('clip-path', 'url(#rect-clip)');

    svg.append('path')
        .attr('class', 'area lower outer')
        .attr('d', lowerOuterArea)
        .attr('clip-path', 'url(#rect-clip)');

    svg.append('path')
        .attr('class', 'area upper inner')
        .attr('d', upperInnerArea)
        .attr('clip-path', 'url(#rect-clip)');

    svg.append('path')
        .attr('class', 'area lower inner')
        .attr('d', lowerInnerArea)
        .attr('clip-path', 'url(#rect-clip)');

    svg.append('path')
        .attr('class', 'median-line')
        .attr('d', medianLine)
        .attr('clip-path', 'url(#rect-clip)');
}

function addMarker(marker, svg, chartHeight, x) {
    var radius = 32,
        xPos = 30,
        // xPos = x(marker.date) - radius - 3,
        yPosStart = chartHeight - radius - 3,
        yPosEnd = (marker.type === 'Client' ? 80 : 160) + radius - 3;

    console.log("xPos",xPos);

    var markerG = svg.append('g')
        .attr('class', 'marker ' + marker.type.toLowerCase())
        .attr('transform', 'translate(' + xPos + ', ' + yPosStart + ')')
        .attr('opacity', 0);

    markerG.transition()
        .duration(1000)
        .attr('transform', 'translate(' + xPos + ', ' + yPosEnd + ')')
        .attr('opacity', 1);

    markerG.append('path')
        .attr('d', 'M' + radius + ',' + (chartHeight - yPosStart) + 'L' + radius + ',' + (chartHeight - yPosStart))
        .transition()
        .duration(1000)
        .attr('d', 'M' + radius + ',' + (chartHeight - yPosEnd) + 'L' + radius + ',' + (radius * 2));

    markerG.append('circle')
        .attr('class', 'marker-bg')
        .attr('cx', radius)
        .attr('cy', radius)
        .attr('r', radius);

    markerG.append('text')
        .attr('x', radius)
        .attr('y', radius * 0.9)
        .text(marker.type);

    markerG.append('text')
        .attr('x', radius)
        .attr('y', radius * 1.5)
        .text(marker.version);
}

function startTransitions(svg, chartWidth, chartHeight, rectClip, markers, x) {
    rectClip.transition()
        .duration(1000 * markers.length)
        .attr('width', chartWidth);

    markers.forEach(function(marker, i) {
        setTimeout(function() {
            addMarker(marker, svg, chartHeight, x);
        }, 1000 + 500 * i);
    });
}

function makeChart(data, markers) {
    var svgWidth = 960,
        svgHeight = 500,
        margin = {
            top: 20,
            right: 20,
            bottom: 40,
            left: 40
        },
        chartWidth = svgWidth - margin.left - margin.right,
        chartHeight = svgHeight - margin.top - margin.bottom;

    console.log("chartWidth", chartWidth);
    console.log("chartHeight", chartHeight);

    var x = d3.time.scale().range([0, chartWidth])
        .domain(d3.extent(data, function(d) {
            return d.date;
        })),
        y = d3.scale.linear().range([chartHeight, 0])
        .domain([0, d3.max(data, function(d) {
            return d.pct95;
        })]);

    var xAxis = d3.svg.axis().scale(x).orient('bottom')
        .innerTickSize(-chartHeight).outerTickSize(0).tickPadding(10),
        yAxis = d3.svg.axis().scale(y).orient('left')
        .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);

    var svg = d3.select('#goalsChart').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // clipping to start chart hidden and slide it in later
    var rectClip = svg.append('clipPath')
        .attr('id', 'rect-clip')
        .append('rect')
        .attr('width', 0)
        .attr('height', chartHeight);

    addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
    drawPaths(svg, data, x, y);
    startTransitions(svg, chartWidth, chartHeight, rectClip, markers, x);
    //debugger;
}

var parseDate = d3.time.format('%Y-%m-%d').parse;


/*
d3.json(mcsData, function(error, rawData) {
    if (error) {
        console.error("THIS IS HOW TO LOG AN ERROR", error);
        return;
    }

    var data = rawData.map(function(d) {
        return {
            date: parseDate(d.date),
            pct05: d.pct05 / 1000,
            pct25: d.pct25 / 1000,
            pct50: d.pct50 / 1000,
            pct75: d.pct75 / 1000,
            pct95: d.pct95 / 1000
        };
    });

    d3.json(markers, function(error, markerData) {
        if (error) {
            console.error(error);
            return;
        }

        

        makeChart(data, markers);
    });
});
*/

// var markers = markerData.map(function(marker) {
//     return {
//         date: parseDate(marker.date),
//         type: marker.type,
//         version: marker.version
//     };
// });

var markers = [

  {
    "date": "2014-08-06",
    "type": "Client",
    "version": "2.0"
  }

 ];
var mcsData = [{
    "date": "2014-04-01",
    "pct05": 30066.678041886,
    "pct25": 31019.784171473,
    "pct50": 31866.534522082,
    "pct75": 32540.101370382,
    "pct95": 33620.151108653

}, {
    "date": "2014-05-01",
    "pct05": 31753.683528672,
    "pct25": 33251.242646126,
    "pct50": 34241.529541675,
    "pct75": 35406.097074787,
    "pct95": 37236.055992519

}, {
    "date": "2014-06-01",
    "pct05": 33533.264908257,
    "pct25": 35605.199218072,
    "pct50": 37005.60542468,
    "pct75": 38423.912708789,
    "pct95": 40717.423541371

}, {
    "date": "2014-07-01",
    "pct05": 35671.006617891,
    "pct25": 38019.641729938,
    "pct50": 39690.393887289,
    "pct75": 41435.937582983,
    "pct95": 44493.10767699

}, {
    "date": "2014-08-01",
    "pct05": 37859.723909948,
    "pct25": 40416.187271399,
    "pct50": 42362.253350746,
    "pct75": 44688.927963551,
    "pct95": 48218.425073282

}, {
    "date": "2014-09-01",
    "pct05": 40121.326552862,
    "pct25": 43224.373196823,
    "pct50": 45372.400376402,
    "pct75": 47985.973267865,
    "pct95": 52579.164474014
}, {
    "date": "2014-10-01",

    "pct05": 42572.254400698,
    "pct25": 45998.15165303,
    "pct50": 48688.049282057,
    "pct75": 51428.426901638,
    "pct95": 56171.852701789
}, {
    "date": "2014-11-01",

    "pct05": 44755.139953188,
    "pct25": 48820.79843149,
    "pct50": 52099.790307586,
    "pct75": 55270.192748665,
    "pct95": 60200.604148189
}, {
    "date": "2014-12-01",

    "pct05": 47301.539778223,
    "pct25": 51872.568624368,
    "pct50": 55331.428647317,
    "pct75": 58928.176584012,
    "pct95": 64857.487489415
}, {
    "date": "2015-01-01",

    "pct05": 49808.533095018,
    "pct25": 54835.716475477,
    "pct50": 58778.042549265,
    "pct75": 62498.79725663,
    "pct95": 69207.424120888

}, {
    "date": "2015-02-01",
    "pct05": 52237.311730281,
    "pct25": 57871.660530465,
    "pct50": 62225.80307842,
    "pct75": 66709.676387359,
    "pct95": 74425.972149551
}, {
    "date": "2015-03-01",

    "pct05": 55091.298673227,
    "pct25": 61289.158624381,
    "pct50": 66002.848995077,
    "pct75": 70915.07943951,
    "pct95": 78841.430561288
}, {
    "date": "2015-04-01",

    "pct05": 58299.831654041,
    "pct25": 64810.960618646,
    "pct50": 69905.572118161,
    "pct75": 75473.132706596,
    "pct95": 83354.518646711
}, {
    "date": "2015-05-01",

    "pct05": 60838.728599069,
    "pct25": 68105.980233571,
    "pct50": 73833.911714211,
    "pct75": 79413.524831208,
    "pct95": 89026.743746026
}, {
    "date": "2015-06-01",

    "pct05": 63612.700941074,
    "pct25": 71713.276473556,
    "pct50": 77917.519853197,
    "pct75": 84294.279797736,
    "pct95": 94963.301485792
}, {
    "date": "2015-07-01",

    "pct05": 67066.593135839,
    "pct25": 75163.264041378,
    "pct50": 81963.693313485,
    "pct75": 89091.555992047,
    "pct95": 100712.9271749
}, {
    "date": "2015-08-01",

    "pct05": 69681.198331957,
    "pct25": 79198.337781797,
    "pct50": 86475.942609697,
    "pct75": 94053.231729838,
    "pct95": 107177.3964747
}, {
    "date": "2015-09-01",

    "pct05": 73056.50529148,
    "pct25": 83079.376106086,
    "pct50": 90922.456417748,
    "pct75": 99529.857240886,
    "pct95": 113601.94857842
}, {
    "date": "2015-10-01",

    "pct05": 76739.953936645,
    "pct25": 87827.506424912,
    "pct50": 95755.331791747,
    "pct75": 104473.27078948,
    "pct95": 119533.92968669
}, {
    "date": "2015-11-01",

    "pct05": 79185.39240517,
    "pct25": 91397.706944778,
    "pct50": 99871.424106535,
    "pct75": 109503.12073556,
    "pct95": 125671.27988381
}];

var data = mcsData.map(function(d) {
        return {
            date: parseDate(d.date),
            pct05: d.pct05 / 1000,
            pct25: d.pct25 / 1000,
            pct50: d.pct50 / 1000,
            pct75: d.pct75 / 1000,
            pct95: d.pct95 / 1000
        };
    });

makeChart(data, markers);
