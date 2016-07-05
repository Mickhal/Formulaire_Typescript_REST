angular.module('demoApp', []);
var Test;
(function (Test) {
    class MainController {
        constructor($scope) {
            this.count = 0;
            this.message = 'yeah';
            this.show = true;
            $scope.vm = this;
            // Demo code
            $scope.show = true;
            $scope.message = 'yeah';
        }
        inc() {
            this.count = this.count + 1;
        }
        dec() {
            this.count = this.count - 1;
        }
    }
    MainController.$inject = ['$scope'];
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map