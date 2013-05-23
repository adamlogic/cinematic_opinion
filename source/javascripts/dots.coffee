Chart.dotSize = (d) ->
  if d.oscar then 6
  else if d.nominee then 4
  else 1.7

Chart.dotClass = (d) ->
  if d.oscar then 'dot-winner'
  else if d.nominee then 'dot-nominee'
  else 'dot'

Chart.addDots = (svg, xScale, yScale, data) ->
  svg.selectAll('.dot')
       .data(data)
       .enter()
       .append('circle')
       .attr('class', Chart.dotClass)
       .attr('cx', (d) -> xScale(d.tomatoScore) )
       .attr('cy', (d) -> yScale(d.audienceScore) )
       .attr('r', Chart.dotSize)
