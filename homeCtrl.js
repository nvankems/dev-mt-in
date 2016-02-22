angular.module('devMtIn')
.controller('homeCtrl', function($scope) {
   $scope.myProfile = {friends: [{name: 'Eric'}, {name: 'Erika'}, {name: 'Kristi'}]};
    $scope.sortOptions = [{
        display: 'Ascending',
        value: false
    },
        {
            display: 'Descending',
            value: true
        }
    ];
});