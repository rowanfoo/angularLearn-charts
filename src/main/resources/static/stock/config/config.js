var serverurl = 'http://rowanfoo.ddns.net:10100/equity';
var wishlisturl = 'http://rowanfoo.ddns.net:10100/wishlistserver';
var algoturl = 'http://rowanfoo.ddns.net:10100/algoserver';


// var serverurl='http://192.168.0.10:9000';
// var wishlisturl='http://192.168.0.10:8045';
// //var algoturl='http://192.168.0.10:8005';
var algoturl = 'http://localhost:8080';


function setconfig($rootScope) {
    console.log('----setconfig-----');

    // $rootScope.config = {
    //     data: serverurl + '/data',
    //     wishlist: wishlisturl,
    //     wishcategorycodes: wishlisturl + '/wishcategorycodes',
    //     wishcategory: wishlisturl + '/wishlistcategorys',
    //     algobycodes: algoturl + '/algobycodes'
    //
    //
    // };

    $rootScope.config = {
        "algourl": algoturl


    };

}

