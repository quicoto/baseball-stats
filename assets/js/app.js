// https://github.com/brockpetrie/vue-moment
import Vue from 'vue';
import VueCharts from 'vue-charts';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueCharts);

const appDOMId = `app`

// Get the JSON url
const statsApp = document.getElementById(appDOMId)

var app = new Vue({
  el: `#${appDOMId}`,
  data: function (){
    return {
      statsJSON: statsApp.dataset.url,
      stats: {}
    }
  },
  computed: {
    age: function() { // birthday is a date
        var ageDifMs = Date.now() - new Date(1993, 12, 26).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
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

