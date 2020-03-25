import $$ from 'dom7';

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