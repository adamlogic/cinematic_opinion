(function() {
  var key;

  key = function(d) {
    return "" + d.film + "-" + d.year + "-" + d.revenue;
  };

  Chart.dotSize = function(d) {
    if (d.oscar) {
      return 6;
    } else if (d.nominee) {
      return 4;
    } else {
      return 1.7;
    }
  };

  Chart.dotClass = function(d) {
    if (d.oscar) {
      return 'dot dot-winner';
    } else if (d.nominee) {
      return 'dot dot-nominee';
    } else {
      return 'dot';
    }
  };

  Chart.addDots = function(svg, data, xScale, yScale) {
    return svg.selectAll('.dot').data(data, key).enter().append('circle').attr('class', Chart.dotClass).attr('cx', function(d) {
      return xScale(d.tomatoScore);
    }).attr('cy', function(d) {
      return yScale(d.audienceScore);
    }).attr('r', Chart.dotSize).on('mouseover', Chart.showInfo).on('touchstart', Chart.showInfo).on('mouseout', Chart.hideInfo).style('opacity', 0).transition().delay(function(d, i) {
      return d.tomatoScore * 10;
    }).style('opacity', 1);
  };

  Chart.removeDots = function(svg, data) {
    return svg.selectAll('.dot').data(data, key).exit().transition().delay(function(d, i) {
      return 1000 - d.tomatoScore * 10;
    }).style('opacity', 0).remove();
  };

}).call(this);
