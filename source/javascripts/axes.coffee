addTicks = (chart, scale, selector, transform) ->
  chart.selectAll(selector)
       .data(scale.ticks(10))
       .enter()
       .append('g')
       .attr('transform', transform)

addLines = (ticks, className, start, end) ->
  ticks.append('line')
       .classed(className, true)
       .attr('x1', start[0])
       .attr('y1', start[1])
       .attr('x2', end[0])
       .attr('y2', end[1])

addTickLabels = (ticks, className, x, y) ->
  ticks.append('text')
        .filter((d) -> d > 0 && d < 100 )
        .classed(className, true)
        .text(String)
        .attr('x', x)
        .attr('y', y)

Chart.addXAxis = (chart, scale) ->
  ticks = addTicks chart, scale, '.x-axis', (d) ->
    "translate(#{scale(d)},#{Chart.height})"

  addLines ticks, 'x-tick', [0,0], [0,30]
  addLines ticks, 'x-gridline', [0,-Chart.height], [0,0]
  addTickLabels ticks, 'x-tick-label', 3, 29

Chart.addYAxis = (chart, scale) ->
  ticks = addTicks chart, scale, '.y-axis', (d) ->
    "translate(0, #{scale(d)})"

  addLines ticks, 'y-tick', [-30,0], [0,0]
  addLines ticks, 'y-gridline', [0,0], [Chart.width,0]
  addTickLabels ticks, 'y-tick-label', -29, 16
