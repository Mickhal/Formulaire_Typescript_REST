///<reference path="../lib/angular.d.ts"/>
///<reference path="../lib/angular-route.d.ts"/>
// /<reference path="../lib/restangular.d.ts"/>
///<reference path="../controllers/UserController.ts"/>
var FormulaireSkwarel;
(function (FormulaireSkwarel) {
    function routes($routeProvider) {
        $routeProvider.when('/page1', {
            templateUrl: 'templates/page1.html',
            controller: FormulaireSkwarel.UserController,
            controllerAs: 'userCtrl',
        });
        $routeProvider.when('/page2', {
            templateUrl: 'templates/page2.html',
            controller: 'companyCtrl',
        });
        $routeProvider.when('/page3', {
            templateUrl: 'templates/page3.html'
        });
        $routeProvider.otherwise({
            redirectTo: '#',
        });
    }
    function resource($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }
    angular.module('FormulaireSkwarel', ['ngRoute', 'ngResource', 'restangular'])
        .config(routes)
        .config(resource)
        .config(function (RestangularProvider) {
        //RestangularProvider.setBaseUrl("/localhost:8080");
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
            var extractedData;
            if (operation === "getList") {
                extractedData = data.result;
            }
            else {
                extractedData = data;
            }
            return extractedData;
        });
    })
        .controller('userCtrl', ['$scope', '$http', 'restangular', FormulaireSkwarel.UserController]);
})(FormulaireSkwarel || (FormulaireSkwarel = {}));
//# sourceMappingURL=app.js.map