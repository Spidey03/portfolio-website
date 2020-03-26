Vue.component('donutChart', {
  template: '#donutTemplate',
  props: ["initialValues"],
  data() {
    return {
      angleOffset: 0,
      chartData: [],
      colors: ["#6495ED", "goldenrod", "#cd5c5c", "thistle", "lightgray"],
      cx: 80,
      cy: 80,
      radius: 60,
      sortedValues: [],
      strokeWidth: 30,
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * this.radius
    },
    sortInitialValues() {
      return this.sortedValues = this.initialValues.sort((a, b) => b - a)
    }
  },
  mounted() {
    this.sortInitialValues
  }
})
new Vue({
  el: "#app",
  data() {
    return {
      values: [230, 308, 520, 130, 200]
    }
  },
});
