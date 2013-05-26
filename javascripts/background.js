(function() {

  Chart.addChartBackground = function(svg) {
    return svg.append('image').attr('width', Chart.width).attr('height', Chart.height).attr('x', Chart.margin.left).attr('y', 0).attr('xlink:href', '/images/chart_background.png');
  };

}).call(this);
