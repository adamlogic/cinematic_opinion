key = (d) ->
  "#{d.film}-#{d.year}-#{d.revenue}"

Chart.dotSize = (d) ->
  if d.oscar then 6
  else if d.nominee then 4
  else 1.7

Chart.dotClass = (d) ->
  if d.oscar then 'dot dot-winner'
  else if d.nominee then 'dot dot-nominee'
  else 'dot'

Chart.addDots = (svg, data, xScale, yScale) ->
  svg.selectAll('.dot')
     .data(data, key)
     .enter()
     .append('circle')
     .attr('class', Chart.dotClass)
     .attr('cx', (d) -> xScale(d.tomatoScore) )
     .attr('cy', (d) -> yScale(d.audienceScore) )
     .attr('r', Chart.dotSize)
     .style('opacity', 0)
     .transition()
     .delay((d, i) -> d.tomatoScore * 10)
     .style('opacity', 1)

Chart.removeDots = (svg, data) ->
  svg.selectAll('.dot')
     .data(data, key)
     .exit()
     .transition()
     .delay((d, i) -> 1000 - d.tomatoScore * 10)
     .style('opacity', 0)
     .remove()
