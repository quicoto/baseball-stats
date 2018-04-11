// https://github.com/brockpetrie/vue-moment
import Vue from 'vue';
import VueCharts from 'vue-charts';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueCharts);


var app = new Vue({
  el: '#app',
  data: function (){
    return {
      statsJSON: '/assets/data/stats.json',
      stats: {}
    }
  },
  mounted: function () {
    const self = this

    // Get the resouces data
    fetch(this.statsJSON)
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        self.stats = data.stats;
      })
      .catch(error => console.error(error));
  },
  methods: {

  }
})

