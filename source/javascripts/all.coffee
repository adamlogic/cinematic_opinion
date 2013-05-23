#= require vendor/d3.v3.js
#= require chart_base
#= require background
#= require axes
#= require legend
#= require dots

xScale = d3.scale.linear().range([0, Chart.width] ).domain [0, 100]
yScale = d3.scale.linear().range([Chart.height, 0]).domain [0, 100]

svg = d3.select('body').append('svg')
        .attr('width', Chart.width + Chart.margin.left + Chart.margin.right)
        .attr('height', Chart.height + Chart.margin.top + Chart.margin.bottom)

Chart.addChartBackground svg

svgChart = svg.append('g')
              .attr('transform', "translate(#{Chart.margin.left},#{Chart.margin.top})")

Chart.addXAxis svgChart, xScale
Chart.addYAxis svgChart, yScale
Chart.positionLegend()
Chart.addLegendSymbols svg
Chart.addDots svgChart, xScale, yScale
