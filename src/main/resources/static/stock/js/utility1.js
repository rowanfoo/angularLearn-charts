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
    console.log("START-----getData : ");


    return new Promise(function (resolve, reject) {
        console.log("START-----getData 1 : ");


        $http.get(myurl).then(function (data) {
            // console.log(JSON.stringify(data, null, "    "));

            // console.log("xx : " + data);
            // console.log("xx : " + data.data[0]);
            // console.log("xx : " + data.data[0].date);
            // for (i in data.data) {
            //     // console.log("i : " + i);
            //     // console.log("data : " + data.data[i]);
            //     // console.log("data : " + data.data[i].date);
            //     seriesOptions.push([new Date(data.data[i].date).getTime(), data.data[i].close]);
            // }
            data.data.forEach(function (value) {
                //  console.log('------------value------------ ' + value.date);
                seriesOptions.push([new Date(value.date).getTime(), value.close]);
                volume.push([new Date(value.date).getTime(), value.volume]);

            });


            console.log('------------DONE--getData---------- ');
            // return {
            //     price: seriesOptions,
            //     volume: volume
            // };
            resolve(seriesOptions);
            console.log('-------------RETURN---getData--------- ');


        });
        console.log('-------------DONE---getData--------- ');

        // var a = {
        //     price: seriesOptions,
        //     volume: volume
        // };
        // var a = {
        //     price: [],
        //     volume: []
        // };
        // a.price = seriesOptions;
        // resolve(a);
        // resolve(seriesOptions);

    })


    console.log('-------------RETURN---------- ');

}


// $http.get(myurl).then(function (data) {
//     // console.log(JSON.stringify(data, null, "    "));
//
// data.data.forEach(function (value) {
//     seriesOptions.push([new Date(value.date).getTime(), value.close]);
// })
//     console.log('----------------getData--------- ' + seriesOptions);
//     createChart(seriesOptions);
// });

