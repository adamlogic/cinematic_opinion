(function() {

  Chart.addYearFilter = function(data, callback) {
    var selectedYears, yearToggles, years;
    years = d3.nest().key(function(d) {
      return d.year;
    }).entries(data).map(function(d) {
      return d.key;
    }).sort();
    yearToggles = d3.select('.year-filter').selectAll('.year-toggle').data(years).enter().append('label').classed('year-toggle', true).text(String);
    selectedYears = d3.set(years);
    return yearToggles.append('input').attr('type', 'checkbox').attr('checked', 'checked').attr('value', String).on('change', function() {
      if (this.checked) {
        selectedYears.add(this.value);
      } else {
        selectedYears.remove(this.value);
      }
      return callback(data.filter(function(d) {
        return selectedYears.has(d.year);
      }));
    });
  };

}).call(this);
