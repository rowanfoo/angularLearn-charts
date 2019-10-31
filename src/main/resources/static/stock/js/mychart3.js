var seriesCounter = 0;
var chart;
var date = new Date();


function createChart(name, data) {

    chart = new Highcharts.StockChart(name, {

        chart: {
            width: 1200,
            height: 600
        },


        legend: {
            enabled: false
        },

        xAxis: {
            min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
            max: new Date().getTime() //get actual time
        },

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
            id: 'aapl',
            data: data,

            dataGrouping: {
                enabled: true,
                units: [['month', [1]]]

            }

        },
            {
                type: 'sma',
                name: 'sma50',
                linkedTo: 'aapl',

                params: {
                    period: 50
                }
            },
            {
                type: 'sma',
                name: 'sma20',
                linkedTo: 'aapl',

                params: {
                    period: 20
                }
            }


        ]
    });

}