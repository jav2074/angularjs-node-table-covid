var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope)
{
    //======================================================================================
    //======================================================================================
    $scope.arrayCirculoQuintas = [
        {'id': 0, 'order': 0, 'name': 'Do'},
        {'id': 1, 'order': 7, 'name': 'Sol'},
        {'id': 2, 'order': 2, 'name': 'Re'},
        {'id': 3, 'order': 9, 'name': 'La'},
        {'id': 4, 'order': 4, 'name': 'Mi'},
        {'id': 5, 'order': 11, 'name': 'Si'},
        {'id': 6, 'order': 6, 'name': 'Fa#'},
        {'id': 7, 'order': 1, 'name': 'Reb'},
        {'id': 8, 'order': 8, 'name': 'Lab'},
        {'id': 9, 'order': 3, 'name': 'Mib'},
        {'id': 10, 'order': 10, 'name': 'Sib'},
        {'id': 11, 'order': 5, 'name': 'Fa'},
    ];
    $scope.selectedEscala = {'id': 0, 'order': 0, 'name': 'Do'};   // default Do
    $scope.selectedMayorMenor = 0;  // 0 = Mayor, -3 = Menor 

    $scope.tabMain = 'Home';
    //--------------------------------------------------------------------------------------
    $scope.changeTabMain = function(tab)
    {
        // debugger;
        $scope.tabMain = tab;
        console.log(tab);
    };
    //--------------------------------------------------------------------------------------
    //======================================================================================
    //======================================================================================
});