function getData($http, $rootScope, code) {

    var date = new Date();
    var year = date.getFullYear() - 1;
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    // var myurl = $rootScope.config.data + '?code=' + code + "&date=" + year + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
    // var myurl = $rootScope.url+ '?code=' + code + "&date=" + year + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
    var myurl = $rootScope.url
    var seriesOptions = [];
    var volume = [];
    var mydate = [];
    $http.get(myurl).then(function (data) {
        // console.log(JSON.stringify(data, null, "    "));


        for (i in data.data) {

            var mycolor = 'silver';
            if (data.data[i].changepercent < -0.04) {
                mycolor = 'darkred';
            }

            seriesOptions.push(
                {
                    x: new Date(data.data[i].date).getTime(), // the date
                    open: data.data[i].open, // open
                    high: data.data[i].high, // high
                    low: data.data[i].low, // low
                    close: data.data[i].close,// close
                    color: mycolor
                }
            );


            if (data.data[i].changepercent > 0) {
                volume.push({x: new Date(data.data[i].date).getTime(), y: data.data[i].volume, color: 'LIGHTGREEN'});

            } else {
                volume.push({x: new Date(data.data[i].date).getTime(), y: data.data[i].volume, color: '#CC0033'});
            }


        }
        console.log('------------DONE------------ ');

    })
    return {
        data: seriesOptions,
        volume: volume
    };

}




