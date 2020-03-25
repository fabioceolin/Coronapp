import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.coronapp', // App bundle ID
  name: 'Coronapp', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});


import Chart from 'chart.js';

$$(document).on('page:init', '.page[data-name="barchart"]', function (e) {
    var ctx = $$("#myChart");
    var myChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ['2000', '2001', '2002', '2003', '2004', '2005'],

            datasets: [
                {
                    label: 'Crecimento Populacional',
                    data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806]
                }
            ]
        }
    });
});