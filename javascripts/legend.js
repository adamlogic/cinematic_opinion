(function() {

  Chart.positionLegend = function() {
    return d3.select('.legend').style('top', (Chart.height - Chart.legendHeight) + 'px').style('height', Chart.legendHeight + 'px');
  };

  Chart.addLegendSymbols = function(svg) {
    return d3.select('#legend-overlay svg').attr('height', Chart.height).selectAll('.legend-symbol').data([
      {
        oscar: true
      }, {
        nominee: true
      }, {}
    ]).enter().append('circle').attr('class', Chart.dotClass).attr('cx', 138).attr('cy', function(d, i) {
      return 930 + (23 * i);
    }).attr('r', Chart.dotSize);
  };

}).call(this);
