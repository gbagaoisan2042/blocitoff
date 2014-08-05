var lists = [

     { name: 'Simple to do list', daysLeft: '5', complete: false, todoItems: [{name: 'item 1', daysLeft: '2', complete: false}, {name: 'item 2', daysLeft: '1', complete: true}]},
     { name: 'Hey yo this is it', daysLeft: '5', complete: true, todoItems: [{name: 'item 3', daysLeft: '2', complete: true}, {name: 'item 4', daysLeft: '1', complete: true}]},
     { name: 'Project B', daysLeft: '5', complete: false},
     { name: 'Project C', daysLeft: '3', complete: false},
     { name: 'Project D', daysLeft: '2', complete: false}

];


 blocItOff = angular.module('blocitoff', ['ui.router']);

 blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/list_view.html'
   });


   $stateProvider.state('newlist', {
     url: '/newlist',
     controller: 'Newlist.controller',
     templateUrl: '/templates/new_list.html'
   });

   $stateProvider.state('todolist', {
     url: '/todolist',
     controller: 'Todolist.controller',
     templateUrl: '/templates/todo_list.html'
   });

   $stateProvider.state('about', {
     url: '/about',
     controller: 'About.controller',
     templateUrl: '/templates/about.html'
   });


  }]);

  blocItOff.controller('Landing.controller', ['$scope', function($scope) {

   $scope.lists =  lists;

  }]);

  blocItOff.controller('Todolist.controller', ['$scope', function($scope) {

   $scope.listItems =  lists[0];

  }]);


  blocItOff.controller('Newlist.controller', ['$scope', function($scope) {

  }]);


 blocItOff.controller('About.controller', ['$scope', function($scope) {


  }]);
