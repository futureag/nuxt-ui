<template lang="pug">
.row
  .col-md-12
    div(v-if="$pouch.loading.mvp") Still loading... Relax
    div(v-else)
      .card
        .content
          chart(:options='option', ref="option")
</template>
<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  export default {
    layout: "dashboard",
    components: {
      chart: ECharts
    },
    data() {
        return {
          option: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            title: {
              text: 'Sample data from mock MVP couchDB',
              padding: [
                5,  // up
                5, // right
                5,  // down
                50, // left
             ]
            },
            xAxis: {
              type: 'category',
              data: []
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [],
              type: 'line'
            }],
        }
      }
    },
    pouch: {
      // The simplest usage. queries all documents from the "mvp" pouch database and assigns them to the "mvp" vue property.
      mvp: {}
    },
    created: function() {
      // Send all documents to the remote database, and stream changes in real-time
      this.$pouch.sync('mvp', 'http://localhost:5984/mvp');
    },
    mounted () {
      this.updateChart()
    },
    methods: {
      updateChart() {
        if (this.$pouch.loading.mvp) {
          this.sleep(500).then(() => this.updateChart());
        } else {
          let preparedData = {
            xAxis: {
              type: 'category',
              data: this.mvp.map(x => x.date)
            },
            series: [{
                data: this.mvp.map(x => x.value),
                type: 'line'
            }]
          }
          this.$refs.option.mergeOptions(preparedData)
        }
      },
      sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
    }
  }

</script>
<style lang="scss" scoped>
.echarts {
  min-height: 50rem !important;
  min-width: 100%;
  margin: 0rem 0rem 0rem -4rem;
}
</style>
