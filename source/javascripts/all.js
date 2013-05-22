//= require d3.v3.js

var margin = {top: 20, right: 25, bottom: 100, left: 225},
    width  = 1250 - margin.left - margin.right,
    height = 1124 - margin.top - margin.bottom;

var xScale = d3.scale.linear().range([0, width] ).domain([0, 100]);
var yScale = d3.scale.linear().range([height, 0]).domain([0, 100]);

var svg = d3.select('body').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

var dotSize = function(d) {
  if (d.oscar) return 6;
  else if (d.nominee) return 4;
  else return 1.7;
}

svg.append('image')
   .attr('width', width)
   .attr('height', height)
   .attr('x', margin.left)
   .attr('y', margin.top)
   .attr('xlink:href', '/images/chart_background.png');

var chart = svg.append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var xTicks = chart.selectAll('.x-axis')
                  .data(xScale.ticks(10))
                  .enter()
                  .append('g')
                  .attr('transform', function(d) { return 'translate(' + xScale(d) + ',' + height + ')' })

xTicks.append('line')
      .classed('x-tick', true)
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', 30);

xTicks.append('line')
      .classed('x-gridline', true)
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', -height)
      .attr('y2', 0);

var yTicks = chart.selectAll('.y-axis')
                  .data(yScale.ticks(10))
                  .enter()
                  .append('g')
                  .attr('transform', function(d) { return 'translate(0,' + yScale(d) + ')' })

yTicks.append('line')
      .classed('y-tick', true)
      .attr('x1', -30)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', 0);

yTicks.append('line')
      .classed('y-gridline', true)
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', 0)
      .attr('y2', 0);

d3.tsv('data.tsv', function(error, data) {
  data.forEach(function(d) {
    d.tomatoScore = +d.tomatoScore;
    d.audienceScore = +d.audienceScore;
  });

  chart.selectAll('.dot')
       .data(data)
       .enter()
       .append('circle')
       .classed('dot', true)
       .classed('dot-nominee', function(d) { return d.nominee })
       .classed('dot-winner', function(d) { return d.oscar })
       .attr('cx', function(d) { return xScale(d.tomatoScore) })
       .attr('cy', function(d) { return yScale(d.audienceScore) })
       .attr('r', dotSize);
});
