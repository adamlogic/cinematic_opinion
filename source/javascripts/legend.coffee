Chart.positionLegend = ->
  legend = d3.select('.legend')
             .style('top', (Chart.height + Chart.margin.top - Chart.legendHeight) + 'px')
             .style('left', Chart.sidebarPadding + 'px')
             .style('height', Chart.legendHeight + 'px')
             .style('width', Chart.sidebarWidth + 'px')
