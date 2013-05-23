Chart.addChartBackground = (svg) ->
  svg.append('image')
     .attr('width', Chart.width)
     .attr('height', Chart.height)
     .attr('x', Chart.margin.left)
     .attr('y', Chart.margin.top)
     .attr('xlink:href', '/images/chart_background.png')
