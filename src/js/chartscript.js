import $$ from 'dom7';

import Chart from 'chart.js';

$$(document).on('page:init', '.page[data-name="barchart"]', function (e) {
    var ctx = $$("#myChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["January", "February", "March"],
            datasets: [{
                label: 'Recovereds',
                data: [100, 20, 1],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Infecteds',
                data: [150, 35, 3],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }, {
                label: 'Deaths',
                data: [300, 70, 10],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

export default {};