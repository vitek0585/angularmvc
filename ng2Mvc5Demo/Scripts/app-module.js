'use strict';

// Define the `phonecatApp` module
angular.module('app', [])
    .controller('test', ['$scope', function (s) {
    console.log("Test");
    s.name = "asda_hello";
    this.name = "Viek";
}])

angular.module('app').component('js',{
  // templateUrl:'ng1/template/content.html',
   templateUrl: '/home/js',
  controller: ['$scope', function(s){
    console.log("JS STest");
s.name = "saad3333";
    }]
});

 //angular.
 //    module('app').
 //  config(['$locationProvider' ,'$routeProvider',
 //    function config($locationProvider, $routeProvider) {
 //      //$locationProvider.hashPrefix('!');

 //      $routeProvider.
 //        when('/phones', {
 //          template: '<phone-list></phone-list>'
 //        }).
 //        when('/phones/:phoneId', {
 //          template: '<phone-detail></phone-detail>'
 //        }).
 //        when('/ng2-demo', {
 //          template: '<ng2-demo></ng2-demo>'
 //        })
 //        .otherwise({
 //          controller: ['$scope',function(s){
 //              s.name = 'Vitek';
 //          }],
 //          template : "<div>Name = {{name}}</div>"});
 //        //.
 //       // otherwise('/phones');
 //    }
 //  ]);

