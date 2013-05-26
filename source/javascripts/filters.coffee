Chart.addYearFilter = (data, callback) ->
  years = d3.nest()
            .key((d) -> d.year)
            .entries(data)
            .map((d) -> d.key)
            .sort()

  yearToggles = d3.select('.year-filter')
                  .selectAll('.year-toggle')
                  .data(years)
                  .enter()
                  .append('label')
                  .classed('year-toggle', true)
                  .text(String)

  selectedYears = d3.set(years)

  yearToggles.append('input')
             .attr('type', 'checkbox')
             .attr('checked', 'checked')
             .attr('value', String)
             .on 'change', () ->
               if this.checked
                 selectedYears.add this.value
               else
                 selectedYears.remove this.value

               callback(data.filter (d) -> selectedYears.has(d.year))

