//= require d3.v3.js

var margin = {top: 30, right: 40, bottom: 100, left: 220},
    width  = 1084 - margin.left - margin.right,
    height = 1084 - margin.top - margin.bottom;

var xScale = d3.scale.linear().range([0, width]);
var yScale = d3.scale.linear().range([height, 0]);

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

svg.append('rect')
   .classed('chart', true)
   .attr('width', width)
   .attr('height', height)
   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var chart = svg.append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.tsv('data.tsv', function(error, data) {
  data.forEach(function(d) {
    d.tomatoScore = +d.tomatoScore;
    d.audienceScore = +d.audienceScore;
  });

  xScale.domain([0, d3.max(data, function(d) { return d.tomatoScore })]);
  yScale.domain([0, d3.max(data, function(d) { return d.audienceScore })]);

  chart.selectAll('.dot')
       .data(data)
       .enter()
       .append('circle')
       .classed('dot', true)
       .attr('cx', function(d) { return xScale(d.tomatoScore) })
       .attr('cy', function(d) { return yScale(d.audienceScore) })
       .attr('r', function(d) { return d.oscar ? 3 : 1 });

  chart.append('g')
       .attr('class', 'axis')
       .attr('transform', 'translate(0,' + height + ')')
       .call(xAxis);

  chart.append('g')
       .attr('class', 'axis')
       .call(yAxis);
});
