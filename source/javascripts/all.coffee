#= require vendor/d3.v3.js
#= require chart_base
#= require background
#= require axes
#= require legend
#= require filters
#= require dots

xScale = d3.scale.linear().range([0, Chart.width] ).domain [0, 100]
yScale = d3.scale.linear().range([Chart.height, 0]).domain [0, 100]

svg = d3.select('#chart')
        .attr('width', Chart.width + Chart.margin.left + Chart.margin.right)
        .attr('height', Chart.height + Chart.margin.top + Chart.margin.bottom)

Chart.addChartBackground svg

svgChart = svg.append('g')
              .attr('transform', "translate(#{Chart.margin.left},#{Chart.margin.top})")

d3.tsv 'data.tsv', (error, data) ->
  data.forEach (d) ->
    d.tomatoScore = +d.tomatoScore
    d.audienceScore = +d.audienceScore
  data = data.filter (d) -> d.tomatoScore != 0 && d.audienceScore != 0
  Chart.addDots svgChart, data, xScale, yScale
  Chart.addYearFilter data, (data) ->
    Chart.removeDots svgChart, data
    Chart.addDots svgChart, data, xScale, yScale

Chart.addXAxis svgChart, xScale
Chart.addYAxis svgChart, yScale
Chart.positionLegend()
Chart.addLegendSymbols()
