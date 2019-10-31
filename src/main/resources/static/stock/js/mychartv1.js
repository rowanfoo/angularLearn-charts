var seriesCounter = 0;
var chart;
var date = new Date();


/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart(name, data) {

    // create the chart
    // chart = new  Highcharts.StockChart('container', {
    chart = new Highcharts.StockChart(name, {

        chart: {
            width: 1100,
            height: 808
        },


        legend: {
            align: 'right',
            enabled: false
        },

        xAxis: {
            min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
            max: new Date().getTime() //get actual time
        },
        yAxis: [{

            title: {
                text: 'OHLC'
            },
            top: 100,
            height: 550,

        },
            // {
            //     labels: {
            //         align: 'right',
            //         x: -1
            //     },
            //     title: {
            //         text: 'Volume'
            //     },
            //     top: 600,
            //     height: 100,
            //
            //     lineWidth: 2
            // }
        ],


        rangeSelector: {
            enabled: false
        },

        navigator: {
            enabled: false
        },

        tooltip: {
            split: true
        },

        series: [{
            type: 'ohlc',
            name: 'AAPL',
            id: 'aapl',
            data: data.data
        },
            // {
            //     type: 'sma',
            //     name: 'sma50',
            //     linkedTo: 'aapl',
            //     color: 'Aqua',
            //     params: {
            //         period: 50
            //     }
            // },

            // {
            //     type: 'column',
            //     name: 'Volume',
            //     id: 'volume',
            //     data: data.volume,
            //     color: 'grey',
            //     yAxis: 1
            // },

        ]
    });
};


function chartfunc(data) {

    console.log('------------CREATE CHART------------ ');
    createChart('container', data);
    console.log('------------CREATE CHART DONE------------ ');

    // chart.series.forEach(function (ser) {
    //     ser.update({
    //         dataGrouping: {
    //             units: [['day', [1]]],
    //             groupPixelWidth: 10
    //         }
    //     }, false);
    // });


    chart.redraw();

}

