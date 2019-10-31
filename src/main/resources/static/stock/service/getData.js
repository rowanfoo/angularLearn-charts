function (url) {

    $http.get('http://localhost:8080/').then(function (data) {
        console.log(JSON.stringify(data, null, "    "))
        return data

    });

}


var app = angular.module('myhttp', [])

// app.service('get', function () {
//     this.getuser = function () {
//
//     }
// });


app.controller('usercontroller', ['$scope', function ($scope) {
    console.log("----usercontroller 1---")
    $scope.mymodfunc = function () {
        $http.get('http://localhost:8080/').then(function (data) {
            console.log(JSON.stringify(data, null, "    "))
            return data

        });
    }


}])
