dotSize = (d) ->
  if d.oscar then 6
  else if d.nominee then 4
  else 1.7

dotClass = (d) ->
  if d.oscar then 'dot-winner'
  else if d.nominee then 'dot-nominee'
  else 'dot'

Chart.addDots = (svg, xScale, yScale) ->
  d3.tsv 'data.tsv', (error, data) ->
    data.forEach (d) ->
      d.tomatoScore = +d.tomatoScore
      d.audienceScore = +d.audienceScore

    svg.selectAll('.dot')
         .data(data)
         .enter()
         .append('circle')
         .attr('class', dotClass)
         .attr('cx', (d) -> xScale(d.tomatoScore) )
         .attr('cy', (d) -> yScale(d.audienceScore) )
         .attr('r', dotSize)

Chart.addLegendSymbols = (svg) ->
  svg.selectAll('.legend-symbol')
     .data([{oscar: true}, {nominee: true}, {}])
     .enter()
     .append('circle')
     .attr('class', dotClass)
     .attr('cx', 158)
     .attr('cy', (d, i) -> 950 + (23 * i) )
     .attr('r', dotSize)
