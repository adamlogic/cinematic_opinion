Chart.positionLegend = ->
  legend = d3.select('.legend')
             .style('top', (Chart.height + Chart.margin.top - Chart.legendHeight) + 'px')
             .style('left', Chart.sidebarPadding + 'px')
             .style('height', Chart.legendHeight + 'px')
             .style('width', Chart.sidebarWidth + 'px')

Chart.addLegendSymbols = (svg) ->
  overlay = d3.select('#overlay')
              .attr('width', Chart.margin.left)
              .attr('height', Chart.height + Chart.margin.top + Chart.margin.bottom)

  overlay.selectAll('.legend-symbol')
         .data([{oscar: true}, {nominee: true}, {}])
         .enter()
         .append('circle')
         .attr('class', Chart.dotClass)
         .attr('cx', 158)
         .attr('cy', (d, i) -> 990 + (23 * i) )
         .attr('r', Chart.dotSize)
