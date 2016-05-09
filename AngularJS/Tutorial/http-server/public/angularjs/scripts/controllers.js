/**
 * Created by Sumitha on 4/30/2016.
 */
var angularjsApp = angular.module( "angularjsApp", [] );

angularjsApp.controller( "TodoCtrl", [ "$scope", function( $scope ){

    $scope.totalRoots = 4;

    $scope.num = 1;

    $scope.double = function( num ){

        return num * 2;

    };

} ] );

angularjsApp.controller( "SpicyController", [ "$scope", function( $scope ){
    
    $scope.spicy = "very";
    $scope.customize = "Curry";
    
    $scope.chillySpicy = function(){
        
        $scope.spicy = "Chilli";
        
    };
    
    $scope.jalleponoSpicy = function(){

        $scope.spicy = "Jallepono";

    };

    $scope.customizeSpicy = function(){

        $scope.spicy = $scope.customize;

    };
    
} ] );

angularjsApp.factory( "TodoFactory", function(){

    var todos = {};

    todos.query = function(){

        return [
            { name : "Learning AngularJS", done : false },
            { name : "Creating App in Angular JS", done: false }
        ];

    };

    return todos;

} );

angularjsApp.controller( "TodoController", [ "$scope", "TodoFactory", function( $scope, TodoFactory ){
    
    $scope.totalTodos = 4;

    /*$scope.todos = [
        { name : "Learning AngularJS", done : false },
        { name : "Creating App in Angular JS", done: false }
    ];*/

    $scope.todos = TodoFactory.query();

    $scope.getTotalTodos = function(){

        return $scope.todos.length;

    };

    $scope.addTodo = function(){

        $scope.todos.push( { name: $scope.todoText, done: false } );
        $scope.todoText = "";

    };

    $scope.clearAll = function(){

        var newTodos = [];
        for( var i = 0, len = $scope.todos.length; i < len; i++ ){

            if( !$scope.todos[ i ].done ){

                newTodos[ newTodos.length ] = $scope.todos[ i ];

            }

        }

        $scope.todos = newTodos;

    };
    
} ] );
