(function() {
  var addLines, addTickLabels, addTicks;

  addTicks = function(chart, scale, selector, transform) {
    return chart.selectAll(selector).data(scale.ticks(10)).enter().append('g').attr('transform', transform);
  };

  addLines = function(ticks, className, start, end) {
    return ticks.append('line').classed(className, true).attr('x1', start[0]).attr('y1', start[1]).attr('x2', end[0]).attr('y2', end[1]);
  };

  addTickLabels = function(ticks, className, x, y) {
    return ticks.append('text').filter(function(d) {
      return d > 0 && d < 100;
    }).classed(className, true).text(String).attr('x', x).attr('y', y);
  };

  Chart.addXAxis = function(chart, scale) {
    var ticks;
    ticks = addTicks(chart, scale, '.x-axis', function(d) {
      return "translate(" + (scale(d)) + "," + Chart.height + ")";
    });
    addLines(ticks, 'x-tick', [0, 0], [0, 30]);
    addLines(ticks, 'x-gridline', [0, -Chart.height], [0, 0]);
    return addTickLabels(ticks, 'x-tick-label', 3, 29);
  };

  Chart.addYAxis = function(chart, scale) {
    var ticks;
    ticks = addTicks(chart, scale, '.y-axis', function(d) {
      return "translate(0, " + (scale(d)) + ")";
    });
    addLines(ticks, 'y-tick', [-30, 0], [0, 0]);
    addLines(ticks, 'y-gridline', [0, 0], [Chart.width, 0]);
    return addTickLabels(ticks, 'y-tick-label', -29, 16);
  };

  Chart.positionAxisLabels = function() {
    return d3.select('.x-axis-label').style('top', Chart.height + 'px');
  };

}).call(this);
