$(function() {
  $('.min-chart#chart-sales').easyPieChart({
    barColor: "#4caf50",
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
});

$(function() {
  // instantiate the plugin
  // update
  $('.chart').data('easyPieChart').update(40);
  // disable animation
  $('.chart').data('easyPieChart').disableAnimation();
  // enable animation
  $('.chart').data('easyPieChart').enableAnimation();
});
