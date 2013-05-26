Chart.positionLegend = ->
  d3.select('.legend')
    .style('top', (Chart.height - Chart.legendHeight) + 'px')
    .style('height', Chart.legendHeight + 'px')

Chart.addLegendSymbols = (svg) ->
  d3.select('#legend-overlay svg')
    .attr('height', Chart.height)
    .selectAll('.legend-symbol')
    .data([{oscar: true}, {nominee: true}, {}])
    .enter()
    .append('circle')
    .attr('class', Chart.dotClass)
    .attr('cx', 138)
    .attr('cy', (d, i) -> 930 + (23 * i) )
    .attr('r', Chart.dotSize)
