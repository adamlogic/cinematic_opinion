//= require d3.v3.js

var margin = {top: 20, right: 25, bottom: 100, left: 225},
    width  = 1333 - margin.left - margin.right,
    height = 1211 - margin.top - margin.bottom;

var xScale = d3.scale.linear().range([0, width] ).domain([0, 100]);
var yScale = d3.scale.linear().range([height, 0]).domain([0, 100]);

var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .ticks(5);

var yAxis = d3.svg.axis()
              .scale(yScale)
              .orient('left')
              .ticks(5);

var svg = d3.select('body').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

var dotSize = function(d) {
  if (d.oscar) return 6;
  else if (d.nominee) return 4;
  else return 1.7;
}

svg.append('rect')
   .classed('chart-background', true)
   .attr('width', width)
   .attr('height', height)
   .attr('x', margin.left)
   .attr('y', margin.top);

var chart = svg.append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

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

  chart.append('g')
       .attr('class', 'axis')
       .attr('transform', 'translate(0,' + height + ')')
       .call(xAxis);

  chart.append('g')
       .attr('class', 'axis')
       .call(yAxis);
});
