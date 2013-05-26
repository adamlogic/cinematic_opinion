(function() {

  Chart.showInfo = function(selectedData, i) {
    var selectedDot;
    d3.select('.info').transition().duration(100).style('opacity', 1);
    d3.select('.info-film-name').text(function() {
      return selectedData.film;
    });
    d3.select('.info-year').text(function() {
      return selectedData.year;
    });
    d3.select('.info-audience-score').text(function() {
      return selectedData.audienceScore;
    });
    d3.select('.info-tomato-score').text(function() {
      return selectedData.tomatoScore;
    });
    d3.selectAll('.dot-selected').transition().duration(100).style('opacity', 0).remove();
    selectedDot = d3.select(this);
    return d3.select(this.parentNode).insert('circle', ':first-child').attr('cx', selectedDot.attr('cx')).attr('cy', selectedDot.attr('cy')).attr('r', +selectedDot.attr('r') + 3).classed('dot-selected', true);
  };

  Chart.hideInfo = function() {
    d3.select('.info').transition().duration(3000).style('opacity', 0);
    return d3.selectAll('.dot-selected').transition().duration(3000).style('opacity', 0).remove();
  };

}).call(this);
